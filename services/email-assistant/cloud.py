"""Cloudflare transport. Runtime resolves credentials; never returns them to models."""
import json
import os
import sys
import site
import urllib.parse
import requests

ACCOUNT='3ca0c663ac5fcedbb806dba25bf58081'
PAGES_ACCOUNT='3ca0c663ac5fcedbb806dba25bf58081'
ZONE='1f84e042af5ef3e80be9a389bef5de58'

class Cloud:
    def __init__(self,config=None):
        site.addsitedir('/usr/local/lib/hermes-agent-v0.21.0/venv/lib/python3.11/site-packages')
        sys.path.insert(0,'/usr/local/lib/hermes-agent-v0.21.0')
        from hermes_cli.env_loader import load_hermes_dotenv
        load_hermes_dotenv()
        self.session=requests.Session()
        self.session.headers.update({'X-Auth-Key':os.environ['CLOUDFLARE_API_KEY'],
                                     'X-Auth-Email':os.environ['CLOUDFLARE_EMAIL']})
        self.config=config or {}
    def api(self,path,method='GET',data=None,raw=None,files=None):
        response=self.session.request(method,'https://api.cloudflare.com/client/v4/'+path,
                                      json=data,data=raw,files=files,timeout=45)
        if response.status_code>=400:raise RuntimeError(f'Cloudflare {method} {path.split("?")[0]} returned {response.status_code}')
        obj=response.json()
        if not obj.get('success'):raise RuntimeError('Cloudflare operation failed')
        return obj.get('result')
    def query(self,sql,params=()):
        return self.api(f'accounts/{ACCOUNT}/d1/database/{self.config["database_id"]}/query',
                        'POST',{'sql':sql,'params':list(params)})[0]
    def raw(self,key):
        path=f'accounts/{ACCOUNT}/storage/kv/namespaces/{self.config["namespace_id"]}/values/'+urllib.parse.quote(key,safe='')
        r=self.session.get('https://api.cloudflare.com/client/v4/'+path,timeout=30)
        if r.status_code!=200:raise RuntimeError('Stored email is unavailable')
        return r.content
    def outbox(self,item):
        item={**item,'queued_at':__import__('time').time()}
        self.query('INSERT OR IGNORE INTO outbound(id,payload,status) VALUES(?,?,?)',
                   (item['key'],json.dumps(item),'pending'))
    def heartbeat(self):
        self.query("INSERT OR REPLACE INTO metadata(key,value) VALUES('heartbeat',?)",(__import__('time').time(),))
