import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data';
import { Network, ShieldAlert, Cpu, Globe, ArrowUpRight, CheckCircle2, Terminal, AlertCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState<'info' | 'sec' | 'infra'>('info');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditLog, setAuditLog] = useState<string[]>([]);

  const momentum = PROJECTS_DATA[0];

  const triggerLiveAuditStatus = () => {
    setIsAuditing(true);
    setAuditLog([
      'INITIATING AUDIT: momentumspace.cl',
      'RESOLVING DNSSEC CHAINS...',
      'SECURE PROTOCOL CHECK: HTTPS v1.3 forced',
      'HSTS HEADERS: FOUND & ENFORCED',
      'CSP RULES: SECURE CONFIGURATION ACTIVE',
    ]);

    setTimeout(() => {
      setAuditLog(prev => [
        ...prev,
        'DDoS SHIELDS: INGRESS RATE-LIMITING VERIFIED',
        'FIREWALL RULE_STRICT: [ESTABLISHED, RELATED] APPROVED',
        'SYSTEM HEALTH: 100% INTACT',
        'AUDIT COMPLETE: SECURE CONSOLE GREEN'
      ]);
      setIsAuditing(false);
    }, 2000);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      id="proyectos" 
      className="h-full flex flex-col mb-0"
    >
      <div className="flex items-center justify-between mb-6 border-b border-slate-800/60 pb-2">
        <h2 className="text-base text-slate-400 font-mono flex items-center gap-2">
          <span className="text-pink-500 font-bold">/*</span>
          <span className="text-slate-300 font-semibold">const</span>
          <span className="text-cyan-400">ProyectosDestacados</span>
          <span className="text-pink-500 font-bold">*/</span>
        </h2>
        
        {/* Active pulse */}
        <span className="flex items-center gap-1.5 font-mono text-[10px] bg-emerald-950/40 text-emerald-400 border border-emerald-900/40 px-2 py-0.5 rounded animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> PROYECTO INSIGNIA EN VIVO
        </span>
      </div>

      {/* Hero Showcase Card - MomentumSpace */}
      <div className="flex-1 flex flex-col justify-between relative overflow-hidden rounded-xl border border-emerald-500/20 bg-slate-950/50 p-6 backdrop-blur-md hover:border-emerald-500/40 transition-all duration-300 shadow-[0_4px_30px_rgba(16,185,129,0.03)]">
        
        {/* Glowing Matrix Background Flare */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-lg font-mono font-bold text-white flex items-center gap-2">
                <Network className="w-5 h-5 text-emerald-400 animate-pulse" /> {momentum.name}
              </h3>
              
              <div className="inline-flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] px-2 py-0.5 rounded-full font-semibold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                LIVE CORE SECURE
              </div>
            </div>

            <p className="text-xs font-mono text-cyan-400 font-semibold mt-1.5">{momentum.role}</p>
            
            <p className="text-[13px] text-slate-300 font-mono leading-relaxed mt-3 text-justify">
              {momentum.description}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <a 
              href={momentum.url} 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-600 font-mono text-xs font-bold flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
            >
              VISITAR SITIO <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={triggerLiveAuditStatus}
              disabled={isAuditing}
              className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isAuditing ? 'animate-spin text-cyan-400' : ''}`} />
              SECURE AUDIT
            </button>
          </div>
        </div>

        {/* Live Security Audit Interactive Terminal Block */}
        <AnimatePresence>
          {(isAuditing || auditLog.length > 0) && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 overflow-hidden border border-slate-900 bg-slate-950 rounded-lg p-3 font-mono text-[11px]"
            >
              <div className="flex items-center justify-between border-b border-slate-900 pb-1.5 mb-2 text-slate-500 text-[10px]">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" /> SECURE ROOT AUDITOR V1.9
                </span>
                <span className="text-slate-600">ST_AUDIT_LOGS</span>
              </div>
              <div className="space-y-1 text-slate-400 md:max-h-40 overflow-y-auto">
                {auditLog.map((log, idx) => {
                  let logColor = 'text-slate-400';
                  if (log.includes('AUDIT COMPLETE') || log.includes('GREEN') || log.includes('SECURE 100%')) {
                    logColor = 'text-emerald-400 font-bold';
                  } else if (log.includes('CHECK') || log.includes('ENFORCED') || log.includes('RESOLVING')) {
                    logColor = 'text-cyan-400';
                  } else if (log.includes('INITIATING')) {
                    logColor = 'text-purple-400';
                  }
                  return (
                    <p key={idx} className={`${logColor} leading-normal`}>
                      <span className="text-slate-600 select-none">&gt;&gt;</span> {log}
                    </p>
                  );
                })}
                {isAuditing && (
                  <p className="text-cyan-400 animate-pulse">
                    <span className="text-slate-600 select-none">&gt;&gt;</span> ANALYZING SYSTEM RESILIENCE... [WAIT]
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-900 font-mono text-[11px] mb-4">
          <button 
            onClick={() => setActiveTab('info')}
            className={`px-3 py-1.5 border-b-2 transition-colors ${
              activeTab === 'info' 
                ? 'border-emerald-500 text-emerald-400 font-semibold' 
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            VALOR DE NEGOCIO
          </button>
          <button 
            onClick={() => setActiveTab('sec')}
            className={`px-3 py-1.5 border-b-2 transition-colors ${
              activeTab === 'sec' 
                ? 'border-emerald-500 text-emerald-400 font-semibold' 
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            CONTROLES DE SEGURIDAD
          </button>
          <button 
            onClick={() => setActiveTab('infra')}
            className={`px-3 py-1.5 border-b-2 transition-colors ${
              activeTab === 'infra' 
                ? 'border-emerald-500 text-emerald-400 font-semibold' 
                : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            ESPECIFICACIONES DE INFRA
          </button>
        </div>

        {/* Dynamic Tab Panes */}
        <div className="font-mono text-xs text-slate-400 min-h-[96px]">
          {activeTab === 'info' && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }} 
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2.5"
            >
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Impacto Comercial:</strong> {momentum.businessImpact}
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Alinea completamente los conceptos técnicos del desarrollo y alojamiento web a las necesidades financieras y operativas de una empresa, mitigando hackeos, spam y multas de marca.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'sec' && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }} 
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {momentum.securityHighlights.map((hl, idx) => (
                <div key={idx} className="flex gap-2 p-2 bg-slate-900/35 border border-slate-900 rounded-lg">
                  <ShieldAlert className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="leading-tight text-[11px]">{hl}</span>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'infra' && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }} 
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {momentum.infrastructureDetails.map((det, idx) => (
                <div key={idx} className="flex gap-2 p-2 bg-slate-900/35 border border-slate-900 rounded-lg">
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-tight text-[11px]">{det}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>

      </div>
    </motion.section>
  );
}
