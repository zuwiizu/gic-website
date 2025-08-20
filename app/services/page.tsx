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
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions to build stronger communities, improve team performance, and drive measurable business outcomes.
        </p>
      </section>

      {/* Services Directory */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Cultural Competency */}
        <Link href="/services/cultural-competency" className="group">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 h-full">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Cultural Competency Training
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Build global teams that communicate effectively and collaborate confidently across cultural differences.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>45% reduction in cultural incidents</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>92% confidence improvement</span>
            </div>
            <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </Link>

        {/* Crisis Response */}
        <Link href="/services/crisis-response" className="group">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 h-full">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                Crisis Response & Conflict Resolution
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              24/7 expert intervention when bias incidents and cultural conflicts threaten your organization.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>96% resolution rate without formal proceedings</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Same-day emergency response</span>
            </div>
            <div className="flex items-center text-red-600 text-sm font-medium group-hover:text-red-700">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </Link>

        {/* Community Engagement */}
        <Link href="/services/community-engagement" className="group">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 h-full">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Building className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                Community Engagement & Public Safety
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Build safer communities through expert-facilitated dialogue between residents, officials, and service providers.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>89% improvement in community trust</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>67% reduction in community tensions</span>
            </div>
            <div className="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </Link>

        {/* International Student Support */}
        <Link href="/services/international-student-support" className="group">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 h-full">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                <Globe className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                International Student Support
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Comprehensive support system that protects your international student investment and ensures their success.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>34% reduction in dropout rates</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>24/7 crisis support available</span>
            </div>
            <div className="flex items-center text-cyan-600 text-sm font-medium group-hover:text-cyan-700">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </Link>

        {/* Inclusive Workplace */}
        <Link href="/services/inclusive-workplace" className="group">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 h-full">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                Inclusive Workplace Programs
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Transform workplace culture to attract top talent and boost team performance through data-driven strategies.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>41% reduction in turnover</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>28% boost in innovation metrics</span>
            </div>
            <div className="flex items-center text-purple-600 text-sm font-medium group-hover:text-purple-700">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </Link>
      </section>

      {/* Contact CTA */}
      <section className="text-center bg-gradient-to-br from-brand-600 to-blue-700 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Organization?
        </h2>
        <p className="text-xl mb-8 text-brand-50 max-w-3xl mx-auto">
          Every successful transformation starts with a conversation. Let's discuss your specific challenges and design a solution that delivers measurable results.
        </p>
        <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-50">
          <Link href="/contact">
            Schedule Your Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
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