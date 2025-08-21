import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import { Globe, Building, Users, ArrowRight, Shield, Lightbulb } from 'lucide-react';

export const metadata = {
  title: 'Services | Global Insights Collective',
  description: 'Professional services in international student admissions, corporate training, and community safety.',
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto py-16 px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: 'Services' }]}
          className="mb-8"
        />

        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional support in four key areas designed to create measurable impact for your organization
          </p>
        </section>

        {/* All Services - Unified Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* International Students */}
          <Link href="/services/international-student-support" className="group">
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <div className="bg-blue-50 rounded-lg p-3 w-fit mb-6">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                International Student Support
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Comprehensive university admissions guidance, application support, and ongoing assistance for international students pursuing American higher education.
              </p>
              <div className="flex items-center text-blue-600 font-semibold transition-all">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Enterprise Risk Management */}
          <Link href="/services/enterprise-risk-management" className="group">
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <div className="bg-red-50 rounded-lg p-3 w-fit mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                Enterprise Risk Management
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Strategic risk management programs for aviation, marine, transportation, and business operations. Proven frameworks used by major infrastructure organizations.
              </p>
              <div className="flex items-center text-red-600 font-semibold transition-all">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Corporate Services */}
          <Link href="/services/inclusive-workplace" className="group">
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <div className="bg-green-50 rounded-lg p-3 w-fit mb-6">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-green-600 transition-colors">
                Corporate Training & Cultural Competency
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Transform your workplace culture with inclusive leadership training, cultural competency development, and strategic consulting services that drive real business results.
              </p>
              <div className="flex items-center text-green-600 font-semibold transition-all">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Strategic Consulting */}
          <Link href="/services/consulting" className="group">
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <div className="bg-indigo-50 rounded-lg p-3 w-fit mb-6">
                <Lightbulb className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">
                Strategic Consulting
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Expert strategic guidance combining M.Ed. academic rigor with PMP® project management certification. Proven track record with major ports, universities, and international organizations.
              </p>
              <div className="flex items-center text-indigo-600 font-semibold transition-all">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </section>

        {/* Enhanced CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific challenges and create a customized solution that delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/about">
                Learn About Our Approach
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}