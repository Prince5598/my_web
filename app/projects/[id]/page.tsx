'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { projectsData } from '@/lib/projects-data';

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project not found</h1>
          <Link href="/#projects" className="text-accent hover:text-accent/80">
            Back to projects
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section with project image */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project details */}
            <div>
              <div className="mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-xs bg-secondary/30 text-accent px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{project.title}</h1>

              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                {project.fullDescription}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:shadow-lg hover:shadow-accent/50 transition-all"
                >
                  View Live <ExternalLink size={18} />
                </a> */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-card transition-all"
                >
                  View on GitHub <Github size={18} />
                </a>
              </div>
            </div>

            {/* Project image */}
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project details sections */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Results</h3>
              <p className="text-muted-foreground leading-relaxed">{project.results}</p>
            </div>
          </div>

         
        </div>
      </section>

      {/* Related projects */}
      <section className="py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-foreground mb-12">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 2)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="group bg-background border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-2">{relatedProject.title}</h4>
                    <p className="text-muted-foreground text-sm">{relatedProject.shortDescription}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

 
    </main>
  );
}
