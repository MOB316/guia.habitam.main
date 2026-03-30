import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Coffee, Laptop, Dumbbell, Sparkles, MapPin, ShoppingBag } from 'lucide-react';
import type { PropertyData } from '@/data/propertyData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Coffee, Laptop, Dumbbell, Sparkles, MapPin, ShoppingBag,
};

const RecommendationsSection = ({ property }: { property: PropertyData }) => {
  const { language, t } = useLanguage();

  return (
    <section className="habitam-section">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-8">
        {t('recommendationsTitle')}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {property.recommendations.map((item, i) => {
          const Icon = iconMap[item.icon] || Sparkles;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="habitam-card habitam-gradient"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
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

export default RecommendationsSection;
