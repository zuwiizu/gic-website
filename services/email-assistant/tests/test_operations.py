import json
import sqlite3
import tempfile
import unittest
from pathlib import Path
from unittest.mock import Mock,patch
import sys
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from core import Store
from maintenance import maintain
from worker import Worker
from test_core import mail,OWNER,parse_mail

class OperationTests(unittest.TestCase):
    @patch('worker.model_call',return_value={'action':'clarify','summary':'What is the exact event date?','replacements':[]})
    @patch('worker.choose_model',return_value=('gpt-5.6-luna',{'usage':{'cost':0}}))
    @patch('worker.attachment_context',return_value=([],[]))
    @patch('worker.command',return_value='base-sha')
    def test_owner_question_pauses_without_changes_or_publish(self,command,attachments,choose,model):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);(root/'app').mkdir(parents=True)
            page=root/'app/page.tsx';page.write_text('export default function Home(){return <h1>Hello</h1>}')
            (root/'app/globals.css').write_text('body {color: #222;}')
            worker=Worker.__new__(Worker);worker.state=root;worker.store=Store(root/'state.sqlite3')
            worker.clone=Mock(return_value=root)
            req=worker.store.receive(parse_mail(mail('Add my event next Friday'),OWNER,verify=lambda _:True))
            worker.prepare(req)
            self.assertEqual(worker.store.get(req['id'])['state'],'needs-information')
            self.assertIsNone(worker.store.get(req['id'])['approved_sha'])
            self.assertEqual(command.call_count,1)  # Only reads the source base; no build or push.
            self.assertIn('Hello',page.read_text())
            self.assertEqual(worker.store.outbox()[0]['kind'],'question')
            worker.store.close()
        import worker as module
        module.DEADLINE=None

    def test_backup_can_restore_request_and_dedup_state(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);store=Store(root/'state.sqlite3')
            incoming=parse_mail(mail(),OWNER,verify=lambda _:True);req=store.receive(incoming)
            maintain(store,root,Mock())
            restored=Store(next((root/'backups').glob('*.sqlite3')))
            self.assertEqual(restored.get(req['id'])['text'],req['text'])
            self.assertIsNone(restored.receive(incoming))
            restored.close();store.close()
    @patch('requests.get')
    def test_live_content_must_match_preview(self,get):
        worker=Worker.__new__(Worker);req={'changed':['app/page.tsx']}
        get.return_value=Mock(status_code=200,text='<html><body>Approved content</body></html>')
        expected=worker.verify_pages('https://example.com',req)
        get.return_value=Mock(status_code=200,text='<html><body>Old content</body></html>')
        with self.assertRaisesRegex(RuntimeError,'does not match'):
            worker.verify_pages('https://example.com',req,expected)
    @patch('requests.get')
    def test_dynamic_script_does_not_change_visible_fingerprint(self,get):
        worker=Worker.__new__(Worker);req={'changed':['app/page.tsx']}
        get.return_value=Mock(status_code=200,text='<html><body>Approved content<script>one</script></body></html>')
        expected=worker.verify_pages('https://example.com',req)
        get.return_value=Mock(status_code=200,text='<html><body>Approved content<script>two</script></body></html>')
        worker.verify_pages('https://example.com',req,expected)
if __name__=='__main__':unittest.main()
