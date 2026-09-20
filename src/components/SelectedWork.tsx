import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, TrendingUp, BarChart3, Database, AlertTriangle, Lock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const SelectedWork: React.FC = () => {
  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="work" className="py-24 border-b-2 border-ink/15 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold text-ink bg-brand-yellow px-2 py-0.5 border border-ink shadow-[2px_2px_0px_#171513]">
                02 / SELECTED WORK
              </span>
              <span className="font-mono text-xs text-ink-light uppercase">
                // CASE STUDIES & PRODUCTS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-ink tracking-tight">
              Things I've built.
            </h2>
          </div>
          <p className="font-mono text-sm text-ink-muted max-w-md">
            From privacy browser extensions to multi-tenant SaaS products and machine learning analytics pipelines.
          </p>
        </div>

        {/* Project Layouts with Alternating Rhythms */}
        <div className="space-y-20">
          
          {/* ========================================================
              PROJECT 1: REVIEWLOOP (HERO PROJECT)
             ======================================================== */}
          {(() => {
            const p1 = projects[0];
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-3 border-ink bg-ink text-paper p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_#F4C542] relative overflow-hidden group"
                data-cursor="CASE STUDY"
              >
                {/* Micro Label */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper/20 pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold bg-brand-yellow text-ink px-3 py-1 border border-paper uppercase">
                      {p1.tag}
                    </span>
                    <span className="font-mono text-xs text-brand-yellow font-bold uppercase tracking-wider">
                      ★ HERO PROJECT
                    </span>
                  </div>

                  {/* PROMINENT BADGE: 2 PAYING CLIENTS */}
                  <div className="inline-flex items-center gap-2 bg-brand-green text-ink font-mono text-xs font-black uppercase px-3 py-1.5 border-2 border-paper shadow-[3px_3px_0px_#FAF8F3]">
                    <CheckCircle2 className="w-4 h-4 text-ink" />
                    {p1.badge}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Column Story */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-paper mb-3 group-hover:text-brand-yellow transition-colors">
                        {p1.title}
                      </h3>
                      <p className="text-lg text-brand-yellow font-medium mb-4 leading-snug">
                        "{p1.subtitle}"
                      </p>
                      <p className="text-paper/80 text-sm leading-relaxed mb-6 font-sans">
                        {p1.description}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-2.5 mb-8">
                      {p1.highlights?.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 font-mono text-xs text-paper/90">
                          <span className="text-brand-yellow font-bold mt-0.5">➔</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p1.tech.map((t) => (
                        <span key={t} className="font-mono text-[11px] bg-paper/10 text-paper border border-paper/30 px-2.5 py-1">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div>
                      <a
                        href={p1.linkUrl}
                        className="btn-tactile-primary inline-flex"
                      >
                        {p1.linkText} <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column Abstract Dashboard Mockup */}
                  <div className="lg:col-span-6 relative">
                    {/* Handwritten Annotations */}
                    <div className="absolute -top-6 right-2 z-20 font-handwriting text-xl text-brand-yellow font-bold -rotate-3 hidden sm:block">
                      ★ built from scratch
                    </div>
                    <div className="absolute -bottom-6 left-2 z-20 font-handwriting text-xl text-brand-green font-bold rotate-2 hidden sm:block">
                      real users → real feedback
                    </div>

                    {/* Dashboard Visual Container */}
                    <div className="bg-paper-card border-2 border-paper text-ink p-5 shadow-paper-lg relative rounded-none">
                      {/* Dashboard Header Bar */}
                      <div className="flex items-center justify-between border-b border-ink/20 pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-brand-pink border border-ink" />
                          <div className="w-3 h-3 rounded-full bg-brand-yellow border border-ink" />
                          <div className="w-3 h-3 rounded-full bg-brand-green border border-ink" />
                          <span className="font-mono text-[10px] text-ink-muted ml-2">ReviewLoop SaaS Admin // Multi-Tenant RLS</span>
                        </div>
                        <span className="font-mono text-[10px] bg-brand-green text-ink px-2 py-0.5 border border-ink font-bold">LIVE</span>
                      </div>

                      {/* Mock Stats Cards */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 border border-ink bg-paper shadow-[2px_2px_0px_#171513]">
                          <div className="font-mono text-[10px] text-ink-muted">CLIENT REVIEWS</div>
                          <div className="font-display font-black text-2xl text-ink">1,248</div>
                          <div className="font-mono text-[9px] text-brand-blue font-bold">+18.4% WhatsApp Funnel</div>
                        </div>
                        <div className="p-3 border border-ink bg-brand-yellow-light shadow-[2px_2px_0px_#171513]">
                          <div className="font-mono text-[10px] text-ink-muted">ACTIVE BUSINESSES</div>
                          <div className="font-display font-black text-2xl text-ink">2 PAID</div>
                          <div className="font-mono text-[9px] text-ink font-bold">Multi-tenant RLS</div>
                        </div>
                      </div>

                      {/* Simulated Schema / Pipeline diagram */}
                      <div className="p-3 border border-ink bg-paper/60 font-mono text-xs space-y-2 mb-2">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-bold flex items-center gap-1.5 text-ink">
                            <Database className="w-3.5 h-3.5 text-brand-blue" />
                            Supabase PostgreSQL + RLS
                          </span>
                          <span className="text-[10px] bg-ink text-paper px-1.5">ISOLATED</span>
                        </div>
                        <div className="text-[10px] text-ink-muted bg-paper p-2 border border-ink/20">
                          <code>CREATE POLICY tenant_isolation ON reviews FOR ALL USING (auth.uid() = tenant_id);</code>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted pt-2 border-t border-ink/10">
                        <span>Groq Conversational AI Automation</span>
                        <span>Docker Containerized</span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })()}


          {/* ========================================================
              PROJECT 2: SAFE HAI (PRIVACY / AI EXTENSION)
             ======================================================== */}
          {(() => {
            const p2 = projects[1];
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-3 border-ink bg-paper-card p-6 sm:p-10 lg:p-12 shadow-paper-xl relative group"
                data-cursor="PRIVACY TOOL"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/20 pb-6 mb-8">
                  <span className="font-mono text-xs font-bold bg-brand-blue text-paper px-3 py-1 border border-ink">
                    {p2.tag}
                  </span>
                  <span className="editorial-sticker bg-brand-green-light text-ink border-ink">
                    <Lock className="w-3.5 h-3.5 text-ink" />
                    {p2.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Column Browser Mockup */}
                  <div className="lg:col-span-6 order-2 lg:order-1 relative">
                    <div className="bg-paper border-2 border-ink p-4 shadow-paper">
                      {/* Browser Window Chrome */}
                      <div className="flex items-center gap-2 border-b border-ink/20 pb-3 mb-3">
                        <div className="flex gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-brand-pink border border-ink" />
                          <span className="w-3 h-3 rounded-full bg-brand-yellow border border-ink" />
                          <span className="w-3 h-3 rounded-full bg-brand-green border border-ink" />
                        </div>
                        <div className="bg-paper-card border border-ink/20 px-3 py-0.5 flex-1 font-mono text-[10px] text-ink-muted">
                          chrome-extension://safe-hai/local-guard
                        </div>
                      </div>

                      {/* Fake Prompt Text Area with sensitive detection warning */}
                      <div className="p-3 border border-ink/30 bg-paper-card font-mono text-xs space-y-3">
                        <div className="text-[11px] text-ink-muted">// User typing in ChatGPT / LLM Prompt Box:</div>
                        <div className="p-2 bg-paper border border-ink/20 text-ink leading-relaxed">
                          "Here is our API key: <span className="bg-brand-pink/30 text-ink border-b-2 border-brand-pink font-bold px-1">sk-proj-9481xxxx</span> and Aadhaar <span className="bg-brand-yellow/50 text-ink border-b-2 border-brand-yellow font-bold px-1">xxxx-xxxx-4921</span>"
                        </div>

                        {/* SAFE HAI DLP INTERCEPTOR ALERT */}
                        <div className="p-3 border-2 border-ink bg-brand-pink-light flex items-start gap-2.5 shadow-[2px_2px_0px_#171513]">
                          <AlertTriangle className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                          <div>
                            <div className="font-mono text-xs font-bold text-ink uppercase">
                              ⚠ SENSITIVE DATA DETECTED BY SAFE HAI
                            </div>
                            <div className="font-mono text-[10px] text-ink-muted mt-0.5">
                              Local DLP blocked API key & Aadhaar number before prompt transmission. 100% Client-side.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-ink-light pt-2 border-t border-ink/10">
                        <span>Pattern Match Engine: ACTIVE</span>
                        <span>0 Server Requests Sent</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Story */}
                  <div className="lg:col-span-6 order-1 lg:order-2">
                    <h3 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-ink mb-3 group-hover:text-brand-blue transition-colors">
                      {p2.title}
                    </h3>
                    <p className="text-lg text-ink font-semibold mb-4 leading-snug">
                      "{p2.subtitle}"
                    </p>
                    <p className="text-ink-muted text-sm leading-relaxed mb-6 font-sans">
                      {p2.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-6 font-mono text-xs">
                      {p2.highlights?.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 p-2 border border-ink/20 bg-paper">
                          <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
                          <span className="text-[11px] text-ink">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {p2.tech.map((t) => (
                        <span key={t} className="font-mono text-[11px] bg-paper text-ink border border-ink px-2.5 py-1">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a href={p2.linkUrl} className="btn-tactile-secondary">
                      {p2.linkText} <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })()}


          {/* ========================================================
              PROJECT 3: AI DEMAND FORECASTING SYSTEM (ML PIPELINE)
             ======================================================== */}
          {(() => {
            const p3 = projects[2];
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-3 border-ink bg-brand-yellow-light p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_#171513] relative group"
                data-cursor="ML PIPELINE"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/20 pb-6 mb-8">
                  <span className="font-mono text-xs font-bold bg-ink text-brand-yellow px-3 py-1 border border-ink">
                    {p3.tag}
                  </span>
                  <span className="editorial-sticker bg-paper text-ink border-ink">
                    <TrendingUp className="w-3.5 h-3.5 text-ink" />
                    {p3.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Column Story */}
                  <div className="lg:col-span-6">
                    <h3 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-ink mb-3 group-hover:underline decoration-brand-blue">
                      {p3.title}
                    </h3>
                    <p className="text-lg text-ink font-semibold mb-4 leading-snug">
                      "{p3.subtitle}"
                    </p>
                    <p className="text-ink-muted text-sm leading-relaxed mb-6 font-sans">
                      {p3.description}
                    </p>

                    {/* Models Tagged */}
                    <div className="mb-6">
                      <span className="font-mono text-xs font-bold text-ink-muted uppercase block mb-2">
                        // EVALUATED MODELS:
                      </span>
                      <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                        {p3.models?.map((m) => (
                          <span key={m} className="bg-paper text-ink border border-ink px-2.5 py-1 font-semibold">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {p3.tech.map((t) => (
                        <span key={t} className="font-mono text-[11px] bg-ink text-paper px-2.5 py-1">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a href={p3.linkUrl} className="btn-tactile-primary">
                      {p3.linkText} <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Right Column Pipeline Visualization */}
                  <div className="lg:col-span-6 relative">
                    <div className="bg-paper border-2 border-ink p-5 shadow-paper space-y-4">
                      <div className="flex items-center justify-between border-b border-ink/20 pb-3">
                        <span className="font-mono text-xs font-bold text-ink">
                          // END-TO-END ML PIPELINE
                        </span>
                        <span className="font-mono text-[10px] text-brand-blue font-bold">
                          FASTAPI DEPLOYED
                        </span>
                      </div>

                      {/* Visual Flow Blocks */}
                      <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                        {p3.pipeline?.map((step, idx) => (
                          <div
                            key={step}
                            className={`p-2.5 border border-ink flex flex-col items-center justify-center ${
                              idx === p3.pipeline!.length - 1
                                ? 'bg-brand-yellow font-bold text-ink shadow-[2px_2px_0px_#171513]'
                                : 'bg-paper-card text-ink'
                            }`}
                          >
                            <span className="text-[9px] text-ink-muted">0{idx + 1}</span>
                            <span className="text-[10px] tracking-tight">{step}</span>
                          </div>
                        ))}
                      </div>

                      {/* Fake Demand Spike Graphic */}
                      <div className="p-3 border border-ink/20 bg-paper-card">
                        <div className="flex items-center justify-between text-[10px] font-mono text-ink-muted mb-2">
                          <span>HYPERLOCAL DEMAND PREDICTION</span>
                          <TrendingUp className="w-3.5 h-3.5 text-brand-blue" />
                        </div>
                        <div className="h-20 w-full flex items-end gap-1.5 pt-2 px-1 border-b border-ink">
                          {[40, 55, 35, 70, 85, 60, 95, 110, 80, 125].map((val, i) => (
                            <div
                              key={i}
                              style={{ height: `${(val / 130) * 100}%` }}
                              className={`flex-1 border border-ink transition-all ${
                                i >= 6 ? 'bg-brand-yellow' : 'bg-brand-blue/30'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between text-[9px] font-mono text-ink-muted mt-1">
                          <span>HISTORICAL DATA</span>
                          <span className="text-ink font-bold">FORECAST SPIKE</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })()}


          {/* ========================================================
              PROJECT 4: STOCK MARKET DATA ANALYZER
             ======================================================== */}
          {(() => {
            const p4 = projects[3];
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-3 border-ink bg-paper-card p-6 sm:p-10 lg:p-12 shadow-paper relative group"
                data-cursor="DATA ANALYSIS"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/20 pb-6 mb-8">
                  <span className="font-mono text-xs font-bold bg-ink/10 text-ink px-3 py-1 border border-ink">
                    {p4.tag}
                  </span>
                  <span className="editorial-sticker bg-paper text-ink border-ink">
                    <BarChart3 className="w-3.5 h-3.5 text-ink" />
                    {p4.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Column Chart Visual */}
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="bg-paper border-2 border-ink p-5 shadow-paper space-y-3">
                      <div className="flex items-center justify-between font-mono text-xs font-bold text-ink">
                        <span>PANDAS & MATPLOTLIB GRAPHICS</span>
                        <span className="text-ink-muted font-normal text-[10px]">TIME-SERIES</span>
                      </div>
                      <div className="p-4 bg-paper-card border border-ink text-center flex flex-col items-center justify-center">
                        <BarChart3 className="w-12 h-12 text-ink mb-2" />
                        <span className="font-mono text-xs font-bold text-ink">
                          FINANCIAL TREND VISUALIZER
                        </span>
                        <span className="font-mono text-[10px] text-ink-muted mt-1">
                          Calculated Moving Averages & Volatility Signals
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Details */}
                  <div className="lg:col-span-7 order-1 lg:order-2">
                    <h3 className="font-display text-4xl font-black tracking-tight text-ink mb-3 group-hover:text-brand-blue transition-colors">
                      {p4.title}
                    </h3>
                    <p className="text-lg text-ink font-semibold mb-4 leading-snug">
                      "{p4.subtitle}"
                    </p>
                    <p className="text-ink-muted text-sm leading-relaxed mb-6 font-sans">
                      {p4.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {p4.tech.map((t) => (
                        <span key={t} className="font-mono text-[11px] bg-paper text-ink border border-ink px-2.5 py-1">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a href={p4.linkUrl} className="btn-tactile-secondary">
                      {p4.linkText} <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })()}

        </div>
      </div>
    </section>
  );
};
