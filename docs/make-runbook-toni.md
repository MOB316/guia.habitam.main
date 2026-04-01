# Runbook para Toni: Montaje de GHL + Make

## Objetivo

Este documento está pensado para que Toni pueda poner en marcha la automatización con el menor riesgo posible.

Meta:

1. GHL recoge el alta de un inmueble.
2. Make recibe el formulario.
3. Make valida y normaliza.
4. La IA genera solo el contenido permitido.
5. Se crea un payload limpio.
6. Ese payload termina en un PR de GitHub.
7. Vercel genera preview.
8. El equipo revisa y hace merge.

## Resumen Ejecutivo

No vamos a hacer:

- GHL escribiendo TypeScript
- Make empujando directamente a producción
- IA inventando datos sensibles

Sí vamos a hacer:

- GHL como formulario de entrada
- Make como orquestador
- GitHub como capa de control
- Vercel como preview y producción

## Qué debe preparar Toni antes de tocar Make

### 1. Accesos

Toni necesita:

- acceso a la cuenta de GHL donde vive el formulario
- acceso a Make
- acceso al repo de GitHub `MOB316/guia.habitam.main`
- acceso al proyecto correcto de Vercel

### 2. Confirmar proyecto correcto

Proyecto de guía:

- `guia-habitam-main`

Proyecto que no hay que tocar para esta automatización:

- `habitam-palma-direct`

### 3. Confirmar rama protegida

Recomendado en GitHub:

- trabajar siempre vía PR
- no permitir escritura directa a `main` desde automatizaciones en la primera fase

## Paso 1. Crear el formulario en GHL

Toni debe crear el formulario usando como base:

- [ghl-form-fields.md](/Users/mark/Documents/Playground/guia-habitam-main/docs/ghl-form-fields.md)

### Recomendación práctica

Crear secciones visuales:

1. Identificación
2. Dirección y contacto
3. Estancia
4. WiFi
5. Amenities
6. Inventario
7. Imagen
8. Opciones IA

### Muy importante

El campo `slug` debe ir visible y editable.

No recomendamos generarlo de forma automática solo en GHL, porque puede hacer falta que el equipo fuerce un slug concreto.

## Paso 2. Configurar envío del formulario desde GHL

Opciones posibles:

### Opción recomendada

Enviar el formulario a Make mediante webhook.

Qué debe hacer Toni:

1. Crear un nuevo escenario en Make.
2. Añadir módulo `Webhooks > Custom webhook`.
3. Copiar la URL del webhook.
4. Configurar GHL para mandar los datos del formulario a esa URL.

Si GHL no permite ese envío directo en vuestra configuración concreta:

- usar el disparador nativo de GHL en Make si existe disponible en vuestra cuenta
- o usar Zapier/Webhook intermedio solo si no hay otra opción

## Paso 3. Crear el escenario base en Make

Nombre recomendado del escenario:

- `Alta inmueble Habitam`

Orden recomendado de módulos:

1. `Custom Webhook`
2. `Tools / Set multiple variables`
3. `Tools / JSON`
4. `Router`
5. `OpenAI` o módulo IA equivalente
6. `GitHub`
7. `Email/Slack/Notificación`

## Paso 4. Mapeo inicial del webhook

Make recibirá campos del formulario y Toni debe mapearlos a este esquema:

- `manual.propertyName`
- `manual.slug`
- `manual.address`
- `manual.mapsUrl`
- `manual.checkIn`
- `manual.checkOut`
- `manual.wifiName`
- `manual.wifiPassword`
- `manual.routerLocation`
- `manual.hostPhone`
- `manual.emergencyPhone`
- `manual.accessInstructions`
- `manual.houseRules`
- `manual.heroImage`
- `manual.amenities`
- `manual.inventory`
- `generated.translateTo`
- `generated.generateSubtitle`
- `generated.generateWelcomeMessage`
- `generated.generateNearbyPlaces`
- `generated.generateMobility`
- `generated.generateRecommendations`
- `generated.generateFaq`

Referencia:

- [property-intake-template.json](/Users/mark/Documents/Playground/guia-habitam-main/docs/property-intake-template.json)

## Paso 5. Normalización en Make

Antes de llamar a IA o GitHub, Toni debe crear un bloque de normalización.

### Reglas mínimas

- si `heroImage` viene vacío, usar `/habitam-hero-option-2.svg`
- transformar booleanos a `true/false` reales
- limpiar espacios al inicio y final
- si `slug` viene vacío, construirlo a partir de `propertyName`

La lógica de slug debe seguir esta regla:

- minúsculas
- sin tildes
- espacios a guiones
- sin símbolos extraños

Referencia técnica:

- [property-intake.ts](/Users/mark/Documents/Playground/guia-habitam-main/src/automation/property-intake.ts)

Función clave:

- `normalizeSlug`

## Paso 6. Validaciones obligatorias en Make

Antes de seguir, Toni debe bloquear el flujo si falta alguno de estos:

- `propertyName`
- `slug`
- `address`
- `mapsUrl`
- `wifiName`
- `wifiPassword`
- `routerLocation`
- `hostPhone`
- `accessInstructions`
- `houseRules`

