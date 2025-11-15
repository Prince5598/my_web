'use client';

import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Education } from '@/components/education';
import { Certifications } from '@/components/certifications';
import { Projects } from '@/components/projects';
import { CodingProfiles } from '@/components/coding-profiles';
import { Skills } from '@/components/skills';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Education />
      <About />
      <Projects />
      <Skills />
      <CodingProfiles />
      <Certifications />
      <Contact />
    </main>
  );
}
