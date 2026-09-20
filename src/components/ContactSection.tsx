import React, { useState } from 'react';
import { Mail, MapPin, ArrowUpRight, Copy, Check, Linkedin, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const personal = PORTFOLIO_DATA.personal;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-b-2 border-ink/15 bg-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-paper-card border-3 border-ink p-8 sm:p-14 shadow-paper-xl relative">
          <div className="scrapbook-tape" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Heading */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold text-ink bg-brand-yellow px-2 py-0.5 border border-ink shadow-[2px_2px_0px_#171513]">
                  07 / CONTACT
                </span>
                <span className="font-mono text-xs text-ink-light uppercase">
                  // OPEN FOR INTERNSHIPS & STARTUP OPPORTUNITIES
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-ink tracking-tight leading-none mb-4">
                Have an idea worth building?
              </h2>

              <p className="font-handwriting text-3xl text-brand-blue font-bold mb-8">
                Let's talk.
              </p>

              {/* Email Box with Copy Button */}
              <div className="p-4 border-2 border-ink bg-paper flex flex-wrap items-center justify-between gap-4 max-w-xl shadow-paper mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-blue" />
                  <div>
                    <span className="font-mono text-[10px] text-ink-muted block uppercase">DIRECT EMAIL</span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="font-mono text-sm sm:text-base font-bold text-ink hover:text-brand-blue transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="font-mono text-xs font-bold px-3 py-1.5 border-2 border-ink bg-brand-yellow text-ink shadow-[2px_2px_0px_#171513] hover:bg-brand-yellow-light transition-all flex items-center gap-1.5"
                  data-cursor="COPY EMAIL"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-green" /> COPIED!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> COPY EMAIL
                    </>
                  )}
                </button>
              </div>

              {/* Location Tag */}
              <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                <MapPin className="w-4 h-4 text-brand-pink" />
                <span>LOCATION: <strong>{personal.location}</strong></span>
              </div>
            </div>

            {/* Right Column Links & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div className="p-6 border-2 border-ink bg-paper shadow-paper space-y-4">
                <h3 className="font-mono text-xs font-bold text-ink uppercase border-b border-ink/20 pb-2">
                  // CONNECT & REPOSITORIES
                </h3>

                <div className="space-y-3 font-mono text-xs">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 border border-ink bg-paper-card hover:bg-brand-yellow transition-all font-bold text-ink group"
                    data-cursor="GITHUB"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4" /> GITHUB PROFILE
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 border border-ink bg-paper-card hover:bg-brand-blue hover:text-paper transition-all font-bold text-ink group"
                    data-cursor="LINKEDIN"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" /> LINKEDIN PROFILE
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <a
                href={`mailto:${personal.email}?subject=Project%20Query%20for%20Ayush%20Kumar`}
                className="btn-tactile-primary w-full text-center justify-center py-4 text-base"
              >
                GET IN TOUCH NOW <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
