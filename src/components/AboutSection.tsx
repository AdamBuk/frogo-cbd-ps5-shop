import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Tv, Users, Armchair, Flame, Sparkles, Trophy, Store } from 'lucide-react';
import { PS5_FEATURES, GAMES_LIBRARY, STORE_INFO, REAL_IMAGES } from '../data/storeData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<'lounge' | 'interior'>('lounge');

  return (
    <section id="o-nas" className="py-16 md:py-24 bg-zinc-900/40 relative overflow-hidden border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium uppercase tracking-wider mb-3"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
            <span>Není to jen obchod • Herní & Street Lounge</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.08]"
          >
            Víc než jen shop. <br />
            <span className="text-zinc-200">
              Tvůj privátní herní chill úkryt.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-3.5 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal"
          >
            Frogo CBD Shop & PS5 chill-room spojuje výběrové konopné produkty, vapes a pre-rolls s exkluzivním privátním herním loungem. Zastav se na nákup, nebo si zarezervuj místnost, vezmi do ruky DualSense a vypni hlavu.
          </motion.p>
        </div>

        {/* Narrative & Visual Feature Grid */}
        <div id="ps5-features" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Visual Showcase Side featuring Real Photos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-xl group">
              
              {/* Photo Display */}
              <div className="relative h-[400px] w-full overflow-hidden bg-zinc-950">
                <AnimatePresence mode="wait">
                  {selectedPhoto === 'lounge' ? (
                    <motion.img
                      key="lounge-pic"
                      src={REAL_IMAGES.ps5RoomAmbient}
                      alt="Reálná PS5 chill zóna Frogo Hradec Králové"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <motion.img
                      key="interior-pic"
                      src={REAL_IMAGES.storeInterior}
                      alt="Reálný interiér prodejny Frogo CBD Shop Hradec Králové"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
              </div>

              {/* Status Badge & Photo Switcher */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-zinc-800">
                  <button
                    onClick={() => setSelectedPhoto('lounge')}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-mono transition-colors ${
                      selectedPhoto === 'lounge'
                        ? 'bg-zinc-800 text-white font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Gamepad2 className="w-3 h-3 text-red-500" strokeWidth={1.5} />
                    <span>Lounge Setup</span>
                  </button>
                  <button
                    onClick={() => setSelectedPhoto('interior')}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-mono transition-colors ${
                      selectedPhoto === 'interior'
                        ? 'bg-zinc-800 text-white font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Store className="w-3 h-3 text-red-500" strokeWidth={1.5} />
                    <span>Interiér Shopu</span>
                  </button>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-[10px] font-mono text-zinc-300 flex items-center gap-1.5">
                  <Trophy className="w-3 h-3 text-red-500" strokeWidth={1.5} />
                  <span>Reálné prostory</span>
                </div>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
                  <span>Kompletní soukromí & Červený ambient</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">
                  {selectedPhoto === 'lounge' ? 'PlayStation 5 • Ztlumená světla • TV Setup' : 'Prostorná prodejna & Zázemí lounge'}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {selectedPhoto === 'lounge'
                    ? 'Oddělená privátní místnost za závěsem pro tebe a tvou partu. 4K OLED, DualSense a absolutní klid.'
                    : 'Příjemné čisté prostředí v centru města. Výdejní pult, skleněná vitrína s příslušenstvím a přátelský personál.'}
                </p>
              </div>
            </div>

            {/* Floating Quick Action Card */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 shadow-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center font-display font-bold text-xs">
                PS5
              </div>
              <div>
                <div className="text-xs font-display font-bold text-white uppercase">Privátní sloty od 250 Kč</div>
                <div className="text-[11px] font-mono text-zinc-400">Platba probíhá až na místě</div>
              </div>
            </div>
          </motion.div>

          {/* Copy & 3 Core Chill Zone Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="space-y-2.5">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                Zastav se. Zahraj si. <br />
                <span className="text-red-500">Zažij skutečný reset.</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Většina CBD shopů ti prodá balíček u pultu a pošle tě domů. Ve Frogo jsme to obrátili. Vytvořili jsme privátní prostor, kde můžeš zpomalit, vychutnat si atmosféru a bavit se s přáteli.
              </p>
            </div>

            {/* Features check items */}
            <div className="space-y-2.5 pt-1">
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300 flex-shrink-0 mt-0.5">
                  <Gamepad2 className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Nabitá knihovna top PlayStation 5 her</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    Okamžitě připravené pecky: <strong>EA Sports FC 25</strong>, <strong>Tekken 8</strong>, <strong>Mortal Kombat 1</strong>, <strong>Gran Turismo 7</strong>, <strong>GTA V</strong> a další.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300 flex-shrink-0 mt-0.5">
                  <Armchair className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Soukromí pro tebe a až 3 další hosty</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    Žádná veřejná herna plná křiku. Místnost je plně oddělená a rezervovaná pouze pro vaši skupinu se 4x DualSense ovladači.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300 flex-shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Prémiový CBD bar & Osvěžení</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                    Doplň session o prémiové CBD květy, cartridge, pre-rolls nebo chlazené nápoje přímo z našeho sortimentu na prodejně.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <Gamepad2 className="w-4 h-4" strokeWidth={1.5} />
                <span>Zarezervovat PS5 Room</span>
              </button>

              <span className="text-xs font-mono text-zinc-400 text-center sm:text-left">
                Platba až na místě • <strong>{STORE_INFO.address.street}</strong>
              </span>
            </div>
          </motion.div>

        </div>

        {/* 4 PS5 & Shop Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {PS5_FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/90 hover:border-zinc-700 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-3.5 group-hover:text-red-500 transition-colors">
                {idx === 0 && <Gamepad2 className="w-5 h-5" strokeWidth={1.5} />}
                {idx === 1 && <Tv className="w-5 h-5" strokeWidth={1.5} />}
                {idx === 2 && <Users className="w-5 h-5" strokeWidth={1.5} />}
                {idx === 3 && <Armchair className="w-5 h-5" strokeWidth={1.5} />}
              </div>

              <h4 className="font-display text-base font-bold text-white group-hover:text-red-400 transition-colors uppercase tracking-tight">
                {feat.title}
              </h4>
              <p className="text-xs font-mono font-medium text-red-500 mt-0.5 uppercase tracking-wider">
                {feat.subtitle}
              </p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Games Library Ribbon - NO EMOJIS, Professional Lucide Iconography */}
        <div className="mt-10 p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3 font-medium">
            Hry připravené k okamžitému hraní na PS5:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {GAMES_LIBRARY.map((game) => (
              <span
                key={game}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 font-medium hover:border-zinc-700 hover:text-white transition-colors"
              >
                <Gamepad2 className="w-3 h-3 text-red-500" strokeWidth={1.5} />
                <span>{game}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
