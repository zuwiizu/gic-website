'use client';

import { useEffect } from 'react';

export function WebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamically import web-vitals to avoid SSR issues
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const vitalsUrl = '/api/vitals';

      function sendToAnalytics(metric: any) {
        // Send to analytics endpoint
        fetch(vitalsUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(metric),
        }).catch((error) => {
          console.error('Failed to send vitals:', error);
        });

        // Log in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Web Vital:', metric);
        }
      }

      // Track all Core Web Vitals
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    }).catch(() => {
      // Silently fail if web-vitals is not available
    });
  }, []);

  return null;
}
