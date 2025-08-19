import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import {
  Mic,
  Users,
  Calendar,
  Download,
  Play,
  ExternalLink,
  Quote,
  Award
} from 'lucide-react';
import { VideoGrid, FeaturedVideo } from '../../components/YouTubeEmbed';

const speakingTopics = [
  {
    title: "Designing Inclusive Campuses and Workplaces",
    description: "Evidence-based strategies for creating environments where everyone can thrive",
    audiences: ["University leaders", "HR professionals", "Diversity officers"],
    formats: ["Keynote", "Workshop", "Panel discussion"]
  },
  {
    title: "Crisis Response for International Communities",
    description: "Best practices for supporting international students and employees during challenging times",
    audiences: ["Student affairs professionals", "International offices", "Crisis response teams"],
    formats: ["Training session", "Consultation", "Emergency response planning"]
  },
  {
    title: "Building Restorative Practices",
    description: "Implementing restorative justice principles in educational and community settings",
    audiences: ["Public safety officials", "Community leaders", "Educational administrators"],
    formats: ["Workshop", "Training program", "Policy consultation"]
  },
  {
    title: "Leadership Strategies for Equity and Belonging",
    description: "Practical tools for leaders to drive inclusive change in their organizations",
    audiences: ["Executive teams", "Department heads", "Board members"],
    formats: ["Executive briefing", "Leadership retreat", "Strategic planning session"]
  },
  {
    title: "Measuring the Impact of Inclusion Initiatives",
    description: "Data-driven approaches to assessing and improving diversity and inclusion programs",
    audiences: ["Researchers", "Program evaluators", "Data analysts"],
    formats: ["Research presentation", "Methodology workshop", "Conference session"]
  }
];

const pastEngagements = [
  {
    event: "National Association of Student Personnel Administrators (NASPA)",
    title: "Creating Inclusive Campus Communities: Beyond Compliance",
    type: "Keynote",
    year: "2024"
  },
  {
    event: "Association of American Colleges and Universities (AAC&U)",
    title: "Measuring What Matters: Assessment Strategies for Inclusion",
    type: "Workshop",
    year: "2023"
  },
  {
    event: "Society for Human Resource Management (SHRM)",
    title: "The Future of Inclusive Workplaces",
    type: "Panel",
    year: "2023"
  },
  {
    event: "International Association of Campus Law Enforcement",
    title: "Cultural Competency in Campus Safety",
    type: "Training",
    year: "2023"
  }
];

const mediaKit = [
  {
    title: "Speaker Bios & Headshots",
    description: "Professional biographies and high-resolution photos",
    icon: Users
  },
  {
    title: "Topic Descriptions",
    description: "Detailed outlines of our most popular presentations",
    icon: Mic
  },
  {
    title: "Past Presentation Materials",
    description: "Sample slides and handouts from recent engagements",
    icon: Play
  },
  {
    title: "Testimonials & References",
    description: "Feedback from previous speaking engagements",
    icon: Quote
  }
];

// Sample videos from Global Nomad channel - replace with actual video IDs
const featuredVideos = [
  {
    id: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "Building Inclusive Communities: A Global Perspective",
    description: "Ismail Warsame discusses strategies for creating inclusive environments in educational institutions and organizations worldwide."
  },
  {
    id: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "Crisis Response in International Education",
    description: "Learn about effective crisis response strategies for supporting international students during challenging times."
  },
  {
    id: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "Cultural Competency in Practice",
    description: "Practical approaches to developing cultural competency skills in professional settings."
  }
];

export const metadata = {
  title: 'Speaking & Media | Global Insights Collective',
  description: 'Book our experts for keynote presentations, workshops, and media commentary on diversity, inclusion, and cultural competency topics.',
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
          Speaking & Media
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Our experts are available for keynote presentations, workshops, and media commentary
          on diversity, inclusion, international student support, and cultural competency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Book a Speaker</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#media-kit">Download Media Kit</Link>
          </Button>
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
                    Target Audiences
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

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                    Available Formats
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {topic.formats.map((format, formatIndex) => (
                      <span
                        key={formatIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
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

      {/* Media Kit */}
      <section id="media-kit" className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Media Kit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaKit.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-brand-100 rounded-lg mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Watch Our Speaking Engagements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See our experts in action delivering impactful presentations on diversity, inclusion, and organizational development.
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <FeaturedVideo
            videoId={featuredVideos[0].id}
            title={featuredVideos[0].title}
            description={featuredVideos[0].description}
          />
        </div>

        {/* Video Grid */}
        <VideoGrid videos={featuredVideos.slice(1)} />

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link
              href="https://www.youtube.com/@globalnomad8868"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="h-4 w-4 mr-2" />
              View All Videos on YouTube
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 rounded-2xl p-8 lg:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Book a Speaker?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Let's discuss how our experts can contribute to your next event, conference, or training program.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule a Call
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-600">
            <Link href="mailto:speaking@globalinsightscollective.com">
              <ExternalLink className="h-5 w-5 mr-2" />
              Email Us Directly
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}