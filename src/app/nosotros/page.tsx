import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";
import SpaceHeader from "@/components/section/SpaceHeader";
import MastheadImage from "@/components/section/MastheadImage";
import TypoExample from "@/components/section/TypoExample";

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
    src: "/img_b.jpg",
    alt: "Cefortte capacitación móvil",
    width: 2048,
    height: 2048,
  },
  desktopImage: {
    src: "/img_a.jpg",
    alt: "Cefortte capacitación",
    width: 1440,
    height: 700,
  },
};

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

      <TypoExample />
    </main>
  );
}
