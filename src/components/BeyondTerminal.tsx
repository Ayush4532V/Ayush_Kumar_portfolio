import React from 'react';
import { Trophy, Dribbble } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const BeyondTerminal: React.FC = () => {
  const info = PORTFOLIO_DATA.personalInterest;

  return (
    <section className="py-20 border-b-2 border-ink/15 bg-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-brand-yellow-light border-3 border-ink p-8 sm:p-12 shadow-paper-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Description */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-bold bg-ink text-brand-yellow px-2 py-0.5 border border-ink">
                  HUMAN SIDE
                </span>
                <span className="font-mono text-xs text-ink-muted uppercase">
                  // COMPETITIVE ATHLETIC MINDSET
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-black text-ink tracking-tight mb-3">
                Beyond the terminal.
              </h2>
              
              <p className="text-lg text-ink font-semibold mb-6">
                When I'm not writing code or building products, you'll find me on the court.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                {info.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 border-2 border-ink bg-paper shadow-[2px_2px_0px_#171513] flex items-center gap-2 font-bold text-ink"
                  >
                    <Trophy className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column Basketball Vector Graphic */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="w-32 h-32 rounded-full border-3 border-ink bg-paper flex flex-col items-center justify-center shadow-paper relative group">
                <Dribbble className="w-16 h-16 text-ink group-hover:rotate-45 transition-transform duration-500" />
                <span className="font-mono text-[9px] font-black uppercase text-ink mt-1">
                  BASKETBALL
                </span>
              </div>
              <span className="font-handwriting text-xl text-ink font-bold mt-3">
                "{info.note}"
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
