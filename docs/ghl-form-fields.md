# Campos Recomendados para el Formulario de GHL

## Uso

Este documento define exactamente qué campos debería tener el formulario que el equipo rellenará para dar de alta un nuevo inmueble.

La idea es que el formulario sea amable para negocio y, a la vez, suficiente para automatizar el alta sin tocar código.

## Sección 1. Identificación del inmueble

- `property_name`
  Tipo: texto corto
  Obligatorio: sí
  Ejemplo: `Can Blau`

- `slug`
  Tipo: texto corto
  Obligatorio: sí
  Regla: minúsculas y guiones
  Ejemplo: `can-blau`

## Sección 2. Dirección y contacto

- `address`
  Tipo: texto largo
  Obligatorio: sí

- `maps_url`
  Tipo: URL
  Obligatorio: sí

- `host_phone`
  Tipo: teléfono
  Obligatorio: sí

- `emergency_phone`
  Tipo: teléfono
  Obligatorio: sí

## Sección 3. Estancia

- `check_in`
  Tipo: hora o texto corto
  Obligatorio: sí
  Ejemplo: `15:00`

- `check_out`
  Tipo: hora o texto corto
  Obligatorio: sí
  Ejemplo: `11:00`

- `access_instructions`
  Tipo: texto largo
  Obligatorio: sí

- `house_rules`
  Tipo: texto largo
  Obligatorio: sí

## Sección 4. WiFi

- `wifi_name`
  Tipo: texto corto
  Obligatorio: sí

- `wifi_password`
  Tipo: texto corto
  Obligatorio: sí

- `router_location`
  Tipo: texto largo
  Obligatorio: sí

## Sección 5. Amenities

- `has_elevator`
  Tipo: sí/no
  Obligatorio: sí

- `has_parking`
  Tipo: sí/no
  Obligatorio: sí

- `has_ac`
  Tipo: sí/no
  Obligatorio: sí

- `has_heating`
  Tipo: sí/no
  Obligatorio: sí

- `has_washer`
  Tipo: sí/no
  Obligatorio: sí

- `has_coffee`
  Tipo: sí/no
  Obligatorio: sí

- `has_hairdryer`
  Tipo: sí/no
  Obligatorio: sí

- `has_iron`
  Tipo: sí/no
  Obligatorio: sí

- `has_microwave`
  Tipo: sí/no
  Obligatorio: sí

- `has_dishwasher`
  Tipo: sí/no
  Obligatorio: sí

- `has_oven`
  Tipo: sí/no
  Obligatorio: sí

## Sección 6. Inventario

- `inventory_kitchen`
  Tipo: texto largo
  Obligatorio: sí

- `inventory_bedrooms`
  Tipo: texto largo
  Obligatorio: sí

- `inventory_bathrooms`
  Tipo: texto largo
  Obligatorio: sí

- `inventory_cleaning`
  Tipo: texto largo
  Obligatorio: no

- `inventory_extras`
  Tipo: texto largo
  Obligatorio: no

## Sección 7. Imagen

- `hero_image_url`
  Tipo: URL
  Obligatorio: no
  Default: `/habitam-hero-option-2.svg`

## Sección 8. Opciones de IA

- `generate_translations`
  Tipo: sí/no
  Obligatorio: sí
  Default: sí

- `generate_faq`
  Tipo: sí/no
  Obligatorio: sí
  Default: sí

- `generate_nearby_places`
  Tipo: sí/no
  Obligatorio: sí
  Default: sí

- `generate_recommendations`
  Tipo: sí/no
  Obligatorio: sí
  Default: sí

## Recomendación práctica

Si quieres simplificar la primera versión:

- usa siempre la hero compartida de marca
- deja la FAQ generada
- deja recomendaciones generadas
- deja lugares cercanos generados

Así el equipo solo rellena la parte importante y sensible.
