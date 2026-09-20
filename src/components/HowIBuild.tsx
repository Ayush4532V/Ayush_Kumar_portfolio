import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HelpCircle, Hammer, BarChart2, Rocket } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const HowIBuild: React.FC = () => {
  const steps = PORTFOLIO_DATA.buildProcess;
  const icons = [HelpCircle, Hammer, BarChart2, Rocket];

  return (
    <section className="py-24 border-b-2 border-ink/15 bg-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="editorial-sticker bg-brand-yellow text-ink border-ink mb-3 inline-block">
            // BUILDER METHODOLOGY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ink tracking-tight uppercase">
            HOW AN IDEA BECOMES A PRODUCT
          </h2>
          <p className="font-handwriting text-2xl text-brand-blue font-bold mt-2">
            "Simple framework, fast iterations, zero fluff."
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const IconComp = icons[idx];
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-paper-card border-2 border-ink p-6 shadow-paper relative flex flex-col justify-between group hover:-translate-y-1 transition-all"
              >
                {/* Yellow Accent Corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-brand-yellow border-b-2 border-l-2 border-ink flex items-center justify-center font-mono text-xs font-bold text-ink">
                  {item.step}
                </div>

                <div>
                  <div className="w-10 h-10 bg-paper border border-ink flex items-center justify-center mb-4 group-hover:bg-brand-yellow transition-colors">
                    <IconComp className="w-5 h-5 text-ink" />
                  </div>

                  <h3 className="font-display text-2xl font-black text-ink tracking-tight mb-1">
                    {item.name}
                  </h3>
                  <p className="font-mono text-xs font-bold text-brand-blue uppercase mb-3">
                    {item.desc}
                  </p>
                  <p className="font-sans text-sm text-ink-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Hand-drawn Arrow */}
                {idx < 3 && (
                  <div className="mt-4 pt-3 border-t border-ink/10 flex items-center justify-end font-handwriting text-xl text-ink font-bold">
                    <span>next step</span>
                    <ArrowRight className="w-4 h-4 text-brand-blue ml-1" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
