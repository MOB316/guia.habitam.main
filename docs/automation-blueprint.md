# Blueprint de Automatización: GHL + Make + GitHub + Vercel

## Objetivo

Montar un flujo fiable para dar de alta nuevos inmuebles sin tocar código manualmente en cada alta.

Resultado esperado:

1. El equipo rellena un formulario en GHL.
2. Make recibe y normaliza la información.
3. Los datos sensibles quedan 100% manuales.
4. La IA solo genera los bloques editoriales aprobados.
5. Se crea el archivo del inmueble.
6. Se actualiza el registro central.
7. Se abre un PR en GitHub.
8. Vercel genera preview.
9. Se revisa.
10. Se hace merge a `main`.

## Principio Rector

Separar siempre el alta en dos bloques:

### A. Datos manuales y sensibles

Estos campos deben venir escritos por el equipo y nunca por IA.

- nombre del inmueble
- slug
- dirección
- URL de Google Maps
- check-in
- check-out
- nombre del WiFi
- contraseña del WiFi
- ubicación del router
- instrucciones de acceso
- normas principales
- teléfono principal
- teléfono de emergencia
- amenities
- inventario
- imagen hero

### B. Contenido editorial generado

Estos bloques sí pueden ser generados por IA a partir del contexto manual:

- subtítulo
- mensaje de bienvenida
- recomendaciones
- lugares cercanos
- bloque de movilidad
- FAQ
- traducciones `en` y `de`

## Arquitectura Recomendada

No conviene que GHL o Make escriban TypeScript directamente.

La ruta robusta es:

`GHL -> Make -> JSON normalizado -> generador controlado -> GitHub PR -> Vercel preview -> revisión -> merge`

Esto evita:

- errores de formato
- roturas del contrato `PropertyData`
- conflictos al cambiar la arquitectura del frontend

## Fuente de Verdad

La fuente de verdad debe ser un payload estructurado con dos nodos:

- `manual`
- `generated`

Ese payload debe vivir primero como JSON limpio. Después un generador lo transforma al archivo final:

- `src/data/properties/<slug>.ts`

## Reglas de IA

La IA puede:

- redactar texto de bienvenida
- proponer recomendaciones
- generar FAQ de estancia
- traducir al inglés y alemán

La IA no puede:

- inventar contraseñas
- inventar dirección
- inventar inventario
- inventar datos de acceso
- cambiar normas operativas
- decidir el slug final sin validación

## Estrategia de Imagen

Para agilizar las altas:

- usar por defecto una hero compartida de marca
- solo permitir una imagen propia del inmueble si el equipo la aporta manualmente

Fallback recomendado:

- `/habitam-hero-option-2.svg`

## Flujo Recomendado en Make

### Paso 1. Trigger

Webhook desde el formulario de GHL.

### Paso 2. Normalización

Make debe:

- limpiar el slug
- convertir checkboxes a booleanos reales
- aplicar defaults
- rellenar hero genérica si no llega imagen

### Paso 3. Validación

Antes de seguir, Make debe comprobar:

- que el slug no esté vacío
- que el slug no exista ya
- que haya dirección
- que haya WiFi
- que haya inventario mínimo
- que haya teléfono principal

### Paso 4. Separación por bloques

Construir:

- `manual`
- `generated`

### Paso 5. Generación IA

La IA recibe solo:

- contexto del inmueble
- tono de marca
- ciudad/zona
- amenities
- accesibilidad

Y devuelve solo:

- `subtitle`
- `welcomeMessage`
- `nearbyPlaces`
- `mobility`
- `recommendations`
- `faq`
- traducciones

### Paso 6. Generador controlado

Un generador transforma el JSON validado al contrato final `PropertyData`.

### Paso 7. Actualización del repo

El proceso debe:

1. crear `src/data/properties/<slug>.ts`
2. actualizar `src/data/properties/index.ts`
3. ejecutar validación
4. abrir PR

### Paso 8. Validación automática

Mínimo:

- `tsc --noEmit`
- `npm run build`

Ideal:

- test de rutas por slug

### Paso 9. Preview

Vercel genera preview para revisión visual.

### Paso 10. Producción

Solo tras revisión humana:

- merge a `main`
- despliegue productivo

## Seguridad y Gobernanza

- nunca desplegar a producción directamente desde GHL el día 1
- abrir PR siempre
- validar unicidad de slug
- bloquear el alta si faltan campos críticos
- mantener acceso y contraseñas fuera de prompts abiertos
- guardar un log de quién creó cada inmueble

## Recomendación de Implementación

Fase 1:

- GHL recoge datos
- Make normaliza
- se genera PR automáticamente

Fase 2:

- preview validada por el equipo
- checklist mínima antes de merge

Fase 3:

- IA más rica para recomendaciones y FAQ
- mayor nivel de defaults por zona o tipo de inmueble

## Lo Más Importante

La mejor arquitectura para Habitam no es:

`GHL -> Make -> TypeScript directo -> producción`

La mejor arquitectura para Habitam es:

`GHL -> Make -> payload limpio -> generador controlado -> GitHub PR -> Vercel preview -> revisión -> merge`
