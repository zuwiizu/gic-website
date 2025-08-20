# Global Insights Collective Website

A production-grade website built with Next.js 14, deployed on Cloudflare Pages with full accessibility compliance (WCAG 2.2 AA).

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Accessibility First**: WCAG 2.2 AA compliant with comprehensive testing
- **Performance Optimized**: Core Web Vitals tracking, image optimization, bundle splitting
- **Security**: Cloudflare Turnstile protection, secure headers, CSRF protection
- **SEO Ready**: JSON-LD structured data, sitemap generation, meta optimization
- **Content Management**: MDX-based content system with filtering and search
- **Responsive Design**: Mobile-first approach with modern UI components

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **UI Components**: Radix UI primitives for accessibility
- **Content**: MDX for blog posts and case studies
- **Deployment**: Cloudflare Pages with Workers
- **Forms**: Cloudflare Turnstile + KV storage
- **Analytics**: Web Vitals tracking
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Cloudflare account (for deployment)
- Wrangler CLI (for Cloudflare deployment)

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/gic-website.git
   cd gic-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-site-key
TURNSTILE_SECRET_KEY=your-turnstile-secret-key

# Webhook for form notifications
WEBHOOK_URL=your-webhook-url

# Cloudflare KV (production only)
GIC_CONTACT_KV_NAMESPACE_ID=your-kv-namespace-id
```

## 📝 Content Management

### Adding Insights

1. Create a new MDX file in `content/insights/`
2. Include proper frontmatter:
   ```yaml
   ---
   title: "Your Insight Title"
   description: "Brief description"
   date: "2024-01-15"
   author: "Author Name"
   category: "strategy" # strategy, best-practices, research, trends
   audience: "universities" # universities, employers, healthcare, nonprofits, all
   format: "article" # article, guide, checklist, case-study
   published: true
   ---
   ```

### Adding Case Studies

1. Create a new MDX file in `content/case-studies/`
2. Include case study frontmatter with client info, metrics, etc.

### Adding Team Members

1. Create a new MDX file in `content/team/`
2. Include team member details and bio

## 🚀 Deployment

### Automatic Deployment (Recommended)

The site automatically deploys via GitHub Actions:

- **Staging**: Push to `develop` branch
- **Production**: Push to `main` branch

### Manual Deployment

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate with Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy to staging**
   ```bash
   ./scripts/deploy.sh staging
   ```

4. **Deploy to production**
   ```bash
   ./scripts/deploy.sh production
   ```

## 🧪 Testing

### Run all tests
```bash
npm run test
```

### Accessibility testing
```bash
npm run test:a11y
```

### Performance testing
```bash
npm run test:perf
```

### Linting and type checking
```bash
npm run lint
npm run type-check
```

## 📊 Performance Monitoring

The site includes built-in Web Vitals tracking:

- **Core Web Vitals**: LCP, FID, CLS automatically tracked
- **Custom Metrics**: Page load times, user interactions
- **Analytics**: Sent to `/api/vitals` endpoint

## ♿ Accessibility

This site is built to meet WCAG 2.2 AA standards:

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Minimum 4.5:1 contrast ratio
- **Focus Management**: Visible focus indicators
- **Skip Links**: Navigation shortcuts for screen readers

### Accessibility Testing

```bash
# Run automated accessibility tests
npm run test:a11y

# Manual testing checklist
npm run a11y:checklist
```

## 🔒 Security

- **Cloudflare Turnstile**: Bot protection on forms
- **Security Headers**: CSP, HSTS, X-Frame-Options
- **Input Validation**: Server-side form validation
- **HTTPS Only**: Enforced SSL/TLS

## 📈 SEO

- **Structured Data**: JSON-LD for organization and articles
- **Meta Tags**: Dynamic meta descriptions and titles
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Open Graph**: Social media sharing optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write accessible HTML and components
- Test on multiple devices and browsers
- Run accessibility audits before submitting
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- **Email**: tech@globalinsightscollective.com
- **Documentation**: Check the `/docs` folder
- **Issues**: Create a GitHub issue

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Radix UI](https://radix-ui.com/) for accessible components
- [Cloudflare](https://cloudflare.com/) for hosting and security
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
# Trigger deployment with web-vitals fix - 2025-08-20
