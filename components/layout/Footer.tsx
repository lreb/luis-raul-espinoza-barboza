'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/lreb', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/luis-raúl-espinoza-barboza-5b767751/', icon: Linkedin },
  { name: 'Email', href: 'mailto:info@facware.com', icon: Mail },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Luis Espinoza</h3>
            <p className="text-neutral-200 mb-4">
              Software Engineer &amp; IT Technical Lead with 10+ years of experience
              specializing in full-stack development, system architecture, and cloud solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-200 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-200 hover:text-primary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
            <div className="mt-4 text-neutral-200 text-sm">
              <p>Chihuahua, Chihuahua, Mexico</p>
              <p>info@facware.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 pt-8 text-center text-neutral-200">
          <p>
            &copy; {currentYear} Luis Ra&uacute;l Espinoza Barboza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
