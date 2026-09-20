import unittest
from core import allowed_content_path,content_route,parse_mail
from test_core import mail,OWNER
class GicTests(unittest.TestCase):
 def test_routes_and_shared_home_components(self):
  for source,route in [('app/page.tsx','/'),('app/services/consulting/page.tsx','/services/consulting/'),('components/Hero.tsx','/'),('components/ServicesGrid.tsx','/')]:
   self.assertTrue(allowed_content_path(source));self.assertEqual(content_route(source),route)
 def test_protected_sources(self):
  for source in ['app/api/contact/page.tsx','app/layout.tsx','app/../page.tsx','components/Header.tsx','content/insights/example.mdx']:
   self.assertFalse(allowed_content_path(source))
 def test_only_gic_owner_even_if_valid_signature(self):
  for sender in ['abdullahiahmed2001@gmail.com','zuhurahmed1995@gmail.com','iwarsame8+updates@gmail.com']:
   with self.assertRaises(ValueError):parse_mail(mail(sender=sender),OWNER,verify=lambda _:True)
