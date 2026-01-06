import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";
import SpaceHeader from "@/components/section/SpaceHeader";
import HeroImg from "@/components/section/HeroImg";

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
 * Contenido de la página Nosotros
 */
const nosotrosContent = {
  hero: {
    title: "Sobre Nosotros",
    description: "Conoce al equipo detrás de Cefortte y nuestra misión de transformar la seguridad industrial.",
    primaryCta: {
      text: "Contáctanos",
      href: "/contacto",
    },
    secondaryCta: {
      text: "Ver cursos",
      href: "/cursos",
    },
    image: {
      src: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80", // Reemplaza con tu imagen
      alt: "Equipo Cefortte - Capacitación en seguridad industrial",
    },
  },
};

/**
 * Página Nosotros
 */
export default function NosotrosPage() {
  return (
    <main id="content">
      <SpaceHeader />
      <HeroImg
        title={nosotrosContent.hero.title}
        description={nosotrosContent.hero.description}
        primaryCta={nosotrosContent.hero.primaryCta}
        secondaryCta={nosotrosContent.hero.secondaryCta}
        image={nosotrosContent.hero.image}
      />
      {/* TODO: Agregar más secciones de la página */}
    </main>
  );
}
