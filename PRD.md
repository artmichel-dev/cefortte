# Product Requirements Document (PRD)

## Cefortte – Sitio Web Corporativo de Capacitación Industrial

---

## 1. Visión del Producto

**Cefortte** es una plataforma web corporativa diseñada para presentar, promover y convertir clientes empresariales para un centro de capacitación profesional en seguridad industrial.

La plataforma funciona como la presencia digital principal de la empresa, enfocada en la generación de leads, claridad en los servicios y construcción de confianza para audiencias B2B.

### Propósito

Servir como la base digital escalable y profesional que posicione a Cefortte como proveedor confiable de capacitación industrial, facilitando la conversión de visitantes en clientes empresariales.

---

## 2. Objetivos del Producto

### Objetivos Principales

1. **Posicionamiento**: Establecer a Cefortte como proveedor confiable de capacitación industrial
2. **Comunicación**: Comunicar claramente las categorías de capacitación y soluciones empresariales
3. **Conversión**: Habilitar a las empresas para solicitar cotizaciones de manera fácil
4. **Navegación**: Proporcionar una experiencia de navegación estructurada e intuitiva
5. **Escalabilidad**: Servir como base escalable para futuras expansiones

### Métricas de Éxito

- Aumento en solicitudes de cotización
- Tiempo promedio en sitio
- Tasa de rebote reducida
- Navegación exitosa entre páginas de categorías
- Conversión de visitantes en leads

---

## 3. Audiencia Objetivo

### Personas Principales

- **Gerentes de Seguridad**: Responsables de implementar programas de seguridad
- **Gerentes de Operaciones**: Encargados de la eficiencia operativa y cumplimiento
- **Líderes de RH**: Involucrados en desarrollo de personal y cumplimiento normativo
- **Supervisores de Planta**: Necesitan capacitación práctica para sus equipos
- **Directores y Tomadores de Decisión**: Requieren visión estratégica de soluciones empresariales

### Características de la Audiencia

- Nivel técnico: Intermedio a avanzado
- Contexto: Entornos industriales y de manufactura
- Necesidad: Cumplimiento normativo y mejora continua en seguridad
- Comportamiento: Búsqueda de información detallada antes de tomar decisiones

---

## 4. Requisitos Funcionales

### 4.1 Navegación y Estructura

- **RF-001**: El sitio debe proporcionar navegación clara entre todas las secciones principales
- **RF-002**: Cada página debe incluir un header y footer consistentes
- **RF-003**: El sitio debe soportar rutas estáticas y dinámicas (`[slug]`)
- **RF-004**: Debe existir un mapa de sitio accesible en `/mapa-sitio`

### 4.2 Páginas de Contenido

- **RF-005**: Página de inicio (`/`) que presente la empresa y servicios principales
- **RF-006**: Página de cursos (`/cursos`) que liste todas las categorías de capacitación
- **RF-007**: Páginas de categoría de cursos (8 categorías específicas)
- **RF-008**: Páginas dinámicas de curso individual (`/cursos/[slug]`)
- **RF-009**: Página de soluciones empresariales (`/empresas`)
- **RF-010**: Página de contacto (`/contacto`)
- **RF-011**: Página de cotización (`/cotizacion`)
- **RF-012**: Página de testimonios (`/testimonios`)
- **RF-013**: Página sobre nosotros (`/nosotros`)
- **RF-014**: Página de blog (`/blog`)
- **RF-015**: Páginas legales: privacidad (`/privacidad`) y términos (`/terminos`)

### 4.3 Páginas de Categoría de Cursos

Las siguientes categorías deben tener páginas dedicadas:

- **RF-016**: Seguridad Operativa (`/cursos/seguridad-operativa`)
- **RF-017**: Maquinaria y Equipos Críticos (`/cursos/maquinaria-equipos`)
- **RF-018**: Sustancias Químicas (`/cursos/sustancias-quimicas`)
- **RF-019**: Brigadas y Protección Civil (`/cursos/brigadas-proteccion-civil`)
- **RF-020**: Normas NOM-STPS (`/cursos/normas-stps`)
- **RF-021**: Gestión y Cultura de Seguridad (`/cursos/gestion-cultura`)
- **RF-022**: Logística y Almacenes (`/cursos/logistica-almacenes`)
- **RF-023**: Construcción (`/cursos/construccion`)

Cada página de categoría debe incluir:

- Descripción del alcance de la categoría
- Lista de cursos incluidos
- Beneficios comunicados
- Llamadas a la acción para solicitar cotización

### 4.4 Páginas de Curso Individual

- **RF-024**: Cada curso debe tener una página dinámica accesible por slug
- **RF-025**: Estructura estandarizada que incluya:
  - Descripción del curso
  - Objetivo
  - Temario
  - Duración
  - Modalidad
  - Audiencia objetivo
  - Llamada a la acción

### 4.5 Formularios y Conversión

