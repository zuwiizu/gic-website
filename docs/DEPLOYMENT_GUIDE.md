# Deployment Guide for GIC Website

This guide covers the complete deployment process for the Global Insights Collective website.

## 🚀 Pre-Deployment Checklist

### 1. Code Quality
- [ ] All code is committed and pushed to repository
- [ ] ESLint passes with no errors
- [ ] TypeScript compilation succeeds
- [ ] All tests pass (`npm run test`)
- [ ] QA check passes (`./scripts/qa-check.sh`)

### 2. Content Review
- [ ] All content is proofread and approved
- [ ] Images are optimized and have alt text
- [ ] Contact information is accurate
- [ ] Legal pages are up to date

### 3. Environment Setup
- [ ] Cloudflare account is set up
- [ ] Domain is configured
- [ ] Environment variables are set
- [ ] KV namespaces are created
- [ ] Turnstile is configured

## 🔧 Environment Configuration

### Cloudflare Dashboard Setup

1. **Create Cloudflare Pages Project**
   ```bash
   # Connect your GitHub repository to Cloudflare Pages
   # Set build command: npm run pages:build
   # Set output directory: out
   ```

2. **Environment Variables**
   Set these in Cloudflare Pages settings:
   ```
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-site-key
   TURNSTILE_SECRET_KEY=your-secret-key
   WEBHOOK_URL=your-webhook-url
   NODE_ENV=production
   ```

3. **KV Namespace**
   ```bash
   # Create KV namespace for contact form data
   wrangler kv:namespace create "GIC_CONTACT"
   wrangler kv:namespace create "GIC_CONTACT" --preview
   ```

4. **Custom Domain**
   - Add your domain in Cloudflare Pages
   - Configure DNS records
   - Enable SSL/TLS

### GitHub Secrets

Set these secrets in your GitHub repository:
```
CLOUDFLARE_API_TOKEN=your-api-token
CLOUDFLARE_ACCOUNT_ID=your-account-id
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-site-key
```

## 📦 Deployment Methods

### Method 1: Automatic Deployment (Recommended)

1. **Staging Deployment**
   ```bash
   git checkout develop
   git push origin develop
   # Automatically deploys to staging environment
   ```

2. **Production Deployment**
   ```bash
   git checkout main
   git merge develop
   git push origin main
   # Automatically deploys to production
   ```

### Method 2: Manual Deployment

1. **Using Deployment Script**
   ```bash
   # Deploy to staging
   ./scripts/deploy.sh staging
   
   # Deploy to production
   ./scripts/deploy.sh production
   ```

2. **Using Wrangler CLI**
   ```bash
   # Build the project
   npm run pages:build
   
   # Deploy to Cloudflare Pages
   wrangler pages deploy out --project-name=gic-website
   ```

## 🧪 Post-Deployment Testing

### 1. Smoke Tests
- [ ] Homepage loads correctly
- [ ] All main navigation links work
- [ ] Contact form submits successfully
- [ ] Images load properly
- [ ] No console errors

### 2. Performance Verification
- [ ] Run Lighthouse audit on production URL
- [ ] Check Core Web Vitals
- [ ] Verify CDN is serving assets
- [ ] Test loading speed from different locations

### 3. Accessibility Verification
- [ ] Run axe-core tests on production
- [ ] Test with screen reader
- [ ] Verify keyboard navigation
- [ ] Check color contrast

### 4. SEO Verification
- [ ] Verify meta tags are correct
- [ ] Check sitemap.xml is accessible
- [ ] Verify robots.txt is correct
- [ ] Test structured data with Rich Results Test

### 5. Security Verification
- [ ] HTTPS is enforced
- [ ] Security headers are present
- [ ] Forms are protected by Turnstile
- [ ] No sensitive data exposed

## 🔍 Monitoring Setup

### 1. Analytics
- [ ] Set up Google Analytics (if required)
- [ ] Configure conversion tracking
- [ ] Set up custom events

### 2. Performance Monitoring
- [ ] Web Vitals tracking is working
- [ ] Error tracking is configured
- [ ] Uptime monitoring is set up

### 3. Form Monitoring
- [ ] Contact form submissions are being received
- [ ] Email notifications are working
- [ ] Data is being stored in KV

## 🚨 Rollback Procedures

### If Issues Are Found Post-Deployment

1. **Immediate Rollback**
   ```bash
   # Revert to previous deployment
   wrangler pages deployment list --project-name=gic-website
   wrangler pages deployment activate <previous-deployment-id>
   ```

2. **GitHub Rollback**
   ```bash
   # Revert the commit
   git revert <commit-hash>
   git push origin main
   ```

3. **Emergency Procedures**
   - Document the issue immediately
   - Notify stakeholders
   - Implement hotfix if possible
   - Plan proper fix for next release

## 📊 Performance Benchmarks

### Target Metrics
- **Lighthouse Performance**: ≥ 90
- **Lighthouse Accessibility**: ≥ 90
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 200ms

### Monitoring Tools
- Google PageSpeed Insights
- Cloudflare Analytics
- Web Vitals Chrome Extension
- Lighthouse CI

## 🔐 Security Considerations

### Headers
Ensure these security headers are set:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Content Security Policy
Consider implementing CSP headers for additional security.

### Regular Updates
- Keep dependencies updated
- Monitor security advisories
- Regular security audits

## 📝 Maintenance Schedule

### Weekly
- [ ] Check website uptime and performance
- [ ] Review form submissions
- [ ] Monitor error logs

### Monthly
- [ ] Update dependencies
- [ ] Review analytics data
- [ ] Performance audit
- [ ] Security scan

### Quarterly
- [ ] Full accessibility audit
- [ ] Content review and updates
- [ ] SEO performance review
- [ ] Backup verification

## 🆘 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Performance Issues**
   - Optimize images
   - Check for large JavaScript bundles
   - Verify CDN configuration

3. **Form Issues**
   - Verify Turnstile configuration
   - Check KV namespace permissions
   - Test webhook endpoints

4. **Accessibility Issues**
   - Run automated tests
   - Check color contrast
   - Verify keyboard navigation

### Support Contacts
- **Technical Issues**: tech@globalinsightscollective.com
- **Content Issues**: content@globalinsightscollective.com
- **Emergency**: Use emergency contact procedures

## 📚 Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [Core Web Vitals](https://web.dev/vitals/)

---

**Remember**: Always test thoroughly in staging before deploying to production. When in doubt, ask for a second review.
