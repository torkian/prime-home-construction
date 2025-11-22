'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content:
      'Prime Home Construction transformed our house into our dream home. Their attention to detail and professionalism is unmatched. Highly recommend!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    content:
      'They completed our commercial project on time and within budget. The quality of work exceeded our expectations. A truly reliable team!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Interior Designer',
    content:
      'Working with Prime Home Construction is always a pleasure. They bring creativity and expertise to every project. My go-to construction partner!',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Property Developer',
    content:
      'Outstanding craftsmanship and excellent communication throughout the entire project. They turned our vision into reality flawlessly.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Trusted by homeowners and businesses across the region
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative mx-auto max-w-4xl">
          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[250px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-strong sm:p-10">
                  {/* Gradient Accent */}
                  <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-gradient-to-br from-primary-peach/10 to-transparent blur-3xl" />

                  <div className="relative z-10">
                    {/* Star Rating */}
                    <div className="mb-6 flex justify-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-6 w-6 fill-primary-peach"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-center">
                    <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="mt-8 text-center">
                    <p className="font-bold text-secondary text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handlePrevious}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/30 active:scale-95"
              aria-label="Previous testimonial"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-primary-peach'
                      : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/30 active:scale-95"
              aria-label="Next testimonial"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
