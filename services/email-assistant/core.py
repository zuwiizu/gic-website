"""Private email workflow state. No model can authorize publication."""
import email.policy
import hashlib
import json
import re
import sqlite3
import time
import uuid
from email.parser import BytesParser
from email.utils import getaddresses
from pathlib import Path

MAX_MESSAGE = 10 * 1024 * 1024
ALLOWED_ATTACHMENTS = {'image/png', 'image/jpeg', 'image/webp', 'application/pdf', 'text/plain'}

def verify_gmail_dkim(raw):
    import dkim
    msg=BytesParser(policy=email.policy.default).parsebytes(raw)
    # Ignore untrusted Authentication-Results headers; verify original signed bytes.
    signatures=msg.get_all('DKIM-Signature', [])
    verifier=dkim.DKIM(raw)
    for idx, value in enumerate(signatures):
        fields={k.strip().lower():v.strip() for k,v in
                (part.split('=',1) for part in str(value).split(';') if '=' in part)}
        if fields.get('d','').lower() != 'gmail.com' or 'l' in fields:
            continue
        if 'from' not in fields.get('h','').lower().split(':'):continue
        if verifier.verify(idx=idx):return True
    return False

def approval_intent(text):
    from email_reply_parser import EmailReplyParser
    authored=EmailReplyParser.parse_reply(text).strip()
    if re.fullmatch(r'(publish|approve|approved|yes,? publish)[.!\s]*', authored, re.I):return 'publish'
    if re.fullmatch(r'(cancel|stop)[.!\s]*',authored,re.I):return 'cancel'
    if re.fullmatch(r'(unsubscribe|stop reminders)[.!\s]*',authored,re.I):return 'opt-out'
    if re.fullmatch(r'(undo|undo that)[.!\s]*',authored,re.I):return 'undo'
    return 'revise' if authored else 'empty'

class OwnerInputError(ValueError):
    def __init__(self,reason,message):super().__init__(reason);self.message=message

def parse_mail(raw, owner, verify=verify_gmail_dkim):
    if not raw or len(raw)>MAX_MESSAGE:raise ValueError('Message exceeds the 10 MB limit')
    m=BytesParser(policy=email.policy.default).parsebytes(raw)
    senders=getaddresses(m.get_all('From',[]))
    if len(senders)!=1 or senders[0][1].lower()!=owner.lower():raise ValueError('Unapproved sender')
    if m.get_all('Resent-From') or m.get_all('Resent-Sender'):raise ValueError('Resent messages cannot authorize updates')
    if str(m.get('Auto-Submitted','no')).lower()!='no':raise ValueError('Automatic reply ignored')
    if not verify(raw):raise ValueError('Owner DKIM signature verification failed')
    if len(m.get_all('Message-ID',[]))!=1:raise ValueError('A unique Message-ID is required')
    mid=str(m['Message-ID']).strip()
    if not re.fullmatch(r'<[^<>\s]{1,200}>',mid):raise ValueError('Invalid Message-ID')
    references=re.findall(r'<[^<>\s]+>',str(m.get('References',''))+' '+str(m.get('In-Reply-To','')))
    envelope={'message_id':mid,'sender':owner,'subject':str(m.get('Subject','Website update'))[:200],
              'text':'Please clarify this request','references':references[-100:],'attachments':[],
              'raw_digest':hashlib.sha256(raw).hexdigest()}
    parts=[];attachments=[]
    for part in m.walk():
        if part.is_multipart():continue
        typ=part.get_content_type()
        payload=part.get_payload(decode=True) or b''
        if part.get_filename() or part.get_content_disposition()=='attachment':
            if typ not in ALLOWED_ATTACHMENTS:raise OwnerInputError('Unsupported attachment; use PNG, JPEG, WebP, PDF or text',envelope)
            if len(payload)>5*1024*1024:raise OwnerInputError('Attachment exceeds 5 MB',envelope)
            attachments.append({'name':Path(part.get_filename() or 'attachment').name,'type':typ,'data':payload})
        elif typ=='text/plain':parts.append(payload.decode(part.get_content_charset() or 'utf-8',errors='replace'))
    text='\n'.join(parts).strip()
    if not text:raise OwnerInputError('Please include a plain-text description of the update',envelope)
    if len(text)>40000:raise OwnerInputError('Request text exceeds 40,000 characters',envelope)
    references=re.findall(r'<[^<>\s]+>',str(m.get('References',''))+' '+str(m.get('In-Reply-To','')))
    return {'message_id':mid,'sender':owner,'subject':str(m.get('Subject','Website update'))[:200],
            'text':text,'references':references[-100:],'attachments':attachments,
            'raw_digest':hashlib.sha256(raw).hexdigest()}

