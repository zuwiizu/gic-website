import Link from 'next/link';
import { Button } from './ui/button';
import { Globe, Building, Users } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional support in three key areas that drive real results for organizations and individuals.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* International Students */}
          <div className="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <Globe className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              International Student Support
            </h3>
            <p className="text-gray-600 mb-4">
              University admissions guidance, application support, and visa assistance for students applying to American universities.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/services/international-student-support">
                Learn More
              </Link>
            </Button>
          </div>

          {/* Corporate Services */}
          <div className="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <Building className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Corporate Training & Consulting
            </h3>
            <p className="text-gray-600 mb-4">
              Professional training, keynote speaking, strategy consulting, and executive coaching for organizations.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/services/inclusive-workplace">
                Learn More
              </Link>
            </Button>
          </div>

          {/* Community Safety */}
          <div className="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <Users className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Community Safety & Engagement
            </h3>
            <p className="text-gray-600 mb-4">
              Public safety training and community engagement workshops to build trust and improve relationships.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/services/community-engagement">
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gray-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Contact us to discuss your specific needs and learn how we can help you achieve your goals.
            </p>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}