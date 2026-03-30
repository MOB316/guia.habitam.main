import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, MapPin, Phone, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PropertyData } from '@/data/propertyData';

const categories = [
  'allCategories', 'restaurants', 'cafes', 'bars', 'supermarkets', 'pharmacies',
  'coworkings', 'gyms', 'wellness', 'beaches', 'shopping', 'transport', 'culture',
];

const NearbyPlacesSection = ({ property }: { property: PropertyData }) => {
  const { language, t } = useLanguage();
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('allCategories');

  const filtered = useMemo(() => {
    let places = property.nearbyPlaces;
    if (activeCat !== 'allCategories') places = places.filter(p => p.category === activeCat);
    if (search.trim()) {
      const q = search.toLowerCase();
      places = places.filter(p => p.name.toLowerCase().includes(q) || p.description[language].toLowerCase().includes(q));
    }
    return places;
  }, [property.nearbyPlaces, activeCat, search, language]);

  return (
    <section id="nearby" className="habitam-section">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-6">
        {t('nearbyTitle')}
      </motion.h2>

      <div className="relative mb-4 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={t('searchPlaces')}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeCat === cat ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-accent text-secondary-foreground hover:bg-primary/10'
            }`}
          >
            {t(cat)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((place, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="habitam-card !p-0 overflow-hidden"
          >
            {place.image && (
              <img src={place.image} alt={place.name} className="w-full h-36 object-cover" loading="lazy" />
            )}
            <div className="p-5">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-habitam-dark text-sm">{place.name}</h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{place.distance}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{place.description[language]}</p>

              <div className="flex flex-wrap gap-2">
                <a href={place.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
                  <MapPin className="w-3 h-3" />{t('goMaps')}
                </a>
                {place.phone && (
                  <a href={`tel:${place.phone}`} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                    <Phone className="w-3 h-3" />{place.phone}
                  </a>
                )}
                {place.website && (
                  <a href={place.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                    <Globe className="w-3 h-3" />Web
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground text-sm py-12">No results found.</p>
      )}
    </section>
  );
};

export default NearbyPlacesSection;
