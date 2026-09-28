import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, Eye, ShieldAlert, Gamepad2, Flame, Wind, Layers } from 'lucide-react';
import { CATEGORIES, type Category, STORE_INFO, REAL_IMAGES } from '../data/storeData';

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
        return <Flame className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />;
      case 'vapes':
        return <Wind className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />;
      case 'joints':
        return <Layers className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />;
      case 'ps5-zone':
        return <Gamepad2 className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />;
    }
  };

  return (
    <section id="kategorie" className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
              <span>Menu & Kategorie sortimentu</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Kategorie <span className="text-zinc-400 font-light">(Menu)</span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-zinc-400 font-normal">
              Výběrové CBD květy, vaporizéry, pre-rolled joints a privátní gaming lounge. Vše k dispozici v naší prodejně ve Švehlově ulici.
            </p>
          </div>

          {/* Filter Tabs matching the 4 categories */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800 self-start md:self-auto">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wide uppercase transition-colors ${
                activeCategoryFilter === 'all'
                  ? 'bg-red-600 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-850'
              }`}
            >
              Vše (4)
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wide uppercase transition-colors flex items-center gap-1.5 ${
                  activeCategoryFilter === cat.id
                    ? 'bg-red-600 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-850'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Grid: CBD Květy, Vapes, Joints, PS5 Chill Zone */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => {
            const isPS5 = category.id === 'ps5-zone';
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/70 hover:border-zinc-700 transition-colors duration-200 relative"
              >
                {/* Image Frame */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-zinc-950">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  {/* Accent Badge Top-Left */}
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-zinc-950/90 backdrop-blur-sm text-zinc-300 border border-zinc-800 flex items-center gap-1.5">
                    {getCategoryIcon(category.id)}
                    <span>{category.accentBadge}</span>
                  </span>

                  {/* Product Count Top-Right */}
                  <span className="absolute top-3.5 right-3.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-900/90 text-zinc-400 border border-zinc-800">
                    {category.productsCount}
                  </span>

                  {/* Title overlay in image */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <h3 className="font-display text-xl font-bold text-white tracking-tight uppercase group-hover:text-red-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5 font-mono">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-1 border-t border-zinc-800/80">
                    {category.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => setSelectedCategoryModal(category)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl text-xs font-mono font-medium uppercase tracking-wide bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-zinc-800 hover:border-zinc-700 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
                      <span>Detail nabídky ({category.featuredItems.length})</span>
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </button>

                    {isPS5 && (
                      <button
                        onClick={onOpenBooking}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white transition-colors"
                      >
                        <Gamepad2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                        <span>Rezervovat PS5 Room</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Consultation Banner with Real Store Showcase Photo */}
        <div className="mt-12 rounded-2xl bg-zinc-900/80 border border-zinc-800 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-zinc-800 flex-shrink-0 bg-zinc-950">
              <img
                src={REAL_IMAGES.storeCounter}
                alt="Prodejní vitrína a příslušenství Frogo CBD Shop Hradec Králové"
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute bottom-1 left-1 right-1 px-1 py-0.5 rounded text-[8px] font-mono text-center bg-zinc-950/90 text-zinc-300 border border-zinc-800">
                Vitrína shopu
              </span>
            </div>

            <div className="space-y-1 text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Osobní nákup & Konzultace v centru HK
              </span>
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">
                Chceš poradit s výběrem odrůdy nebo vaporizéru?
              </h3>
              <p className="text-xs text-zinc-400 max-w-xl">
                Zastav se na prodejně Švehlova 633/10 (Masarykovo náměstí). Všechny květy si můžeš osobně prohlédnout, přivonět a vybrat si ideální terpenový profil.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto flex-shrink-0">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white transition-colors flex items-center justify-center gap-2"
            >
              <Gamepad2 className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>Rezervovat PS5 Room</span>
            </button>
            <a
              href={`tel:${STORE_INFO.contacts.phone}`}
              className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl text-xs font-mono font-medium uppercase tracking-wide bg-zinc-950 hover:bg-zinc-850 text-zinc-300 border border-zinc-800 transition-colors"
            >
              Zavolat: {STORE_INFO.contacts.phoneFormatted}
            </a>
          </div>
        </div>

      </div>

      {/* Modal: Interactive Category Items Showcase */}
      <AnimatePresence>
        {selectedCategoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden my-6 max-h-[88vh] flex flex-col text-zinc-100 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-5 bg-zinc-900 border-b border-zinc-800 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="uppercase font-medium text-zinc-300">
                      {selectedCategoryModal.accentBadge}
                    </span>
                    <span>•</span>
                    <span>{selectedCategoryModal.productsCount}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mt-1 uppercase tracking-tight">
                    {selectedCategoryModal.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {selectedCategoryModal.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCategoryModal(null)}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Zavřít"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>

              {/* Modal Products List */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium">
                  Nabídka prodejny (Švehlova 633/10, Hradec Králové):
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedCategoryModal.featuredItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors group"
                    >
                      <div>
                        {/* Product image */}
                        <div className="relative h-40 rounded-lg overflow-hidden bg-zinc-950 mb-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                            {item.badges.map((b, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-950/90 text-zinc-300 border border-zinc-800"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>

                        <h4 className="font-display text-sm font-bold text-white uppercase group-hover:text-red-400 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-red-400 font-mono mt-0.5">
                          {item.tagline}
                        </p>
                        <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>

                        {/* Specs badge */}
                        <div className="mt-2.5 p-2 rounded-lg bg-zinc-950 border border-zinc-800/80 text-[11px] text-zinc-300 font-mono">
                          {item.specs}
                        </div>

                        {/* Effects tag list */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {item.effects.map((eff, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-950 text-zinc-400 border border-zinc-800"
                            >
                              • {eff}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                            {selectedCategoryModal.id === 'ps5-zone' ? 'Dostupnost' : 'Cena'}
                          </span>
                          <span className="font-display font-bold text-white text-sm">{item.price}</span>
                        </div>

                        {selectedCategoryModal.id === 'ps5-zone' ? (
                          <button
                            onClick={() => {
                              setSelectedCategoryModal(null);
                              onOpenBooking();
                            }}
                            className="px-3 py-1.5 rounded-lg text-xs font-display font-bold uppercase bg-red-600 text-white hover:bg-red-700 transition-colors"
                          >
                            Rezervovat
                          </button>
                        ) : (
                          <a
                            href="#kontakt"
                            onClick={() => setSelectedCategoryModal(null)}
                            className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium uppercase bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
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
              <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-zinc-400 flex-shrink-0" strokeWidth={1.5} />
                  <span>Prodej i vstup pouze pro osoby starší 18 let • Zákon č. 167/1998 Sb. (THC &lt; 1%)</span>
                </div>
                <button
                  onClick={() => setSelectedCategoryModal(null)}
                  className="px-4 py-1.5 rounded-lg text-xs font-mono font-medium uppercase bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
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
