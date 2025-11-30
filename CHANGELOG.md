# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [0.1.0] - 2024-11-30

### 🎉 Inicial

Primera versión del frontend de CEFORTTE.

### ✨ Agregado

#### Configuración Base

- Configuración inicial de Next.js 15.1.3 con App Router
- Configuración de TypeScript 5
- Configuración de Tailwind CSS v4
- Configuración de ESLint y Prettier
- Estructura de carpetas del proyecto

#### Componentes

- `Navigation.tsx` - Navegación principal con menú hamburguesa
- `Footer.tsx` - Footer del sitio con enlaces legales
- `Menu.js` - Componente de ejemplo para testing

#### Hooks Personalizados

- `useInputMobileFix.js` - Hook para mejorar UX de inputs en móviles
  - Scroll automático cuando aparece el teclado
  - Prevención de zoom en iOS
  - Restauración de scroll al cerrar teclado

#### Estilos

- `globals.css` - Estilos globales con Tailwind CSS v4
- `navigation.css` - Estilos específicos del menú de navegación
- Configuración de fuentes personalizadas (Oswald, Inter, Fira Code)
- Font Awesome 6.2.0 para iconos

#### Assets

- Logos SVG en 3 variantes (black, red, white)
- Favicon personalizado

#### Scripts Externos

- Integración con CDN para `nav.js` (https://cdn.vinonuevo.com/vercel/nav.js)

#### Documentación

- README.md completo con información del proyecto
- Documentación del hook `useInputMobileFix`
- CHANGELOG.md para seguimiento de cambios

### 🔧 Configuración

#### Next.js

- App Router habilitado
- Optimización de fuentes con `next/font`
- Configuración de metadata para SEO

#### Tailwind CSS

- Plugins: `@tailwindcss/forms`, `@tailwindcss/typography`
- Variables CSS personalizadas para fuentes
- Clases utility personalizadas
- Componentes reutilizables (botones, enlaces, cards)

#### TypeScript

- Configuración estricta
- Path aliases configurados (`@/`)
- Tipos para componentes y props

### 🎨 Características

#### Navegación

- Menú responsive con hamburguesa en móviles
- Navegación completa en desktop
- Scroll lock cuando el menú está abierto
- Animaciones suaves y transiciones
- Soporte para teclado y screen readers

#### Optimización Móvil

- Diseño mobile-first
- Touch-friendly interactions
- Prevención de zoom en iOS
- Scroll inteligente para inputs

#### Rendimiento

- Scripts cargados desde CDN
- Fuentes optimizadas
- CSS modular con tree-shaking
- Lazy loading preparado

#### Accesibilidad

- Estructura semántica HTML5
- ARIA attributes
- Navegación por teclado
- Labels asociados correctamente

### 🐛 Correcciones

- Corregido bug de fondo blanco en resize (removido del código legacy)
- Corregido comportamiento de scroll en móviles
- Corregido zoom automático en iOS
- Corregido border-bottom del menú cuando está abierto

### 🔄 Migrado

#### De HTML Legacy a Next.js

- Estructura HTML del menú → Componente React `Navigation.tsx`
- CSS personalizado → Módulos CSS y Tailwind
- JavaScript vanilla → React Hooks
- Scripts locales → CDN externo

#### Archivos Migrados

- `input-mobile-fix.js` → Hook `useInputMobileFix.js`
- `nav.js` → CDN externo
- `navigation.css` → `src/styles/navigation.css`
- Estructura HTML → Componentes React

### 🗑️ Removido

- Archivos JavaScript legacy de `public/js/`
- Carpeta `public/js/` (vacía)
- Scripts inline en HTML
- Dependencias innecesarias del proyecto anterior

### 📝 Notas Técnicas

#### Dependencias Principales

```json
{
  "next": "15.1.3",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss": "^4.0.0-beta.7"
}
```

#### Estructura de Rutas

- `/` - Página principal (landing)
- Rutas adicionales pendientes para Fase 2

#### Variables de Entorno

- Ninguna requerida en esta versión
- Preparado para agregar en futuras versiones

---

## [Unreleased]

### 🚀 Planeado para Próximas Versiones

#### v0.2.0 - Contenido Básico

- [ ] Página de cursos
- [ ] Página de contacto
- [ ] Página sobre nosotros
- [ ] Galería de imágenes

#### v0.3.0 - Funcionalidad

- [ ] Sistema de inscripción
- [ ] Formularios de contacto
- [ ] Newsletter subscription
- [ ] Búsqueda de cursos

#### v0.4.0 - Backend Integration

- [ ] API REST
- [ ] Autenticación de usuarios
- [ ] Base de datos
- [ ] CMS para contenido

#### v0.5.0 - Características Avanzadas

- [ ] Dashboard de usuario
- [ ] Sistema de pagos
- [ ] Certificados digitales
- [ ] Video streaming

---

## Tipos de Cambios

- `✨ Agregado` - Para nuevas características
- `🔧 Cambiado` - Para cambios en funcionalidad existente
- `🗑️ Deprecado` - Para características que serán removidas
- `🗑️ Removido` - Para características removidas
- `🐛 Corregido` - Para corrección de bugs
- `🔒 Seguridad` - Para vulnerabilidades de seguridad

---

## Enlaces

- [Repositorio](https://github.com/cefortte/frontend)
- [Issues](https://github.com/cefortte/frontend/issues)
- [Pull Requests](https://github.com/cefortte/frontend/pulls)

---

**Mantenido por**: CEFORTTE Development Team
**Última actualización**: 30 de Noviembre, 2024
