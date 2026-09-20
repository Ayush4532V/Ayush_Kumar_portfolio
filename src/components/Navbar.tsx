import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section tracker
      const sections = ['about', 'work', 'experience', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', num: '01', href: '#about' },
    { name: 'WORK', num: '02', href: '#work' },
    { name: 'EXPERIENCE', num: '03', href: '#experience' },
    { name: 'SKILLS', num: '04', href: '#skills' },
    { name: 'CONTACT', num: '05', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-ink/10 ${
          scrolled
            ? 'bg-paper/90 backdrop-blur-md py-3 shadow-xs'
            : 'bg-paper/70 backdrop-blur-xs py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Branding */}
          <a
            href="#"
            className="flex items-center gap-2 group font-display font-bold tracking-tight text-ink text-lg sm:text-xl"
            data-cursor="HOME"
          >
            <span className="w-8 h-8 rounded-none border-2 border-ink bg-brand-yellow flex items-center justify-center font-mono text-xs font-black shadow-[2px_2px_0px_#171513] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              AK
            </span>
            <div className="flex flex-col">
              <span className="leading-tight group-hover:text-brand-blue transition-colors">
                AYUSH KUMAR
              </span>
              <span className="text-[10px] font-mono text-ink-muted hidden sm:block tracking-widest uppercase">
                CSE (AI & ML)
              </span>
            </div>
          </a>

          {/* CENTER: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-6 bg-paper-card border border-ink/15 px-4 py-1.5 rounded-full shadow-[2px_2px_0px_rgba(23,21,19,0.06)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-wider font-semibold py-1 px-3 transition-all relative ${
                    isActive
                      ? 'text-ink font-bold'
                      : 'text-ink-muted hover:text-ink hover:bg-paper-dark/50 rounded-sm'
                  }`}
                  data-cursor={link.name}
                >
                  <span className="text-[9px] text-ink-light font-normal mr-1">
                    {link.num}
                  </span>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-yellow"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Talk CTA (Desktop) & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-ink text-paper font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 border-2 border-ink shadow-[3px_3px_0px_#F4C542] hover:bg-brand-yellow hover:text-ink hover:shadow-[3px_3px_0px_#171513] transition-all"
              data-cursor="TALK"
            >
              LET'S TALK
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border-2 border-ink bg-paper-card shadow-[2px_2px_0px_#171513] text-ink focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-30 bg-paper border-b-4 border-ink flex flex-col justify-between p-6 pt-24 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="border-b-2 border-ink/20 pb-4">
                <span className="font-mono text-xs text-ink-muted uppercase tracking-widest">
                  // NAVIGATION MENU
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-baseline justify-between font-display text-2xl font-bold text-ink hover:text-brand-blue border-b border-ink/10 pb-2 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-sm text-brand-yellow font-bold bg-ink px-1.5 py-0.5">
                        {link.num}
                      </span>
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-ink-light" />
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t-2 border-ink/20 pt-6 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                <span>FARIDABAD, INDIA</span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  AVAILABLE 2026
                </span>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-tactile-primary text-center justify-center"
              >
                LET'S TALK NOW <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
