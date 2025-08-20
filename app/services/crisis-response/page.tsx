import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Breadcrumb } from '../../../components/ui/breadcrumb';
import { StructuredData } from '../../../components/StructuredData';
import { 
  AlertTriangle, 
  CheckCircle, 
  Phone, 
  Shield, 
  Clock,
  Users,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Crisis Response & Conflict Resolution",
  "description": "Expert intervention and mediation services for bias incidents and cultural conflicts with 96% resolution rate without formal proceedings and same-day response guarantee.",
  "provider": {
    "@type": "Organization",
    "name": "Global Insights Collective",
    "url": "https://globalinsightscollective.com"
  },
  "areaServed": ["United States", "Canada"],
  "serviceType": "Crisis Response and Mediation",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
};

export const metadata = {
  title: 'Crisis Response & Conflict Resolution | 24/7 Expert Intervention | Global Insights Collective',
  description: 'Before bias incidents destroy careers and relationships, our expert mediators restore trust with 96% resolution rate without formal proceedings. Same-day response guaranteed.',
  keywords: 'crisis response, conflict resolution, bias incident response, cultural conflict mediation, restorative justice, emergency intervention',
  openGraph: {
    title: 'Crisis Response That Protects Your Organization',
    description: '96% of conflicts resolved without formal proceedings. Expert intervention when seconds matter.',
  }
};

export default function CrisisResponse() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Crisis Response & Conflict Resolution' }
          ]}
          className="mb-8"
        />

        {/* Hero Section */}
        <section className="text-center mb-16 bg-gradient-to-br from-red-50 to-orange-100 rounded-2xl p-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            When Crisis Strikes, Seconds Matter
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Before bias incidents destroy careers and relationships, our expert mediators restore trust and turn conflicts into learning opportunities that strengthen your community.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-green-600 font-semibold">96%</span>
              <span className="text-gray-600 ml-2">Resolution Rate</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-blue-600 font-semibold">Same Day</span>
              <span className="text-gray-600 ml-2">Response</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-purple-600 font-semibold">Zero</span>
              <span className="text-gray-600 ml-2">Formal Proceedings</span>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg">
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-semibold">24/7 Emergency: (207) 766-8538</span>
            </div>
          </div>
          <Button asChild size="lg" className="mr-4">
            <Link href="/contact">Request Emergency Response</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#process">See Our Process</Link>
          </Button>
        </section>

        {/* Crisis Scenarios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            When You Need Expert Intervention
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-red-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Bias Incidents</h3>
              <p className="text-gray-600 mb-4">Racist, sexist, or discriminatory behavior that threatens workplace harmony and legal compliance.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Immediate harm assessment</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Legal risk mitigation</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Community healing facilitation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Team Conflicts</h3>
              <p className="text-gray-600 mb-4">Cultural misunderstandings escalating into productivity-killing team dysfunction.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Root cause analysis</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Structured dialogue facilitation</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Ongoing support protocols</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Leadership Crises</h3>
              <p className="text-gray-600 mb-4">Executive missteps requiring immediate damage control and strategic communication.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Strategic communication planning</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Stakeholder engagement</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Reputation recovery</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Escalating Tensions</h3>
              <p className="text-gray-600 mb-4">When small misunderstandings threaten to become major organizational disruptions.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Early intervention strategies</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />De-escalation techniques</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Prevention protocols</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Social Media Incidents</h3>
              <p className="text-gray-600 mb-4">When private conflicts become public relations nightmares requiring swift action.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Rapid response protocols</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Message coordination</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Community engagement</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Student Incidents</h3>
              <p className="text-gray-600 mb-4">Campus conflicts requiring sensitive handling to protect all parties while maintaining learning environment.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Educational approach</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Family communication</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Learning opportunity creation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section id="process" className="mb-16 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Crisis Response Process
            </h2>
            <p className="text-lg text-gray-600">
              Developed over 15 years of successfully resolving cultural conflicts and bias incidents.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Immediate Assessment (0-2 hours)</h3>
                <p className="text-gray-700 mb-4">
                  Emergency triage to assess risk level, identify immediate safety concerns, and mobilize appropriate resources.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Risk level determination</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Stakeholder identification</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Legal consultation</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Communication strategy</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stabilization & Investigation (2-24 hours)</h3>
                <p className="text-gray-700 mb-4">
                  Secure the situation, conduct initial interviews, and establish a fact-based understanding of what occurred.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Individual interviews</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Evidence gathering</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Safety measures</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Interim communications</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mediated Resolution (1-3 days)</h3>
                <p className="text-gray-700 mb-4">
                  Facilitate structured dialogue between parties to reach mutual understanding and agreement on path forward.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Separate preparation sessions</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Facilitated dialogue</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Agreement development</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Documentation</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community Healing & Prevention (1-4 weeks)</h3>
                <p className="text-gray-700 mb-4">
                  Address broader community impact and implement systems to prevent similar incidents in the future.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Community forums</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Policy recommendations</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Training development</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Follow-up protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Crisis Response That Works
            </h2>
            <p className="text-lg text-gray-600">
              Our track record speaks for itself—conflicts resolved, relationships restored, communities strengthened.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">96%</div>
              <div className="text-sm text-gray-600">Conflicts resolved without formal proceedings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2 hrs</div>
              <div className="text-sm text-gray-600">Average response time for emergency situations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$847K</div>
              <div className="text-sm text-gray-600">Average legal costs saved per resolved incident</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">Zero</div>
              <div className="text-sm text-gray-600">Incidents escalated to external litigation</div>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Case Study: Major University Bias Incident</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">The Crisis</h4>
                <p className="text-sm text-gray-700">Faculty member made culturally insensitive comments in class. Students filmed and posted on social media. Campus protests began within hours.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Our Response</h4>
                <p className="text-sm text-gray-700">On-site within 90 minutes. Separate meetings with all parties. Facilitated community dialogue. Developed learning opportunity.</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">The Outcome</h4>
                <p className="text-sm text-gray-700">Faculty took responsibility, students accepted apology, new campus-wide training implemented. Stronger community relationships.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mb-16 bg-red-50 rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Don't Wait Until It's Too Late
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Cultural conflicts and bias incidents can explode without warning. Having an expert response plan isn't just smart—it's essential protection for your organization and community.
            </p>
            <div className="bg-white p-6 rounded-xl border border-red-200 mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-4">24/7 Emergency Response</h3>
              <div className="flex justify-center items-center space-x-8">
                <div>
                  <div className="font-semibold text-gray-900">Crisis Hotline</div>
                  <div className="text-red-600 font-bold text-lg">(207) 766-8538</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-blue-600">crisis@globalinsightscollective.com</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/contact">
                  Set Up Emergency Response Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}