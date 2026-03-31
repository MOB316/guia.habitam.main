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
    <header className={`fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-white/96 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-sm' : 'shadow-[0_1px_0_rgba(0,0,0,0.02)]'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-[72px]">
        <a href="#" className="text-xl font-semibold tracking-tight text-habitam-dark md:text-[1.35rem]">
          {propertyName}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map(item => (
            <a key={item.key} href={item.href} className="text-[0.98rem] font-medium text-habitam-dark/78 hover:text-habitam-dark transition-colors">
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language selector */}
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[0.96rem] font-medium text-habitam-dark/78 transition-colors hover:bg-accent hover:text-habitam-dark">
              <Globe className="w-4 h-4" />
              {langLabels[language]}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute right-0 top-full mt-1 min-w-[96px] rounded-xl border bg-card py-1 shadow-lg"
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
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-habitam-dark/78 hover:text-habitam-dark md:hidden">
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
            className="overflow-hidden border-t bg-white/98 backdrop-blur-md md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navItems.map(item => (
                <a key={item.key} href={item.href} onClick={() => setMobileOpen(false)} className="py-1 text-base font-medium text-habitam-dark/80 hover:text-habitam-dark">
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
