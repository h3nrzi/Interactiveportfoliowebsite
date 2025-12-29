# Projects Page Setup Guide

This guide explains how to set up the two-level filtering system for the projects page.

## Overview

The projects page features a sophisticated filtering system with:
- **Primary Categories**: 8 main categories (All, Web Applications, Mobile Apps, etc.)
- **Secondary Sub-categories**: Dynamic sub-filters based on selected primary category
- **Real-time Search**: Filter by title, description, or technology
- **URL State Management**: Filters persist in URL for easy sharing
- **Smooth Animations**: Motion-powered transitions
- **Responsive Design**: Mobile-friendly with slide-out filter drawer

## Database Schema Updates

The Project model now includes:
- `primaryCategory` (String): Main category classification
- `subCategory` (String): Sub-category for detailed filtering

## File Structure

```
/app/projects/
  └── page.tsx               # Server component, fetches projects

/components/
  ├── projects-client.tsx    # Client component with filtering logic
  ├── project-card.tsx       # Individual project card
  └── project-filters.tsx    # Filter UI components

/lib/
  ├── categories.ts          # Category definitions and mappings
  └── utils.ts              # Utility functions (cn)

/prisma/
  ├── schema.prisma          # Updated with category fields
  └── seed.ts               # 12 realistic sample projects
```

## Categories Configuration

### Primary Categories
1. **All** - Shows all projects
2. **Web Applications** - Websites, SaaS, e-commerce
3. **Mobile Applications** - iOS, Android, React Native
4. **Backend & APIs** - REST, GraphQL, Microservices
5. **Bots** - Discord, Slack, utility bots
6. **AI & Machine Learning** - Computer Vision, NLP, LLMs
7. **DevOps & Infrastructure** - CI/CD, Cloud, Docker
8. **Personal/Experimental** - Side projects, hackathons

### Sub-categories
Each primary category has its own sub-categories (see `/lib/categories.ts` for full list).

## Setup Steps

### 1. Update Database Schema

```bash
# Generate Prisma client with new fields
npx prisma generate

# Create and run migration
npx prisma migrate dev --name add_project_categories
```

### 2. Seed Sample Data

```bash
# Seed database with 12 realistic projects
npx prisma db seed
# or
npm run db:seed
```

The seed script includes projects across all categories with:
- Realistic titles and descriptions
- Proper categorization
- Featured projects
- Technology stacks
- GitHub/live URLs
- Unsplash images

### 3. Verify Data

```bash
# Open Prisma Studio
npx prisma studio
```

Navigate to the Project model and verify all 12 projects are created with proper categories.

## Features

### Client-Side Filtering
- **Instant**: No server requests, all filtering happens in browser
- **Smooth**: Motion animations for filter changes and card updates
- **Efficient**: useMemo for performance optimization

### URL State Management
Filters are synced with URL search params:
- `?category=Web%20Applications`
- `?category=AI%20%26%20Machine%20Learning&subCategory=LLM%20Integration`
- `?search=nextjs`

This allows:
- Shareable filtered views
- Browser back/forward navigation
- Bookmarking specific filters

### Search Functionality
Search works across:
- Project titles
- Descriptions
- Technology tags

### Mobile Experience
- Slide-out filter drawer on mobile
- Touch-friendly filter buttons
- Responsive grid (1/2/3 columns)

## Customization

### Adding New Categories

1. Edit `/lib/categories.ts`:
```typescript
export const primaryCategories = [
  'All',
  'Web Applications',
  // Add your category here
  'New Category',
] as const;

export const subCategories: Record<...> = {
  // Add sub-categories for your new category
  'New Category': ['All', 'Sub 1', 'Sub 2'],
};

export const categoryColors: Record<...> = {
  // Add color scheme for your category
  'New Category': 'bg-orange-500/10 text-orange-700 dark:text-orange-300',
};
```

2. Update seed data in `/prisma/seed.ts` with projects in the new category.

### Styling Project Cards

Edit `/components/project-card.tsx` to customize:
- Card layout
- Image aspect ratio
- Badge styles
- Hover effects
- Animation timing

### Filter UI Customization

Edit `/components/project-filters.tsx` to modify:
- Button styles
- Layout (tabs vs buttons)
- Animation behavior
- Filter position

## Performance Tips

1. **Image Optimization**: All project images use Next.js Image component with lazy loading
2. **Memoization**: Filtered results are memoized to prevent unnecessary recalculation
3. **Animation**: Motion uses `layout` prop for smooth transitions without layout shift
4. **URL Updates**: Router.push with `scroll: false` prevents page jumps

## Troubleshooting

### No Projects Displayed
- Check database has seeded data: `npx prisma studio`
- Verify Prisma client is generated: `npx prisma generate`
- Check console for errors

### Filters Not Working
- Ensure category strings match exactly (case-sensitive)
- Check browser console for TypeScript errors
- Verify URL params are being set correctly

### Images Not Loading
- Check Unsplash URLs in seed data
- Verify Next.js Image domains in `next.config.mjs`
- Check browser network tab for 403/404 errors

## Sample Project Data

The seed includes these project types:
1. Fashion E-commerce (Web App - E-commerce)
2. Project Management SaaS (Web App - SaaS)
3. Fitness Tracker (Mobile - React Native)
4. API Gateway (Backend - Microservices)
5. Social Media API (Backend - GraphQL)
6. Discord Bot (Bots - Moderation)
7. Image Classifier (AI - Computer Vision)
8. ChatGPT Integration (AI - LLM)
9. Kubernetes Pipeline (DevOps - CI/CD)
10. AWS Serverless (DevOps - Cloud)
11. Multiplayer Game (Personal - Fun Tool)
12. Dev CLI Tool (Personal - Side Project)

## Future Enhancements

Potential additions:
- Project sorting (date, popularity, alphabetical)
- Tag-based filtering in addition to categories
- Project comparison feature
- Favorite/bookmark projects
- Project statistics and analytics
- Export filtered results
- Advanced search with operators
