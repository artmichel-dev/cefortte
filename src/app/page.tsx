import HeroInicio from "@/components/section/HeroInicio";
import GalleryCards from "@/components/section/GalleryCards";
import FeatureGrid from "@/components/section/FeactureGrid";
import ProcessTimeline from "@/components/section/ProcessTimeline";
import SpaceHeader from "@/components/section/SpaceHeader";
import Testimonials from "@/components/section/Testimonials";
import ClientLogos from "@/components/section/ClientLogos";
import CtaSection from "@/components/section/CtaSection";

// Datos del contenido (podrían venir de un CMS, API, o archivo de constantes)

const homeContent = {
  hero: {
    title: "Capacitación para Empresas",
    description: "Formación alineada con estándares globales de seguridad.",
    primaryCta: {
      text: "Cotizar ahora",
      href: "/cotizacion",
    },
    secondaryCta: {
      text: "Ver cursos",
      href: "/cursos",
    },
    video: {
      src: "https://cdn.zupernova.dev/cefortte/hls/hero-color.playlist.m3u8",
      poster: "https://cdn.zupernova.dev/cefortte/jpg/hero-poster.jpg",
    },
  },
  gallery: {
    title: "Cursos especializados",
    subtitle: (
      <>
        Formación práctica y normativa para equipos técnicos, operativos y de supervisión.
        <br />
        Seleccionamos los cursos más solicitados por la industria para garantizar resultados inmediatos en cumplimiento
        y seguridad.
      </>
    ),
    cta: {
      text: "Descubre más",
      href: "/cursos",
    },
    cards: [
      {
        title: "Seguridad operativa",
        href: "/cursos/seguridad-operativa",
        image: "https://cdn.zupernova.dev/cefortte/webp/card-bg_courses_safety-operational_400x500.webp",
      },
      {
        title: "Maquinaria y equipos críticos",
        href: "/cursos/maquinaria-equipos",
        image: "https://cdn.zupernova.dev/cefortte/webp/card-bg_courses_critical-machinery_400x500.webp",
      },
      {
        title: "Sustancias Químicas y Atmósferas peligrosas",
        href: "/cursos/sustancias-quimicas",
        image: "https://cdn.zupernova.dev/cefortte/webp/card-bg_courses_chemical-atmospheres_400x500.webp",
      },
      {
        title: "Brigadas y Protección civil",
        href: "/cursos/brigadas-proteccion-civil",
        image: "https://cdn.zupernova.dev/cefortte/webp/card-bg_courses_emergency-response_400x500.webp",
      },
      {
        title: "Cursos basados en normas NOM-STPS",
        href: "/cursos/normas-stps",
        image: "https://cdn.zupernova.dev/cefortte/webp/card-bg_courses_nom-stps_400x500.webp",
      },
      {
        title: "Gestión y Cultura de Seguridad",
        href: "/cursos/gestion-cultura",
        image: "https://cdn.zupernova.dev/cefortte/webp/card-bg_courses_safety-culture_400x500.webp",
      },
      {
        title: "Logística y Almacenes",
        href: "/cursos/logistica-almacenes",
        image: "https://cdn.zupernova.dev/cefortte/webp/card-bg_courses_logistics-warehouse_400x500.webp",
      },
      {
        title: "Construcción",
        href: "/cursos/construccion",
        image: "https://cdn.zupernova.dev/cefortte/webp/card-bg_courses_construction_400x500.webp",
      },
    ],
  },
  features: {
    header: {
      title: "¿Por Qué las Empresas eligen Capacitarse con Nosotros?",
      subtitle:
        "Ofrecemos soluciones integrales de capacitación diseñadas para mejorar la seguridad, cumplir normativas y elevar el desempeño operativo de tu empresa.",
      backgroundImage: "https://cdn.zupernova.dev/cefortte/webp/card-bg_benefits_640x800.webp",
      primaryCta: {
        text: "Cotizar ahora",
        href: "/cotizacion",
      },
      secondaryCta: {
        text: "Ver cursos",
        href: "/cursos",
      },
    },
    items: [
      {
        icon: "fa-solid fa-graduation-cap",
        title: "Formación premium con enfoque práctico",
        description:
          "Entrenamientos reales para entornos reales. Simulaciones y ejercicios que preparan a tu equipo para situaciones críticas.",
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Cumplimiento normativo integral",
        description:
          "NOM-STPS, OSHA, NFPA, ANSI, ISO 45001. Garantizamos que tu empresa cumpla con todas las regulaciones vigentes.",
      },
      {
        icon: "fa-solid fa-users",
        title: "Instructores certificados",
        description:
          "Especialistas con experiencia operativa y de campo. Profesionales que conocen los retos reales de tu industria.",
      },
      {
        icon: "fa-solid fa-calendar-days",
        title: "Modalidades flexibles",
        description:
          "Presencial, in-company, online y programas corporativos. Nos adaptamos a la operación y horarios de tu empresa.",
      },
      {
        icon: "fa-solid fa-gear",
        title: "Soluciones a la medida",
        description:
          "Diseñamos capacitaciones según tu giro y necesidades específicas. Cada programa es único para tu operación.",
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "Reducción de incidentes",
        description:
          "Mejora de cultura de seguridad y disminución de riesgos críticos. Resultados medibles en tu operación.",
      },
    ],
  },
  process: {
    title: "Nuestro Proceso de Capacitación",
    subtitle: "Acompañamos a tu equipo en cada etapa para garantizar resultados medibles y cumplimiento normativo.",
    steps: [
      {
        icon: "fa-solid fa-magnifying-glass-chart",
        title: "Diagnóstico inicial",
        description: "Identificamos necesidades y riesgos operativos.",
      },
      {
        icon: "fa-solid fa-clipboard-list",
        title: "Plan de capacitación",
        description: "Diseñamos cursos enfocados en tus procesos y normativas aplicables.",
      },
      {
        icon: "fa-solid fa-chalkboard-user",
        title: "Ejecución profesional",
        description: "Entrenamientos prácticos, claros y orientados a la seguridad.",
      },
      {
        icon: "fa-solid fa-certificate",
        title: "Evaluación y certificación",
        description: "Validación de competencias, reportes y constancias DC-3 (si aplica).",
      },
      {
        icon: "fa-solid fa-arrows-rotate",
        title: "Seguimiento continuo",
        description: "Programas anuales y auditorías de seguridad.",
      },
    ],
  },
  Testimonials: {
    title: "Empresas que Confían en Nuestra Formación",
    subtitle: "Resultados reales en seguridad, cumplimiento y operación.",
    cta: {
      text: "Ver más testimonios",
      href: "/testimonios",
    },
    items: [
      {
        quote: "La capacitación fue clara, práctica y personalizada a nuestras operaciones.",
        name: "Juan Rodríguez",
        role: "Gerente de Operaciones",
        initials: "JR",
      },
      {
        quote: "Mejoramos nuestro cumplimiento NOM-STPS en menos de tres meses.",
        name: "María González",
        role: "Directora de Seguridad Industrial",
        initials: "MG",
      },
      {
        quote: "El instructor domina completamente el tema y sabe cómo transmitirlo.",
        name: "Carlos Sánchez",
        role: "Jefe de Recursos Humanos",
        initials: "CS",
      },
    ],
  },
  clientLogos: {
    title: "Aliados en Seguridad y Desarrollo Operativo",
    subtitle:
      "Hemos trabajado con empresas de los sectores manufacturero, logístico, energético, automotriz, químico y más.",
    logos: [
      { src: "https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-900.svg", alt: "Cliente 1" },
      { src: "https://tailwindcss.com/plus-assets/img/logos/reform-logo-gray-900.svg", alt: "Cliente 2" },
      { src: "https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg", alt: "Cliente 3" },
      { src: "https://tailwindcss.com/plus-assets/img/logos/laravel-logo-gray-900.svg", alt: "Cliente 4" },
      { src: "https://tailwindcss.com/plus-assets/img/logos/transistor-logo-gray-900.svg", alt: "Cliente 5" },
      { src: "https://tailwindcss.com/plus-assets/img/logos/statamic-logo-gray-900.svg", alt: "Cliente 6" },
    ],
  },
  CtaSection: {
    title: "Fortalece la Seguridad y el Cumplimiento de tu Empresa",
    subtitle:
      "Solicita una cotización o programa anual de capacitación. Nuestro equipo te ayudará a diseñar la solución que tu operación necesita.",
    primaryCta: {
      text: "Solicitar cotización ahora",
      href: "/cotizacion",
    },
    secondaryCta: {
      text: "Hablar por WhatsApp",
      href: "https://wa.me/521234567890",
    },
    image: {
      src: "https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png",
      alt: "Plataforma de capacitación Cefortte",
    },
  },
};

