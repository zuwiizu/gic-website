import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Breadcrumb } from '../../../components/ui/breadcrumb';
import { StructuredData } from '../../../components/StructuredData';
import { 
  Building, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock,
  MapPin,
  Star,
  ArrowRight,
  Target,
  BarChart3,
  Award
} from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Inclusive Workplace Programs",
  "description": "Comprehensive workplace transformation programs that attract top talent, reduce turnover by 41%, and boost innovation metrics by 28% through strategic culture development and leadership coaching.",
  "provider": {
    "@type": "Organization",
    "name": "Global Insights Collective",
    "url": "https://globalinsightscollective.com"
  },
  "areaServed": ["United States", "Canada"],
  "serviceType": "Workplace Culture Development",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
};

export const metadata = {
  title: 'Corporate Training & Cultural Competency | Global Insights Collective',
  description: 'Professional training programs including cultural competency, leadership development, and workplace transformation that improve performance and reduce turnover.',
  keywords: 'corporate training, cultural competency training, leadership development, workplace culture, diversity training, professional development',
  openGraph: {
    title: 'Corporate Training & Cultural Competency Services',
    description: 'Transform your workplace culture with proven training programs and cultural competency development.',
  }
};

export default function InclusiveWorkplace() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Inclusive Workplace Programs' }
          ]}
          className="mb-8"
        />

        {/* Hero Section */}
        <section className="text-center mb-12 border-b pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Corporate Training & Strategy Consulting
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Training programs, keynote speaker services, strategic consulting, and leadership development that drives real business results.
          </p>
          <div className="flex justify-center gap-8 mb-6 text-sm text-gray-600">
            <span>Corporate training</span>
            <span>Keynote speaker</span>
            <span>Strategy consulting</span>
          </div>
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Common Workplace Challenges
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Communication Breakdowns</h3>
                    <p className="text-gray-600 text-sm">Poor communication causing project delays and misaligned expectations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Leadership Gaps</h3>
                    <p className="text-gray-600 text-sm">Skills gaps in leadership affecting overall team performance and direction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">High Turnover</h3>
                    <p className="text-gray-600 text-sm">Difficulty retaining top talent and maintaining institutional knowledge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                  <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Low Team Morale</h3>
                    <p className="text-gray-600 text-sm">Workplace conflicts and unclear performance standards affecting productivity</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Solutions Deliver Results
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Enhanced Productivity</h3>
                    <p className="text-gray-600 text-sm">Improved team efficiency and streamlined communication processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Stronger Leadership</h3>
                    <p className="text-gray-600 text-sm">Developed management skills and confident decision-making capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
                  <div className="flex-shrink-0 w-2 h-2 bg-indigo-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Reduced Costs</h3>
                    <p className="text-gray-600 text-sm">Lower turnover rates and decreased recruitment and training expenses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-400">
                  <div className="flex-shrink-0 w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Better Communication</h3>
                    <p className="text-gray-600 text-sm">Clear, effective workplace communication and collaborative team dynamics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="framework" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How We Help Your Organization
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Corporate Training</h3>
              <p className="text-sm text-gray-600 mb-3">Workshops and programs that develop your team's skills and performance.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Leadership development</li>
                <li>• Communication skills</li>
                <li>• Team building</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Keynote Speaking</h3>
              <p className="text-sm text-gray-600 mb-3">Inspiring presentations for conferences, events, and company meetings.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Conference keynotes</li>
                <li>• Company events</li>
                <li>• Industry panels</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Strategy Consulting</h3>
              <p className="text-sm text-gray-600 mb-3">Strategic guidance to help organizations navigate complex challenges.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Organizational strategy</li>
                <li>• Change management</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Executive Coaching</h3>
              <p className="text-sm text-gray-600 mb-3">One-on-one coaching for leaders and high-potential employees.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Leadership coaching</li>
                <li>• Executive development</li>
                <li>• Career advancement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Program Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Workplace Transformation Programs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Culture Transformation */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Culture Transformation</h3>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <p className="text-gray-700 mb-4">Comprehensive 12-month culture development program</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>12-month program</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span>Organization-wide</span>
                </div>
                <div className="flex items-center text-sm">
                  <BarChart3 className="h-4 w-4 text-gray-500 mr-2" />
                  <span>Data-driven approach</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-600 mr-2" />Complete culture assessment</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-600 mr-2" />Leadership development</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-600 mr-2" />Policy and process redesign</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/contact">Start Transformation</Link>
              </Button>
            </div>

            {/* Leadership Coaching */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Leadership Coaching</h3>
              <p className="text-gray-700 mb-4">Intensive coaching for senior leaders on performance-driven culture building</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>6-month intensive</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span>C-suite and senior leaders</span>
                </div>
                <div className="flex items-center text-sm">
                  <Target className="h-4 w-4 text-gray-500 mr-2" />
                  <span>1:1 and group sessions</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Strategic culture planning</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Performance management skills</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Change leadership techniques</li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Rapid Assessment */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Culture Assessment</h3>
              <p className="text-gray-700 mb-4">Fast-track analysis to identify quick wins and strategic priorities</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>30-day assessment</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span>All-hands participation</span>
                </div>
                <div className="flex items-center text-sm">
                  <Award className="h-4 w-4 text-gray-500 mr-2" />
                  <span>Actionable recommendations</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Baseline culture metrics</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Benchmarking analysis</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" />Quick-win identification</li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Get Assessment</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Key Focus Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Where We Drive the Biggest Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Talent Attraction</h3>
              <p className="text-gray-600 text-sm mb-4">Become the employer that top performers actively seek out.</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Employer brand development</li>
                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Recruitment process optimization</li>
                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Value proposition clarity</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <Users className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Team Performance</h3>
              <p className="text-gray-600 text-sm mb-4">Unlock the full potential of diverse teams working together.</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Collaboration frameworks</li>
                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Communication optimization</li>
                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Conflict resolution systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <Building className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Leadership Development</h3>
              <p className="text-gray-600 text-sm mb-4">Build leaders who can maximize team potential across all backgrounds.</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Coaching methodologies</li>
                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Performance management</li>
                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Strategic thinking skills</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow">
              <BarChart3 className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Measurement & ROI</h3>
              <p className="text-gray-600 text-sm mb-4">Track progress with metrics that matter to business outcomes.</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Retention analytics</li>
                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Performance indicators</li>
                <li className="flex items-center"><CheckCircle className="h-3 w-3 text-green-500 mr-2" />Innovation metrics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results & Testimonials */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ROI That Speaks for Itself
            </h2>
            <p className="text-lg text-gray-600">
              Organizations that invest in strategic culture development see measurable returns on investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">41%</div>
              <div className="text-sm text-gray-600">Reduction in voluntary turnover within 18 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">28%</div>
              <div className="text-sm text-gray-600">Improvement in innovation and creativity metrics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">87%</div>
              <div className="text-sm text-gray-600">Employee satisfaction and engagement scores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">$1.4M</div>
              <div className="text-sm text-gray-600">Average annual savings from reduced turnover</div>
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
              "Global Insights Collective helped us transform from a workplace where talented people left after 18 months to one where they build entire careers. Their data-driven approach showed us exactly where we were losing people and why. Now we're attracting candidates who turn down offers from our biggest competitors to work here instead."
            </blockquote>
            <cite className="text-gray-600">
              <strong>Jennifer Kim</strong>, Chief People Officer, InnovateTech Solutions
            </cite>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly can we expect to see results?
              </h3>
              <p className="text-gray-700">
                Most organizations see initial improvements in employee satisfaction within 60-90 days. Measurable reductions in turnover typically occur within 6-12 months, with full culture transformation taking 12-18 months.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's the ROI on workplace culture investment?
              </h3>
              <p className="text-gray-700">
                Our clients typically see 300-500% ROI within 24 months through reduced turnover costs, improved productivity, and enhanced ability to attract top talent. The average organization saves $1.4M annually in turnover-related costs alone.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you measure culture change success?
              </h3>
              <p className="text-gray-700">
                We track employee engagement scores, retention rates, internal promotion rates, recruitment success metrics, performance indicators, and innovation measures. All programs include quarterly progress reviews with data-driven recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-brand-600 to-purple-700 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Stop Losing Top Talent to Competitors
          </h2>
          <p className="text-xl mb-8 text-brand-50 max-w-3xl mx-auto">
            In today's competitive talent market, workplace culture is your secret weapon. Organizations with strong cultures attract the best candidates and keep them longer—turning culture investment into competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-50">
              <Link href="/contact">
                Get Culture Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
          <p className="text-sm text-brand-200">
            Free culture assessment • Custom development plan • Proven ROI methodology
          </p>
        </section>
      </div>
    </>
  );
}