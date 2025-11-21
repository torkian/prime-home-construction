'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import React from 'react';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function AnimatedStat({ end, label, suffix = '', duration = 2 }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = React.useState(0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="mb-3 flex items-center justify-center">
        <span className="text-5xl font-bold text-primary-peach sm:text-6xl lg:text-7xl">
          {displayValue}
          {suffix}
        </span>
      </div>
      <p className="text-lg font-medium text-gray-700 sm:text-xl">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { end: 15, label: 'Years of Excellence', suffix: '+' },
    { end: 850, label: 'Projects Completed', suffix: '+' },
    { end: 2, label: 'Million Sq Ft Built', suffix: 'M+' },
    { end: 98, label: 'Client Satisfaction', suffix: '%' },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
            Building Excellence by the Numbers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by hundreds of satisfied clients
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              end={stat.end}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-16 h-1 w-32 rounded-full bg-primary-peach"
        />
      </div>
    </section>
  );
}
