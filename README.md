# Frontend - Global66 Landing

Landing page de tipo de cambio desarrollada con Nuxt 2, Vue 2 y TailwindCSS con SSR habilitado.

## Requisitos Previos

- Node.js >= 14.x
- npm >= 6.x
- Backend corriendo en `http://localhost:3001` (o configurar `API_BASE_URL`)

## Instalación

```bash
# Instalar dependencias
npm install
```

## Configuración

### Variables de Entorno (Opcional)

Crear archivo `.env` en la raíz del frontend:

```env
API_BASE_URL=http://localhost:3001
```

Si no se configura, por defecto usará `http://localhost:3001`.

## Ejecución

### Modo Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### Modo Producción

```bash
# Build para producción
npm run build

# Iniciar servidor SSR
npm start
```

### Generar Sitio Estático (Opcional)

```bash
npm run generate
```

Genera archivos estáticos en la carpeta `dist/`

## Rutas Disponibles

### Página Principal
```
http://localhost:3000/
```
Redirige o muestra landing genérico.

### Páginas de Tipo de Cambio
```
http://localhost:3000/precio/peso-chileno    # USD → CLP
http://localhost:3000/precio/sol-peruano     # USD → PEN
http://localhost:3000/precio/dolares         # USD → USD
```

Cada ruta muestra:
- Tasa de cambio en tiempo real
- Fecha y hora de actualización
- Diseño responsive
- SEO optimizado (meta tags, canonical, hreflang)

## Estructura del Proyecto

```
front/
├── assets/
│   ├── css/
│   │   └── main.css              # Estilos globales + Tailwind
│   └── images/                   # SVGs y imágenes
├── components/
│   ├── common/
│   │   ├── AppHeader.vue         # Header con navegación
│   │   ├── AppFooter.vue         # Footer
│   │   └── AppButton.vue         # Botón reutilizable
│   ├── hero/
│   │   ├── HeroSection.vue       # Sección hero
│   │   ├── ExchangeDisplay.vue   # Display de tasa
│   │   └── FlagStand.vue         # Banderas con efecto 3D
│   └── features/
│       ├── FeatureSection.vue    # Sección de características
│       └── StoreBadges.vue       # Badges App/Play Store
├── layouts/
│   └── default.vue               # Layout principal
├── pages/
│   ├── index.vue                 # Página de inicio
│   └── precio/
│       └── _slug.vue             # Ruta dinámica (/precio/*)
├── utils/
│   ├── currencies.js             # Mapeo de slugs a divisas
│   └── formatters.js             # Formateo de números/fechas
├── static/                       # Archivos estáticos
├── nuxt.config.js               # Configuración de Nuxt
├── tailwind.config.js           # Configuración de Tailwind
└── package.json
```

## Componentes Principales

### HeroSection
Sección principal con:
- Título "Valor del dólar hoy"
- Tasa de cambio en grande (ej: "1 USD = 987,62 CLP")
- Fecha y hora de actualización
- Banderas con efecto glassmorphism

### FlagStand
Componente visual con:
- Banderas de USA y país objetivo
- Círculos transparentes con efecto glassmorphism
- Flecha verde indicando conversión
- Pedestal SVG
- Responsive design

