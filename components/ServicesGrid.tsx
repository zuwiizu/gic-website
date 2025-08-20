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
    description: 'Stop walking on eggshells. Our proven workshops transform cultural misunderstandings into competitive advantages. Your teams will navigate diversity with confidence—not confusion.',
    icon: Users,
    href: '/services/cultural-competency',
    features: ['45% reduction in cultural incidents', 'Leadership confidence training', 'Measurable belonging metrics'],
    results: '92% of participants report increased cultural confidence within 30 days'
  },
  {
    title: 'International Student Crisis Response',
    description: 'When crisis strikes your international students, seconds matter. Our 24/7 expert intervention prevents tragedy and protects your institution\'s reputation while saving lives.',
    icon: Globe,
    href: '/services/international-student-support',
    features: ['Emergency response within 2 hours', 'Mental health crisis intervention', 'Family communication protocols'],
    results: '100% crisis resolution rate with zero institutional liability'
  },
  {
    title: 'Inclusive Workplace Strategy',
    description: 'Turn diversity from compliance burden into profit driver. Organizations using our methods see 23% higher innovation rates and 19% revenue growth from inclusive practices.',
    icon: Building,
    href: '/services/inclusive-workplace',
    features: ['Revenue-driving DEI strategy', 'Remote team integration', 'Executive coaching programs'],
    results: 'Average 19% revenue increase within 18 months'
  },
  {
    title: 'Crisis Response & Conflict Resolution',
    description: 'Before bias incidents destroy careers and relationships, our expert mediators restore trust and turn conflicts into learning opportunities that strengthen your community.',
    icon: AlertTriangle,
    href: '/services/crisis-response',
    features: ['Same-day response guarantee', 'Restorative justice processes', 'Legal liability protection'],
    results: '96% of conflicts resolved without formal proceedings'
  },
  {
    title: 'Culture Assessment & Analytics',
    description: 'Stop guessing what works. Our data-driven assessments reveal exactly where inclusion breaks down and provide the roadmap to fix it—with measurable ROI.',
    icon: BarChart3,
    href: '/services/assessment',
    features: ['Comprehensive culture audits', 'Predictive inclusion analytics', 'ROI measurement systems'],
    results: 'Average 31% improvement in inclusion metrics within 6 months'
  },
  {
    title: 'Strategic Transformation Consulting',
    description: 'Ready to lead your industry in inclusion? Our strategic partnerships turn good intentions into systematic change that competitors can\'t replicate.',
    icon: Lightbulb,
    href: '/services/consulting',
    features: ['18-month transformation roadmaps', 'Executive leadership coaching', 'Industry benchmark positioning'],
    results: 'Clients become recognized industry leaders in inclusion'
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Inclusion Into Your Competitive Advantage
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
            Stop treating diversity as a compliance checkbox. Smart leaders partner with us to turn cultural competency into measurable business results. Our proven methodologies deliver the ROI your stakeholders demand—with the heart your communities deserve.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full">23% Higher Innovation Rates</span>
            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full">19% Revenue Growth</span>
            <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full">96% Crisis Resolution Rate</span>
          </div>
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
                <div className="mb-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="mb-6 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 mt-0.5"></div>
                    <p className="text-sm text-green-800 font-medium">
                      {service.results}
                    </p>
                  </div>
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
          <div className="bg-gradient-to-br from-brand-600 to-blue-700 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Lead While Others Follow?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto text-brand-50">
              Your competitors are still treating inclusion as an afterthought. Smart leaders see the opportunity. 
              <strong className="block mt-2 text-white">Join industry pioneers who choose measurable results over good intentions.</strong>
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-6 max-w-md mx-auto">
              <h4 className="text-lg font-semibold mb-3">Start Your Transformation</h4>
              <div className="space-y-1 text-brand-100 text-sm">
                <p>✓ Free consultation with inclusion ROI assessment</p>
                <p>✓ Custom strategy roadmap within 48 hours</p>
                <p>✓ Results guarantee or money back</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-50">
                <Link href="/contact">
                  Book Free Strategy Session
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/services">
                  Explore All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
