import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const SkillsConstellation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = PORTFOLIO_DATA.skills;
  const categoryNames = ['ALL', ...categories.map((c) => c.category)];

  // Filter skills based on tab & search query
  const filteredCategories = categories.map((cat) => {
    if (selectedCategory !== 'ALL' && cat.category !== selectedCategory) {
      return null;
    }

    const matchingSkills = cat.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 border-b-2 border-ink/15 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold text-ink bg-brand-yellow px-2 py-0.5 border border-ink shadow-[2px_2px_0px_#171513]">
                04 / SKILLS
              </span>
              <span className="font-mono text-xs text-ink-light uppercase">
                // TECHNICAL CONSTELLATION
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-ink tracking-tight">
              Tech Stack & Tools.
            </h2>
          </div>

          {/* Interactive Search Field */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, RLS, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-paper-card border-2 border-ink pl-9 pr-3 py-2 text-xs font-mono text-ink placeholder:text-ink-light focus:outline-none focus:bg-paper shadow-[2px_2px_0px_#171513]"
            />
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-ink/10">
          {categoryNames.map((catName) => {
            const isActive = selectedCategory === catName;
            return (
              <button
                key={catName}
                onClick={() => setSelectedCategory(catName)}
                className={`font-mono text-xs font-bold px-3.5 py-1.5 border-2 transition-all ${
                  isActive
                    ? 'bg-ink text-brand-yellow border-ink shadow-[3px_3px_0px_#F4C542]'
                    : 'bg-paper-card text-ink border-ink/40 hover:border-ink hover:bg-paper'
                }`}
              >
                {catName}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat!.category}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`border-2 border-ink p-6 shadow-paper relative ${
                cat!.highlight ? 'bg-paper-card' : 'bg-paper'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-ink/20 pb-3 mb-4">
                <h3 className="font-mono text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow border border-ink" />
                  {cat!.category}
                </h3>
                <span className="font-mono text-[10px] text-ink-muted">
                  {cat!.skills.length} ITEMS
                </span>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cat!.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs bg-paper text-ink border border-ink px-3 py-1 font-semibold shadow-[1.5px_1.5px_0px_#171513] hover:bg-brand-yellow hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
