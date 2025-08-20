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
  title: 'International Student University Admissions Support | Global Insights Collective',
  description: 'Expert guidance helping international students navigate US university admissions, applications, and cultural preparation for academic success.',
  keywords: 'international student admissions, university applications, study abroad consulting, student visa support, college preparation',
  openGraph: {
    title: 'Get Into American Universities',
    description: 'Expert guidance for international students applying to US universities.',
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
            International Student University Admissions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Expert guidance to help international students successfully apply to and get accepted into American universities.
          </p>
          <div className="flex justify-center gap-8 mb-6 text-sm text-gray-600">
            <span>University application support</span>
            <span>Visa guidance</span>
            <span>Cultural preparation</span>
          </div>
          <Button asChild>
            <Link href="/contact">Start Application Process</Link>
          </Button>
        </section>

        {/* Common Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            University Application Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3 text-gray-700">
                <li>• Complex application requirements and deadlines</li>
                <li>• SAT/ACT test preparation and scheduling</li>
                <li>• Personal statement and essay writing</li>
                <li>• Student visa application process</li>
                <li>• Understanding American university culture</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">What We Help With:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• University selection and application strategy</li>
                <li>• Test prep and English proficiency support</li>
                <li>• Essay writing and interview preparation</li>
                <li>• Visa documentation and process guidance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section id="services" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our 3-Step Admissions Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. University Selection</h3>
              <p className="text-gray-600 mb-3">Find the right universities that match your goals and profile.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Academic program matching</li>
                <li>• Campus culture assessment</li>
                <li>• Financial aid opportunities</li>
              </ul>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Application Support</h3>
              <p className="text-gray-600 mb-3">Complete applications with compelling essays and documents.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Essay writing assistance</li>
                <li>• Test preparation guidance</li>
                <li>• Application deadline management</li>
              </ul>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Visa & Preparation</h3>
              <p className="text-gray-600 mb-3">Navigate visa process and prepare for American university life.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Student visa application</li>
                <li>• Cultural orientation</li>
                <li>• Pre-departure preparation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Complete Admissions Package</h3>
              <p className="text-sm text-gray-600 mb-3">Full support from university selection through enrollment</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• University research and selection</li>
                <li>• Application and essay assistance</li>
                <li>• Visa support and cultural prep</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Application Support</h3>
              <p className="text-sm text-gray-600 mb-3">Help with applications, essays, and test preparation</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Essay writing and editing</li>
                <li>• Test prep guidance</li>
                <li>• Application review</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Visa & Cultural Prep</h3>
              <p className="text-sm text-gray-600 mb-3">Navigate visa process and prepare for American university life</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Student visa application</li>
                <li>• Cultural orientation</li>
                <li>• Pre-arrival preparation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Universities We Work With */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Universities We Help With</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Top-Tier Universities</h3>
              <p className="text-sm text-gray-600 mb-2">Ivy League and highly competitive institutions.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Harvard, Yale, Princeton</li>
                <li>• Stanford, MIT, Caltech</li>
                <li>• Comprehensive application strategy</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">State Universities</h3>
              <p className="text-sm text-gray-600 mb-2">Quality education with more accessible admissions.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• UC system, SUNY, University of Texas</li>
                <li>• Strong programs at lower costs</li>
                <li>• Merit scholarship opportunities</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Specialized Programs</h3>
              <p className="text-sm text-gray-600 mb-2">Universities known for specific fields of study.</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Engineering and technology</li>
                <li>• Business and finance</li>
                <li>• Arts and liberal arts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-12 bg-gray-50 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Admission success rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Students placed successfully</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">$2.5M</div>
              <div className="text-sm text-gray-600">Total scholarships secured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Partner universities</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            "Global Insights Collective helped me get into Stanford with a full scholarship. Their essay guidance and cultural preparation made all the difference."
          </blockquote>
          <cite className="text-sm text-gray-600">— Maria Chen, Stanford University Class of 2025</cite>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">When should I start the university application process?</h3>
              <p className="text-gray-600 text-sm">Ideally 12-18 months before your intended start date. This allows time for test preparation, essay writing, and visa processing.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What documents do I need for university applications?</h3>
              <p className="text-gray-600 text-sm">Transcripts, standardized test scores (SAT/ACT), English proficiency tests (TOEFL/IELTS), essays, and recommendation letters.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do you help with scholarship applications?</h3>
              <p className="text-gray-600 text-sm">We identify scholarship opportunities that match your profile and help craft compelling applications that highlight your unique strengths.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-900 text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Apply to American Universities?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Get expert guidance through every step of the application process. Start your journey to studying in America.
          </p>
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/contact">Start Your Application</Link>
          </Button>
        </section>
      </div>
    </>
  );
}