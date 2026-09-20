from core import allowed_content_path, content_route
"""Single-writer VPS coordinator for authenticated owner requests."""
import argparse
import base64
import fcntl
import hashlib
import io
from html.parser import HTMLParser
import json
import re
import os
from pathlib import Path
import shutil
import subprocess
import signal
import sys
import threading
import time
from cloud import Cloud, PAGES_ACCOUNT
from policy import DRAFT_SYSTEM, REVIEW_SYSTEM
from core import Store, parse_mail, apply_replacements, OwnerInputError, approval_intent

HERE=Path(__file__).resolve().parent
STATE=Path(os.environ.get('GIC_EMAIL_STATE',str(Path.home()/'.local/state/gic-email')))
OWNER='iwarsame8@gmail.com'
OPERATOR='zuhurahmed1995@gmail.com'
REPO='https://github.com/zuwiizu/gic-website.git'
HERMES_PY='/usr/local/lib/hermes-agent-v0.21.0/venv/bin/python'
MODELS={'luna':'gpt-5.6-luna','astra':'gpt-6-astra'}
DEADLINE=None

def command(args,cwd=None,timeout=180,input=None,env=None):
    if DEADLINE is not None:
        timeout=min(timeout,DEADLINE-time.monotonic())
        if timeout<=0:raise TimeoutError('Request execution deadline reached')
    p=subprocess.Popen(args,cwd=cwd,text=True,stdin=subprocess.PIPE,stdout=subprocess.PIPE,stderr=subprocess.PIPE,env=env,start_new_session=True)
    try:stdout,stderr=p.communicate(input=input,timeout=timeout)
    except subprocess.TimeoutExpired:
        os.killpg(p.pid,signal.SIGKILL);p.communicate();raise TimeoutError('Bounded command timed out')
    if p.returncode:raise RuntimeError(f'{args[0]} failed: '+(stderr or stdout)[-1500:])
    return stdout.strip()

def safe_build_env():
    return {k:v for k,v in os.environ.items() if k in {'PATH','LANG','HOME','TMPDIR'}} | {'CI':'true'}

def choose_model(request,recovery=False):
    candidates={'astra':'gpt-6-astra can independently review website patches and solve difficult website content-editing failures; it accepts full source text and returns JSON without tools'} if recovery else {
      'luna':'gpt-5.6-luna can edit website text and return exact TSX text replacements; use for simple wording changes',
      'astra':'gpt-6-astra can solve complex coding failures and independently review website patches'}
    result=json.loads(command([HERMES_PY,str(HERE/'model_runner.py')],timeout=180,input=json.dumps(
        {'operation':'route','task':'Choose a model for website content editing or review. The coordinator provides source files, runs tools and creates previews; the model only returns JSON text. Task: '+request['text'][:10000],'candidates':candidates})))
    if result.get('drift') or result.get('verdict') not in candidates:raise RuntimeError('Jev could not select a supported model confidently: '+str(result.get('verdict'))+' '+str(result.get('reason')))
    return MODELS[result['verdict']],result

def model_call(model,system,payload):
    output=command([HERMES_PY,str(HERE/'model_runner.py')],timeout=300,
                   input=json.dumps({'model':model,'system':system,'input':payload}))
    parsed=json.loads(output)
    if parsed['model']!=model or parsed['tools_count']!=0:raise RuntimeError('Model identity/tool policy mismatch')
    return parsed['result']

def attachment_context(directory):
    from pypdf import PdfReader
    from PIL import Image
    context=[];assets=[]
    for meta_path in sorted(directory.glob('*.json')):
        meta=json.loads(meta_path.read_text());path=directory/meta['file']
        if meta['type']=='application/pdf':
            reader=PdfReader(path)
            if len(reader.pages)>30:raise ValueError('Please send a PDF with at most 30 pages')
            text='\n'.join((p.extract_text() or '') for p in reader.pages)[:30000]
            if not text.strip():raise ValueError('This PDF contains no readable text; please describe it in your email')
            context.append({'name':meta['name'],'text':text})
        elif meta['type']=='text/plain':context.append({'name':meta['name'],'text':path.read_text(errors='replace')[:30000]})
        else:
            Image.MAX_IMAGE_PIXELS=25_000_000
            with Image.open(path) as im:
                im.load();im.thumbnail((2400,2400));target=directory/(path.stem+'.webp')
                im.convert('RGB').save(target,'WEBP',quality=88)
            name=f'email-{hashlib.sha256(target.read_bytes()).hexdigest()[:20]}.webp'
            assets.append((name,target))
            context.append({'type':'image_url','image_url':{'url':'data:image/webp;base64,'+base64.b64encode(target.read_bytes()).decode()},'asset_path':'/images/'+name})
    return context,assets

