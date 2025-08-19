import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import ServiceCard from '../../components/ServiceCard';
import {
  Users,
  Globe,
  Building,
  AlertTriangle,
  BarChart3,
  Lightbulb,
  CheckCircle,
  Clock,
  MapPin
} from 'lucide-react';

const services = [
  {
    title: "Cultural Competency Training",
    description: "Interactive workshops that build empathy, enhance communication, and develop strategies for inclusive environments.",
    icon: Users,
    href: "/services/cultural-competency",
    features: ["Faculty & staff training", "Student workshops", "Leadership development"],
    duration: "Half-day to multi-day programs",
    delivery: ["In-person", "Virtual", "Hybrid"],
    outcomes: ["Increased cultural awareness", "Improved communication skills", "Reduced bias incidents"]
  },
  {
    title: "International Student Support",
    description: "Comprehensive crisis response and ongoing support systems for international student populations.",
    icon: Globe,
    href: "/services/international-student-support",
    features: ["Crisis intervention", "24/7 support systems", "Cultural navigation"],
    duration: "Ongoing support with rapid response",
    delivery: ["On-site", "Remote", "Emergency response"],
    outcomes: ["Faster crisis resolution", "Improved student wellbeing", "Enhanced support systems"]
  },
  {
    title: "Inclusive Workplace Programs",
    description: "Custom programs that foster belonging and drive innovation in hybrid and remote work environments.",
    icon: Building,
    href: "/services/inclusive-workplace",
    features: ["DEI strategy", "Team building", "Policy development"],
    duration: "3-12 month engagements",
    delivery: ["Strategic consulting", "Training programs", "Policy review"],
    outcomes: ["Increased engagement", "Better retention", "Stronger culture"]
  },
  {
    title: "Crisis Response & Mediation",
    description: "Expert intervention and mediation services for bias incidents and cultural conflicts.",
    icon: AlertTriangle,
    href: "/services/crisis-response",
    features: ["Rapid response", "Conflict mediation", "Restorative justice"],
    duration: "Immediate to 6-week resolution",
    delivery: ["Emergency response", "Mediation sessions", "Follow-up support"],
    outcomes: ["Faster resolution", "Restored relationships", "Prevented escalation"]
  },
  {
    title: "Assessment & Evaluation",
    description: "Data-driven climate assessments and program evaluation to measure impact and guide strategy.",
    icon: BarChart3,
    href: "/services/assessment",
    features: ["Campus climate surveys", "Impact measurement", "Strategic planning"],
    duration: "2-6 month projects",
    delivery: ["Survey design", "Data analysis", "Report presentation"],
    outcomes: ["Clear baseline data", "Actionable insights", "Progress tracking"]
  },
  {
    title: "Strategic Consulting",
    description: "Long-term partnerships to develop and implement comprehensive inclusion strategies.",
    icon: Lightbulb,
    href: "/services/consulting",
    features: ["Strategic planning", "Policy review", "Implementation support"],
    duration: "6-24 month partnerships",
    delivery: ["Executive coaching", "Strategic planning", "Change management"],
    outcomes: ["Comprehensive strategy", "Sustainable change", "Organizational transformation"]
  }
];

export const metadata = {
  title: 'Our Services | Global Insights Collective',
  description: 'Comprehensive training, consulting, and support services to help organizations build inclusive communities and drive measurable outcomes.',
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: 'Services' }]}
        className="mb-8"
      />

      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          From training and assessment to crisis response and strategic consulting,
          we provide comprehensive solutions for building inclusive communities.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Discuss Your Needs</Link>
        </Button>
      </section>

      {/* Services Grid */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand-100 rounded-lg flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-brand-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-start space-x-2">
                    <Clock className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Duration</div>
                      <div className="text-gray-600">{service.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">Delivery</div>
                      <div className="text-gray-600">{service.delivery.join(', ')}</div>
                    </div>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Expected Outcomes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.outcomes.map((outcome, outcomeIndex) => (
                      <span
                        key={outcomeIndex}
                        className="px-3 py-1 bg-brand-50 text-brand-700 text-xs rounded-full"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button asChild variant="outline" className="w-full">
                  <Link href={service.href}>
                    Learn More About {service.title}
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Every organization is unique. We work with you to design programs
          that address your specific challenges and goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/case-studies">See Our Success Stories</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}