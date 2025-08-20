import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:items-center lg:gap-12">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Inclusive communities across campuses & workplaces
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Translate cultural awareness into <strong>measurable outcomes</strong>—safer communities, stronger belonging, better results.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact" aria-label="Book a consultation">
                Book a consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>
          <div className="mt-10" aria-label="Trusted by">
            <p className="text-sm font-medium text-gray-500">Trusted by</p>
            <ul className="mt-3 flex flex-wrap items-center gap-6">
              <li className="text-sm text-gray-600 font-medium">Leading Universities</li>
              <li className="text-sm text-gray-600 font-medium">Fortune 500 Companies</li>
              <li className="text-sm text-gray-600 font-medium">Healthcare Systems</li>
              <li className="text-sm text-gray-600 font-medium">Public Agencies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}