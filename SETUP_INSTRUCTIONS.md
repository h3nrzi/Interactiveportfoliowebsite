# 🚀 Quick Setup Instructions

## Database Setup & Seeding

### Step 1: Install Dependencies (if not done)
```bash
npm install
# or
pnpm install
```

### Step 2: Generate Prisma Client
```bash
npx prisma generate
```

### Step 3: Push Schema to Database
```bash
npx prisma db push
```

### Step 4: Seed the Database with Projects
```bash
npx prisma db seed
# or
npx tsx prisma/seed.ts
```

This will create 11 sample projects across different categories:
- Web Applications (3 projects)
- Mobile Applications (1 project)
- Backend & APIs (2 projects)
- Bots (1 project)
- AI & Machine Learning (2 projects)
- DevOps & Infrastructure (2 projects)
- Personal/Experimental (2 projects)

### Step 5: View the Projects Page
Navigate to `/projects` in your browser to see all projects with filtering!

## Alternative: Reset & Reseed
```bash
# Delete all projects and reseed
npx prisma db push --force-reset
npx prisma generate
npx prisma db seed
```

## Verify in Prisma Studio
```bash
npx prisma studio
```

This opens a GUI where you can see all seeded projects!
