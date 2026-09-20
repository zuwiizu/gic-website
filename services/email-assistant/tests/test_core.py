import email.policy
import sqlite3
import tempfile
import unittest
from email.message import EmailMessage
from pathlib import Path
import sys
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from core import Store, parse_mail, apply_replacements, approval_intent

OWNER = 'iwarsame8@gmail.com'

def mail(text='Add an event', sender=OWNER, mid='<one@gmail.com>', refs=None):
    m = EmailMessage(policy=email.policy.SMTP)
    m['From'] = sender
    m['To'] = 'updates@globalinsightscollective.com'
    m['Message-ID'] = mid
    m['Subject'] = 'Website update'
    if refs: m['In-Reply-To'] = refs
    m.set_content(text)
    return m.as_bytes()

class CoreTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.store = Store(Path(self.tmp.name)/'state.sqlite3')
    def tearDown(self):
        self.store.close()
        self.tmp.cleanup()
    def test_clarification_reply_retains_the_question_context(self):
        req=self.store.receive(parse_mail(mail('Make the heading bright pink'),OWNER,verify=lambda _:True))
        question='May I use the existing accent and heading style instead?'
        self.store.update(req['id'],state='needs-information',pending_question=question)
        mid=self.store.queue(req['id'],'question',question)
        updated=self.store.receive(parse_mail(mail('Yes, use that',mid='<answer@gmail.com>',refs=mid),OWNER,verify=lambda _:True))
        self.assertIn(question,updated['text'])
        self.assertIn('Yes, use that',updated['text'])
        self.assertEqual(updated['state'],'received')
        self.assertIsNone(updated['approved_sha'])
        self.assertNotIn('pending_question',updated)
    def test_authentication_is_mandatory(self):
        with self.assertRaises(ValueError): parse_mail(mail(), OWNER, verify=lambda _:False)
    def test_unapproved_sender_rejected(self):
        with self.assertRaises(ValueError): parse_mail(mail(sender='other@gmail.com'), OWNER, verify=lambda _:True)
    def test_duplicate_request_survives_restart(self):
        parsed=parse_mail(mail(),OWNER,verify=lambda _:True)
        first=self.store.receive(parsed)
        self.store.close()
        self.store=Store(Path(self.tmp.name)/'state.sqlite3')
        self.assertEqual(self.store.receive(parsed), None)
        self.assertEqual(len(self.store.requests()),1)
    def test_quoted_publish_is_not_approval(self):
        self.assertNotEqual(approval_intent('Please change the time.\n\n> Publish'), 'publish')
        self.assertNotEqual(approval_intent('> Publish'),'publish')
        self.assertEqual(approval_intent('Publish'),'publish')
    def test_approval_requires_current_preview_reference(self):
        req=self.store.receive(parse_mail(mail(),OWNER,verify=lambda _:True))
        self.store.update(req['id'],state='awaiting-approval',draft_sha='abc',preview_message_id='<current@globalinsightscollective.com>')
        self.store.receive(parse_mail(mail('Publish',mid='<two@gmail.com>',refs='<old@globalinsightscollective.com>'),OWNER,verify=lambda _:True))
        self.assertEqual(self.store.get(req['id'])['state'],'awaiting-approval')
    def test_current_preview_can_be_approved(self):
        req=self.store.receive(parse_mail(mail(),OWNER,verify=lambda _:True))
        self.store.update(req['id'],state='awaiting-approval',draft_sha='abc',preview_message_id='<current@globalinsightscollective.com>')
        self.store.queue(req['id'],'preview','Review',message_id='<current@globalinsightscollective.com>')
        self.store.receive(parse_mail(mail('Publish',mid='<two@gmail.com>',refs='<current@globalinsightscollective.com>'),OWNER,verify=lambda _:True))
        got=self.store.get(req['id'])
        self.assertEqual(got['state'],'approved')
        self.assertEqual(got['approved_sha'],'abc')
    def test_revision_clears_approval(self):
        req=self.store.receive(parse_mail(mail(),OWNER,verify=lambda _:True))
        self.store.update(req['id'],state='awaiting-approval',draft_sha='abc',preview_message_id='<current@globalinsightscollective.com>')
        self.store.queue(req['id'],'preview','Review',message_id='<current@globalinsightscollective.com>')
        self.store.receive(parse_mail(mail('Change the date',mid='<two@gmail.com>',refs='<current@globalinsightscollective.com>'),OWNER,verify=lambda _:True))
        self.assertIsNone(self.store.get(req['id'])['approved_sha'])
        self.assertEqual(self.store.get(req['id'])['state'],'received')
    def test_duplicate_outbox_key(self):
        req=self.store.receive(parse_mail(mail(),OWNER,verify=lambda _:True))
        self.store.queue(req['id'],'ack','Accepted')
        self.store.queue(req['id'],'ack','Accepted')
        self.assertEqual(len(self.store.outbox()),1)
    def test_path_escape_and_noncontent_edits_rejected(self):
        for path in ['../secret','package.json','app/__root.tsx']:
            with self.assertRaises(ValueError):
                apply_replacements(Path(self.tmp.name),[{'path':path,'old':'x','new':'y'}])
    def test_replacement_requires_unique_old_text(self):
        p=Path(self.tmp.name)/'app/about/page.tsx';p.parent.mkdir(parents=True);p.write_text('hello hello')
        with self.assertRaises(ValueError):apply_replacements(Path(self.tmp.name),[{'path':'app/about/page.tsx','old':'hello','new':'world'}])
    def test_attachment_cannot_execute(self):
        m=EmailMessage(policy=email.policy.SMTP)
        m['From']=OWNER;m['To']='updates@globalinsightscollective.com';m['Message-ID']='<attachment@gmail.com>'
        m.set_content('Add this');m.add_attachment(b'echo bad',maintype='application',subtype='x-sh',filename='run.sh')
        with self.assertRaises(ValueError):parse_mail(m.as_bytes(),OWNER,verify=lambda _:True)
    def test_cancel_preserves_inflight_publication(self):
        req=self.store.receive(parse_mail(mail(),OWNER,verify=lambda _:True))
        self.store.update(req['id'],state='publishing',draft_sha='abc',approved_sha='abc')
        self.store.queue(req['id'],'preview','Review',message_id='<current@globalinsightscollective.com>')
        self.store.receive(parse_mail(mail('Cancel',mid='<cancel@gmail.com>',refs='<current@globalinsightscollective.com>'),OWNER,verify=lambda _:True))
        current=self.store.get(req['id'])
        self.assertEqual(current['state'],'publishing')
        self.assertEqual(current['pending_action'],'undo')
    def test_revision_clears_obsolete_draft(self):
        req=self.store.receive(parse_mail(mail(),OWNER,verify=lambda _:True))
        self.store.update(req['id'],state='awaiting-approval',draft_sha='abc')
        self.store.queue(req['id'],'preview','Review',message_id='<current@globalinsightscollective.com>')
        self.store.receive(parse_mail(mail('Change this',mid='<new@gmail.com>',refs='<current@globalinsightscollective.com>'),OWNER,verify=lambda _:True))
        self.assertIsNone(self.store.get(req['id']).get('draft_sha'))

if __name__ == '__main__': unittest.main()
