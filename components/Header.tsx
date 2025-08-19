'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { Button } from './ui/button';
import { SkipLink } from './ui/skip-link';
import { SearchBox, CompactSearchBox } from './SearchBox';
import { cn } from '../lib/utils';

const audienceItems = [
  {
    title: 'Universities',
    href: '/universities',
    description: 'Create inclusive campuses where every student can thrive',
    benefits: ['Reduce bias incidents', 'Improve retention', 'Enhance campus climate']
  },
  {
    title: 'Employers',
    href: '/employers',
    description: 'Build diverse teams and cultures that drive innovation',
    benefits: ['Attract top talent', 'Increase engagement', 'Drive performance']
  },
  {
    title: 'Healthcare & Public Safety',
    href: '/healthcare-public-safety',
    description: 'Deliver equitable services to diverse communities',
    benefits: ['Improve patient outcomes', 'Build community trust', 'Reduce disparities']
  },
  {
    title: 'Community & Nonprofits',
    href: '/nonprofits',
    description: 'Strengthen community connections and impact',
    benefits: ['Expand reach', 'Increase effectiveness', 'Build partnerships']
  }
];

const serviceItems = [
  { title: 'Cultural Competency Training', href: '/services/cultural-competency' },
  { title: 'International Student Support', href: '/services/international-student-support' },
  { title: 'Inclusive Workplace Programs', href: '/services/inclusive-workplace' },
  { title: 'Crisis Response & Mediation', href: '/services/crisis-response' },
  { title: 'Assessment & Evaluation', href: '/services/assessment' },
  { title: 'Strategic Consulting', href: '/services/consulting' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded-md">
            <Image
              src="/logo.png"
              alt="Global Insights Collective"
              width={240}
              height={80}
              className="h-40 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid gap-1">
                      {serviceItems.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Who We Help</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[600px] lg:grid-cols-2">
                    {audienceItems.map((item) => (
                      <NavigationMenuLink key={item.href} asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/case-studies" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                    Case Studies
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/insights" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                    Insights
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/speaking" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                    Speaking & Media
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search, CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="hidden lg:block">
              <SearchBox className="w-64" placeholder="Search..." />
            </div>

            {/* Mobile Search */}
            <div className="lg:hidden">
              <CompactSearchBox />
            </div>

            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">Book a Consultation</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen ? 'true' : 'false'}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-6 space-y-6">
              <nav className="space-y-4">
                <Link
                  href="/about"
                  className="block text-base font-medium text-gray-700 hover:text-brand-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>

                <div className="space-y-2">
                  <div className="text-base font-medium text-gray-900">Services</div>
                  <div className="pl-4 space-y-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-brand-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-base font-medium text-gray-900">Who We Help</div>
                  <div className="pl-4 space-y-2">
                    {audienceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-brand-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/case-studies"
                  className="block text-base font-medium text-gray-700 hover:text-brand-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>

                <Link
                  href="/insights"
                  className="block text-base font-medium text-gray-700 hover:text-brand-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Insights
                </Link>

                <Link
                  href="/speaking"
                  className="block text-base font-medium text-gray-700 hover:text-brand-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Speaking & Media
                </Link>
              </nav>

              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book a Consultation
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}