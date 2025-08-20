import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import { Mic, Users, Building, Globe } from 'lucide-react';

export const metadata = {
  title: 'Speaking & Presentations | Global Insights Collective',
  description: 'Professional keynote speaking on international education, corporate training, and community safety.',
};

export default function SpeakingPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: 'Speaking' }]}
        className="mb-8"
      />

      {/* Header */}
      <section className="text-center mb-12 border-b pb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Speaking & Presentations
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Professional keynote speaking and presentations for conferences, corporate events, and educational institutions.
        </p>
        <Button asChild>
          <Link href="/contact">Book Speaking Engagement</Link>
        </Button>
      </section>

      {/* Speaking Topics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Speaking Topics</h2>
        <div className="space-y-6">
          <div className="border border-gray-200 p-6">
            <div className="flex items-start space-x-4">
              <Globe className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">International Education</h3>
                <p className="text-gray-600 mb-3">
                  University admissions strategies, student success, and international program development.
                </p>
                <div className="text-sm text-gray-500">
                  Student retention • Admissions best practices • Cultural navigation
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 p-6">
            <div className="flex items-start space-x-4">
              <Building className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Corporate Development</h3>
                <p className="text-gray-600 mb-3">
                  Leadership training, team performance, and organizational culture development.
                </p>
                <div className="text-sm text-gray-500">
                  Leadership development • Team communication • Performance optimization
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 p-6">
            <div className="flex items-start space-x-4">
              <Users className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Community Safety</h3>
                <p className="text-gray-600 mb-3">
                  Public safety training, community relations, and conflict resolution strategies.
                </p>
                <div className="text-sm text-gray-500">
                  Crisis response • Community engagement • Conflict resolution
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Formats */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Formats</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Keynote Presentations</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Conference keynotes (45-60 minutes)</li>
              <li>• Corporate events</li>
              <li>• Educational conferences</li>
              <li>• Industry panels</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Workshops & Training</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Half-day workshops</li>
              <li>• Executive briefings</li>
              <li>• Staff training sessions</li>
              <li>• Virtual presentations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gray-900 text-white p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Book a Speaker?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact us to discuss your event needs and customize a presentation for your audience.
        </p>
        <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
          <Link href="/contact">Request Speaking Information</Link>
        </Button>
      </section>
    </div>
  );
}