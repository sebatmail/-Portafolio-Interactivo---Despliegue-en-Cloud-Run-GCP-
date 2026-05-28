import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import CyberAvatar from './CyberAvatar';
import TypewriterText from './TypewriterText';
import { Mail, Phone, MapPin, Terminal, LogIn, Key, Wifi, ServerCog } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroProfile() {
  const [promptComplete, setPromptComplete] = useState(false);
  const [profileComplete, setProfileComplete] = useState(false);

  return (
    <header className="p-6 bg-slate-950/20 border border-slate-900 rounded-xl relative overflow-hidden backdrop-blur-md">
      {/* Visual cybernetic corner indicators */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-purple-500/50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500/50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500/50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-purple-500/50" />
      
      {/* Abstract light grid overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Profile Info Section (Col-span-8) */}
        <div className="md:col-span-8 order-2 md:order-1 space-y-4">
          
          {/* Mock Console Session Indicator */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-slate-500 bg-slate-950/60 w-fit px-3 py-1 rounded border border-slate-900">
            <LogIn className="w-3.5 h-3.5 text-emerald-400" />
            <span>SESSION: ADMIN_SECURE</span>
            <span className="text-slate-700">|</span>
            <Wifi className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENCRYPTED_TLS</span>
            <span className="text-slate-700">|</span>
            <ServerCog className="w-3.5 h-3.5 text-purple-400" />
            <span>PROD_v2.0</span>
          </div>

          <div className="font-mono">
            {/* Prompt Typewriter */}
            <p className="text-xs text-slate-400 flex items-center gap-1.5 flex-wrap">
              <span className="text-emerald-400 font-bold">admin@momentumspace:~$</span>
              <TypewriterText 
                text="cat profile_manifest.json --render-client" 
                delay={40}
                className="text-cyan-400"
                onComplete={() => setPromptComplete(true)}
              />
              {!promptComplete && <span className="inline-block w-1.5 h-4 bg-cyan-400 animate-pulse" />}
            </p>

            {promptComplete && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onAnimationComplete={() => setProfileComplete(true)}
                className="mt-4"
              >
                <h1 className="text-2xl sm:text-3.5xl font-mono font-extrabold text-white tracking-tight leading-none flex items-center gap-2 select-none">
                  SEBASTIÁN TORRES <span className="inline-block w-2.5 h-6 bg-cyan-400 animate-pulse shrink-0" />
                </h1>

                <p className="text-xs text-cyan-400 font-mono font-medium mt-2 max-w-xl">
                  {PERSONAL_INFO.title}
                </p>

                <p className="text-slate-400 font-mono text-xs leading-relaxed max-w-xl text-justify mt-3.5">
                  &gt; {PERSONAL_INFO.headline}
                </p>

                {/* Micro contact links list */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-900">
                  <div className="flex items-center gap-2.5 font-mono text-[11px] text-slate-400 hover:text-cyan-400 transition-colors">
                    <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="truncate" title={PERSONAL_INFO.email}>{PERSONAL_INFO.email}</span>
                  </div>

                  <div className="flex items-center gap-2.5 font-mono text-[11px] text-slate-400 hover:text-cyan-400 transition-colors">
                    <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>

                  <div className="flex items-center gap-2.5 font-mono text-[11px] text-slate-400 hover:text-cyan-400 transition-colors">
                    <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="truncate" title={PERSONAL_INFO.location}>Temuco, Araucanía</span>
                  </div>
                </div>

              </motion.div>
            )}
          </div>

        </div>

        {/* Dynamic Holographic Interactive Cyber-Avatar (Col-span-4) */}
        <div className="md:col-span-4 order-1 md:order-2 flex justify-center">
          <CyberAvatar />
        </div>

      </div>
    </header>
  );
}
