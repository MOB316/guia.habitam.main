import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PropertyData } from '@/data/propertyData';

const MobilitySection = ({ property }: { property: PropertyData }) => {
  const { language, t } = useLanguage();

  return (
    <section id="mobility" className="habitam-section">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-8">
        {t('mobilityTitle')}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {property.mobility.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="habitam-card">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-habitam-dark text-sm mb-1">{item.title[language]}</h3>
                <p className="text-sm text-muted-foreground">{item.description[language]}</p>
              </div>
              {item.time && (
                <span className="flex items-center gap-1 text-xs font-semibold text-primary bg-accent px-3 py-1.5 rounded-full whitespace-nowrap">
                  <Clock className="w-3 h-3" />{item.time}
                </span>
              )}
            </div>
            {item.mapsUrl && (
              <a href={item.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline mt-3">
                <MapPin className="w-3 h-3" />{t('goMaps')}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobilitySection;
