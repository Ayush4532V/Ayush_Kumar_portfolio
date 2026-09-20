import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] pt-28 pb-16 flex items-center justify-center overflow-hidden border-b-2 border-ink/15">
      {/* Background Subtle Grid Annotations */}
      <div className="absolute top-12 left-6 hidden md:block font-mono text-[10px] text-ink-light opacity-60 uppercase tracking-widest">
        COORD: 28.4089° N, 77.3178° E // NCR INDIA
      </div>
      <div className="absolute top-12 right-6 hidden md:block font-mono text-[10px] text-ink-light opacity-60 uppercase tracking-widest">
        EDITION: 2026.01 // PORTFOLIO
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT & CENTER MAIN TYPOGRAPHY (Cols 1-8) */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-2.5 h-2.5 bg-brand-yellow border border-ink animate-pulse" />
              <span className="editorial-sticker bg-brand-yellow-light text-ink border-ink">
                {PORTFOLIO_DATA.personal.eyebrow}
              </span>
              <span className="hidden sm:inline-block font-mono text-xs text-ink-muted">
                // B.TECH CSE
              </span>
            </motion.div>

            {/* Asymmetrical Display Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative select-none"
            >
              {/* Asymmetric Micro Sub-headers */}
              <div className="flex flex-wrap items-baseline gap-3 mb-1 font-mono text-xs sm:text-sm font-bold tracking-wider text-ink-muted uppercase">
                <span className="bg-ink text-brand-yellow px-2 py-0.5 shadow-[2px_2px_0px_#F4C542]">
                  AI / ML
                </span>
                <span className="border-b-2 border-ink">
                  BUILDER & FOUNDER
                </span>
              </div>

              {/* Huge Name Layout */}
              <h1 className="font-display font-black tracking-tighter leading-[0.88] text-ink">
                <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-ink hover:text-brand-blue transition-colors">
                  AYUSH
                </span>
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ink/95 ml-2 sm:ml-8 font-extrabold italic">
                  KUMAR<span className="text-brand-yellow font-normal not-italic">.</span>
                </span>
              </h1>
            </motion.div>

            {/* Sub-tagline & Supporting Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl"
            >
              <p className="text-lg sm:text-2xl font-medium text-ink leading-snug font-sans">
                {PORTFOLIO_DATA.personal.tagline}
              </p>
              <p className="mt-2 text-sm sm:text-base text-ink-muted font-mono leading-relaxed">
                Computer Science (AI & ML) student at Echelon Institute. Building SaaS products, NLP extensions & demand forecasting ML models.
              </p>
            </motion.div>

            {/* Action Buttons & Micro Labels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#work" className="btn-tactile-primary" data-cursor="EXPLORE">
                VIEW MY WORK
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a href="#contact" className="btn-tactile-secondary" data-cursor="CONTACT">
                LET'S TALK
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Small Hero Editorial Stickers / Annotations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-2 sm:gap-3 items-center pt-6 border-t border-ink/10"
            >
              <span className="font-mono text-[10px] text-ink-light uppercase font-bold tracking-wider mr-1">
                TAGS:
              </span>
              {PORTFOLIO_DATA.personal.heroLabels.map((label, i) => (
                <span
                  key={i}
                  className="editorial-sticker bg-paper-card text-ink border-ink/80 text-[11px]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow border border-ink" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: CIRCULAR HERO IMAGE CONTAINER (Cols 9-12) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            
            {/* Hand-written Arrow Annotation */}
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: -3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-10 left-4 sm:left-12 z-20 hidden sm:flex items-center gap-1 font-handwriting text-2xl text-ink font-bold"
            >
              <span>THIS IS ME</span>
              <span className="text-brand-blue font-sans text-xl">➔</span>
            </motion.div>

            {/* Circular Image Container (Fixed & Non-editable) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
              data-cursor="AYUSH KUMAR"
            >
              {/* Background Offset Accent Circles */}
              <div className="absolute -inset-3 rounded-full bg-brand-yellow border-2 border-ink transform translate-x-3 translate-y-3 shadow-[4px_4px_0px_#171513] group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
              <div className="absolute -inset-1 rounded-full bg-brand-blue/20 border border-ink transform -translate-x-2 -translate-y-2 pointer-events-none" />

              {/* Main Circular Image Frame */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full border-3 border-ink bg-paper-card flex items-center justify-center overflow-hidden shadow-paper-lg transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/ayush.jpg"
                  alt="Ayush Kumar"
                  className="w-full h-full object-cover object-center select-none pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Bottom Annotation Sticker */}
            <div className="mt-6 flex flex-col items-center">
              <span className="editorial-sticker bg-paper text-ink border-ink font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                FOUNDER @ REVIEWLOOP
              </span>
              <span className="font-mono text-[10px] text-ink-light mt-1.5">
                FARIDABAD, HARYANA, INDIA
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
