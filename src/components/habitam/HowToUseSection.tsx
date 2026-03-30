import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Wifi, Router, Trash2, Thermometer, Droplets, CookingPot, Key, Volume2, AlertCircle } from 'lucide-react';
import type { PropertyData } from '@/data/propertyData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Wifi, Router, Trash2, Thermometer, Droplets, CookingPot, Key, Volume2, AlertCircle,
  WashingMachine: Droplets,
};

const HowToUseSection = ({ property }: { property: PropertyData }) => {
  const { language, t } = useLanguage();

  return (
    <section id="how-to-use" className="habitam-section">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-8">
        {t('howToUse')}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {property.howToUse.map((item, i) => {
          const Icon = iconMap[item.icon] || AlertCircle;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="habitam-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-accent text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-habitam-dark text-sm">{item.title[language]}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description[language]}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HowToUseSection;
