import type { PropertyData } from '../types';

export const canMiquel: PropertyData = {
  id: "can-miquel",
  slug: "can-miquel",
  name: "Ca'n Miquel",
  subtitle: {
    es: "Apartamento premium en el corazón de Palma",
    en: "Premium apartment in the heart of Palma",
    de: "Premium-Apartment im Herzen von Palma"
  },
  heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
  welcomeMessage: {
    es: "Nos alegra que estés aquí. Esta guía tiene todo lo que necesitas para disfrutar tu estancia.",
    en: "We're glad you're here. This guide has everything you need to enjoy your stay.",
    de: "Wir freuen uns, dass Sie hier sind. Dieser Guide enthält alles für Ihren Aufenthalt."
  },
  address: "Carrer de Sant Miquel 42, 3ºB, 07002 Palma de Mallorca",
  checkIn: "15:00",
  checkOut: "11:00",
  wifiName: "Habitam_CnMiquel",
  wifiPassword: "Welcome2024!",
  routerLocation: {
    es: "En el mueble del salón, junto a la TV",
    en: "In the living room cabinet, next to the TV",
    de: "Im Wohnzimmerschrank, neben dem TV"
  },
  phone: "+34 671 234 567",
  emergencyPhone: "112",
  rules: {
    es: "No fumar. Silencio de 22:00 a 08:00. Máximo 4 personas.",
    en: "No smoking. Quiet hours 22:00–08:00. Maximum 4 guests.",
    de: "Nicht rauchen. Ruhezeit 22:00–08:00. Maximal 4 Gäste."
  },
  access: {
    es: "Cerradura electrónica. Código enviado por email antes de tu llegada.",
    en: "Electronic lock. Code sent by email before your arrival.",
    de: "Elektronisches Schloss. Code per E-Mail vor Ankunft."
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
  hasDishwasher: true,
  hasOven: true,
  mapsUrl: "https://maps.google.com/?q=Carrer+de+Sant+Miquel+42+Palma",
  inventory: [
    {
      key: "kitchen",
      items: [
        { name: { es: "Platos llanos", en: "Dinner plates", de: "Flache Teller" }, quantity: 6 },
        { name: { es: "Platos hondos", en: "Soup plates", de: "Suppenteller" }, quantity: 6 },
        { name: { es: "Vasos", en: "Glasses", de: "Gläser" }, quantity: 8 },
        { name: { es: "Tazas", en: "Cups", de: "Tassen" }, quantity: 4 },
        { name: { es: "Sartén grande", en: "Large pan", de: "Große Pfanne" }, quantity: 1 },
        { name: { es: "Sartén pequeña", en: "Small pan", de: "Kleine Pfanne" }, quantity: 1 },
        { name: { es: "Olla grande", en: "Large pot", de: "Großer Topf" }, quantity: 1 },
        { name: { es: "Olla pequeña", en: "Small pot", de: "Kleiner Topf" }, quantity: 1 },
        { name: { es: "Cubiertos completos", en: "Full cutlery set", de: "Komplettes Besteck" }, quantity: 6, notes: { es: "Por persona", en: "Per person", de: "Pro Person" } },
        { name: { es: "Cuchillos de cocina", en: "Kitchen knives", de: "Küchenmesser" }, quantity: 3 },
        { name: { es: "Tabla de cortar", en: "Cutting board", de: "Schneidebrett" }, quantity: 1 },
        { name: { es: "Cafetera italiana", en: "Italian coffee maker", de: "Italienische Kaffeekanne" }, quantity: 1 },
      ]
    },
    {
      key: "bedrooms",
      items: [
        { name: { es: "Juego de sábanas", en: "Bed sheet set", de: "Bettwäsche-Set" }, quantity: 2 },
        { name: { es: "Almohadas", en: "Pillows", de: "Kissen" }, quantity: 4 },
        { name: { es: "Edredón", en: "Duvet", de: "Bettdecke" }, quantity: 2 },
        { name: { es: "Manta extra", en: "Extra blanket", de: "Extra Decke" }, quantity: 2 },
        { name: { es: "Perchas", en: "Hangers", de: "Kleiderbügel" }, quantity: 20 },
      ]
    },
    {
      key: "bathrooms",
      items: [
        { name: { es: "Toallas grandes", en: "Bath towels", de: "Badetücher" }, quantity: 4 },
        { name: { es: "Toallas pequeñas", en: "Hand towels", de: "Handtücher" }, quantity: 4 },
        { name: { es: "Alfombra de baño", en: "Bath mat", de: "Badematte" }, quantity: 1 },
        { name: { es: "Secador de pelo", en: "Hair dryer", de: "Haartrockner" }, quantity: 1 },
      ]
    },
    {
      key: "cleaning",
      items: [
        { name: { es: "Aspiradora", en: "Vacuum cleaner", de: "Staubsauger" }, quantity: 1 },
        { name: { es: "Fregona y cubo", en: "Mop and bucket", de: "Mopp und Eimer" }, quantity: 1 },
        { name: { es: "Escoba y recogedor", en: "Broom and dustpan", de: "Besen und Kehrblech" }, quantity: 1 },
      ]
    },
    {
      key: "technology",
      items: [
        { name: { es: "Smart TV 55\"", en: "55\" Smart TV", de: "55\" Smart TV" }, quantity: 1, notes: { es: "Con Netflix y YouTube", en: "With Netflix & YouTube", de: "Mit Netflix & YouTube" } },
        { name: { es: "Router WiFi", en: "WiFi router", de: "WiFi-Router" }, quantity: 1 },
        { name: { es: "Cargador USB", en: "USB charger", de: "USB-Ladegerät" }, quantity: 2 },
      ]
    },
    {
      key: "laundry",
      items: [
        { name: { es: "Lavadora", en: "Washing machine", de: "Waschmaschine" }, quantity: 1 },
        { name: { es: "Tendedero", en: "Drying rack", de: "Wäscheständer" }, quantity: 1 },
        { name: { es: "Plancha", en: "Iron", de: "Bügeleisen" }, quantity: 1 },
        { name: { es: "Tabla de planchar", en: "Ironing board", de: "Bügelbrett" }, quantity: 1 },
      ]
    },
    {
      key: "extras",
      items: [
        { name: { es: "Paraguas", en: "Umbrella", de: "Regenschirm" }, quantity: 2 },
        { name: { es: "Botiquín básico", en: "Basic first aid kit", de: "Erste-Hilfe-Set" }, quantity: 1 },
        { name: { es: "Juegos de mesa", en: "Board games", de: "Brettspiele" }, quantity: 3 },
      ]
    },
  ],
  howToUse: [
    { icon: "Wifi", title: { es: "WiFi", en: "WiFi", de: "WiFi" }, description: { es: "Red: Habitam_CnMiquel / Contraseña: Welcome2024!", en: "Network: Habitam_CnMiquel / Password: Welcome2024!", de: "Netzwerk: Habitam_CnMiquel / Passwort: Welcome2024!" } },
    { icon: "Router", title: { es: "Router", en: "Router", de: "Router" }, description: { es: "En el mueble del salón. Si falla, desconéctalo 30 seg y vuelve a enchufar.", en: "In the living room cabinet. If it fails, unplug for 30 sec and replug.", de: "Im Wohnzimmerschrank. Bei Ausfall 30 Sek. trennen und erneut anschließen." } },
    { icon: "Trash2", title: { es: "Basuras", en: "Trash", de: "Müll" }, description: { es: "Contenedores en la esquina de la calle. Orgánico (marrón), envases (amarillo), vidrio (verde), papel (azul).", en: "Bins at the street corner. Organic (brown), packaging (yellow), glass (green), paper (blue).", de: "Container an der Straßenecke. Bio (braun), Verpackung (gelb), Glas (grün), Papier (blau)." } },
    { icon: "Thermometer", title: { es: "Aire acondicionado", en: "Air conditioning", de: "Klimaanlage" }, description: { es: "Mando junto a la puerta principal. Recomendamos 23-24°C.", en: "Remote by the main door. We recommend 23-24°C.", de: "Fernbedienung neben der Eingangstür. Wir empfehlen 23-24°C." } },
    { icon: "Droplets", title: { es: "Agua caliente", en: "Hot water", de: "Warmwasser" }, description: { es: "Termo eléctrico con capacidad para 80L. Espera unos segundos al abrir el grifo.", en: "80L electric heater. Wait a few seconds after turning on the tap.", de: "80L Elektroboiler. Warten Sie einige Sekunden nach dem Aufdrehen." } },
    { icon: "WashingMachine", title: { es: "Lavadora", en: "Washer", de: "Waschmaschine" }, description: { es: "En el lavadero. Programa rápido: botón 3. Detergente bajo el fregadero.", en: "In the utility room. Quick cycle: button 3. Detergent under the sink.", de: "Im Hauswirtschaftsraum. Schnellprogramm: Taste 3. Waschmittel unter der Spüle." } },
    { icon: "CookingPot", title: { es: "Cocina", en: "Kitchen", de: "Küche" }, description: { es: "Vitrocerámica de inducción. Activar con el botón central. Horno: girar el dial.", en: "Induction hob. Activate with center button. Oven: turn the dial.", de: "Induktionsherd. Mit Mitteltaste aktivieren. Ofen: Drehknopf verwenden." } },
    { icon: "Key", title: { es: "Llaves", en: "Keys", de: "Schlüssel" }, description: { es: "Cerradura electrónica. Si pierdes el código, contacta con Habitam.", en: "Electronic lock. If you lose the code, contact Habitam.", de: "Elektronisches Schloss. Bei Codeverlust Habitam kontaktieren." } },
    { icon: "Volume2", title: { es: "Normas de ruido", en: "Noise rules", de: "Lärmregeln" }, description: { es: "Silencio de 22:00 a 08:00. Respetar a los vecinos. Gracias.", en: "Quiet hours 22:00–08:00. Please respect neighbors. Thank you.", de: "Ruhezeit 22:00–08:00. Bitte Rücksicht auf Nachbarn nehmen." } },
    { icon: "AlertCircle", title: { es: "Incidencia", en: "Report issue", de: "Störung" }, description: { es: "Contacta con Habitam: +34 671 234 567 o WhatsApp.", en: "Contact Habitam: +34 671 234 567 or WhatsApp.", de: "Kontaktieren Sie Habitam: +34 671 234 567 oder WhatsApp." } },
  ],
  nearbyPlaces: [
    { name: "Forn de Sant Joan", category: "restaurants", description: { es: "Restaurante mediterráneo con terraza", en: "Mediterranean restaurant with terrace", de: "Mediterranes Restaurant mit Terrasse" }, distance: "350m", mapsUrl: "https://maps.google.com/?q=Forn+de+Sant+Joan+Palma", phone: "+34 971 728 422", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80" },
    { name: "Café Riutort", category: "cafes", description: { es: "Café specialty con ambiente tranquilo", en: "Specialty coffee with calm atmosphere", de: "Specialty-Kaffee mit ruhiger Atmosphäre" }, distance: "200m", mapsUrl: "https://maps.google.com/?q=Cafe+Riutort+Palma", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80" },
    { name: "Mercat de l'Olivar", category: "supermarkets", description: { es: "Mercado tradicional con productos frescos", en: "Traditional market with fresh produce", de: "Traditioneller Markt mit frischen Produkten" }, distance: "500m", mapsUrl: "https://maps.google.com/?q=Mercat+Olivar+Palma", image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&q=80" },
    { name: "Farmacia Clar", category: "pharmacies", description: { es: "Farmacia 24h con amplio surtido", en: "24h pharmacy with wide selection", de: "24h-Apotheke mit großer Auswahl" }, distance: "150m", mapsUrl: "https://maps.google.com/?q=Farmacia+Clar+Palma", phone: "+34 971 712 345" },
    { name: "Rayuela Coworking", category: "coworkings", description: { es: "Coworking moderno y silencioso", en: "Modern and quiet coworking", de: "Modernes und ruhiges Coworking" }, distance: "600m", mapsUrl: "https://maps.google.com/?q=Rayuela+Coworking+Palma", website: "https://rayuela.co", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" },
    { name: "Platja de Can Pere Antoni", category: "beaches", description: { es: "La playa más cercana, ideal para pasear", en: "Nearest beach, ideal for walking", de: "Nächster Strand, ideal zum Spazieren" }, distance: "2.1km", mapsUrl: "https://maps.google.com/?q=Platja+Can+Pere+Antoni", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
    { name: "Palma Gym", category: "gyms", description: { es: "Gimnasio completo con pases diarios", en: "Full gym with day passes", de: "Fitnessstudio mit Tageskarten" }, distance: "400m", mapsUrl: "https://maps.google.com/?q=Palma+Gym", phone: "+34 971 456 789" },
    { name: "Wellness Palma Spa", category: "wellness", description: { es: "Spa urbano con masajes y sauna", en: "Urban spa with massages and sauna", de: "Stadtspa mit Massagen und Sauna" }, distance: "800m", mapsUrl: "https://maps.google.com/?q=Wellness+Palma+Spa", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80" },
    { name: "Bar Flexas", category: "bars", description: { es: "Bar de cócteles con terraza tranquila", en: "Cocktail bar with quiet terrace", de: "Cocktailbar mit ruhiger Terrasse" }, distance: "300m", mapsUrl: "https://maps.google.com/?q=Bar+Flexas+Palma", image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&q=80" },
    { name: "Eroski City", category: "supermarkets", description: { es: "Supermercado con horario amplio", en: "Supermarket with extended hours", de: "Supermarkt mit langen Öffnungszeiten" }, distance: "250m", mapsUrl: "https://maps.google.com/?q=Eroski+City+Sant+Miquel+Palma" },
  ],
  mobility: [
    { title: { es: "Centro de Palma", en: "Palma center", de: "Zentrum Palma" }, description: { es: "Estás a 5 min a pie de Plaza España", en: "5 min walk to Plaza España", de: "5 Min. zu Fuß zur Plaza España" }, mapsUrl: "https://maps.google.com/?q=Plaza+España+Palma", time: "5 min" },
    { title: { es: "Parada de bus más cercana", en: "Nearest bus stop", de: "Nächste Bushaltestelle" }, description: { es: "Líneas 3, 7 y 20 en Plaza España", en: "Lines 3, 7 and 20 at Plaza España", de: "Linien 3, 7 und 20 an der Plaza España" }, mapsUrl: "https://maps.google.com/?q=Plaza+España+Palma", time: "5 min" },
    { title: { es: "Radio Taxi Palma", en: "Radio Taxi Palma", de: "Radio Taxi Palma" }, description: { es: "Servicio 24h: +34 971 401 414", en: "24h service: +34 971 401 414", de: "24h Service: +34 971 401 414" } },
    { title: { es: "Aeropuerto de Palma (PMI)", en: "Palma Airport (PMI)", de: "Flughafen Palma (PMI)" }, description: { es: "A 15 min en coche o 30 min en bus (A1)", en: "15 min by car or 30 min by bus (A1)", de: "15 Min. mit dem Auto oder 30 Min. mit dem Bus (A1)" }, mapsUrl: "https://maps.google.com/?q=Palma+Airport", time: "15-30 min" },
  ],
  recommendations: [
    { icon: "Coffee", title: { es: "Desayuno tranquilo", en: "Quiet breakfast", de: "Ruhiges Frühstück" }, description: { es: "Café Riutort a 200m. Specialty coffee y tostadas artesanas.", en: "Café Riutort, 200m away. Specialty coffee and artisan toast.", de: "Café Riutort, 200m entfernt. Specialty-Kaffee und handgemachter Toast." } },
    { icon: "Laptop", title: { es: "Coworking cómodo", en: "Comfortable coworking", de: "Bequemes Coworking" }, description: { es: "Rayuela Coworking: WiFi rápido, ambiente profesional, pases por día.", en: "Rayuela Coworking: fast WiFi, professional vibe, day passes.", de: "Rayuela Coworking: schnelles WiFi, professionelle Atmosphäre, Tageskarten." } },
    { icon: "Dumbbell", title: { es: "Ponerte en forma", en: "Stay fit", de: "Fit bleiben" }, description: { es: "Palma Gym con pases diarios a 400m del apartamento.", en: "Palma Gym with day passes, 400m from the apartment.", de: "Palma Gym mit Tageskarten, 400m von der Wohnung." } },
    { icon: "Sparkles", title: { es: "Wellness y relax", en: "Wellness & relax", de: "Wellness & Entspannung" }, description: { es: "Wellness Palma Spa: masajes, sauna y jacuzzi a 800m.", en: "Wellness Palma Spa: massages, sauna and jacuzzi, 800m away.", de: "Wellness Palma Spa: Massagen, Sauna und Jacuzzi, 800m entfernt." } },
    { icon: "MapPin", title: { es: "Desconectar", en: "Unwind", de: "Abschalten" }, description: { es: "Paseo al atardecer por el Paseo Marítimo o la Catedral.", en: "Sunset walk along the Paseo Marítimo or the Cathedral.", de: "Spaziergang bei Sonnenuntergang am Paseo Marítimo oder der Kathedrale." } },
    { icon: "ShoppingBag", title: { es: "Compras rápidas", en: "Quick shopping", de: "Schnelles Einkaufen" }, description: { es: "Amazon entrega en 24h. MediaMarkt en el centro comercial FAN a 15 min.", en: "Amazon delivers in 24h. MediaMarkt at FAN mall, 15 min away.", de: "Amazon liefert in 24h. MediaMarkt im FAN Einkaufszentrum, 15 Min. entfernt." } },
  ],
  contacts: [
    { name: { es: "Emergencias", en: "Emergencies", de: "Notfälle" }, phone: "112", icon: "AlertCircle" },
    { name: { es: "Policía Nacional", en: "National Police", de: "Nationalpolizei" }, phone: "091", icon: "Shield" },
    { name: { es: "Ambulancia", en: "Ambulance", de: "Krankenwagen" }, phone: "061", icon: "Heart" },
    { name: { es: "Bomberos", en: "Fire department", de: "Feuerwehr" }, phone: "080", icon: "Flame" },
    { name: { es: "Radio Taxi Palma", en: "Radio Taxi Palma", de: "Radio Taxi Palma" }, phone: "+34 971 401 414", icon: "Car" },
    { name: { es: "Aeropuerto PMI", en: "PMI Airport", de: "Flughafen PMI" }, phone: "+34 913 211 000", icon: "Plane" },
    { name: { es: "Hospital Son Espases", en: "Son Espases Hospital", de: "Krankenhaus Son Espases" }, phone: "+34 871 205 000", icon: "Building2" },
    { name: { es: "Farmacia de guardia", en: "Duty pharmacy", de: "Notapotheke" }, phone: "+34 971 712 345", icon: "Pill" },
    { name: { es: "Contacto Habitam", en: "Habitam contact", de: "Habitam Kontakt" }, phone: "+34 671 234 567", icon: "Phone" },
    { name: { es: "Soporte incidencias", en: "Incident support", de: "Störungsmeldung" }, phone: "+34 671 234 567", icon: "MessageCircle" },
  ],
  faq: [
    { question: { es: "¿Cómo me conecto al WiFi?", en: "How do I connect to WiFi?", de: "Wie verbinde ich mich mit dem WiFi?" }, answer: { es: "Red: Habitam_CnMiquel. Contraseña: Welcome2024!. El router está en el mueble del salón.", en: "Network: Habitam_CnMiquel. Password: Welcome2024!. Router is in the living room cabinet.", de: "Netzwerk: Habitam_CnMiquel. Passwort: Welcome2024!. Der Router steht im Wohnzimmerschrank." } },
    { question: { es: "¿Dónde está el router?", en: "Where is the router?", de: "Wo ist der Router?" }, answer: { es: "En el mueble del salón, junto a la TV.", en: "In the living room cabinet, next to the TV.", de: "Im Wohnzimmerschrank, neben dem TV." } },
    { question: { es: "¿Qué hago si falla internet?", en: "What if the internet fails?", de: "Was tun bei Internetausfall?" }, answer: { es: "Desconecta el router 30 segundos y vuelve a enchufarlo. Si persiste, contacta con Habitam.", en: "Unplug the router for 30 seconds and plug it back in. If it persists, contact Habitam.", de: "Router 30 Sekunden trennen und erneut anschließen. Wenn das Problem fortbesteht, Habitam kontaktieren." } },
    { question: { es: "¿Cómo saco la basura?", en: "How do I take out the trash?", de: "Wie entsorge ich den Müll?" }, answer: { es: "Contenedores en la esquina de la calle. Orgánico (marrón), envases (amarillo), vidrio (verde), papel (azul).", en: "Bins at the street corner. Organic (brown), packaging (yellow), glass (green), paper (blue).", de: "Container an der Straßenecke. Bio (braun), Verpackung (gelb), Glas (grün), Papier (blau)." } },
    { question: { es: "¿Qué hago si pierdo las llaves?", en: "What if I lose the keys?", de: "Was wenn ich den Schlüssel verliere?" }, answer: { es: "Contacta con Habitam inmediatamente: +34 671 234 567.", en: "Contact Habitam immediately: +34 671 234 567.", de: "Kontaktieren Sie sofort Habitam: +34 671 234 567." } },
    { question: { es: "¿A qué hora es el check-out?", en: "What time is check-out?", de: "Wann ist der Check-out?" }, answer: { es: "A las 11:00. Si necesitas salida tardía, consúltanos con antelación.", en: "At 11:00. If you need a late check-out, ask us in advance.", de: "Um 11:00 Uhr. Für späten Check-out kontaktieren Sie uns vorab." } },
    { question: { es: "¿Cómo contacto con Habitam?", en: "How do I contact Habitam?", de: "Wie kontaktiere ich Habitam?" }, answer: { es: "Teléfono/WhatsApp: +34 671 234 567. Email: info@habitam.es", en: "Phone/WhatsApp: +34 671 234 567. Email: info@habitam.es", de: "Telefon/WhatsApp: +34 671 234 567. E-Mail: info@habitam.es" } },
    { question: { es: "¿Cómo llego al aeropuerto?", en: "How do I get to the airport?", de: "Wie komme ich zum Flughafen?" }, answer: { es: "En coche: 15 min. Bus A1 desde Plaza España: 30 min. Taxi: ~20€.", en: "By car: 15 min. Bus A1 from Plaza España: 30 min. Taxi: ~€20.", de: "Mit dem Auto: 15 Min. Bus A1 ab Plaza España: 30 Min. Taxi: ~20€." } },
    { question: { es: "¿Dónde compro algo urgente?", en: "Where can I buy something urgently?", de: "Wo kaufe ich dringend etwas?" }, answer: { es: "Eroski City a 250m (horario amplio). Amazon entrega en 24h.", en: "Eroski City, 250m away (extended hours). Amazon delivers in 24h.", de: "Eroski City, 250m entfernt (lange Öffnungszeiten). Amazon liefert in 24h." } },
  ],
};
