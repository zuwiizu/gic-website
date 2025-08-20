import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import { StructuredData } from '../../components/StructuredData';
import { 
  HandHeart, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock,
  Target,
  Building,
  Star,
  ArrowRight,
  Globe,
  Award
} from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Nonprofit and Community Organization Consulting",
  "description": "Maximize community impact through strategic cultural competency and engagement programs. Increase program effectiveness by 52% and expand community reach through authentic relationship building.",
  "provider": {
    "@type": "Organization",
    "name": "Global Insights Collective",
    "url": "https://globalinsightscollective.com"
  },
  "areaServed": ["United States", "Canada"],
  "serviceType": "Nonprofit and Community Consulting"
};

export const metadata = {
  title: 'Nonprofit Solutions | Maximize Community Impact | Global Insights Collective',
  description: 'Strengthen community connections and maximize impact. Proven strategies increase program effectiveness by 52% and help nonprofits reach underserved populations more effectively.',
  keywords: 'nonprofit consulting, community engagement, program effectiveness, cultural competency nonprofits, community outreach, nonprofit leadership development',
  openGraph: {
    title: 'Maximize Your Community Impact',
    description: 'Strategic programs that increase nonprofit effectiveness by 52% and strengthen community connections.',
  }
};

export default function NonprofitsPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Who We Help', href: '/who-we-help' },
            { label: 'Community & Nonprofits' }
          ]}
          className="mb-8"
        />

        {/* Hero Section */}
        <section className="text-center mb-16 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <HandHeart className="h-12 w-12 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Maximize Your Community Impact
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Reach more people, serve them better, and create lasting change. Our strategic programs help nonprofits increase program effectiveness by 52% and build authentic relationships with underserved communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-green-600 font-semibold">52% ↑</span>
              <span className="text-gray-600 ml-2">Program Effectiveness</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-blue-600 font-semibold">73% ↑</span>
              <span className="text-gray-600 ml-2">Community Reach</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-purple-600 font-semibold">$340K</span>
              <span className="text-gray-600 ml-2">Avg. Funding Increase</span>
            </div>
          </div>
          <Button asChild size="lg" className="mr-4">
            <Link href="/contact">Get Impact Assessment</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#solutions">See Our Solutions</Link>
          </Button>
        </section>

        {/* Nonprofit Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Challenges Limiting Your Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-red-200">
              <Target className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Limited Community Reach</h3>
              <p className="text-gray-600 mb-4">Struggling to effectively engage with diverse communities that most need your services.</p>
              <div className="text-sm text-red-700">
                <p>• Missed funding opportunities</p>
                <p>• Reduced program impact</p>
                <p>• Community distrust</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-orange-200">
              <Users className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Staff Capacity Issues</h3>
              <p className="text-gray-600 mb-4">Team lacking skills to effectively communicate and build relationships across cultural differences.</p>
              <div className="text-sm text-orange-700">
                <p>• Ineffective outreach</p>
                <p>• Staff burnout</p>
                <p>• Program underutilization</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-blue-200">
              <Building className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Partnership Challenges</h3>
              <p className="text-gray-600 mb-4">Difficulty building strategic relationships with other organizations and community leaders.</p>
              <div className="text-sm text-blue-700">
                <p>• Isolated programming</p>
                <p>• Duplicated efforts</p>
                <p>• Limited resources</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section id="solutions" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How We Help Nonprofits Succeed
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/services/community-engagement" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200 hover:shadow-lg transition-all">
                <HandHeart className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">
                  Community Engagement Strategy
                </h3>
                <p className="text-gray-700 mb-4">
                  Build authentic relationships with diverse communities to increase program reach and effectiveness.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Community mapping and outreach</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Partnership development</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Trust-building methodologies</span>
                  </div>
                </div>
                <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/services/cultural-competency" className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <Users className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                  Staff Development Programs
                </h3>
                <p className="text-gray-700 mb-4">
                  Equip your team with skills to effectively serve diverse populations and build lasting community relationships.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Cross-cultural communication training</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Community engagement skills</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Program design and delivery</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nonprofits We've Helped Succeed
            </h2>
            <p className="text-lg text-gray-600">
              Community organizations that invest in cultural competency see measurable improvements in reach, effectiveness, and community trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">52%</div>
              <div className="text-sm text-gray-600">Increase in program effectiveness scores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">73%</div>
              <div className="text-sm text-gray-600">Expansion in community reach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$340K</div>
              <div className="text-sm text-gray-600">Average increase in annual funding</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">89%</div>
              <div className="text-sm text-gray-600">Improvement in community trust</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 mb-4">
              "Global Insights Collective helped us completely reimagine our community outreach strategy. Their training equipped our staff with practical skills for building trust across cultural barriers, and their community engagement approach helped us reach populations we'd never been able to serve effectively. Our program effectiveness has increased 52%, and we've secured $340,000 in additional funding based on our improved community relationships."
            </blockquote>
            <cite className="text-gray-600">
              <strong>Carmen Rodriguez</strong>, Executive Director, Community Health Alliance
            </cite>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-brand-600 to-purple-700 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Amplify Your Community Impact
          </h2>
          <p className="text-xl mb-8 text-brand-50 max-w-3xl mx-auto">
            Every community deserves organizations that understand and serve them effectively. Let's help you build the relationships and skills that turn good intentions into lasting change.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-50">
            <Link href="/contact">
              Get Impact Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}