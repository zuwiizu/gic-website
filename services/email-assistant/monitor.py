"""Independent timer process; Gmail alerts remain available if Cloudflare mail fails."""
import json
import time
from pathlib import Path
from cloud import Cloud
from worker import STATE, OPERATOR, command

def main():
    cfg=json.loads((STATE/'config.json').read_text())
    if not cfg.get('enabled'):return
    path=STATE/'monitor.json'
    status=json.loads(path.read_text()) if path.exists() else {}
    issue=None
    try:
        cloud=Cloud(cfg)
        metadata={r['key']:r['value'] for r in cloud.query('SELECT key,value FROM metadata')['results']}
        now=time.time()
        if now-float(metadata.get('heartbeat',0))>300:issue='VPS heartbeat missing for five minutes'
        elif now-float(metadata.get('progress',0))>300 and now>float(metadata.get('active_until',0)):
            issue='Website request processing stopped progressing'
        rows=cloud.query("SELECT id,status,payload FROM outbound WHERE status != 'sent'")['results']
        for row in rows:
            state,_,stamp=row['status'].partition(':')
            queued=json.loads(row['payload']).get('queued_at',now)
            if state=='uncertain' or state=='sending' and (not stamp or now-float(stamp)>300) or state=='pending' and now-float(queued)>300:
                issue='Email delivery needs reconciliation: '+row['id'];break
        status.pop('connection_failed_at',None)
    except Exception:
        status.setdefault('connection_failed_at',time.time())
        if time.time()-status['connection_failed_at']>300:issue='Cloudflare transport could not be checked for five minutes'
    if issue and not cfg.get('gmail_fallback_enabled',False):
        status['pending_issue']=issue;path.write_text(json.dumps(status));return
    if issue and issue!=status.get('alerted'):
        # Persist before sending. Uncertain notification sends are never replayed blindly.
        status['alerted']=issue;status['alert_status']='sending';path.write_text(json.dumps(status))
        result=command(['composio','execute','GMAIL_SEND_EMAIL','--account','gmail_pollen-ankle','-d',json.dumps({
            'recipient_email':OPERATOR,'subject':'Website email assistant needs attention',
            'body':issue+'. Requests remain saved. Check the gic-email service and transport delivery records. No credentials or message contents are included in this alert.'})],timeout=90)
        parsed=json.loads(result)
        status['alert_status']='submitted' if parsed.get('successful',parsed.get('success',parsed.get('data',{}).get('successful',False))) else 'check-provider-result'
    elif not issue:status.pop('alerted',None)
    path.write_text(json.dumps(status));path.chmod(0o600)
if __name__=='__main__':main()
