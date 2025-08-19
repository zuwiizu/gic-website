import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  summary: string;
  slug: string;
}

export default function CaseStudyCard({ title, summary, slug }: CaseStudyCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{summary}</p>
      <Link href={`/case-studies/${slug}`} className="text-sm font-medium text-brand hover:underline">
        Read more →
      </Link>
    </div>
  );
}