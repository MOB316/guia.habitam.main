import { useState, useEffect } from 'react';
import { useLanguage, type Language } from '@/contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const langLabels: Record<Language, string> = { es: 'ES', en: 'EN', de: 'DE' };

const navItems = [
  { key: 'quickInfo', href: '#quick-info' },
  { key: 'inventory', href: '#inventory' },
  { key: 'howToUse', href: '#how-to-use' },
  { key: 'nearby', href: '#nearby' },
  { key: 'faqTitle', href: '#faq' },
  { key: 'contacts', href: '#contacts' },
];

const Header = ({ propertyName }: { propertyName: string }) => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-card/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-bold text-lg tracking-tight text-habitam-dark">
          {propertyName}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <a key={item.key} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-habitam-dark transition-colors">
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language selector */}
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-habitam-dark transition-colors px-2 py-1 rounded-lg hover:bg-accent">
              <Globe className="w-4 h-4" />
              {langLabels[language]}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute right-0 top-full mt-1 bg-card rounded-xl shadow-lg border py-1 min-w-[80px]"
                >
                  {(['es', 'en', 'de'] as Language[]).map(l => (
                    <button
                      key={l}
                      onClick={() => { setLanguage(l); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${l === language ? 'text-habitam-dark font-semibold bg-accent' : 'text-muted-foreground hover:bg-accent'}`}
                    >
                      {l === 'es' ? 'Español' : l === 'en' ? 'English' : 'Deutsch'}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-muted-foreground hover:text-habitam-dark">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-t overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navItems.map(item => (
                <a key={item.key} href={item.href} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-habitam-dark py-1">
                  {t(item.key)}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
