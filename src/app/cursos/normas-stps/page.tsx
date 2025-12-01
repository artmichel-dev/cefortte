import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG, CATEGORY_KEYWORDS } from "@/lib/seo-constants";

/**
 * Metadata para la página de Normas NOM-STPS
 */
export const metadata: Metadata = {
  title: "Cursos Basados en Normas NOM-STPS - Cumplimiento Normativo",
  description:
    "Capacitación en cumplimiento de Normas Oficiales Mexicanas: NOM-019-STPS, NOM-002-STPS, comisiones de seguridad e higiene, auditorías STPS. Cumplimiento normativo para empresas en México.",
  keywords: [
    ...CATEGORY_KEYWORDS["normas-stps"],
    "cursos NOM-STPS",
    "cumplimiento normativo México",
    "auditorías STPS",
    "comisiones seguridad",
  ],
  openGraph: {
    title: "Cursos Basados en Normas NOM-STPS | Cerfortte",
    description:
      "Capacitación en cumplimiento de normas oficiales mexicanas de seguridad e higiene.",
    url: `${SITE_CONFIG.url}/cursos/normas-stps`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-normas-stps.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Cursos Normas NOM-STPS - Cerfortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos Basados en Normas NOM-STPS | Cerfortte",
    description: "Capacitación en cumplimiento de normas oficiales mexicanas de seguridad.",
    images: [`${SITE_CONFIG.url}/og-normas-stps.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/cursos/normas-stps`,
  },
};

/**
 * Página de Normas NOM-STPS
 * TODO: Implementar el contenido de la página
 */
export default function NormasStpsPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Normas NOM-STPS</h1>
          <p>Capacitación en cumplimiento de normas oficiales mexicanas de seguridad</p>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
