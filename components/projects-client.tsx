'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCard } from './project-card';
import { ProjectFilters } from './project-filters';
import { type PrimaryCategory, primaryCategories } from '@/lib/categories';
import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string | null;
  technologies: string[];
  primaryCategory: string;
  subCategory: string;
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  createdAt: Date;
}

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrimary, setSelectedPrimary] = useState<PrimaryCategory>(
    (searchParams.get('category') as PrimaryCategory) || 'All'
  );
  const [selectedSecondary, setSelectedSecondary] = useState<string>(
    searchParams.get('subCategory') || 'All'
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedPrimary !== 'All') {
      params.set('category', selectedPrimary);
    }
    if (selectedSecondary !== 'All') {
      params.set('subCategory', selectedSecondary);
    }
    if (searchQuery) {
      params.set('search', searchQuery);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(newUrl, { scroll: false });
  }, [selectedPrimary, selectedSecondary, searchQuery, pathname, router]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by primary category
    if (selectedPrimary !== 'All') {
      filtered = filtered.filter(
        (project) => project.primaryCategory === selectedPrimary
      );
    }

    // Filter by secondary category
    if (selectedSecondary !== 'All') {
      filtered = filtered.filter(
        (project) => project.subCategory === selectedSecondary
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(query)
          )
      );
    }

    return filtered;
  }, [projects, selectedPrimary, selectedSecondary, searchQuery]);

  // Calculate project counts per category
  const projectCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: projects.length,
    };

    primaryCategories.forEach((category) => {
      if (category !== 'All') {
        counts[category] = projects.filter(
          (p) => p.primaryCategory === category
        ).length;
      }
    });

    return counts;
  }, [projects]);

  const handlePrimaryChange = (category: PrimaryCategory) => {
    setSelectedPrimary(category);
    setSelectedSecondary('All');
  };

  const handleSecondaryChange = (category: string) => {
    setSelectedSecondary(category);
  };

  const filters = (
    <ProjectFilters
      selectedPrimary={selectedPrimary}
      selectedSecondary={selectedSecondary}
      onPrimaryChange={handlePrimaryChange}
      onSecondaryChange={handleSecondaryChange}
      projectCounts={projectCounts}
    />
  );

  return (
    <div className="space-y-8">
      {/* Search and Mobile Filter Button */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search projects by name, description, or technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Mobile Filter Button */}
        <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="sm:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {(selectedPrimary !== 'All' || selectedSecondary !== 'All') && (
                <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {[selectedPrimary !== 'All', selectedSecondary !== 'All'].filter(
                    Boolean
                  ).length}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filter Projects</SheetTitle>
              <SheetDescription>
                Filter projects by category and sub-category
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">{filters}</div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden sm:block">{filters}</div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold">{filteredProjects.length}</span>{' '}
          {filteredProjects.length === 1 ? 'project' : 'projects'}
          {(selectedPrimary !== 'All' ||
            selectedSecondary !== 'All' ||
            searchQuery) && (
            <>
              {' '}
              <Button
                variant="link"
                size="sm"
                onClick={() => {
                  setSelectedPrimary('All');
                  setSelectedSecondary('All');
                  setSearchQuery('');
                }}
                className="h-auto p-0 text-sm"
              >
                Clear filters
              </Button>
            </>
          )}
        </p>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="popLayout">
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center py-20"
          >
            <div className="mx-auto max-w-md">
              <h3 className="text-lg font-semibold mb-2">No projects found</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Try adjusting your filters or search query
              </p>
              <Button
                onClick={() => {
                  setSelectedPrimary('All');
                  setSelectedSecondary('All');
                  setSearchQuery('');
                }}
              >
                Clear all filters
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
