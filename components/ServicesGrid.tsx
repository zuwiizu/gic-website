import Link from 'next/link';
import { Button } from './ui/button';
import { 
  Users, 
  Globe, 
  Building, 
  AlertTriangle, 
  BarChart3, 
  Lightbulb 
} from 'lucide-react';

const services = [
  {
    title: 'Cultural Competency Training',
    description: 'Interactive workshops that build empathy, enhance communication, and develop strategies for inclusive environments.',
    icon: Users,
    href: '/services/cultural-competency',
    features: ['Faculty & staff training', 'Student workshops', 'Leadership development']
  },
  {
    title: 'International Student Support',
    description: 'Comprehensive crisis response and ongoing support systems for international student populations.',
    icon: Globe,
    href: '/services/international-student-support',
    features: ['Crisis intervention', '24/7 support systems', 'Cultural navigation']
  },
  {
    title: 'Inclusive Workplace Programs',
    description: 'Custom programs that foster belonging and drive innovation in hybrid and remote work environments.',
    icon: Building,
    href: '/services/inclusive-workplace',
    features: ['DEI strategy', 'Team building', 'Policy development']
  },
  {
    title: 'Crisis Response & Mediation',
    description: 'Expert intervention and mediation services for bias incidents and cultural conflicts.',
    icon: AlertTriangle,
    href: '/services/crisis-response',
    features: ['Rapid response', 'Conflict mediation', 'Restorative justice']
  },
  {
    title: 'Assessment & Evaluation',
    description: 'Data-driven climate assessments and program evaluation to measure impact and guide strategy.',
    icon: BarChart3,
    href: '/services/assessment',
    features: ['Campus climate surveys', 'Impact measurement', 'Strategic planning']
  },
  {
    title: 'Strategic Consulting',
    description: 'Long-term partnerships to develop and implement comprehensive inclusion strategies.',
    icon: Lightbulb,
    href: '/services/consulting',
    features: ['Strategic planning', 'Policy review', 'Implementation support']
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From training and assessment to crisis response and strategic consulting, 
            we provide comprehensive solutions for building inclusive communities.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:border-brand-200 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-blue-50/0 group-hover:from-brand-50/30 group-hover:to-blue-50/20 transition-all duration-300 rounded-xl"></div>
                <div className="relative z-10">
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
                <div className="mb-6">
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every organization is unique. We work with you to design programs 
              that address your specific challenges and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Discuss Your Needs
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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
