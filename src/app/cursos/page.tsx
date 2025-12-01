import type { Metadata } from "next";
import { SITE_CONFIG, MAIN_KEYWORDS, OG_IMAGE_CONFIG } from "@/lib/seo-constants";

/**
 * Metadata para la página de Cursos
 */
export const metadata: Metadata = {
  title: "Cursos de Seguridad Industrial Certificados",
  description:
    "Catálogo completo de cursos de seguridad industrial certificados. Capacitación en NOM-STPS, OSHA, trabajo en alturas, espacios confinados, montacargas, brigadas de emergencia y más. Formación profesional para empresas en México.",
  keywords: [
    ...MAIN_KEYWORDS,
    "catálogo cursos seguridad",
    "certificación industrial",
    "capacitación empresarial",
    "cursos online seguridad",
    "formación presencial",
  ],
  openGraph: {
    title: "Cursos de Seguridad Industrial Certificados | Cefortte",
    description:
      "Descubre nuestro catálogo completo de cursos certificados en seguridad industrial. Capacitación especializada para empresas en México.",
    url: `${SITE_CONFIG.url}/cursos`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-cursos.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Cursos de Seguridad Industrial - Cefortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Seguridad Industrial Certificados | Cefortte",
    description: "Catálogo completo de cursos certificados en seguridad industrial para empresas.",
    images: [`${SITE_CONFIG.url}/og-cursos.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/cursos`,
  },
};

/**
 * Página de Cursos
 * TODO: Implementar el contenido de la página
 */
export default function CursosPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Cursos de Seguridad Industrial</h1>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
