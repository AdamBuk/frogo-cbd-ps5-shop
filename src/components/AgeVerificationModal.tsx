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
      const timer = setTimeout(() => setIsOpen(true), 300);
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md bg-zinc-950 rounded-2xl p-6 sm:p-7 border border-zinc-800 text-center text-zinc-100 shadow-2xl"
        >
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-red-500 flex items-center justify-center mx-auto mb-3.5">
            <ShieldAlert className="w-6 h-6 text-red-500" strokeWidth={1.5} />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-medium block mb-1">
            Zákonné ověření věku • 18+
          </span>
          <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
            Vstup pouze pro dospělé
          </h3>

          <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
            V souladu se zákonem č. 167/1998 Sb. o návykových látkách je nákup CBD produktů a vstup do privátní PS5 chill zóny určen výhradně osobám starším 18 let.
          </p>

          {underageWarning ? (
            <div className="mt-5 p-3.5 rounded-xl bg-zinc-900 border border-red-500/40 text-red-300 text-xs text-left space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-red-400">
                <AlertTriangle className="w-4 h-4 text-red-500" strokeWidth={1.5} />
                <span>Přístup odepřen</span>
              </div>
              <p className="text-[11px] text-zinc-400">Tento obsah a prostor jsou určeny pouze plnoletým. Děkujeme za respektování legislativy ČR.</p>
            </div>
          ) : (
            <div className="mt-6 space-y-2.5">
              <button
                onClick={handleConfirmAge}
                className="w-full py-3 px-5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-display font-bold uppercase tracking-wider transition-colors active:scale-95"
              >
                Je mi 18 let a více – Vstoupit
              </button>
              
              <button
                onClick={handleUnderage}
                className="w-full py-2 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-zinc-200 text-xs font-mono font-medium transition-colors border border-zinc-800"
              >
                Ještě mi nebylo 18 let
              </button>
            </div>
          )}

          <div className="mt-5 text-[11px] font-mono text-zinc-500 flex items-center justify-center gap-1.5">
            <Gamepad2 className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
            <span>{STORE_INFO.address.street} (Masarykovo náměstí), Hradec Králové</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
