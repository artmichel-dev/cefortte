import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG, CATEGORY_KEYWORDS } from "@/lib/seo-constants";

/**
 * Metadata para la página de Gestión y Cultura de Seguridad
 */
export const metadata: Metadata = {
  title: "Cursos de Gestión y Cultura de Seguridad - ISO 45001 y SST",
  description:
    "Desarrollo de sistemas de gestión de seguridad y salud en el trabajo (SST): ISO 45001, cultura de seguridad, liderazgo en seguridad, comportamiento seguro. Implementación de sistemas de gestión organizacional.",
  keywords: [
    ...CATEGORY_KEYWORDS["gestion-cultura"],
    "cursos ISO 45001",
    "sistemas gestión seguridad",
    "cultura seguridad empresarial",
    "SST México",
  ],
  openGraph: {
    title: "Cursos de Gestión y Cultura de Seguridad | Cefortte",
    description:
      "Desarrollo de sistemas de gestión y cultura de seguridad organizacional ISO 45001.",
    url: `${SITE_CONFIG.url}/cursos/gestion-cultura`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-gestion-cultura.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Cursos de Gestión y Cultura de Seguridad - Cefortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Gestión y Cultura de Seguridad | Cefortte",
    description: "Desarrollo de sistemas de gestión y cultura de seguridad organizacional.",
    images: [`${SITE_CONFIG.url}/og-gestion-cultura.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/cursos/gestion-cultura`,
  },
};

/**
 * Página de Gestión y Cultura de Seguridad
 * TODO: Implementar el contenido de la página
 */
export default function GestionCulturaPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Gestión y Cultura de Seguridad</h1>
          <p>Desarrollo de sistemas de gestión y cultura de seguridad organizacional</p>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
