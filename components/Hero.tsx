import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-brand-50/30 py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Crisis Management, Risk & Compliance, International Education & Strategic Consulting
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Proven expertise serving <strong>major infrastructure organizations</strong>, <strong>universities</strong>, and <strong>international clients</strong>. M.Ed. and PMP® certified professionals delivering measurable results.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact" aria-label="Book a consultation">
                Book a consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
}