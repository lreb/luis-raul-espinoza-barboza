'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: null,
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Replace with actual API endpoint
      console.log('Form data:', data);

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Contact Information
            </h3>
            <p className="text-neutral-600 mb-8">
              Feel free to reach out through any of the following channels. I typically respond within 24 hours.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-primary group-hover:text-white transition-colors" size={24} />
                    </div>
                    <div>
                      <div className="text-neutral-700 font-medium mb-1">{info.label}</div>
                      <div className="text-neutral-900 font-semibold">{info.value}</div>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
              <h4 className="font-bold text-neutral-900 mb-2">Response Time</h4>
              <p className="text-neutral-700">
                I aim to respond to all inquiries within 24 hours during business days.
                For urgent matters, please call directly.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
                  Your Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-error' : 'border-neutral-200'
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-error text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-error' : 'border-neutral-200'
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-error text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-neutral-700 font-medium mb-2">
                  Subject *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject ? 'border-error' : 'border-neutral-200'
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  placeholder="Project inquiry"
                />
                {errors.subject && (
                  <p className="text-error text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-error' : 'border-neutral-200'
                  } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-error text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-accent text-center font-medium">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-error text-center font-medium">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
