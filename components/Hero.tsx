import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:items-center lg:gap-12">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Professional Training, University Admissions & Community Safety
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Expert support for <strong>international students</strong>, <strong>corporate teams</strong>, and <strong>community organizations</strong> that drives real results.
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