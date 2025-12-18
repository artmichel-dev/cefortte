/**
 * Constantes SEO para Cefortte
 * Configuración centralizada de datos SEO del sitio
 */

// ============================================================================
// CONFIGURACIÓN BASE DEL SITIO
// ============================================================================

export const SITE_CONFIG = {
  name: "Cefortte",
  title: "Cefortte - Centro de Capacitación en Seguridad Industrial",
  description:
    "Centro especializado en capacitación en seguridad industrial. Cursos certificados NOM-STPS, OSHA, NFPA e ISO 45001. Formación premium para empresas en México.",
  url: "https://cefforte.com.mx",
  ogImage: "https://cefforte.com.mx/og-image.jpg",
  logo: "https://cefforte.com.mx/logo.png",
  author: "Cefortte",
  locale: "es_MX",
  type: "website",
} as const;

// ============================================================================
// KEYWORDS PRINCIPALES
// ============================================================================

export const MAIN_KEYWORDS = [
  "capacitación seguridad industrial",
  "cursos seguridad industrial México",
  "NOM-STPS",
  "OSHA México",
  "prevención riesgos laborales",
  "formación industrial",
  "ISO 45001",
  "trabajo en alturas",
  "espacios confinados",
  "montacargas certificación",
  "NFPA 70E",
  "brigadas emergencia",
  "protección civil empresas",
] as const;

// ============================================================================
// KEYWORDS POR CATEGORÍA
// ============================================================================

export const CATEGORY_KEYWORDS = {
  "seguridad-operativa": [
    "trabajo en alturas",
    "espacios confinados",
    "bloqueo etiquetado",
    "LOTO",
    "excavaciones",
    "riesgos eléctricos",
    "protección caídas",
  ],
  "maquinaria-equipos": [
    "montacargas certificación",
    "grúas viajeras",
    "plataformas elevación",
    "manlift",
    "operador montacargas",
    "equipo pesado",
  ],
  "sustancias-quimicas": [
    "manejo sustancias peligrosas",
    "HAZMAT",
    "hojas seguridad",
    "SGA",
    "químicos peligrosos",
    "NOM-018-STPS",
  ],
  "brigadas-proteccion-civil": [
    "brigadas emergencia",
    "primeros auxilios",
    "combate incendios",
    "evacuación",
    "protección civil",
    "plan emergencia",
  ],
  "normas-stps": [
    "NOM-STPS",
    "NOM-019-STPS",
    "NOM-002-STPS",
    "comisiones seguridad",
    "cumplimiento normativo",
    "auditorías STPS",
  ],
  "gestion-cultura": [
    "cultura seguridad",
    "ISO 45001",
    "sistemas gestión",
    "liderazgo seguridad",
    "comportamiento seguro",
    "SST",
  ],
  "logistica-almacenes": [
    "seguridad almacenes",
    "manejo materiales",
    "logística segura",
    "estibado carga",
    "almacenamiento seguro",
  ],
  construccion: [
    "seguridad construcción",
    "trabajos altura construcción",
    "andamios",
    "excavaciones construcción",
    "NOM-031-STPS",
  ],
} as const;

// ============================================================================
// DATOS DE CONTACTO
// ============================================================================

export const CONTACT_INFO = {
  phone: "+52-XX-XXXX-XXXX",
  email: "contacto@cefforte.com.mx",
  address: {
    street: "Tu dirección completa",
    city: "Tu Ciudad",
    state: "Tu Estado",
    postalCode: "00000",
    country: "México",
    countryCode: "MX",
  },
  coordinates: {
    lat: 19.4326,
    lng: -99.1332,
  },
  hours: {
    weekdays: "09:00 - 18:00",
    saturday: "Cerrado",
    sunday: "Cerrado",
  },
} as const;

// ============================================================================
// REDES SOCIALES
// ============================================================================

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/cerfortte",
  instagram: "https://www.instagram.com/cerfortte",
  linkedin: "https://www.linkedin.com/company/cerfortte",
  twitter: "https://twitter.com/cerfortte",
  youtube: "https://www.youtube.com/@cerfortte",
  whatsapp: "https://wa.me/52XXXXXXXXXX",
} as const;

// ============================================================================
// CATEGORÍAS DE CURSOS
// ============================================================================

export const COURSE_CATEGORIES = [
  {
    slug: "seguridad-operativa",
    name: "Seguridad Operativa",
    description: "Cursos especializados en procedimientos seguros para operaciones de alto riesgo",
  },
  {
    slug: "maquinaria-equipos",
    name: "Maquinaria y Equipos Críticos",
    description: "Certificación y capacitación en operación segura de maquinaria industrial",
  },
  {
    slug: "sustancias-quimicas",
    name: "Sustancias Químicas y Atmósferas Peligrosas",
    description: "Manejo seguro de sustancias peligrosas y prevención de riesgos químicos",
  },
  {
    slug: "brigadas-proteccion-civil",
    name: "Brigadas y Protección Civil",
    description: "Formación de brigadas de emergencia y protocolos de protección civil",
  },
  {
    slug: "normas-stps",
    name: "Normas NOM-STPS",
    description: "Capacitación en cumplimiento de normas oficiales mexicanas de seguridad",
  },
  {
    slug: "gestion-cultura",
    name: "Gestión y Cultura de Seguridad",
    description: "Desarrollo de sistemas de gestión y cultura de seguridad organizacional",
  },
  {
    slug: "logistica-almacenes",
    name: "Logística y Almacenes",
    description: "Operaciones seguras en logística, almacenamiento y manejo de materiales",
  },
  {
    slug: "construccion",
    name: "Construcción",
    description: "Seguridad específica para la industria de la construcción y obras civiles",
  },
] as const;

// ============================================================================
// RUTAS PRINCIPALES
// ============================================================================

export const MAIN_ROUTES = [
  { path: "/", name: "Inicio" },
  { path: "/cursos", name: "Cursos" },
  { path: "/soluciones", name: "Soluciones" },
  { path: "/nosotros", name: "Nosotros" },
  { path: "/testimonios", name: "Testimonios" },
  { path: "/blog", name: "Blog" },
  { path: "/contacto", name: "Contacto" },
] as const;

// ============================================================================
// CONFIGURACIÓN DE IMÁGENES OG
// ============================================================================

export const OG_IMAGE_CONFIG = {
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Cefortte - Capacitación en Seguridad Industrial",
} as const;

// ============================================================================
// COLORES DE MARCA
// ============================================================================

export const BRAND_COLORS = {
  primary: "#2563eb",
  secondary: "#1e40af",
  accent: "#dc2626",
  background: "#ffffff",
  text: "#1f2937",
} as const;
