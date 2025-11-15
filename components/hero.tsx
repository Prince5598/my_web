'use client';

import { useEffect, useRef } from 'react';

export function Hero() {
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
    <section className="relative flex items-center justify-center overflow-hidden bg-background pt-4 pb-10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div ref={containerRef} className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div data-animate className="opacity-0 translate-y-10 transition-all duration-700 mb-2">
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Hi, I am
          </p>
        </div>

        <h1
          data-animate
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight opacity-0 translate-y-10 transition-all duration-700 delay-100"
        >
          Prince Patel
        </h1>

        <p
          data-animate
          className="text-base md:text-lg text-accent font-semibold mb-6 opacity-0 translate-y-10 transition-all duration-700 delay-200"
        >
          Full Stack Developer & AI Enthusiast
        </p>

        <p
          data-animate
          className="text-base md:text-lg text-muted-foreground max-w-3xl mb-12 opacity-0 translate-y-10 transition-all duration-700 delay-300 leading-relaxed"
        >
          I'm a passionate developer with expertise in building scalable web applications, solving complex algorithmic problems, and creating beautiful user experiences. Focused on clean code, performance optimization, and continuous learning.
        </p>

        <div
          data-animate
          className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-10 transition-all duration-700 delay-400 mb-16"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/prince-patel-3a5b40292/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105 text-center"
            aria-label="Open LinkedIn profile (opens in new tab)"
          >
            {/* LinkedIn SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="flex-shrink-0"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.865 0-2.151 1.458-2.151 2.964v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.597 2.  3.597 4.605v5.59z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Prince5598"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-card transition-all transform hover:scale-105 text-center"
            aria-label="Open GitHub profile (opens in new tab)"
          >
            {/* GitHub SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="flex-shrink-0"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.815 1.102.815 2.222v3.293c0 .319.218.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1FxD34lNG9Xh5hf-ib7YVpYwhpKunNWFz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-card transition-all transform hover:scale-105 text-center"
            aria-label="Open Resume (opens in new tab)"
          >
            {/* Resume / Document SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="flex-shrink-0"
            >
              <path d="M14 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V8l-6-6zM13 3.5L18.5 9H13V3.5zM8 12h8v2H8v-2zm0 4h8v2H8v-2z"/>
            </svg>
            <span>Resume</span>
          </a>
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

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-100 {
          transition-delay: 100ms;
        }

        .delay-200 {
          transition-delay: 200ms;
        }

        .delay-300 {
          transition-delay: 300ms;
        }

        .delay-400 {
          transition-delay: 400ms;
        }
      `}</style>
    </section>
  );
}
