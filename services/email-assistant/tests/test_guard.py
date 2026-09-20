import subprocess
import tempfile
import unittest
from pathlib import Path

GUARD=Path(__file__).resolve().parents[1]/'content-guard.mjs'
BASE='import React from "react"; export default function About(){return <p>Hello</p>}'
class GuardTests(unittest.TestCase):
    def run_guard(self,proposed,original=BASE):
        with tempfile.TemporaryDirectory() as tmp:
            a=Path(tmp)/'old.tsx';b=Path(tmp)/'new.tsx';a.write_text(original);b.write_text(proposed)
            return subprocess.run(['node',str(GUARD),str(a),str(b)],capture_output=True).returncode
    def test_new_design_class_rejected(self):
        self.assertNotEqual(self.run_guard(BASE.replace('<p>','<p className="text-pink-500">')),0)
    def test_inline_redesign_rejected(self):
        self.assertNotEqual(self.run_guard(BASE.replace('<p>','<p style={{color:"red",fontSize:"90px"}}>')),0)
    def test_reuse_existing_pattern_is_allowed(self):
        original=BASE.replace('return <p>','return <><p className="editorial-copy">').replace('</p>','</p></>')
        self.assertEqual(self.run_guard(original.replace('Hello','Hello</p><p className="editorial-copy">New paragraph'),original),0)
    def test_class_expression_redesign_rejected(self):
        self.assertNotEqual(self.run_guard(BASE.replace('<p>','<p className={"text-pink-500"}>')),0)
    def test_data_array_styling_cannot_bypass_guard(self):
        self.assertNotEqual(self.run_guard(BASE.replace('Hello','{[{className:"text-pink-500"}]}')),0)
    def test_plain_content_change(self):self.assertEqual(self.run_guard(BASE.replace('Hello','Welcome')),0)
    def test_new_network_call(self):self.assertNotEqual(self.run_guard(BASE.replace('Hello',"{fetch('https://evil.example')}")),0)
    def test_new_import(self):self.assertNotEqual(self.run_guard(BASE.replace('"react"','"node:fs"')),0)
    def test_event_handler(self):self.assertNotEqual(self.run_guard(BASE.replace('<p>','<p onClick={()=>alert(1)}>')),0)
    def test_spread_handler(self):self.assertNotEqual(self.run_guard(BASE.replace('<p>','<p {...{onClick:()=>alert(1)}}>')),0)
    def test_javascript_link(self):self.assertNotEqual(self.run_guard(BASE.replace('Hello','<a href="javascript:alert(1)">click</a>')),0)
    def test_script_tag(self):self.assertNotEqual(self.run_guard(BASE.replace('Hello','<script src="https://evil.example/a.js" />')),0)
    def test_expression_javascript_link(self):self.assertNotEqual(self.run_guard(BASE.replace('Hello','<a href={"javascript:alert(1)"}>click</a>')),0)
    def test_computed_property_literal(self):
        self.assertNotEqual(self.run_guard(BASE.replace('Hello','{[{[fetch("https://evil.example")]:"x"}]}')),0)

if __name__=='__main__':unittest.main()
