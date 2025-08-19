/**
 * Type definitions for the GIC website
 */

export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
  slug: string;
  published?: boolean;
}

export interface CaseStudy extends Frontmatter {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Insight extends Frontmatter {
  readingTime: string;
  category: 'strategy' | 'research' | 'best-practices' | 'trends';
  audience: 'universities' | 'employers' | 'healthcare' | 'nonprofits' | 'all';
  format: 'article' | 'guide' | 'checklist' | 'case-study';
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
  expertise: string[];
  slug?: string;
  credentials?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  modules: string[];
  deliveryFormats: string[];
  duration: string;
  audience: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
  service?: string;
  turnstileToken: string;
}
