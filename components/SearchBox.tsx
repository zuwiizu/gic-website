'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  excerpt: string;
  url: string;
  type: 'page' | 'insight' | 'case-study' | 'service';
}

// Mock search data - in production, this would come from a search API
const searchData: SearchResult[] = [
  {
    title: 'Cultural Competency Training',
    excerpt: 'Interactive workshops that build empathy, enhance communication, and develop strategies for inclusive environments.',
    url: '/services/cultural-competency',
    type: 'service'
  },
  {
    title: 'Crisis Response',
    excerpt: '24/7 support systems for international student populations during critical situations.',
    url: '/services/crisis-response',
    type: 'service'
  },
  {
    title: 'University Crisis Response Case Study',
    excerpt: 'How we helped a major university manage an international student crisis with 100% retention.',
    url: '/case-studies/university-crisis-response',
    type: 'case-study'
  },
  {
    title: 'About Global Insights Collective',
    excerpt: 'Learn about our mission, approach, and the team behind Global Insights Collective.',
    url: '/about',
    type: 'page'
  },
  {
    title: 'Building Inclusive Communities',
    excerpt: 'Evidence-based strategies for creating lasting organizational change and inclusive environments.',
    url: '/insights/building-inclusive-communities',
    type: 'insight'
  }
];

interface SearchBoxProps {
  className?: string;
  placeholder?: string;
}

export function SearchBox({ className = "", placeholder = "Search..." }: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle search
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered.slice(0, 5)); // Limit to 5 results
  }, [query]);

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'service': return 'Service';
      case 'case-study': return 'Case Study';
      case 'insight': return 'Insight';
      case 'page': return 'Page';
      default: return '';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service': return 'bg-brand-100 text-brand-800';
      case 'case-study': return 'bg-blue-100 text-blue-800';
      case 'insight': return 'bg-green-100 text-green-800';
      case 'page': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
          aria-label="Search"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search Results */}
      {isOpen && (query.length >= 2) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {result.title}
                        </h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(result.type)}`}>
                          {getTypeLabel(result.type)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {result.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-6 text-center text-gray-500">
              <Search className="h-8 w-8 mx-auto mb-2 text-gray-300" />
              <p className="text-sm">No results found for "{query}"</p>
              <p className="text-xs text-gray-400 mt-1">
                Try different keywords or browse our services and insights
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Compact search for mobile
export function CompactSearchBox({ className = "" }: { className?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className={`p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors ${className}`}
        aria-label="Open search"
      >
        <Search className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <SearchBox className="flex-1" placeholder="Search..." />
      <button
        onClick={() => setIsExpanded(false)}
        className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Close search"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