- **RF-026**: Formulario de contacto funcional en `/contacto`
- **RF-027**: Formulario de cotización en `/cotizacion`
- **RF-028**: Validación de formularios en el frontend
- **RF-029**: Llamadas a la acción (CTAs) visibles en todas las páginas relevantes

### 4.6 Componentes Reutilizables

- **RF-030**: Sistema de componentes UI estandarizados:
  - Botones
  - Tarjetas
  - Formularios
  - Elementos de navegación
  - Secciones de contenido
- **RF-031**: Componentes de sección reutilizables:
  - Hero sections
  - Grids de características
  - Testimonios
  - Galerías
  - Módulos de contenido de texto
  - Secciones CTA

### 4.7 SEO y Contenido

- **RF-032**: Estructura SEO-friendly con metadatos apropiados
- **RF-033**: URLs semánticas y descriptivas
- **RF-034**: Sitemap generado automáticamente
- **RF-035**: Robots.txt configurado
- **RF-036**: Datos estructurados (Structured Data) donde sea apropiado

---

## 5. Requisitos No Funcionales

### 5.1 Rendimiento

- **RNF-001**: Tiempo de carga inicial < 3 segundos
- **RNF-002**: First Contentful Paint (FCP) < 1.5 segundos
- **RNF-003**: Largest Contentful Paint (LCP) < 2.5 segundos
- **RNF-004**: Optimización de imágenes y assets
- **RNF-005**: Renderizado del lado del servidor (SSR) para mejor SEO

### 5.2 Responsividad

- **RNF-006**: Diseño responsive que funcione en:
  - Desktop (1920px, 1440px, 1280px)
  - Tablet (768px, 1024px)
  - Mobile (320px, 375px, 414px)
- **RNF-007**: Navegación móvil optimizada
- **RNF-008**: Formularios usables en dispositivos móviles

### 5.3 Accesibilidad

- **RNF-009**: Cumplimiento con WCAG 2.1 nivel AA
- **RNF-010**: Navegación por teclado funcional
- **RNF-011**: Contraste de colores adecuado
- **RNF-012**: Etiquetas ARIA donde sea necesario
- **RNF-013**: Textos alternativos en imágenes

### 5.4 Mantenibilidad

- **RNF-014**: Código bien estructurado y documentado
- **RNF-015**: Separación clara de responsabilidades
- **RNF-016**: Componentes reutilizables y modulares
- **RNF-017**: Sistema de diseño consistente
- **RNF-018**: TypeScript para type safety

### 5.5 Escalabilidad

- **RNF-019**: Arquitectura que permita agregar nuevas páginas fácilmente
- **RNF-020**: Sistema de componentes extensible
- **RNF-021**: Estructura de datos preparada para crecimiento
- **RNF-022**: Routing escalable con App Router

### 5.6 Compatibilidad

- **RNF-023**: Compatibilidad con navegadores modernos:
  - Chrome (últimas 2 versiones)
  - Firefox (últimas 2 versiones)
  - Safari (últimas 2 versiones)
  - Edge (últimas 2 versiones)
- **RNF-024**: Degradación elegante en navegadores antiguos

---

## 6. Stack Tecnológico

### 6.1 Framework Frontend

- **Next.js 16** (App Router)
  - File-based routing
  - Server-first architecture
  - SEO-friendly rendering
  - Component-driven structure

### 6.2 Estilos

- **Tailwind CSS 4**
  - Utility-first styling
  - Espaciado, tipografía y layout consistentes
  - UI basada en design system

### 6.3 Librerías Principales

- **React 19** - Biblioteca UI
- **TypeScript 5** - Type safety
- **@headlessui/react** - Componentes UI accesibles
- **@heroicons/react** - Iconografía
- **motion** - Animaciones
- **clsx** - Utilidades de clases CSS

### 6.4 Arquitectura

- App Router (`/app` directory)
- Páginas compuestas de secciones reutilizables (`<section>`)
- Separación clara entre:
  - Layout (`/components/layout`)
  - Contenido (`/components/section`)
  - Componentes UI (`/components/ui`)

---

## 7. Arquitectura de Información

### 7.1 Estructura de Rutas (Source of Truth)

```
app/
├─ blog/                          # Blog corporativo
├─ contacto/                      # Formulario de contacto
├─ cotizacion/                    # Formulario de cotización
├─ cursos/                        # Sección principal de cursos
│  ├─ [slug]/                     # Páginas dinámicas de curso individual
│  ├─ brigadas-proteccion-civil/  # Categoría: Brigadas y Protección Civil
│  ├─ construccion/               # Categoría: Construcción
│  ├─ gestion-cultura/            # Categoría: Gestión y Cultura
│  ├─ logistica-almacenes/        # Categoría: Logística y Almacenes
│  ├─ maquinaria-equipos/         # Categoría: Maquinaria y Equipos
│  ├─ normas-stps/                # Categoría: Normas STPS
│  ├─ seguridad-operativa/        # Categoría: Seguridad Operativa
│  ├─ sustancias-quimicas/        # Categoría: Sustancias Químicas
│  └─ page.tsx                    # Landing principal de cursos
├─ empresas/                      # Soluciones empresariales
├─ mapa-sitio/                    # Mapa del sitio
├─ nosotros/                      # Sobre la empresa
├─ privacidad/                    # Política de privacidad
├─ terminos/                      # Términos y condiciones
├─ testimonios/                   # Testimonios de clientes
└─ page.tsx                       # Página de inicio
```

