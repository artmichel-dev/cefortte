import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";

/**
 * Metadata para la página Nosotros
 */
export const metadata: Metadata = {
  title: "Nosotros - Centro de Capacitación en Seguridad Industrial",
  description:
    "Conoce Cerfortte, centro líder en capacitación en seguridad industrial en México. Más de X años formando profesionales con cursos certificados NOM-STPS, OSHA e ISO 45001. Instructores expertos y metodología práctica.",
  keywords: [
    "cerfortte",
    "centro capacitación seguridad",
    "empresa capacitación industrial",
    "instructores certificados",
    "historia cerfortte",
    "misión visión valores",
  ],
  openGraph: {
    title: "Nosotros - Cerfortte Centro de Capacitación",
    description:
      "Centro líder en capacitación en seguridad industrial en México. Instructores expertos y cursos certificados.",
    url: `${SITE_CONFIG.url}/nosotros`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-nosotros.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Cerfortte - Centro de Capacitación",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros - Cerfortte Centro de Capacitación",
    description: "Centro líder en capacitación en seguridad industrial en México.",
    images: [`${SITE_CONFIG.url}/og-nosotros.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/nosotros`,
  },
};

/**
 * Página Nosotros
 * TODO: Implementar el contenido de la página
 */
export default function NosotrosPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Nosotros</h1>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
