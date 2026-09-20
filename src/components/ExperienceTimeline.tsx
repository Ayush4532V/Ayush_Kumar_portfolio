import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const ExperienceTimeline: React.FC = () => {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section id="experience" className="py-24 border-b-2 border-ink/15 bg-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold text-ink bg-brand-yellow px-2 py-0.5 border border-ink shadow-[2px_2px_0px_#171513]">
                03 / EXPERIENCE
              </span>
              <span className="font-mono text-xs text-ink-light uppercase">
                // TRACK RECORD & ROLES
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-ink tracking-tight">
              Where I've been building.
            </h2>
          </div>
          <p className="font-mono text-sm text-ink-muted max-w-sm">
            Building startup software products & training ML models with precision.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-3 border-ink ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Connector Bullet */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-none bg-brand-yellow border-2 border-ink shadow-[2px_2px_0px_#171513] flex items-center justify-center font-mono text-[10px] font-bold text-ink group-hover:bg-brand-blue group-hover:text-paper transition-colors">
                0{idx + 1}
              </div>

              {/* Card Container */}
              <div className="bg-paper-card border-2 border-ink p-6 sm:p-8 shadow-paper group-hover:-translate-y-1 transition-all">
                
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/15 pb-4 mb-4">
                  <div>
                    <span className="font-mono text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
                      {exp.company}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-ink bg-brand-yellow-light border border-ink px-3 py-1 shadow-[2px_2px_0px_#171513]">
                      <Calendar className="w-3.5 h-3.5 inline mr-1" />
                      {exp.period}
                    </span>
                    {exp.duration && (
                      <span className="font-mono text-xs text-ink-muted bg-paper border border-ink/20 px-2 py-1">
                        {exp.duration}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-ink text-base font-medium mb-4">
                  {exp.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2 mb-6">
                  {exp.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 font-mono text-xs text-ink-muted">
                      <span className="text-brand-blue font-bold mt-0.5">➔</span>
                      <span className="text-ink">{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-ink/10">
                  {exp.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] bg-paper text-ink border border-ink px-2.5 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
