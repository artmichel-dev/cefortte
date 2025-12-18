import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG, CATEGORY_KEYWORDS } from "@/lib/seo-constants";

/**
 * Metadata para la página de Logística y Almacenes
 */
export const metadata: Metadata = {
  title: "Cursos de Logística y Almacenes - Seguridad en Almacenamiento",
  description:
    "Operaciones seguras en logística y almacenes: seguridad en almacenamiento, manejo de materiales, logística segura, estibado de carga. Prevención de riesgos en operaciones de almacén y distribución.",
  keywords: [
    ...CATEGORY_KEYWORDS["logistica-almacenes"],
    "cursos logística segura",
    "seguridad almacenes México",
    "manejo materiales peligrosos",
    "estibado seguro",
  ],
  openGraph: {
    title: "Cursos de Logística y Almacenes | Cefortte",
    description: "Operaciones seguras en logística, almacenamiento y manejo de materiales.",
    url: `${SITE_CONFIG.url}/cursos/logistica-almacenes`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-logistica-almacenes.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Cursos de Logística y Almacenes - Cefortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Logística y Almacenes | Cefortte",
    description: "Operaciones seguras en logística, almacenamiento y manejo de materiales.",
    images: [`${SITE_CONFIG.url}/og-logistica-almacenes.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/cursos/logistica-almacenes`,
  },
};

/**
 * Página de Logística y Almacenes
 * TODO: Implementar el contenido de la página
 */
export default function LogisticaAlmacenesPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Logística y Almacenes</h1>
          <p>Operaciones seguras en logística, almacenamiento y manejo de materiales</p>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
