export interface PropertyAmenitiesInput {
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
}

export interface PropertyInventoryInputItem {
  name: string;
  quantity: number;
  notes?: string;
}

export interface PropertyInventoryInputCategory {
  key: string;
  items: PropertyInventoryInputItem[];
}

export interface PropertyManualInput {
  propertyName: string;
  slug: string;
  address: string;
  mapsUrl: string;
  checkIn: string;
  checkOut: string;
  wifiName: string;
  wifiPassword: string;
  routerLocation: string;
  hostPhone: string;
  emergencyPhone: string;
  accessInstructions: string;
  houseRules: string;
  heroImage?: string;
  amenities: PropertyAmenitiesInput;
  inventory: PropertyInventoryInputCategory[];
}

export interface PropertyGeneratedInput {
  languageBase: "es";
  translateTo: ("en" | "de")[];
  generateSubtitle: boolean;
  generateWelcomeMessage: boolean;
  generateNearbyPlaces: boolean;
  generateMobility: boolean;
  generateRecommendations: boolean;
  generateFaq: boolean;
  brandTone?: string;
  cityContext?: string;
}

export interface PropertyIntakePayload {
  manual: PropertyManualInput;
  generated: PropertyGeneratedInput;
}

export const DEFAULT_PROPERTY_HERO_IMAGE = "/habitam-hero-option-2.svg";

export const DEFAULT_GENERATED_INPUT: PropertyGeneratedInput = {
  languageBase: "es",
  translateTo: ["en", "de"],
  generateSubtitle: true,
  generateWelcomeMessage: true,
  generateNearbyPlaces: true,
  generateMobility: true,
  generateRecommendations: true,
  generateFaq: true,
  brandTone: "elegante, claro, premium, cercano, practico",
  cityContext: "Palma de Mallorca",
};

export const normalizeSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

export const withPropertyIntakeDefaults = (
  payload: PropertyIntakePayload,
): PropertyIntakePayload => ({
  manual: {
    ...payload.manual,
    slug: normalizeSlug(payload.manual.slug || payload.manual.propertyName),
    heroImage: payload.manual.heroImage || DEFAULT_PROPERTY_HERO_IMAGE,
  },
  generated: {
    ...DEFAULT_GENERATED_INPUT,
    ...payload.generated,
  },
});
