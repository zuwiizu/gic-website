"""Tool-free subscribed model call; JSON in on stdin, JSON result on stdout."""
import json
import sys
import contextlib

def main():
    payload=json.load(sys.stdin)
    if payload.get('operation')=='route':
        sys.path.insert(0,str(__import__('pathlib').Path.home()/'code/tools'))
        from jev_agent_tools import select
        print(json.dumps(select(payload['task'],payload['candidates'],kind='model')))
        return
    model=payload['model']
    if model not in {'gpt-5.6-luna','gpt-6-astra'}:raise ValueError('Model not configured')
    sys.path.insert(0,'/usr/local/lib/hermes-agent-v0.21.0')
    with contextlib.redirect_stdout(sys.stderr):
        from hermes_cli.env_loader import load_hermes_dotenv
        load_hermes_dotenv()
        from hermes_cli.runtime_provider import resolve_runtime_provider
        from run_agent import AIAgent
        runtime=resolve_runtime_provider(requested='openai-codex',target_model=model)
        agent=AIAgent(model=model,provider=runtime['provider'],api_key=runtime.get('api_key'),
                      base_url=runtime.get('base_url'),api_mode=runtime.get('api_mode'),
                      enabled_toolsets=[],skip_context_files=True,skip_memory=True,skip_background_review=True,
                      save_trajectories=False,quiet_mode=True,max_iterations=1,max_tokens=10000,
                      run_budget_seconds=240,reasoning_config={'effort':'medium'})
        if agent.tools:raise RuntimeError('Model unexpectedly has tools')
        result=agent.run_conversation(user_message=payload['input'],system_message=payload['system'])
        agent.close()
    if not result.get('completed') or result.get('error'):raise RuntimeError('Model call did not complete')
    text=result['final_response'].strip()
    if text.startswith('```'):text=text.split('\n',1)[1].rsplit('```',1)[0]
    parsed=json.loads(text)
    print(json.dumps({'model':model,'result':parsed,'tools_count':0}))

if __name__=='__main__':main()
