'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Information Technology Technical Lead',
    company: 'Jabil',
    period: 'Oct 2021 - Present',
    description: 'Providing technical guidance in .NET, Angular, SQL, AWS, and Azure. Leading cloud migration initiatives and implementing Azure DevOps CI/CD pipelines.',
    technologies: ['.NET Core', 'MSSQL', 'PostgreSQL', 'Angular', 'Azure', 'AWS', 'DevOps', 'Scrum'],
    current: true,
  },
  {
    role: 'Full-Stack Developer',
    company: 'Facware',
    period: 'May 2017 - Present',
    description: 'Running my own freelance brand, translating customer needs into products. Designing software architecture and providing technical product support.',
    technologies: ['Digital Ocean', 'AWS', 'Azure', 'Python', '.NET Core', 'Linux', 'PostgreSQL', 'Angular'],
    current: true,
  },
  {
    role: 'Senior Software Engineer',
    company: '3Pillar Development',
    period: 'May 2021 - Sep 2021',
    description: 'Developed custom software solutions for clients. Participated in Scrum ceremonies and collaborated with outsourced teams across multiple projects.',
    technologies: ['.NET Core', 'Angular', 'PowerBI', 'Azure', 'MSSQL'],
    current: false,
  },
  {
    role: 'Software Engineer',
    company: 'Tiempo Development',
    period: 'Dec 2020 - Apr 2021',
    description: 'Built custom software solutions with cloud design and documentation. Integrated SonarQube for CI/CD quality gates and performance optimization.',
    technologies: ['.NET Core', 'Angular', 'Azure', 'MSSQL', 'ETL', 'TypeScript'],
    current: false,
  },
  {
    role: 'Programmer Analyst Leader DDT LATAM',
    company: 'Jabil',
    period: 'May 2020 - Dec 2020',
    description: 'Architected AWS serverless infrastructure and led development of a global quality issue tracing system. Provided technical direction to the development team.',
    technologies: ['PostgreSQL', '.NET Core', 'C#', 'OData', 'Angular', 'TypeScript', 'AWS', 'Microservices'],
    current: false,
  },
  {
    role: 'Programmer / Analyst',
    company: 'Jabil',
    period: 'Jun 2018 - May 2020',
    description: 'Built software solutions for the manufacturing industry. Modernized legacy applications and implemented AWS serverless/migration solutions. Mentored team members on SDLC methodologies.',
    technologies: ['C#', 'Angular', 'JavaScript', 'SSIS', 'Power BI', 'SAP HANA', 'AWS', '.NET Core'],
    current: false,
  },
  {
    role: 'Software Engineer',
    company: 'Buildbinder',
    period: 'Feb 2012 - Jun 2018',
    description: 'Developed .NET-based solutions promoting OOP and SOLID principles. Managed Azure resources and led migration from ASP Classic to ASP.NET MVC.',
    technologies: ['C#', 'Angular', 'JavaScript', 'SQL', '.NET', 'Azure'],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            10+ years of building software solutions across multiple industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary/20 last:border-l-0"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${
                exp.current
                  ? 'bg-primary border-primary'
                  : 'bg-white border-primary/40'
              }`} />

              <div className="bg-neutral-50 p-6 rounded-2xl hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-neutral-900">{exp.role}</h3>
                  {exp.current && (
                    <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mt-1 sm:mt-0">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                  <MapPin size={16} />
                  {exp.company}
                </div>

                <div className="text-neutral-500 text-sm mb-4">{exp.period}</div>

                <p className="text-neutral-700 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white border border-primary/20 text-neutral-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
