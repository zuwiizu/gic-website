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
  title: 'Enterprise Risk Management | Global Insights Collective',
  description: 'Strategic risk management programs for aviation, marine, transportation, and business operations. Proven frameworks used by major infrastructure organizations and federal projects.',
};

export default function EnterpriseRiskManagementPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Enterprise Risk Management' }
        ]}
        className="bg-white border-b border-gray-200"
      />

      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Enterprise Risk Management
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Strategic Risk Management for Critical Infrastructure
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Proven frameworks for aviation, marine, transportation, and business operations. 
            Trusted by major infrastructure organizations and federal projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Risk Assessment
                <Shield className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>

        {/* Key Sectors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sectors We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <Plane className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aviation</h3>
              <p className="text-gray-600 text-sm">Airport operations, air traffic management, safety protocols</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <Ship className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marine</h3>
              <p className="text-gray-600 text-sm">Port operations, shipping, maritime infrastructure</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transportation</h3>
              <p className="text-gray-600 text-sm">Logistics, supply chain, ground transportation</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Parks</h3>
              <p className="text-gray-600 text-sm">Commercial real estate, tenant operations, facility management</p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our ERM Services
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Business Continuity Planning */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business Continuity Planning</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive business continuity management programs that ensure operational resilience during disruptions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span>Business impact analysis</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span>Recovery strategy development</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span>Crisis communication plans</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span>Testing and maintenance programs</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>

            {/* Federal Program Management */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Federal Program Management</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Expert management of FEMA-funded and other federal programs with proven compliance and delivery track record.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                  <span>FEMA grant management</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                  <span>Federal compliance oversight</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                  <span>Program implementation</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                  <span>Reporting and documentation</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>

            {/* Infrastructure Risk Assessment */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Infrastructure Risk Assessment</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive risk assessments for critical infrastructure including ports, airports, and transportation networks.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-3" />
                  <span>Vulnerability assessments</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-3" />
                  <span>Threat analysis</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-3" />
                  <span>Risk mitigation strategies</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-3" />
                  <span>Continuous monitoring</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Learn More</Link>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Schedule Risk Assessment
                <Shield className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/case-studies">
                View Our Results
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
