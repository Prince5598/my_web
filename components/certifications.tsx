'use client';

import { useEffect, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Supervised Machine Learning',
    platform: 'Coursera',
    issuer: 'DeepLearning.AI',
    date: 'July 2024',
    description: 'I learned to build and train ML models from scratch using regression and classification algorithms. I implemented gradient descent, tuned model performance, explored overfitting/underfitting, and practiced data-driven decision-making through hands-on exercises.',
    link: 'https://drive.google.com/file/d/1PKUBjkrQucPswoYUNxDfEFtsHWm2XYe7/view?usp=sharing',
    skills: ['Machine Learning'],
  },
  {
    id: 2,
    title: 'The Web Developer Bootcamp 2024',
    platform: 'Udemy',
    issuer: 'Colt Steele',
    date: 'July 2024',
    description: 'Successfully completed The Web Developer Bootcamp 2024 by Colt Steele, focusing on both frontend and backend web development. Gained practical expertise in building responsive UIs, working with JavaScript ES6+, creating RESTful APIs using Node.js and Express, and integrating MongoDB for data persistence.',
    link: 'https://drive.google.com/file/d/1TUkXufaBsJREg7jC6tlWrDjpuxO1zoJM/view?usp=sharing',
    skills: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB','React'],
  },
];

export function Certifications() {
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
    <section id="certifications" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div data-animate className="opacity-0 translate-y-10 transition-all duration-700 mb-16 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Achievements</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3 leading-tight">Certifications</h2>
          
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              data-animate
              className="opacity-0 translate-y-10 transition-all duration-700 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-8 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                {/* Gradient top accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10 group-hover:bg-accent/20 transition-all"></div>

                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Award className="text-accent" size={28} />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/30 text-accent text-xs font-medium">
                    {cert.platform}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cert.issuer} • {cert.date}</p>

                <p className="text-muted-foreground leading-relaxed mb-6">{cert.description}</p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View credential link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  View Credential <ExternalLink size={16} />
                </a>
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

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}
