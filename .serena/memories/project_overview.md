# Global Insights Collective Website - Project Overview

## Purpose
A production-grade website for Global Insights Collective, a consulting firm focused on creating inclusive communities across campuses and workplaces. They provide cultural awareness training and measurable outcomes for safety, belonging, and results.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **UI Components**: Radix UI primitives for accessibility
- **Content**: MDX for blog posts and case studies
- **Deployment**: Cloudflare Pages with Workers
- **Forms**: Cloudflare Turnstile + KV storage
- **Analytics**: Web Vitals tracking

## Key Features
- WCAG 2.2 AA accessibility compliance
- Performance optimized with Core Web Vitals tracking
- Security with Cloudflare Turnstile protection
- SEO ready with JSON-LD structured data
- Responsive design with mobile-first approach
- MDX-based content management system

## Structure
- `/app` - Next.js app router pages
- `/components` - React components (Header, Hero, UI components, etc.)
- `/content` - MDX content files (insights, case studies, team)
- `/public` - Static assets including logos
- `/lib` - Utility functions and configuration
- `/scripts` - Build and deployment scripts