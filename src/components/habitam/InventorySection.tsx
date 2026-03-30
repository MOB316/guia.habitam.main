import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PropertyData } from '@/data/propertyData';

const InventorySection = ({ property }: { property: PropertyData }) => {
  const { language, t } = useLanguage();
  const [search, setSearch] = useState('');
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpenCategories(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const filtered = useMemo(() => {
    if (!search.trim()) return property.inventory;
    const q = search.toLowerCase();
    return property.inventory
      .map(cat => ({
        ...cat,
        items: cat.items.filter(item => item.name[language].toLowerCase().includes(q)),
      }))
      .filter(cat => cat.items.length > 0);
  }, [search, property.inventory, language]);

  return (
    <section id="inventory" className="habitam-section">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-6">
        {t('inventoryTitle')}
      </motion.h2>

      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={t('searchInventory')}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
        />
      </div>

      <div className="space-y-3">
        {filtered.map(cat => {
          const isOpen = openCategories.has(cat.key) || search.trim().length > 0;
          return (
            <div key={cat.key} className="habitam-card !p-0 overflow-hidden">
              <button onClick={() => toggle(cat.key)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="font-semibold text-habitam-dark">{t(cat.key)}</span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-xs">{cat.items.length}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 border-t">
                      <table className="w-full text-sm">
                        <tbody>
                          {cat.items.map((item, i) => (
                            <tr key={i} className="border-b last:border-0 border-border/50">
                              <td className="py-2.5 text-foreground">{item.name[language]}</td>
                              <td className="py-2.5 text-right font-medium text-habitam-dark w-12">{item.quantity}</td>
                              {item.notes && (
                                <td className="py-2.5 text-right text-xs text-muted-foreground max-w-[120px] truncate">{item.notes[language]}</td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InventorySection;