### AppHeader
Header con:
- Logo Global66 (blanco con ícono azul #1F49B6)
- Navegación: PERSONAS, EMPRESAS
- Menú: Productos, Beneficios, Ayuda
- Selector de país (bandera Chile)
- Botones: Iniciar Sesión, Crear cuenta

## Colores del Diseño (Tailwind Config)

```javascript
primary: {
  800: '#1F49B6'  // Azul principal
}
accent: {
  green: '#00C48C'  // Verde para CTAs
}
brand: {
  blue: '#2746C7'  // Azul de marca
}
```

## SEO Implementado

Cada página `/precio/*` incluye:

### Meta Tags Dinámicos
```html
<title>Valor del dólar hoy en pesos chilenos | Global66</title>
<meta name="description" content="Consulta el tipo de cambio del dólar a peso chileno hoy: 1 USD = 987,62 CLP. Actualizado en tiempo real con Global66.">
```

### Open Graph
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:url" content="https://global66.com/precio/peso-chileno">
<meta property="og:type" content="website">
```

### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
```

### Canonical y Hreflang
```html
<link rel="canonical" href="https://global66.com/precio/peso-chileno">
<link rel="alternate" hreflang="es-CL" href="...">
<link rel="alternate" hreflang="es-PE" href="...">
<link rel="alternate" hreflang="x-default" href="...">
```

## Mapeo de Slugs a Divisas

El archivo `utils/currencies.js` mapea URLs amigables:

```javascript
'peso-chileno' → { code: 'CLP', name: 'Peso Chileno', locale: 'es-CL' }
'sol-peruano'  → { code: 'PEN', name: 'Sol Peruano', locale: 'es-PE' }
'dolares'      → { code: 'USD', name: 'Dólar', locale: 'en-US' }
```

## Formateo de Números

Usa `Intl.NumberFormat` para formateo local:

```javascript
// CLP (Chile)
987.62 → "987,62"

// PEN (Perú)
3.81 → "3,81"

// USD (USA)
1.00 → "1.00"
```

## Responsive Design

Breakpoints de TailwindCSS:
- `sm:` - 640px (móvil horizontal)
- `md:` - 768px (tablet)
- `lg:` - 1024px (desktop)
- `xl:` - 1280px (desktop grande)

## Tecnologías

- **Nuxt 2.15.8** - Framework Vue SSR
- **Vue 2.7.10** - Framework JavaScript
- **TailwindCSS 3.1.8** - Framework CSS utility-first
- **@nuxtjs/axios 5.13.6** - Cliente HTTP
- **@nuxtjs/tailwindcss 4.2.1** - Integración Tailwind

## Verificación de SSR

Para verificar que SSR está funcionando:

```bash
# Hacer request con curl (debe retornar HTML completo)
curl http://localhost:3000/precio/peso-chileno

# Debe incluir en el HTML:
# - <title> con texto completo
# - <meta> tags con contenido
# - Contenido renderizado (no solo <div id="__nuxt"></div>)
```

## Lighthouse (Métricas Objetivo)

- **Performance**: ≥ 90
- **Accessibility**: ≥ 90
- **Best Practices**: ≥ 90
- **SEO**: ≥ 90

## Testing Local

### 1. Verificar que el Backend esté corriendo
```bash
curl http://localhost:3001/api/rates
```

### 2. Iniciar Frontend
```bash
npm run dev
```

### 3. Abrir en navegador
```
http://localhost:3000/precio/peso-chileno
```

Debe mostrar:
- Tasa de cambio actualizada
- Banderas con efecto glassmorphism
- Header y footer funcionales
- Diseño responsive

## Deployment

### Vercel (Recomendado para Nuxt)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run generate

# Publish directory
dist
```

### Variables de Entorno en Producción

Configurar en el dashboard del servicio:
```
API_BASE_URL=https://tu-api.com
```

## Notas de Desarrollo

- SSR está habilitado por defecto (`ssr: true, target: 'server'`)
- Los componentes en `components/` se auto-importan (excepto subdirectorios)
- Los componentes en subdirectorios requieren import explícito en layouts
- TailwindCSS está en modo JIT (Just-In-Time)
- Las imágenes en `assets/` se procesan por Webpack
- Las imágenes en `static/` se sirven directamente

## Solución de Problemas

### Puerto 3000 ya en uso
```bash
# Cambiar puerto en nuxt.config.js
server: {
  port: 3002,
  host: '0.0.0.0'
}
```

### No se ve el diseño (Tailwind no carga)
```bash
# Limpiar caché y reinstalar
rm -rf node_modules .nuxt
npm install
npm run dev
```

### Error "Unknown custom element"
Los componentes en subdirectorios necesitan import explícito:
```javascript
import AppHeader from '~/components/common/AppHeader.vue'
```

### Las tasas no cargan
Verificar que:
1. Backend esté corriendo en puerto 3001
2. `API_BASE_URL` esté configurado correctamente
3. No haya errores CORS
