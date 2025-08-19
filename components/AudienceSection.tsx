import Link from 'next/link';
import { Button } from './ui/button';
import { GraduationCap, Building2, Heart, Users } from 'lucide-react';

const audiences = [
  {
    title: 'Universities',
    icon: GraduationCap,
    description: 'Create inclusive campuses where every student can thrive',
    outcomes: [
      'Reduce bias incidents by up to 45%',
      'Improve student retention rates',
      'Enhance campus climate scores',
      'Build stronger community connections'
    ],
    href: '/universities',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Employers',
    icon: Building2,
    description: 'Build diverse teams and cultures that drive innovation',
    outcomes: [
      'Attract and retain top talent',
      'Increase employee engagement',
      'Drive innovation and performance',
      'Strengthen employer brand'
    ],
    href: '/employers',
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    title: 'Healthcare & Public Safety',
    icon: Heart,
    description: 'Deliver equitable services to diverse communities',
    outcomes: [
      'Improve patient outcomes',
      'Build community trust',
      'Reduce health disparities',
      'Enhance service delivery'
    ],
    href: '/healthcare-public-safety',
    color: 'bg-red-50 border-red-200 hover:bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    title: 'Community & Nonprofits',
    icon: Users,
    description: 'Strengthen community connections and impact',
    outcomes: [
      'Expand community reach',
      'Increase program effectiveness',
      'Build strategic partnerships',
      'Enhance cultural responsiveness'
    ],
    href: '/nonprofits',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    iconColor: 'text-purple-600'
  }
];

export default function AudienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Help
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with institutions across sectors to create inclusive environments 
            where diverse identities are valued and supported.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((audience) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={audience.title}
                className={`p-8 rounded-2xl border-2 transition-all duration-200 hover:shadow-lg ${audience.color}`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 rounded-lg bg-white shadow-sm ${audience.iconColor}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {audience.title}
                    </h3>
                    <p className="text-gray-700">
                      {audience.description}
                    </p>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Tangible Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {audience.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mr-3 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button asChild variant="outline" className="w-full">
                  <Link href={audience.href}>
                    Learn More About {audience.title}
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to create lasting change in your organization?
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Start Your Journey Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
