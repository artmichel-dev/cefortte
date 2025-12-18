import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";

/**
 * Metadata para la página de Testimonios
 */
export const metadata: Metadata = {
  title: "Testimonios - Opiniones de Nuestros Clientes",
  description:
    "Lee testimonios reales de empresas y profesionales capacitados en Cefortte. Conoce la experiencia de nuestros clientes con cursos de seguridad industrial certificados. Casos de éxito y opiniones verificadas.",
  keywords: [
    "testimonios cerfortte",
    "opiniones clientes",
    "casos de éxito",
    "experiencias capacitación",
    "reseñas cursos seguridad",
    "empresas capacitadas",
    "satisfacción clientes",
  ],
  openGraph: {
    title: "Testimonios - Opiniones de Nuestros Clientes | Cefortte",
    description:
      "Descubre lo que dicen nuestros clientes sobre la capacitación en seguridad industrial. Testimonios reales y casos de éxito.",
    url: `${SITE_CONFIG.url}/testimonios`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-testimonios.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Testimonios - Cefortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonios - Opiniones de Nuestros Clientes | Cefortte",
    description:
      "Lee testimonios reales de empresas capacitadas en seguridad industrial con Cefortte.",
    images: [`${SITE_CONFIG.url}/og-testimonios.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/testimonios`,
  },
};

/**
 * Página de Testimonios
 * TODO: Implementar el contenido de la página
 */
export default function TestimoniosPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Testimonios</h1>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
