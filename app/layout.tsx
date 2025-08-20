import '../app/globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AccessibilityProvider } from '../components/providers/accessibility-provider';
import { ToastViewport } from '../components/ui/toast';
import { StructuredData } from '../components/StructuredData';
import { WebVitals } from '../components/WebVitals';
import { getOrganizationSchema } from '../lib/structured-data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: {
    default: 'Global Insights Collective | Inclusive Communities Across Campuses & Workplaces',
    template: '%s | Global Insights Collective'
  },
  description: 'We help universities, employers and public agencies translate cultural awareness into measurable outcomes—safer communities, stronger belonging, and better results.',
  keywords: ['diversity', 'inclusion', 'cultural competency', 'training', 'consulting', 'universities', 'workplace'],
  authors: [{ name: 'Global Insights Collective' }],
  creator: 'Global Insights Collective',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://globalinsightscollective.com',
    siteName: 'Global Insights Collective',
    title: 'Global Insights Collective | Inclusive Communities Across Campuses & Workplaces',
    description: 'We help universities, employers and public agencies translate cultural awareness into measurable outcomes—safer communities, stronger belonging, and better results.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Insights Collective | Inclusive Communities Across Campuses & Workplaces',
    description: 'We help universities, employers and public agencies translate cultural awareness into measurable outcomes—safer communities, stronger belonging, and better results.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/3.png',
    shortcut: '/3.png',
    apple: '/3.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData data={getOrganizationSchema()} />
      </head>
      <body className="antialiased bg-white text-gray-800 font-sans">
        <AccessibilityProvider>
          <Header />
          <main id="main-content" className="flex-1 min-h-screen">
            {children}
          </main>
          <Footer />
          <ToastViewport />
          <WebVitals />
        </AccessibilityProvider>
      </body>
    </html>
  );
}