import Link from 'next/link';
import { Clock, User, Tag, Calendar } from 'lucide-react';
import { formatDate } from '../lib/utils';

interface InsightCardProps {
  title: string;
  summary: string;
  slug: string;
  author?: string;
  readTime?: string;
  category?: string;
  date?: string;
}

export default function InsightCard({
  title,
  summary,
  slug,
  author,
  readTime,
  category,
  date
}: InsightCardProps) {
  return (
    <article className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      {/* Meta info */}
      <div className="flex items-center justify-between mb-4">
        {category && (
          <span className="inline-block px-2 py-1 bg-brand-100 text-brand-800 text-xs font-medium rounded">
            {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
          </span>
        )}
        {readTime && (
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            {readTime}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">
        <Link
          href={`/insights/${slug}`}
          className="hover:text-brand-600 transition-colors"
        >
          {title}
        </Link>
      </h3>

      {/* Summary */}
      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
        {summary}
      </p>

      {/* Author and date */}
      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
        {author && (
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            {author}
          </div>
        )}
        {date && (
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {formatDate(date)}
          </div>
        )}
      </div>

      {/* Read more */}
      <Link
        href={`/insights/${slug}`}
        className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors group"
      >
        Read more
        <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </article>
  );
}