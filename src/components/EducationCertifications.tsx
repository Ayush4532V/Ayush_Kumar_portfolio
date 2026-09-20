import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const EducationCertifications: React.FC = () => {
  const edu = PORTFOLIO_DATA.education;
  const certs = PORTFOLIO_DATA.certifications;

  return (
    <section className="py-24 border-b-2 border-ink/15 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs font-bold text-ink bg-brand-yellow px-2 py-0.5 border border-ink shadow-[2px_2px_0px_#171513]">
            05 / EDUCATION & CREDENTIALS
          </span>
          <div className="h-[2px] bg-ink/20 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: EDUCATION TYPOGRAPHIC LAYOUT (Cols 1-6) */}
          <div className="lg:col-span-6 bg-paper-card border-2 border-ink p-8 shadow-paper relative">
            <div className="flex items-center justify-between border-b border-ink/20 pb-4 mb-6">
              <span className="font-mono text-xs font-bold text-ink flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brand-blue" />
                ACADEMIC DEGREES
              </span>
              <span className="editorial-sticker bg-brand-yellow text-ink border-ink">
                EXPECTED {edu.graduationYear}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-mono text-xs font-bold text-brand-blue uppercase tracking-widest block mb-1">
                  BACHELOR OF TECHNOLOGY (B.TECH)
                </span>
                <h3 className="font-display text-3xl font-black text-ink leading-tight">
                  {edu.field}
                </h3>
              </div>

              <div className="pt-4 border-t border-ink/10">
                <p className="font-display font-bold text-xl text-ink">
                  {edu.institution}
                </p>
                <p className="font-mono text-xs text-ink-muted mt-1">
                  📍 {edu.location}
                </p>
              </div>

              <div className="p-3 border border-ink/20 bg-paper text-xs font-mono text-ink space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted">SPECIALIZATION:</span>
                  <span className="font-bold text-brand-blue">AI & Machine Learning</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted">FOCUS:</span>
                  <span>Data Pipelines, Algorithms & Software Eng.</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CERTIFICATIONS EDITORIAL LIST (Cols 7-12) */}
          <div className="lg:col-span-6 bg-paper-card border-2 border-ink p-8 shadow-paper">
            <div className="flex items-center justify-between border-b border-ink/20 pb-4 mb-6">
              <span className="font-mono text-xs font-bold text-ink flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-yellow" />
                VERIFIED CERTIFICATIONS
              </span>
              <span className="font-mono text-[10px] text-ink-muted uppercase">
                // ANTHROPIC & ANACONDA
              </span>
            </div>

            <div className="space-y-4">
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className="p-4 border border-ink bg-paper flex items-start justify-between gap-4 group hover:border-brand-blue hover:translate-x-1 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-base text-ink group-hover:text-brand-blue transition-colors">
                        {cert.title}
                      </h4>
                      <span className="font-mono text-xs text-ink-muted block mt-0.5">
                        ISSUED BY: <strong className="text-ink">{cert.issuer}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
