import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Breadcrumb } from '../../../components/ui/breadcrumb';
import { StructuredData } from '../../../components/StructuredData';
import { 
  Target, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock,
  Lightbulb,
  BarChart3,
  Star,
  ArrowRight,
  Award,
  Building2
} from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Strategic Consulting Services",
  "description": "Expert strategic consulting that transforms organizational culture, drives performance, and creates measurable business outcomes through customized solutions and proven methodologies.",
  "provider": {
    "@type": "Organization",
    "name": "Global Insights Collective",
    "url": "https://globalinsightscollective.com"
  },
  "areaServed": ["United States", "Canada"],
  "serviceType": "Strategic Consulting and Organizational Development"
};

export const metadata = {
  title: 'Strategic Consulting Services | Global Insights Collective',
  description: 'Expert strategic consulting that transforms organizational culture, drives performance, and creates measurable business outcomes.',
  keywords: 'strategic consulting, organizational development, culture transformation, business performance, leadership consulting',
};

export default function ConsultingPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto py-16 px-4">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Strategic Consulting' }
            ]}
            className="mb-8"
          />

          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="bg-blue-50 rounded-full p-4 w-fit mx-auto mb-6">
              <Target className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Strategic Consulting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your organization with expert strategic guidance that drives measurable results and sustainable culture change.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ 24/7 Support Available</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">✓ Custom Solutions</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">✓ Proven Results</span>
            </div>
          </section>

          {/* Problem Section */}
          <section className="mb-16">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Organizations Struggle Without Strategic Direction
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">The Challenge</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lack of clear cultural strategy</li>
                    <li>• Inconsistent leadership approaches</li>
                    <li>• Poor change management</li>
                    <li>• Reactive instead of proactive planning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">The Cost</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• High turnover costs ($15,000+ per employee)</li>
                    <li>• Decreased productivity and engagement</li>
                    <li>• Reputation and legal risks</li>
                    <li>• Missed competitive advantages</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Framework */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Strategic Consulting Framework
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 rounded-full p-4 w-fit mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Assessment & Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive organizational assessment to identify opportunities, gaps, and strategic priorities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-50 rounded-full p-4 w-fit mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategy Development</h3>
                <p className="text-gray-600">
                  Custom strategic roadmap with clear milestones, timelines, and success metrics.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-50 rounded-full p-4 w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Implementation & Growth</h3>
                <p className="text-gray-600">
                  Hands-on support for execution with ongoing monitoring and optimization.
                </p>
              </div>
            </div>
          </section>

          {/* Consulting Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Consulting Specialties
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <Building2 className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Organizational Culture</h3>
                <p className="text-gray-600 mb-4">
                  Strategic culture transformation, leadership development, and organizational assessment.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <Users className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Community Engagement</h3>
                <p className="text-gray-600 mb-4">
                  Strategic community partnership development and engagement program design.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <Award className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Cultural Competency</h3>
                <p className="text-gray-600 mb-4">
                  Strategic cultural competency program development and implementation consulting.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <Clock className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Crisis Management</h3>
                <p className="text-gray-600 mb-4">
                  Strategic crisis preparedness, response protocols, and organizational resilience planning.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-16">
            <div className="bg-gray-900 text-white rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-center mb-8">Proven Strategic Results</h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                  <p className="text-gray-300">Client satisfaction rate</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">41%</div>
                  <p className="text-gray-300">Average turnover reduction</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">28%</div>
                  <p className="text-gray-300">Innovation improvement</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Strategy?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get expert strategic guidance tailored to your organization's unique challenges and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              Free consultation • Custom proposal within 48 hours • Results guarantee
            </p>
          </section>
        </div>
      </div>
    </>
  );
}