import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG, CATEGORY_KEYWORDS } from "@/lib/seo-constants";

/**
 * Metadata para la página de Seguridad Operativa
 */
export const metadata: Metadata = {
  title: "Cursos de Seguridad Operativa - Trabajo en Alturas y Espacios Confinados",
  description:
    "Cursos especializados en seguridad operativa: trabajo en alturas, espacios confinados, bloqueo y etiquetado (LOTO), excavaciones y riesgos eléctricos. Certificación NOM-STPS. Protección contra caídas y procedimientos seguros.",
  keywords: [
    ...CATEGORY_KEYWORDS["seguridad-operativa"],
    "cursos seguridad operativa",
    "capacitación alturas",
    "NOM-009-STPS",
    "certificación trabajo alturas",
  ],
  openGraph: {
    title: "Cursos de Seguridad Operativa | Cerfortte",
    description:
      "Capacitación especializada en trabajo en alturas, espacios confinados, LOTO y más. Cursos certificados para operaciones de alto riesgo.",
    url: `${SITE_CONFIG.url}/cursos/seguridad-operativa`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-seguridad-operativa.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Cursos de Seguridad Operativa - Cerfortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Seguridad Operativa | Cerfortte",
    description:
      "Capacitación en trabajo en alturas, espacios confinados y procedimientos seguros de alto riesgo.",
    images: [`${SITE_CONFIG.url}/og-seguridad-operativa.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/cursos/seguridad-operativa`,
  },
};

/**
 * Página de Seguridad Operativa
 * TODO: Implementar el contenido de la página
 */
export default function SeguridadOperativaPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Seguridad Operativa</h1>
          <p>Cursos especializados en procedimientos seguros para operaciones de alto riesgo</p>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
