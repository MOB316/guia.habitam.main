# Habitam Guest Guide · versión madre

Este repositorio es la **versión madre** de las guías de inmuebles de Habitam.

## Qué hace
- Una sola aplicación para múltiples inmuebles.
- Cada inmueble vive en un archivo de datos.
- Cada URL carga una guía distinta: `/can-miquel`, `/buger-house`, etc.

## Estructura importante
- `src/data/types.ts` → esquema de datos.
- `src/data/properties/` → un archivo por inmueble.
- `src/pages/PropertyPage.tsx` → página dinámica por `propertyId`.
- `vercel.json` → rutas SPA para Vercel.

## Cómo subirlo a GitHub
1. Descomprime este zip.
2. Sube **el contenido de la carpeta** al repositorio, no la carpeta contenedora.
3. En la raíz del repo deben verse archivos como `package.json`, `index.html`, `src`, `public`, `vercel.json`.

## Cómo desplegar en Vercel
1. Importa el repositorio desde GitHub.
2. Framework: **Vite**.
3. Root Directory: `./`.
4. Deploy.

## Añadir un nuevo inmueble
1. Duplica `src/data/properties/can-miquel.ts`.
2. Renómbralo, por ejemplo `buger-house.ts`.
3. Cambia el `id` y los datos.
4. Añádelo a `src/data/properties/index.ts`.

## Objetivo de automatización (GHL + Make)
La siguiente fase recomendada es:
1. Formulario en GHL.
2. Make transforma la respuesta en un objeto JSON.
3. Ese JSON crea o actualiza el archivo del inmueble.
4. GitHub recibe el cambio.
5. Vercel publica automáticamente.

Para esa fase, la fuente de verdad será el esquema de `src/data/types.ts`.
