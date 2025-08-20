import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Breadcrumb } from '../../../components/ui/breadcrumb';
import { StructuredData } from '../../../components/StructuredData';
import { 
  Users, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Clock,
  MapPin,
  Star,
  ArrowRight
} from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cultural Competency Training",
  "description": "Transform cultural misunderstandings into competitive advantages with proven workshop methodologies that deliver 45% reduction in cultural incidents and 92% participant confidence improvement.",
  "provider": {
    "@type": "Organization",
    "name": "Global Insights Collective",
    "url": "https://globalinsightscollective.com"
  },
  "areaServed": ["United States", "Canada"],
  "serviceType": "Cultural Competency Training",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
};

export const metadata = {
  title: 'Cultural Competency Training | Transform Workplace Dynamics | Global Insights Collective',
  description: 'Stop walking on eggshells. Our proven cultural competency workshops deliver 45% reduction in incidents & 92% confidence improvement. ROI-driven training for smart leaders.',
  keywords: 'cultural competency training, workplace diversity training, inclusion workshops, cultural awareness programs, bias training, cross-cultural communication',
  openGraph: {
    title: 'Cultural Competency Training That Actually Works',
    description: 'Transform cultural misunderstandings into competitive advantages. 92% of participants report increased confidence within 30 days.',
  }
};

export default function CulturalCompetency() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Cultural Competency Training' }
          ]}
          className="mb-8"
        />

        {/* Hero Section */}
        <section className="text-center mb-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build Global Teams That Actually Work Together
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Turn cultural differences into your competitive advantage. Our proven workshops help international teams communicate effectively, resolve conflicts faster, and innovate together—boosting productivity by up to 23%.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-green-600 font-semibold">45% ↓</span>
              <span className="text-gray-600 ml-2">Cultural Incidents</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-blue-600 font-semibold">92%</span>
              <span className="text-gray-600 ml-2">Confidence Improvement</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-purple-600 font-semibold">30 Days</span>
              <span className="text-gray-600 ml-2">To Results</span>
            </div>
          </div>
          <Button asChild size="lg" className="mr-4">
            <Link href="/contact">Get Free ROI Assessment</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#methodology">See How It Works</Link>
          </Button>
        </section>

        {/* The Problem */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Performance Drain of Poor Cross-Cultural Communication
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Teams struggling to communicate across cultural and generational differences</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Managers avoiding direct feedback with international team members</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Talent leaving because they don't feel understood or valued</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Missed opportunities when global perspectives aren't effectively leveraged</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Legal incidents that could have been prevented with proper training</span>
                </p>
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">The Real Cost to Your Organization:</h3>
              <div className="space-y-3 text-red-700">
                <p>• Turnover costs: $15,000-$50,000+ per employee</p>
                <p>• Lost innovation: 23% lower performance in homogeneous teams</p>
                <p>• Legal risk: Average settlement $40,000-$300,000</p>
                <p>• Reputation damage: Immeasurable in today's social media age</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section id="methodology" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Global Team Performance Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Instead of avoiding difficult conversations, we give your teams the frameworks to navigate cultural differences professionally and productively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Self-Awareness</h3>
              <p className="text-gray-600 mb-4">Understand your own cultural lens and unconscious biases before trying to understand others.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Personal bias identification</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Communication style assessment</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Values clarification exercises</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Intelligence Skills</h3>
              <p className="text-gray-600 mb-4">Learn practical frameworks for navigating cross-cultural interactions with confidence.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Active listening techniques</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Conflict de-escalation methods</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Inclusive language mastery</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-World Application</h3>
              <p className="text-gray-600 mb-4">Practice new skills through realistic scenarios and receive immediate feedback.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Interactive role-playing</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Case study analysis</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Peer feedback sessions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Training Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Choose Your Training Format
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Executive Intensive */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Executive Intensive</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <p className="text-gray-700 mb-4">Half-day strategic session for leadership teams</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>4 hours intensive</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span>8-15 executives</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                  <span>On-site or virtual</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-600 mr-2" />Strategic cultural intelligence</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-600 mr-2" />Inclusive leadership frameworks</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-600 mr-2" />Change management strategies</li>
              </ul>
              <Button className="w-full">Request Proposal</Button>
            </div>

            {/* Team Workshop */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Team Workshop Series</h3>
              <p className="text-gray-700 mb-4">Comprehensive 3-session program for departments</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>3 × 2-hour sessions</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span>15-30 team members</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                  <span>Flexible delivery</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Interactive skill building</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Team-specific scenarios</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Progress tracking tools</li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>

            {/* Organization-wide */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Organization-wide Program</h3>
              <p className="text-gray-700 mb-4">Comprehensive cultural transformation initiative</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>6-month implementation</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span>All staff levels</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                  <span>Multi-modal delivery</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" />Culture assessment baseline</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" />Train-the-trainer program</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" />Continuous measurement</li>
              </ul>
              <Button variant="outline" className="w-full">Schedule Discovery</Button>
            </div>
          </div>
        </section>

        {/* Results & Testimonials */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it—see the measurable impact we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-sm text-gray-600">Reduction in cultural incidents within 6 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-sm text-gray-600">Participants report increased confidence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">78%</div>
              <div className="text-sm text-gray-600">Improvement in team collaboration scores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">$2.3M</div>
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
              "Before working with Global Insights Collective, our leadership team was paralyzed by the fear of addressing cultural issues. Now we have confident, productive conversations about diversity that actually strengthen our team dynamics. The ROI has been remarkable—we've seen a 40% reduction in HR incidents and our employee satisfaction scores have never been higher."
            </blockquote>
            <cite className="text-gray-600">
              <strong>Dr. Sarah Chen</strong>, Chief People Officer, TechForward University
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
                How is this different from typical diversity training?
              </h3>
              <p className="text-gray-700">
                Most diversity training focuses on compliance and awareness. Our cultural competency training builds actual skills and confidence. Participants leave with practical tools they can use immediately, not just good intentions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's the time commitment for participants?
              </h3>
              <p className="text-gray-700">
                We offer flexible formats from 4-hour intensives to 6-month programs. Most organizations see significant results with our 3-session workshop series (6 hours total over 3-6 weeks).
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you measure success?
              </h3>
              <p className="text-gray-700">
                We use pre/post assessments, behavior observation metrics, incident tracking, and satisfaction surveys. Our clients typically see measurable improvements within 30-60 days.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-brand-600 to-blue-700 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Stop Letting Cultural Confusion Cost You Talent
          </h2>
          <p className="text-xl mb-8 text-brand-50 max-w-3xl mx-auto">
            Every day you wait is another day your competitors gain ground. Smart leaders invest in cultural competency before they need it, not after an incident forces their hand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-50">
              <Link href="/contact">
                Get Free ROI Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/services">
                Explore All Services
              </Link>
            </Button>
          </div>
          <p className="text-sm text-brand-200">
            No obligation consultation • Custom proposal within 48 hours • Results guarantee
          </p>
        </section>
      </div>
    </>
  );
}