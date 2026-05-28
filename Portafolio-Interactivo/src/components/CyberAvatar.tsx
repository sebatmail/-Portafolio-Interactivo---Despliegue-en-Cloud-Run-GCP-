import React, { useState, useEffect } from 'react';
import { Shield, Cpu, Terminal, RefreshCw, Radio } from 'lucide-react';
import { motion } from 'motion/react';

export default function CyberAvatar() {
  const [isScanning, setIsScanning] = useState(true);
  const [scanStatus, setScanStatus] = useState('STANDBY');
  const [avatarSrc, setAvatarSrc] = useState('/foto.png');
  const [imgFailed, setImgFailed] = useState(false);

  const [logLines, setLogLines] = useState<string[]>([
    'SECURE_BOOT: COMPLETED',
    'FIREWALL: ACTIVE_SHIELD',
    'CONF_INTEGRITY: 100% SECURE',
  ]);

  const scanStates = [
    'SCANNING INTERFACES...',
    'INTEGRITY: 100% SECURE',
    'DNSSEC: ENABLED',
    'ACTIVE_MONITOR: UP',
    'ACCESS_CONTROL: STRICT',
  ];

  useEffect(() => {
    if (!isScanning) return;
    const interval = setInterval(() => {
      const nextIndex = Math.floor(Math.random() * scanStates.length);
      setScanStatus(scanStates[nextIndex]);
      
      // Update small visual console lines
      setLogLines(prev => {
        const next = [...prev.slice(1), `LOG_${Date.now().toString().slice(-4)}: ${scanStates[nextIndex]}`];
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isScanning]);

  const triggerManualDiagnostics = () => {
    setIsScanning(true);
    setScanStatus('DIAGNOSTICS TRIGGERED');
    setLogLines(prev => [...prev.slice(1), 'MANUAL_AUDIT: RUNNING_TESTS...']);
    
    setTimeout(() => {
      setScanStatus('ALL_SYSTEMS_GREEN');
      setLogLines(prev => [...prev.slice(1), 'SYSTEMS_INTEGRITY: SECURE_100%']);
    }, 1500);
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4 select-none">
      {/* Visual Tech Orbit Badge */}
      <div 
        onClick={triggerManualDiagnostics}
        className="group relative cursor-pointer flex items-center justify-center w-40 h-40 rounded-2xl border border-slate-800 bg-slate-950/70 p-1 overflow-hidden transition-all duration-500 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
      >
        {/* Animated Cyber Hologram Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

        {/* Orbit Rotating Rings */}
        <svg className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-500 pointer-events-none" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="44" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-slate-800/80" 
          />
          <motion.circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            className="text-cyan-500/20" 
            strokeDasharray="12 6 3 6"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          />
          <motion.circle 
            cx="50" 
            cy="50" 
            r="35" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="text-purple-500/30" 
            strokeDasharray="4 8"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          />
          <motion.circle 
            cx="50" 
            cy="50" 
            r="46" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.75" 
            className="text-emerald-500/20" 
            strokeDasharray="20 40 10"
            animate={{ rotate: 180 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          />
        </svg>

        {/* Center Cyber Shield Image/Badge */}
        <div 
          className="relative z-10 w-28 h-28 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center overflow-hidden transition-all duration-300"
        >
          {!imgFailed ? (
            <div className="relative w-full h-full">
              <img 
                src={avatarSrc} 
                alt="Sebastián Torres" 
                onError={() => {
                  if (avatarSrc.startsWith('/') || avatarSrc.includes('foto')) {
                    // Si la foto local falla (por ejemplo por estar vacía o no existir), cargamos un retrato profesional premium para asegurar la máxima calidad
                    setAvatarSrc('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=400&q=80');
                  } else {
                    setImgFailed(true);
                  }
                }}
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Degradado HUD inferior en la imagen */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-1.5 left-0 right-0 text-center z-20">
                <span className="inline-block font-mono text-[8px] text-cyan-400 py-0.5 px-1 bg-slate-950/80 border border-cyan-900/60 rounded font-bold uppercase tracking-wider scale-90">
                  SYS_SECURE
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-3 text-center w-full h-full bg-slate-950">
              <Shield className="w-8 h-8 text-cyan-400 animate-pulse mb-1" />
              <span className="block font-mono text-[8px] text-cyan-300/80 uppercase tracking-widest font-bold">SEBASTIÁN T.</span>
            </div>
          )}
        </div>

        {/* Active scan radar sweeper line */}
        <motion.div 
          className="absolute left-0 w-full h-[2px] bg-cyan-500/40 shadow-[0_0_8px_rgba(6,182,212,0.5)] pointer-events-none"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
        />
      </div>

      {/* Cybernetic telemetry display beneath avatar */}
      <div className="mt-3 w-56 text-left border border-slate-800/60 bg-slate-950/60 p-2 rounded-lg font-mono text-[10px]">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-1 mb-1 text-slate-500">
          <span className="flex items-center gap-1 font-semibold text-slate-400">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" /> TELEMETRÍA
          </span>
          <span className="text-xs text-cyan-400 font-bold">ST-v1.3</span>
        </div>
        <div className="space-y-0.5">
          <div className="text-slate-400 truncate">
            <span className="text-purple-400">&gt;</span> STATUS: <span className="text-cyan-400 font-bold">{scanStatus}</span>
          </div>
          {logLines.map((line, idx) => (
            <div key={idx} className="text-slate-500 truncate text-[9px] font-medium leading-tight">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