También debe validar:

- que el slug no exista ya en el repo

### Cómo validar el slug

Opción simple inicial:

- mantener una lista en Make de slugs existentes

Opción mejor:

- consultar el repo vía GitHub API
- comprobar si ya existe `src/data/properties/<slug>.ts`

Si existe:

- abortar flujo
- enviar aviso a Toni o al equipo

## Paso 7. Bloque IA

La IA no debe recibir todo el payload sin filtro.

Toni debe pasarle:

- nombre del inmueble
- dirección general o zona
- amenities
- tono de marca
- contexto de Palma
- acceso resumido si aporta contexto, pero no contraseñas
- reglas resumidas si aportan contexto

### La IA debe devolver solo

- `subtitle`
- `welcomeMessage`
- `nearbyPlaces`
- `mobility`
- `recommendations`
- `faq`
- traducciones `en` y `de`

### La IA no debe devolver

- WiFi
- contraseñas
- inventario
- dirección exacta alterada
- normas operativas inventadas

## Paso 8. Prompt recomendado para la IA

Texto base sugerido para Toni:

```text
Genera contenido editorial para una guía de alojamiento premium de Habitam Palma.

Contexto:
- tono de marca: elegante, claro, premium, cercano, práctico
- idioma base: español
- ciudad: Palma de Mallorca

Usa solo la información proporcionada.
No inventes contraseñas, accesos sensibles, inventario ni datos operativos.
No cambies nombres, teléfonos, dirección ni slug.

Devuelve JSON con estas claves:
- subtitle
- welcomeMessage
- nearbyPlaces
- mobility
- recommendations
- faq
- translations

El contenido debe ser útil para huéspedes reales, claro y breve.
```

## Paso 9. Qué debe hacer Make después de la IA

Una vez Make tenga:

- datos manuales
- datos generados

debe construir un JSON final limpio.

Ese JSON es la materia prima para crear:

- el archivo del inmueble
- la actualización del índice

## Paso 10. Recomendación importante de implementación

Aquí hay dos caminos:

### Camino A. Recomendado

Make llama a un pequeño generador controlado.

Ese generador:

1. recibe el JSON
2. crea el `.ts`
3. actualiza `src/data/properties/index.ts`
4. abre PR

Ventaja:

- menos frágil
- más mantenible
- menos errores de formato

### Camino B. Rápido pero más frágil

Make escribe directamente en GitHub los archivos `.ts`

No lo recomiendo como versión final, pero puede servir como prototipo.

## Paso 11. Qué recomendarle a Toni para fase 1

Si quiere ir rápido y seguro:

1. montar formulario
2. recibir payload
3. validar
4. generar JSON final
5. dejar ese JSON en un email, Slack o Google Sheet de prueba

Es decir:

- primero probar la calidad del payload
- después automatizar GitHub

Eso reduce mucho el riesgo.

## Paso 12. Fase 1 recomendada real

La fase 1 debería quedar así:

### Escenario A

`GHL -> Make -> JSON validado -> notificación interna`

Objetivo:

- comprobar que el formulario está bien diseñado
- comprobar que el payload llega completo

### Escenario B

`GHL -> Make -> JSON validado -> IA -> JSON final -> PR`

Objetivo:

- ya automatizar el alta

## Paso 13. Qué secretos necesita Toni

En Make o en el sistema que use:

- token de GitHub con permisos sobre el repo
- clave del proveedor IA
- URL del webhook

Si se usa GitHub API directamente:

- permiso de contenidos
- permiso de pull requests

## Paso 14. Cómo crear el PR desde la automatización

La automatización debe:

1. crear rama nueva
2. crear o actualizar archivo `src/data/properties/<slug>.ts`
3. actualizar `src/data/properties/index.ts`
4. crear commit
5. abrir PR contra `main`

Nombre recomendado de rama:

- `automation/property-<slug>`

Título recomendado de PR:

- `Add property <slug> via GHL + Make`

## Paso 15. Qué debe comprobar Toni en el PR

Antes de hacer merge:

- que existe el nuevo archivo del inmueble
- que el índice central lo importa
- que el slug aparece en el registro
- que Vercel preview carga la ruta
- que el contenido sensible está correcto
- que la IA no ha inventado cosas raras

## Paso 16. Checklist de aceptación

Checklist mínima para una alta correcta:

- `/nuevo-slug` carga
- no hay pantalla blanca
- no hay 404
- WiFi correcto
- dirección correcta
- acceso correcto
- normas correctas
- teléfonos correctos
- FAQ razonable
- recomendaciones razonables

## Paso 17. Siguiente fase recomendada

Una vez Toni tenga esto estable, lo siguiente sería:

1. construir el generador que cree el `PropertyData`
2. automatizar la actualización de `index.ts`
3. automatizar PR completo
4. opcionalmente añadir tests por slug

## Recomendación final para Toni

Primero debe estabilizar el payload.

Después automatizar GitHub.

Y solo cuando ambas piezas estén sólidas, cerrar el circuito completo con preview y merge.

No merece la pena correr a “todo automático” si antes no están cerradas:

- la calidad de los datos
- la validación del slug
- la separación entre manual e IA
