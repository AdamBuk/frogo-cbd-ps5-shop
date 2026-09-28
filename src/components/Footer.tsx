import React from 'react';
import { MapPin, Phone, Mail, ShieldAlert, Gamepad2, ArrowUp, Flame } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-zinc-300 pt-16 pb-12 border-t border-zinc-900 relative overflow-hidden">
      {/* Red ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,20,36,0.4)]">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black tracking-tight text-white uppercase">
                  Frogo <span className="text-red-500">CBD</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase -mt-1">
                  & PS5 Chill-room • HK
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Prémiové CBD květy, vapes, ručně balené joints a privátní PlayStation 5 herní lounge v centru Hradce Králové. Street & gaming vibe pro ty, co hledají skutečný relax.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-600/40 text-red-400 text-xs font-mono font-bold">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
              <span>Vstup 18+ • THC &lt; 1% v souladu s legislativou ČR</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigace
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-mono text-zinc-400">
              <li><a href="#o-nas" className="hover:text-red-400 transition-colors">O nás & Chill Zone</a></li>
              <li><a href="#kategorie" className="hover:text-red-400 transition-colors">Kategorie (Menu)</a></li>
              <li><a href="#ps5-features" className="hover:text-red-400 transition-colors">PS5 Setup & Hry</a></li>
              <li><a href="#faq" className="hover:text-red-400 transition-colors">Časté otázky (FAQ)</a></li>
              <li><a href="#kontakt" className="hover:text-red-400 transition-colors">Kontakt & Otevírací doba</a></li>
            </ul>
          </div>

          {/* 4 Menu Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Kategorie (Menu)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-mono text-zinc-400">
              <li><a href="#kategorie" className="hover:text-red-400 transition-colors">🌿 CBD Květy (Indoor & Greenhouse)</a></li>
              <li><a href="#kategorie" className="hover:text-red-400 transition-colors">💨 Vapes & Keramické Cartridge</a></li>
              <li><a href="#kategorie" className="hover:text-red-400 transition-colors">🚬 Pre-rolled Joints (100% čisté palice)</a></li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-red-400 transition-colors text-left flex items-center gap-1.5 text-red-400 font-bold"
                >
                  <Gamepad2 className="w-3.5 h-3.5" />
                  <span>🎮 PS5 Chill Zone (Rezervace)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Store Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Prodejna & Chill Lounge
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm font-mono text-zinc-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.address.street} ({STORE_INFO.address.landmark}), {STORE_INFO.address.zipCity}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href={`tel:${STORE_INFO.contacts.phone}`} className="hover:text-white">
                  {STORE_INFO.contacts.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href={`mailto:${STORE_INFO.contacts.email}`} className="hover:text-white">
                  {STORE_INFO.contacts.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href={STORE_INFO.contacts.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {STORE_INFO.contacts.instagram}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer according to Czech Law */}
        <div className="py-6 border-b border-zinc-900 text-[11px] font-mono text-zinc-500 leading-relaxed">
          <p>
            <strong className="text-zinc-300">Zákonné upozornění:</strong> Veškeré konopné sušiny a produkty nabízené ve Frogo CBD Shopu pocházejí z certifikovaných odrůd technického konopí zapsaných ve Společném katalogu odrůd zemědělských rostlin EU a splňují zákonem stanovený limit obsahu THC do 1,0 % v souladu se zákonem č. 167/1998 Sb. o návykových látkách. Produkty jsou určeny ke sběratelským, laboratorním, technickým, kosmetickým nebo aromaterapeutickým účelům. Prodej i vstup do prostor herního loungu a obchodu je přísně omezen na osoby starší 18 let.
          </p>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Frogo CBD Shop & PS5 chill-room. Švehlova 633/10, Hradec Králové.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-red-500 font-bold">
              <Flame className="w-3.5 h-3.5 text-red-500" />
              <span>Street & Gaming Vibe in HK</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800"
              title="Zpět nahoru"
              aria-label="Nahoru"
            >
              <ArrowUp className="w-4 h-4 text-red-500" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
