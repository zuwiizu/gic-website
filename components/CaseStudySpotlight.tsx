import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

const spotlightCase = {
  title: 'University creates inclusive campus through cultural competency programme',
  client: 'Mid-sized University',
  industry: 'Higher Education',
  challenge: 'A mid‑sized university was experiencing frequent bias incidents and low retention among students from under‑represented backgrounds.',
  approach: 'GIC conducted a comprehensive campus climate assessment, delivered targeted cultural competency training to faculty and staff, and established peer‑led student workshops.',
  results: [
    {
      metric: '45%',
      label: 'Reduction in bias incidents',
      icon: TrendingUp
    },
    {
      metric: '27%',
      label: 'Increase in student satisfaction',
      icon: Users
    },
    {
      metric: '15%',
      label: 'Improvement in retention rates',
      icon: Award
    }
  ],
  testimonial: {
    quote: "GIC helped us transform our campus culture. The training opened eyes and the results speak for themselves.",
    author: "Vice President of Student Affairs"
  },
  href: '/case-studies/inclusive-campus'
};

export default function CaseStudySpotlight() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Story Spotlight
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our evidence-based approach delivers measurable results for our partners.
          </p>
        </div>

        {/* Case study content */}
        <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-brand-100 text-brand-800 text-sm font-medium rounded-full mb-4">
                  {spotlightCase.industry}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {spotlightCase.title}
                </h3>
              </div>

              {/* Problem */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h4>
                <p className="text-gray-700 leading-relaxed">
                  {spotlightCase.challenge}
                </p>
              </div>

              {/* Approach */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Approach</h4>
                <p className="text-gray-700 leading-relaxed">
                  {spotlightCase.approach}
                </p>
              </div>

              {/* Testimonial */}
              <blockquote className="bg-white p-6 rounded-xl border-l-4 border-brand-600 mb-8">
                <p className="text-gray-700 italic mb-3">
                  "{spotlightCase.testimonial.quote}"
                </p>
                <cite className="text-sm text-gray-600 font-medium">
                  — {spotlightCase.testimonial.author}
                </cite>
              </blockquote>

              {/* CTA */}
              <Button asChild size="lg">
                <Link href={spotlightCase.href}>
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Results */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  Measurable Impact
                </h4>
                
                <div className="space-y-6">
                  {spotlightCase.results.map((result, index) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-brand-100 rounded-lg flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-brand-600" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-brand-600">
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            {result.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Results achieved within one academic year
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/case-studies">
                      View All Case Studies
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
