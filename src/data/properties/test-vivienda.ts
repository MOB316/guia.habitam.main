import type { PropertyData } from "../types";
import { SHARED_PROPERTY_HERO_IMAGE } from "./shared";

export const testVivienda: PropertyData = {
  id: "test-vivienda",
  slug: "test-vivienda",
  name: "Test Vivienda",
  subtitle: {
    es: "Guia dinamica de prueba para validar multiples inmuebles",
    en: "Dynamic test guide to validate multiple properties",
    de: "Dynamischer Test-Guide zur Validierung mehrerer Unterkunfte",
  },
  heroImage: SHARED_PROPERTY_HERO_IMAGE,
  welcomeMessage: {
    es: "Esta vivienda de prueba confirma que la guia carga correctamente por slug y mantiene la arquitectura escalable.",
    en: "This test property confirms that the guide loads correctly by slug while keeping the architecture scalable.",
    de: "Diese Testunterkunft bestatigt, dass der Guide korrekt per Slug geladen wird und die skalierbare Architektur beibehalt.",
  },
  address: "Carrer de la Prova 12, 07010 Palma de Mallorca",
  checkIn: "15:00",
  checkOut: "11:00",
  wifiName: "TEST_WIFI",
  wifiPassword: "12345678",
  routerLocation: {
    es: "En la estanteria del salon",
    en: "On the living room shelf",
    de: "Im Regal im Wohnzimmer",
  },
  phone: "+34 600 000 000",
  emergencyPhone: "112",
  rules: {
    es: "No fumar dentro de la vivienda. No se permiten fiestas. Respetar el descanso de los vecinos.",
    en: "No smoking inside the property. No parties allowed. Respect the neighbors' quiet hours.",
    de: "Nicht in der Unterkunft rauchen. Keine Partys erlaubt. Bitte die Ruhezeiten der Nachbarn respektieren.",
  },
  access: {
    es: "Entrada autonoma mediante codigo en la puerta principal.",
    en: "Self check-in through a code on the main door.",
    de: "Selbststandiger Check-in per Code an der Haupteingangstur.",
  },
  hasElevator: true,
  hasParking: true,
  hasAC: true,
  hasHeating: true,
  hasWasher: true,
  hasCoffee: true,
  hasHairdryer: true,
  hasIron: true,
  hasMicrowave: true,
  hasDishwasher: false,
  hasOven: true,
  mapsUrl: "https://maps.google.com/?q=Carrer+de+la+Prova+12+Palma",
  inventory: [
    {
      key: "kitchen",
      items: [
        {
          name: { es: "Platos", en: "Plates", de: "Teller" },
          quantity: 6,
        },
        {
          name: { es: "Vasos", en: "Glasses", de: "Glaser" },
          quantity: 6,
        },
        {
          name: { es: "Tazas", en: "Cups", de: "Tassen" },
          quantity: 4,
        },
      ],
    },
    {
      key: "bedrooms",
      items: [
        {
          name: { es: "Juego de sabanas", en: "Bed linen set", de: "Bettwasche-Set" },
          quantity: 2,
        },
        {
          name: { es: "Almohadas", en: "Pillows", de: "Kissen" },
          quantity: 4,
        },
      ],
    },
  ],
  howToUse: [
    {
      icon: "Wifi",
      title: { es: "WiFi", en: "WiFi", de: "WiFi" },
      description: {
        es: "Red TEST_WIFI. Contrasena 12345678.",
        en: "TEST_WIFI network. Password 12345678.",
        de: "TEST_WIFI Netzwerk. Passwort 12345678.",
      },
    },
    {
      icon: "Key",
      title: { es: "Entrada", en: "Access", de: "Zugang" },
      description: {
        es: "Accede con el codigo enviado antes de tu llegada.",
        en: "Enter with the code sent before your arrival.",
        de: "Zugang mit dem vor Ihrer Ankunft gesendeten Code.",
      },
    },
  ],
  nearbyPlaces: [
    {
      name: "Cafe de Prueba",
      category: "cafes",
      description: {
        es: "Cafe cercano para desayunar y trabajar",
        en: "Nearby cafe for breakfast and remote work",
        de: "Nahes Cafe fur Fruhstuck und Remote-Arbeit",
      },
      distance: "180m",
      mapsUrl: "https://maps.google.com/?q=Cafe+de+Prueba+Palma",
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
        es: "A 10 minutos caminando desde la vivienda",
        en: "A 10-minute walk from the property",
        de: "10 Gehminuten von der Unterkunft entfernt",
      },
      mapsUrl: "https://maps.google.com/?q=Palma+center",
      time: "10 min",
    },
  ],
  recommendations: [
    {
      icon: "Coffee",
      title: { es: "Desayuno", en: "Breakfast", de: "Fruhstuck" },
      description: {
        es: "Empieza el dia en Cafe de Prueba, a pocos minutos.",
        en: "Start the day at Cafe de Prueba, just a few minutes away.",
        de: "Beginnen Sie den Tag im Cafe de Prueba, nur wenige Minuten entfernt.",
      },
    },
  ],
  contacts: [
    {
      name: { es: "Contacto Habitam", en: "Habitam contact", de: "Habitam Kontakt" },
      phone: "+34 600 000 000",
      icon: "Phone",
    },
    {
      name: { es: "Emergencias", en: "Emergencies", de: "Notfalle" },
      phone: "112",
      icon: "AlertCircle",
    },
  ],
  faq: [
    {
      question: {
        es: "Como entro en la vivienda?",
        en: "How do I enter the property?",
        de: "Wie betrete ich die Unterkunft?",
      },
      answer: {
        es: "Usa el codigo enviado antes de tu llegada para abrir la puerta principal.",
        en: "Use the code sent before your arrival to open the main door.",
        de: "Verwenden Sie den vor Ihrer Ankunft gesendeten Code, um die Haupteingangstur zu offnen.",
      },
    },
    {
      question: {
        es: "Cual es la clave del WiFi?",
        en: "What is the WiFi password?",
        de: "Wie lautet das WiFi-Passwort?",
      },
      answer: {
        es: "La red es TEST_WIFI y la contrasena es 12345678.",
        en: "The network is TEST_WIFI and the password is 12345678.",
        de: "Das Netzwerk heisst TEST_WIFI und das Passwort lautet 12345678.",
      },
    },
  ],
};
