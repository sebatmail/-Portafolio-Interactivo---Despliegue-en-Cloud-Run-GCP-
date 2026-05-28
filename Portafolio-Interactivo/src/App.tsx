/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import TerminalLayout from './components/TerminalLayout';
import HeroProfile from './components/HeroProfile';
import AboutSection from './components/AboutSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectShowcase from './components/ProjectShowcase';
import SkillsTerminal from './components/SkillsTerminal';
import EducationCertificates from './components/EducationCertificates';
import ContactTerminal from './components/ContactTerminal';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-400 font-sans selection:bg-cyan-500/15 selection:text-white py-12 px-4 relative overflow-y-auto">
      
      {/* Dynamic Cyber Ambient Grid Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/60 via-[#030712] to-[#010307] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Floating security indicators */}
      <div className="fixed top-4 left-4 font-mono text-[9px] text-slate-700 pointer-events-none hidden xl:block uppercase">
        SECURITY STATUS: AUDITED_SYSTEM
      </div>
      <div className="fixed top-4 right-4 font-mono text-[9px] text-slate-700 pointer-events-none hidden xl:block uppercase">
        INFRA: www.momentumspace.cl
      </div>

      <TerminalLayout>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Welcome Terminal Console */}
          <div className="lg:col-span-12">
            <HeroProfile />
          </div>

          {/* Academic & Compliance Resumen Card */}
          <div className="lg:col-span-5 flex flex-col">
            <AboutSection />
          </div>

          {/* Featured Security Core Project */}
          <div className="lg:col-span-7 flex flex-col">
            <ProjectShowcase />
          </div>

          {/* Simulated Hacking / Diagnostics Stack */}
          <div className="lg:col-span-7 flex flex-col">
            <SkillsTerminal />
          </div>

          {/* Secure Handshake & Contact Portal */}
          <div className="lg:col-span-5 flex flex-col">
            <ContactTerminal />
          </div>

          {/* Execution History Timeline */}
          <div className="lg:col-span-12">
            <ExperienceTimeline />
          </div>

          {/* Credentials & Quality Checks */}
          <div className="lg:col-span-12">
            <EducationCertificates />
          </div>

        </div>
      </TerminalLayout>

      {/* Humble digital signature */}
      <footer className="text-center font-mono text-[10px] text-slate-600 mt-12 mb-4 select-none">
        <p>© 2026 Sebastián Ignacio Torres Zamorano. Todos los derechos reservados.</p>
        <p className="mt-1 text-slate-700">Diseñado con estética Dark Tech & Ciberseguridad Activa.</p>
      </footer>
    </div>
  );
}

