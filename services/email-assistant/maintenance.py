"""Daily scoped backup and retention for this service's own private data."""
import json
import shutil
import sqlite3
import time
from pathlib import Path

def maintain(store,state,cloud):
    now=time.time();day=time.strftime('%Y-%m-%d',time.gmtime(now))
    backups=state/'backups';backups.mkdir(exist_ok=True)
    backup=backups/(day+'.sqlite3')
    if backup.exists():return
    destination=sqlite3.connect(backup)
    store.db.backup(destination)
    if destination.execute('PRAGMA integrity_check').fetchone()[0]!='ok':raise RuntimeError('Workflow backup integrity check failed')
    destination.close();backup.chmod(0o600)
    completed=sorted(store.requests(['completed','rolled-back','cancelled']),key=lambda r:r['updated_at'],reverse=True)
    protected={r['id'] for r in completed[:10]}
    for req in completed:
        age=now-req['updated_at']
        if age>30*86400:
            directory=state/'attachments'/req['id']
            if directory.is_dir() and not directory.is_symlink():shutil.rmtree(directory)
        if age>90*86400 and not req.get('retained_receipt_only'):
            if req['id'] not in protected:
                directory=Path(req.get('workspace','/nonexistent'))
                if directory.is_dir() and directory.resolve().parent==(state/'work').resolve() and directory.name.startswith(req['id']+'-'):
                    shutil.rmtree(directory)
            for row in store.db.execute('SELECT key,data FROM outbox WHERE request_id=?',(req['id'],)).fetchall():
                payload=json.loads(row['data']);payload['text']='[Expired after 90 days]'
                store.db.execute('UPDATE outbox SET data=? WHERE key=?',(json.dumps(payload),row['key']))
            store.db.execute('DELETE FROM events WHERE request_id=?',(req['id'],))
            store.db.commit()
            store.update(req['id'],text='[Expired after 90 days]',replacements=[],errors=[],retained_receipt_only=True)
    for path in backups.glob('????-??-??.sqlite3'):
        if path.stat().st_mtime<now-90*86400:path.unlink()
    cloud.query("DELETE FROM inbound WHERE status IN ('processed','rejected') AND created_at<?",((now-90*86400)*1000,))
