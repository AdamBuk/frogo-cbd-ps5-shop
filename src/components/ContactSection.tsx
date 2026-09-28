import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2, Send, Car, Bus, Gamepad2, ShieldAlert } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    inquiryType: 'PS5 Rezervace',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setFormSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-[#08080b] relative overflow-hidden border-t border-zinc-900">
      {/* Background Red Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-600/40 text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,20,36,0.3)]">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>Centrum Hradce Králové</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
            Kontakt <span className="text-red-500 text-glow-red">& Info</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 font-light">
            Navštiv naši prodejnu a private gaming room. Švehlova 633/10 (Masarykovo náměstí).
          </p>
        </div>

        {/* 3 Main Info Cards: Address, Opening Hours, Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* 1. Address Card */}
          <div className="p-7 rounded-3xl bg-zinc-950 border border-zinc-800/90 hover:border-red-600/50 shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,20,36,0.2)]">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block mb-1">
                Lokalita
              </span>
              <h3 className="font-display text-2xl font-black text-white uppercase">
                Adresa prodejny
              </h3>
              
              <div className="mt-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                <p className="text-lg font-display font-bold text-white">
                  {STORE_INFO.address.street}
                </p>
                <p className="text-sm font-mono text-red-400 font-bold mt-0.5">
                  ({STORE_INFO.address.landmark})
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  {STORE_INFO.address.zipCity}, Královéhradecký kraj
                </p>
              </div>

              <p className="text-xs text-zinc-400 mt-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>Pár kroků od Masarykova náměstí a pěší zóny</span>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-red-400 transition-colors uppercase tracking-wider"
              >
                <span>Otevřít v Google Mapách</span>
                <Navigation className="w-3.5 h-3.5 text-red-500" />
              </a>
            </div>
          </div>

          {/* 2. Opening Hours Card */}
          <div className="p-7 rounded-3xl bg-zinc-950 border border-red-600/40 shadow-[0_0_30px_rgba(255,20,36,0.15)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(255,20,36,0.5)]">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block mb-1">
                Časový rozvrh
              </span>
              <h3 className="font-display text-2xl font-black text-white uppercase">
                Otevírací doba
              </h3>
              
              <div className="mt-4 space-y-2 text-sm font-mono">
                <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-300 font-bold">Po–Čt:</span>
                  <span className="text-white font-black text-red-400">11:00 – 21:00</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-red-950/40 border border-red-600/40">
                  <span className="text-white font-bold flex items-center gap-1.5">
                    <span>Pá–So:</span>
                    <span className="text-[10px] uppercase font-bold text-red-400">Late Night</span>
                  </span>
                  <span className="text-white font-black text-red-400">11:00 – 23:00</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-300 font-bold">Ne:</span>
                  <span className="text-white font-black text-red-400">11:00 – 20:00</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>PS5 Chill Room je otevřen v celé provozní době</span>
            </div>
          </div>

          {/* 3. Direct Contacts Card */}
          <div className="p-7 rounded-3xl bg-zinc-950 border border-zinc-800/90 hover:border-red-600/50 shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,20,36,0.2)]">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block mb-1">
                Rychlé spojení
              </span>
              <h3 className="font-display text-2xl font-black text-white uppercase">
                Přímý kontakt
              </h3>
              
              <div className="mt-4 space-y-3">
                <a
                  href={`tel:${STORE_INFO.contacts.phone}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-red-600/50 transition-all text-white"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Telefon & Rezervace</div>
                    <div className="text-sm font-display font-bold">{STORE_INFO.contacts.phoneFormatted}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${STORE_INFO.contacts.email}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-red-600/50 transition-all text-white"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">E-mail</div>
                    <div className="text-sm font-display font-bold">{STORE_INFO.contacts.email}</div>
                  </div>
                </a>

                <a
                  href={STORE_INFO.contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-red-600/50 transition-all text-white"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Instagram</div>
                    <div className="text-sm font-display font-bold">{STORE_INFO.contacts.instagram}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900 text-xs font-mono text-zinc-400">
              Odpovídáme bleskově během otevírací doby.
            </div>
          </div>

        </div>

        {/* Map & Inquiry Form Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map & Directions */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-red-600/40 shadow-2xl h-[400px] sm:h-[450px] bg-zinc-950">
              <iframe
                title="Frogo CBD Shop & PS5 chill-room Švehlova 633/10 Hradec Králové"
                src={STORE_INFO.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[0.92] hue-rotate-[185deg] contrast-[1.2] saturate-[0.3]"
              />

              {/* Floating Dark Card over Map */}
              <div className="absolute top-4 left-4 p-3.5 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-red-600/50 shadow-2xl max-w-xs pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff1424]" />
                  <span className="text-xs font-display font-bold text-white uppercase">Frogo Shop & PS5</span>
                </div>
                <p className="text-[11px] font-mono text-zinc-300 mt-1">Švehlova 633/10 (Masarykovo náměstí)</p>
              </div>
            </div>

            {/* Travel hints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-start gap-3">
                <Bus className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-display font-bold text-white uppercase block">MHD Doprava</span>
                  <span className="text-zinc-400">1–2 minuty chůze ze zastávek Masarykovo náměstí nebo Ulrichovo náměstí.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-start gap-3">
                <Car className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-display font-bold text-white uppercase block">Parkování</span>
                  <span className="text-zinc-400">Parkovací zóny přímo v ulici Švehlova nebo přilehlých ulicích.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry / Fast Message Form */}
          <div className="lg:col-span-5 bg-zinc-950 rounded-3xl p-6 sm:p-8 border border-zinc-800/90 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-600/40 text-red-400 text-xs font-mono font-bold mb-3">
                <Send className="w-3 h-3 text-red-500" />
                <span>Rychlá zpráva na prodejnu</span>
              </div>
              <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
                Máš dotaz k produktům nebo chill-roomu?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Napiš nám a my ti bleskově odpovíme, nebo si otevři plný rezervační formulář.
              </p>

              {formSubmitted ? (
                <div className="mt-8 p-6 rounded-2xl bg-red-950/30 border border-red-600/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-red-500 mx-auto" />
                  <h4 className="font-display text-lg font-bold text-white uppercase">Zpráva odeslána!</h4>
                  <p className="text-xs text-zinc-300">
                    Díky, ozveme se ti co nejdříve na uvedený kontakt.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-mono font-bold text-red-400 underline uppercase"
                  >
                    Odeslat další dotaz
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1">
                      Tvoje jméno *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="např. Jakub Nový"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1">
                      Telefon nebo E-mail *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="+420 777 000 000 nebo email@adresa.cz"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1">
                      Téma zprávy
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="PS5 Rezervace">🎮 Rezervace PS5 Chill Roomu</option>
                      <option value="CBD Květy">🌿 Dotaz na CBD Květy</option>
                      <option value="Vapes & Cartridge">💨 Vapes & Cartridge</option>
                      <option value="Joints">🚬 Pre-rolled Joints</option>
                      <option value="Jiné">❓ Ostatní dotazy</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1">
                      Zpráva
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ahoj, chci se zeptat na volný termín v pátek večer..."
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,20,36,0.5)]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Odeslat zprávu</span>
                    </button>

                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-mono text-xs font-bold uppercase flex items-center justify-center gap-1.5"
                    >
                      <Gamepad2 className="w-3.5 h-3.5 text-red-500" />
                      <span>Plná PS5 Rezervace</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-900 text-[11px] font-mono text-zinc-500 text-center flex items-center justify-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
              <span>Osobní nákup i herna jsou 18+ • Švehlova 633/10, Hradec Králové</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
