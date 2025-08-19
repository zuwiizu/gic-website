'use client';

import { MDXProvider } from '@mdx-js/react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

// Custom components for MDX content
const components = {
  // Headings
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-6",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "scroll-m-20 border-b border-gray-200 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-12 mb-4",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-4",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3",
        className
      )}
      {...props}
    />
  ),
  
  // Paragraphs and text
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 mb-6 text-gray-700", className)}
      {...props}
    />
  ),
  
  // Lists
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc space-y-2", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal space-y-2", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("text-gray-700", className)} {...props} />
  ),
  
  // Links
  a: ({ className, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith('/')) {
      return (
        <Link
          href={href}
          className={cn(
            "font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700",
            className
          )}
          {...props}
        />
      );
    }
    return (
      <a
        href={href}
        className={cn(
          "font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700",
          className
        )}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  },
  
  // Blockquotes
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-4 border-brand-600 pl-6 italic text-gray-700 bg-gray-50 py-4 rounded-r-lg",
        className
      )}
      {...props}
    />
  ),
  
  // Code
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-gray-900",
        className
      )}
      {...props}
    />
  ),
  
  // Horizontal rule
  hr: ({ ...props }) => (
    <hr className="my-8 border-gray-200" {...props} />
  ),
  
  // Strong and emphasis
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-semibold text-gray-900", className)} {...props} />
  ),
  
  // Tables
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full border-collapse border border-gray-200", className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border border-gray-200 px-4 py-2 text-left font-bold bg-gray-50",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn("border border-gray-200 px-4 py-2 text-left", className)}
      {...props}
    />
  ),
  
  // Custom components
  Button,
  Link,
};

interface MDXContentProviderProps {
  children: React.ReactNode;
}

export function MDXContentProvider({ children }: MDXContentProviderProps) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
}
