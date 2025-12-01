import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG, CATEGORY_KEYWORDS } from "@/lib/seo-constants";

/**
 * Metadata para la página de Maquinaria y Equipos Críticos
 */
export const metadata: Metadata = {
  title: "Cursos de Maquinaria y Equipos Críticos - Montacargas y Grúas",
  description:
    "Certificación en operación de maquinaria industrial: montacargas, grúas viajeras, plataformas de elevación, manlift y equipo pesado. Cursos prácticos con instructores certificados. Cumplimiento normativo NOM-STPS.",
  keywords: [
    ...CATEGORY_KEYWORDS["maquinaria-equipos"],
    "cursos maquinaria industrial",
    "certificación montacargas",
    "operador equipo pesado",
    "NOM-006-STPS",
  ],
  openGraph: {
    title: "Cursos de Maquinaria y Equipos Críticos | Cerfortte",
    description:
      "Certificación en operación segura de montacargas, grúas, plataformas elevadoras y equipo pesado.",
    url: `${SITE_CONFIG.url}/cursos/maquinaria-equipos`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-maquinaria-equipos.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Cursos de Maquinaria y Equipos - Cerfortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Maquinaria y Equipos Críticos | Cerfortte",
    description: "Certificación en operación segura de maquinaria industrial y equipo pesado.",
    images: [`${SITE_CONFIG.url}/og-maquinaria-equipos.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/cursos/maquinaria-equipos`,
  },
};

/**
 * Página de Maquinaria y Equipos Críticos
 * TODO: Implementar el contenido de la página
 */
export default function MaquinariaEquiposPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Maquinaria y Equipos Críticos</h1>
          <p>Certificación y capacitación en operación segura de maquinaria industrial</p>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