class Worker:
    def __init__(self,state=STATE):
        self.state=state;state.mkdir(parents=True,exist_ok=True);state.chmod(0o700)
        self.config=json.loads((state/'config.json').read_text())
        self.store=Store(state/'state.sqlite3');self.cloud=Cloud(self.config)
    def notify(self,req,kind,text,to=None):return self.store.queue(req['id'],kind,text,to=to)
    def escalate(self,req,error):
        self.store.update(req['id'],state='escalated',error=str(error)[:2000])
        self.notify(req,'escalation',f"Website request {req['id']} needs help.\n\nRequest: {req['text'][:6000]}\n\nIssue: {str(error)[:1800]}\n\nPreview: {req.get('preview_url','Not available')}\nNo success has been reported to the owner.",OPERATOR)
        self.notify(req,'owner-help','This update needs a little help. I have notified Zuhur and will follow up here. Your request is saved.')
    def handle_error(self,req,error):
        if req['state'] in {'publishing','rolling-back'}:
            self.store.update(req['id'],transport_error=str(error)[:1000])
            self.notify(req,'release-attention','Release tracking needs attention for request '+req['id']+'. The operation remains under reconciliation. '+str(error)[:1000],OPERATOR)
        elif req['state']=='awaiting-preview' and req.get('attempts',0)<4:
            attempts=req.get('attempts',0) if req.get('initial_model')==MODELS['astra'] else max(2,req.get('attempts',0))
            self.store.update(req['id'],state='received',attempts=attempts,approved_sha=None,draft_sha=None,
                errors=req.get('errors',[])+['Preview check failed: '+str(error)[:1500]])
        else:self.escalate(req,error)
    def followup(self,req):
        if req.get('pending_action')=='undo' and req['state']=='completed':
            self.store.update(req['id'],pending_action=None)
            self.rollback(req,'Owner requested undo during publication')
        elif req.get('pending_action')=='revise':
            self.store.update(req['id'],state='received',revision=req.get('revision',0)+1,
                text=req['pending_text'],pending_action=None,approved_sha=None,draft_sha=None,
                attempts=0,execution_started=time.time(),errors=[],jev_cost=0)
    def inbox(self):
        rows=self.cloud.query("SELECT id FROM inbound WHERE status='pending' ORDER BY created_at LIMIT 10")['results']
        for row in rows:
            raw=self.cloud.raw('inbox/'+row['id'])
            try:
                message=parse_mail(raw,OWNER)
                req=self.store.receive(message)
                if req:
                    directory=self.state/'attachments'/req['id'];directory.mkdir(parents=True,exist_ok=True)
                    for attachment in message['attachments']:
                        digest=hashlib.sha256(attachment['data']).hexdigest()
                        (directory/digest).write_bytes(attachment['data'])
                        (directory/(digest+'.json')).write_text(json.dumps({'file':digest,'name':attachment['name'],'type':attachment['type']}))
                    intent=approval_intent(message['text'])
                    if intent=='opt-out':self.notify(req,'opt-out','Monthly check-ins and preview reminders have been stopped. You can still email updates whenever you need them.')
                    elif req['state']=='received':self.notify(req,'ack','I have received your website request. I will prepare a preview or ask for any missing details. Nothing will be published without your approval.')
                    elif req['state']=='approved':self.notify(req,'approval-received','Your approval is received. I will publish the reviewed version and check the live pages before confirming completion.')
                    elif req['state']=='cancelled':self.notify(req,'cancelled','This unpublished request has been cancelled.')
                    if req.get('last_notice'):self.notify(req,'approval-clarification',req['last_notice'])
                self.cloud.query("UPDATE inbound SET status='processed' WHERE id=?",(row['id'],))
            except OwnerInputError as exc:
                req=self.store.receive(exc.message)
                if req:
                    if req['state'] not in {'publishing','rolling-back'}:self.store.update(req['id'],state='needs-information')
                    self.notify(req,'input-help',str(exc)+'. Please reply here with the corrected request.')
                self.cloud.query("UPDATE inbound SET status='processed' WHERE id=?",(row['id'],))
            except ValueError as exc:
                # No changes or emails in response to unverified content.
                self.cloud.query("UPDATE inbound SET status='rejected',error=? WHERE id=?",(str(exc)[:300],row['id']))
    def deliver(self):
        for row in self.store.outbox():
            self.cloud.outbox(json.loads(row['data']));self.store.sent(row['key'])
    def clone(self,req):
        directory=self.state/'work'/f"{req['id']}-{req.get('revision',0)}-{req.get('attempts',0)}"
        directory.parent.mkdir(parents=True,exist_ok=True)
        if directory.exists():raise RuntimeError('Workspace already exists; refusing to overwrite unfinished work')
        command(['gh','repo','clone','zuwiizu/gic-website',str(directory),'--','--depth=2'],timeout=120)
        return directory
    def prepare(self,req):
        global DEADLINE
        remaining=1800-(time.time()-req.get('execution_started',time.time()))
        DEADLINE=time.monotonic()+remaining
        start=time.monotonic();errors=req.get('errors',[]);jev_cost=req.get('jev_cost',0.0)
        self.store.update(req['id'],state='preparing',execution_started=req.get('execution_started',time.time()))
        for attempt in range(req.get('attempts',0),4):
            if time.monotonic()-start>1200 or time.monotonic()>=DEADLINE:break
            if attempt>=2 and self.store.get(req['id']).get('initial_model')==MODELS['astra']:break
            try:
                req=self.store.update(req['id'],attempts=attempt+1)
                directory=self.clone(req)
                base=command(['git','rev-parse','HEAD'],directory)
                files={str(p.relative_to(directory)):p.read_text() for p in directory.rglob('*.tsx') if allowed_content_path(str(p.relative_to(directory)))}
                context,assets=attachment_context(self.state/'attachments'/req['id'])
                model,decision=choose_model(req,recovery=attempt>=2 or req.get('initial_model')==MODELS['astra'])
                if attempt==0:self.store.update(req['id'],initial_model=model)
                jev_cost+=float(decision.get('usage',{}).get('cost',0))
                if jev_cost>0.05:raise RuntimeError('Jev request allowance exhausted')
                evidence={'request':req['text'],'files':files,'stylesheet':(directory/'app/globals.css').read_text(),'attachments':[x for x in context if x.get('type')!='image_url'],
                          'image_paths':[x['asset_path'] for x in context if x.get('type')=='image_url'],'previous_failures':errors}
                user_input=[{'type':'text','text':json.dumps(evidence)}]
                user_input += [{k:v for k,v in x.items() if k!='asset_path'} for x in context if x.get('type')=='image_url']
                draft=model_call(model,DRAFT_SYSTEM,user_input)
                if draft.get('action')=='clarify':
                    self.store.update(req['id'],state='needs-information',pending_question=draft['summary'])
                    self.notify(req,'question',draft['summary']);return
                if draft.get('action')!='edit':raise ValueError(draft.get('summary','Request needs human help'))
                changed=apply_replacements(directory,draft['replacements'])
                for path in changed:
                    original=directory/(Path(path).name+'.original.tsx');original.write_text(files[path])
                    command(['node',str(HERE/'content-guard.mjs'),str(original),str(directory/path)],cwd=HERE.parents[1])
                    original.unlink()
                for name,path in assets:
                    if any('/images/'+name in (directory/file).read_text() for file in changed):
                        target=directory/'public/images'/name;target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(path,target)
                command(['npm','ci','--ignore-scripts'],directory,timeout=180,env=safe_build_env())
                command(['node','node_modules/typescript/bin/tsc','--noEmit'],directory,timeout=120,env=safe_build_env())
                command(['npm','run','build'],directory,timeout=180,env=safe_build_env())
                diff=command(['git','diff','--',*changed],directory)
                review_model,review_decision=choose_model({'text':'Independent review of this website request: '+req['text']},recovery=True)
                jev_cost+=float(review_decision.get('usage',{}).get('cost',0))
                if jev_cost>0.05:raise RuntimeError('Jev request allowance exhausted')
                review=model_call(review_model,REVIEW_SYSTEM,
                    json.dumps({'request':req['text'],'diff':diff,'summary':draft['summary'],
                        'current_pages':{path:files[path] for path in changed},
                        'stylesheet':evidence['stylesheet'],'attachment_text':evidence['attachments']}))
                if review.get('accepted') is not True:raise ValueError(review.get('reason','Review did not pass'))
                branch=f'email-update-{req["id"][:16]}-{req.get("revision",0)}-{attempt}'
                command(['git','checkout','-b',branch],directory)
                command(['git','add','--',*changed,*(['public/images'] if (directory/'public/images').exists() else [])],directory)
                command(['git','-c','user.name=Website Assistant','-c','user.email=updates@globalinsightscollective.com','commit','-m',f'content: owner email update {req["id"][:8]}'],directory)
                sha=command(['git','rev-parse','HEAD'],directory)
                # Persist source identity before push; a failed push can be reconciled.
                self.store.update(req['id'],state='awaiting-preview',workspace=str(directory),base_sha=base,
                                  draft_sha=sha,branch=branch,summary=draft['summary'],changed=changed,
                                  replacements=draft['replacements'],model=model,jev_cost=jev_cost,preview_started=time.time())
                command(['git','push','origin',f'HEAD:refs/heads/{branch}'],directory,timeout=120)
                return
            except Exception as exc:
                errors.append(str(exc)[-1500:])
                if 'Jev could not select' in str(exc):
                    self.escalate(self.store.get(req['id']),str(exc));return
                if self.store.get(req['id'])['state']=='awaiting-preview':
                    self.escalate(self.store.get(req['id']),'Draft push response was uncertain; inspect branch before retrying')
                    return
                self.store.update(req['id'],errors=errors,jev_cost=jev_cost)
        self.escalate(self.store.get(req['id']),'Recovery attempts exhausted: '+' | '.join(errors)[-3000:])
    def deployments(self):
        return self.cloud.api(f'accounts/{PAGES_ACCOUNT}/pages/projects/gic-website/deployments?per_page=25')
    def preview(self,req):
        match=next((d for d in self.deployments() if d.get('deployment_trigger',{}).get('metadata',{}).get('commit_hash')==req['draft_sha'] and d.get('environment')=='preview'),None)
        if not match:
            if time.time()-req['preview_started']>1200:self.escalate(req,'Preview did not appear within 20 minutes')
            return
        status=match.get('latest_stage',{}).get('status')
        if status in {'failure','canceled'}:self.handle_error(req,'Cloudflare preview build failed');return
        if status!='success':return
        url=match['url']
        hashes=self.verify_pages(url,req)
        previous=self.verify_pages("https://globalinsightscollective.com",req)
        routes=sorted({content_route(p) for p in req['changed']})
        command(['node',str(HERE/'render-check.mjs'),url,str(self.state/'renders'/req['id']),*routes],timeout=180)
        req=self.store.update(req['id'],preview_url=url,preview_deployment_id=match['id'],preview_hashes=hashes,previous_hashes=previous)
        mid=self.notify(req,'preview',f"Your update is ready to review:\n\n{req['summary']}\n\nPreview: {url}\n\nReply Publish to make this version live, or describe what you want changed.\nNothing is live yet.")
        self.store.update(req['id'],state='awaiting-approval',preview_message_id=mid,preview_at=time.time())
    def verify_pages(self,url,req,expected=None):
        import requests
        class Visible(HTMLParser):
            def __init__(self):super().__init__();self.hidden=0;self.parts=[]
            def handle_starttag(self,tag,attrs):
                if tag in {'script','style'}:self.hidden+=1
            def handle_endtag(self,tag):
                if tag in {'script','style'}:self.hidden=max(0,self.hidden-1)
            def handle_data(self,data):
                if not self.hidden:self.parts.append(data)
        hashes={}
        for path in req['changed']:
            route=content_route(path)
            response=requests.get(url.rstrip('/')+route,timeout=25)
            if response.status_code!=200 or '<html' not in response.text.lower():raise RuntimeError('Affected page failed live HTTP check')
            if '.pages.dev' in url and 'noindex' not in response.headers.get('X-Robots-Tag','').lower():raise RuntimeError('Preview is missing its noindex header')
            def decode_email(match):
                raw=bytes.fromhex(match.group(1))
                return ''.join(chr(x^raw[0]) for x in raw[1:])
            html=re.sub(r'<(?:a|span)\b[^>]*data-cfemail="([0-9a-fA-F]+)"[^>]*>.*?</(?:a|span)>',decode_email,response.text,flags=re.S)
            parsed=Visible();parsed.feed(html)
            hashes[path]=hashlib.sha256(' '.join(' '.join(parsed.parts).split()).encode()).hexdigest()
        if expected and hashes!=expected:raise RuntimeError('Live content does not match reviewed preview')
        return hashes
    def canonical(self,sha):
        project=self.cloud.api(f'accounts/{PAGES_ACCOUNT}/pages/projects/gic-website')
        return project.get('canonical_deployment',{}).get('deployment_trigger',{}).get('metadata',{}).get('commit_hash')==sha
    def publish(self,req):
        if req.get('approved_sha')!=req.get('draft_sha'):raise RuntimeError('Approval does not match exact draft')
        directory=Path(req['workspace'])
        remote=command(['git','ls-remote','origin','refs/heads/main'],directory).split()[0]
        if req['state']=='approved' and remote!=req['base_sha']:
            self.store.update(req['id'],state='received',approved_sha=None,draft_sha=None,attempts=0,errors=[],execution_started=time.time(),revision=req['revision']+1)
            self.notify(req,'new-base','The website changed while this preview was awaiting approval. I will prepare an updated preview for you.');return
        if remote not in {req['base_sha'],req['draft_sha']}:
            self.escalate(req,'Another release changed main during publishing; manual reconciliation required');return
        if remote==req['base_sha']:
            self.store.update(req['id'],state='publishing',publish_started=req.get('publish_started',time.time()))
            command(['git','push','origin',f'{req["draft_sha"]}:refs/heads/main'],directory,timeout=120)
            return
        deployments=self.deployments()
        live=next((d for d in deployments if d.get('environment')=='production' and d.get('deployment_trigger',{}).get('metadata',{}).get('commit_hash')==req['draft_sha']),None)
        if not live or live.get('latest_stage',{}).get('status') in {'active','idle'}:
            if time.time()-req.get('publish_started',time.time())>1200:self.handle_error(req,'Production deployment has not completed within 20 minutes; reconciliation continues')
            return
        if live.get('latest_stage',{}).get('status')!='success':self.rollback(req,'Production build failed');return
        if not self.canonical(req['draft_sha']):
            if time.time()-req.get('publish_started',time.time())>1200:self.handle_error(req,'Approved deployment is not canonical after 20 minutes')
            return
        try:self.verify_pages('https://globalinsightscollective.com',req,req['preview_hashes'])
        except Exception as exc:self.rollback(req,str(exc));return
        self.store.update(req['id'],state='completed',completed_at=time.time(),release_id=live['id'])
        self.notify(req,'complete','Your update is live and the affected pages have passed their checks:\nhttps://globalinsightscollective.com\n\nReply here if you need another change.')
    def rollback(self,req,reason):
        directory=Path(req['workspace'])
        if command(['git','ls-remote','origin','refs/heads/main'],directory).split()[0]!=req['draft_sha']:
            self.escalate(req,'Cannot safely undo after a newer release: '+reason);return
        command(['git','-c','user.name=Website Assistant','-c','user.email=updates@globalinsightscollective.com','revert','--no-edit',req['draft_sha']],directory)
        sha=command(['git','rev-parse','HEAD'],directory)
        self.store.update(req['id'],state='rolling-back',rollback_sha=sha,rollback_reason=reason,rollback_started=time.time())
        command(['git','push','origin',f'{sha}:refs/heads/main'],directory,timeout=120)
    def finish_rollback(self,req):
        if time.time()-req.get('rollback_started',time.time())>1200:
            self.handle_error(req,'Rollback has not completed within 20 minutes; reconciliation continues')
        remote=command(['git','ls-remote','origin','refs/heads/main'],Path(req['workspace'])).split()[0]
        if remote==req['draft_sha']:
            command(['git','push','origin',req['rollback_sha']+':refs/heads/main'],Path(req['workspace']),timeout=120)
            return
        if remote!=req['rollback_sha']:raise RuntimeError('Main changed during rollback; operator reconciliation required')
        deployment=next((d for d in self.deployments() if d.get('deployment_trigger',{}).get('metadata',{}).get('commit_hash')==req['rollback_sha'] and d.get('environment')=='production'),None)
        if not deployment or deployment.get('latest_stage',{}).get('status') in {'active','idle'}:return
        if deployment.get('latest_stage',{}).get('status')!='success':self.escalate(req,'URGENT: rollback deployment failed');return
        if not self.canonical(req['rollback_sha']):return
        self.verify_pages('https://globalinsightscollective.com',req,req['previous_hashes'])
        self.store.update(req['id'],state='rolled-back',completed_at=time.time())
        self.notify(req,'rollback','The previous website version has been restored and checked. Zuhur has been notified.')
        self.notify(req,'rollback-operator','Request '+req['id']+' was rolled back: '+req['rollback_reason'],OPERATOR)
    def cadence(self):
        now=time.time()
        opted_out=self.store.db.execute("SELECT value FROM settings WHERE key='checkins'").fetchone()
        from datetime import datetime
        from zoneinfo import ZoneInfo
        current=datetime.now(ZoneInfo(self.config.get('timezone','America/New_York')))
        for req in ([] if opted_out and opted_out['value']=='false' else self.store.requests(['awaiting-approval'])):
            if now-req['preview_at']>=48*3600 and 9<=current.hour<18:
                self.notify(req,'reminder',f"Your website preview is waiting for review: {req['preview_url']}\nReply Publish to the preview email when it looks right. Silence will leave it unpublished.")
        from datetime import datetime
        from zoneinfo import ZoneInfo
        current=datetime.now(ZoneInfo(self.config.get('timezone','America/New_York')))
        rows=self.store.requests()
        enabled=self.config.get('monthly_checkin',False) and not (opted_out and opted_out['value']=='false')
        if enabled and current.day==1 and 14<=current.hour<18 and rows:
            if all(r['state'] in {'completed','rolled-back','cancelled'} for r in rows) and max(r['updated_at'] for r in rows)<now-30*86400:
                latest=max(rows,key=lambda r:r['updated_at'])
                self.notify(latest,'monthly-'+current.strftime('%Y-%m'),'Any upcoming events, new writing, interviews, or other updates for your website? Reply here with details. Reply Unsubscribe to stop monthly check-ins.')
    def tick(self):
        global DEADLINE
        DEADLINE=None
        self.cloud.heartbeat();self.inbox();self.deliver()
        self.cloud.query("INSERT OR REPLACE INTO metadata(key,value) VALUES('active_until',?)",(time.time()+1900,))
        for req in self.store.requests():
            try:
                if req['state']=='received':self.prepare(req)
                elif req['state']=='awaiting-preview':self.preview(req)
                elif req['state'] in {'approved','publishing'}:self.publish(req)
                elif req['state']=='undo-requested':self.rollback(req,'Owner requested Undo')
                elif req['state']=='rolling-back':self.finish_rollback(req)
                elif req['state']=='preparing':self.prepare(req)
                elif req['state'] in {'completed','rolled-back'}:self.followup(req)
            except Exception as exc:self.handle_error(self.store.get(req['id']),str(exc))
            finally:DEADLINE=None
        self.cadence();self.deliver();self.cloud.heartbeat()
        from maintenance import maintain
        maintain(self.store,self.state,self.cloud)
        self.cloud.query("INSERT OR REPLACE INTO metadata(key,value) VALUES('progress',?)",(time.time(),))
        self.cloud.query("DELETE FROM metadata WHERE key='active_until'")

def main():
    parser=argparse.ArgumentParser();parser.add_argument('mode',choices=['once','run','status']);args=parser.parse_args()
    STATE.mkdir(parents=True,exist_ok=True);STATE.chmod(0o700)
    if args.mode=='status':
        store=Store(STATE/'state.sqlite3')
        print(json.dumps([{'id':r['id'],'state':r['state']} for r in store.requests()]));store.close();return
    with (STATE/'worker.lock').open('w') as lock:
        fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB)
        worker=Worker()
        if not worker.config.get('enabled'):raise RuntimeError('Activation has not passed readiness checks')
        def heartbeat():
            while True:
                try:Cloud(worker.config).heartbeat()
                except Exception:pass
                time.sleep(60)
        threading.Thread(target=heartbeat,daemon=True).start()
        while True:
            try:worker.tick()
            except Exception as exc:print(type(exc).__name__+': worker tick failed',file=sys.stderr,flush=True)
            if args.mode=='once':break
            time.sleep(60)

if __name__=='__main__':main()
