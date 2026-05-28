import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../data';
import { Briefcase, Calendar, MapPin, Sparkles, Server, Eye, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ExperienceTimeline() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Extract all tags to offer selective filtering
  const allFilters = ['All', 'Web Security', 'n8n Automation', 'Ollama AI', 'SysAdmin', 'Hardware Support'];

  const filteredExperience = activeFilter === 'All'
    ? EXPERIENCE_DATA
    : EXPERIENCE_DATA.filter(item => item.tags.includes(activeFilter));

  return (
    <section id="experiencia" className="mb-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 border-b border-slate-800/60 pb-2 gap-4">
        <h2 className="text-base text-slate-400 font-mono flex items-center gap-2">
          <span className="text-pink-500 font-bold">/*</span>
          <span className="text-slate-300 font-semibold">let</span>
          <span className="text-cyan-400">ExperienciaProfesional</span>
          <span className="text-pink-500 font-bold">*/</span>
        </h2>
        
        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
          {allFilters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-2 py-1 rounded transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-cyan-950/40 text-cyan-400 border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.1)]'
                  : 'bg-slate-900/40 text-slate-500 border-slate-800/60 hover:text-slate-300 hover:border-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="relative pl-4 border-l-2 border-slate-800/80 space-y-8 ml-2">
        <AnimatePresence mode="popLayout">
          {filteredExperience.map((exp, index) => (
            <motion.div
              layout
              key={exp.id}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 25 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group timeline-item"
            >
              {/* Outer Glowing bullet node */}
              <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-purple-500 group-hover:bg-purple-500 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.6)] transition-all duration-300" />
              
              {/* Box frame */}
              <div className="bg-slate-950/20 rounded-xl border border-slate-900/80 hover:border-slate-800 p-5 p-r-8 hover:bg-slate-950/30 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
                
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/2 blur-[40px] rounded-full pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2.5 mb-3">
                  <div>
                    <h3 className="text-white font-mono font-bold text-base flex items-center gap-1.5">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 mt-1 font-mono text-xs">
                      {exp.url ? (
                        <a 
                          href={exp.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors underline decoration-cyan-500/30 hover:decoration-cyan-400/80 decoration-2 underline-offset-2"
                        >
                          <Server className="w-3.5 h-3.5 text-purple-400" /> {exp.company}
                        </a>
                      ) : (
                        <span className="text-cyan-400 font-medium flex items-center gap-1">
                          <Server className="w-3.5 h-3.5 text-purple-400" /> {exp.company}
                        </span>
                      )}
                      {exp.location && (
                        <span className="text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 bg-slate-900/60 border border-slate-800 px-2.5 py-1 rounded inline-flex items-center gap-1.5 self-start">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> {exp.period}
                  </span>
                </div>

                {/* Persuasive metrics indicators if available */}
                {exp.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4 font-mono">
                    {exp.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-slate-900/40 border border-slate-850 p-2 rounded-lg">
                        <span className="block text-[10px] text-slate-500 uppercase">{metric.label}</span>
                        <span className="text-sm font-bold text-emerald-400">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Subtasks listing */}
                <ul className="space-y-2 mt-4 text-[13px] text-slate-400 list-none font-mono">
                  {exp.tasks.map((task, idx) => {
                    // Highlights certain structural words
                    return (
                      <li key={idx} className="relative pl-5 leading-relaxed text-justify">
                        <span className="absolute left-0 text-emerald-500 font-bold select-none text-[11px]">➜</span>
                        <span>{task}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Tech tags used in this position */}
                <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-slate-900/60">
                  {exp.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800/60 group-hover:border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
