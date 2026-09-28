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
    <section id="faq" className="py-16 md:py-24 bg-zinc-900/30 border-t border-zinc-900 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium uppercase tracking-wider mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
            <span>Časté otázky & Pravidla</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Vše, co potřebuješ <span className="text-zinc-400 font-light">vědět</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-normal">
            Odpovědi na nejčastější dotazy ohledně PS5 chill roomu, CBD produktů a online rezervací.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden transition-colors hover:border-zinc-700"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-4 text-white"
                >
                  <span className="font-display font-bold text-sm sm:text-base uppercase tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white bg-zinc-800' : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-900 font-normal">
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
        <div className="mt-8 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3 text-xs text-zinc-300 font-mono">
          <ShieldAlert className="w-4 h-4 text-red-500 flex-shrink-0" strokeWidth={1.5} />
          <span>
            Máš speciální dotaz nebo chceš uspořádat turnaj pro více lidí? Zavolej nám na <strong>{STORE_INFO.contacts.phoneFormatted}</strong>.
          </span>
        </div>

      </div>
    </section>
  );
};
