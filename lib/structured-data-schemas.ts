export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Global Insights Collective",
  "url": "https://globalinsightscollective.com/",
  "logo": "https://globalinsightscollective.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/global-insights-collective"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "hello@globalinsightscollective.com"
    }
  ],
  "description": "Evidence-based training and advisory services that reduce bias incidents and strengthen belonging across universities, employers, and public agencies."
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Cultural Competency Training",
  "provider": {
    "@type": "Organization",
    "name": "Global Insights Collective"
  },
  "areaServed": "US",
  "audience": {
    "@type": "Audience",
    "audienceType": ["Universities", "Employers", "Public Agencies"]
  }
};

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const articleSchema = (article: {
  headline: string,
  author: string,
  datePublished: string,
  dateModified: string,
  description: string,
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.headline,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Global Insights Collective",
    "logo": {
      "@type": "ImageObject",
      "url": "https://globalinsightscollective.com/logo.png"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "description": article.description,
  "url": article.url
});