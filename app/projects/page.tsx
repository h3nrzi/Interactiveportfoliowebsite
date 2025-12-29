import { Suspense } from 'react';
import { prisma } from '@/lib/db';
import { Navbar } from '@/components/navbar';
import { ProjectsClient } from '@/components/projects-client';
import { Loader } from 'lucide-react';

async function getProjects() {
  const projects = await prisma.project.findMany({
    orderBy: [
      { featured: 'desc' },
      { createdAt: 'desc' },
    ],
    select: {
      slug: true,
      title: true,
      description: true,
      imageUrl: true,
      technologies: true,
      primaryCategory: true,
      subCategory: true,
      githubUrl: true,
      liveUrl: true,
      featured: true,
      createdAt: true,
    },
  });

  return projects;
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-12 sm:py-16">
          <div className="container">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore my work across web development, mobile apps, AI/ML, and more.
                Filter by category to find what interests you.
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                {projects.length} {projects.length === 1 ? 'project' : 'projects'} total
              </div>
            </div>

            <Suspense
              fallback={
                <div className="flex items-center justify-center py-20">
                  <Loader className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              }
            >
              <ProjectsClient projects={projects} />
            </Suspense>
          </div>
        </section>
      </main>
    </div>
  );
}
