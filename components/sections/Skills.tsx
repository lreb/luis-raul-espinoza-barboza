'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Backend & Languages',
    skills: [
      { name: '.NET / .NET Core', level: 93 },
      { name: 'C#', level: 89 },
      { name: 'API Integration', level: 90 },
      { name: 'Scripting', level: 88 },
      { name: 'TypeScript', level: 83 },
      { name: 'JavaScript', level: 79 },
    ],
  },
  {
    category: 'Frontend & Design',
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'UX Design', level: 87 },
      { name: 'Documentation', level: 95 },
      { name: 'Version Control', level: 90 },
    ],
  },
  {
    category: 'Databases & Cloud',
    skills: [
      { name: 'Microsoft SQL', level: 87 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Azure Cloud', level: 80 },
      { name: 'IIS', level: 80 },
      { name: 'Linux', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'MySQL', level: 75 },
      { name: 'Nginx / Apache', level: 75 },
    ],
  },
];

const technologies = [
  '.NET Core', 'C#', 'Angular', 'TypeScript', 'JavaScript', 'Azure DevOps',
  'AWS Lambda', 'AWS S3', 'PostgreSQL', 'MSSQL', 'Docker', 'PowerBI',
  'Elastic Search', 'Microservices', 'EF Core', 'Dapper', 'Swagger',
  'OData', 'SSIS', 'ETL', 'SAP HANA', 'Redis', 'OKTA',
  'Azure', 'Linux', 'Git', 'CI/CD', 'REST API', 'Scrum',
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            My technical expertise across various technologies and tools
          </p>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-700 font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-white border-2 border-primary/20 rounded-full text-neutral-700 font-medium hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
