'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

interface HeroProps {
  isAuthenticated: boolean;
  userName?: string;
}

export function Hero({ isAuthenticated, userName }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-primary transition-all">
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  {isAuthenticated && userName
                    ? `Welcome back, ${userName}!`
                    : 'Available for new opportunities'}
                </span>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Software Engineer
              <span className="block text-primary">Building Digital Experiences</span>
            </h1>

            <p className="text-lg leading-8 text-muted-foreground mb-10">
              Full-stack developer specializing in modern web technologies.
              Creating scalable applications with React, Next.js, and TypeScript.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {isAuthenticated ? (
                <>
                  <Link href="/profile">
                    <Button size="lg" className="gap-2">
                      <Code className="h-5 w-5" />
                      My Profile
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button size="lg" variant="outline">
                      View Projects
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/sign-up">
                    <Button size="lg" className="gap-2">
                      Get Started
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button size="lg" variant="outline">
                      View Work
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>

          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>
      </div>
    </section>
  );
}
