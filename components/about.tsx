'use client';

import { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experience = [
  {
    year: 'May - June (2025)',
    title: 'Backend Developer Intern',
    company: 'Brainybeam',
    description: 'Developed core backend modules for a bug tracking system enabling efficient issue reporting, team assignment, and status updates. Implemented JWT-based authentication, role-based access, and rate limiting to secure 15+ API endpoints and prevent abuse on protected routes.',
    icon: Briefcase,
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    const elements = containerRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div ref={headerRef} data-animate className="opacity-0 translate-y-10 transition-all duration-700 mb-16 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Experience</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3 leading-tight">My Internship Journey</h2>
          
        </div>

        <div ref={containerRef} className="flex justify-center">
          {experience.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                data-animate
                className="opacity-0 translate-y-10 transition-all duration-700 w-full max-w-2xl p-8 rounded-xl border border-accent/30 bg-card hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <Icon className="text-accent" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-accent font-medium">{exp.year}</p>
                    <h3 className="text-xl font-bold text-foreground mt-1">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{exp.company}</p>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
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
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}
