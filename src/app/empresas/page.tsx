import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";
import HeroPoints from "@/components/section/HeroPoints";
import TwoColumnFeature from "@/components/section/TwoColumnFeature";
import FeatureList from "@/components/section/FeatureList";
import TwoColumnReverse from "@/components/section/TwoColumnReverse";
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
  subtitle: "Capacitación y soluciones especializadas para mejorar seguridad, cumplimiento y desempeño.",
  primaryCta: {
    text: "Solicitar cotización",
    href: "/cotizacion",
    icon: "fas fa-arrow-right",
  },
  secondaryCta: {
    text: "Ver cursos",
    href: "#soluciones",
  },
  footnote: "Capacitación alineadas a NOM-STPS, OSHA, NFPA, ANSI e ISO 45001.",
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
      title: "Diseño de agenda anual conforme a NOM-STPS.",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Cursos presenciales, in-company y online.",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Reportes trimestrales de avance y cumplimiento.",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Constancias DC-3 (si aplica).",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Acompañamiento directo de un coordinador.",
      description: "",
    },
  ],
  cta: {
    text: "Solicitar cotización",
    href: "/cotizacion",
  },
};

// Contenido Capacitaciones In-Company
const inCompanyContent = {
  title: "Capacitaciones In-Company",
  description:
    "Nuestras capacitaciones in-company están diseñadas para que tu equipo reciba formación práctica en su propio entorno de trabajo. Cada curso se ajusta a los procesos, maquinaria, riesgos y normativas aplicables de tu empresa.",
  features: [
    {
      icon: "fa-solid fa-check-circle",
      title: "Contenido personalizado para tus procesos.",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Evaluaciones prácticas en sitio.",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Reducción de costos logísticos.",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Formación para turnos múltiples o líneas operativas específicas.",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Ideal para equipos grandes o con necesidades especiales.",
      description: "",
    },
  ],
  cta: {
    text: "Solicitar cotización",
    href: "/cotizacion",
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
      title: "Disponibilidad 24/7 desde cualquier dispositivo",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Capacitación escalable para toda la empresa",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Evaluaciones automáticas y retroalimentación inmediata",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Reportes descargables para cumplimiento normativo",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Integración con programas anuales",
      description: "",
    },
  ],
  cta: {
    text: "Solicitar cotización",
    href: "/cotizacion",
  },
};

// Contenido Diagnóstico de Necesidades
const diagnosticoContent = {
  eyebrow: "Identificamos brechas, riesgos y requisitos normativos para crear un plan preciso.",
  title: "Diagnóstico de Necesidades de Capacitación",
  description:
    "Antes de capacitar, analizamos tu operación para determinar qué requiere tu empresa en términos de seguridad, cumplimiento y competencias técnicas. Esto asegura que cada curso aporte valor real y que las inversiones de capacitación se enfoquen en lo que la empresa realmente necesita.",
  features: [
    {
      icon: "fa-solid fa-check-circle",
      title: "Evaluación de riesgos operativos",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Cumplimiento NOM-STPS y auditoría preliminar",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Mapeo de puestos y brechas de habilidades",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Recomendaciones de cursos y modalidades",
      description: "",
    },
    {
      icon: "fa-solid fa-check-circle",
      title: "Plan integral de capacitación anual",
      description: "",
    },
  ],
  cta: {
    text: "Solicitar cotización",
    href: "/cotizacion",
  },
  image: {
    src: "https://assets.zupernova.dev/cefortte/webp/hero-bg_onsite-training_2400x1440.webp",
    alt: "Diagnóstico de necesidades de capacitación",
    width: 2432,
    height: 1442,
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

      {/* Capacitaciones In-Company */}
      <FeatureList
        title={inCompanyContent.title}
        description={inCompanyContent.description}
        features={inCompanyContent.features}
        cta={inCompanyContent.cta}
        backgroundColor="bg-white"
      />

      {/* Programas Anuales de Capacitación */}
      <TwoColumnFeature
        eyebrow={programasAnualesContent.subtitle}
        title={programasAnualesContent.title}
        description={programasAnualesContent.description}
        features={programasAnualesContent.features}
        cta={programasAnualesContent.cta}
        media={{
          type: "image",
          image: {
            src: "https://assets.zupernova.dev/cefortte/png/hero-bg_annual-training_1920x1200.png",
            alt: "Dashboard de programas de capacitación",
            width: 2432,
            height: 1442,
          },
          showDecorations: true,
        }}
        backgroundColor="bg-gray-100"
        id="soluciones"
      />
     {/* Diagnóstico de Necesidades de Capacitación */}
     <TwoColumnReverse
        eyebrow={diagnosticoContent.eyebrow}
        title={diagnosticoContent.title}
        description={diagnosticoContent.description}
        features={diagnosticoContent.features}
        cta={diagnosticoContent.cta}
        image={diagnosticoContent.image}
        backgroundColor="bg-white"
      />

      {/* Plataforma E-Learning Empresarial */}
      <TwoColumnFeature
        eyebrow={eLearningContent.subtitle}
        title={eLearningContent.title}
        description={eLearningContent.description}
        features={eLearningContent.features}
        cta={eLearningContent.cta}
        media={{
          type: "image",
          image: {
            src: "https://assets.zupernova.dev/cefortte/png/hero-bg_business-seminar_1320x1160.png",
            alt: "Plataforma e-learning empresarial",
            width: 2432,
            height: 1442,
          },
          showDecorations: true,
        }}
        backgroundColor="bg-gray-100"
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