class Store:
    def __init__(self,path):
        self.db=sqlite3.connect(path)
        self.db.row_factory=sqlite3.Row
        self.db.execute('PRAGMA journal_mode=WAL')
        self.db.executescript('''
          CREATE TABLE IF NOT EXISTS requests(id TEXT PRIMARY KEY,state TEXT NOT NULL,data TEXT NOT NULL);
          CREATE TABLE IF NOT EXISTS inbound(message_id TEXT PRIMARY KEY,digest TEXT NOT NULL,request_id TEXT);
          CREATE TABLE IF NOT EXISTS outbox(key TEXT PRIMARY KEY,request_id TEXT,kind TEXT,message_id TEXT UNIQUE,data TEXT,status TEXT);
          CREATE TABLE IF NOT EXISTS settings(key TEXT PRIMARY KEY,value TEXT);
          CREATE TABLE IF NOT EXISTS events(id INTEGER PRIMARY KEY,request_id TEXT,at REAL,data TEXT);
        ''')
    def close(self):self.db.close()
    def get(self,rid):
        row=self.db.execute('SELECT data FROM requests WHERE id=?',(rid,)).fetchone()
        return json.loads(row['data']) if row else None
    def requests(self,states=None):
        rows=[json.loads(r['data']) for r in self.db.execute('SELECT data FROM requests ORDER BY rowid')]
        return [r for r in rows if not states or r['state'] in states]
    def update(self,rid,**values):
        data=self.get(rid)
        if not data:raise ValueError('Unknown request')
        data.update(values);data['updated_at']=time.time()
        with self.db:
            self.db.execute('UPDATE requests SET state=?,data=? WHERE id=?',(data['state'],json.dumps(data),rid))
            self.db.execute('INSERT INTO events(request_id,at,data) VALUES(?,?,?)',(rid,time.time(),json.dumps(values)))
        return data
    def queue(self,rid,kind,text,message_id=None,to=None):
        req=self.get(rid)
        version=str(req.get('revision',0))+':'+str(req.get('draft_sha') or '')
        key=f'{rid}:{kind}:{version}'
        mid=message_id or f'<{hashlib.sha256(key.encode()).hexdigest()[:32]}@globalinsightscollective.com>'
        data={'to':to or req['sender'],'subject':req['subject'] if kind=='welcome' else 'Re: '+req['subject'],'text':text,
              'message_id':mid,'in_reply_to':req['last_message_id'],'key':key}
        self.db.execute('INSERT OR IGNORE INTO outbox VALUES(?,?,?,?,?,?)',(key,rid,kind,mid,json.dumps(data),'pending'))
        self.db.commit()
        return mid
    def outbox(self):
        return [dict(r) for r in self.db.execute("SELECT * FROM outbox WHERE status='pending'")]
    def sent(self,key):
        with self.db:self.db.execute("UPDATE outbox SET status='submitted' WHERE key=?",(key,))
    def receive(self,message):
        if self.db.execute('SELECT 1 FROM inbound WHERE message_id=?',(message['message_id'],)).fetchone():return None
        req=None
        for ref in reversed(message['references']):
            row=self.db.execute('SELECT request_id FROM outbox WHERE message_id=?',(ref,)).fetchone()
            if row:
                req=self.get(row['request_id']);break
        if req and req['sender']!=message['sender']:raise ValueError('Conversation sender mismatch')
        with self.db:
            if not req:
                req={'id':uuid.uuid4().hex,'state':'received','sender':message['sender'],
                     'subject':message['subject'],'text':message['text'],'last_message_id':message['message_id'],
                     'created_at':time.time(),'updated_at':time.time(),'revision':0,'approved_sha':None,'attempts':0}
                self.db.execute('INSERT INTO requests VALUES(?,?,?)',(req['id'],req['state'],json.dumps(req)))
            else:
                intent=approval_intent(message['text'])
                current=req.get('preview_message_id') in message['references']
                if req['state'] in {'publishing','rolling-back'} and intent not in {'publish','empty','opt-out'}:
                    req['pending_action']='undo' if intent in {'cancel','undo'} else 'revise'
                    req['pending_text']=message['text']
                elif intent=='publish':
                    if req['state']=='awaiting-approval' and current and req.get('draft_sha'):
                        req.update(state='approved',approved_sha=req['draft_sha'],approved_at=time.time())
                    else:
                        # Keep existing approval state unchanged; stale replies never publish.
                        req['last_notice']='Please reply Publish to the latest preview email.'
                elif intent=='cancel':req.update(state='cancelled',approved_sha=None)
                elif intent=='opt-out':
                    self.db.execute("INSERT OR REPLACE INTO settings VALUES('checkins','false')")
                elif intent=='undo':req.update(state='undo-requested',approved_sha=None)
                elif intent!='empty':
                    req.update(state='received',approved_sha=None,revision=req.get('revision',0)+1,
                               text=req['text']+('\n\nAssistant question:\n'+req['pending_question'] if req.get('pending_question') else '')+'\n\nOwner follow-up:\n'+message['text'],attempts=0)
                    for key in ('draft_sha','base_sha','preview_message_id','execution_started','errors','jev_cost','pending_action','pending_text','pending_question'):
                        req.pop(key,None)
                req['last_message_id']=message['message_id'];req['updated_at']=time.time()
                self.db.execute('UPDATE requests SET state=?,data=? WHERE id=?',(req['state'],json.dumps(req),req['id']))
            self.db.execute('INSERT INTO inbound VALUES(?,?,?)',(message['message_id'],message['raw_digest'],req['id']))
        return req

