export const testVivienda = {
  slug: "test-vivienda",
  name: "Test Vivienda",
  location: "Palma de Mallorca",
  description: "Vivienda de prueba para validar el sistema automático de guías Habitam.",

  heroImage: "/images/test-vivienda/hero.jpg",

  wifi: {
    network: "TEST_WIFI",
    password: "12345678"
  },

  checkin: {
    time: "15:00",
    instructions: "Entrada autónoma mediante código en la puerta principal."
  },

  checkout: {
    time: "11:00"
  },

  houseRules: [
    "No fumar dentro de la vivienda",
    "No se permiten fiestas",
    "Respetar el descanso de los vecinos"
  ],

  contacts: {
    host: "Habitam",
    phone: "+34 600 000 000"
  }
}
