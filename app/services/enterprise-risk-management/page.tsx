import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Breadcrumb } from '../../../components/ui/breadcrumb';
import { StructuredData } from '../../../components/StructuredData';
import { 
  Shield, 
  Building, 
  Plane, 
  Ship, 
  Truck, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  Target,
  TrendingUp,
  FileText,
  Globe
} from 'lucide-react';

export const metadata = {
  title: 'Risk Training & Compliance Consulting | Global Insights Collective',
  description: 'Workshops tailored for corporations, nonprofits, and international organizations, providing practical strategies to strengthen governance, regulatory alignment, and organizational resilience.',
};

export default function EnterpriseRiskManagementPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Risk Training & Compliance Consulting' }
        ]}
        className="bg-white border-b border-gray-200"
      />

      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Risk Training & Compliance Consulting
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Strengthen Governance & Organizational Resilience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Workshops tailored for corporations, nonprofits, and international organizations, providing practical strategies to strengthen governance, regulatory alignment, and organizational resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Schedule Workshop
                <Shield className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>

        {/* Organizations We Serve */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Organizations We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Corporations</h3>
              <p className="text-gray-600 text-sm">Governance training, compliance frameworks, risk management workshops</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nonprofits</h3>
              <p className="text-gray-600 text-sm">Board governance, regulatory compliance, organizational resilience</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">International Organizations</h3>
              <p className="text-gray-600 text-sm">Cross-border compliance, international governance standards</p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Training & Consulting Services
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Risk Training & Compliance Consulting - Workshops tailored for corporations, nonprofits, and international organizations, providing practical strategies to strengthen governance, regulatory alignment, and organizational resilience.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Governance Workshops */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Governance Workshops</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Interactive workshops designed to strengthen organizational governance structures and decision-making processes.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span>Board governance training</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span>Decision-making frameworks</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span>Accountability structures</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span>Policy development guidance</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Schedule Workshop</Link>
              </Button>
            </div>

            {/* Regulatory Compliance Training */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Regulatory Compliance Training</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive training programs to ensure regulatory alignment and compliance across diverse organizational contexts.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                  <span>Regulatory framework analysis</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                  <span>Compliance system design</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                  <span>Staff training programs</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                  <span>Monitoring and reporting</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Get Training</Link>
              </Button>
            </div>

            {/* Organizational Resilience Strategies */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Organizational Resilience Strategies</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Strategic consulting to build organizational resilience and adaptive capacity for long-term sustainability.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-3" />
                  <span>Resilience assessments</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-3" />
                  <span>Adaptive capacity building</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-3" />
                  <span>Change management strategies</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-3" />
                  <span>Sustainability planning</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Build Resilience</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Organizations Trust Our ERM Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world experience managing enterprise risk for major infrastructure organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Port Authority Experience</h3>
              <p className="text-gray-600 text-sm">Active ERM management for major port operations including aviation, marine, and business parks.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Federal Program Expertise</h3>
              <p className="text-gray-600 text-sm">Proven track record managing FEMA-funded BCM enhancement projects and federal compliance.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">PMP® Certified</h3>
              <p className="text-gray-600 text-sm">Project Management Professional certification ensures structured, results-driven implementation.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Strengthen Your Risk Management?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a comprehensive risk assessment from proven ERM professionals with real infrastructure experience.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Schedule Risk Assessment
                <Shield className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
