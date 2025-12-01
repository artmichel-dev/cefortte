import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";

/**
 * Metadata para la página del Blog
 */
export const metadata: Metadata = {
  title: "Blog de Seguridad Industrial - Artículos y Consejos",
  description:
    "Blog especializado en seguridad industrial. Artículos, guías prácticas, novedades normativas, mejores prácticas y consejos de expertos. Mantente actualizado en prevención de riesgos laborales.",
  keywords: [
    "blog seguridad industrial",
    "artículos seguridad",
    "guías prevención riesgos",
    "novedades NOM-STPS",
    "mejores prácticas seguridad",
    "consejos seguridad laboral",
    "actualidad industrial",
  ],
  openGraph: {
    title: "Blog de Seguridad Industrial | Cerfortte",
    description:
      "Artículos, guías y consejos de expertos en seguridad industrial. Mantente actualizado con las mejores prácticas.",
    url: `${SITE_CONFIG.url}/blog`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-blog.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Blog de Seguridad Industrial - Cerfortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Seguridad Industrial | Cerfortte",
    description: "Artículos y guías de expertos en seguridad industrial y prevención de riesgos.",
    images: [`${SITE_CONFIG.url}/og-blog.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
};

/**
 * Página del Blog
 * TODO: Implementar el contenido de la página
 */
export default function BlogPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Blog de Seguridad Industrial</h1>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
