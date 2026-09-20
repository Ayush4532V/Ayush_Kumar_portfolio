import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutManifesto } from './components/AboutManifesto';
import { MarqueeStrip } from './components/MarqueeStrip';
import { SelectedWork } from './components/SelectedWork';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { HowIBuild } from './components/HowIBuild';
import { SkillsConstellation } from './components/SkillsConstellation';
import { EducationCertifications } from './components/EducationCertifications';
import { BeyondTerminal } from './components/BeyondTerminal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink selection:bg-brand-yellow selection:text-ink">
      {/* Interactive Cursor */}
      <CustomCursor />

      {/* Navigation Toolbar */}
      <Navbar />

      {/* Main Page Content Flow */}
      <main>
        <Hero />
        <AboutManifesto />
        <MarqueeStrip />
        <SelectedWork />
        <ExperienceTimeline />
        <HowIBuild />
        <SkillsConstellation />
        <EducationCertifications />
        <BeyondTerminal />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
