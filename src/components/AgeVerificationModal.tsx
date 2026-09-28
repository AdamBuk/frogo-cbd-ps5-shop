import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, AlertTriangle, Gamepad2 } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const AgeVerificationModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [underageWarning, setUnderageWarning] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('frogo_age_verified');
    if (!verified) {
      const timer = setTimeout(() => setIsOpen(true), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConfirmAge = () => {
    localStorage.setItem('frogo_age_verified', 'true');
    setIsOpen(false);
  };

  const handleUnderage = () => {
    setUnderageWarning(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-md bg-zinc-950 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(255,20,36,0.35)] border border-red-600/40 text-center text-zinc-100"
        >
          {/* Top glowing bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 shadow-[0_0_15px_#ff1424]" />

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-red-600/10 border border-red-600/40 text-red-500 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(255,20,36,0.3)]">
            <ShieldAlert className="w-9 h-9 text-red-500 animate-pulse" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block mb-1">
            Zákonné ověření věku • 18+
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Vstup pouze pro dospělé
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
            V souladu se zákonem č. 167/1998 Sb. o návykových látkách je nákup CBD produktů a vstup do privátní PS5 chill zóny určen výhradně osobám starším 18 let.
          </p>

          {underageWarning ? (
            <div className="mt-6 p-4 rounded-2xl bg-red-950/40 border border-red-600/60 text-red-200 text-xs text-left space-y-1">
              <div className="flex items-center gap-2 font-bold text-red-400">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span>Přístup odepřen</span>
              </div>
              <p>Tento obsah je určen pouze plnoletým. Děkujeme za pochopení a respektování legislativy.</p>
            </div>
          ) : (
            <div className="mt-8 space-y-3">
              <button
                onClick={handleConfirmAge}
                className="w-full py-3.5 px-6 rounded-2xl bg-red-600 hover:bg-red-500 text-white text-sm font-display font-extrabold uppercase tracking-wider shadow-[0_0_25px_rgba(255,20,36,0.6)] transition-all duration-200 active:scale-95"
              >
                Je mi 18 let a více – Vstoupit
              </button>
              
              <button
                onClick={handleUnderage}
                className="w-full py-2.5 px-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs font-mono font-medium transition-colors border border-zinc-800"
              >
                Ještě mi nebylo 18 let
              </button>
            </div>
          )}

          <div className="mt-6 text-[11px] font-mono text-zinc-500 flex items-center justify-center gap-1.5">
            <Gamepad2 className="w-3.5 h-3.5 text-red-500" />
            <span>{STORE_INFO.address.street} (Masarykovo náměstí), Hradec Králové</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
