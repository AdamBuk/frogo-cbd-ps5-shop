import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Gamepad2, Sparkles, MapPin, ShieldAlert, Flame, ChevronRight, Zap, Store } from 'lucide-react';
import { STORE_INFO, REAL_IMAGES } from '../data/storeData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'store' | 'ps5'>('store');

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-zinc-950">
      {/* Background subtle boutique grid pattern */}
      <div className="absolute inset-0 bg-boutique-grid opacity-60 pointer-events-none" />
      
      {/* Subtle architectural gradient vignette */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-zinc-800/10 to-transparent blur-3xl pointer-events-none" />

      {/* Top subtle hairline divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Streetwear & Gaming Boutique Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Tag Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-red-400 text-xs font-mono font-medium tracking-wide">
                <ShieldAlert className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
                <span>VSTUP 18+</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
                <span>{STORE_INFO.address.street} • Masarykovo náměstí</span>
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
                <Zap className="w-3 h-3 text-zinc-400" strokeWidth={1.5} />
                <span>Private Gaming Room</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                Frogo <span className="text-white">CBD Shop</span>
              </h1>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-10 bg-red-600" />
                <span className="font-mono text-sm sm:text-base font-semibold text-red-500 uppercase tracking-widest">
                  & PS5 Chill-Room • Hradec Králové
                </span>
              </div>
              <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl pt-1">
                {STORE_INFO.tagline}
              </p>
            </div>

            {/* Quick Micro Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-zinc-300 font-mono">
              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300">
                    <Gamepad2 className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-bold text-white text-xs">PS5 Pro Zone</span>
                </div>
                <div className="text-[11px] text-zinc-400">4K 120Hz & 4 Hráči</div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300">
                    <Flame className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-bold text-white text-xs">Květy, Vapes & Joints</span>
                </div>
                <div className="text-[11px] text-zinc-400">THC &lt; 1% Legální v ČR</div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-zinc-300">
                    <Sparkles className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-bold text-white text-xs">Late-Night Chill</span>
                </div>
                <div className="text-[11px] text-zinc-400">Pá–So otevřeno do 23h</div>
              </div>
            </div>

            {/* CTAs: "Produkty" and "Rezervovat PS5 Room" */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#kategorie"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <span>Produkty</span>
                <ArrowDown className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-y-0.5 transition-transform" strokeWidth={1.5} />
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-xs font-display font-bold tracking-wider uppercase bg-red-600 hover:bg-red-700 text-white transition-colors group shadow-sm active:scale-95"
              >
                <Gamepad2 className="w-4 h-4 text-white" strokeWidth={1.5} />
                <span>Rezervovat PS5 Room</span>
                <ChevronRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
              </button>
            </div>

            {/* Address indicator */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Prodejna & Chill Lounge:</span>
              <strong className="text-zinc-200 font-medium">{STORE_INFO.address.street} (Masarykovo náměstí), Hradec Králové</strong>
            </div>
          </motion.div>

          {/* Right Column: Real Storefront & Gaming Showcase with Interactive Switcher */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame Container */}
              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
                
                {/* Active Photo with Animation */}
                <div className="relative h-[440px] sm:h-[480px] w-full bg-zinc-950 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {activeTab === 'store' ? (
                      <motion.img
                        key="store-ext"
                        src={REAL_IMAGES.storeExterior}
                        alt="Frogo CBD Shop kamenná prodejna Švehlova Hradec Králové"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <motion.img
                        key="ps5-rm"
                        src={REAL_IMAGES.ps5Room}
                        alt="Frogo PS5 Chill-room reálný gaming setup Hradec Králové"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover object-center"
                      />
                    )}
                  </AnimatePresence>

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent pointer-events-none" />
                </div>

                {/* Top Interactive Switcher & Status Badge */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-zinc-800">
                    <button
                      onClick={() => setActiveTab('store')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                        activeTab === 'store'
                          ? 'bg-zinc-800 text-white font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Store className="w-3 h-3 text-red-500" strokeWidth={1.5} />
                      <span>Prodejna HK</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('ps5')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                        activeTab === 'ps5'
                          ? 'bg-zinc-800 text-white font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Gamepad2 className="w-3 h-3 text-red-500" strokeWidth={1.5} />
                      <span>PS5 Lounge</span>
                    </button>
                  </div>

                  <div className="px-2.5 py-1 rounded-lg bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-[10px] font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="font-medium text-zinc-300 uppercase">REÁLNÉ FOTO</span>
                  </div>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-4 rounded-xl bg-zinc-950/95 backdrop-blur-md border border-zinc-800 text-white">
                  {activeTab === 'store' ? (
                    <>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <Store className="w-4 h-4 text-red-500" strokeWidth={1.5} />
                          <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-bold">
                            Kamenná Prodejna
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-300">
                          Centrum HK
                        </span>
                      </div>
                      
                      <h3 className="font-display text-base font-bold text-white tracking-tight">
                        Švehlova 633/10 • Masarykovo náměstí
                      </h3>
                      
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        Prémiový sortiment CBD květů, vaporizérů, pre-rolls a zázemí privátního herního lounge.
                      </p>

                      <div className="mt-2.5 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-zinc-400">Po–Čt do 21h • Pá–So do 23h</span>
                        <a
                          href="#kontakt"
                          className="text-xs font-display font-semibold uppercase text-red-400 hover:text-red-300 transition-colors"
                        >
                          Zobrazit mapu &rarr;
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <Gamepad2 className="w-4 h-4 text-red-500" strokeWidth={1.5} />
                          <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-bold">
                            Private Chill-Room
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-300">
                          Reálný Setup
                        </span>
                      </div>
                      
                      <h3 className="font-display text-base font-bold text-white tracking-tight">
                        PlayStation 5 • Ambientní Lounge • Soundbar
                      </h3>
                      
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        FC 25, Tekken 8, GTA V a občerstvení přímo v soukromé místnosti v centru Hradce.
                      </p>

                      <div className="mt-2.5 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-zinc-400">Platba až na místě (od 250 Kč)</span>
                        <button
                          onClick={onOpenBooking}
                          className="text-xs font-display font-semibold uppercase text-red-400 hover:text-red-300 transition-colors"
                        >
                          Rezervovat slot &rarr;
                        </button>
                      </div>
                    </>
                  )}
                </div>

              </div>

              {/* Floating Badge Top-Right: 18+ Stamp */}
              <div className="absolute -top-3 -right-3 p-3 rounded-xl bg-zinc-950 border border-zinc-800 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center font-display font-bold text-xs">
                  18+
                </div>
                <div>
                  <div className="text-[11px] font-display font-bold text-zinc-200 uppercase">Pouze 18+</div>
                  <div className="text-[10px] font-mono text-zinc-400">THC &lt; 1% Zákonný limit</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
