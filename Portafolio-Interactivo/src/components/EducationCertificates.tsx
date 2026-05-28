import React from 'react';
import { EDUCATION_DATA, OBJECTIVES_AND_CERTS } from '../data';
import { GraduationCap, Award, BookOpen, Flame, Globe2, Sparkles, CheckSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function EducationCertificates() {
  return (
    <section id="educacion" className="mb-0 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Education Timeline */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-6 border-b border-slate-800/60 pb-2">
            <h2 className="text-base text-slate-400 font-mono flex items-center gap-2">
              <span className="text-pink-500 font-bold">/*</span>
              <span className="text-slate-300 font-semibold">let</span>
              <span className="text-cyan-400">EducacionAcademica</span>
              <span className="text-pink-500 font-bold">*/</span>
            </h2>
          </div>

          <div className="relative pl-4 border-l-2 border-slate-800/80 space-y-8 ml-2">
            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Visual node */}
                <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-purple-400 group-hover:bg-purple-400 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.6)] transition-all duration-300" />

                <div className="bg-slate-950/20 rounded-xl border border-slate-900/80 hover:border-slate-800 p-5 hover:bg-slate-950/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-mono font-bold text-sm tracking-tight leading-snug">
                        {edu.degree}
                        {edu.id === 'edu-upv' && (
                          <span className="text-[10px] font-normal font-mono text-purple-400 ml-2 bg-purple-950/40 border border-purple-900/40 px-1.5 py-0.5 rounded">
                            Grado Incompleto
                          </span>
                        )}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 font-medium mt-1">
                        {edu.institution}
                      </p>
                    </div>

                    <span className="text-[10px] font-mono text-slate-500 bg-slate-900/60 border border-slate-800 px-2 py-0.5 rounded inline-flex self-start shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  {edu.gpa && (
                    <div className="inline-flex items-center gap-1.5 bg-emerald-950/30 border border-emerald-950 text-emerald-400 text-[11px] font-mono px-2 py-0.5 rounded mb-3 font-semibold">
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                      Rendimiento Académico: Promedio {edu.gpa}
                    </div>
                  )}

                  <p className="text-[13px] text-slate-400 font-mono leading-relaxed text-justify mb-4">
                    {edu.details}
                  </p>

                  <ul className="space-y-1.5 font-mono text-[11px] text-slate-400 border-t border-slate-900/60 pt-3">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold select-none shrink-0">➜</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications and Objectives */}
        <div className="lg:col-span-5">
          <div className="flex items-center justify-between mb-6 border-b border-slate-800/60 pb-2">
            <h2 className="text-base text-slate-400 font-mono flex items-center gap-2">
              <span className="text-pink-500 font-bold">/*</span>
              <span className="text-slate-300 font-semibold">const</span>
              <span className="text-cyan-400">ObjetivosYCert</span>
              <span className="text-pink-500 font-bold">*/</span>
            </h2>
          </div>

          <div className="space-y-6">
            
            {/* CompTIA Sec card */}
            {OBJECTIVES_AND_CERTS.certs.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-950/40 rounded-xl border border-slate-900 p-5 hover:border-slate-850 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 blur-[30px] rounded-full pointer-events-none" />

                <div className="flex items-center gap-3 border-b border-slate-900 pb-3 mb-3">
                  <div className="p-2 bg-amber-950/40 border border-amber-900/40 rounded-lg text-amber-400 animate-pulse">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 tracking-wider">CERTIFICACIÓN ACTIVAMENTE PROYECTADA</h4>
                    <h3 className="text-sm font-mono font-bold text-white mt-0.5">{cert.name}</h3>
                  </div>
                </div>

                <p className="text-xs font-mono text-slate-400 leading-relaxed text-justify mb-2">
                  {cert.description}
                </p>

                <div className="flex items-center gap-2 mt-4 text-[10px] font-mono text-amber-400 bg-amber-950/40 border border-amber-900/40 px-2 py-1 rounded inline-flex">
                  <BookOpen className="w-3.5 h-3.5" /> status: {cert.status.toUpperCase()}
                </div>
              </motion.div>
            ))}

            {/* Languages Display Container */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-950/40 rounded-xl border border-slate-900 p-5 hover:border-slate-850 transition-all duration-300"
            >
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-900 pb-2 flex items-center justify-between">
                <span>HABILIDADES LINGÜÍSTICAS</span>
                <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
              </h3>

              <div className="space-y-4">
                {OBJECTIVES_AND_CERTS.languages.map((lang, lIdx) => {
                  const isGerman = lang.name === 'Alemán';

                  return (
                    <div key={lIdx} className="font-mono text-xs border-b border-slate-950 pb-3 last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                        <span className="text-slate-200 font-bold flex items-center gap-1.5">
                          {isGerman ? (
                            <Flame className="w-4 h-4 text-orange-500 animate-bounce" />
                          ) : (
                            <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
                          )}
                          {lang.name}
                        </span>
                        
                        <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                          isGerman 
                            ? 'bg-orange-950/50 text-orange-400 border border-orange-900/40' 
                            : 'bg-emerald-950/50 text-emerald-400 border border-emerald-900/30'
                        }`}>
                          {lang.level}
                        </span>
                      </div>

                      <p className="text-slate-400 text-[11px] leading-relaxed text-justify">
                        {lang.context}
                      </p>

                      {isGerman && (
                        <div className="mt-3 p-2 bg-slate-950/60 border border-slate-900 rounded-lg flex items-center justify-between font-mono text-[10px]">
                          <span className="text-slate-500">Racha activa (Duolingo):</span>
                          <span className="text-orange-400 font-bold flex items-center gap-1">
                            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" /> 381 DÍAS ININTERRUMPIDOS
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
