import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import { 
  Users, 
  Building2, 
  Heart, 
  Globe,
  CheckCircle,
  Clock,
  MapPin,
  ArrowRight,
  Mic,
  Award
} from 'lucide-react';

const speakingTopics = [
  {
    title: "International Student Success Strategies",
    description: "Help international students thrive academically and personally while protecting institutional investment. Learn proven frameworks for cultural navigation, crisis prevention, and support system design that reduce dropout rates by 34%.",
    audiences: ["University administrators", "Student affairs professionals", "International offices", "Campus counselors"],
    formats: ["Keynote", "Workshop", "Panel discussion", "Virtual presentation"],
    duration: "45-90 minutes",
    outcomes: ["Practical student support strategies", "Crisis prevention protocols", "ROI-driven retention approaches"]
  },
  {
    title: "Building High-Performance Global Teams",
    description: "Transform cultural differences into competitive advantage. Discover how to build teams where diverse perspectives drive innovation, productivity increases by 28%, and top talent chooses to stay.",
    audiences: ["Executive leadership", "HR professionals", "Team managers", "Diversity officers"],
    formats: ["Executive briefing", "Leadership retreat", "Conference keynote", "Workshop series"],
    duration: "45 minutes - half day",
    outcomes: ["Team performance frameworks", "Retention strategies", "Innovation acceleration methods"]
  },
  {
    title: "Crisis Response & Community Safety",
    description: "When cultural conflicts threaten community safety, expert intervention can prevent escalation and restore trust. Learn proven de-escalation techniques and community healing strategies that work.",
    audiences: ["Public safety officials", "Community leaders", "University administrators", "Healthcare executives"],
    formats: ["Emergency response training", "Community forum", "Leadership intensive", "Panel discussion"],
    duration: "2 hours - full day",
    outcomes: ["Crisis response protocols", "Community engagement strategies", "Conflict resolution skills"]
  },
  {
    title: "Workplace Culture That Attracts Top Talent",
    description: "In today's competitive market, culture is your secret weapon. Learn how to build workplace environments that high performers actively seek out and competitors struggle to replicate.",
    audiences: ["C-suite executives", "People operations", "Talent acquisition", "Business leaders"],
    formats: ["Executive keynote", "Board presentation", "Leadership retreat", "Strategy session"],
    duration: "45 minutes - 4 hours",
    outcomes: ["Culture strategy frameworks", "Talent attraction methods", "Competitive advantage tactics"]
  }
];

const pastEngagements = [
  {
    title: "International Student Crisis Response in the Digital Age",
    event: "NAFSA International Education Conference",
    type: "Keynote",
    year: "2024"
  },
  {
    title: "Building Global Teams That Actually Work",
    event: "Corporate Diversity & Inclusion Summit",
    type: "Featured Speaker",
    year: "2024"
  },
  {
    title: "Community Safety Through Cultural Understanding",
    event: "National Public Safety Leadership Conference",
    type: "Workshop",
    year: "2023"
  },
  {
    title: "The Business Case for Cultural Competency",
    event: "Fortune 500 Leadership Retreat",
    type: "Executive Briefing",
    year: "2023"
  }
];

export const metadata = {
  title: 'Speaking Engagements | Expert Presentations | Global Insights Collective',
  description: 'Book our experts for powerful presentations on international student support, global team performance, and crisis response. Proven strategies that drive real results.',
};

export default function SpeakingPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: 'Speaking & Media' }]}
        className="mb-8"
      />

      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Speaking Engagements
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Book our experts for powerful presentations on international student support, global team performance, and crisis response strategies that deliver measurable results.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Book a Speaker</Link>
        </Button>
      </section>

      {/* Featured Topic - International Students */}
      <section className="mb-16 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <Globe className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            International Student Success - Our Signature Topic
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our most requested speaking topic. Learn the strategies that helped institutions reduce international student dropout rates by 34% and protect millions in tuition revenue.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl">
            <div className="text-2xl font-bold text-blue-600 mb-2">34%</div>
            <div className="text-sm text-gray-600">Reduction in dropout rates</div>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <div className="text-2xl font-bold text-green-600 mb-2">$850K</div>
            <div className="text-sm text-gray-600">Average annual revenue protected</div>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <div className="text-2xl font-bold text-purple-600 mb-2">91%</div>
            <div className="text-sm text-gray-600">Student satisfaction improvement</div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Speaking Topics
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {speakingTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {topic.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {topic.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                    Perfect For
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {topic.audiences.map((audience, audienceIndex) => (
                      <span
                        key={audienceIndex}
                        className="px-3 py-1 bg-brand-50 text-brand-700 text-sm rounded-full"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{topic.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Mic className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{topic.formats.join(', ')}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                    Key Takeaways
                  </h4>
                  <ul className="space-y-1">
                    {topic.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Engagements */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Recent Speaking Engagements
        </h2>
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEngagements.map((engagement, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-brand-600" />
                    <span className="text-sm font-medium text-brand-600">
                      {engagement.type}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{engagement.year}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {engagement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {engagement.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center bg-gradient-to-br from-brand-600 to-blue-700 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Inspire Your Audience?
        </h2>
        <p className="text-xl mb-8 text-brand-50 max-w-3xl mx-auto">
          Every presentation is customized to your audience's specific challenges and goals. Let's create an experience that moves beyond inspiration to actionable change.
        </p>
        <Button asChild size="lg" className="bg-white text-brand-600 hover:bg-gray-50">
          <Link href="/contact">
            Book a Speaking Engagement
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </div>
  );
}