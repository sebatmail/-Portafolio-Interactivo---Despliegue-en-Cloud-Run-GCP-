import React from 'react';
import { PERSONAL_INFO } from '../data';
import { Shield, CheckCircle, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="h-full flex flex-col mb-0"
      id="resumen"
    >
      <div className="flex items-center justify-between mb-5 border-b border-slate-800/60 pb-2">
        <h2 className="text-base text-slate-400 font-mono flex items-center gap-2">
          <span className="text-pink-500 font-bold">/*</span>
          <span className="text-slate-300 font-semibold">const</span>
          <span className="text-cyan-400">ResumenProfesional</span>
          <span className="text-pink-500 font-bold">*/</span>
        </h2>
        <span className="text-xs text-slate-600 font-mono hidden md:inline">scope: profile_details</span>
      </div>

      <div className="flex-1 flex flex-col justify-between gap-6 bg-slate-950/40 rounded-xl border border-slate-850 p-6 backdrop-blur-md relative overflow-hidden h-full">
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] rounded-full pointer-events-none" />
        
        {/* Code display pane */}
        <div className="font-mono text-[13px] text-slate-400 space-y-4">
          <div className="flex gap-4">
            <span className="text-slate-600 select-none text-right w-4">01</span>
            <p className="leading-relaxed text-justify">
              Estudiante de <span className="text-white hover:text-cyan-400 transition-colors font-medium">Ingeniería en Informática</span> con un rendimiento académico sobresaliente (<span className="text-emerald-400 font-bold">Promedio: 6.1</span>) y formación previa en Administración de Empresas (UPV, España).
            </p>
          </div>

          <div className="flex gap-4">
            <span className="text-slate-600 select-none text-right w-4">02</span>
            <p className="leading-relaxed text-justify mt-1">
              Orientado al área de la <span className="text-purple-400 font-bold">ciberseguridad operativa</span>, con especial pasión e interés en el monitoreo preventivo de infraestructura TI, el análisis de tráfico y la contención de incidentes de red.
            </p>
          </div>

          <div className="flex gap-4">
            <span className="text-slate-600 select-none text-right w-4">03</span>
            <p className="leading-relaxed text-justify mt-1">
              Bases robustas en normas cibernéticas, estándares internacionales y laboratorios de <span className="text-cyan-400 font-bold">Kali Linux</span>. Preparando la certificación <span className="text-amber-400 font-bold">"CompTIA Security+"</span> para formalizar y respaldar aptitudes.
            </p>
          </div>
        </div>

        {/* Rapid Overview Metrics Panel */}
        <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 border-b border-slate-800/60 pb-1">
              <Shield className="w-3.5 h-3.5 text-cyan-400" /> RESUMEN DE COMPLIANCE
            </div>
            <ul className="space-y-1.5 font-mono text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Rendimiento INACAP: <strong className="text-emerald-400">Top 5%</strong></span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>CompTIA Sec+: <strong className="text-amber-400">En Curso</strong></span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Enfoque de Negocio: <strong className="text-cyan-400">UPV España</strong></span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Automatización: <strong className="text-purple-400">n8n / AI</strong></span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500 font-bold">
            <span>Status: Ready to deploy</span>
            <span className="text-emerald-400 shrink-0 animate-pulse flex items-center gap-1">
              ● Secure
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
