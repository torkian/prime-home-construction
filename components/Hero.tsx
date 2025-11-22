'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay - Parallax Effect */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Prime Home Construction - Modern Home Building"
          fill
          className="object-cover brightness-[0.65]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/30 to-transparent" />
      </motion.div>

      {/* Large Liquid Blobs - Apple Style */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="liquid-blob absolute -right-32 top-[10%] h-[600px] w-[600px] bg-gradient-to-br from-primary-peach/40 to-primary-terracotta/30" />
        <div
          className="liquid-blob absolute -left-32 bottom-[15%] h-[550px] w-[550px] bg-gradient-to-br from-primary-terracotta/35 to-primary-peach/25"
          style={{ animationDelay: '-4s' }}
        />
        <div
          className="liquid-blob absolute left-[40%] top-[40%] h-[400px] w-[400px] bg-gradient-to-br from-white/10 to-primary-peach/20"
          style={{ animationDelay: '-2s' }}
        />
      </div>

      {/* Hero Content */}
      <motion.div style={{ opacity }} className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Animated Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building Dreams Into{' '}
              <span className="text-primary-peach">Reality</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mt-6 text-lg text-gray-100 sm:text-xl md:text-2xl"
            >
              Expert construction services with unmatched quality and precision.
              Licensed, insured, and trusted for over 15 years.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap gap-6 text-white"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-peach">
                  <span className="text-xl font-bold text-secondary">15+</span>
                </div>
                <span className="text-sm">Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-peach">
                  <span className="text-xl font-bold text-secondary">850+</span>
                </div>
                <span className="text-sm">Projects Completed</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-[56px] items-center justify-center rounded-xl bg-gradient-to-r from-primary-peach to-primary-terracotta px-8 py-4 text-lg font-semibold text-white shadow-strong transition-all hover:scale-105 hover:shadow-glow active:scale-95"
              >
                Get Free Quote
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
              </Link>
              <Link
                href="/projects"
                className="group inline-flex min-h-[56px] items-center justify-center rounded-xl border-2 border-white/80 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:border-white hover:bg-white hover:text-secondary hover:shadow-strong"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white"
        >
          <span className="text-sm">Scroll to explore</span>
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
