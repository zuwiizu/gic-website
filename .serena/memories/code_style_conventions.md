# Code Style and Conventions

## TypeScript/React Conventions
- Use TypeScript for all files
- Functional components with hooks (no class components)
- Use `'use client'` directive for client-side components
- Props interfaces should be named `ComponentNameProps`
- Use proper TypeScript types, avoid `any`

## File Structure
- Components in PascalCase (e.g., `Header.tsx`, `Hero.tsx`)
- Use default exports for main components
- Place UI components in `/components/ui/`
- Utility functions in `/lib/`

## Styling
- Tailwind CSS utility classes
- Use `cn()` utility for conditional classes
- Responsive design with mobile-first approach
- Follow shadcn/ui component patterns

## Accessibility
- Always include proper ARIA labels
- Use semantic HTML elements
- Ensure keyboard navigation support
- Include skip links for navigation
- Maintain focus management in interactive components

## Code Organization
- Import order: React, Next.js, external libraries, internal components, utilities
- Use absolute imports from project root
- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks

## Naming Conventions
- Components: PascalCase
- Files: kebab-case or PascalCase for components
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE
- CSS classes: Tailwind utilities or kebab-case