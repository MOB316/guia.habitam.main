import { useLanguage, type Language } from '@/contexts/LanguageContext';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import type { PropertyData } from '@/data/propertyData';

const FooterSection = ({ property }: { property: PropertyData }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-habitam-dark text-white/80">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-[0_18px_40px_rgba(7,27,38,0.18)]">
              <img
                src="/habitam-logo.svg"
                alt="Habitam Palma"
                className="h-20 w-auto rounded-md object-contain sm:h-24"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">{t('footerTagline')}</p>
          </div>

          <div className="space-y-3">
            <a href={`tel:${property.phone}`} className="flex items-center gap-2 text-sm hover:text-white transition-colors">
              <Phone className="w-4 h-4" />{property.phone}
            </a>
            <a href="mailto:info@habitam.es" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
              <Mail className="w-4 h-4" />info@habitam.es
            </a>
            <a href={property.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
              <MapPin className="w-4 h-4" />{property.address}
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">Idioma</span>
            </div>
            <div className="flex gap-2">
              {(['es', 'en', 'de'] as Language[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${l === language ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white/80'}`}
                >
                  {l === 'es' ? 'Español' : l === 'en' ? 'English' : 'Deutsch'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Habitam. Premium corporate housing in Mallorca.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
