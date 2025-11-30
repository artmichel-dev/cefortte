# 📋 Información del Proyecto CEFORTTE

## 🏢 Sobre CEFORTTE

**CEFORTTE** - Centro de Formación y Capacitación en Seguridad Industrial

### Misión
Proporcionar capacitación de alta calidad en seguridad industrial, equipando a profesionales con las habilidades y conocimientos necesarios para crear ambientes de trabajo seguros y productivos.

### Visión
Ser el centro de capacitación líder en seguridad industrial, reconocido por la excelencia en formación y el impacto positivo en la reducción de accidentes laborales.

---

## 🎓 Servicios Ofrecidos

### Cursos de Capacitación
- Seguridad Industrial Básica
- Prevención de Riesgos Laborales
- Primeros Auxilios Industriales
- Manejo de Sustancias Peligrosas
- Seguridad en Altura
- Seguridad Eléctrica
- Manejo de Equipos de Protección Personal (EPP)

### Certificaciones
- Certificación en Seguridad Industrial
- Certificación en Prevención de Riesgos
- Certificación en Primeros Auxilios
- Certificaciones especializadas por industria

### Modalidades
- 🏫 **Presencial** - Clases en instalaciones
- 💻 **En Línea** - Cursos virtuales
- 🔄 **Híbrido** - Combinación de ambos
- 🏢 **In-Company** - Capacitación en empresas

---

## 💻 Sobre Este Proyecto (Frontend)

### Propósito
Este frontend es la **primera fase** del sitio web de CEFORTTE, diseñado para:

1. **Presentar la institución** y sus servicios
2. **Mostrar el catálogo de cursos** disponibles
3. **Facilitar inscripciones** en línea
4. **Proporcionar información** sobre certificaciones
5. **Conectar con estudiantes** potenciales

### Alcance Actual (v0.1.0)

#### ✅ Implementado
- Estructura base del sitio
- Navegación responsive
- Diseño mobile-first
- Optimizaciones de rendimiento
- Accesibilidad básica
- SEO preparado

#### 🚧 En Desarrollo
- Páginas de contenido
- Sistema de inscripción
- Catálogo de cursos
- Formularios de contacto

#### 📋 Planeado
- Backend API
- Sistema de autenticación
- Dashboard de estudiantes
- Sistema de pagos
- Certificados digitales
- Video streaming para cursos

---

## 🎨 Diseño y Branding

### Colores Principales
```css
/* Brand Colors */
--brand-700: #991b1b;  /* Rojo principal */
--brand-600: #dc2626;  /* Rojo hover */

/* Neutrales */
--stone-50: #fafaf9;   /* Fondo claro */
--stone-100: #f5f5f4;  /* Fondo */
--stone-600: #57534e;  /* Texto secundario */
--stone-800: #292524;  /* Texto principal */
--stone-950: #0c0a09;  /* Texto oscuro */
```

### Tipografía
- **Headings**: Oswald (Bold, Uppercase)
- **Body**: Inter (Regular, Medium, Bold)
- **Code**: Fira Code (Monospace)

### Logos
- `icon-sm-cefortte-black.svg` - Para fondos claros
- `icon-sm-cefortte-red.svg` - Color principal
- `icon-sm-cefortte-white.svg` - Para fondos oscuros

---

## 🏗️ Arquitectura del Proyecto

### Stack Tecnológico

```
┌─────────────────────────────────────┐
│         Frontend (Next.js)          │
│  ┌───────────────────────────────┐  │
│  │   React 19 + TypeScript 5     │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │    Tailwind CSS v4 + CSS      │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│        CDN (nav.js script)          │
│     cdn.vinonuevo.com/vercel        │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│      Backend API (Futuro)           │
│    - Node.js / Python / Go          │
│    - REST / GraphQL                 │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│      Base de Datos (Futuro)         │
│    - PostgreSQL / MongoDB           │
└─────────────────────────────────────┘
```

### Flujo de Datos

```
Usuario → Frontend (Next.js) → CDN Scripts → Interacción
                    ↓
              [Futuro: API]
                    ↓
            [Futuro: Database]
```

---

## 📱 Experiencia de Usuario

### Navegación Principal
```
Home
├── Nosotros
│   ├── Misión y Visión
│   ├── Equipo
│   └── Instalaciones
│
├── Cursos
│   ├── Catálogo
│   ├── Calendario
│   └── Inscripción
│
├── Certificaciones
│   ├── Tipos
│   ├── Requisitos
│   └── Validación
│
├── Contacto
│   ├── Formulario
│   ├── Ubicación
│   └── FAQ
│
└── Mi Cuenta (Futuro)
    ├── Dashboard
    ├── Mis Cursos
    └── Certificados
```

