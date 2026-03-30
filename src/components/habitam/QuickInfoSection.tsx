import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, Wifi, Lock, Phone, AlertTriangle, ScrollText, DoorOpen, Building2, Car, Snowflake, Flame, WashingMachine as Washer, Coffee, Wind, Shirt, Microwave, CookingPot, CircleDot } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PropertyData } from '@/data/propertyData';

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay?: number;
}

const InfoCard = ({ icon, label, value, delay = 0 }: InfoCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="habitam-card flex items-start gap-4"
  >
    <div className="p-2.5 rounded-xl bg-accent text-primary flex-shrink-0">{icon}</div>
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">{label}</p>
      <p className="text-sm font-medium text-foreground break-words">{value}</p>
    </div>
  </motion.div>
);

const BooleanBadge = ({ label, value, icon }: { label: string; value: boolean; icon: React.ReactNode }) => {
  const { t } = useLanguage();
  return (
    <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${value ? 'bg-accent text-secondary-foreground' : 'bg-muted/50 text-muted-foreground'}`}>
      {icon}
      <span>{label}</span>
      <span className="ml-auto text-xs font-bold">{value ? t('yes') : t('no')}</span>
    </div>
  );
};

const QuickInfoSection = ({ property }: { property: PropertyData }) => {
  const { language, t } = useLanguage();
  const iconClass = "w-5 h-5";

  const infoCards = [
    { icon: <MapPin className={iconClass} />, label: t('address'), value: property.address },
    { icon: <Clock className={iconClass} />, label: t('checkIn'), value: property.checkIn },
    { icon: <Clock className={iconClass} />, label: t('checkOut'), value: property.checkOut },
    { icon: <Wifi className={iconClass} />, label: t('wifiName'), value: property.wifiName },
    { icon: <Lock className={iconClass} />, label: t('wifiPass'), value: property.wifiPassword },
    { icon: <Wifi className={iconClass} />, label: t('routerLocation'), value: property.routerLocation[language] },
    { icon: <Phone className={iconClass} />, label: t('phone'), value: property.phone },
    { icon: <AlertTriangle className={iconClass} />, label: t('emergency'), value: property.emergencyPhone },
    { icon: <ScrollText className={iconClass} />, label: t('rules'), value: property.rules[language] },
    { icon: <DoorOpen className={iconClass} />, label: t('access'), value: property.access[language] },
  ];

  const amenities = [
    { label: t('elevator'), value: property.hasElevator, icon: <Building2 className="w-4 h-4" /> },
    { label: t('parking'), value: property.hasParking, icon: <Car className="w-4 h-4" /> },
    { label: t('ac'), value: property.hasAC, icon: <Snowflake className="w-4 h-4" /> },
    { label: t('heating'), value: property.hasHeating, icon: <Flame className="w-4 h-4" /> },
    { label: t('washer'), value: property.hasWasher, icon: <Washer className="w-4 h-4" /> },
    { label: t('coffee'), value: property.hasCoffee, icon: <Coffee className="w-4 h-4" /> },
    { label: t('hairdryer'), value: property.hasHairdryer, icon: <Wind className="w-4 h-4" /> },
    { label: t('iron'), value: property.hasIron, icon: <Shirt className="w-4 h-4" /> },
    { label: t('microwave'), value: property.hasMicrowave, icon: <Microwave className="w-4 h-4" /> },
    { label: t('dishwasher'), value: property.hasDishwasher, icon: <CookingPot className="w-4 h-4" /> },
    { label: t('oven'), value: property.hasOven, icon: <CircleDot className="w-4 h-4" /> },
  ];

  return (
    <section id="quick-info" className="habitam-section">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-8">
        {t('quickInfo')}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {infoCards.map((card, i) => (
          <InfoCard key={i} icon={card.icon} label={card.label} value={card.value} delay={i * 0.03} />
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {amenities.map((a, i) => (
          <BooleanBadge key={i} {...a} />
        ))}
      </div>
    </section>
  );
};

export default QuickInfoSection;
