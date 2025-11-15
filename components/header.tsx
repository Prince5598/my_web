'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';

export function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
          Prince
        </Link>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm">
            <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a></li>
            <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
            <li><a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a></li>
            <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
          </ul>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-muted hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
