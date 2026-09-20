import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const MarqueeStrip: React.FC = () => {
  const items = PORTFOLIO_DATA.personal.marquee;
  // Duplicate array for smooth continuous horizontal scroll
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-ink text-paper py-4 border-y-2 border-ink overflow-hidden select-none relative shadow-[0_4px_10px_rgba(23,21,19,0.1)]">
      <div className="flex w-max animate-marquee">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center mx-6 gap-6">
            <span className="font-display text-base sm:text-lg font-black tracking-widest text-brand-yellow uppercase">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-paper border border-ink" />
          </div>
        ))}
      </div>
    </div>
  );
};