def apply_replacements(root,changes):
    if not isinstance(changes,list) or not 1<=len(changes)<=25:raise ValueError('Expected 1–25 text replacements')
    proposed={}
    for item in changes:
        path=item.get('path','')
        if not allowed_content_path(path):raise ValueError('Only existing content routes may be edited')
        target=(root/path).resolve()
        if not target.is_relative_to(root.resolve()) or not target.is_file() or (root/path).is_symlink():raise ValueError('Unsafe content path')
        old=item.get('old');new=item.get('new')
        if not isinstance(old,str) or not isinstance(new,str) or not old or len(new)>60000:raise ValueError('Invalid replacement')
        text=proposed.get(path,target.read_text())
        if text.count(old)!=1:raise ValueError('Replacement target must occur exactly once')
        proposed[path]=text.replace(old,new,1)
    for path,text in proposed.items():(root/path).write_text(text)
    return list(proposed)


def allowed_content_path(path):
    return path in {'components/Hero.tsx','components/ServicesGrid.tsx'} or bool(re.fullmatch(r'app/(?:[a-z][a-z0-9-]*/)*page\.tsx',path)) and not path.startswith('app/api/')

def content_route(path):
    if not allowed_content_path(path):raise ValueError('Unsupported content path')
    return '/' if path.startswith('components/') else '/' + path[len('app/'):].removesuffix('page.tsx')