### 7.2 Tipos de Páginas

#### Páginas de Aterrizaje (Landing Pages)

Páginas que introducen áreas principales del negocio y actúan como puntos de conversión primarios.

#### Páginas de Categoría

Páginas optimizadas para SEO y conversión a nivel de categoría, que explican el alcance, listan cursos incluidos y comunican beneficios.

#### Páginas de Curso Individual

Páginas dinámicas que representan cursos específicos con estructura estandarizada.

---

## 8. Sistema de Diseño

### 8.1 Principios

- **Atomic Design**: Átomos, moléculas y organismos reutilizables
- **Consistencia**: Componentes UI estandarizados
- **Escalabilidad**: Diseñado para crecimiento a largo plazo
- **Mantenibilidad**: Código predecible y fácil de mantener

### 8.2 Componentes del Sistema

- Botones
- Tarjetas
- Formularios
- Elementos de navegación
- Secciones de contenido
- Tipografía estandarizada
- Paleta de colores consistente

### 8.3 Beneficios del Sistema

- Consistencia visual
- Desarrollo más rápido
- Mantenimiento más fácil
- Comportamiento UI predecible

---

## 9. Criterios de Aceptación

### 9.1 Funcionalidad

- ✅ Todas las rutas definidas son accesibles y renderizan correctamente
- ✅ Los formularios validan entrada y muestran mensajes de error apropiados
- ✅ La navegación funciona correctamente en todos los dispositivos
- ✅ Los CTAs dirigen a las páginas correctas
- ✅ El contenido se muestra correctamente en todas las páginas

### 9.2 Rendimiento

- ✅ Lighthouse score > 90 en Performance
- ✅ Lighthouse score > 90 en SEO
- ✅ Lighthouse score > 90 en Accessibility
- ✅ Sin errores de consola en producción

### 9.3 Responsividad

- ✅ Layout se adapta correctamente en todos los breakpoints
- ✅ Texto legible sin zoom en móviles
- ✅ Formularios usables en dispositivos táctiles
- ✅ Navegación móvil funcional

### 9.4 SEO

- ✅ Metadatos apropiados en todas las páginas
- ✅ Sitemap generado correctamente
- ✅ Robots.txt configurado
- ✅ URLs semánticas y descriptivas
- ✅ Datos estructurados implementados

---

## 10. Consideraciones de Testing

### 10.1 Áreas de Prueba

- Páginas estáticas
- Rutas dinámicas (`[slug]`)
- Formularios con validación
- Navegación entre rutas anidadas
- Layouts responsivos
- Componentes UI reutilizables

### 10.2 Validaciones de TestSprite

- Resolución correcta de routing
- Renderizado de página por ruta
- Consistencia de componentes
- Comportamiento de formularios
- Estabilidad de layout en diferentes breakpoints

---

## 11. Prioridades y Roadmap

### Fase 1: Fundación (Completado)

- ✅ Estructura base de Next.js
- ✅ Sistema de diseño básico
- ✅ Routing principal
- ✅ Componentes UI fundamentales

### Fase 2: Contenido (En Progreso)

- ✅ Páginas de categoría de cursos
- ✅ Páginas de curso individual
- ✅ Páginas de información corporativa
- 🔄 Optimización de contenido SEO

### Fase 3: Conversión (Próximo)

- 🔄 Optimización de formularios
- 🔄 Integración con backend/CRM
- 🔄 Analytics y tracking
- 🔄 A/B testing de CTAs

### Fase 4: Mejoras Continuas

- 🔄 Optimización de rendimiento
- 🔄 Expansión de contenido
- 🔄 Nuevas funcionalidades basadas en feedback

---

## 12. Dependencias y Limitaciones

### Dependencias Técnicas

- Next.js 16.x
- React 19.x
- Node.js (versión compatible con Next.js 16)
- Navegadores modernos

### Limitaciones Conocidas

- Requiere JavaScript habilitado para funcionalidad completa
- Optimizado para navegadores modernos
- Contenido estático (sin CMS integrado en fase inicial)

---

## 13. Glosario

- **App Router**: Sistema de routing de Next.js basado en archivos
- **CTA**: Call to Action (Llamada a la Acción)
- **SSR**: Server-Side Rendering (Renderizado del lado del servidor)
- **SEO**: Search Engine Optimization (Optimización para motores de búsqueda)
- **WCAG**: Web Content Accessibility Guidelines
- **B2B**: Business to Business (Negocio a Negocio)

---

## 14. Referencias

- [Product Specification Document](./product-specification.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Documento creado**: 2024  
**Última actualización**: 2024  
**Versión**: 1.0
