import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { ArrowRight, Users, Building2, Heart, HandHeart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Who We Help | Global Insights Collective',
  description: 'We partner with universities, employers, healthcare systems, and nonprofits to create inclusive communities and measurable outcomes.',
};

const audiences = [
  {
    title: 'International Students & Universities',
    icon: Users,
    description: 'Supporting international students through their academic journey',
    benefits: ['University admissions guidance', 'Application support and mentoring', 'Academic success strategies'],
    href: '/services/international-student-support'
  },
  {
    title: 'Corporate Organizations',
    icon: Building2,
    description: 'Building inclusive workplaces that drive performance',
    benefits: ['Cultural competency training', 'Inclusive leadership development', 'Organizational transformation'],
    href: '/services/inclusive-workplace'
  },
  {
    title: 'All Organizations',
    icon: HandHeart,
    description: 'Strategic consulting and professional speaking services',
    benefits: ['Strategic organizational consulting', 'Keynote speaking engagements', 'Custom training programs'],
    href: '/services/consulting'
  },
  {
    title: 'Event Organizers',
    icon: Heart,
    description: 'Professional speaking for conferences and events',
    benefits: ['Keynote presentations', 'Workshop facilitation', 'Panel discussions'],
    href: '/speaking'
  }
];

export default function WhoWeHelpPage() {
  return (
    <main id="main-content">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Who We Help
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              We partner with organizations across sectors to translate cultural awareness into measurable outcomes
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <div key={audience.title} className="bg-white border border-gray-200 rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                    <h2 className="text-xl font-semibold">{audience.title}</h2>
                  </div>
                  <p className="text-gray-700 mb-6">{audience.description}</p>
                  <ul className="space-y-2 mb-6">
                    {audience.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline">
                    <Link href={audience.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to create lasting change?</h2>
            <p className="text-gray-700 mb-6">Let's discuss how we can help your organization build inclusive communities</p>
            <Button asChild size="lg">
              <Link href="/contact">
                Start your journey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}