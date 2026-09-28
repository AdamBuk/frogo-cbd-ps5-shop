import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';
import { FAQS, STORE_INFO } from '../data/storeData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#050507] border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-600/40 text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,20,36,0.3)]">
            <HelpCircle className="w-3.5 h-3.5 text-red-500" />
            <span>Časté otázky & Pravidla</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Vše, co potřebuješ <span className="text-red-500">vědět</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 font-light">
            Odpovědi na nejčastější dotazy ohledně PS5 chill roomu, CBD produktů a vstupu.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-zinc-950 rounded-2xl border border-zinc-800/90 shadow-md overflow-hidden transition-all duration-200 hover:border-red-600/50"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 text-white"
                >
                  <span className="font-display font-bold text-base sm:text-lg uppercase tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-red-600 border-red-500 text-white' : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-900 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Reassurance pill */}
        <div className="mt-8 p-4 rounded-2xl bg-zinc-900/60 border border-red-600/30 flex items-center gap-3 text-xs text-zinc-300 font-mono">
          <ShieldAlert className="w-5 h-5 text-red-500 flex-shrink-0" />
          <span>
            Máš speciální dotaz nebo chceš uspořádat soukromý turnaj pro více lidí? Zavolej nám na <strong>{STORE_INFO.contacts.phoneFormatted}</strong> nebo napiš zprávu.
          </span>
        </div>

      </div>
    </section>
  );
};
