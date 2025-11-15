'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { projectsData } from '@/lib/projects-data';

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    const elements = containerRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => {
      if (el !== headerRef.current) {
        observer.observe(el);
      }
    });

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-72 h-72 bg-accent/20 dark:bg-accent/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -left-32 w-72 h-72 bg-secondary/20 dark:bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <div ref={headerRef} data-animate className="opacity-0 translate-y-10 transition-all duration-700 mb-16 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3 leading-tight">Featured Projects</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and AI/ML.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              data-animate
              className="group translate-y-10 transition-all duration-700 bg-card hover:bg-card/80 dark:bg-card/50 dark:hover:bg-card/60 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg hover:shadow-accent/20 transition-all hover:-translate-y-2 border border-border/50 dark:border-border/70 hover:border-accent/50 dark:hover:border-accent/40"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg?height=256&width=512&query=project"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
                  <ArrowUpRight className="text-accent opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 ml-2" size={24} />
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-secondary/30 text-accent px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        [data-animate].animate-in {
          animation: fadeInUp 0.7s ease-out forwards !important;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
