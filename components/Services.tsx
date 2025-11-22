'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Residential Construction',
    description:
      'Custom home builds and additions tailored to your lifestyle and preferences.',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Commercial Projects',
    description:
      'Professional construction services for offices, retail spaces, and more.',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Renovations',
    description:
      'Transform your existing space with our expert renovation services.',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Remodeling',
    description:
      'Complete remodeling solutions for kitchens, bathrooms, and more.',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Mesh Gradient Background */}
      <div className="mesh-gradient-peach absolute inset-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive construction solutions for every need
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-soft transition-all hover:shadow-glow sm:p-8"
            >
              {/* Gradient Accent */}
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-primary-peach/20 to-primary-terracotta/10 blur-2xl transition-transform group-hover:scale-150" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary-peach to-primary-terracotta p-3 text-white shadow-medium transition-all group-hover:shadow-strong group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-secondary">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
