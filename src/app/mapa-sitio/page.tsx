import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, OG_IMAGE_CONFIG, MAIN_ROUTES, COURSE_CATEGORIES } from "@/lib/seo-constants";

/**
 * Metadata para la página de Mapa del Sitio
 */
export const metadata: Metadata = {
  title: "Mapa del Sitio - Navegación Completa",
  description:
    "Mapa del sitio de Cerfortte. Encuentra fácilmente todas las páginas, cursos y categorías de capacitación en seguridad industrial. Navegación completa del sitio web.",
  keywords: ["mapa sitio cerfortte", "navegación sitio web", "índice páginas", "estructura sitio"],
  openGraph: {
    title: "Mapa del Sitio | Cerfortte",
    description: "Navegación completa del sitio web de Cerfortte.",
    url: `${SITE_CONFIG.url}/mapa-sitio`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Mapa del Sitio - Cerfortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/mapa-sitio`,
  },
};

/**
 * Página de Mapa del Sitio
 */
export default function MapaSitioPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-8 px-4 py-8">
        <div>
          <h1 className="mb-6">Mapa del Sitio</h1>
          <p className="mb-8 text-stone-600">
            Encuentra fácilmente todas las secciones y páginas de nuestro sitio web.
          </p>

          {/* Páginas Principales */}
          <section className="mb-8">
            <h2 className="mb-4">Páginas Principales</h2>
            <ul className="ml-6 space-y-2">
              {MAIN_ROUTES.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="text-brand-700 hover:text-brand-600 hover:underline"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Categorías de Cursos */}
          <section className="mb-8">
            <h2 className="mb-4">Categorías de Cursos</h2>
            <ul className="ml-6 space-y-2">
              {COURSE_CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/cursos/${category.slug}`}
                    className="text-brand-700 hover:text-brand-600 hover:underline"
                  >
                    {category.name}
                  </Link>
                  <p className="ml-4 text-sm text-stone-600">{category.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Cursos Destacados */}
          <section className="mb-8">
            <h2 className="mb-4">Cursos Destacados</h2>
            <ul className="ml-6 space-y-2">
              <li>
                <Link
                  href="/cursos/trabajo-en-alturas"
                  className="text-brand-700 hover:text-brand-600 hover:underline"
                >
                  Trabajo en Alturas - Certificación NOM-009-STPS
                </Link>
              </li>
              <li>
                <Link
                  href="/cursos/espacios-confinados"
                  className="text-brand-700 hover:text-brand-600 hover:underline"
                >
                  Entrada a Espacios Confinados
                </Link>
              </li>
            </ul>
          </section>

          {/* Información Legal */}
          <section className="mb-8">
            <h2 className="mb-4">Información Legal</h2>
            <ul className="ml-6 space-y-2">
              <li>
                <Link
                  href="/terminos-condiciones"
                  className="text-brand-700 hover:text-brand-600 hover:underline"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-brand-700 hover:text-brand-600 hover:underline"
                >
                  Aviso de Privacidad
                </Link>
              </li>
            </ul>
          </section>

          {/* Recursos */}
          <section className="mb-8">
            <h2 className="mb-4">Recursos</h2>
            <ul className="ml-6 space-y-2">
              <li>
                <Link
                  href="/cotizacion"
                  className="text-brand-700 hover:text-brand-600 hover:underline"
                >
                  Solicitar Cotización
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-brand-700 hover:text-brand-600 hover:underline"
                  target="_blank"
                >
                  Sitemap XML
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
