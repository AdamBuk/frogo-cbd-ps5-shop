import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Menu, X, ShieldAlert, Gamepad2, Sparkles, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nás & Chill Zone', href: '#o-nas' },
    { name: 'Kategorie (Menu)', href: '#kategorie' },
    { name: 'PS5 Room', href: '#ps5-features' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt & Info', href: '#kontakt' },
  ];

  return (
    <>
      {/* Top Black & Red Ticker Bar */}
      <div className="bg-black text-zinc-300 text-xs py-2 px-4 tracking-wide border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
              <span>{STORE_INFO.address.street} ({STORE_INFO.address.landmark}), Hradec Králové</span>
            </span>
            <span className="hidden md:inline-block text-zinc-700">•</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-red-500" />
              <span>Po–Čt: 11–21h | Pá–So: 11–23h | Ne: 11–20h</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-red-950/80 text-red-400 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border border-red-600/40 flex items-center gap-1 shadow-[0_0_10px_rgba(255,20,36,0.3)]">
              <ShieldAlert className="w-3 h-3 text-red-500" /> 18+ Pouze
            </span>
            <a
              href={`tel:${STORE_INFO.contacts.phone}`}
              className="hidden lg:inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-xs font-mono"
            >
              <Phone className="w-3 h-3 text-red-500" />
              <span>{STORE_INFO.contacts.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/95 backdrop-blur-xl border-b border-red-600/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo: Street Brutalist Frogo Red */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,20,36,0.5)] group-hover:scale-105 transition-transform duration-200">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-red-400 transition-colors uppercase">
                    Frogo
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-red-600/20 border border-red-500/50 text-[10px] font-mono font-extrabold text-red-400 tracking-wider">
                    CBD
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5">
                  & PS5 Chill-Room • HK
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase font-mono tracking-wider font-semibold text-zinc-300 hover:text-red-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#kategorie"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-red-500" />
                <span>Produkty</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-display font-extrabold tracking-wider uppercase bg-red-600 hover:bg-red-500 text-white transition-all shadow-[0_0_20px_rgba(255,20,36,0.5)] hover:shadow-[0_0_30px_rgba(255,20,36,0.8)] active:scale-95"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Rezervovat PS5 Room</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              aria-label="Otevřít navigaci"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-zinc-800 bg-zinc-950/98 backdrop-blur-2xl px-4 pt-4 pb-6 shadow-2xl"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-sm font-display font-bold text-zinc-300 hover:text-white hover:bg-red-950/30 hover:border-l-4 hover:border-red-500 transition-all"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full py-3 px-4 rounded-xl text-xs font-display font-bold uppercase tracking-wider bg-red-600 text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,20,36,0.5)]"
                  >
                    <Gamepad2 className="w-4 h-4" />
                    <span>Rezervovat PS5 Room</span>
                  </button>

                  <a
                    href="#kategorie"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-zinc-900 border border-zinc-800 text-zinc-200"
                  >
                    Zobrazit nabídku produktů
                  </a>

                  <a
                    href={`tel:${STORE_INFO.contacts.phone}`}
                    className="w-full text-center py-2 px-4 rounded-xl text-xs font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-500" />
                    <span>{STORE_INFO.contacts.phoneFormatted}</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