### Flujo de Inscripción (Planeado)

```
1. Explorar Cursos
   ↓
2. Seleccionar Curso
   ↓
3. Ver Detalles
   ↓
4. Crear Cuenta / Login
   ↓
5. Completar Inscripción
   ↓
6. Pago (si aplica)
   ↓
7. Confirmación
   ↓
8. Acceso al Curso
```

---

## 🔒 Seguridad y Privacidad

### Medidas Implementadas
- ✅ HTTPS enforced
- ✅ Headers de seguridad
- ✅ Sanitización de inputs
- ✅ CORS configurado

### Planeado
- [ ] Autenticación JWT
- [ ] Encriptación de datos sensibles
- [ ] Rate limiting
- [ ] CAPTCHA en formularios
- [ ] Auditoría de accesos
- [ ] Cumplimiento GDPR/CCPA

---

## 📊 Métricas y Objetivos

### KPIs del Sitio Web
- Tiempo de carga < 2 segundos
- Tasa de conversión de visitantes a inscritos
- Tasa de finalización de cursos
- Satisfacción del usuario (NPS)
- Accesibilidad (WCAG 2.1 AA)

### Objetivos de Negocio
- Aumentar inscripciones en 50% en 6 meses
- Reducir tiempo de inscripción en 70%
- Mejorar satisfacción del cliente a 4.5/5
- Expandir alcance geográfico

---

## 🌐 Internacionalización (Futuro)

### Idiomas Planeados
- 🇪🇸 Español (Actual)
- 🇺🇸 Inglés
- 🇧🇷 Portugués

### Consideraciones
- i18n con next-intl
- Contenido localizado
- Formatos de fecha/hora
- Monedas locales

---

## 🤝 Stakeholders

### Equipo de Desarrollo
- Frontend Developer
- Backend Developer (Futuro)
- UI/UX Designer
- QA Engineer
- DevOps Engineer

### Equipo de CEFORTTE
- Director General
- Coordinador Académico
- Instructores
- Personal Administrativo
- Soporte Técnico

### Usuarios Finales
- Estudiantes individuales
- Empresas (clientes corporativos)
- Instructores
- Administradores

---

## 📞 Contacto del Proyecto

### Desarrollo
- **Email**: dev@cefortte.com
- **Slack**: #cefortte-frontend
- **GitHub**: github.com/cefortte/frontend

### CEFORTTE
- **Web**: www.cefortte.com
- **Email**: contacto@cefortte.com
- **Teléfono**: +52 (XXX) XXX-XXXX
- **Dirección**: [Dirección física]

---

## 📅 Timeline del Proyecto

### Q4 2024
- [x] Setup inicial del proyecto
- [x] Diseño de navegación
- [x] Implementación de componentes base
- [ ] Páginas de contenido
- [ ] Formularios básicos

### Q1 2025
- [ ] Backend API
- [ ] Sistema de autenticación
- [ ] Base de datos
- [ ] Sistema de inscripción

### Q2 2025
- [ ] Dashboard de usuario
- [ ] Sistema de pagos
- [ ] Video streaming
- [ ] Certificados digitales

### Q3 2025
- [ ] App móvil nativa
- [ ] Chat en vivo
- [ ] Analytics avanzado
- [ ] Optimizaciones de rendimiento

---

## 🎯 Próximos Hitos

### Hito 1: MVP (Minimum Viable Product)
**Fecha objetivo**: Enero 2025
- Sitio web funcional
- Catálogo de cursos
- Formulario de contacto
- Información institucional

### Hito 2: Sistema de Inscripción
**Fecha objetivo**: Marzo 2025
- Registro de usuarios
- Inscripción en línea
- Pagos básicos
- Confirmaciones por email

### Hito 3: Plataforma Completa
**Fecha objetivo**: Junio 2025
- Dashboard de estudiantes
- Contenido de cursos
- Certificados digitales
- Sistema de evaluación

---

## 📚 Recursos Adicionales

### Documentación
- [README.md](./README.md) - Información general
- [CHANGELOG.md](./CHANGELOG.md) - Historial de cambios
- [src/hooks/README_useInputMobileFix.md](./src/hooks/README_useInputMobileFix.md) - Documentación de hooks

### Enlaces Útiles
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

---

<div align="center">

**CEFORTTE - Formando Profesionales en Seguridad Industrial**

*Comprometidos con la excelencia en capacitación*

</div>

