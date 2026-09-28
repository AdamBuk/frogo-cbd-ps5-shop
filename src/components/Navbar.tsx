import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Menu, X, ShieldAlert, Gamepad2, ShoppingBag, Clock } from 'lucide-react';
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
    { name: 'O nás & Lounge', href: '#o-nas' },
    { name: 'Kategorie (Menu)', href: '#kategorie' },
    { name: 'PS5 Room', href: '#ps5-features' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt & Info', href: '#kontakt' },
  ];

  return (
    <>
      {/* Top Streetwear Utility Bar */}
      <div className="bg-zinc-950 text-zinc-400 text-xs py-2 px-4 border-b border-zinc-800/60 font-mono tracking-tight">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" strokeWidth={1.5} />
              <span>{STORE_INFO.address.street} ({STORE_INFO.address.landmark}), Hradec Králové</span>
            </span>
            <span className="hidden md:inline-block text-zinc-700">•</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
              <span>Po–Čt: 11–21h | Pá–So: 11–23h | Ne: 11–20h</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-zinc-900 text-zinc-300 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium border border-zinc-800 flex items-center gap-1.5">
              <ShieldAlert className="w-3 h-3 text-red-500" strokeWidth={1.5} /> Vstup 18+
            </span>
            <a
              href={`tel:${STORE_INFO.contacts.phone}`}
              className="hidden lg:inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-xs font-mono"
            >
              <Phone className="w-3 h-3 text-zinc-400" strokeWidth={1.5} />
              <span>{STORE_INFO.contacts.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 shadow-lg py-3'
            : 'bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-900 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo: Refined Streetwear Boutique */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-red-600/50 flex items-center justify-center text-white transition-colors duration-200">
                <Gamepad2 className="w-5 h-5 text-red-500" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-red-400 transition-colors uppercase">
                    Frogo
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold text-red-500 tracking-wider">
                    CBD
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5">
                  & PS5 Chill-Room • HK
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase font-mono tracking-wider font-medium text-zinc-400 hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href="#kategorie"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium tracking-wide uppercase bg-zinc-900 hover:bg-zinc-850 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
                <span>Produkty</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-display font-bold tracking-wider uppercase bg-red-600 hover:bg-red-700 text-white transition-colors shadow-sm active:scale-95"
              >
                <Gamepad2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>Rezervovat PS5 Room</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              aria-label="Otevřít navigaci"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
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
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-zinc-800 bg-zinc-950/98 px-4 pt-4 pb-6"
            >
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-3 mt-2 border-t border-zinc-800 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full py-2.5 px-4 rounded-lg text-xs font-display font-bold uppercase tracking-wider bg-red-600 text-white flex items-center justify-center gap-2"
                  >
                    <Gamepad2 className="w-4 h-4" strokeWidth={1.5} />
                    <span>Rezervovat PS5 Room</span>
                  </button>

                  <a
                    href="#kategorie"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2 px-4 rounded-lg text-xs font-mono font-medium tracking-wide uppercase bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    Zobrazit nabídku produktů
                  </a>

                  <a
                    href={`tel:${STORE_INFO.contacts.phone}`}
                    className="w-full text-center py-2 px-4 rounded-lg text-xs font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
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
