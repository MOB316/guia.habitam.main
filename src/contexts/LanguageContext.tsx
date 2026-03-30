import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'es' | 'en' | 'de';

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  welcome: { es: 'Bienvenido a', en: 'Welcome to', de: 'Willkommen in' },
  welcomeMsg: { es: 'Tu guía digital para una estancia perfecta', en: 'Your digital guide for a perfect stay', de: 'Ihr digitaler Guide für einen perfekten Aufenthalt' },
  wifi: { es: 'Ver WiFi', en: 'View WiFi', de: 'WiFi anzeigen' },
  directions: { es: 'Cómo llegar', en: 'Directions', de: 'Anfahrt' },
  inventory: { es: 'Inventario', en: 'Inventory', de: 'Inventar' },
  nearby: { es: 'Lugares cercanos', en: 'Nearby places', de: 'In der Nähe' },
  contacts: { es: 'Contactos útiles', en: 'Useful contacts', de: 'Nützliche Kontakte' },
  quickInfo: { es: 'Información rápida', en: 'Quick info', de: 'Schnellinfo' },
  address: { es: 'Dirección', en: 'Address', de: 'Adresse' },
  checkIn: { es: 'Check-in', en: 'Check-in', de: 'Check-in' },
  checkOut: { es: 'Check-out', en: 'Check-out', de: 'Check-out' },
  wifiName: { es: 'Nombre WiFi', en: 'WiFi name', de: 'WiFi-Name' },
  wifiPass: { es: 'Contraseña WiFi', en: 'WiFi password', de: 'WiFi-Passwort' },
  routerLocation: { es: 'Ubicación del router', en: 'Router location', de: 'Router-Standort' },
  phone: { es: 'Teléfono', en: 'Phone', de: 'Telefon' },
  emergency: { es: 'Emergencias', en: 'Emergencies', de: 'Notfälle' },
  rules: { es: 'Normas principales', en: 'Main rules', de: 'Hauptregeln' },
  access: { es: 'Cómo acceder', en: 'How to access', de: 'Zugang' },
  elevator: { es: 'Ascensor', en: 'Elevator', de: 'Aufzug' },
  parking: { es: 'Parking', en: 'Parking', de: 'Parkplatz' },
  ac: { es: 'Aire acondicionado', en: 'Air conditioning', de: 'Klimaanlage' },
  heating: { es: 'Calefacción', en: 'Heating', de: 'Heizung' },
  washer: { es: 'Lavadora', en: 'Washer', de: 'Waschmaschine' },
  coffee: { es: 'Cafetera', en: 'Coffee maker', de: 'Kaffeemaschine' },
  hairdryer: { es: 'Secador', en: 'Hair dryer', de: 'Haartrockner' },
  iron: { es: 'Plancha', en: 'Iron', de: 'Bügeleisen' },
  microwave: { es: 'Microondas', en: 'Microwave', de: 'Mikrowelle' },
  dishwasher: { es: 'Lavavajillas', en: 'Dishwasher', de: 'Geschirrspüler' },
  oven: { es: 'Horno', en: 'Oven', de: 'Ofen' },
  yes: { es: 'Sí', en: 'Yes', de: 'Ja' },
  no: { es: 'No', en: 'No', de: 'Nein' },
  inventoryTitle: { es: 'Inventario de la vivienda', en: 'Property inventory', de: 'Wohnungsinventar' },
  searchInventory: { es: 'Buscar objeto...', en: 'Search item...', de: 'Gegenstand suchen...' },
  kitchen: { es: 'Cocina', en: 'Kitchen', de: 'Küche' },
  bedrooms: { es: 'Dormitorios', en: 'Bedrooms', de: 'Schlafzimmer' },
  bathrooms: { es: 'Baños', en: 'Bathrooms', de: 'Badezimmer' },
  cleaning: { es: 'Limpieza', en: 'Cleaning', de: 'Reinigung' },
  technology: { es: 'Tecnología', en: 'Technology', de: 'Technologie' },
  laundry: { es: 'Lavandería', en: 'Laundry', de: 'Wäsche' },
  extras: { es: 'Extras', en: 'Extras', de: 'Extras' },
  howToUse: { es: 'Cómo usar la vivienda', en: 'How to use the property', de: 'Nutzung der Wohnung' },
  trash: { es: 'Basuras / reciclaje', en: 'Trash / recycling', de: 'Müll / Recycling' },
  appliances: { es: 'Electrodomésticos', en: 'Appliances', de: 'Haushaltsgeräte' },
  hotWater: { es: 'Agua caliente', en: 'Hot water', de: 'Warmwasser' },
  kitchenUse: { es: 'Cocina / vitro / horno', en: 'Kitchen / hob / oven', de: 'Küche / Herd / Ofen' },
  keys: { es: 'Llaves', en: 'Keys', de: 'Schlüssel' },
  blinds: { es: 'Persianas', en: 'Blinds', de: 'Rollläden' },
  noiseRules: { es: 'Normas de ruido', en: 'Noise rules', de: 'Lärmregeln' },
  incident: { es: 'Incidencia', en: 'Report an issue', de: 'Störung melden' },
  nearbyTitle: { es: 'Servicios y puntos de interés', en: 'Services & points of interest', de: 'Dienste & Sehenswürdigkeiten' },
  searchPlaces: { es: 'Buscar lugar...', en: 'Search place...', de: 'Ort suchen...' },
  allCategories: { es: 'Todas', en: 'All', de: 'Alle' },
  goMaps: { es: 'Ir con Google Maps', en: 'Open in Google Maps', de: 'In Google Maps öffnen' },
  mobilityTitle: { es: 'Mapa y movilidad', en: 'Map & mobility', de: 'Karte & Mobilität' },
  recommendationsTitle: { es: 'Recomendaciones Habitam', en: 'Habitam recommendations', de: 'Habitam Empfehlungen' },
  contactsTitle: { es: 'Teléfonos y contactos', en: 'Phones & contacts', de: 'Telefone & Kontakte' },
  faqTitle: { es: 'Preguntas frecuentes', en: 'FAQ', de: 'Häufige Fragen' },
  footerTagline: { es: 'Alquiler temporal corporativo y gestión profesional de inmuebles en Mallorca', en: 'Corporate temporary rental & professional property management in Mallorca', de: 'Temporäre Firmenvermietung & professionelle Immobilienverwaltung auf Mallorca' },
  restaurants: { es: 'Restaurantes', en: 'Restaurants', de: 'Restaurants' },
  cafes: { es: 'Cafeterías', en: 'Cafés', de: 'Cafés' },
  bars: { es: 'Bares', en: 'Bars', de: 'Bars' },
  supermarkets: { es: 'Supermercados', en: 'Supermarkets', de: 'Supermärkte' },
  pharmacies: { es: 'Farmacias', en: 'Pharmacies', de: 'Apotheken' },
  transport: { es: 'Transporte', en: 'Transport', de: 'Transport' },
  beaches: { es: 'Playas', en: 'Beaches', de: 'Strände' },
  wellness: { es: 'Wellness', en: 'Wellness', de: 'Wellness' },
  coworkings: { es: 'Coworkings', en: 'Coworkings', de: 'Coworkings' },
  gyms: { es: 'Gimnasios', en: 'Gyms', de: 'Fitnessstudios' },
  shopping: { es: 'Compras', en: 'Shopping', de: 'Einkaufen' },
  culture: { es: 'Cultura', en: 'Culture', de: 'Kultur' },
  centerPalma: { es: 'Cómo llegar al centro de Palma', en: 'How to get to Palma center', de: 'So kommen Sie ins Zentrum von Palma' },
  publicTransport: { es: 'Transporte público cercano', en: 'Nearby public transport', de: 'Öffentliche Verkehrsmittel' },
  taxi: { es: 'Taxi', en: 'Taxi', de: 'Taxi' },
  airport: { es: 'Aeropuerto', en: 'Airport', de: 'Flughafen' },
  estimatedTimes: { es: 'Tiempos estimados', en: 'Estimated times', de: 'Geschätzte Zeiten' },
  police: { es: 'Policía', en: 'Police', de: 'Polizei' },
  ambulance: { es: 'Ambulancia', en: 'Ambulance', de: 'Krankenwagen' },
  fireDept: { es: 'Bomberos', en: 'Fire department', de: 'Feuerwehr' },
  hospital: { es: 'Hospital cercano', en: 'Nearest hospital', de: 'Nächstes Krankenhaus' },
  pharmacyGuard: { es: 'Farmacia de guardia', en: 'Duty pharmacy', de: 'Notapotheke' },
  habitamContact: { es: 'Contacto Habitam', en: 'Habitam contact', de: 'Habitam Kontakt' },
  supportIncident: { es: 'Soporte de incidencia', en: 'Incident support', de: 'Störungsmeldung' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = useCallback((key: string) => {
    return translations[key]?.[language] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
