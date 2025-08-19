import CaseStudyCard from '../../components/CaseStudyCard';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import { ArrowRight, Building, GraduationCap, Heart, Users } from 'lucide-react';

const caseStudies = [
  {
    title: 'Major University Crisis Response: 72-Hour International Student Support',
    summary: 'How we helped a large public research university manage an international student crisis with 100% retention and 95% family satisfaction.',
    slug: 'university-crisis-response',
    industry: 'Higher Education',
    outcome: '100% student retention, 95% family satisfaction',
    metrics: ['< 2 hours response time', '100% retention', '95% satisfaction'],
    featured: true
  },
  {
    title: 'University creates inclusive campus through cultural competency programme',
    summary: 'How a mid-sized university improved belonging and reduced bias incidents using GIC\'s training and advisory services.',
    slug: 'inclusive-campus',
    industry: 'Higher Education',
    outcome: '45% reduction in bias incidents',
    metrics: ['45% incident reduction', '27% satisfaction increase', '200+ staff trained']
  }
];

const industries = [
  { name: 'All Industries', icon: Users, count: 2 },
  { name: 'Universities', icon: GraduationCap, count: 2 },
  { name: 'Healthcare', icon: Heart, count: 0 },
  { name: 'Employers', icon: Building, count: 0 }
];

export const metadata = {
  title: 'Case Studies | Global Insights Collective',
  description: 'Real-world examples of how we help organizations create inclusive communities and drive measurable change. See our proven results and client success stories.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Enhanced Header - Following McKinsey pattern */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real-world examples of how we help organizations create inclusive communities and drive measurable change.
          </p>
          
          {/* Results Summary - Following McKinsey pattern */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-brand-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Organizations Transformed</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-sm text-gray-600">Average Incident Reduction</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">27%</div>
              <div className="text-sm text-gray-600">Satisfaction Improvement</div>
            </div>
          </div>
        </div>

        {/* Industry Filter - Accenture-style */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <button
                  key={industry.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-brand-300 hover:bg-brand-50 transition-colors"
                >
                  <IconComponent className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">{industry.name}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {industry.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Grid - Enhanced cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="bg-white rounded-xl border border-gray-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {cs.featured && (
                <div className="bg-gradient-to-r from-brand-600 to-blue-600 text-white px-4 py-2">
                  <span className="text-sm font-medium">Featured Case Study</span>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-brand-100 text-brand-800 text-xs font-medium rounded-full">
                    {cs.industry}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {cs.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {cs.summary}
                </p>
                
                {/* Key Metrics */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-900 mb-2">Key Results:</div>
                  <div className="flex flex-wrap gap-2">
                    {cs.metrics.map((metric, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button asChild variant="outline" className="w-full group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition-all duration-300">
                  <Link href={`/case-studies/${cs.slug}`}>
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-brand-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help your organization achieve similar results through our proven methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-600">
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
