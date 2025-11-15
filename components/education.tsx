'use client';

import { useEffect, useRef } from 'react';
import { BookOpen, Calendar } from 'lucide-react';

const educationData = [
  {
    id: 1,
    institution: 'Nirma University',
    degree: 'B.Tech',
    field: 'CSE',
    duration: '2026',
    cgpa: '8.73/10',
    description: 'Minor in Adaptive AI',
  },
  {
    id: 2,
    institution: 'Vivekanand Science Academy',
    level: 'High School (12th)',
    duration: '2022',
    percentage: '90.67%',
    description: '',
  },
];

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

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

    const elements = containerRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="education" className="relative py-10 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div data-animate className="opacity-0 translate-y-10 transition-all duration-700 mb-16 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Learning Journey</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3 leading-tight">Education</h2>
        
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              data-animate
              className="opacity-0 translate-y-10 transition-all duration-700 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-background border border-border rounded-xl p-8 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                {/* Left border accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-l-xl"></div>

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 bg-accent/10 rounded-lg">
                      <BookOpen className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{edu.institution}</h3>
                      <p className="text-accent font-medium mt-1">
                        {edu.degree || edu.level} {edu.field && `in ${edu.field}`}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar size={16} />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-accent">
                      {edu.cgpa || edu.percentage}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed ml-16">{edu.description}</p>
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
