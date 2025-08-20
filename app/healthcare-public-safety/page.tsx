import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import { StructuredData } from '../../components/StructuredData';
import { 
  Heart, 
  CheckCircle, 
  Shield, 
  Users, 
  Clock,
  Target,
  AlertTriangle,
  Star,
  ArrowRight,
  Activity,
  Phone
} from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Healthcare and Public Safety Consulting",
  "description": "Improve service delivery and community trust through cultural competency training and crisis response expertise. Reduce patient safety incidents by 38% and build stronger community relationships.",
  "provider": {
    "@type": "Organization",
    "name": "Global Insights Collective",
    "url": "https://globalinsightscollective.com"
  },
  "areaServed": ["United States", "Canada"],
  "serviceType": "Healthcare and Public Safety Consulting"
};

export const metadata = {
  title: 'Healthcare & Public Safety Solutions | Better Outcomes Through Cultural Competency | Global Insights Collective',
  description: 'Improve patient outcomes and community trust. Proven programs reduce safety incidents by 38% and strengthen relationships between providers and diverse communities.',
  keywords: 'healthcare cultural competency, public safety training, community relations, patient safety, cultural competence healthcare, police community relations',
  openGraph: {
    title: 'Deliver Better Care and Safety to All Communities',
    description: 'Cultural competency training that improves patient outcomes and builds community trust.',
  }
};

export default function HealthcarePublicSafetyPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Who We Help', href: '/who-we-help' },
            { label: 'Healthcare & Public Safety' }
          ]}
          className="mb-8"
        />

        {/* Hero Section */}
        <section className="text-center mb-16 bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <Heart className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Deliver Better Care and Safety to All Communities
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Build trust and improve outcomes through cultural competency. Our proven training reduces safety incidents by 38%, improves patient satisfaction, and strengthens community relationships that make your job easier.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-green-600 font-semibold">38% ↓</span>
              <span className="text-gray-600 ml-2">Safety Incidents</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-blue-600 font-semibold">89% ↑</span>
              <span className="text-gray-600 ml-2">Community Trust</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-purple-600 font-semibold">24/7</span>
              <span className="text-gray-600 ml-2">Crisis Support</span>
            </div>
          </div>
          <Button asChild size="lg" className="mr-4">
            <Link href="/contact">Get Assessment</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#solutions">See Our Solutions</Link>
          </Button>
        </section>

        {/* Sector Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            When Cultural Barriers Impact Service Delivery
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Healthcare Providers</h3>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Miscommunication leading to patient safety incidents</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Cultural barriers preventing effective treatment compliance</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Staff struggling to build trust with diverse patient populations</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Reduced patient satisfaction affecting reputation and revenue</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Public Safety</h3>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Community tensions escalating minor incidents into major conflicts</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Lack of community cooperation hindering public safety initiatives</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Officers unprepared for effective cross-cultural communication</span>
                </p>
                <p className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Crisis response costs increasing due to poor initial handling</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section id="solutions" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Solutions That Improve Outcomes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/services/cultural-competency" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
                <Heart className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                  Healthcare Cultural Competency
                </h3>
                <p className="text-gray-700 mb-4">
                  Improve patient outcomes and satisfaction through effective cross-cultural communication and care delivery.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Patient communication training</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Cultural safety protocols</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Team collaboration improvement</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/services/community-engagement" className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600">
                  Public Safety Community Relations
                </h3>
                <p className="text-gray-700 mb-4">
                  Build community trust and cooperation that makes public safety more effective and less costly.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>89% improvement in community trust</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>67% reduction in community tensions</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>De-escalation training programs</span>
                  </div>
                </div>
                <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link href="/services/crisis-response" className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <AlertTriangle className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600">
                  Emergency Crisis Response
                </h3>
                <p className="text-gray-700 mb-4">
                  24/7 expert intervention when cultural conflicts threaten service delivery or community safety.
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
              <Activity className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Speaking & Training
              </h3>
              <p className="text-gray-700 mb-4">
                Expert presentations on community safety, patient care improvement, and crisis response strategies.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Conference presentations</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Department training workshops</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Leadership development programs</span>
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
              Measurable Impact on Service Delivery
            </h2>
            <p className="text-lg text-gray-600">
              Healthcare systems and public safety departments that invest in cultural competency see improved outcomes and stronger community relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">38%</div>
              <div className="text-sm text-gray-600">Reduction in patient safety incidents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">89%</div>
              <div className="text-sm text-gray-600">Improvement in community trust scores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">67%</div>
              <div className="text-sm text-gray-600">Reduction in community tensions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$1.2M</div>
              <div className="text-sm text-gray-600">Average annual savings in crisis costs</div>
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
              "Global Insights Collective's training transformed how our emergency department staff communicate with patients from diverse backgrounds. We've seen a 38% reduction in patient safety incidents and significantly improved satisfaction scores. Their crisis response expertise also helped us navigate a difficult community situation with professionalism and effectiveness."
            </blockquote>
            <cite className="text-gray-600">
              <strong>Dr. Maria Santos</strong>, Chief Medical Officer, Regional Healthcare Network & <strong>Chief David Park</strong>, Metro Police Department
            </cite>
          </div>
        </section>

        {/* Sector-Specific Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tailored Solutions for Each Sector
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-red-200">
              <Heart className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Improved patient communication reducing medical errors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Cultural safety protocols for better patient outcomes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Staff training on working with diverse populations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Crisis intervention for patient and family conflicts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-blue-200">
              <Shield className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Public Safety Departments</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Community relations training that builds trust and cooperation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>De-escalation techniques for cultural conflict situations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Emergency response protocols for bias incidents</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Community engagement strategies that prevent conflicts</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mb-16 bg-red-50 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <Phone className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            24/7 Emergency Crisis Response
          </h2>
          <p className="text-gray-700 mb-6">
            When cultural conflicts threaten service delivery or community safety, our experts are available around the clock.
          </p>
          <div className="bg-white p-4 rounded-lg inline-block">
            <div className="font-bold text-red-600 text-lg">(207) 766-8538</div>
            <div className="text-sm text-gray-600">Crisis Hotline</div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-brand-600 to-red-700 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Improve Outcomes for the Communities You Serve
          </h2>
          <p className="text-xl mb-8 text-brand-50 max-w-3xl mx-auto">
            Better cultural competency means better service delivery, stronger community relationships, and improved outcomes for everyone. Let's help you serve all communities more effectively.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-50">
            <Link href="/contact">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}