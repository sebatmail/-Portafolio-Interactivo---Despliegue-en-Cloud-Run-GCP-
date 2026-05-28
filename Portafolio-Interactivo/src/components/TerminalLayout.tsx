import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, ShieldAlert, Wifi, Battery, AlertTriangle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TerminalLayoutProps {
  children: React.ReactNode;
}

export default function TerminalLayout({ children }: TerminalLayoutProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [systemTime, setSystemTime] = useState('');
  const [activeTab, setActiveTab] = useState('profile.json');
  const [cpuUsage, setCpuUsage] = useState(12);

  useEffect(() => {
    // Generate system-bound clock
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toISOString().replace('T', ' ').substring(0, 19));
    };
    updateTime();
    const clockInterval = setInterval(updateTime, 1000);

    // Simulate mild realistic CPU load oscillation
    const cpuInterval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 8) + 10); // oscillate between 10% and 18%
    }, 3000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(cpuInterval);
    };
  }, []);

  const handleScrollToId = (id: string, tabName: string) => {
    setActiveTab(tabName);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuTabs = [
    { name: 'profile.json', targetId: 'top' },
    { name: 'experiencia.sh', targetId: 'experiencia' },
    { name: 'proyectos.sec', targetId: 'proyectos' },
    { name: 'habilidades.bin', targetId: 'habilidades' },
    { name: 'educación.log', targetId: 'educacion' },
    { name: 'conectarse.io', targetId: 'contacto' },
  ];

  if (isClosed) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center font-mono select-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-[0_0_50px_rgba(239,68,68,0.06)]"
        >
          <div className="w-16 h-16 bg-red-950/40 border border-red-900/40 rounded-full flex items-center justify-center text-red-400 mx-auto mb-5 animate-pulse">
            <AlertTriangle className="w-8 h-8" />
          </div>
          
          <h2 className="text-red-400 font-bold text-lg mb-2 uppercase">TERMINAL CONSOLE DISCONNECTED</h2>
          <p className="text-slate-500 text-xs leading-relaxed mb-6">
            La sesión ssh con el host <strong className="text-white">momentumspace.cl</strong> ha sido cancelada o suspendida mediante orden local.
          </p>

          <button 
            onClick={() => setIsClosed(false)}
            className="px-6 py-2.5 bg-red-950/60 border border-red-500/40 hover:bg-red-500 hover:text-black hover:border-red-600 transition-all duration-300 text-red-400 font-bold rounded-lg text-xs flex items-center gap-1.5 mx-auto cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" /> REBOOT_CONNECTION
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div id="top" className="w-full max-w-7xl mx-auto my-6 px-4 sm:px-0">
      <div className="terminal-window bg-slate-900/90 border border-slate-800/80 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_75px_rgba(6,182,212,0.02)] transition-shadow duration-500 overflow-hidden backdrop-blur-md">
        
        {/* Top Header Controls Bar */}
        <div className="bg-slate-950/80 px-4 py-3.5 flex items-center justify-between border-b border-slate-800/60 user-select-none">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsClosed(true)}
              className="w-3.5 h-3.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors flex items-center justify-center text-black font-extrabold text-[8px] focus:outline-none"
              title="Cerrar conexión"
            >
              ×
            </button>
            <button 
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors flex items-center justify-center text-black font-extrabold text-[8px] focus:outline-none"
              title={isMinimized ? "Maximizar" : "Minimizar"}
            >
              -
            </button>
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
          </div>

          <div className="font-mono text-[10px] text-slate-500 flex items-center gap-2 tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>storres@momentumspace.cl:</span>
            <span className="text-cyan-400 font-semibold">~/curriculum</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500 hidden sm:flex">
            <Wifi className="w-3.5 h-3.5 text-emerald-400" />
            <span>ping: 12ms</span>
          </div>
        </div>

        {/* Dynamic File Editor Tabs Menu */}
        <div className="bg-slate-950/40 border-b border-slate-900 overflow-x-auto whitespace-nowrap scrollbar-hide flex">
          {menuTabs.map((tab) => {
            const isCurrent = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => handleScrollToId(tab.targetId, tab.name)}
                className={`py-2 px-4 border-r border-slate-900 font-mono text-xs transition-all duration-300 flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                  isCurrent 
                    ? 'bg-slate-900/90 text-cyan-400 font-bold border-b-2 border-b-cyan-500' 
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/30'
                }`}
              >
                <span>{tab.name}</span>
                {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
              </button>
            );
          })}
        </div>

        {/* Main Body content pane */}
        <AnimatePresence initial={false}>
          {!isMinimized && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="terminal-body p-6 sm:p-9 md:p-12"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Console Status Tray Footer */}
        <div className="bg-slate-950/80 border-t border-slate-900 py-2.5 px-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] text-slate-500">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> CONNECTED
            </span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-400" /> CPU: <strong className="text-slate-400">{cpuUsage}%</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" /> SEC: <strong className="text-emerald-400">ACTIVE_COMPLIANT</strong>
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <span>SYS_TIME: {systemTime}</span>
          </div>
        </div>

        {/* Cyberpunk Vim Status Bar */}
        <div className="h-6 bg-cyan-500 flex items-center px-4 justify-between text-[10px] font-mono font-bold text-slate-950 select-none">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-slate-950 rounded-full"></span>NORMAL MODE</span>
            <span>UTF-8</span>
            <span>ES-CL</span>
          </div>
          <div className="flex gap-4">
            <span>Ln 1, Col 1</span>
            <span>100% SECURE</span>
          </div>
        </div>

      </div>
    </div>
  );
}
