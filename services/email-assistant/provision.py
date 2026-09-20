"""Idempotently provision private transport; activate the address separately."""
import argparse
import json
from pathlib import Path
from cloud import Cloud,ACCOUNT,PAGES_ACCOUNT,ZONE

STATE=Path.home()/'.local/state/gic-email'
HERE=Path(__file__).resolve().parent

def main():
    p=argparse.ArgumentParser();p.add_argument('--activate-address',action='store_true');args=p.parse_args()
    STATE.mkdir(parents=True,exist_ok=True);STATE.chmod(0o700)
    config_path=STATE/'config.json'
    cfg=json.loads(config_path.read_text()) if config_path.exists() else {'enabled':False}
    cloud=Cloud(cfg)
    if not cfg.get('namespace_id'):
        existing=cloud.api(f'accounts/{ACCOUNT}/storage/kv/namespaces')
        namespace=next((x for x in existing if x['title']=='gic-email-inbox'),None)
        if namespace is None:namespace=cloud.api(f'accounts/{ACCOUNT}/storage/kv/namespaces','POST',{'title':'gic-email-inbox'})
        cfg['namespace_id']=namespace['id'];config_path.write_text(json.dumps(cfg,indent=2))
    if not cfg.get('database_id'):
        existing=cloud.api(f'accounts/{ACCOUNT}/d1/database')
        database=next((x for x in existing if x['name']=='gic-email-transport'),None)
        if database is None:database=cloud.api(f'accounts/{ACCOUNT}/d1/database','POST',{'name':'gic-email-transport'})
        cfg['database_id']=database['uuid'];config_path.write_text(json.dumps(cfg,indent=2))
    config_path.chmod(0o600);cloud.config=cfg
    cloud.query('''CREATE TABLE IF NOT EXISTS inbound(id TEXT PRIMARY KEY,status TEXT NOT NULL,created_at REAL,error TEXT);
    CREATE TABLE IF NOT EXISTS outbound(id TEXT PRIMARY KEY,payload TEXT NOT NULL,status TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS metadata(key TEXT PRIMARY KEY,value TEXT);''')
    metadata={'main_module':'email-worker.mjs','compatibility_date':'2026-09-20','bindings':[
      {'type':'kv_namespace','name':'MAIL','namespace_id':cfg['namespace_id']},
      {'type':'d1','name':'DB','id':cfg['database_id']},
      {'type':'send_email','name':'SEND','allowed_destination_addresses':['iwarsame8@gmail.com','zuhurahmed1995@gmail.com']} ]}
    cloud.api(f'accounts/{ACCOUNT}/workers/scripts/gic-email-assistant','PUT',files={
      'metadata':(None,json.dumps(metadata),'application/json'),
      'email-worker.mjs':('email-worker.mjs',(HERE/'email-worker.mjs').read_bytes(),'application/javascript+module')})
    cloud.api(f'accounts/{ACCOUNT}/workers/scripts/gic-email-assistant/schedules','PUT',[{'cron':'* * * * *'}])
    pages=f'accounts/{PAGES_ACCOUNT}/pages/projects/gic-website'
    project=cloud.api(pages);source=project['source']
    backup=STATE/'pages-source-before.json'
    if not backup.exists():backup.write_text(json.dumps(source,indent=2))
    settings=source['config']
    if settings.get('preview_deployment_setting')=='none':
        cloud.api(pages,'PATCH',{'source':{'type':'github','config':{
          'preview_deployment_setting':'custom','preview_branch_includes':['email-update-*'],'preview_branch_excludes':[]}}})
    elif settings.get('preview_deployment_setting')=='custom' and 'email-update-*' not in settings.get('preview_branch_includes',[]):
        raise RuntimeError('Existing custom preview policy needs reconciliation')
    if args.activate_address:
        if not cfg.get('enabled'):raise RuntimeError('Enable only after rehearsal and readiness checks')
        rules=cloud.api(f'zones/{ZONE}/email/routing/rules')
        matching=[r for r in rules if any(m.get('value')=='updates@globalinsightscollective.com' for m in r.get('matchers',[]))]
        intended={'name':'Owner website updates','enabled':True,'matchers':[{'type':'literal','field':'to','value':'updates@globalinsightscollective.com'}],
                  'actions':[{'type':'worker','value':['gic-email-assistant']}]}
        if not matching:cloud.api(f'zones/{ZONE}/email/routing/rules','POST',intended)
        elif matching[0].get('actions')!=intended['actions']:raise RuntimeError('Receiving address belongs to another route')
    print(json.dumps({'transport_provisioned':True,'address_activation_requested':args.activate_address,'service_enabled':cfg['enabled']}))

if __name__=='__main__':main()
