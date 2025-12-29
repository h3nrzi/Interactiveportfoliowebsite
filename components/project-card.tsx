'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { categoryColors, type PrimaryCategory } from '@/lib/categories';

interface ProjectCardProps {
  project: {
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
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      layout
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:border-primary/50 overflow-hidden">
          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden bg-muted">
            {project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-purple-500/20">
                <span className="text-4xl font-bold text-muted-foreground/20">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
            {project.featured && (
              <div className="absolute top-2 right-2">
                <Badge className="bg-yellow-500/90 text-yellow-950 hover:bg-yellow-500">
                  Featured
                </Badge>
              </div>
            )}
          </div>

          <CardHeader>
            <div className="flex items-start justify-between gap-2 mb-2">
              <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                {project.title}
              </CardTitle>
            </div>
            <CardDescription className="line-clamp-2">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Category Badge */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className={categoryColors[project.primaryCategory as PrimaryCategory]}
              >
                {project.primaryCategory}
              </Badge>
              {project.subCategory !== 'All' && (
                <Badge variant="outline" className="text-xs">
                  {project.subCategory}
                </Badge>
              )}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between text-xs text-muted-foreground border-t pt-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(project.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })}
            </div>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <Github className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              )}
              {project.liveUrl && (
                <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
