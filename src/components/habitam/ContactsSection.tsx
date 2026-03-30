import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { AlertCircle, Shield, Heart, Flame, Car, Plane, Building2, Pill, Phone, MessageCircle } from 'lucide-react';
import type { PropertyData } from '@/data/propertyData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  AlertCircle, Shield, Heart, Flame, Car, Plane, Building2, Pill, Phone, MessageCircle,
};

const ContactsSection = ({ property }: { property: PropertyData }) => {
  const { language, t } = useLanguage();

  return (
    <section id="contacts" className="habitam-section">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-8">
        {t('contactsTitle')}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {property.contacts.map((contact, i) => {
          const Icon = iconMap[contact.icon] || Phone;
          return (
            <motion.a
              key={i}
              href={`tel:${contact.phone}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="habitam-card flex items-center gap-4 cursor-pointer group"
            >
              <div className="p-2.5 rounded-xl bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-habitam-dark text-sm">{contact.name[language]}</p>
                <p className="text-sm text-primary font-medium">{contact.phone}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default ContactsSection;
