'use client';

import * as React from 'react';
import { Insight } from '../../lib/types';
import InsightCard from '../../components/InsightCard';
import { ContentFilter } from '../../components/ContentFilter';
import { Breadcrumb } from '../../components/ui/breadcrumb';

const categories = [
  { value: 'strategy', label: 'Strategy', count: 5 },
  { value: 'best-practices', label: 'Best Practices', count: 8 },
  { value: 'research', label: 'Research', count: 3 },
  { value: 'trends', label: 'Trends', count: 2 }
];

const audiences = [
  { value: 'universities', label: 'Universities', count: 6 },
  { value: 'employers', label: 'Employers', count: 4 },
  { value: 'healthcare', label: 'Healthcare & Public Safety', count: 3 },
  { value: 'nonprofits', label: 'Community & Nonprofits', count: 2 },
  { value: 'all', label: 'All Audiences', count: 3 }
];

const formats = [
  { value: 'article', label: 'Article', count: 8 },
  { value: 'guide', label: 'Guide', count: 5 },
  { value: 'checklist', label: 'Checklist', count: 3 },
  { value: 'case-study', label: 'Case Study', count: 2 }
];

// Sample insights data
const sampleInsights: Insight[] = [
  {
    title: 'Five strategies for building inclusive campuses',
    description: 'Inclusive campuses don\'t happen by accident. They require intentional policies and practices that centre belonging for every student.',
    date: '2024-01-15',
    author: 'Dr. Sarah Chen',
    tags: ['inclusion', 'campus-climate', 'best-practices'],
    slug: 'inclusive-campuses',
    readingTime: '5 min read',
    category: 'best-practices',
    audience: 'universities',
    format: 'guide',
    published: true
  },
  {
    title: 'Designing inclusive workplaces in a hybrid world',
    description: 'Hybrid and remote work models present new opportunities and challenges for inclusion.',
    date: '2024-01-10',
    author: 'Marcus Johnson',
    tags: ['workplace-inclusion', 'remote-work', 'hybrid-teams'],
    slug: 'inclusive-workplaces',
    readingTime: '7 min read',
    category: 'strategy',
    audience: 'employers',
    format: 'article',
    published: true
  }
];

export default function InsightsPage() {
  const [insights] = React.useState<Insight[]>(sampleInsights);
  const [filteredInsights, setFilteredInsights] = React.useState<Insight[]>(sampleInsights);
  const [selectedCategory, setSelectedCategory] = React.useState<string>();
  const [selectedAudience, setSelectedAudience] = React.useState<string>();
  const [selectedFormat, setSelectedFormat] = React.useState<string>();

  const handleFilterChange = React.useCallback((filters: {
    category?: string;
    audience?: string;
    format?: string;
  }) => {
    setSelectedCategory(filters.category);
    setSelectedAudience(filters.audience);
    setSelectedFormat(filters.format);

    // Filter insights based on selected filters
    const filtered = insights.filter(insight => {
      if (filters.category && insight.category !== filters.category) return false;
      if (filters.audience && insight.audience !== filters.audience && insight.audience !== 'all') return false;
      if (filters.format && insight.format !== filters.format) return false;
      return true;
    });

    setFilteredInsights(filtered);
  }, [insights]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: 'Insights' }]}
        className="mb-8"
      />

      {/* Enhanced Header - Following BCG/McKinsey pattern */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Insights</h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Evidence-based strategies, research findings, and practical guidance
          for building more inclusive communities.
        </p>

        {/* Featured Topics - BCG-style taxonomy */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-4 py-2 bg-brand-100 text-brand-800 rounded-full text-sm font-medium cursor-pointer hover:bg-brand-200 transition-colors">
            Crisis Response
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-200 transition-colors">
            Cultural Competency
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium cursor-pointer hover:bg-green-200 transition-colors">
            Campus Climate
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium cursor-pointer hover:bg-purple-200 transition-colors">
            Workplace Inclusion
          </span>
          <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium cursor-pointer hover:bg-orange-200 transition-colors">
            Assessment & Evaluation
          </span>
        </div>

        {/* Quick stats */}
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <span>{filteredInsights.length} articles</span>
          <span>•</span>
          <span>Updated weekly</span>
          <span>•</span>
          <span>All content ungated</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Filter Insights</h2>
            <ContentFilter
              categories={categories}
              audiences={audiences}
              formats={formats}
              selectedCategory={selectedCategory}
              selectedAudience={selectedAudience}
              selectedFormat={selectedFormat}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              Showing {filteredInsights.length} of {insights.length} insights
            </p>
          </div>

          {/* Insights grid */}
          {filteredInsights.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredInsights.map((insight) => (
                <InsightCard
                  key={insight.slug}
                  title={insight.title}
                  summary={insight.description}
                  slug={insight.slug}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No insights match your current filters.</p>
              <button
                type="button"
                onClick={() => handleFilterChange({})}
                className="text-brand-600 hover:text-brand-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}