export default function Home() {
  return (
    <main id="content">
      <SpaceHeader />

      <HeroInicio
        title={homeContent.hero.title}
        description={homeContent.hero.description}
        primaryCta={homeContent.hero.primaryCta}
        secondaryCta={homeContent.hero.secondaryCta}
        video={homeContent.hero.video}
      />

      <GalleryCards
        title={homeContent.gallery.title}
        subtitle={homeContent.gallery.subtitle}
        cta={homeContent.gallery.cta}
        cards={homeContent.gallery.cards}
      />

      <FeatureGrid header={homeContent.features.header} features={homeContent.features.items} />

      <ProcessTimeline
        title={homeContent.process.title}
        subtitle={homeContent.process.subtitle}
        steps={homeContent.process.steps}
      />

      <Testimonials
        title={homeContent.Testimonials.title}
        subtitle={homeContent.Testimonials.subtitle}
        testimonials={homeContent.Testimonials.items}
        cta={homeContent.Testimonials.cta}
      />

      <ClientLogos
        title={homeContent.clientLogos.title}
        subtitle={homeContent.clientLogos.subtitle}
        logos={homeContent.clientLogos.logos}
      />

      <CtaSection
        title={homeContent.CtaSection.title}
        subtitle={homeContent.CtaSection.subtitle}
        primaryCta={homeContent.CtaSection.primaryCta}
        secondaryCta={homeContent.CtaSection.secondaryCta}
        image={homeContent.CtaSection.image}
      />
    </main>
  );
}
