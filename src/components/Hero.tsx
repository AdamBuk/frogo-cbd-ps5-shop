import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Gamepad2, Sparkles, MapPin, ShieldAlert, Flame, ChevronRight, Zap } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 bg-[#050507]">
      {/* Background Cyber Red Ambient Lights & Neon Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-96 h-96 bg-red-800/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top subtle red neon line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Brutalist Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Top Tag Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/50 text-red-400 text-xs font-mono font-bold tracking-wider shadow-[0_0_12px_rgba(255,20,36,0.35)]">
                <ShieldAlert className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span>VSTUP 18+</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>{STORE_INFO.address.street} • Masarykovo náměstí</span>
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-xs font-mono">
                <Zap className="w-3 h-3 text-red-400" />
                <span>Private Gaming Room</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.02]">
                Frogo <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600 text-glow-red">CBD Shop</span>
              </h1>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-12 bg-red-600 shadow-[0_0_8px_#ff1424]" />
                <span className="font-mono text-sm sm:text-base font-bold text-red-400 uppercase tracking-widest">
                  & PS5 Chill-Room • Hradec Králové
                </span>
              </div>
              <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl pt-1">
                {STORE_INFO.tagline}
              </p>
            </div>

            {/* Quick Micro Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-zinc-300 font-mono">
              <div className="p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 flex items-center gap-3 hover:border-red-600/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-400">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">PS5 Pro Zone</div>
                  <div className="text-[11px] text-zinc-400">4K 120Hz & 4 Hráči</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 flex items-center gap-3 hover:border-red-600/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-400">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Květy, Vapes & Joints</div>
                  <div className="text-[11px] text-zinc-400">THC &lt; 1% Legální ČR</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 flex items-center gap-3 hover:border-red-600/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Late-Night Chill</div>
                  <div className="text-[11px] text-zinc-400">Pá-So až do 23:00</div>
                </div>
              </div>
            </div>

            {/* CTAs matching User Prompt: "Produkty" and "Rezervovat PS5 Room" */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#kategorie"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-display font-extrabold tracking-wider uppercase bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-red-500 transition-all duration-300 group shadow-lg"
              >
                <span>Produkty</span>
                <ArrowDown className="w-4 h-4 text-red-500 group-hover:translate-y-1 transition-transform" />
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-display font-extrabold tracking-wider uppercase bg-red-600 hover:bg-red-500 text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,20,36,0.6)] hover:shadow-[0_0_40px_rgba(255,20,36,0.85)] group active:scale-95"
              >
                <Gamepad2 className="w-5 h-5 text-white animate-pulse" />
                <span>Rezervovat PS5 Room</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Address micro-indicator */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>Prodejna & Chill Lounge:</span>
              <strong className="text-white font-bold">{STORE_INFO.address.street} (Masarykovo náměstí), Hradec Králové</strong>
            </div>
          </motion.div>

          {/* Right Column: Edgy Gaming Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glowing Red Background Halo */}
              <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-[2.5rem] transform -rotate-1" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl border border-red-600/40 bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                <img
                  src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&q=80"
                  alt="Frogo PS5 Chill-room gaming lounge Hradec Králové"
                  className="w-full h-[460px] sm:h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Red Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                {/* Overlay Card on Top-Left */}
                <div className="absolute top-4 left-4 p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-red-600/40 text-xs font-mono flex items-center gap-2 shadow-[0_0_15px_rgba(255,20,36,0.3)]">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-bold text-white uppercase tracking-wider">LIVE STATUS: OTEVŘENO</span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 text-white shadow-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Gamepad2 className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                        Private Chill-Room
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-extrabold bg-red-600 text-white shadow-[0_0_10px_rgba(255,20,36,0.6)]">
                      4K 120Hz OLED
                    </span>
                  </div>
                  
                  <h3 className="font-display text-lg font-bold text-white tracking-tight">
                    PlayStation 5 • 4x DualSense • VIP Lounge
                  </h3>
                  
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    FC 25, Tekken 8, GTA V, MK1 a prémiové CBD občerstvení přímo na Masarykově náměstí.
                  </p>

                  <div className="mt-3 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">Hodinové i celovečerní sloty</span>
                    <button
                      onClick={onOpenBooking}
                      className="text-xs font-display font-bold uppercase text-red-400 hover:text-red-300 underline tracking-wider"
                    >
                      Zarezervovat slot &rarr;
                    </button>
                  </div>
                </div>

              </div>

              {/* Floating Badge Top-Right: 18+ Stamp */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-3 -right-3 sm:-right-5 p-3.5 rounded-2xl bg-zinc-950 border border-red-600/60 shadow-[0_0_25px_rgba(255,20,36,0.4)] flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-display font-black text-sm">
                  18+
                </div>
                <div>
                  <div className="text-xs font-display font-bold text-white uppercase">Vstup Pouze 18+</div>
                  <div className="text-[10px] font-mono text-zinc-400">Zákonný limit THC &lt; 1%</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
