'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { SkipLink } from './ui/skip-link';
import { cn } from '../lib/utils';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { 
      if (e.key === 'Escape') setOpen(false); 
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <header className={cn(
        "sticky top-0 z-50 w-full bg-white border-b transition-all duration-200",
        scrolled ? "backdrop-blur-sm bg-white/95 shadow-sm" : ""
      )}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 sm:h-24 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
            >
              <img
                src="/logo-main.png"
                alt="Global Insights Collective"
                className="h-64 sm:h-80 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/services"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              >
                Services
              </Link>
              <Link 
                href="/who-we-help"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              >
                Who We Help
              </Link>
              <Link 
                href="/case-studies"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              >
                Case Studies
              </Link>
              <Link 
                href="/insights"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              >
                Insights
              </Link>
              <Link 
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              >
                About
              </Link>
              <Button asChild size="sm">
                <Link href="/contact">
                  Book a Consultation
                </Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open menu"
              aria-controls="mobile-menu"
              aria-expanded={open ? 'true' : 'false'}
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mounted && (
          <div
            id="mobile-menu"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            className={cn(
              "fixed inset-0 z-50 md:hidden transition-all duration-300",
              open ? "pointer-events-auto" : "pointer-events-none"
            )}
            onClick={(e) => { 
              if (e.target === e.currentTarget) setOpen(false); 
            }}
          >
            <div className={cn(
              "absolute inset-0 bg-black/30 transition-opacity duration-300",
              open ? "opacity-100" : "opacity-0"
            )} />
            <div className={cn(
              "ml-auto h-full w-[280px] bg-white shadow-xl transition-transform duration-300",
              open ? "translate-x-0" : "translate-x-full"
            )}>
              <div className="flex items-center justify-between p-6 border-b">
                <img 
                  src="/logo-main.png" 
                  alt="Global Insights Collective" 
                  className="h-32 w-auto" 
                  style={{ height: '40px', width: 'auto' }}
                />
                <button 
                  type="button"
                  aria-label="Close menu" 
                  onClick={() => setOpen(false)} 
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>
              <nav className="px-6 py-6 space-y-1">
                <Link 
                  href="/services"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={() => setOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/who-we-help"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={() => setOpen(false)}
                >
                  Who We Help
                </Link>
                <Link 
                  href="/case-studies"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={() => setOpen(false)}
                >
                  Case Studies
                </Link>
                <Link 
                  href="/insights"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={() => setOpen(false)}
                >
                  Insights
                </Link>
                <Link 
                  href="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Book a Consultation
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}