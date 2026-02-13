'use client';

import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Briefcase } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Years Experience', value: '10+' },
  { icon: Rocket, label: 'Technologies', value: '20+' },
  { icon: Users, label: 'Teams Led', value: '5+' },
  { icon: Briefcase, label: 'Companies', value: '8' },
];

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and delivering exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-neutral-200 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <p className="text-neutral-600 text-sm">Add your professional photo here</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-neutral-900 mb-6">
              Building Digital Excellence
            </h3>
            <div className="space-y-4 text-neutral-700">
              <p>
                I&apos;m Luis Ra&uacute;l Espinoza Barboza, a software professional based in Chihuahua,
                M&eacute;xico, with over 10 years of experience in the Software Development Life Cycle.
                My expertise spans full-stack development, system architecture, cloud technologies,
                and technical leadership.
              </p>
              <p>
                Currently serving as an Information Technology Technical Lead at Jabil, where I provide
                technical guidance in .NET, Angular, SQL, AWS, and Azure. I also run Facware, my own
                freelance brand offering IT consulting and software development services.
              </p>
              <p>
                My approach combines technical excellence with a deep understanding of business needs.
                I&apos;m experienced in leading remote and local cross-functional teams, implementing CI/CD
                pipelines, migrating legacy systems to the cloud, and building scalable microservices
                architectures.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300"
              >
                Let&apos;s Work Together
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-2">{stat.value}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
