'use client';

import * as React from 'react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface ContentFilterProps {
  categories: FilterOption[];
  audiences: FilterOption[];
  formats: FilterOption[];
  selectedCategory?: string;
  selectedAudience?: string;
  selectedFormat?: string;
  onFilterChange: (filters: {
    category?: string;
    audience?: string;
    format?: string;
  }) => void;
  className?: string;
}

export function ContentFilter({
  categories,
  audiences,
  formats,
  selectedCategory,
  selectedAudience,
  selectedFormat,
  onFilterChange,
  className
}: ContentFilterProps) {
  const handleFilterChange = (type: string, value: string) => {
    const newFilters = {
      category: selectedCategory,
      audience: selectedAudience,
      format: selectedFormat,
    };

    // Toggle filter - if same value is clicked, clear it
    if (type === 'category') {
      newFilters.category = selectedCategory === value ? undefined : value;
    } else if (type === 'audience') {
      newFilters.audience = selectedAudience === value ? undefined : value;
    } else if (type === 'format') {
      newFilters.format = selectedFormat === value ? undefined : value;
    }

    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    onFilterChange({});
  };

  const hasActiveFilters = selectedCategory || selectedAudience || selectedFormat;

  return (
    <div className={cn("space-y-6", className)}>
      {/* Clear filters */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Filters applied
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-brand-600 hover:text-brand-700"
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Category filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleFilterChange('category', category.value)}
              className={cn(
                "flex items-center justify-between w-full p-2 text-left rounded-lg transition-colors",
                selectedCategory === category.value
                  ? "bg-brand-100 text-brand-900"
                  : "hover:bg-gray-50 text-gray-700"
              )}
            >
              <span className="text-sm">{category.label}</span>
              {category.count && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {category.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Audience filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Audience</h3>
        <div className="space-y-2">
          {audiences.map((audience) => (
            <button
              key={audience.value}
              onClick={() => handleFilterChange('audience', audience.value)}
              className={cn(
                "flex items-center justify-between w-full p-2 text-left rounded-lg transition-colors",
                selectedAudience === audience.value
                  ? "bg-brand-100 text-brand-900"
                  : "hover:bg-gray-50 text-gray-700"
              )}
            >
              <span className="text-sm">{audience.label}</span>
              {audience.count && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {audience.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Format filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Format</h3>
        <div className="space-y-2">
          {formats.map((format) => (
            <button
              key={format.value}
              onClick={() => handleFilterChange('format', format.value)}
              className={cn(
                "flex items-center justify-between w-full p-2 text-left rounded-lg transition-colors",
                selectedFormat === format.value
                  ? "bg-brand-100 text-brand-900"
                  : "hover:bg-gray-50 text-gray-700"
              )}
            >
              <span className="text-sm">{format.label}</span>
              {format.count && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {format.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
