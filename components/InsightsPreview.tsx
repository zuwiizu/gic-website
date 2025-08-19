import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';

const featuredInsights = [
  {
    title: 'Five strategies for building inclusive campuses',
    excerpt: 'Inclusive campuses don\'t happen by accident. Learn the evidence-based strategies that create lasting change.',
    author: 'Dr. Sarah Chen',
    readTime: '5 min read',
    category: 'Best Practices',
    audience: 'Universities',
    href: '/insights/inclusive-campuses',
    date: '2024-01-15'
  },
  {
    title: 'Designing inclusive workplaces in a hybrid world',
    excerpt: 'Remote and hybrid work models present new opportunities and challenges for inclusion. Here\'s how to navigate them.',
    author: 'Marcus Johnson',
    readTime: '7 min read',
    category: 'Strategy',
    audience: 'Employers',
    href: '/insights/inclusive-workplaces',
    date: '2024-01-10'
  },
  {
    title: 'The ROI of cultural competency training',
    excerpt: 'Measuring the business impact of inclusion initiatives with data-driven approaches and key metrics.',
    author: 'Dr. Priya Patel',
    readTime: '6 min read',
    category: 'Research',
    audience: 'All',
    href: '/insights/roi-cultural-competency',
    date: '2024-01-05'
  }
];

const categories = [
  { name: 'Strategy', count: 12 },
  { name: 'Best Practices', count: 18 },
  { name: 'Research', count: 8 },
  { name: 'Trends', count: 6 }
];

export default function InsightsPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Evidence-based strategies, research findings, and practical guidance 
            for building more inclusive communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Featured articles */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredInsights.map((insight, index) => (
                <article
                  key={insight.href}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  {/* Meta info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-2 py-1 bg-brand-100 text-brand-800 text-xs font-medium rounded">
                      {insight.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {insight.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      href={insight.href}
                      className="hover:text-brand-600 transition-colors"
                    >
                      {insight.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {insight.excerpt}
                  </p>

                  {/* Author and audience */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {insight.author}
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      {insight.audience}
                    </div>
                  </div>

                  {/* Read more */}
                  <Link 
                    href={insight.href}
                    className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Browse by Category
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/insights?category=${category.name.toLowerCase()}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm text-gray-700">{category.name}</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter signup */}
              <div className="bg-brand-50 rounded-lg p-4">
                <h4 className="text-sm font-bold text-gray-900 mb-2">
                  Stay Updated
                </h4>
                <p className="text-xs text-gray-600 mb-4">
                  Get the latest insights delivered to your inbox monthly.
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/newsletter">
                    Subscribe
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button asChild size="lg" variant="outline">
            <Link href="/insights">
              View All Insights
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
