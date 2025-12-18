import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG, CATEGORY_KEYWORDS } from "@/lib/seo-constants";

/**
 * Metadata para la página de Sustancias Químicas y Atmósferas Peligrosas
 */
export const metadata: Metadata = {
  title: "Cursos de Sustancias Químicas y Atmósferas Peligrosas - HAZMAT",
  description:
    "Capacitación en manejo seguro de sustancias peligrosas, HAZMAT, hojas de seguridad, Sistema Globalmente Armonizado (SGA) y químicos peligrosos. Cumplimiento NOM-018-STPS. Prevención de riesgos químicos.",
  keywords: [
    ...CATEGORY_KEYWORDS["sustancias-quimicas"],
    "cursos sustancias peligrosas",
    "capacitación HAZMAT",
    "manejo químicos",
    "NOM-018-STPS",
  ],
  openGraph: {
    title: "Cursos de Sustancias Químicas y Atmósferas Peligrosas | Cefortte",
    description:
      "Capacitación especializada en manejo seguro de sustancias peligrosas y prevención de riesgos químicos.",
    url: `${SITE_CONFIG.url}/cursos/sustancias-quimicas`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-sustancias-quimicas.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Cursos de Sustancias Químicas - Cefortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Sustancias Químicas y Atmósferas Peligrosas | Cefortte",
    description: "Manejo seguro de sustancias peligrosas y prevención de riesgos químicos.",
    images: [`${SITE_CONFIG.url}/og-sustancias-quimicas.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/cursos/sustancias-quimicas`,
  },
};

/**
 * Página de Sustancias Químicas y Atmósferas Peligrosas
 * TODO: Implementar el contenido de la página
 */
export default function SustanciasQuimicasPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Sustancias Químicas y Atmósferas Peligrosas</h1>
          <p>Manejo seguro de sustancias peligrosas y prevención de riesgos químicos</p>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
