import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const outcomes = [
  "45% reduction in bias incidents",
  "27% increase in student satisfaction",
  "15% improvement in retention rates",
  "Enhanced community trust and safety"
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-brand-50/30 py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-50/20 to-blue-50/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Championing{' '}
              <span className="bg-gradient-to-r from-brand-600 to-blue-600 bg-clip-text text-transparent">
                Inclusive Communities
              </span>{' '}
              Across Campuses & Workplaces
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We help universities, employers and public agencies translate cultural awareness into
              <strong className="text-brand-700 font-semibold"> measurable outcomes</strong>—safer communities,
              stronger belonging, and better results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button asChild size="lg" className="text-base px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="text-base px-8 py-4 border-2 border-brand-200 text-brand-700 hover:bg-brand-50 hover:border-brand-300 transition-all duration-300">
                <Link href="/case-studies">
                  See Our Case Studies
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="text-sm text-gray-600 mb-6">
              <p className="font-medium">Trusted by leading institutions nationwide</p>
            </div>
          </div>

          {/* Outcomes showcase */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                Real Results from Our Partners
              </h2>

              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{outcome}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <blockquote className="text-gray-700 italic">
                  "GIC helped us transform our campus culture. The training opened eyes and the results speak for themselves."
                </blockquote>
                <cite className="text-sm text-gray-600 mt-2 block">
                  — Vice President of Student Affairs, Mid-sized University
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}