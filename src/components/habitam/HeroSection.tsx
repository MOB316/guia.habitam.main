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
        <div className="absolute inset-0 bg-gradient-to-t from-habitam-dark/80 via-habitam-dark/28 to-white/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,247,234,0.34),transparent_34%),linear-gradient(135deg,rgba(186,219,211,0.14),transparent_52%)]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 pb-14 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.32em] text-white/82 uppercase md:text-[0.95rem]">{t('welcome')}</p>
          <h1 className="mb-4 text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
            {property.name}
          </h1>
          <p className="mb-4 text-xl font-medium text-white/88 md:text-[1.85rem]">{property.subtitle[language]}</p>
          <p className="mx-auto mb-9 max-w-2xl text-base leading-8 text-white/68 md:text-[1.18rem]">
            {property.welcomeMessage[language]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
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
