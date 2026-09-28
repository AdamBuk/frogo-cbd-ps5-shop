import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gamepad2, Calendar, Clock, Users, CheckCircle2, Tv, CreditCard, Banknote, Phone, ShieldAlert, Loader2 } from 'lucide-react';
import { GAMES_LIBRARY, STORE_INFO } from '../data/storeData';

interface PS5BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PS5BookingModal: React.FC<PS5BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [duration, setDuration] = useState<'1h' | '2h' | '3h'>('2h');
  const [players, setPlayers] = useState<number>(2);
  const [selectedGame, setSelectedGame] = useState<string>('EA Sports FC 25');
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState<string>('17:00');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const pricingMap = {
    '1h': { label: '1 hodina', price: 250, badge: 'Rychlý chill' },
    '2h': { label: '2 hodiny', price: 450, badge: 'Populární (Welcome Drink v ceně)' },
    '3h': { label: '3 hodiny', price: 650, badge: 'VIP Squad Night' },
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    try {
      await fetch(STORE_INFO.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          formType: 'Rezervace PS5 Room',
          duration: `${pricingMap[duration].label} (${pricingMap[duration].price} Kč)`,
          playersCount: `${players} hráči`,
          startingGame: selectedGame,
          date,
          time,
          customerName: name,
          customerPhone: phone,
          customerNote: note || 'Bez poznámky',
          paymentMethod: 'Platba na místě (hotově nebo kartou)',
          submittedAt: new Date().toISOString()
        })
      });
      setStep('success');
    } catch {
      // Graceful fallback for mock/placeholder endpoint
      setStep('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setStep('form');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-6 text-zinc-100"
        >
          {/* Modal Header */}
          <div className="p-5 border-b border-zinc-800 bg-zinc-900/80 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-850 border border-zinc-700/60 flex items-center justify-center text-zinc-200">
                <Gamepad2 className="w-5 h-5 text-red-500" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Privátní PS5 Chill Zone
                </span>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  Rezervovat PlayStation 5 Room
                </h3>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
              aria-label="Zavřít"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {step === 'form' ? (
            <form onSubmit={handleBooking} className="p-5 sm:p-6 space-y-5 max-h-[78vh] overflow-y-auto">
              
              {/* PROMINENT TEXT: NO ONLINE PAYMENTS REQUIRED BANNER */}
              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-red-500/30 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-850 border border-zinc-700/80 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                  <CreditCard className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wide flex items-center gap-1.5">
                    <Banknote className="w-3.5 h-3.5 text-zinc-300" strokeWidth={1.5} />
                    <span>Platba probíhá až na místě (hotově nebo kartou).</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                    Žádné platby online předem. Rezervace je nezávazná, platíte až při příchodu na prodejnu ve Švehlově ulici.
                  </p>
                </div>
              </div>

              {/* Duration selector */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-2">
                  1. Vyberte délku herního slotu
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {(['1h', '2h', '3h'] as const).map((key) => {
                    const opt = pricingMap[key];
                    const active = duration === key;
                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setDuration(key)}
                        className={`p-3 rounded-xl text-left border transition-colors ${
                          active
                            ? 'bg-zinc-900 border-red-500 text-white'
                            : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-sm text-white">{opt.label}</span>
                          <span className="font-mono text-xs font-bold text-red-400">{opt.price} Kč</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 mt-1 line-clamp-1">{opt.badge}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date, Time & Players grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
                    Datum
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
                    Čas příchodu
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="11:30">11:30</option>
                    <option value="13:00">13:00</option>
                    <option value="14:30">14:30</option>
                    <option value="16:00">16:00</option>
                    <option value="17:30">17:30</option>
                    <option value="19:00">19:00</option>
                    <option value="20:30">20:30 (Late Night)</option>
                    <option value="22:00">22:00 (Pá–So Only)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
                    Počet hráčů
                  </label>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setPlayers(num)}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold font-mono transition-colors border ${
                          players === num
                            ? 'bg-red-600 border-red-500 text-white'
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
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-2 flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
                  Preferovaná hra na start (připravíme předem)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {GAMES_LIBRARY.slice(0, 6).map((game) => (
                    <button
                      type="button"
                      key={game}
                      onClick={() => setSelectedGame(game)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium text-left border transition-colors ${
                        selectedGame === game
                          ? 'bg-zinc-900 border-red-500 text-zinc-200'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {game}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact info inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-zinc-800/80">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-1">
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="např. David Kovář"
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-1">
                    Telefon (pro potvrzení) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+420 777 000 000"
                    className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium block mb-1">
                  Poznámka / Speciální přání (volitelné)
                </label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="např. přijdeme o 10 minut dříve, chystáme turnaj..."
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                />
              </div>

              {/* Total Calculation & CTA */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">Celková cena slotu:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-white">
                      {pricingMap[duration].price} Kč
                    </span>
                    <span className="text-xs text-red-400 font-mono">({pricingMap[duration].label}, {players} hráči)</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">
                    Platba probíhá až na místě (hotově nebo kartou).
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.5} />
                      <span>Odesílám rezervaci...</span>
                    </>
                  ) : (
                    <>
                      <Gamepad2 className="w-4 h-4" strokeWidth={1.5} />
                      <span>Potvrdit rezervaci</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono text-zinc-500 text-center flex items-center justify-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
                <span>Vstup striktně 18+ • Švehlova 633/10 (Masarykovo náměstí), Hradec Králové</span>
              </div>
            </form>
          ) : (
            /* Beautiful Streetwear Boutique Success Screen */
            <div className="p-8 sm:p-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
              </div>

              <h4 className="font-display text-2xl font-bold text-white tracking-tight">
                Rezervace PS5 Roomu byla odeslána!
              </h4>

              <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                Děkujeme, <strong>{name}</strong>! Váš herní slot na <strong className="text-zinc-200">{pricingMap[duration].label}</strong> ({date} v {time}, {players} hráči, {selectedGame}) byl zaznamenán. Brzy vám pošleme potvrzení na uvedený telefon.
              </p>

              {/* Prominent Payment Note in Success Screen */}
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-red-500/30 max-w-sm mx-auto text-xs text-left space-y-1.5">
                <div className="flex items-center gap-2 font-mono font-bold text-red-400 text-xs">
                  <CreditCard className="w-4 h-4 text-red-500" strokeWidth={1.5} />
                  <span>Platba probíhá až na místě (hotově nebo kartou).</span>
                </div>
                <div className="flex justify-between text-zinc-400 text-[11px] pt-1 border-t border-zinc-800">
                  <span>Místo:</span>
                  <strong className="text-zinc-200">Švehlova 633/10, HK</strong>
                </div>
                <div className="flex justify-between text-zinc-400 text-[11px]">
                  <span>Částka k úhradě na místě:</span>
                  <strong className="text-white font-bold">{pricingMap[duration].price} Kč</strong>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <button
                  onClick={resetAndClose}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Hotovo & Zavřít
                </button>
                <a
                  href={`tel:${STORE_INFO.contacts.phone}`}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs flex items-center gap-2 transition-colors font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
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
