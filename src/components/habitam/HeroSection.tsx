import { useLanguage } from '@/contexts/LanguageContext';
import { Wifi, MapPin, ClipboardList, Compass, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PropertyData } from '@/data/propertyData';

const quickActions = [
  { key: 'wifi', icon: Wifi, href: '#quick-info' },
  { key: 'directions', icon: MapPin, href: '#mobility' },
  { key: 'inventory', icon: ClipboardList, href: '#inventory' },
  { key: 'nearby', icon: Compass, href: '#nearby' },
  { key: 'contacts', icon: Phone, href: '#contacts' },
];

const HeroSection = ({ property }: { property: PropertyData }) => {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-end">
      <div className="absolute inset-0">
        <img src={property.heroImage} alt={property.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 pb-12 pt-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-2">{t('welcome')}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">{property.name}</h1>
          <p className="text-white/80 text-lg md:text-xl mb-2">{property.subtitle[language]}</p>
          <p className="text-white/60 text-base max-w-xl mb-8">{property.welcomeMessage[language]}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {quickActions.map(action => (
            <a
              key={action.key}
              href={action.href}
              className="flex items-center gap-2 bg-white/15 backdrop-blur-md text-white border border-white/20 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-white/25 transition-all duration-200"
            >
              <action.icon className="w-4 h-4" />
              {t(action.key)}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
