'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Facware',
    description: 'Freelancer brand page offering IT consulting services including software development, architecture design, and cloud solutions.',
    tags: ['.NET Core', 'Angular', 'PostgreSQL', 'Azure', 'AWS'],
    liveUrl: 'https://facware.com',
    githubUrl: null,
    featured: true,
    category: 'Design, Development, CI/CD, Cloud, Support',
  },
  {
    title: 'EduMaster',
    description: 'Fully functional e-commerce platform for a startup specializing in handcrafted goods. Features visually appealing UI, responsive design, optimized performance with lazy loading, and SEO optimization.',
    tags: ['Adobe XD', 'Figma', 'UX/UI', 'E-commerce', 'Responsive'],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    category: 'User Experience / E-commerce',
  },
  {
    title: 'Patterns Solution',
    description: 'Open-source project showcasing design patterns and architecture solution examples across multiple programming languages and paradigms.',
    tags: ['Design Patterns', 'Architecture', 'Open Source', '.NET'],
    liveUrl: null,
    githubUrl: 'https://github.com/lreb/Facware-Base',
    featured: false,
    category: 'Design Patterns & Architecture',
  },
  {
    title: '.NET Core / Ocelot Microservices',
    description: 'Local infrastructure microservices proof of concept using Ocelot API Gateway for routing, load balancing, and service discovery.',
    tags: ['.NET Core', 'Microservices', 'Ocelot', 'API Gateway'],
    liveUrl: null,
    githubUrl: 'https://github.com/lreb/netcore-microservice-ocelot',
    featured: false,
    category: 'Microservices & API Gateway',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A showcase of my work and open-source contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl">
                    {project.title === 'Facware' ? '🌐' :
                     project.title === 'EduMaster' ? '🛒' :
                     project.title === 'Patterns Solution' ? '🏗️' : '⚙️'}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-neutral-700">
                  {project.category}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium"
                    >
                      <ExternalLink size={20} />
                      Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-700 hover:text-primary transition-colors font-medium"
                    >
                      <Github size={20} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/lreb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
