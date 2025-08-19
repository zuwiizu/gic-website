/**
 * JSON-LD structured data for SEO
 */

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    email: string;
  };
  address: {
    '@type': string;
    addressCountry: string;
  };
  sameAs: string[];
  foundingDate: string;
  numberOfEmployees: string;
  industry: string;
  services: string[];
}

export interface ArticleSchema {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  author: {
    '@type': string;
    name: string;
  };
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
  keywords: string[];
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
  serviceType: string;
  areaServed: string;
  audience: string[];
}

export function getOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Global Insights Collective',
    description: 'We help universities, employers and public agencies translate cultural awareness into measurable outcomes—safer communities, stronger belonging, and better results.',
    url: 'https://globalinsightscollective.com',
    logo: 'https://globalinsightscollective.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'hello@globalinsightscollective.com'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    sameAs: [
      'https://linkedin.com/company/global-insights-collective',
      'https://twitter.com/gicollective'
    ],
    foundingDate: '2020',
    numberOfEmployees: '2-10',
    industry: 'Education and Training Services',
    services: [
      'Cultural Competency Training',
      'International Student Support',
      'Inclusive Workplace Programs',
      'Crisis Response & Mediation',
      'Assessment & Evaluation',
      'Strategic Consulting'
    ]
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  keywords: string[];
}): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Global Insights Collective',
      logo: {
        '@type': 'ImageObject',
        url: 'https://globalinsightscollective.com/logo.png'
      }
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    },
    keywords: article.keywords
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  serviceType: string;
  audience: string[];
}): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Global Insights Collective'
    },
    serviceType: service.serviceType,
    areaServed: 'United States',
    audience: service.audience
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
