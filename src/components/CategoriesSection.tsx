import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, Eye, ShieldAlert, Gamepad2, Flame, Wind, Layers } from 'lucide-react';
import { CATEGORIES, type Category, STORE_INFO } from '../data/storeData';

interface CategoriesSectionProps {
  onOpenBooking: () => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [selectedCategoryModal, setSelectedCategoryModal] = useState<Category | null>(null);

  const filteredCategories = activeCategoryFilter === 'all'
    ? CATEGORIES
    : CATEGORIES.filter(cat => cat.id === activeCategoryFilter);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'flowers':
        return <Flame className="w-4 h-4 text-red-500" />;
      case 'vapes':
        return <Wind className="w-4 h-4 text-red-500" />;
      case 'joints':
        return <Layers className="w-4 h-4 text-red-500" />;
      case 'ps5-zone':
        return <Gamepad2 className="w-4 h-4 text-red-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <section id="kategorie" className="py-20 md:py-32 bg-[#050507] relative overflow-hidden">
      {/* Subtle red background glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-600/40 text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,20,36,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>Menu & Kategorie sortimentu</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              Kategorie <span className="text-red-500 text-glow-red">(Menu)</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 font-light">
              Prozkoumej naši kompletní nabídku. Výběrové CBD palice, vaporizéry, pre-rolled joints a privátní gaming lounge. Vše k dispozici na Švehlově ulici.
            </p>
          </div>

          {/* Filter Tabs matching the 4 required categories */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-950 p-2 rounded-2xl border border-zinc-800 self-start md:self-auto">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                activeCategoryFilter === 'all'
                  ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(255,20,36,0.5)]'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              Vše (4)
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryFilter(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                  activeCategoryFilter === cat.id
                    ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(255,20,36,0.5)]'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sleek 4-Column Grid: CBD Květy, Vapes, Joints, PS5 Chill Zone */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredCategories.map((category, index) => {
            const isPS5 = category.id === 'ps5-zone';
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex flex-col rounded-3xl overflow-hidden border transition-all duration-300 relative ${
                  isPS5
                    ? 'bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 border-red-500/60 shadow-[0_0_35px_rgba(255,20,36,0.25)]'
                    : 'bg-zinc-950 border-zinc-800/90 hover:border-red-600/60 shadow-lg hover:shadow-[0_0_30px_rgba(255,20,36,0.2)]'
                }`}
              >
                {/* Image Frame */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-zinc-900">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Dark Red Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  {/* Accent Badge Top-Left */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/85 backdrop-blur-md text-red-400 border border-red-600/40 shadow-sm flex items-center gap-1.5">
                    {getCategoryIcon(category.id)}
                    <span>{category.accentBadge}</span>
                  </span>

                  {/* Product Count Top-Right */}
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-zinc-900/90 backdrop-blur-md text-zinc-300 border border-zinc-800">
                    {category.productsCount}
                  </span>

                  {/* Title overlay in image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-2xl font-black text-white tracking-tight uppercase group-hover:text-red-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-1 mt-0.5 font-mono">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-1 border-t border-zinc-900">
                    {category.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#ff1424]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => setSelectedCategoryModal(category)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-display font-bold uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-red-600/60 transition-all duration-200"
                    >
                      <Eye className="w-4 h-4 text-red-500" />
                      <span>Detail položek ({category.featuredItems.length})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {isPS5 && (
                      <button
                        onClick={onOpenBooking}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-display font-black uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white transition-all shadow-[0_0_20px_rgba(255,20,36,0.6)]"
                      >
                        <Gamepad2 className="w-4 h-4" />
                        <span>Rychlá rezervace PS5</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Help / Store Consultation Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-red-600/40 shadow-[0_0_40px_rgba(255,20,36,0.2)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold flex items-center gap-1.5 justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Osobní nákup & Konzultace v centru HK
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Chceš poradit s výběrem odrůdy nebo vaporizéru?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Zastav se přímo na prodejně Švehlova 633/10 (Masarykovo náměstí). Všechny květy si můžeš prohlédnout, přivonět a vybrat si ideální terpenový profil.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-display font-extrabold uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white transition-all shadow-[0_0_20px_rgba(255,20,36,0.5)] flex items-center justify-center gap-2"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Rezervovat PS5 Room</span>
            </button>
            <a
              href={`tel:${STORE_INFO.contacts.phone}`}
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-zinc-950 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors"
            >
              Zavolat: {STORE_INFO.contacts.phoneFormatted}
            </a>
          </div>
        </div>

      </div>

      {/* Modal: Interactive Category Items Showcase */}
      <AnimatePresence>
        {selectedCategoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-zinc-950 rounded-3xl shadow-[0_0_60px_rgba(255,20,36,0.3)] border border-red-600/40 overflow-hidden my-6 max-h-[90vh] flex flex-col text-zinc-100"
            >
              {/* Modal Header */}
              <div className="p-6 bg-zinc-900/90 border-b border-zinc-800 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase font-bold tracking-wider text-red-400">
                      Kategorie • {selectedCategoryModal.accentBadge}
                    </span>
                    <span className="text-xs text-zinc-500">•</span>
                    <span className="text-xs font-mono text-zinc-400">{selectedCategoryModal.productsCount}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white mt-1 uppercase tracking-tight">
                    {selectedCategoryModal.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    {selectedCategoryModal.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCategoryModal(null)}
                  className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  aria-label="Zavřít"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Products List */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                  Položky v nabídce (Švehlova 633/10, Hradec Králové):
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedCategoryModal.featuredItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-between p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-red-600/50 shadow-md transition-all group"
                    >
                      <div>
                        {/* Product image */}
                        <div className="relative h-44 rounded-xl overflow-hidden bg-zinc-950 mb-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                            {item.badges.map((b, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/85 text-red-400 border border-red-600/40"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>

                        <h4 className="font-display text-base font-bold text-white uppercase group-hover:text-red-400 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-red-400 font-mono mt-0.5">
                          {item.tagline}
                        </p>
                        <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>

                        {/* Specs badge */}
                        <div className="mt-3 p-2 rounded-xl bg-zinc-950 border border-zinc-800/80 text-[11px] text-zinc-300 font-mono">
                          {item.specs}
                        </div>

                        {/* Effects tag list */}
                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                          {item.effects.map((eff, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-950/60 text-red-300 border border-red-600/30"
                            >
                              • {eff}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-mono text-zinc-500 block">Cena</span>
                          <span className="font-display font-extrabold text-white text-base">{item.price}</span>
                        </div>

                        {selectedCategoryModal.id === 'ps5-zone' ? (
                          <button
                            onClick={() => {
                              setSelectedCategoryModal(null);
                              onOpenBooking();
                            }}
                            className="px-3 py-1.5 rounded-xl text-xs font-display font-bold uppercase bg-red-600 text-white hover:bg-red-500 transition-colors shadow-[0_0_10px_rgba(255,20,36,0.4)]"
                          >
                            Rezervovat
                          </button>
                        ) : (
                          <a
                            href="#kontakt"
                            onClick={() => setSelectedCategoryModal(null)}
                            className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase bg-zinc-800 hover:bg-red-600 text-white transition-colors"
                          >
                            Koupit v HK
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-zinc-900/90 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>Prodej i vstup pouze pro osoby starší 18 let • Zákon č. 167/1998 Sb. (THC &lt; 1%)</span>
                </div>
                <button
                  onClick={() => setSelectedCategoryModal(null)}
                  className="px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                >
                  Zavřít
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
