import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import { StructuredData } from '../../components/StructuredData';
import { 
  Building2, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock,
  Target,
  BarChart3,
  Star,
  ArrowRight,
  Award,
  Lightbulb
} from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Corporate Consulting Services",
  "description": "Transform workplace culture to attract top talent and boost performance. Data-driven programs that reduce turnover by 41%, increase innovation by 28%, and build competitive advantage through strategic culture development.",
  "provider": {
    "@type": "Organization",
    "name": "Global Insights Collective",
    "url": "https://globalinsightscollective.com"
  },
  "areaServed": ["United States", "Canada"],
  "serviceType": "Corporate Culture and Performance Consulting"
};

export const metadata = {
  title: 'Corporate Solutions | Attract Top Talent & Boost Performance | Global Insights Collective',
  description: 'Build workplace culture that top talent chooses. Proven programs reduce turnover by 41%, boost innovation by 28%, and create sustainable competitive advantage.',
  keywords: 'corporate consulting, workplace culture, talent retention, team performance, leadership development, employee engagement, organizational transformation',
  openGraph: {
    title: 'Build a Workplace That Top Talent Chooses',
    description: 'Data-driven culture programs that reduce turnover by 41% and boost innovation by 28%.',
  }
};

export default function EmployersPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Who We Help', href: '/who-we-help' },
            { label: 'Employers' }
          ]}
          className="mb-8"
        />

        {/* Hero Section */}
        <section className="text-center mb-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <Building2 className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Win the War for Top Talent
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Stop losing high performers to competitors with better cultures. Our data-driven workplace programs help you attract exceptional talent, boost team performance by 28%, and build sustainable competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-green-600 font-semibold">41% ↓</span>
              <span className="text-gray-600 ml-2">Turnover Rate</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-blue-600 font-semibold">28% ↑</span>
              <span className="text-gray-600 ml-2">Innovation Metrics</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-purple-600 font-semibold">$1.4M</span>
              <span className="text-gray-600 ml-2">Annual Savings</span>
            </div>
          </div>
          <Button asChild size="lg" className="mr-4">
            <Link href="/contact">Get Culture Assessment</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#solutions">See Our Solutions</Link>
          </Button>
        </section>

        {/* Business Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            The Talent Challenge in Today's Market
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-red-200">
              <TrendingUp className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Talent Shortage</h3>
              <p className="text-gray-600 mb-4">High performers have choices and increasingly choose employers with strong, authentic cultures.</p>
              <div className="text-sm text-red-700">
                <p>• Extended recruitment cycles</p>
                <p>• Higher salary demands</p>
                <p>• Competitor advantage</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-orange-200">
              <Users className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Team Dysfunction</h3>
              <p className="text-gray-600 mb-4">Poor communication across cultural and generational differences reduces productivity and innovation.</p>
              <div className="text-sm text-orange-700">
                <p>• Missed deadlines</p>
                <p>• Reduced innovation</p>
                <p>• Low engagement</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-blue-200">
              <BarChart3 className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Performance Gaps</h3>
              <p className="text-gray-600 mb-4">Global teams underperforming due to cultural misunderstandings and communication barriers.</p>
              <div className="text-sm text-blue-700">
                <p>• Slower decision-making</p>
                <p>• Reduced collaboration</p>
                <p>• Lower output quality</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section id="solutions" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How We Help Employers Win
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/services/inclusive-workplace" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 hover:shadow-lg transition-all">
                <Building2 className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600">
                  Workplace Culture Transformation
                </h3>
                <p className="text-gray-700 mb-4">
                  Build workplace cultures that attract top talent and maximize team performance across all backgrounds.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>41% reduction in turnover</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>28% boost in innovation metrics</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>$1.4M average annual savings</span>
                  </div>
                </div>
                <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/services/cultural-competency" className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <Users className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                  Global Team Performance
                </h3>
                <p className="text-gray-700 mb-4">
                  Transform cultural differences into competitive advantages with teams that communicate effectively and innovate together.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Executive and team workshops</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Communication framework training</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Performance optimization strategies</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-brand-600 to-green-700 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Turn Culture Into Your Competitive Advantage
          </h2>
          <p className="text-xl mb-8 text-brand-50 max-w-3xl mx-auto">
            In the war for talent, culture is your secret weapon. Organizations with strong, authentic cultures don't just attract better candidates—they keep them longer and unlock their full potential.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-50">
            <Link href="/contact">
              Start Your Culture Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}