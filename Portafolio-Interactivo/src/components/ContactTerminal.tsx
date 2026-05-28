import React, { useState } from 'react';
import { Send, Terminal, Phone, Mail, MapPin, Check, Radio, Copy, CheckSquare, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function ContactTerminal() {
  const [activePortal, setActivePortal] = useState<'standby' | 'form' | 'executing'>('standby');
  const [shellLogs, setShellLogs] = useState<string[]>([]);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Form states
  const [company, setCompany] = useState('');
  const [recruiterName, setRecruiterName] = useState('');
  const [recruiterEmail, setRecruiterEmail] = useState('');
  const [proposal, setProposal] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scripts/CTAs handlers
  const handleContactSebastianScript = () => {
    setActivePortal('executing');
    setShellLogs([
      'USER_CALL: > ./contactar_sebastian.sh --direct-channel=email',
      'RESOLVING RESOLVER: storres@momentumspace.cl',
      'GENERATING SYMMETRIC HANDSHAKE...',
      'ENCRYPTING CONSOLE PACKAGES (RSA 4096-bit)...',
      'SECURE REDIRECT: Triggering native mailto client...'
    ]);

    setTimeout(() => {
      setShellLogs(prev => [...prev, 'REDIRECTING... TRANSMISSION READY']);
      
      const subject = encodeURIComponent('Entrevista / Contacto Profesional - Sebastián Torres');
      const body = encodeURIComponent('Hola Sebastián,\n\nHe visto tu Landing Page interactiva y me gustaría agendar una entrevista o conversar sobre una propuesta informática.\n\nAtentamente,\n[Tu Nombre/Empresa]');
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      
      // Return to standby after redirect trigger
      setTimeout(() => {
        setActivePortal('standby');
        setShellLogs([]);
      }, 1500);
    }, 1800);
  };

  const handleInitInterview = () => {
    setActivePortal('form');
  };

  const copyToClipboardEx = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recruiterEmail || !proposal) return;

    setActivePortal('executing');
    setShellLogs([
      `USER_CALL: > init_interview --company="${company || 'Guest'}" --contact="${recruiterEmail}"`,
      `VALIDATING SECURE METADATA... [PASSED]`,
      `PREPARING LOCAL PARAMS... [OK]`,
      `COMPILING MESSAGE PAYLOAD: "${proposal.substring(0, 30)}..."`,
      'ATTACHING DIGITAL LANDING EN VELOPE...',
      'CONNECTING TO ENCRYPTED GATEWAY TO TRANSMIT...',
      'PACKAGES COMPLETED FOR EMISSION.'
    ]);

    setTimeout(() => {
      setShellLogs(prev => [
        ...prev,
        'GATEWAY_SUCCESS: Lead stored in client state environment!',
        'FINALIZING: Triggering secure email pipeline to pre-populate details...',
      ]);

      setTimeout(() => {
        const formattedSubject = encodeURIComponent(`Iniciación de Entrevista - ${company || 'General'}`);
        const formattedBody = encodeURIComponent(
          `Formulario de Contacto (CV Digital)\n` +
          `===================================\n` +
          `De: ${recruiterName || 'Reclutador/Cliente'}\n` +
          `Empresa/Proyecto: ${company || 'No especificada'}\n` +
          `Email de contacto Directo: ${recruiterEmail}\n\n` +
          `Mensaje / Propuesta de Valor:\n` +
          `${proposal}\n\n` +
          `-----------------------------------\n` +
          `Transmitido de forma segura desde la Landing Page de Sebastián Torres.`
        );

        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${formattedSubject}&body=${formattedBody}`;
        setIsSubmitted(true);
        setActivePortal('standby');
        
        // Reset states
        setCompany('');
        setRecruiterName('');
        setRecruiterEmail('');
        setProposal('');
      }, 1500);

    }, 2200);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      id="contacto" 
      className="h-full flex flex-col mb-0"
    >
      <div className="flex items-center justify-between mb-6 border-b border-slate-800/60 pb-2">
        <h2 className="text-base text-slate-400 font-mono flex items-center gap-2">
          <span className="text-pink-500 font-bold">/*</span>
          <span className="text-slate-300 font-semibold">const</span>
          <span className="text-cyan-400">CanalesDeContacto</span>
          <span className="text-pink-500 font-bold">*/</span>
        </h2>
        <span className="text-xs text-slate-600 font-mono hidden sm:inline">comunicación_encriptada</span>
      </div>

      <div className="grid grid-cols-1 gap-6 flex-1">
        
        {/* Call to Actions interactive commands pane */}
        <div className="flex flex-col justify-between p-6 bg-slate-950/40 rounded-xl border border-slate-900 backdrop-blur-md relative overflow-hidden min-h-[340px]">
          {/* Ambient Purple glow */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 blur-[65px] rounded-full pointer-events-none" />

          <div>
            <h3 className="font-mono text-sm font-bold text-white mb-2 flex items-center gap-1.5 selection:bg-cyan-500/20">
              <Radio className="w-4 h-4 text-purple-400 animate-pulse" /> ACCESO DIRECTO A CONSOLA
            </h3>
            <p className="font-mono text-xs text-slate-400 leading-relaxed mb-6 text-justify">
              Selecciona una de las siguientes opciones de ejecución para establecer una conexión directa. El comando simulará un handshake criptográfico y preparará el canal de manera óptima para coordinar una entrevista.
            </p>

            <div className="space-y-3 font-mono text-xs">
              
              {/* Launcher CTA 1 */}
              <button
                onClick={handleContactSebastianScript}
                disabled={activePortal === 'executing'}
                className="w-full text-left p-3.5 rounded-lg border border-cyan-500/30 bg-cyan-950/15 hover:bg-cyan-950/30 hover:border-cyan-500 text-cyan-400 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center justify-between transition-all duration-300 cursor-pointer font-bold group"
              >
                <span>&gt; ./contactar_sebastian.sh --direct</span>
                <span className="text-[10px] bg-cyan-950/80 border border-cyan-900/60 px-2 py-0.5 rounded text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                  EJECUTAR
                </span>
              </button>

              {/* Launcher CTA 2 */}
              <button
                onClick={handleInitInterview}
                disabled={activePortal === 'form' || activePortal === 'executing'}
                className={`w-full text-left p-3.5 rounded-lg border flex items-center justify-between transition-all duration-300 cursor-pointer font-bold group ${
                  activePortal === 'form'
                    ? 'border-emerald-500/40 bg-emerald-950/10 text-emerald-400 cursor-default'
                    : 'border-purple-500/30 bg-purple-950/10 hover:bg-purple-950/25 hover:border-purple-500 text-purple-400 hover:text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                }`}
              >
                <span>&gt; init_interview --interactive_form</span>
                <span className={`text-[10px] border px-2 py-0.5 rounded transition-colors duration-300 ${
                  activePortal === 'form'
                    ? 'bg-emerald-950 border-emerald-900 text-emerald-400'
                    : 'bg-purple-950/80 border-purple-900/60 text-purple-400 group-hover:bg-purple-500 group-hover:text-black'
                }`}>
                  {activePortal === 'form' ? 'PASO_ACTIVO' : 'LANZAR'}
                </span>
              </button>

            </div>
          </div>

          {/* Core Contacts Copy/Interaction panel */}
          <div className="mt-8 pt-5 border-t border-slate-900/80 font-mono text-xs text-slate-400 space-y-2">
            <div className="flex items-center justify-between p-1.5 hover:bg-slate-900/20 rounded group/item">
              <span className="flex items-center gap-2 text-slate-500">
                <Mail className="w-3.5 h-3.5 text-purple-400" /> EMAIL:
              </span>
              <div className="flex items-center gap-2">
                <span className="text-white hover:text-cyan-400 transition-colors">{PERSONAL_INFO.email}</span>
                <button 
                  onClick={() => copyToClipboardEx(PERSONAL_INFO.email, 'email')}
                  className="p-1 hover:bg-slate-800 rounded text-slate-500 hover:text-slate-200"
                  title="Copiar correo"
                >
                  {copiedText === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-1.5 hover:bg-slate-900/20 rounded group/item">
              <span className="flex items-center gap-2 text-slate-500">
                <Phone className="w-3.5 h-3.5 text-purple-400" /> TELÉFONO:
              </span>
              <div className="flex items-center gap-2">
                <span className="text-white hover:text-cyan-400 transition-colors">{PERSONAL_INFO.phone}</span>
                <button 
                  onClick={() => copyToClipboardEx(PERSONAL_INFO.phone, 'phone')}
                  className="p-1 hover:bg-slate-800 rounded text-slate-500 hover:text-slate-200"
                  title="Copiar teléfono"
                >
                  {copiedText === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-1.5 hover:bg-slate-900/20 rounded">
              <span className="flex items-center gap-2 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-purple-400" /> UBICACIÓN:
              </span>
              <span className="text-slate-300 select-none text-right">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Console logs / Dynamic Interactive Panel */}
        <div className="border border-slate-900 bg-slate-950 rounded-xl p-5 font-mono shadow-[0_10px_45px_rgba(0,0,0,0.7)] relative overflow-hidden flex flex-col justify-between min-h-[340px]">
          
          {/* Ambient background card grid */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />

          {/* Default view before interaction */}
          <AnimatePresence mode="wait">
            
            {activePortal === 'standby' && (
              <motion.div 
                key="standby"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex-1 flex flex-col items-center justify-center text-center p-6"
              >
                <div className="p-4 bg-slate-900/60 rounded-full border border-slate-800 mb-4 animate-pulse">
                  <Terminal className="w-7 h-7 text-cyan-400" />
                </div>
                
                {isSubmitted ? (
                  <>
                    <h3 className="text-emerald-400 font-bold mb-1.5 text-sm uppercase">¡FORMA_TRANSMITIDA!</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-sm">
                      Formulario de entrevista compilado de forma segura. El pipeline mailto ha sido alimentado con los parámetros provistos. Se agradece su interés operático.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-white font-bold mb-1 text-xs tracking-wider uppercase">PORTAL_ESPERA_STANDBY</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-sm">
                      Consola de emisión inactiva. Lanza un script o abre el terminal de contacto interactivo por comandos a la izquierda para iniciar tráfico telemático.
                    </p>
                  </>
                )}
              </motion.div>
            )}

            {/* Direct code script logs pipeline execution */}
            {activePortal === 'executing' && (
              <motion.div 
                key="executing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 font-mono text-[11px] text-slate-400 leading-normal flex flex-col justify-between py-2"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-bold border-b border-slate-900 pb-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>EMISOR DE CANAL SEGURO TR-v2.9</span>
                  </div>

                  <div className="space-y-1.5 max-h-[180px] overflow-y-auto pr-1">
                    {shellLogs.map((log, idx) => {
                      let tagColor = 'text-slate-400';
                      if (log.includes('USER_CALL:')) tagColor = 'text-purple-400 font-semibold';
                      else if (log.includes('SUCCESS') || log.includes('COMPLETE') || log.includes('READY')) tagColor = 'text-emerald-400 font-bold';
                      else if (log.includes('CHECK') || log.includes('OK') || log.includes('VERIFIED')) tagColor = 'text-cyan-400';
                      else if (log.includes('ENCRYPTING')) tagColor = 'text-amber-500';

                      return (
                        <p key={idx} className={`${tagColor} leading-relaxed`}>
                          <span className="text-slate-600 select-none mr-1">&gt;</span> {log}
                        </p>
                      );
                    })}
                  </div>
                </div>

                <div className="text-[10px] text-slate-600 flex items-center justify-between border-t border-slate-900 pt-3 mt-4">
                  <span>SSL_PORT: 443 SECURE</span>
                  <span>LATENCIA_SIMULADA: ~120ms</span>
                </div>
              </motion.div>
            )}

            {/* Interactive Form Display */}
            {activePortal === 'form' && (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleFormSubmit}
                className="flex-1 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-950 pb-2 mb-2 text-slate-400 text-xs">
                    <span className="flex items-center gap-1 text-slate-200">
                      <Terminal className="w-4 h-4 text-emerald-400" /> init_interview Console
                    </span>
                    <button 
                      type="button"
                      onClick={() => setActivePortal('standby')}
                      className="text-slate-600 hover:text-slate-300 text-[10px] uppercase font-bold"
                    >
                      CERRAR_SHELL [X]
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-[10px] text-slate-500 uppercase mb-1">Nombre / Contacto</label>
                      <input 
                        type="text" 
                        required
                        placeholder="ej. Carlos Gómez"
                        value={recruiterName}
                        onChange={e => setRecruiterName(e.target.value)}
                        className="w-full bg-slate-900/60 border border-slate-800 focus:border-cyan-500 rounded p-2 text-slate-200 outline-none text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-500 uppercase mb-1">Empresa / Proyecto</label>
                      <input 
                        type="text" 
                        placeholder="ej. Altoplagas / Momentum"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        className="w-full bg-slate-900/60 border border-slate-800 focus:border-cyan-500 rounded p-2 text-slate-200 outline-none text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-500 uppercase mb-1">Correo Electrónico (Obligatorio)</label>
                    <input 
                      type="email" 
                      required
                      placeholder="ej. reclutador@empresa.com"
                      value={recruiterEmail}
                      onChange={e => setRecruiterEmail(e.target.value)}
                      className="w-full bg-slate-900/60 border border-slate-800 focus:border-cyan-500 rounded p-2 text-slate-200 outline-none text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-500 uppercase mb-1">Propuesta / Mensaje Seguro</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Escribe aquí los detalles del proyecto o agenda de entrevista..."
                      value={proposal}
                      onChange={e => setProposal(e.target.value)}
                      className="w-full bg-slate-900/60 border border-slate-800 focus:border-cyan-500 rounded p-2 text-slate-200 outline-none text-xs font-mono resize-none"
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between">
                  <button 
                    type="button" 
                    onClick={() => setActivePortal('standby')}
                    className="text-[10px] text-slate-500 hover:text-slate-300 cursor-pointer font-bold uppercase"
                  >
                    VOLVER
                  </button>

                  <button 
                    type="submit" 
                    className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald-500 hover:text-black hover:border-emerald-600 transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    TRANSMITIR ACCIÓN <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.form>
            )}

          </AnimatePresence>

        </div>

      </div>

    </motion.section>
  );
}
