'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import {
  primaryCategories,
  subCategories,
  type PrimaryCategory,
} from '@/lib/categories';

interface ProjectFiltersProps {
  selectedPrimary: PrimaryCategory;
  selectedSecondary: string;
  onPrimaryChange: (category: PrimaryCategory) => void;
  onSecondaryChange: (category: string) => void;
  projectCounts: Record<string, number>;
}

export function ProjectFilters({
  selectedPrimary,
  selectedSecondary,
  onPrimaryChange,
  onSecondaryChange,
  projectCounts,
}: ProjectFiltersProps) {
  const secondaryOptions =
    selectedPrimary !== 'All' ? subCategories[selectedPrimary] : [];

  return (
    <div className="space-y-6">
      {/* Primary Categories */}
      <div>
        <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {primaryCategories.map((category) => {
            const count = projectCounts[category] || 0;
            const isSelected = selectedPrimary === category;

            return (
              <Button
                key={category}
                variant={isSelected ? 'default' : 'outline'}
                size="sm"
                onClick={() => onPrimaryChange(category)}
                className={cn(
                  'transition-all duration-200',
                  isSelected && 'shadow-lg'
                )}
              >
                {category}
                {count > 0 && (
                  <Badge
                    variant="secondary"
                    className={cn(
                      'ml-2 px-1.5 py-0',
                      isSelected
                        ? 'bg-primary-foreground/20'
                        : 'bg-secondary'
                    )}
                  >
                    {count}
                  </Badge>
                )}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Secondary Categories */}
      <AnimatePresence mode="wait">
        {secondaryOptions.length > 0 && (
          <motion.div
            key={selectedPrimary}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
              Sub-categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {secondaryOptions.map((subCategory) => {
                const isSelected = selectedSecondary === subCategory;
                
                return (
                  <Button
                    key={subCategory}
                    variant={isSelected ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => onSecondaryChange(subCategory)}
                    className={cn(
                      'transition-all duration-200',
                      isSelected && 'font-semibold'
                    )}
                  >
                    {subCategory}
                  </Button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
