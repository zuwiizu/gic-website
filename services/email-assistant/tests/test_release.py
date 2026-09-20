import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch
import sys
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from worker import Worker
from core import Store
from test_core import mail,OWNER,parse_mail

class ReleaseTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory();self.worker=Worker.__new__(Worker)
        self.worker.store=Store(Path(self.tmp.name)/'state.sqlite3')
        req=self.worker.store.receive(parse_mail(mail(),OWNER,verify=lambda _:True))
        self.req=self.worker.store.update(req['id'],state='approved',draft_sha='approved',approved_sha='approved',base_sha='base',workspace=self.tmp.name)
    def tearDown(self):self.worker.store.close();self.tmp.cleanup()
    def test_failed_preview_uses_stronger_recovery_before_operator(self):
        req=self.worker.store.update(self.req['id'],state='awaiting-preview',attempts=1,initial_model='gpt-5.6-luna')
        self.worker.handle_error(req,RuntimeError('render overflow'))
        recovered=self.worker.store.get(req['id'])
        self.assertEqual(recovered['state'],'received')
        self.assertEqual(recovered['attempts'],2)
        self.assertIsNone(recovered['approved_sha'])
        self.assertIsNone(recovered['draft_sha'])
    @patch('worker.command')
    def test_mismatched_approval_never_touches_remote(self,command):
        with self.assertRaises(RuntimeError):self.worker.publish({**self.req,'approved_sha':'different'})
        command.assert_not_called()
    @patch('worker.command',return_value='newer\trefs/heads/main')
    def test_changed_base_requires_new_preview(self,command):
        self.worker.publish(self.req)
        self.assertEqual(self.worker.store.get(self.req['id'])['state'],'received')
        self.assertIsNone(self.worker.store.get(self.req['id'])['approved_sha'])
        self.assertEqual(command.call_count,1)
    @patch('worker.command',return_value='approved\trefs/heads/main')
    def test_lost_push_response_reconciles_without_second_push(self,command):
        self.worker.deployments=lambda:[]
        self.worker.publish({**self.req,'state':'publishing'})
        self.assertEqual(command.call_count,1)
    @patch('worker.command',return_value='newer\trefs/heads/main')
    def test_undo_cannot_destroy_newer_work(self,command):
        self.worker.rollback(self.req,'undo')
        self.assertEqual(self.worker.store.get(self.req['id'])['state'],'escalated')
        self.assertEqual(command.call_count,1)
    @patch('worker.command',side_effect=['base\trefs/heads/main',TimeoutError('unknown push')])
    def test_push_timeout_keeps_reconcilable_state(self,command):
        with self.assertRaises(TimeoutError):self.worker.publish(self.req)
        self.assertEqual(self.worker.store.get(self.req['id'])['state'],'publishing')
        self.worker.handle_error(self.worker.store.get(self.req['id']),TimeoutError('unknown push'))
        self.assertEqual(self.worker.store.get(self.req['id'])['state'],'publishing')

if __name__=='__main__':unittest.main()
