import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Breadcrumb } from '../../../components/ui/breadcrumb';
import { StructuredData } from '../../../components/StructuredData';
import { 
  Users, 
  CheckCircle, 
  Shield, 
  Heart, 
  Clock,
  MapPin,
  Star,
  ArrowRight,
  Building,
  Target
} from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Community Engagement & Public Safety Workshops",
  "description": "Build safer communities through expert-facilitated dialogue between residents, officials, and service providers with 89% trust improvement and 67% reduction in community tensions.",
  "provider": {
    "@type": "Organization",
    "name": "Global Insights Collective",
    "url": "https://globalinsightscollective.com"
  },
  "areaServed": ["United States", "Canada"],
  "serviceType": "Community Engagement and Public Safety Training",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
};

export const metadata = {
  title: 'Community Engagement & Public Safety | Build Safer Communities | Global Insights Collective',
  description: 'Transform community tensions into collaborative solutions. Expert-facilitated workshops that deliver 89% trust improvement and 67% reduction in conflicts between residents and officials.',
  keywords: 'community engagement, public safety training, police community relations, community dialogue, conflict resolution, public safety workshops, community trust building',
  openGraph: {
    title: 'Build Safer Communities Through Better Communication',
    description: 'Expert-facilitated workshops that bring together residents, officials, and service providers to create lasting safety solutions.',
  }
};

export default function CommunityEngagement() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Community Engagement & Public Safety' }
          ]}
          className="mb-8"
        />

        {/* Hero Section */}
        <section className="text-center mb-12 border-b pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community Engagement & Public Safety
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Expert-facilitated workshops that bring together residents, officials, and service providers to create collaborative safety solutions.
          </p>
          <div className="flex justify-center gap-8 mb-6 text-sm text-gray-600">
            <span>89% trust improvement</span>
            <span>67% reduction in tensions</span>
            <span>90 days to results</span>
          </div>
          <Button asChild>
            <Link href="/contact">Schedule Assessment</Link>
          </Button>
        </section>

        {/* The Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Community Relations Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3 text-gray-700">
                <li>• Residents and officials operating in separate silos</li>
                <li>• Minor incidents escalating into major conflicts</li>
                <li>• Public safety initiatives failing due to lack of buy-in</li>
                <li>• Resources wasted on reactive crisis management</li>
                <li>• Service providers struggling to reach diverse populations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Typical Costs:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Crisis response: $50,000-$500,000+ per incident</li>
                <li>• Lost federal funding opportunities</li>
                <li>• Staff turnover and recruitment challenges</li>
                <li>• Legal liability and settlement costs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section id="approach" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our 3-Step Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Stakeholder Mapping</h3>
              <p className="text-gray-600 mb-3">Identify key players and understand their perspectives.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Community leader interviews</li>
                <li>• Institutional assessment</li>
                <li>• Historical context analysis</li>
              </ul>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Structured Dialogue</h3>
              <p className="text-gray-600 mb-3">Facilitate productive conversations and solutions.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-stakeholder forums</li>
                <li>• Conflict de-escalation training</li>
                <li>• Solution co-creation workshops</li>
              </ul>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Implementation Support</h3>
              <p className="text-gray-600 mb-3">Ensure solutions stick with ongoing support.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Action plan development</li>
                <li>• Progress monitoring</li>
                <li>• Quarterly check-ins</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How We Can Help
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Community Forums</h3>
              <p className="text-sm text-gray-600 mb-3">Monthly facilitated dialogues between residents and officials</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• 2-hour monthly sessions</li>
                <li>• Expert facilitation</li>
                <li>• Action item tracking</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Public Safety Training</h3>
              <p className="text-sm text-gray-600 mb-3">Specialized workshops for law enforcement and emergency responders</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• De-escalation techniques</li>
                <li>• Cross-cultural communication</li>
                <li>• Bias recognition training</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4">
              <h3 className="font-semibold mb-2">Crisis Mediation</h3>
              <p className="text-sm text-gray-600 mb-3">Emergency intervention when community tensions reach breaking point</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Immediate assessment</li>
                <li>• Neutral facilitation</li>
                <li>• Resolution planning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-12 bg-gray-50 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">89%</div>
              <div className="text-sm text-gray-600">Trust improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">67%</div>
              <div className="text-sm text-gray-600">Reduction in tensions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">$1.2M</div>
              <div className="text-sm text-gray-600">Annual savings in crisis costs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">94%</div>
              <div className="text-sm text-gray-600">Would recommend</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            "Global Insights Collective helped us rebuild trust through structured dialogue sessions. Six months later, community satisfaction with public safety has increased 89%."
          </blockquote>
          <cite className="text-sm text-gray-600">— Chief Maria Rodriguez, Riverside Police Department</cite>
        </section>

        {/* Who We Serve */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who We Work With</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <h3 className="font-semibold mb-1">Municipal Governments</h3>
              <p className="text-sm text-gray-600">City councils, mayors' offices</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Public Safety</h3>
              <p className="text-sm text-gray-600">Police, fire, emergency services</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Community Groups</h3>
              <p className="text-sm text-gray-600">Neighborhood associations, advocacy groups</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Service Providers</h3>
              <p className="text-sm text-gray-600">Social services, healthcare, education</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">How do you ensure all voices are heard fairly?</h3>
              <p className="text-gray-600 text-sm">Our facilitators use structured dialogue techniques ensuring equal speaking time and conduct pre-session interviews to understand all perspectives.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What if tensions are too high for dialogue?</h3>
              <p className="text-gray-600 text-sm">We offer crisis mediation and can design cooling-off periods with separate stakeholder sessions before bringing groups together.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do you measure success?</h3>
              <p className="text-gray-600 text-sm">We track trust surveys, incident reports, and participation rates. Most communities see improvements within 90 days.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-900 text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Transform community tensions into collaborative solutions. Get a free assessment of your situation.
          </p>
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/contact">Get Free Assessment</Link>
          </Button>
        </section>
      </div>
    </>
  );
}