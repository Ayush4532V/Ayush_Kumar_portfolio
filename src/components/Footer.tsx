import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-paper py-10 border-t-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          
          {/* LEFT */}
          <div className="flex items-center gap-2 font-bold tracking-wider">
            <span className="w-6 h-6 bg-brand-yellow text-ink border border-paper flex items-center justify-center font-black text-[10px]">
              AK
            </span>
            <span>AYUSH KUMAR</span>
          </div>

          {/* CENTER */}
          <div className="text-center text-paper/70 font-mono text-[11px] tracking-widest uppercase">
            BUILT WITH CURIOSITY × CODE // "Currently learning. Always building."
          </div>

          {/* RIGHT */}
          <div className="text-brand-yellow font-bold">
            © 2026 AYUSH KUMAR
          </div>

        </div>
      </div>
    </footer>
  );
};
