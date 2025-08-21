import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { StructuredData } from '../components/StructuredData';
import { organizationSchema, serviceSchema } from '../lib/structured-data-schemas';
import { 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Building, 
  GraduationCap,
  Shield,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';

export const metadata = {
  title: 'Global Insights Collective | Global Thinking, Human Solutions',
  description: 'Global Thinking, Human Solutions. M.Ed. and PMP® certified professionals delivering enterprise risk management, international education support, and strategic consulting.',
  openGraph: {
    title: 'Global Insights Collective',
    description: 'Global Thinking, Human Solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Global Insights Collective',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Insights Collective',
    description: 'Global Thinking, Human Solutions.',
  },
};

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={serviceSchema} />
      
      <Hero />
      
      {/* Dynamic Stats Section */}
      <section className="py-16 bg-gradient-to-r from-brand-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Track Record</h2>
            <p className="text-lg opacity-90">Measurable results across diverse sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Years Experience</div>
              <div className="text-xs opacity-75 mt-1">Higher Education & Risk Management</div>
            </div>
            <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">Major</div>
              <div className="text-sm opacity-90">Infrastructure Clients</div>
              <div className="text-xs opacity-75 mt-1">Port Authority • Universities</div>
            </div>
            <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">M.Ed. + PMP®</div>
              <div className="text-sm opacity-90">Dual Certification</div>
              <div className="text-xs opacity-75 mt-1">Academic Excellence & Project Leadership</div>
            </div>
            <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">Global</div>
              <div className="text-sm opacity-90">Speaking Expertise</div>
              <div className="text-xs opacity-75 mt-1">International Conferences & Cultural Insight</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Organizations Choose Us
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine academic rigor (M.Ed.) with practical project management expertise (PMP®) to deliver solutions that actually work.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Shield className="h-8 w-8 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Enterprise Risk Management
                    </h3>
                    <p className="text-gray-600">
                      Proven frameworks managing aviation, marine, and business operations for major infrastructure organizations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Higher Education Expertise
                    </h3>
                    <p className="text-gray-600">
                      Decades of experience managing crisis response, compliance, and student success at major universities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Globe className="h-8 w-8 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      International Relations
                    </h3>
                    <p className="text-gray-600">
                      Keynote speaker at international conferences, representing organizations on global stages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-800">M.Ed. Academic Foundation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-800">PMP® Project Management Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-800">Federal Program Management Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-800">Crisis Management Specialist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-800">International Conference Speaker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Client Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from organizations that trust our expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-brand-600 mr-3" />
                <h3 className="text-lg font-semibold">Major Infrastructure</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Comprehensive ERM program covering aviation, marine operations, and business continuity. Professional expertise that delivers results."
              </p>
              <div className="text-sm text-brand-600 font-medium">Port Authority Client</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-brand-600 mr-3" />
                <h3 className="text-lg font-semibold">Higher Education</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Decades of exceptional crisis management, compliance oversight, and student success initiatives. Trusted partner for complex challenges."
              </p>
              <div className="text-sm text-brand-600 font-medium">Major State University</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-brand-600 mr-3" />
                <h3 className="text-lg font-semibold">International Relations</h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Outstanding keynote presentation on maritime infrastructure. Professional expertise that commands international attention."
              </p>
              <div className="text-sm text-brand-600 font-medium">Arab-Hellenic Chamber of Commerce</div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Recognition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Recognition & Speaking
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognized expertise at international conferences and professional organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-8 text-center">
              <Globe className="h-12 w-12 text-brand-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                International Keynote
              </h3>
              <p className="text-gray-600 mb-4">
                Arab-Hellenic Chamber of Commerce Conference, Athens, Greece
              </p>
              <div className="text-sm text-brand-600 font-medium">
                Maritime Infrastructure Development
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Oregon RIMS Speaker
              </h3>
              <p className="text-gray-600 mb-4">
                Featured presenter on Enterprise Risk Management
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Strategic Risk Leadership
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Professional Certifications
              </h3>
              <p className="text-gray-600 mb-4">
                M.Ed. and PMP® certified with proven track record
              </p>
              <div className="text-sm text-green-600 font-medium">
                Academic & Professional Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Work with Proven Experts?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            M.Ed. and PMP® certified professionals with proven track records at major infrastructure organizations, universities, and international conferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
