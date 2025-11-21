'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Family Home',
    category: 'Residential',
    image: '/projects/project1.jpg',
    description: 'Complete home renovation with modern design',
  },
  {
    id: 2,
    title: 'Commercial Building',
    category: 'Commercial',
    image: '/projects/project2.jpg',
    description: 'New commercial space construction',
  },
  {
    id: 3,
    title: 'Kitchen Remodel',
    category: 'Renovation',
    image: '/projects/project3.jpg',
    description: 'Luxury kitchen transformation',
  },
  {
    id: 4,
    title: 'Office Complex',
    category: 'Commercial',
    image: '/projects/project4.jpg',
    description: 'Multi-floor office building',
  },
  {
    id: 5,
    title: 'Bathroom Upgrade',
    category: 'Renovation',
    image: '/projects/project5.jpg',
    description: 'Spa-like bathroom renovation',
  },
  {
    id: 6,
    title: 'New Construction',
    category: 'Residential',
    image: '/projects/project6.jpg',
    description: 'Custom home build from ground up',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Renovation'];

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
            Our Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See the quality and craftsmanship in every project
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`min-h-[44px] rounded-full px-6 py-2 font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-peach text-secondary shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-primary-terracotta to-primary-peach" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white">Project Image</span>
                  </div>
                  <div className="absolute inset-0 bg-secondary/0 transition-all group-hover:bg-secondary/20" />
                </div>
                <div className="p-4 sm:p-5">
                  <span className="inline-block rounded-full bg-primary-peach/20 px-3 py-1 text-xs font-medium text-secondary">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-secondary">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full overflow-hidden rounded-2xl bg-white shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-secondary transition-colors hover:bg-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="relative aspect-video bg-gradient-to-br from-primary-terracotta to-primary-peach">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-white text-xl">Project Image</span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <span className="inline-block rounded-full bg-primary-peach/20 px-3 py-1 text-sm font-medium text-secondary">
                    {selectedProject.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-secondary sm:text-3xl">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-4 text-gray-600">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
