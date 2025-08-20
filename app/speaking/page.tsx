import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import { Mic, Users, Building, Globe, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Speaking Engagements | Global Insights Collective',
  description: 'Professional keynote speaking on international education, corporate training, and organizational transformation.',
};

export default function SpeakingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto py-16 px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: 'Speaking Engagements' }]}
          className="mb-8"
        />

        {/* Header */}
        <section className="text-center mb-16">
          <div className="bg-orange-50 rounded-full p-4 w-fit mx-auto mb-6">
            <Mic className="h-12 w-12 text-orange-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Speaking Engagements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Expert keynote speaking and presentations that inspire action and drive organizational transformation.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Book Speaking Engagement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>

        {/* Speaking Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Speaking Topics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all">
              <Globe className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">International Education & Leadership</h3>
              <p className="text-gray-600 mb-4">
                Strategies for supporting international students, building global perspectives, and creating inclusive educational environments.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• University admissions and student success</li>
                <li>• Cross-cultural leadership development</li>
                <li>• Global talent attraction and retention</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all">
              <Building className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Corporate Culture & Performance</h3>
              <p className="text-gray-600 mb-4">
                Practical strategies for building inclusive workplaces that drive innovation, performance, and employee engagement.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cultural competency in the workplace</li>
                <li>• Inclusive leadership practices</li>
                <li>• Organizational transformation strategies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Speaking Formats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Available Formats</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 rounded-full p-4 w-fit mx-auto mb-4">
                <Mic className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Keynote Presentations</h3>
              <p className="text-gray-600 mb-4">
                45-60 minute inspirational keynotes for conferences and corporate events.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Conference keynotes</li>
                <li>• Corporate events</li>
                <li>• Educational summits</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-green-50 rounded-full p-4 w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Workshops</h3>
              <p className="text-gray-600 mb-4">
                Hands-on training sessions with practical tools and strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Half-day workshops</li>
                <li>• Executive briefings</li>
                <li>• Team training sessions</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-50 rounded-full p-4 w-fit mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Virtual Presentations</h3>
              <p className="text-gray-600 mb-4">
                Engaging online presentations and webinars for global audiences.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Virtual keynotes</li>
                <li>• Webinar series</li>
                <li>• Online panels</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Inspire Your Audience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your event goals and create a customized presentation that resonates with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">
                Request Speaking Information
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/about">
                Learn About Ismail
              </Link>
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Custom presentations • Professional delivery • Measurable impact
          </p>
        </section>
      </div>
    </div>
  );
}