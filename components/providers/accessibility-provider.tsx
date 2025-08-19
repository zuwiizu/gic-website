'use client';

import * as React from "react";
import { ToastProvider } from "../ui/toast";

interface AccessibilityContextType {
  announceToScreenReader: (message: string) => void;
  reducedMotion: boolean;
  highContrast: boolean;
}

const AccessibilityContext = React.createContext<AccessibilityContextType | undefined>(undefined);

export function useAccessibility() {
  const context = React.useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
}

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [highContrast, setHighContrast] = React.useState(false);
  const announcementRef = React.useRef<HTMLDivElement>(null);

  // Check for user preferences
  React.useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    // Check for high contrast preference
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    setHighContrast(contrastQuery.matches);
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setHighContrast(e.matches);
    };
    
    contrastQuery.addEventListener('change', handleContrastChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  const announceToScreenReader = React.useCallback((message: string) => {
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        if (announcementRef.current) {
          announcementRef.current.textContent = '';
        }
      }, 1000);
    }
  }, []);

  const value = React.useMemo(() => ({
    announceToScreenReader,
    reducedMotion,
    highContrast,
  }), [announceToScreenReader, reducedMotion, highContrast]);

  return (
    <AccessibilityContext.Provider value={value}>
      <ToastProvider>
        {children}
        {/* Screen reader announcements */}
        <div
          ref={announcementRef}
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        />
      </ToastProvider>
    </AccessibilityContext.Provider>
  );
}
