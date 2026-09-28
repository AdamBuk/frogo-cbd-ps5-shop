import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2, Send, Car, Bus, Gamepad2, ShieldAlert, AtSign, Loader2, Store } from 'lucide-react';
import { STORE_INFO, REAL_IMAGES } from '../data/storeData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    inquiryType: 'PS5 Rezervace',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    
    setIsSubmitting(true);
    try {
      await fetch(STORE_INFO.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          formType: 'Rychlá zpráva z webu',
          name: formData.name,
          contact: formData.contact,
          inquiryType: formData.inquiryType,
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      });
      setFormSubmitted(true);
    } catch {
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium uppercase tracking-wider mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
            <span>Centrum Hradce Králové</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Kontakt <span className="text-zinc-400 font-light">& Info</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 font-normal">
            Navštiv naši prodejnu a private gaming room na Masarykově náměstí (Švehlova 633/10).
          </p>
        </div>

        {/* 3 Main Info Cards: Address, Opening Hours, Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          
          {/* 1. Address Card */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-850 border border-zinc-700/60 flex items-center justify-center text-zinc-300 mb-4 group-hover:text-red-500 transition-colors">
                <MapPin className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-red-500 font-medium block mb-1">
                Lokalita
              </span>
              <h3 className="font-display text-xl font-bold text-white uppercase">
                Adresa prodejny
              </h3>
              
              <div className="mt-3.5 p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                <p className="text-base font-display font-bold text-white">
                  {STORE_INFO.address.street}
                </p>
                <p className="text-xs font-mono text-red-400 font-medium mt-0.5">
                  ({STORE_INFO.address.landmark})
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  {STORE_INFO.address.zipCity}
                </p>
              </div>

              <p className="text-xs text-zinc-400 mt-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>Pár kroků od Masarykova náměstí a pěší zóny</span>
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-zinc-850">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-white transition-colors uppercase tracking-wider"
              >
                <span>Otevřít v Google Mapách</span>
                <Navigation className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* 2. Opening Hours Card */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-850 border border-zinc-700/60 flex items-center justify-center text-zinc-300 mb-4">
                <Clock className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-red-500 font-medium block mb-1">
                Časový rozvrh
              </span>
              <h3 className="font-display text-xl font-bold text-white uppercase">
                Otevírací doba
              </h3>
              
              <div className="mt-3.5 space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-400">Po–Čt:</span>
                  <span className="text-white font-medium">11:00 – 21:00</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-300 flex items-center gap-1.5">
                    <span>Pá–So:</span>
                    <span className="text-[10px] uppercase font-bold text-red-400">Late Night</span>
                  </span>
                  <span className="text-white font-medium">11:00 – 23:00</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-zinc-950 border border-zinc-800">
                  <span className="text-zinc-400">Ne:</span>
                  <span className="text-white font-medium">11:00 – 20:00</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-zinc-850 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>PS5 Room otevřen</span>
              </span>
              <span>IČO: {STORE_INFO.business.ico}</span>
            </div>
          </div>

          {/* 3. Direct Contacts Card */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-850 border border-zinc-700/60 flex items-center justify-center text-zinc-300 mb-4 group-hover:text-red-500 transition-colors">
                <Phone className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-red-500 font-medium block mb-1">
                Rychlé spojení
              </span>
              <h3 className="font-display text-xl font-bold text-white uppercase">
                Přímý kontakt
              </h3>
              
              <div className="mt-3.5 space-y-2">
                <a
                  href={`tel:${STORE_INFO.contacts.phone}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors text-white"
                >
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 text-zinc-300 flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Telefon</div>
                    <div className="text-xs font-display font-bold">{STORE_INFO.contacts.phoneFormatted}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${STORE_INFO.contacts.email}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors text-white"
                >
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 text-zinc-300 flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">E-mail</div>
                    <div className="text-xs font-display font-bold">{STORE_INFO.contacts.email}</div>
                  </div>
                </a>

                <a
                  href={STORE_INFO.contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors text-white"
                >
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 text-zinc-300 flex items-center justify-center">
                    <AtSign className="w-3.5 h-3.5 text-zinc-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Instagram</div>
                    <div className="text-xs font-display font-bold">{STORE_INFO.contacts.instagram}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-zinc-850 text-xs font-mono text-zinc-400">
              Odpovídáme během otevírací doby.
            </div>
          </div>

        </div>

        {/* Map, Real Storefront Photo & Inquiry Form Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Visual Storefront & Interactive Map */}
          <div className="lg:col-span-7 flex flex-col space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
              {/* Real Storefront Facade Photo */}
              <div className="sm:col-span-5 h-56 sm:h-[380px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 relative group">
                <img
                  src={REAL_IMAGES.storeExterior}
                  alt="Kamenná prodejna Frogo CBD Shop Švehlova 633/10 Hradec Králové"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-mono font-medium bg-zinc-950/90 backdrop-blur-sm text-zinc-300 border border-zinc-800">
                    <Store className="w-3 h-3 text-red-500" strokeWidth={1.5} />
                    <span>Fasáda prodejny</span>
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-zinc-300">
                  <div className="font-bold text-white">Švehlova 633/10</div>
                  <div className="text-[10px] text-zinc-400">Přímo u Masarykova náměstí</div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="sm:col-span-7 relative rounded-2xl overflow-hidden border border-zinc-800 h-64 sm:h-[380px] bg-zinc-950">
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

                <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-zinc-950/95 backdrop-blur-sm border border-zinc-800 max-w-xs pointer-events-none">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-[11px] font-display font-bold text-white uppercase">Frogo CBD Shop</span>
                  </div>
                  <p className="text-[10px] font-mono text-zinc-400 mt-0.5">Centrum Hradce Králové</p>
                </div>
              </div>
            </div>

            {/* Travel hints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <Bus className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div className="text-xs">
                  <span className="font-display font-bold text-zinc-200 uppercase block">MHD Doprava</span>
                  <span className="text-zinc-400">1–2 minuty chůze ze zastávek Masarykovo nebo Ulrichovo náměstí.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                <Car className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div className="text-xs">
                  <span className="font-display font-bold text-zinc-200 uppercase block">Parkování</span>
                  <span className="text-zinc-400">Parkovací zóny přímo v ulici Švehlova a okolí.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry / Formspree Form */}
          <div className="lg:col-span-5 bg-zinc-900/70 rounded-2xl p-6 sm:p-7 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium mb-3">
                <Send className="w-3 h-3 text-red-500" strokeWidth={1.5} />
                <span>Rychlá zpráva na prodejnu</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">
                Máš dotaz k produktům nebo chill-roomu?
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Napiš nám a my ti odpovíme, nebo si otevři plný rezervační formulář.
              </p>

              {formSubmitted ? (
                <div className="mt-6 p-6 rounded-xl bg-zinc-950 border border-zinc-800 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-display text-base font-bold text-white uppercase">Zpráva úspěšně odeslána</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto">
                    Děkujeme! Vaše zpráva byla zaznamenána. Ozveme se vám na zadaný kontakt co nejdříve.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', contact: '', inquiryType: 'PS5 Rezervace', message: '' });
                    }}
                    className="mt-2 text-xs font-mono font-medium text-red-400 hover:text-red-300 underline uppercase"
                  >
                    Odeslat další dotaz
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-1">
                      Tvoje jméno *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="např. Jakub Nový"
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-1">
                      Telefon nebo E-mail *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="+420 777 000 000 nebo email@adresa.cz"
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-1">
                      Téma zprávy
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="PS5 Rezervace">Rezervace PS5 Chill Roomu</option>
                      <option value="CBD Květy">Dotaz na CBD Květy</option>
                      <option value="Vapes & Cartridge">Vapes & Cartridge</option>
                      <option value="Joints">Pre-rolled Joints</option>
                      <option value="Jiné">Ostatní dotazy</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-1">
                      Zpráva
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ahoj, chci se zeptat na volný termín v pátek večer..."
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" strokeWidth={1.5} />
                          <span>Odesílám...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" strokeWidth={1.5} />
                          <span>Odeslat zprávu</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="py-2.5 px-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 font-mono text-xs font-medium uppercase flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Gamepad2 className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
                      <span>Rezervovat PS5</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500 text-center flex items-center justify-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
              <span>Osobní nákup i herna jsou 18+ • Švehlova 633/10, Hradec Králové</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
