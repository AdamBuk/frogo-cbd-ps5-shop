import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gamepad2, Calendar, Clock, Users, CheckCircle2, Tv, Sparkles, Phone } from 'lucide-react';
import { GAMES_LIBRARY, STORE_INFO } from '../data/storeData';

interface PS5BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PS5BookingModal: React.FC<PS5BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [duration, setDuration] = useState<'1h' | '2h' | '3h'>('2h');
  const [players, setPlayers] = useState<number>(2);
  const [selectedGame, setSelectedGame] = useState<string>('EA Sports FC 25');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('17:00');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const pricingMap = {
    '1h': { label: '1 hodina', price: 250, badge: 'Rychlý chill' },
    '2h': { label: '2 hodiny', price: 450, badge: 'Populární (Welcome Drink v ceně)' },
    '3h': { label: '3 hodiny', price: 650, badge: 'VIP Squad Night' },
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setStep('success');
  };

  const resetAndClose = () => {
    setStep('form');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-zinc-950 border border-red-600/40 rounded-3xl shadow-[0_0_50px_rgba(255,20,36,0.3)] overflow-hidden my-6 text-zinc-100"
        >
          {/* Top glowing bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-600 shadow-[0_0_15px_#ff1424]" />

          {/* Modal Header */}
          <div className="p-6 border-b border-zinc-800/80 flex items-start justify-between bg-zinc-900/60">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-600/40 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(255,20,36,0.25)]">
                <Gamepad2 className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-red-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  Privátní PS5 Chill Zone
                </span>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  Rezervovat PlayStation 5 Room
                </h3>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              aria-label="Zavřít"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {step === 'form' ? (
            <form onSubmit={handleBooking} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              
              {/* Duration selector */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-2.5">
                  1. Vyberte délku herního slotu
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['1h', '2h', '3h'] as const).map((key) => {
                    const opt = pricingMap[key];
                    const active = duration === key;
                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setDuration(key)}
                        className={`p-3.5 rounded-2xl text-left border transition-all duration-200 relative ${
                          active
                            ? 'bg-red-950/40 border-red-500 text-white shadow-[0_0_20px_rgba(255,20,36,0.3)]'
                            : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-base text-white">{opt.label}</span>
                          <span className="font-mono text-sm font-bold text-red-400">{opt.price} Kč</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">{opt.badge}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date, Time & Players grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-red-500" />
                    Datum
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-red-500" />
                    Čas příchodu
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  >
                    <option value="11:30">11:30</option>
                    <option value="13:00">13:00</option>
                    <option value="14:30">14:30</option>
                    <option value="16:00">16:00</option>
                    <option value="17:30">17:30</option>
                    <option value="19:00">19:00</option>
                    <option value="20:30">20:30 (Late Night)</option>
                    <option value="22:00">22:00 (Pá-So Only)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-red-500" />
                    Počet hráčů
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setPlayers(num)}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-bold font-mono transition-colors border ${
                          players === num
                            ? 'bg-red-600 border-red-500 text-white shadow-[0_0_12px_rgba(255,20,36,0.5)]'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Game preference */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-2 flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5 text-red-500" />
                  Preferovaná hra na start (připravíme předem)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {GAMES_LIBRARY.slice(0, 6).map((game) => (
                    <button
                      type="button"
                      key={game}
                      onClick={() => setSelectedGame(game)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium text-left border transition-all ${
                        selectedGame === game
                          ? 'bg-red-950/60 border-red-500 text-red-200'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {game}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact info inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-800/80">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1">
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="např. David Kovář"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1">
                    Telefon (pro SMS potvrzení) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+420 777 000 000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1">
                  Poznámka / Speciální přání (volitelné)
                </label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="např. chystáme narozeninový mini-turnaj, připravte 4x ovladač..."
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                />
              </div>

              {/* Total Calculation & CTA */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-red-600/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">Celková cena slotu:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-extrabold text-white">
                      {pricingMap[duration].price} Kč
                    </span>
                    <span className="text-xs text-red-400 font-mono">({pricingMap[duration].label}, {players} hráči)</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-display font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(255,20,36,0.6)] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Potvrdit rezervaci</span>
                </button>
              </div>

              <p className="text-[11px] text-zinc-500 text-center">
                Platba probíhá na místě v hotovosti nebo kartou. Vstup striktně 18+. Švehlova 633/10, Hradec Králové.
              </p>
            </form>
          ) : (
            /* Success confirmation screen */
            <div className="p-8 sm:p-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center mx-auto text-red-500 shadow-[0_0_30px_rgba(255,20,36,0.4)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="font-display text-3xl font-bold text-white tracking-tight">
                Rezervace PS5 Roomu přijata!
              </h4>

              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Díky, <strong>{name}</strong>! Váš herní slot na <strong className="text-red-400">{pricingMap[duration].label}</strong> ({time}, {players} hráči, {selectedGame}) byl zaznamenán. Brzy vám pošleme potvrzovací SMS.
              </p>

              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 max-w-sm mx-auto text-xs text-zinc-400 space-y-1">
                <div className="flex justify-between">
                  <span>Místo:</span>
                  <strong className="text-white">Švehlova 633/10, HK</strong>
                </div>
                <div className="flex justify-between">
                  <span>Cena k úhradě na místě:</span>
                  <strong className="text-red-400 font-bold">{pricingMap[duration].price} Kč</strong>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Hotovo & Zavřít
                </button>
                <a
                  href={`tel:${STORE_INFO.contacts.phone}`}
                  className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-red-400" />
                  <span>Zavolat na prodejnu ({STORE_INFO.contacts.phoneFormatted})</span>
                </a>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
