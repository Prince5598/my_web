'use client';

import { ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Developer</h4>
            <p className="text-muted-foreground text-sm">
              Building beautiful, performant web experiences with modern technologies.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">Blog <ExternalLink size={14} /></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">GitHub <ExternalLink size={14} /></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">Resume <ExternalLink size={14} /></a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Your Name. All rights reserved. Crafted with care using Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
