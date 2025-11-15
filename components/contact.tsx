'use client';

import { useEffect, useRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
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
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div ref={containerRef} className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Contact Header */}
        <div data-animate className="opacity-0 translate-y-10 transition-all duration-700 text-center mb-16">
          <span className="text-accent font-medium text-sm">GET IN TOUCH</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-2">Let's Connect</h2>
          
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Email Contact */}
          <div data-animate className="opacity-0 translate-y-10 transition-all duration-700 bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Mail className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">Direct message</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Have a question or project proposal? Feel free to send me an email directly.
            </p>
            <a
              href="mailto:princepatel5598@gmail.com"
              className="inline-block px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105"
            >
              Send Email
            </a>
          </div>

          {/* LinkedIn Contact */}
          <div data-animate className="opacity-0 translate-y-10 transition-all duration-700 bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10" style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Linkedin className="text-blue-500" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Professional network</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Connect with me on LinkedIn to stay updated with my professional journey and activities.
            </p>
            <a
              href="https://www.linkedin.com/in/prince-patel-3a5b40292/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Quick Contact Links */}
        {/* <div data-animate className="opacity-0 translate-y-10 transition-all duration-700 text-center" style={{ transitionDelay: '200ms' }}>
          <p className="text-muted-foreground mb-8">Or find me on these platforms:</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all transform hover:scale-110 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:border-blue-500/50 transition-all transform hover:scale-110 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="w-14 h-14 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all transform hover:scale-110 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div> */}
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
