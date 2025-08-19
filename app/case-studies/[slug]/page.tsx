import { notFound } from 'next/navigation';

const caseStudies = {
  'inclusive-campus': {
    title: 'University creates inclusive campus through cultural competency programme',
    problem: 'A mid‑sized university was experiencing frequent bias incidents and low retention among students from under‑represented backgrounds.',
    approach: 'GIC conducted a campus climate assessment, delivered comprehensive cultural competency training to faculty and staff, and established peer‑led student workshops.',
    impact: 'Within one academic year, bias incidents dropped by 45%, student satisfaction scores increased by 27% and retention of under‑represented students improved by 15%.',
    testimonial: '“GIC helped us transform our campus culture. The training opened eyes and the results speak for themselves.” – Vice President of Student Affairs'
  }
};

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const data = caseStudies[params.slug as keyof typeof caseStudies];
  if (!data) notFound();
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{data.title}</h1>
      <div className="space-y-6 text-lg text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Problem</h2>
          <p>{data.problem}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Approach</h2>
          <p>{data.approach}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Impact</h2>
          <p>{data.impact}</p>
        </div>
        <div className="italic border-l-4 border-brand pl-4 text-gray-900">
          {data.testimonial}
        </div>
      </div>
    </section>
  );
}