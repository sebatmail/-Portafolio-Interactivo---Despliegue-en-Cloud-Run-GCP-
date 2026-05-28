import React, { useState } from 'react';
import { SKILLS_DATA } from '../data';
import { Terminal, Shield, Eye, HelpCircle, Code, Server, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function SkillsTerminal() {
  const [activeSkill, setActiveSkill] = useState(SKILLS_DATA[0]);
  const [terminalOutput, setTerminalOutput] = useState<string[]>(SKILLS_DATA[0].output);
  const [activeCmd, setActiveCmd] = useState<string>(SKILLS_DATA[0].command);
  const [shellLoading, setShellLoading] = useState(false);

  const fetchCategoryIcon = (category: string) => {
    switch (category) {
      case 'security': return <Shield className="w-4 h-4 text-pink-500" />;
      case 'infra': return <Server className="w-4 h-4 text-cyan-400" />;
      case 'coding': return <Code className="w-4 h-4 text-purple-400" />;
      default: return <Info className="w-4 h-4 text-amber-400" />;
    }
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'security':
        return {
          hoverBg: 'hover:bg-pink-950/20',
          hoverBorder: 'hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)]',
          badge: 'text-pink-500 bg-pink-950/40',
        };
      case 'infra':
        return {
          hoverBg: 'hover:bg-cyan-950/20',
          hoverBorder: 'hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]',
          badge: 'text-cyan-400 bg-cyan-950/40',
        };
      case 'coding':
        return {
          hoverBg: 'hover:bg-purple-950/20',
          hoverBorder: 'hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]',
          badge: 'text-purple-400 bg-purple-950/40',
        };
      default:
        return {
          hoverBg: 'hover:bg-amber-950/20',
          hoverBorder: 'hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]',
          badge: 'text-amber-500 bg-amber-950/40',
        };
    }
  };

  const handleRunSkillDiagnostics = (skill: typeof SKILLS_DATA[0]) => {
    setShellLoading(true);
    setActiveSkill(skill);
    setActiveCmd(skill.command);
    
    // Smooth loader delay to simulate standard system responses
    setTimeout(() => {
      setTerminalOutput(skill.output);
      setShellLoading(false);
    }, 40000000); // Wait, make it very fast for instant interaction but feel realistic, let's say 400ms!
  };

  const triggerExecutionEx = (skill: typeof SKILLS_DATA[0]) => {
    setShellLoading(true);
    setActiveSkill(skill);
    setActiveCmd(skill.command);

    setTimeout(() => {
      setTerminalOutput(skill.output);
      setShellLoading(false);
    }, 450);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      id="habilidades" 
      className="h-full flex flex-col mb-0"
    >
      <div className="flex items-center justify-between mb-6 border-b border-slate-800/60 pb-2">
        <h2 className="text-base text-slate-400 font-mono flex items-center gap-2">
          <span className="text-pink-500 font-bold">/*</span>
          <span className="text-slate-300 font-semibold">const</span>
          <span className="text-cyan-400">StackHabilidades</span>
          <span className="text-pink-500 font-bold">*/</span>
        </h2>
        <span className="text-xs text-slate-600 font-mono hidden sm:inline">interacción_clic_diagnóstico</span>
      </div>

      <p className="text-xs text-slate-500 font-mono mb-4">
        <span className="text-emerald-500 font-extrabold mr-1">ℹ</span> Haz clic en cualquiera de las habilidades para simular un comando de auditoría remota en tiempo real sobre mis competencias:
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Interactive Skills Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SKILLS_DATA.map((skill, idx) => {
            const theme = getCategoryTheme(skill.category);
            const isCurrent = activeSkill.name === skill.name;

            return (
              <div 
                key={idx}
                onMouseDown={() => triggerExecutionEx(skill)}
                className={`flex items-center justify-between p-3.5 rounded-lg border bg-slate-950/30 backdrop-blur-sm transition-all duration-300 cursor-pointer select-none ${
                  isCurrent 
                    ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.12)] bg-emerald-950/5' 
                    : `border-slate-900 ${theme.hoverBorder} ${theme.hoverBg}`
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {fetchCategoryIcon(skill.category)}
                  <span className="font-mono text-xs text-slate-300 selection:bg-cyan-500/20">
                    {skill.name}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-600">level:</span>
                  <div className="w-12 bg-slate-900 rounded-full h-1 overflow-hidden border border-slate-800/60">
                    <div 
                      className={`h-full rounded-full ${
                        skill.category === 'security' ? 'bg-pink-500' :
                        skill.category === 'infra' ? 'bg-cyan-400' : 'bg-purple-500'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Live Diagnostics Terminal Outputs Box */}
        <div className="lg:col-span-5 border border-slate-900 bg-slate-950 rounded-xl p-5 font-mono shadow-[0_10px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
          
          {/* Static terminal scan light lines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
              <Terminal className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>ST-SHELL DIAGNOSTICS cv_dev_v1.7</span>
            </div>
            
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>

          {/* Active command display */}
          <div className="bg-slate-900/40 p-2 border border-slate-900 rounded mb-4 text-[10px] text-slate-500">
            <span className="text-purple-400">admin@storres-sh:~$</span> {activeCmd}
          </div>

          {/* Shell output area */}
          <div className="min-h-[160px] text-[11px] leading-relaxed text-slate-400 bg-slate-950/50 p-3 rounded border border-slate-900 overflow-y-auto">
            {shellLoading ? (
              <div className="flex flex-col items-center justify-center py-10 text-cyan-400 gap-2">
                <div className="w-5 h-5 border-2 border-t-cyan-400 border-r-transparent border-b-cyan-400 border-l-transparent rounded-full animate-spin" />
                <span className="text-[10px] animate-pulse">EXECUTING AUDIT COMMAND...</span>
              </div>
            ) : (
              <div className="space-y-1">
                {terminalOutput.map((outLine, oIdx) => {
                  let lineStyle = 'text-slate-400';
                  if (outLine.includes('[OK]') || outLine.includes('active (running)')) {
                    lineStyle = 'text-emerald-400 font-semibold';
                  } else if (outLine.includes('[WARN]') || outLine.includes('Alerts')) {
                    lineStyle = 'text-amber-400';
                  } else if (outLine.includes('●')) {
                    lineStyle = 'text-cyan-400 font-bold';
                  } else if (outLine.includes('Starting Nmap') || outLine.includes('Iniciando')) {
                    lineStyle = 'text-purple-400';
                  }
                  return (
                    <p key={oIdx} className={`${lineStyle} break-words whitespace-pre-wrap`}>
                      {outLine}
                    </p>
                  );
                })}
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-600">
            <span>AUDIT SCOPE: {activeSkill.category.toUpperCase()}</span>
            <span>SYSTEM_ONLINE: 100% SUCCESS</span>
          </div>

        </div>

      </div>

    </motion.section>
  );
}
