'use client';

import { motion } from 'framer-motion';
import { FileSearch, Layers, Database, Code, GitBranch, Headphones } from 'lucide-react';

const services = [
  {
    icon: FileSearch,
    title: 'Business Analyst',
    description: 'Translating business needs into clear technical requirements through thorough analysis and stakeholder communication.',
    features: ['Requirement Gathering', 'Process Modeling', 'Data Analysis', 'Documentation'],
  },
  {
    icon: Layers,
    title: 'Software Design',
    description: 'Crafting robust system architectures with design specifications, prototyping, and technical feasibility assessment.',
    features: ['System Architecture', 'Design Specifications', 'Prototyping', 'Code Reviews'],
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Designing efficient database schemas with normalization, SQL development, and performance tuning for optimal data management.',
    features: ['Schema Design', 'Normalization', 'SQL Development', 'Performance Tuning'],
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Building custom software solutions with clean coding practices, API design, comprehensive testing, and seamless deployment.',
    features: ['Full-Stack Coding', 'API Design', 'Testing & Integration', 'Deployment'],
  },
  {
    icon: GitBranch,
    title: 'DevOps Activities',
    description: 'Implementing CI/CD pipelines, continuous deployment strategies, monitoring, and automation for streamlined delivery.',
    features: ['CI/CD Pipelines', 'Continuous Deployment', 'Monitoring', 'Automation'],
  },
  {
    icon: Headphones,
    title: 'Software Solutions Support',
    description: 'Providing ongoing issue resolution, user assistance, system monitoring, and patch management to keep systems running smoothly.',
    features: ['Issue Resolution', 'System Monitoring', 'Documentation', 'Patch Management'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-primary group-hover:text-white transition-colors" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-neutral-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-neutral-700">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
