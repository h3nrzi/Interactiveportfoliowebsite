# Modern Portfolio Website with Next.js 15, Clerk & Prisma

A comprehensive, production-ready portfolio website built with Next.js 15 App Router, featuring Clerk authentication, Prisma ORM with PostgreSQL, and modern UI components.

## 🚀 Features

- **Next.js 15 App Router** - Latest Next.js with full TypeScript support
- **Clerk Authentication** - Secure user authentication with email/social login
- **Prisma ORM** - Type-safe database access with PostgreSQL
- **Protected Routes** - Middleware-based route protection
- **Profile Builder** - Users can customize their professional profiles
- **Comment System** - Project comments with moderation
- **Dark Mode** - next-themes with system preference detection (default: dark)
- **Motion Animations** - Smooth animations using Motion (formerly Framer Motion)
- **shadcn/ui Components** - Beautiful, accessible UI components
- **Responsive Design** - Mobile-first, fully responsive layout

## 📁 Project Structure

```
/
├── app/
│   ├── api/
│   │   ├── profile/route.ts      # Profile CRUD operations
│   │   └── comments/route.ts     # Comments CRUD with moderation
│   ├── sign-in/[[...sign-in]]/   # Clerk sign-in page
│   ├── sign-up/[[...sign-up]]/   # Clerk sign-up page
│   ├── profile/page.tsx          # Protected: User profile builder
│   ├── layout.tsx                # Root layout with providers
│   └── page.tsx                  # Home page with conditional CTAs
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── navbar.tsx                # Auth-aware navigation
│   ├── hero.tsx                  # Hero section with animations
│   ├── profile-builder.tsx       # Profile creation/editing form
│   ├── theme-provider.tsx        # Dark mode provider
│   └── theme-toggle.tsx          # Theme switcher
├── prisma/
│   └── schema.prisma             # Database schema
├── lib/
│   └── db.ts                     # Prisma client instance
├── middleware.ts                 # Clerk middleware for protected routes
├── .env.example                  # Environment variables template
└── next.config.mjs               # Next.js configuration
```

## 🛠 Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/profile
```

### 3. Set up Clerk

1. Create a free account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your API keys to `.env`
4. Configure OAuth providers (optional: Google, GitHub, etc.)

### 4. Set up PostgreSQL Database

Option A: Local PostgreSQL
```bash
# Install PostgreSQL and create database
createdb portfolio
```

Option B: Use a cloud provider
- [Supabase](https://supabase.com) (Free tier available)
- [Neon](https://neon.tech) (Free tier available)
- [Railway](https://railway.app)

### 5. Initialize Prisma

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations (creates tables)
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view data
npx prisma studio
```

### 6. Run Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Database Schema

### User
- `id`: Unique identifier
- `email`: User email (from Clerk)
- `name`: User name (from Clerk)
- `clerkId`: Clerk user ID
- `profile`: One-to-one relationship with Profile
- `comments`: One-to-many relationship with Comments

### Profile
- `id`: Unique identifier
- `userId`: Foreign key to User
- `profession`: e.g., "Frontend Developer"
- `bio`: User biography (max 500 chars)
- `skills`: Array of skill names
- `avatarUrl`: Profile picture URL

### Project
- `id`: Unique identifier
- `slug`: URL-friendly identifier
- `title`: Project name
- `description`: Short description
- `content`: Full project details
- `technologies`: Array of tech stack
- `featured`: Boolean flag
- `comments`: One-to-many relationship with Comments

### Comment
- `id`: Unique identifier
- `userId`: Foreign key to User
- `projectSlug`: Foreign key to Project
- `content`: Comment text
- `approved`: Moderation status (default: false)
- `createdAt`: Timestamp

## 🔒 Protected Routes

The following routes require authentication:
- `/profile` - User profile builder
- `/api/profile` - Profile API endpoints
- `/api/comments` - Comment API endpoints

Middleware automatically redirects unauthenticated users to `/sign-in`.

## 🎨 Customization

### Update Theme Colors

Edit `/src/styles/theme.css` to customize the color scheme.

### Add New Skills/Projects

Update the data in:
- `/components/skills.tsx` - Skills list
- `/components/projects.tsx` - Featured projects

### Modify Profile Fields

1. Update Prisma schema in `/prisma/schema.prisma`
2. Run `npx prisma migrate dev`
3. Update API route validation in `/app/api/profile/route.ts`
4. Update form in `/components/profile-builder.tsx`

## 📝 API Routes

### Profile API (`/api/profile`)

**GET** - Fetch current user's profile
```typescript
Response: {
  user: User,
  profile: Profile | null
}
```

**POST** - Create/update profile
```typescript
Request Body: {
  profession: string,
  bio?: string,
  skills: string[],
  avatarUrl?: string
}
```

### Comments API (`/api/comments`)

**GET** - Fetch comments for a project
```typescript
Query Params: {
  projectSlug: string,
  approved?: boolean
}
```

**POST** - Create a comment (requires auth)
```typescript
Request Body: {
  projectSlug: string,
  content: string
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables on Vercel

Add all `.env` variables in Vercel Project Settings → Environment Variables.

### Database

Ensure your production DATABASE_URL points to a production PostgreSQL instance (not localhost).

## 🧩 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Authentication**: Clerk
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Motion (Framer Motion)
- **Dark Mode**: next-themes
- **Form Validation**: Zod
- **Icons**: Lucide React

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please open an issue on GitHub.
