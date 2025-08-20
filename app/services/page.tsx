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
    title: "Customized Workshops",
    description: "Transform your team dynamics with our signature workshops. We craft immersive learning experiences that break down cultural barriers, spark meaningful dialogue, and equip your people with practical tools for inclusive collaboration.",
    icon: Users,
    href: "/services/cultural-competency",
    features: ["Higher education institutions", "Healthcare systems", "Corporate teams", "Government agencies & NGOs"],
    duration: "Half-day intensives to multi-day transformations",
    delivery: ["In-person immersion", "Virtual facilitation", "Hybrid experiences"],
    outcomes: ["Measurable behavior change", "Stronger team cohesion", "Reduced conflict incidents"]
  },
  {
    title: "Training Programs",
    description: "Develop your organization's cultural intelligence through our comprehensive training curricula. Address the real challenges of cultural adjustment, workplace belonging, and psychological safety with evidence-based methodologies.",
    icon: Globe,
    href: "/services/international-student-support",
    features: ["Cultural navigation mastery", "Inclusive leadership development", "Well-being & resilience building", "Crisis prevention & response"],
    duration: "Modular programs with sustained impact",
    delivery: ["Expert-led sessions", "Peer learning circles", "Digital learning platforms"],
    outcomes: ["Higher retention rates", "Improved performance metrics", "Enhanced organizational reputation"]
  },
  {
    title: "Strategic Consulting",
    description: "Navigate complexity with confidence. Our consultants become your embedded partners, helping you decode cultural dynamics, streamline communication, and architect environments where inclusion isn't just policy—it's practice.",
    icon: Building,
    href: "/services/inclusive-workplace",
    features: ["Organizational culture assessment", "Communication systems optimization", "Inclusive practice design", "Change management support"],
    duration: "3-18 month strategic partnerships",
    delivery: ["Executive advisory", "Implementation coaching", "Continuous optimization"],
    outcomes: ["Sustained cultural transformation", "Competitive advantage", "Industry leadership recognition"]
  },
  {
    title: "Keynote Speaking",
    description: "Ignite change with presentations that move beyond awareness to action. Ismail Warsame delivers keynotes that combine compelling storytelling with actionable frameworks your audience can implement immediately.",
    icon: Lightbulb,
    href: "/services/consulting",
    features: ["Cross-cultural mastery insights", "Inclusion strategy frameworks", "Leadership transformation stories", "Change catalyst methodologies"],
    duration: "45-90 minute transformative experiences",
    delivery: ["Dynamic in-person presentations", "Interactive virtual sessions", "Thought-provoking panel discussions"],
    outcomes: ["Inspired action-taking", "Clear implementation roadmaps", "Energized change champions"]
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
          Transform Your Organization
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Partner with Global Insights Collective to build workplaces and learning environments 
          where every individual thrives. Our proven methodologies drive measurable results 
          in cultural competence, inclusion, and organizational resilience.
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
          Ready to Lead the Change?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Join forward-thinking organizations that choose excellence in inclusion. 
          Every engagement is tailored to your unique challenges, cultural context, and strategic goals.
          <strong className="block mt-2 text-gray-700">Because transformation isn't one-size-fits-all.</strong>
        </p>
        <div className="bg-white rounded-lg p-6 mb-8 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact for Consultation</h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Phone:</strong> 207-766-8538</p>
            <p><strong>Email:</strong> i.warsame@globalinsightscollective.com</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}