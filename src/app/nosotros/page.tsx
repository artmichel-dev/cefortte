import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";
import SpaceHeader from "@/components/section/SpaceHeader";
import MastheadImage from "@/components/section/MastheadImage";
import ContentSimple from "@/components/section/ContentSimple";
import TypoExample from "@/components/section/TypoExample";
import FeactureThreeColumns from "@/components/section/FeactureThreeColumns";
import IconGrid from "@/components/section/IconGrid";
import CTABanner from "@/components/section/CTABanner";

/**
 * Metadata para la página Nosotros
 */
export const metadata: Metadata = {
  title: "Nosotros - Centro de Capacitación en Seguridad Industrial",
  description:
    "Conoce Cefortte, centro líder en capacitación en seguridad industrial en México. Más de X años formando profesionales con cursos certificados NOM-STPS, OSHA e ISO 45001. Instructores expertos y metodología práctica.",
  keywords: [
    "cerfortte",
    "centro capacitación seguridad",
    "empresa capacitación industrial",
    "instructores certificados",
    "historia cerfortte",
    "misión visión valores",
  ],
  openGraph: {
    title: "Nosotros - Cefortte Centro de Capacitación",
    description:
      "Centro líder en capacitación en seguridad industrial en México. Instructores expertos y cursos certificados.",
    url: `${SITE_CONFIG.url}/nosotros`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-nosotros.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Cefortte - Centro de Capacitación",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros - Cefortte Centro de Capacitación",
    description: "Centro líder en capacitación en seguridad industrial en México.",
    images: [`${SITE_CONFIG.url}/og-nosotros.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/nosotros`,
  },
};

/**
 * Contenido del Masthead - Configuración reutilizable
 */
const mastheadContent = {
  icon: {
    src: "/svg/icon-sm-cefortte-red.svg",
    alt: "Logo Cefortte",
    width: 120,
    height: 120,
  },
  text: "Somos el Centro de Capacitación que Impulsa la Seguridad Industrial en México",
  mobileImage: {
    src: "/webp/main-bg_about_800x500.webp",
    alt: "Cefortte capacitación móvil",
    width: 800,
    height: 500,
  },
  desktopImage: {
    src: "/webp/main-bg_about_1440x700.webp",
    alt: "Cefortte capacitación",
    width: 1440,
    height: 700,
  },
};

const ContentText = {
  // ... otros contenidos existentes ...

  homeContent: {
    title: "Quiénes Somos",
    content:
      "En <b>Cefortte</b> somos especialistas en capacitación profesional en seguridad industrial, enfocados en fortalecer las competencias técnicas y preventivas del talento humano.<br><br>Nuestro enfoque integral combina excelencia académica, estricto cumplimiento normativo y soluciones personalizadas, diseñadas para adaptarse a las necesidades reales de cada organización. De esta manera, contribuimos a elevar los niveles de seguridad, optimizar la productividad y consolidar una sólida cultura de prevención dentro de las empresas.<br><br>Trabajamos de la mano con organizaciones de diversos sectores que buscan entornos laborales más seguros, confiables y eficientes, alineados con los estándares modernos de seguridad y las mejores prácticas de la industria, promoviendo así un crecimiento sostenible y responsable.",
  },
};

const sectoresItems = [
  { icon: "fa-solid fa-industry", title: "Manufactura" },
  { icon: "fa-solid fa-hard-hat", title: "Construcción" },
  { icon: "fa-solid fa-boxes-stacked", title: "Logística y Almacenes" },
  { icon: "fa-solid fa-oil-well", title: "Energía y Petróleo" },
  { icon: "fa-solid fa-car", title: "Automotriz" },
  { icon: "fa-solid fa-flask", title: "Químico y Farmacéutico" },
  { icon: "fa-solid fa-utensils", title: "Alimentos y Bebidas" },
  { icon: "fa-solid fa-concierge-bell", title: "Servicios" },
];

const identidadFeatures = [
  {
    image: {
      src: "/webp/card-bg_cta_01_2400x1420.webp",
      alt: "Misión Cefortte",
    },
    icon: "fa-solid fa-bullseye",
    title: "Misión",
    description:
      "Formar personal técnico y operativo altamente competente, capaz de identificar riesgos, ejecutar prácticas seguras y cumplir con los requisitos normativos que exige la industria actual.",
  },
  {
    image: {
      src: "/webp/card-bg_cta_01_2400x1420.webp",
      alt: "Visión Cefortte",
    },
    icon: "fa-solid fa-eye",
    title: "Visión",
    description:
      "Ser el centro de capacitación líder en México, reconocido por su excelencia académica, innovación y contribución al desarrollo profesional del talento industrial.",
  },
  {
    image: {
      src: "/webp/card-bg_cta_01_2400x1420.webp",
      alt: "Valores Cefortte",
    },
    icon: "fa-solid fa-heart",
    title: "Valores",
    description:
      "Seguridad: Primero la vida. Profesionalismo: Rigor técnico. Innovación: Metodologías modernas. Confianza: Transparencia continua. Excelencia Operativa: Resultados medibles.",
  },
];

/**
 * Página Nosotros
 */
export default function NosotrosPage() {
  return (
    <main id="content">
      <SpaceHeader />

      <MastheadImage
        icon={mastheadContent.icon}
        text={mastheadContent.text}
        mobileImage={mastheadContent.mobileImage}
        desktopImage={mastheadContent.desktopImage}
      />

      <ContentSimple title={ContentText.homeContent.title} content={ContentText.homeContent.content} />

      <FeactureThreeColumns
        title="Nuestra Identidad"
        subtitle="Conoce los principios que guían nuestra labor y compromiso con la seguridad industrial."
        features={identidadFeatures}
      />

      <IconGrid
        title="Sectores que Atendemos"
        subtitle="Cefortte brinda capacitación especializada para diversas industrias que operan con riesgos, procesos normativos estrictos o requerimientos de formación continua."
        items={sectoresItems}
      />

      <CTABanner
        title="Trabaja con un aliado confiable en seguridad industrial"
        subtitle="Contáctanos para conocer cómo podemos fortalecer la seguridad y el desempeño de tu empresa."
        primaryCta={{ text: "Solicitar cotización", href: "/cotizacion" }}
        secondaryCta={{ text: "Contáctanos", href: "/contacto" }}
      />
    </main>
  );
}
