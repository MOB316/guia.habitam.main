import type { Language } from '@/contexts/LanguageContext';

type T3 = Record<Language, string>;

export interface PropertyData {
  id: string;
  name: string;
  subtitle: T3;
  heroImage: string;
  welcomeMessage: T3;
  address: string;
  checkIn: string;
  checkOut: string;
  wifiName: string;
  wifiPassword: string;
  routerLocation: T3;
  phone: string;
  emergencyPhone: string;
  rules: T3;
  access: T3;
  hasElevator: boolean;
  hasParking: boolean;
  hasAC: boolean;
  hasHeating: boolean;
  hasWasher: boolean;
  hasCoffee: boolean;
  hasHairdryer: boolean;
  hasIron: boolean;
  hasMicrowave: boolean;
  hasDishwasher: boolean;
  hasOven: boolean;
  mapsUrl: string;
  inventory: InventoryCategory[];
  howToUse: HowToUseItem[];
  nearbyPlaces: NearbyPlace[];
  mobility: MobilityItem[];
  recommendations: RecommendationItem[];
  contacts: ContactItem[];
  faq: FAQItem[];
}

export interface InventoryCategory {
  key: string;
  items: { name: T3; quantity: number; notes?: T3 }[];
}

export interface HowToUseItem {
  icon: string;
  title: T3;
  description: T3;
}

export interface NearbyPlace {
  name: string;
  category: string;
  description: T3;
  distance: string;
  mapsUrl: string;
  phone?: string;
  website?: string;
  image?: string;
}

export interface MobilityItem {
  title: T3;
  description: T3;
  mapsUrl?: string;
  time?: string;
}

export interface RecommendationItem {
  icon: string;
  title: T3;
  description: T3;
}

export interface ContactItem {
  name: T3;
  phone: string;
  icon: string;
}

export interface FAQItem {
  question: T3;
  answer: T3;
}
