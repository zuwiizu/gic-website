import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const footerNavigation = {
  services: [
    { name: 'Cultural Competency Training', href: '/services/cultural-competency' },
    { name: 'International Student Support', href: '/services/international-student-support' },
    { name: 'Inclusive Workplace Programs', href: '/services/inclusive-workplace' },
    { name: 'Crisis Response & Mediation', href: '/services/crisis-response' },
  ],
  audiences: [
    { name: 'Universities', href: '/universities' },
    { name: 'Employers', href: '/employers' },
    { name: 'Healthcare & Public Safety', href: '/healthcare-public-safety' },
    { name: 'Community & Nonprofits', href: '/nonprofits' },
  ],
  company: [
    { name: 'About', href: '/about' },

    { name: 'Speaking & Media', href: '/speaking' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-2">
              <Image
                src="/logo.png"
                alt="Global Insights Collective"
                width={400}
                height={100}
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-4 max-w-md text-sm">
              Championing inclusive communities across campuses and workplaces through evidence-based training,
              strategic consulting, and cultural competency development.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Ready to get started?</h3>
                <Button asChild>
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Audiences */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Who We Help
            </h3>
            <ul className="space-y-3">
              {footerNavigation.audiences.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Global Insights Collective. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}