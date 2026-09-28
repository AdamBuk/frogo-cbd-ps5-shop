import React from 'react';
import { MapPin, Phone, Mail, ShieldAlert, Gamepad2, ArrowUp, Flame, Leaf, Wind, Layers, AtSign } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-14 pb-10 border-t border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                <Gamepad2 className="w-5 h-5 text-red-500" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-white uppercase">
                  Frogo <span className="text-red-500">CBD</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5">
                  & PS5 Chill-room • HK
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Výběrové CBD květy, vapes, ručně balené joints a privátní PlayStation 5 herní lounge v centru Hradce Králové. Street & gaming boutique vibe pro ty, co hledají skutečný relax.
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] font-mono font-medium">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
              <span>Vstup 18+ • THC &lt; 1% v souladu s legislativou ČR</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Navigace
            </h4>
            <ul className="space-y-1.5 text-xs font-mono text-zinc-400">
              <li><a href="#o-nas" className="hover:text-white transition-colors">O nás & Lounge</a></li>
              <li><a href="#kategorie" className="hover:text-white transition-colors">Kategorie (Menu)</a></li>
              <li><a href="#ps5-features" className="hover:text-white transition-colors">PS5 Setup & Hry</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Časté otázky (FAQ)</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt & Otevírací doba</a></li>
            </ul>
          </div>

          {/* 4 Menu Categories - NO EMOJIS, Clean Lucide Icons */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Kategorie (Menu)
            </h4>
            <ul className="space-y-1.5 text-xs font-mono text-zinc-400">
              <li>
                <a href="#kategorie" className="hover:text-white transition-colors flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-zinc-500" strokeWidth={1.5} />
                  <span>CBD Květy (Indoor & Greenhouse)</span>
                </a>
              </li>
              <li>
                <a href="#kategorie" className="hover:text-white transition-colors flex items-center gap-2">
                  <Wind className="w-3.5 h-3.5 text-zinc-500" strokeWidth={1.5} />
                  <span>Vapes & Keramické Cartridge</span>
                </a>
              </li>
              <li>
                <a href="#kategorie" className="hover:text-white transition-colors flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-zinc-500" strokeWidth={1.5} />
                  <span>Pre-rolled Joints (100% čisté palice)</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-red-400 transition-colors text-left flex items-center gap-2 text-red-400 font-medium"
                >
                  <Gamepad2 className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
                  <span>PS5 Chill Zone (Rezervace)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Store Info */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Prodejna & Chill Lounge
            </h4>
            <div className="space-y-2 text-xs font-mono text-zinc-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>{STORE_INFO.address.street} ({STORE_INFO.address.landmark}), {STORE_INFO.address.zipCity}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-zinc-400 flex-shrink-0" strokeWidth={1.5} />
                <a href={`tel:${STORE_INFO.contacts.phone}`} className="hover:text-white">
                  {STORE_INFO.contacts.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-zinc-400 flex-shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${STORE_INFO.contacts.email}`} className="hover:text-white">
                  {STORE_INFO.contacts.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <AtSign className="w-4 h-4 text-zinc-400 flex-shrink-0" strokeWidth={1.5} />
                <a href={STORE_INFO.contacts.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {STORE_INFO.contacts.instagram}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer according to Czech Law */}
        <div className="py-5 border-b border-zinc-900 text-[11px] font-mono text-zinc-500 leading-relaxed">
          <p>
            <strong className="text-zinc-400">Zákonné upozornění:</strong> Veškeré konopné sušiny a produkty nabízené ve Frogo CBD Shopu pocházejí z certifikovaných odrůd technického konopí zapsaných ve Společném katalogu odrůd zemědělských rostlin EU a splňují zákonem stanovený limit obsahu THC do 1,0 % v souladu se zákonem č. 167/1998 Sb. o návykových látkách. Produkty jsou určeny ke sběratelským, laboratorním, technickým, kosmetickým nebo aromaterapeutickým účelům. Prodej i vstup do prostor herního loungu a obchodu je přísně omezen na osoby starší 18 let.
          </p>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Frogo CBD Shop & PS5 chill-room. Provozovatel: {STORE_INFO.business.operator} • IČO: {STORE_INFO.business.ico}. Švehlova 633/10, Hradec Králové.
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-zinc-400 font-medium">
              <Flame className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
              <span>Streetwear & Gaming Boutique</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
              title="Zpět nahoru"
              aria-label="Nahoru"
            >
              <ArrowUp className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
