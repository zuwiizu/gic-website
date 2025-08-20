import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Breadcrumb } from '../../../components/ui/breadcrumb';
import { StructuredData } from '../../../components/StructuredData';
import { 
  Globe, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock,
  GraduationCap,
  Star,
  ArrowRight,
  Target,
  BarChart3,
  Award,
  BookOpen
} from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "International Student Support Services",
  "description": "Comprehensive university admissions guidance and support services that help international students successfully apply to and thrive at American universities.",
  "provider": {
    "@type": "Organization",
    "name": "Global Insights Collective",
    "url": "https://globalinsightscollective.com"
  },
  "areaServed": ["United States", "Canada"],
  "serviceType": "Educational Consulting and Student Support",
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
    title: 'International Student Support Services',
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
            Expert guidance and comprehensive support that helps international students successfully apply to and get accepted into American universities.
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
              <h3 className="font-semibold mb-3 text-red-600">Common Struggles:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Complex application requirements and deadlines</li>
                <li>• SAT/ACT test preparation and scheduling</li>
                <li>• Personal statement and essay writing challenges</li>
                <li>• Student visa application confusion</li>
                <li>• Understanding American university culture</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-green-600">Our Solutions:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Strategic university selection and application planning</li>
                <li>• Test prep support and English proficiency guidance</li>
                <li>• Expert essay writing and interview preparation</li>
                <li>• Complete visa documentation and process support</li>
                <li>• Cultural orientation and preparation programs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="framework" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our 3-Step Success Framework
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="bg-blue-50 rounded-lg p-3 w-fit mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. University Selection & Strategy</h3>
              <p className="text-gray-600 mb-3">Find the right universities that match your academic goals, career aspirations, and cultural preferences.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Academic program matching</li>
                <li>• Campus culture assessment</li>
                <li>• Financial aid opportunities</li>
                <li>• Application timeline planning</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="bg-green-50 rounded-lg p-3 w-fit mb-4">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Application Excellence</h3>
              <p className="text-gray-600 mb-3">Create compelling applications with outstanding essays, test preparation, and documentation.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Personal statement writing</li>
                <li>• SAT/ACT test preparation</li>
                <li>• Application review and optimization</li>
                <li>• Interview preparation</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="bg-purple-50 rounded-lg p-3 w-fit mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Visa & Cultural Preparation</h3>
              <p className="text-gray-600 mb-3">Navigate the visa process and prepare for successful transition to American university life.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Student visa application support</li>
                <li>• Cultural orientation programs</li>
                <li>• Pre-departure preparation</li>
                <li>• Academic transition planning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Program Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            University Admissions Programs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Complete Admissions Package */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Complete Admissions Package</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <p className="text-gray-700 mb-4">Full support from university selection through enrollment</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>12-18 month program</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span>Individual student focus</span>
                </div>
                <div className="flex items-center text-sm">
                  <BarChart3 className="h-4 w-4 text-gray-500 mr-2" />
                  <span>Success tracking</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-600 mr-2" />University research and selection</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-600 mr-2" />Application and essay assistance</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-600 mr-2" />Visa support and cultural preparation</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Application Support Only */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Application Support</h3>
              <p className="text-gray-700 mb-4">Focused help with applications, essays, and test preparation</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>6-month program</span>
                </div>
                <div className="flex items-center text-sm">
                  <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
                  <span>Application focused</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Essay writing and editing</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Test prep guidance</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Application review and optimization</li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Visa & Cultural Prep */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visa & Cultural Preparation</h3>
              <p className="text-gray-700 mb-4">Navigate visa process and prepare for American university life</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>3-month program</span>
                </div>
                <div className="flex items-center text-sm">
                  <Globe className="h-4 w-4 text-gray-500 mr-2" />
                  <span>Cultural transition focus</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" />Student visa application</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" />Cultural orientation programs</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-purple-500 mr-2" />Pre-arrival preparation</li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Results and Testimonials */}
        <section className="mb-16">
          <div className="bg-gray-900 text-white rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Student Success Results</h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                <p className="text-gray-300">University acceptance rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
                <p className="text-gray-300">Student satisfaction score</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
                <p className="text-gray-300">Students successfully placed</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-gray-200 italic mb-2">
                    "Ismail's guidance was invaluable throughout my application process. I got accepted to my top choice university with a scholarship. His expertise in understanding both the American system and international student needs made all the difference."
                  </p>
                  <p className="text-gray-400 text-sm">— Maria Rodriguez, Accepted to Stanford University</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">When should I start the application process?</h3>
                <p className="text-gray-600">Ideally 12-18 months before your intended start date. This allows time for test preparation, application development, and visa processing.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What universities do you help with?</h3>
                <p className="text-gray-600">We help with applications to all types of American universities - from Ivy League institutions to state universities and specialized programs.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you guarantee university acceptance?</h3>
                <p className="text-gray-600">While we can't guarantee acceptance, our strategic approach and expert guidance have resulted in a 95% acceptance rate for our students.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What about financial aid and scholarships?</h3>
                <p className="text-gray-600">We help identify scholarship opportunities and guide you through financial aid applications to make American education more affordable.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide ongoing support after admission?</h3>
                <p className="text-gray-600">Yes, we offer cultural orientation and preparation services to help ensure your successful transition to American university life.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does your service cost?</h3>
                <p className="text-gray-600">Costs vary based on the program selected. Contact us for a personalized consultation and pricing information.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your American University Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get expert guidance that has helped 200+ international students achieve their dreams of studying in America.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/about">
                Meet Ismail
              </Link>
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Free consultation • Custom application strategy • Success-focused approach
          </p>
        </section>
      </div>
    </>
  );
}