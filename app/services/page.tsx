import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import { Globe, Building, Users, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Services | Global Insights Collective',
  description: 'Professional services in international student admissions, corporate training, and community safety.',
};

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: 'Services' }]}
        className="mb-8"
      />

      {/* Header */}
      <section className="text-center mb-12 border-b pb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Professional support in three key areas: international education, corporate development, and community safety.
        </p>
      </section>

      {/* Three Core Services */}
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        {/* International Students */}
        <Link href="/services/international-student-support" className="group">
          <div className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <Globe className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">
              International Student Support
            </h3>
            <p className="text-gray-600 mb-4">
              University admissions guidance, application support, and visa assistance for students applying to American universities.
            </p>
            <div className="text-blue-600 text-sm font-medium group-hover:underline">
              Learn More →
            </div>
          </div>
        </Link>

        {/* Corporate Services */}
        <Link href="/services/inclusive-workplace" className="group">
          <div className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <Building className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600">
              Corporate Training & Consulting
            </h3>
            <p className="text-gray-600 mb-4">
              Professional training, keynote speaking, strategy consulting, and executive coaching for organizations.
            </p>
            <div className="text-green-600 text-sm font-medium group-hover:underline">
              Learn More →
            </div>
          </div>
        </Link>

        {/* Community Safety */}
        <Link href="/services/community-engagement" className="group">
          <div className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <Users className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600">
              Community Safety & Engagement
            </h3>
            <p className="text-gray-600 mb-4">
              Public safety training and community engagement workshops to build trust and improve relationships.
            </p>
            <div className="text-purple-600 text-sm font-medium group-hover:underline">
              Learn More →
            </div>
          </div>
        </Link>
      </section>

      {/* CTA */}
      <section className="text-center bg-gray-900 text-white p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact us to discuss your specific needs and learn how we can help.
        </p>
        <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  );
}