'use client';

import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    category: 'Languages & Library',
    skills: ['C++','JavaScript', 'Python' ,'Machine Learning' ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    category: 'Frameworks & Databases',
    skills: ['React', 'Next', 'PostgreSQL', 'Express', 'MongoDB' ,'Node'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'GitHub', 'Postman'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
  },
];

export function Skills() {
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
    <section id="skills" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <div ref={headerRef} data-animate className="opacity-0 translate-y-10 transition-all duration-700 mb-16 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3 leading-tight">Technology & Expertise</h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and skills I've developed throughout my career.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              data-animate
              className="opacity-0 translate-y-10 transition-all duration-700 group relative overflow-hidden"
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className={`absolute inset-0 ${category.bgColor} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent/20 backdrop-blur-sm">
                <div className="mb-8 relative">
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                  <div className={`absolute left-0 top-full mt-2 h-1 w-12 rounded-full bg-gradient-to-r ${category.color} group-hover:w-full transition-all duration-500`}></div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="skill-badge"
                      style={{
                        transitionDelay: `${skillIndex * 50}ms`,
                      }}
                    >
                      <span className="px-4 py-2 rounded-lg bg-secondary/30 text-foreground border border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 text-sm font-medium cursor-default hover:shadow-md hover:shadow-accent/10 hover:scale-110 hover:-translate-y-1 block text-center">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .skill-badge {
          transition: all 0.3s ease;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}
