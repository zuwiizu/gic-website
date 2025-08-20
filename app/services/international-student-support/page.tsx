import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Breadcrumb } from '../../../components/ui/breadcrumb';
import { StructuredData } from '../../../components/StructuredData';
import { 
  Globe, 
  CheckCircle, 
  Phone, 
  BookOpen, 
  Clock,
  Users,
  Shield,
  Star,
  ArrowRight,
  GraduationCap,
  AlertTriangle
} from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "International Student Support & Crisis Response",
  "description": "Comprehensive support system for international students with 24/7 crisis response, cultural navigation assistance, and staff training that reduces dropout rates by 34% and improves satisfaction by 91%.",
  "provider": {
    "@type": "Organization",
    "name": "Global Insights Collective",
    "url": "https://globalinsightscollective.com"
  },
  "areaServed": ["United States", "Canada"],
  "serviceType": "International Student Support Services",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
};

export const metadata = {
  title: 'International Student Support & Crisis Response | Protect Your Investment | Global Insights Collective',
  description: 'Stop losing international students to preventable crises. 24/7 culturally-informed support reduces dropout rates by 34% and protects institutional reputation and revenue.',
  keywords: 'international student support, student crisis response, cultural navigation, international student services, campus safety, student retention, emergency intervention',
  openGraph: {
    title: 'Protect Your International Student Investment',
    description: 'Comprehensive support that reduces dropout rates by 34% and keeps your international program thriving.',
  }
};

export default function InternationalStudentSupport() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Services', href: '/services' },
            { label: 'International Student Support' }
          ]}
          className="mb-8"
        />

        {/* Hero Section */}
        <section className="text-center mb-12 border-b pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            International Student Support & Crisis Response
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Comprehensive support system for international students with 24/7 crisis response and cultural navigation assistance.
          </p>
          <div className="flex justify-center gap-8 mb-6 text-sm text-gray-600">
            <span>34% reduction in dropout rate</span>
            <span>91% satisfaction improvement</span>
            <span>24/7 crisis support</span>
          </div>
          <Button asChild>
            <Link href="/contact">Assess Your Program</Link>
          </Button>
        </section>

        {/* The Challenge */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common International Student Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3 text-gray-700">
                <li>• Students dropping out due to cultural isolation</li>
                <li>• Campus incidents involving international students escalating</li>
                <li>• Staff unprepared for cross-cultural communication</li>
                <li>• Immigration complications threatening student status</li>
                <li>• Reputation damage affecting future recruitment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Financial Impact:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Lost tuition: $25,000-$60,000+ per dropout</li>
                <li>• Legal costs: $15,000-$100,000+ per incident</li>
                <li>• Staff time on crisis management: 200+ hours per incident</li>
                <li>• Compliance violations and federal funding risk</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our 3-Step Support System
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Cultural Navigation</h3>
              <p className="text-gray-600 mb-3">Help students understand academic and social expectations.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Academic culture orientation</li>
                <li>• Social integration strategies</li>
                <li>• Mental health awareness</li>
              </ul>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Crisis Response</h3>
              <p className="text-gray-600 mb-3">24/7 intervention for emergencies affecting students.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Emergency assessment</li>
                <li>• Immigration emergency support</li>
                <li>• Family communication assistance</li>
              </ul>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Staff Training</h3>
              <p className="text-gray-600 mb-3">Equip your team with cross-cultural support skills.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cross-cultural communication</li>
                <li>• Crisis intervention techniques</li>
                <li>• Immigration law basics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Program Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Programs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Comprehensive Support</h3>
              <p className="text-sm text-gray-600 mb-3">Full-service support for international student population</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Orientation program design</li>
                <li>• Ongoing cultural mentoring</li>
                <li>• Crisis intervention services</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Crisis Response Package</h3>
              <p className="text-sm text-gray-600 mb-3">Emergency intervention when students face serious challenges</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Emergency assessment</li>
                <li>• Student advocacy</li>
                <li>• Resource coordination</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Staff Training Program</h3>
              <p className="text-sm text-gray-600 mb-3">Equip your team to effectively support student success</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Cultural competency skills</li>
                <li>• Crisis intervention protocols</li>
                <li>• Resource navigation training</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Critical Situations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">When Students Need Expert Support</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Immigration Emergencies</h3>
              <p className="text-sm text-gray-600 mb-2">Visa status complications, SEVIS issues, or policy changes.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Immediate legal consultation</li>
                <li>• Documentation assistance</li>
                <li>• Institutional coordination</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Academic Crises</h3>
              <p className="text-sm text-gray-600 mb-2">Grade appeals, misconduct allegations, or program changes.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Academic advocacy</li>
                <li>• Cultural context education</li>
                <li>• Appeals process navigation</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Personal Safety Incidents</h3>
              <p className="text-sm text-gray-600 mb-2">Discrimination, harassment, or safety concerns.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Safety assessment</li>
                <li>• Support coordination</li>
                <li>• Family communication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-12 bg-gray-50 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">34%</div>
              <div className="text-sm text-gray-600">Reduction in dropout rates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">91%</div>
              <div className="text-sm text-gray-600">Satisfaction improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">$850K</div>
              <div className="text-sm text-gray-600">Annual tuition revenue protected</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">72 hrs</div>
              <div className="text-sm text-gray-600">Average crisis resolution time</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            "Our international student retention rate improved by 34%, protecting over $850,000 in annual tuition revenue."
          </blockquote>
          <cite className="text-sm text-gray-600">— Dr. Ahmed Patel, Director of International Services</cite>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What types of crises do international students typically face?
              </h3>
              <p className="text-gray-700">
                Common issues include immigration status complications, academic misconduct misunderstandings, mental health crises, family emergencies abroad, financial emergencies, and cultural conflicts with roommates or classmates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly can you respond to student emergencies?
              </h3>
              <p className="text-gray-700">
                Our 24/7 hotline provides immediate assessment within 30 minutes. For urgent situations, we can have support staff on campus within 2-4 hours. We maintain relationships with immigration attorneys and mental health professionals for rapid response.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What makes your approach different from typical international student services?
              </h3>
              <p className="text-gray-700">
                We combine deep cultural expertise with crisis intervention training. Our team includes former international students, immigration specialists, and mental health professionals who understand the unique pressures these students face.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-brand-600 to-blue-700 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Don't Risk Losing International Students to Preventable Crises
          </h2>
          <p className="text-xl mb-8 text-brand-50 max-w-3xl mx-auto">
            Every international student who drops out represents lost tuition revenue and damaged reputation. Invest in comprehensive support before problems escalate into expensive crises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-50">
              <Link href="/contact">
                Assess Your Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
          <p className="text-sm text-brand-200">
            Free program assessment • Custom support plan • 24/7 crisis coverage
          </p>
        </section>
      </div>
    </>
  );
}