'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }, [isMobileMenuOpen]);

  // Simple: header is solid on interior pages or when scrolled
  // Menu state doesn't affect header appearance
  const shouldUseSolidStyle = !isHomePage || isScrolled;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 transition-all duration-300 ${
        shouldUseSolidStyle
          ? 'bg-white/95 py-3 shadow-lg backdrop-blur-sm'
          : 'bg-transparent py-4'
      }`}
      style={{ zIndex: 50 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center">
            <Image
              src={shouldUseSolidStyle ? '/logo/PHC_Logo_Top of the Page.png' : '/logo/PHCLogo_WhiteVersion (1).png'}
              alt="Prime Home Construction"
              width={180}
              height={60}
              className="h-auto w-40 sm:w-48"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors hover:text-primary-peach ${
                  shouldUseSolidStyle ? 'text-secondary' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-lg bg-primary-peach px-6 py-3 font-semibold text-secondary transition-all hover:scale-105 hover:bg-primary-terracotta active:scale-95"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            style={{ zIndex: 50 }}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              className={`block h-0.5 w-6 transition-colors ${
                isMobileMenuOpen ? 'bg-white' : shouldUseSolidStyle ? 'bg-secondary' : 'bg-white'
              }`}
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block h-0.5 w-6 transition-colors ${
                isMobileMenuOpen ? 'bg-white' : shouldUseSolidStyle ? 'bg-secondary' : 'bg-white'
              }`}
            />
            <motion.span
              animate={
                isMobileMenuOpen
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
              className={`block h-0.5 w-6 transition-colors ${
                isMobileMenuOpen ? 'bg-white' : shouldUseSolidStyle ? 'bg-secondary' : 'bg-white'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Completely Independent Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-secondary md:hidden"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 9999,
              pointerEvents: 'auto'
            }}
          >
            {/* Close Button - Fixed Position */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed right-4 top-4 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
              style={{ zIndex: 10000 }}
              aria-label="Close menu"
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

            {/* Logo - Fixed Position */}
            <div className="fixed left-4 top-4">
              <Image
                src="/logo/PHCLogo_WhiteVersion (1).png"
                alt="Prime Home Construction"
                width={160}
                height={50}
                className="h-auto w-36"
              />
            </div>

            {/* Menu Content - Centered */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold text-white transition-colors hover:text-primary-peach"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.1 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block rounded-xl bg-gradient-to-r from-primary-peach to-primary-terracotta px-8 py-4 text-xl font-bold text-white shadow-strong transition-all hover:scale-105 hover:shadow-glow"
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
