# Task Completion Checklist

When completing any development task, follow these steps:

## Code Quality Checks
1. **Linting**: Run `npm run lint` to check for code style issues
2. **Type Checking**: Run `npm run type-check` to verify TypeScript types
3. **Full Audit**: Run `npm run audit` for comprehensive checks

## Testing
1. **Accessibility**: Run `npm run test:a11y` to ensure WCAG compliance
2. **Performance**: Run `npm run test:perf` to check Core Web Vitals
3. **Manual Testing**: Test functionality in browser at localhost:3000

## Build Verification
1. **Production Build**: Run `npm run build` to ensure it builds successfully
2. **Build Size**: Check for any unusual bundle size increases

## Accessibility Verification
- Test keyboard navigation
- Verify screen reader compatibility
- Check color contrast ratios
- Ensure focus indicators are visible

## Performance Checks
- Verify images are optimized
- Check for unnecessary re-renders
- Ensure proper lazy loading

## Final Steps
- Review changes in browser
- Test responsive design on mobile/tablet
- Verify all links and navigation work correctly
- Check that no console errors appear

## Deployment Ready
Only after all above checks pass should code be considered ready for deployment.