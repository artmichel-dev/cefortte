import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG, CATEGORY_KEYWORDS } from "@/lib/seo-constants";

/**
 * Metadata para la página de Brigadas y Protección Civil
 */
export const metadata: Metadata = {
  title: "Cursos de Brigadas y Protección Civil - Primeros Auxilios y Combate Incendios",
  description:
    "Formación de brigadas de emergencia: primeros auxilios, combate de incendios, evacuación y protección civil. Planes de emergencia empresariales. Capacitación práctica certificada para respuesta ante emergencias.",
  keywords: [
    ...CATEGORY_KEYWORDS["brigadas-proteccion-civil"],
    "cursos brigadas emergencia",
    "capacitación protección civil",
    "primeros auxilios empresas",
    "combate incendios industrial",
  ],
  openGraph: {
    title: "Cursos de Brigadas y Protección Civil | Cerfortte",
    description:
      "Formación de brigadas de emergencia y protocolos de protección civil para empresas.",
    url: `${SITE_CONFIG.url}/cursos/brigadas-proteccion-civil`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-brigadas-proteccion.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Cursos de Brigadas y Protección Civil - Cerfortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Brigadas y Protección Civil | Cerfortte",
    description: "Formación de brigadas de emergencia y protocolos de protección civil.",
    images: [`${SITE_CONFIG.url}/og-brigadas-proteccion.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/cursos/brigadas-proteccion-civil`,
  },
};

/**
 * Página de Brigadas y Protección Civil
 * TODO: Implementar el contenido de la página
 */
export default function BrigadasProteccionCivilPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Brigadas y Protección Civil</h1>
          <p>Formación de brigadas de emergencia y protocolos de protección civil</p>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
