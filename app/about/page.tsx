import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Breadcrumb } from '../../components/ui/breadcrumb';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { getAllTeamMembers } from '../../lib/content';

const stats = [
  {
    icon: Users,
    value: '50+',
    label: 'Institutions Served',
    description: 'Universities, employers, and public agencies nationwide'
  },
  {
    icon: Target,
    value: '45%',
    label: 'Average Reduction',
    description: 'In bias incidents across partner institutions'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
    description: 'Combined expertise in diversity and inclusion'
  },
  {
    icon: TrendingUp,
    value: '27%',
    label: 'Satisfaction Increase',
    description: 'Average improvement in belonging scores'
  }
];

const values = [
  {
    title: 'Evidence-Based Approach',
    description: 'We ground our work in research and data, ensuring that our interventions are effective and measurable.'
  },
  {
    title: 'Cultural Responsiveness',
    description: 'We tailor our approach to the unique context and needs of each community we serve.'
  },
  {
    title: 'Sustainable Change',
    description: 'We build internal capacity and systems to ensure that positive changes persist over time.'
  },
  {
    title: 'Collaborative Partnership',
    description: 'We work alongside our clients as partners, not just consultants, to co-create solutions.'
  }
];

export const metadata = {
  title: 'About Us | Global Insights Collective',
  description: 'Learn about our mission, approach, and the team behind Global Insights Collective. We help institutions create inclusive communities through evidence-based training and consulting.',
};

export default async function AboutPage() {
  const teamMembers = await getAllTeamMembers();

  return (
    <>
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto py-8 px-4">

      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Global Insights Collective
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We are a cross-functional team of educators, practitioners, and community leaders
              delivering training and advisory services that create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Work With Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">See Our Impact</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <p className="text-gray-700 font-medium">
                  Building inclusive communities<br />
                  across campuses & workplaces
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We partner with institutions to foster inclusive environments where diverse identities
              are valued and supported. Our approach blends evidence-based curricula with lived
              experience to drive durable behavior change.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From cultural competency training and crisis response to inclusive workplace initiatives
              and community engagement, we help clients translate cultural awareness into tangible outcomes.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our collective has decades of combined experience in international student services,
              diversity and inclusion leadership, public safety, and restorative justice.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through customized consulting, dynamic workshops, and in-depth assessments, we equip
              organizations with the tools they need to build cultures of belonging.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-20">
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Impact by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-brand-100 rounded-lg mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-brand-600" />
                  </div>
                  <div className="text-3xl font-bold text-brand-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and shape how we work with our partners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals driving our mission to create inclusive communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.slug} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="w-30 h-30 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
                {member.credentials && (
                  <span className="text-sm font-normal text-gray-600 ml-2">
                    {member.credentials}
                  </span>
                )}
              </h3>
              <p className="text-brand-600 font-medium mb-4">
                {member.title}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {member.expertise.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-50 text-brand-700 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  className="text-brand-600 hover:text-brand-700 text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 rounded-2xl p-8 lg:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Create Change?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Let's work together to build more inclusive communities where everyone can thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-600">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>
      </div>
    </>
  );
}