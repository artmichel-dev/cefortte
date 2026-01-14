import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";
import HeroPoints from "@/components/section/HeroPoints";
import TwoColumnFeature from "@/components/section/TwoColumnFeature";
import CTASplit from "@/components/section/CTASplit";

/**
 * Metadata para la página de Soluciones para Empresas
 */
export const metadata: Metadata = {
  title: "Soluciones de Capacitación para Empresas",
  description:
    "Soluciones integrales de capacitación en seguridad industrial para empresas. Programas personalizados, capacitación in-company, diagnóstico de necesidades y cumplimiento normativo NOM-STPS. Mejora la seguridad de tu organización.",
  keywords: [
    "capacitación empresas",
    "soluciones corporativas seguridad",
    "capacitación in-company",
    "programas personalizados",
    "cumplimiento normativo empresas",
    "consultoría seguridad industrial",
    "diagnóstico seguridad",
  ],
  openGraph: {
    title: "Soluciones de Capacitación para Empresas | Cefortte",
    description:
      "Programas de capacitación personalizados para empresas. Mejora la seguridad y cumplimiento normativo de tu organización.",
    url: `${SITE_CONFIG.url}/empresas`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-soluciones.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Soluciones para Empresas - Cefortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones de Capacitación para Empresas | Cefortte",
    description: "Programas personalizados de capacitación en seguridad industrial para empresas.",
    images: [`${SITE_CONFIG.url}/og-soluciones.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/empresas`,
  },
};

// Contenido del Hero Principal
const heroContent = {
  title: "Soluciones Integrales de Capacitación para Empresas",
  subtitle:
    "Programas anuales, capacitación in-company, plataforma e-learning y diagnósticos especializados para fortalecer la seguridad, el cumplimiento y el desempeño operativo de tu organización.",
  primaryCta: {
    text: "Solicitar cotización",
    href: "/cotizacion",
    icon: "fas fa-arrow-right",
  },
  secondaryCta: {
    text: "Ver cursos",
    href: "#soluciones",
  },
  footnote: "Diseñamos estrategias de capacitación alineadas a NOM-STPS, OSHA, NFPA, ANSI e ISO 45001.",
  backgroundImage: {
    src: "https://assets.zupernova.dev/cefortte/webp/hero-bg_solutions_2010x1340.webp",
    alt: "Soluciones empresariales de capacitación",
    overlayColor: "brand-900",
    overlayOpacity: 70,
    objectPosition: "center",
  },
};

// Contenido Programas Anuales
const programasAnualesContent = {
  title: "Programas Anuales de Capacitación",
  subtitle: "Planeación estratégica de formación para todo tu año operativo.",
  description:
    "Nuestros programas anuales permiten a tu empresa planificar, ejecutar y documentar la capacitación de manera organizada, garantizando el cumplimiento normativo y la mejora continua en seguridad. Están diseñados para empresas que requieren un acompañamiento constante y una estructura de formación escalable.",
  features: [
    {
      icon: "fa-solid fa-check-circle",
      text: "Diseño de agenda anual conforme a NOM-STPS",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Cursos presenciales, in-company y online según tus necesidades",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Reportes trimestrales de avance y cumplimiento",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Constancias DC-3 (si aplica)",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Acompañamiento directo de un coordinador asignado",
    },
  ],
  cta: {
    text: "Solicitar programa anual",
    href: "/cotizacion",
  },
  sideHighlight: {
    icon: "fa-solid fa-calendar-check",
    title: "Beneficio clave",
    description: "Mantén el cumplimiento todo el año con un programa estructurado y supervisado.",
  },
};

// Contenido Capacitaciones In-Company
const inCompanyContent = {
  title: "Capacitaciones In-Company",
  subtitle: "Entrenamientos presenciales en tus instalaciones, adaptados a tu operación.",
  description:
    "Nuestras capacitaciones in-company están diseñadas para que tu equipo reciba formación práctica en su propio entorno de trabajo. Cada curso se ajusta a los procesos, maquinaria, riesgos y normativas aplicables de tu empresa.",
  features: [
    {
      icon: "fa-solid fa-check-circle",
      text: "Contenido personalizado para tus procesos",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Evaluaciones prácticas en sitio",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Reducción de costos logísticos",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Formación para turnos múltiples o líneas operativas específicas",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Ideal para equipos grandes o con necesidades especiales",
    },
  ],
  cta: {
    text: "Solicitar capacitación in-company",
    href: "/cotizacion",
  },
  sideHighlight: {
    icon: "fa-solid fa-building",
    title: "Formación en sitio",
    description: "Capacitamos a tu equipo en su propio entorno de trabajo con casos reales.",
  },
};

// Contenido Plataforma E-Learning
const eLearningContent = {
  title: "Plataforma E-Learning Empresarial",
  subtitle: "Capacitación digital para equipos distribuidos o con alta rotación.",
  description:
    "La plataforma e-learning de Cefortte facilita la formación continua sin importar la ubicación de tus colaboradores. Incluye módulos interactivos, evaluaciones, seguimiento del avance y reportes automatizados para cumplir con auditorías internas y externas.",
  features: [
    {
      icon: "fa-solid fa-check-circle",
      text: "Disponibilidad 24/7 desde cualquier dispositivo",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Capacitación escalable para toda la empresa",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Evaluaciones automáticas y retroalimentación inmediata",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Reportes descargables para cumplimiento normativo",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Integración con programas anuales",
    },
  ],
  cta: {
    text: "Conocer plataforma e-learning",
    href: "/cotizacion",
  },
  sideHighlight: {
    icon: "fa-solid fa-laptop",
    title: "Flexibilidad total",
    description: "Capacita a todo tu equipo sin importar ubicación ni horarios.",
  },
};

// Contenido Diagnóstico de Necesidades
const diagnosticoContent = {
  title: "Diagnóstico de Necesidades de Capacitación",
  subtitle: "Identificamos brechas, riesgos y requisitos normativos para crear un plan preciso.",
  description:
    "Antes de capacitar, analizamos tu operación para determinar qué requiere tu empresa en términos de seguridad, cumplimiento y competencias técnicas. Esto asegura que cada curso aporte valor real y que las inversiones de capacitación se enfoquen en lo que la empresa realmente necesita.",
  features: [
    {
      icon: "fa-solid fa-check-circle",
      text: "Evaluación de riesgos operativos",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Cumplimiento NOM-STPS y auditoría preliminar",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Mapeo de puestos y brechas de habilidades",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Recomendaciones de cursos y modalidades",
    },
    {
      icon: "fa-solid fa-check-circle",
      text: "Plan integral de capacitación anual",
    },
  ],
  cta: {
    text: "Solicitar diagnóstico",
    href: "/contacto",
  },
  sideHighlight: {
    icon: "fa-solid fa-clipboard-check",
    title: "Análisis preciso",
    description: "Identificamos exactamente qué necesita tu empresa antes de capacitar.",
  },
};

// Contenido CTA Final
const ctaFinalContent = {
  title: "Diseñemos la Solución Ideal para tu Empresa",
  subtitle:
    "Nuestro equipo está listo para ayudarte a construir un programa de capacitación eficiente, normativo y alineado a tus procesos productivos.",
  primaryCta: {
    text: "Solicitar cotización",
    href: "/cotizacion",
  },
  secondaryCta: {
    text: "Hablar por WhatsApp",
    href: "https://wa.me/5215512345678",
  },
  image: {
    src: "/webp/card-bg_cta_01_2400x1420.webp",
    alt: "Soluciones empresariales Cefortte",
  },
};

/**
 * Página de Soluciones para Empresas
 */
export default function SolucionesPage() {
  return (
    <main id="content" className="relative w-full">
      {/* Espaciador para el header fijo */}
      <div className="relative h-16 w-full bg-white"></div>

      {/* Hero Principal */}
      <HeroPoints
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
        footnote={heroContent.footnote}
        backgroundImage={heroContent.backgroundImage}
      />

      {/* Programas Anuales de Capacitación */}
      <TwoColumnFeature
        title={programasAnualesContent.title}
        subtitle={programasAnualesContent.subtitle}
        description={programasAnualesContent.description}
        features={programasAnualesContent.features}
        cta={programasAnualesContent.cta}
        sideHighlight={programasAnualesContent.sideHighlight}
        backgroundColor="bg-gray-100"
        id="soluciones"
      />

      {/* Capacitaciones In-Company */}
      <TwoColumnFeature
        title={inCompanyContent.title}
        subtitle={inCompanyContent.subtitle}
        description={inCompanyContent.description}
        features={inCompanyContent.features}
        cta={inCompanyContent.cta}
        sideHighlight={inCompanyContent.sideHighlight}
        reverseLayout={true}
        backgroundColor="bg-white"
      />

      {/* Plataforma E-Learning Empresarial */}
      <TwoColumnFeature
        title={eLearningContent.title}
        subtitle={eLearningContent.subtitle}
        description={eLearningContent.description}
        features={eLearningContent.features}
        cta={eLearningContent.cta}
        sideHighlight={eLearningContent.sideHighlight}
        backgroundColor="bg-gray-100"
      />

      {/* Diagnóstico de Necesidades de Capacitación */}
      <TwoColumnFeature
        title={diagnosticoContent.title}
        subtitle={diagnosticoContent.subtitle}
        description={diagnosticoContent.description}
        features={diagnosticoContent.features}
        cta={diagnosticoContent.cta}
        sideHighlight={diagnosticoContent.sideHighlight}
        reverseLayout={true}
        backgroundColor="bg-white"
      />

      {/* CTA Final */}
      <CTASplit
        title={ctaFinalContent.title}
        subtitle={ctaFinalContent.subtitle}
        primaryCta={ctaFinalContent.primaryCta}
        secondaryCta={ctaFinalContent.secondaryCta}
        image={ctaFinalContent.image}
        className="bg-gray-100"
      />
    </main>
  );
}
