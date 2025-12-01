import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG, CATEGORY_KEYWORDS } from "@/lib/seo-constants";

/**
 * Metadata para la página de Construcción
 */
export const metadata: Metadata = {
  title: "Cursos de Seguridad en Construcción - NOM-031-STPS",
  description:
    "Seguridad específica para la industria de la construcción: trabajo en alturas en construcción, andamios, excavaciones, NOM-031-STPS. Prevención de riesgos en obras civiles y construcción industrial.",
  keywords: [
    ...CATEGORY_KEYWORDS["construccion"],
    "cursos seguridad construcción",
    "NOM-031-STPS",
    "seguridad obras civiles",
    "andamios certificación",
  ],
  openGraph: {
    title: "Cursos de Seguridad en Construcción | Cefortte",
    description: "Seguridad específica para la industria de la construcción y obras civiles.",
    url: `${SITE_CONFIG.url}/cursos/construccion`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-construccion.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Cursos de Seguridad en Construcción - Cefortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Seguridad en Construcción | Cefortte",
    description: "Seguridad específica para la industria de la construcción y obras civiles.",
    images: [`${SITE_CONFIG.url}/og-construccion.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/cursos/construccion`,
  },
};

/**
 * Página de Construcción
 * TODO: Implementar el contenido de la página
 */
export default function ConstruccionPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Construcción</h1>
          <p>Seguridad específica para la industria de la construcción y obras civiles</p>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
