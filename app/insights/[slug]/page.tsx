import { notFound } from 'next/navigation';

const insights = {
  'inclusive-campuses': {
    title: 'Five strategies for building inclusive campuses',
    content: [
      'Inclusive campuses don\'t happen by accident. They require intentional policies and practices that centre belonging for every student.',
      'Start by conducting climate assessments to understand the experiences of marginalised groups. Use these insights to inform programmes and policies.',
      'Provide ongoing training for faculty and staff on cultural competency, bias awareness and inclusive pedagogy.',
      'Invest in peer mentoring and resource centres that support under‑represented students and foster community.'
    ]
  },
  'international-support': {
    title: 'Supporting international students during global crises',
    content: [
      'Global crises—from pandemics to geopolitical unrest—disproportionately affect international students.',
      'Institutions should establish dedicated crisis response teams with cross‑cultural expertise and provide clear communication channels.',
      'Partner with local consulates, legal experts and community organisations to address the varied needs of international populations.'
    ]
  },
  'inclusive-workplaces': {
    title: 'Designing inclusive workplaces in a hybrid world',
    content: [
      'Hybrid and remote work models present new opportunities and challenges for inclusion.',
      'Ensure that remote employees have equal access to resources and advancement opportunities by standardising communication and feedback processes.',
      'Use data to track representation and belonging across remote and in‑person teams and adjust your inclusion strategies accordingly.'
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(insights).map((slug) => ({ slug }));
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const data = insights[params.slug as keyof typeof insights];
  if (!data) notFound();
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">{data.title}</h1>
      <div className="space-y-4 text-lg text-gray-700">
        {data.content.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </section>
  );
}