'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
              Get Your Free Quote
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-secondary"
              >
                Full Name *
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className={`w-full rounded-lg border-2 px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary-peach ${
                  errors.name
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-primary-peach'
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email & Phone */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-secondary"
                >
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={`w-full rounded-lg border-2 px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary-peach ${
                    errors.email
                      ? 'border-red-500'
                      : 'border-gray-300 focus:border-primary-peach'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-secondary"
                >
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className={`w-full rounded-lg border-2 px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary-peach ${
                    errors.phone
                      ? 'border-red-500'
                      : 'border-gray-300 focus:border-primary-peach'
                  }`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="projectType"
                className="mb-2 block text-sm font-medium text-secondary"
              >
                Project Type *
              </label>
              <select
                {...register('projectType')}
                id="projectType"
                className={`w-full rounded-lg border-2 px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary-peach ${
                  errors.projectType
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-primary-peach'
                }`}
              >
                <option value="">Select a project type</option>
                <option value="residential">Residential Construction</option>
                <option value="commercial">Commercial Construction</option>
                <option value="renovation">Renovation</option>
                <option value="remodeling">Remodeling</option>
                <option value="other">Other</option>
              </select>
              {errors.projectType && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-secondary"
              >
                Project Details *
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={5}
                className={`w-full rounded-lg border-2 px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary-peach ${
                  errors.message
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-primary-peach'
                }`}
                placeholder="Tell us about your project..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full min-h-[56px] rounded-lg bg-primary-peach px-8 py-4 text-lg font-semibold text-secondary transition-all hover:scale-105 hover:bg-primary-terracotta disabled:opacity-50 disabled:hover:scale-100 active:scale-95"
            >
              {isSubmitting ? 'Sending...' : 'Get Free Quote'}
            </button>

            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg bg-green-50 p-4 text-center text-green-800"
              >
                Thank you! We'll get back to you within 24 hours.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
