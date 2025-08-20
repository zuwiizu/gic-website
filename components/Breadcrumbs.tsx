'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on homepage
  if (pathname === '/') return null;
  
  const pathSegments = pathname.split('/').filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
  ];
  
  // Build breadcrumb trail
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Convert segment to readable label
    let label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Custom labels for specific paths
    const customLabels: Record<string, string> = {

      'speaking': 'Speaking & Media',
      'about': 'About Us',
      'contact': 'Contact',

      'services': 'Services',
      'industries': 'Industries'
    };
    
    if (customLabels[segment]) {
      label = customLabels[segment];
    }
    
    breadcrumbs.push({
      label,
      href: currentPath
    });
  });
  
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-gray-50 border-b border-gray-200 py-3"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={item.href} className="flex items-center">
                {index === 0 && (
                  <Home className="h-4 w-4 text-gray-400 mr-2" />
                )}
                
                {isLast ? (
                  <span 
                    className="text-gray-900 font-medium"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-brand-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded"
                    >
                      {item.label}
                    </Link>
                    <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

// Alternative compact version for mobile
export function CompactBreadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;
  
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1];
  
  let label = currentPage
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const customLabels: Record<string, string> = {

    'speaking': 'Speaking & Media',
    'about': 'About Us',
    'contact': 'Contact',

    'services': 'Services',
    'industries': 'Industries'
  };
  
  if (customLabels[currentPage]) {
    label = customLabels[currentPage];
  }
  
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-gray-50 border-b border-gray-200 py-2 md:hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center text-sm">
          <Link
            href="/"
            className="text-gray-600 hover:text-brand-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
          <span className="text-gray-900 font-medium">{label}</span>
        </div>
      </div>
    </nav>
  );
}
