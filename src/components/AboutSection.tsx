import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Tv, Users, Armchair, Flame, Sparkles, Trophy } from 'lucide-react';
import { PS5_FEATURES, GAMES_LIBRARY, STORE_INFO } from '../data/storeData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="o-nas" className="py-20 md:py-32 bg-[#08080b] relative overflow-hidden border-y border-zinc-900">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-600/40 text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(255,20,36,0.3)]"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>Není to jen obchod • Unikátní koncept v HK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05]"
          >
            Víc než jen shop. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600 text-glow-red">
              Tvůj privátní herní chill úkryt.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-light"
          >
            Frogo CBD Shop & PS5 chill-room spojuje prémiové konopné produkty, vapes a pre-rolls s exkluzivním privátním herním loungem. Zastav se na nákup, nebo si zarezervuj místnost, vezmi do ruky DualSense a vypni hlavu.
          </motion.p>
        </div>

        {/* Narrative & Visual Feature Grid */}
        <div id="ps5-features" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Visual Showcase Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-red-600/40 bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80"
                alt="PS5 Chill-room gaming setup Frogo Hradec Králové"
                className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-red-600/40 text-xs font-mono text-white flex items-center gap-2">
                <Trophy className="w-4 h-4 text-red-500" />
                <span className="font-bold">Next-Gen Gaming Lounge</span>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-red-500" />
                  <span>Kompletní soukromí & Červený neonový ambient</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                  Gauč, Soundbar & 4K OLED TV
                </h3>
                <p className="text-xs text-zinc-300">
                  Přijď sólo relaxovat po těžkém dni, nebo slož squad a uspořádejte večerní FC 25 turnaj u vychlazených drinků a výběrového CBD.
                </p>
              </div>
            </div>

            {/* Floating Quick Action Card */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 p-4 rounded-2xl bg-zinc-900 border border-zinc-700 shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-display font-black text-sm">
                PS5
              </div>
              <div>
                <div className="text-xs font-display font-bold text-white uppercase">Privátní sloty od 250 Kč</div>
                <div className="text-[10px] font-mono text-red-400">Welcome drink v ceně 2h slotu</div>
              </div>
            </div>
          </motion.div>

          {/* Copy & 3 Core Chill Zone Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Zastav se. Zahraj si. <br />
                <span className="text-red-500">Zažij ultimátní reset.</span>
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed">
                Většina CBD shopů ti prodá balíček u pultu a pošle tě domů. Ve Frogo jsme to obrátili vzhůru nohama. Vytvořili jsme zázemí, kde můžeš zpomalit, vychutnat si atmosféru a bavit se.
              </p>
            </div>

            {/* Features check items */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-red-600/40 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Nabitá knihovna top PlayStation 5 her</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Okamžitě připravené pecky: <strong>EA Sports FC 25</strong>, <strong>Tekken 8</strong>, <strong>Mortal Kombat 1</strong>, <strong>Gran Turismo 7</strong>, <strong>GTA V</strong> a další.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-red-600/40 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5">
                  <Armchair className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Soukromí pro tebe a až 3 další kámoše</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Žádná veřejná herna plná křiku. Místnost je plně oddělená a rezervovaná pouze pro vaši skupinu se 4x DualSense ovladači.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-red-600/40 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Prémiový CBD bar & Osvěžení</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Doplň herní session o prémiové CBD květy, cartridge, pre-rolls nebo chlazené nápoje přímo z našeho sortimentu na prodejně.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(255,20,36,0.6)] flex items-center justify-center gap-2"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Zarezervovat PS5 Room nyní</span>
              </button>

              <span className="text-xs font-mono text-zinc-400 text-center sm:text-left">
                Přímo na adrese <strong>{STORE_INFO.address.street}</strong>
              </span>
            </div>
          </motion.div>

        </div>

        {/* 4 PS5 & Shop Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {PS5_FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-red-600/60 shadow-lg hover:shadow-[0_0_30px_rgba(255,20,36,0.25)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,20,36,0.2)]">
                {idx === 0 && <Gamepad2 className="w-6 h-6" />}
                {idx === 1 && <Tv className="w-6 h-6" />}
                {idx === 2 && <Users className="w-6 h-6" />}
                {idx === 3 && <Armchair className="w-6 h-6" />}
              </div>

              <h4 className="font-display text-lg font-bold text-white group-hover:text-red-400 transition-colors uppercase tracking-tight">
                {feat.title}
              </h4>
              <p className="text-xs font-mono font-semibold text-red-400/90 mt-1 uppercase tracking-wider">
                {feat.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Games Library Ribbon */}
        <div className="mt-12 p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
            Hry připravené k okamžitému hraní na PS5:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {GAMES_LIBRARY.map((game) => (
              <span
                key={game}
                className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 font-bold hover:border-red-600/60 hover:text-white transition-colors"
              >
                🎮 {game}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
