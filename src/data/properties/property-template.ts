import type { PropertyData } from "../types";

export const propertyTemplate: PropertyData = {
  id: "nuevo-inmueble",
  slug: "nuevo-inmueble",
  name: "Nuevo Inmueble",
  subtitle: {
    es: "Subtitulo del inmueble en espanol",
    en: "Property subtitle in English",
    de: "Untertitel der Unterkunft auf Deutsch",
  },
  heroImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80",
  welcomeMessage: {
    es: "Mensaje de bienvenida para los huespedes.",
    en: "Welcome message for guests.",
    de: "Willkommensnachricht fur Gaste.",
  },
  address: "Calle Ejemplo 123, Palma de Mallorca",
  checkIn: "15:00",
  checkOut: "11:00",
  wifiName: "WIFI_DEL_INMUEBLE",
  wifiPassword: "password-demo",
  routerLocation: {
    es: "Ubicacion del router en espanol",
    en: "Router location in English",
    de: "Standort des Routers auf Deutsch",
  },
  phone: "+34 600 000 000",
  emergencyPhone: "112",
  rules: {
    es: "Normas de la vivienda en espanol.",
    en: "House rules in English.",
    de: "Hausregeln auf Deutsch.",
  },
  access: {
    es: "Instrucciones de acceso en espanol.",
    en: "Access instructions in English.",
    de: "Zugangsanweisungen auf Deutsch.",
  },
  hasElevator: true,
  hasParking: false,
  hasAC: true,
  hasHeating: true,
  hasWasher: true,
  hasCoffee: true,
  hasHairdryer: true,
  hasIron: true,
  hasMicrowave: true,
  hasDishwasher: false,
  hasOven: true,
  mapsUrl: "https://maps.google.com/?q=Palma+de+Mallorca",
  inventory: [
    {
      key: "kitchen",
      items: [
        {
          name: {
            es: "Platos",
            en: "Plates",
            de: "Teller",
          },
          quantity: 6,
        },
      ],
    },
  ],
  howToUse: [
    {
      icon: "Wifi",
      title: {
        es: "WiFi",
        en: "WiFi",
        de: "WiFi",
      },
      description: {
        es: "Explica aqui como conectarse al WiFi.",
        en: "Explain here how to connect to the WiFi.",
        de: "Erklaren Sie hier, wie man sich mit dem WiFi verbindet.",
      },
    },
  ],
  nearbyPlaces: [
    {
      name: "Cafe Ejemplo",
      category: "cafes",
      description: {
        es: "Descripcion breve en espanol.",
        en: "Short description in English.",
        de: "Kurze Beschreibung auf Deutsch.",
      },
      distance: "200m",
      mapsUrl: "https://maps.google.com/?q=Cafe+Ejemplo+Palma",
    },
  ],
  mobility: [
    {
      title: {
        es: "Centro de Palma",
        en: "Palma center",
        de: "Zentrum von Palma",
      },
      description: {
        es: "Como llegar o moverse desde el inmueble.",
        en: "How to move around from the property.",
        de: "Wie man sich von der Unterkunft aus fortbewegt.",
      },
      mapsUrl: "https://maps.google.com/?q=Palma+center",
      time: "10 min",
    },
  ],
  recommendations: [
    {
      icon: "Coffee",
      title: {
        es: "Desayuno",
        en: "Breakfast",
        de: "Fruhstuck",
      },
      description: {
        es: "Recomendacion destacada en espanol.",
        en: "Featured recommendation in English.",
        de: "Empfehlung auf Deutsch.",
      },
    },
  ],
  contacts: [
    {
      name: {
        es: "Contacto Habitam",
        en: "Habitam contact",
        de: "Habitam Kontakt",
      },
      phone: "+34 600 000 000",
      icon: "Phone",
    },
  ],
  faq: [
    {
      question: {
        es: "Pregunta frecuente en espanol?",
        en: "Frequently asked question in English?",
        de: "Haufige Frage auf Deutsch?",
      },
      answer: {
        es: "Respuesta en espanol.",
        en: "Answer in English.",
        de: "Antwort auf Deutsch.",
      },
    },
  ],
};
