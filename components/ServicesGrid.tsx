import Link from 'next/link';
import { Button } from './ui/button';
import {
  Users,
  Globe,
  Building,
  AlertTriangle,
  BarChart3,
  Lightbulb,
  Shield
} from 'lucide-react';

const services = [
  {
    title: 'International Student Support',
    description: 'Comprehensive university admissions guidance and support services for international students, backed by decades of higher education experience and proven crisis management expertise.',
    icon: Globe,
    href: '/services/international-student-support',
    features: ['University admissions guidance', 'Crisis response systems', 'Compliance & policy development']
  },
  {
    title: 'Enterprise Risk Management',
    description: 'Strategic risk management programs for aviation, marine, transportation, and business operations. Proven frameworks used by major infrastructure organizations and federal projects.',
    icon: Shield,
    href: '/services/enterprise-risk-management',
    features: ['Business continuity planning', 'Federal program management', 'Infrastructure risk assessment']
  },
  {
    title: 'Corporate Services',
    description: 'Workplace transformation programs that attract top talent, reduce turnover, and boost innovation through strategic culture development and leadership coaching.',
    icon: Building,
    href: '/services/inclusive-workplace',
    features: ['Culture development', 'Leadership coaching', 'Performance improvement']
  },
  {
    title: 'Strategic Consulting',
    description: 'Expert strategic guidance combining M.Ed. academic rigor with PMP® project management certification. Proven track record with major ports, universities, and international organizations.',
    icon: Lightbulb,
    href: '/services/consulting',
    features: ['Project management (PMP®)', 'Policy analysis & development', 'International relations']
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional consulting and support services that drive measurable results for organizations and individuals.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:border-brand-200 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden h-full"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-blue-50/0 group-hover:from-brand-50/30 group-hover:to-blue-50/20 transition-all duration-300 rounded-xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                {/* Enhanced Icon */}
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-100 to-brand-200 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <IconComponent className="h-7 w-7 text-brand-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced CTA */}
                <Button asChild variant="outline" className="w-full group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition-all duration-300">
                  <Link href={service.href}>
                    Learn More
                  </Link>
                </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-brand-600 text-white p-8 lg:p-12 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the 50+ organizations that have achieved measurable results through our evidence-based approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-white text-brand-600 hover:bg-gray-100">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}