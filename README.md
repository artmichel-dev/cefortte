# CEFORTTE - Frontend

![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)

## 📋 Descripción

**CEFORTTE** (Centro de Formación y Capacitación en Seguridad Industrial) es una plataforma web diseñada para ofrecer cursos y capacitación especializada en seguridad industrial.

Este repositorio contiene el **frontend inicial** del sitio web, desarrollado con tecnologías modernas para garantizar una experiencia de usuario óptima, rendimiento excepcional y escalabilidad.

---

## 🎯 Objetivo del Proyecto

Desarrollar una plataforma web moderna y profesional que permita a CEFORTTE:

- 📚 **Ofrecer cursos** de capacitación industrial
- 🎓 **Gestionar inscripciones** y certificaciones
- 👥 **Conectar instructores** con estudiantes
- 📱 **Proporcionar acceso móvil** a contenido educativo
- 🔒 **Garantizar seguridad** en el manejo de datos

---

## 🚀 Tecnologías

### Core

- **[Next.js 15.1.3](https://nextjs.org/)** - Framework de React con App Router
- **[React 19](https://react.dev/)** - Biblioteca de UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipado estático

### Estilos

- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework de CSS utility-first
- **[@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)** - Estilos para formularios
- **[@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)** - Estilos tipográficos

### Fuentes

- **[Oswald](https://fonts.google.com/specimen/Oswald)** - Headings
- **[Inter](https://fonts.google.com/specimen/Inter)** - Texto principal
- **[Fira Code](https://fonts.google.com/specimen/Fira+Code)** - Código y monospace
- **[Font Awesome 6.2.0](https://fontawesome.com/)** - Iconos

### Herramientas de Desarrollo

- **[ESLint](https://eslint.org/)** - Linter de código
- **[PostCSS](https://postcss.org/)** - Procesador de CSS
- **[Prettier](https://prettier.io/)** - Formateador de código

---

## 📁 Estructura del Proyecto

```
04_dev/frontend/
├── src/
│   ├── app/                          # App Router de Next.js
│   │   ├── favicon.ico              # Favicon
│   │   ├── globals.css              # Estilos globales + Tailwind
│   │   ├── layout.tsx               # Layout raíz
│   │   └── page.tsx                 # Página principal
│   │
│   ├── components/                   # Componentes reutilizables
│   │   ├── Navigation.tsx           # Navegación principal
│   │   ├── Footer.tsx               # Footer del sitio
│   │   └── Menu.js                  # Componente de ejemplo
│   │
│   ├── hooks/                        # Custom React Hooks
│   │   ├── useInputMobileFix.js     # Fix para inputs móviles
│   │   └── README_useInputMobileFix.md
│   │
│   └── styles/                       # Estilos modulares
│       └── navigation.css           # CSS específico del menú
│
├── public/                           # Archivos estáticos
│   └── svg/                          # Imágenes SVG
│       ├── icon-sm-cefortte-black.svg
│       ├── icon-sm-cefortte-red.svg
│       └── icon-sm-cefortte-white.svg
│
├── .prettierrc                       # Configuración de Prettier
├── eslint.config.mjs                 # Configuración de ESLint
├── next.config.ts                    # Configuración de Next.js
├── postcss.config.mjs                # Configuración de PostCSS
├── tsconfig.json                     # Configuración de TypeScript
└── package.json                      # Dependencias del proyecto
```

---

## 🛠️ Instalación

### Prerrequisitos

- **Node.js** 18.x o superior
- **npm**, **yarn**, **pnpm** o **bun**

### Pasos

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd 04_dev/frontend
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecutar en desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

---

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Genera el build de producción
npm run start        # Inicia el servidor de producción

# Calidad de Código
npm run lint         # Ejecuta ESLint
```

---

## 🎨 Características del Frontend

### ✅ Navegación Responsive

- Menú hamburguesa en móviles
- Navegación completa en desktop
- Animaciones suaves y transiciones
- Scroll lock cuando el menú está abierto

### ✅ Optimización Móvil

- Hook personalizado `useInputMobileFix` para mejorar UX en móviles
- Prevención de zoom en iOS
- Scroll automático a inputs cuando aparece el teclado
- Diseño mobile-first

### ✅ Rendimiento

- Script de navegación cargado desde CDN externo
- Fuentes optimizadas con `next/font`
- Imágenes SVG optimizadas
- CSS modular y tree-shaking

### ✅ Accesibilidad

- Estructura semántica HTML5
- Labels asociados correctamente
- Navegación por teclado
- ARIA attributes implementados

### ✅ SEO

- Metadata configurado
- Estructura semántica
- Open Graph preparado
- Sitemap ready

---

## 🔧 Configuración

### Tailwind CSS v4

El proyecto usa Tailwind CSS v4 con configuración personalizada:

```css
/* globals.css */
@import "tailwindcss";
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";
```

### Fuentes Personalizadas

```typescript
// layout.tsx
const inter = Inter({ variable: "--font-sans" });
const oswald = Oswald({ variable: "--font-heading" });
const firaCode = Fira_Code({ variable: "--font-mono" });
```

### Scripts Externos

```typescript
// CDN para el script de navegación
<Script src="https://cdn.vinonuevo.com/vercel/nav.js" strategy="afterInteractive" />
```

---

## 🎯 Componentes Principales

### Navigation

Componente de navegación principal con menú hamburguesa y navegación completa.

```tsx
import Navigation from "@/components/Navigation";
```

### Footer

Footer del sitio con enlaces legales y redes sociales.

```tsx
import Footer from "@/components/Footer";
```

### useInputMobileFix

Hook personalizado para mejorar la experiencia de inputs en móviles.

```javascript
import useInputMobileFix from "@/hooks/useInputMobileFix";

function MyComponent() {
  useInputMobileFix();
  // ...
}
```

---

## 🌐 Despliegue

### Vercel (Recomendado)

1. **Conectar repositorio** en [Vercel](https://vercel.com)
2. **Configurar variables de entorno** (si aplica)
3. **Desplegar** automáticamente con cada push

### Otros Servicios

El proyecto es compatible con:

- **Netlify**
- **AWS Amplify**
- **Google Cloud Run**
- **Docker** (configuración personalizada)

---

## 📱 Soporte de Navegadores

| Navegador      | Versión Mínima |
| -------------- | -------------- |
| Chrome         | 90+            |
| Firefox        | 88+            |
| Safari         | 14+            |
| Edge           | 90+            |
| iOS Safari     | 14+            |
| Android Chrome | 90+            |

---

## 🔐 Seguridad

- ✅ Headers de seguridad configurados
- ✅ HTTPS enforced en producción
- ✅ Sanitización de inputs
- ✅ CORS configurado correctamente
- ✅ CSP (Content Security Policy) preparado

---

## 🧪 Testing

```bash
# Próximamente
npm run test        # Ejecutar tests
npm run test:e2e    # Tests end-to-end
npm run test:watch  # Tests en modo watch
```

---

## 📚 Documentación Adicional

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

## 🤝 Contribución

Este es un proyecto privado de CEFORTTE. Para contribuir:

1. Crear una rama desde `main`
2. Hacer cambios y commit
3. Crear Pull Request
4. Esperar revisión del equipo

---

## 📄 Licencia

© 2024 CEFORTTE - Centro de Formación y Capacitación en Seguridad Industrial. Todos los derechos reservados.

---

## 👥 Equipo

**CEFORTTE Development Team**

Para soporte o consultas:

- 📧 Email: [contacto@cefortte.com](mailto:contacto@cefortte.com)
- 🌐 Web: [www.cefortte.com](https://www.cefortte.com)

---

## 🗺️ Roadmap

### Fase 1 - Frontend Inicial ✅

- [x] Configuración de Next.js
- [x] Implementación de navegación
- [x] Diseño responsive
- [x] Optimización móvil

### Fase 2 - Contenido (En Progreso)

- [ ] Páginas de cursos
- [ ] Sistema de inscripción
- [ ] Perfil de usuario
- [ ] Dashboard de estudiante

### Fase 3 - Backend Integration

- [ ] API REST
- [ ] Autenticación
- [ ] Base de datos
- [ ] Sistema de pagos

### Fase 4 - Características Avanzadas

- [ ] Video streaming
- [ ] Chat en vivo
- [ ] Certificados digitales
- [ ] App móvil nativa

---

## 📊 Estado del Proyecto

![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=flat-square)
![Version](https://img.shields.io/badge/Version-0.1.0-blue?style=flat-square)
![Build](https://img.shields.io/badge/Build-Passing-success?style=flat-square)

**Última actualización**: Noviembre 2024

---

<div align="center">

**Construido con ❤️ por el equipo de CEFORTTE**

[Sitio Web](https://www.cefortte.com) • [Documentación](./docs) • [Soporte](mailto:soporte@cefortte.com)

</div>
