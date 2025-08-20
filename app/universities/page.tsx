import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import { StructuredData } from '../../components/StructuredData';
import { 
  GraduationCap, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Clock,
  Users,
  Globe,
  Star,
  ArrowRight,
  AlertTriangle,
  BookOpen
} from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "University Consulting Services",
  "description": "Comprehensive university consulting that reduces campus incidents by 45%, improves student retention, and protects institutional reputation through expert crisis response and cultural competency programs.",
  "provider": {
    "@type": "Organization",
    "name": "Global Insights Collective",
    "url": "https://globalinsightscollective.com"
  },
  "areaServed": ["United States", "Canada"],
  "serviceType": "University Consulting and Training"
};

export const metadata = {
  title: 'University Solutions | Campus Safety & Student Success | Global Insights Collective',
  description: 'Transform your campus culture and protect student success. Proven programs that reduce incidents by 45%, improve retention, and strengthen your institutional reputation.',
  keywords: 'university consulting, campus safety, student retention, international student support, campus culture, higher education consulting',
  openGraph: {
    title: 'University Solutions That Protect Students and Reputation',
    description: 'Proven programs that reduce campus incidents by 45% and improve student success outcomes.',
  }
};

export default function UniversitiesPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Who We Help', href: '/who-we-help' },
            { label: 'Universities' }
          ]}
          className="mb-8"
        />

        {/* Hero Section */}
        <section className="text-center mb-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <GraduationCap className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Protect Your Students. Protect Your Reputation.
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Transform your campus culture with proven programs that reduce incidents by 45%, improve student retention, and turn potential crises into learning opportunities that strengthen your community.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-green-600 font-semibold">45% ↓</span>
              <span className="text-gray-600 ml-2">Campus Incidents</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-blue-600 font-semibold">34% ↓</span>
              <span className="text-gray-600 ml-2">Student Dropout Rate</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-purple-600 font-semibold">$850K</span>
              <span className="text-gray-600 ml-2">Revenue Protected</span>
            </div>
          </div>
          <Button asChild size="lg" className="mr-4">
            <Link href="/contact">Get Campus Assessment</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#solutions">See Our Solutions</Link>
          </Button>
        </section>

        {/* University Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Critical Challenges Facing Universities Today
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-red-200">
              <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Campus Incidents</h3>
              <p className="text-gray-600 mb-4">Bias incidents and cultural conflicts that threaten campus safety and institutional reputation.</p>
              <div className="text-sm text-red-700">
                <p>• Legal liability exposure</p>
                <p>• Reputation damage</p>
                <p>• Student safety concerns</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-orange-200">
              <Globe className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">International Student Challenges</h3>
              <p className="text-gray-600 mb-4">Cultural adjustment difficulties leading to academic struggles and high dropout rates.</p>
              <div className="text-sm text-orange-700">
                <p>• Lost tuition revenue</p>
                <p>• Reduced global rankings</p>
                <p>• Accreditation concerns</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-blue-200">
              <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Faculty & Staff Preparedness</h3>
              <p className="text-gray-600 mb-4">Teams lacking skills to effectively support diverse student populations and handle cultural conflicts.</p>
              <div className="text-sm text-blue-700">
                <p>• Ineffective interventions</p>
                <p>• Escalated conflicts</p>
                <p>• Staff burnout</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section id="solutions" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How We Help Universities Succeed
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/services/international-student-support" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
                <Globe className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                  International Student Support
                </h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive support system with 24/7 crisis response that reduces dropout rates by 34% and protects tuition revenue.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Crisis intervention protocols</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Cultural navigation training</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Staff development programs</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/services/cultural-competency" className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <Users className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600">
                  Campus Cultural Competency
                </h3>
                <p className="text-gray-700 mb-4">
                  Build campus teams that communicate effectively across cultural differences, reducing incidents by 45%.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Faculty and staff training</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Student leadership development</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Campus climate improvement</span>
                  </div>
                </div>
                <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/services/crisis-response" className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <Shield className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600">
                  Campus Crisis Response
                </h3>
                <p className="text-gray-700 mb-4">
                  24/7 expert intervention when campus incidents threaten student safety and institutional reputation.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Same-day emergency response</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>96% resolution without formal proceedings</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Community healing facilitation</span>
                  </div>
                </div>
                <div className="flex items-center text-red-600 font-medium group-hover:text-red-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <BookOpen className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Speaking Engagements
              </h3>
              <p className="text-gray-700 mb-4">
                Expert presentations for conferences, training events, and campus professional development.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>International student success strategies</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Campus safety and crisis response</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Building effective campus teams</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Link href="/speaking">View Speaking Topics</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              University Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results from institutions that invested in comprehensive student support and campus culture development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-sm text-gray-600">Reduction in campus bias incidents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">34%</div>
              <div className="text-sm text-gray-600">Decrease in international student dropout rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$850K</div>
              <div className="text-sm text-gray-600">Average annual tuition revenue protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">91%</div>
              <div className="text-sm text-gray-600">Improvement in campus climate scores</div>
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
              "Working with Global Insights Collective transformed our approach to student support and campus safety. Their crisis response team prevented what could have been a major incident from escalating, and their training programs have made our staff more confident and effective. Our international student retention rate has improved by 34%, protecting over $850,000 in annual tuition revenue."
            </blockquote>
            <cite className="text-gray-600">
              <strong>Dr. Patricia Williams</strong>, Vice Provost for Student Affairs, Mountain Ridge University
            </cite>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-brand-600 to-blue-700 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Protect Your Students and Your Institution
          </h2>
          <p className="text-xl mb-8 text-brand-50 max-w-3xl mx-auto">
            Every student crisis prevented is a success story preserved. Every cultural conflict resolved strengthens your entire campus community. Let's build the support systems your students deserve.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-50">
            <Link href="/contact">
              Schedule Campus Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}