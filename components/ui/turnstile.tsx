'use client';

import * as React from 'react';

interface TurnstileProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onError?: (error: string) => void;
  onExpire?: () => void;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact';
  className?: string;
}

declare global {
  interface Window {
    turnstile: {
      render: (element: HTMLElement | string, options: any) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
      getResponse: (widgetId: string) => string;
    };
  }
}

export function Turnstile({
  siteKey,
  onVerify,
  onError,
  onExpire,
  theme = 'light',
  size = 'normal',
  className
}: TurnstileProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const widgetIdRef = React.useRef<string | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Load Turnstile script
  React.useEffect(() => {
    if (typeof window !== 'undefined' && !window.turnstile) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    } else if (window.turnstile) {
      setIsLoaded(true);
    }
  }, []);

  // Render Turnstile widget
  React.useEffect(() => {
    if (isLoaded && containerRef.current && window.turnstile && !widgetIdRef.current) {
      try {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: onVerify,
          'error-callback': onError,
          'expired-callback': onExpire,
          theme,
          size,
        });
      } catch (error) {
        console.error('Failed to render Turnstile:', error);
        onError?.('Failed to load security verification');
      }
    }
  }, [isLoaded, siteKey, onVerify, onError, onExpire, theme, size]);

  // Cleanup
  React.useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (error) {
          console.error('Failed to cleanup Turnstile:', error);
        }
      }
    };
  }, []);

  const reset = React.useCallback(() => {
    if (widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current);
      } catch (error) {
        console.error('Failed to reset Turnstile:', error);
      }
    }
  }, []);

  const getResponse = React.useCallback(() => {
    if (widgetIdRef.current && window.turnstile) {
      try {
        return window.turnstile.getResponse(widgetIdRef.current);
      } catch (error) {
        console.error('Failed to get Turnstile response:', error);
        return '';
      }
    }
    return '';
  }, []);

  // Return methods for parent component access
  React.useImperativeHandle(undefined, () => ({
    reset,
    getResponse,
  }));

  return (
    <div className={className}>
      <div ref={containerRef} />
      {!isLoaded && (
        <div className="flex items-center justify-center h-16 bg-gray-100 rounded border-2 border-dashed border-gray-300">
          <span className="text-sm text-gray-500">Loading security verification...</span>
        </div>
      )}
    </div>
  );
}
