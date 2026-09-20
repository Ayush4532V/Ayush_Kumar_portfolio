import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Database, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const AboutManifesto: React.FC = () => {
  const buildSteps = [
    { step: "01", title: "IDEA", icon: Lightbulb, color: "bg-brand-yellow-light text-ink border-ink" },
    { step: "02", title: "DATA", icon: Database, color: "bg-brand-blue-light text-brand-blue border-brand-blue" },
    { step: "03", title: "CODE", icon: Code, color: "bg-brand-green-light text-ink border-ink" },
    { step: "04", title: "PRODUCT", icon: Code, color: "bg-brand-yellow text-ink border-ink font-bold shadow-[3px_3px_0px_#171513]" }
  ];

  return (
    <section id="about" className="py-20 border-b-2 border-ink/15 bg-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-bold text-ink bg-brand-yellow px-2 py-0.5 border border-ink shadow-[2px_2px_0px_#171513]">
            01 / ABOUT
          </span>
          <div className="h-[2px] bg-ink/20 flex-1" />
          <span className="font-mono text-xs text-ink-light uppercase">
            // MANIFESTO & MINDSET
          </span>
        </div>

        {/* Large Statement Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight"
            >
              "I like turning ideas into things people can <span className="bg-brand-yellow px-2 py-0.5 border-2 border-ink shadow-[3px_3px_0px_#171513] inline-block -rotate-1">actually use.</span>"
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-ink-muted leading-relaxed font-sans max-w-3xl"
            >
              {PORTFOLIO_DATA.personal.aboutShort}
            </motion.p>
          </div>

          {/* Side Editorial Box */}
          <div className="lg:col-span-4 bg-paper-card border-2 border-ink p-6 shadow-paper relative">
            <div className="scrapbook-tape" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ink border-b border-ink/20 pb-2 mb-4">
              // CORE CAPABILITIES
            </h3>
            <ul className="space-y-3 font-mono text-xs text-ink">
              <li className="flex items-start gap-2">
                <span className="text-brand-blue font-bold">➔</span>
                <span>Full-Stack SaaS Product Engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-blue font-bold">➔</span>
                <span>PostgreSQL Multi-Tenant RLS Architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-blue font-bold">➔</span>
                <span>Browser Privacy Extensions & Local DLP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-blue font-bold">➔</span>
                <span>End-to-End Machine Learning Pipelines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Visual Sequence: IDEA → DATA → CODE → PRODUCT */}
        <div className="mt-16 pt-12 border-t border-ink/10">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-light block mb-6">
            // THE BUILDER SEQUENCE
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {buildSteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-5 border-2 border-ink bg-paper-card shadow-[3px_3px_0px_#171513] relative flex flex-col justify-between h-40 group hover:-translate-y-1 transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink-muted">
                      {item.step}
                    </span>
                    <div className={`p-2 border border-ink rounded-none ${item.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-display font-black text-2xl text-ink tracking-tight flex items-center justify-between">
                      {item.title}
                      {idx < 3 && (
                        <ArrowRight className="w-4 h-4 text-ink-light hidden lg:block group-hover:translate-x-1 transition-transform" />
                      )}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
