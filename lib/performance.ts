/**
 * Performance optimization utilities
 */

// Preload critical routes
export function preloadRoute(href: string) {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }
}

// Preload critical routes on page load
export function preloadCriticalRoutes() {
  if (typeof window !== 'undefined') {
    const criticalRoutes = [
      '/about',
      '/services',
      '/contact',
      '/case-studies',
      '/insights'
    ];

    criticalRoutes.forEach(route => {
      setTimeout(() => preloadRoute(route), 1000);
    });
  }
}

// Lazy load images with intersection observer
export function createImageObserver() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          img.classList.remove('lazy');
        }
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
}

// Web Vitals tracking
export function trackWebVitals() {
  if (typeof window === 'undefined') return;

  // Track Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  }).catch(() => {
    // Silently fail if web-vitals is not available
  });
}

// Resource hints for external domains
export function addResourceHints() {
  if (typeof window === 'undefined') return;

  const hints = [
    { rel: 'dns-prefetch', href: '//challenges.cloudflare.com' },
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://challenges.cloudflare.com' },
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.rel === 'preconnect') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
}

// Critical CSS inlining helper
export function inlineCriticalCSS(css: string) {
  if (typeof window === 'undefined') return;

  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.appendChild(style);
}

// Service worker registration
export function registerServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Bundle analysis helper
export function analyzeBundleSize() {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') {
    return;
  }

  // Log bundle information in development
  console.log('Bundle analysis available at: /_next/static/chunks/');
}

// Memory usage monitoring
export function monitorMemoryUsage() {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return;
  }

  const memory = (performance as any).memory;
  if (memory) {
    console.log('Memory usage:', {
      used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
      total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
    });
  }
}

// Initialize performance optimizations
export function initializePerformanceOptimizations() {
  if (typeof window === 'undefined') return;

  // Add resource hints
  addResourceHints();
  
  // Preload critical routes
  preloadCriticalRoutes();
  
  // Track web vitals
  trackWebVitals();
  
  // Register service worker
  registerServiceWorker();
  
  // Monitor memory in development
  if (process.env.NODE_ENV === 'development') {
    setTimeout(monitorMemoryUsage, 5000);
  }
}
