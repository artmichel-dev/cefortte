import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, OG_IMAGE_CONFIG, MAIN_ROUTES, COURSE_CATEGORIES } from "@/lib/seo-constants";

/**
 * Metadata para la página de Mapa del Sitio
 */
export const metadata: Metadata = {
  title: "Mapa del Sitio - Navegación Completa",
  description:
    "Mapa del sitio de Cefortte. Encuentra fácilmente todas las páginas, cursos y categorías de capacitación en seguridad industrial. Navegación completa del sitio web.",
  keywords: ["mapa sitio cerfortte", "navegación sitio web", "índice páginas", "estructura sitio"],
  openGraph: {
    title: "Mapa del Sitio | Cefortte",
    description: "Navegación completa del sitio web de Cefortte.",
    url: `${SITE_CONFIG.url}/mapa-sitio`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Mapa del Sitio - Cefortte",
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

      {/* Hero Section */}
      <div className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base/7 font-semibold text-brand-700">Navegación</p>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-stone-900 sm:text-6xl">
              Mapa del Sitio
            </p>
            <p className="mt-6 text-lg/8 text-stone-600">
              Encuentra fácilmente todas las secciones y páginas de nuestro sitio web de capacitación en seguridad industrial.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-stone-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          {/* Páginas Principales */}
          <section className="mb-16">
            <div className="mb-8">
              <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                Páginas Principales
              </h6>
              <div className="mt-2 h-1 w-16 bg-brand-700"></div>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {MAIN_ROUTES.map((route) => (
                <li key={route.path} className="col-span-1">
                  <Link
                    href={route.path}
                    className="group flex items-center gap-x-3 rounded-lg bg-white px-6 py-4 shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md hover:ring-brand-700"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="size-5 flex-none text-brand-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-stone-900 group-hover:text-brand-700">
                      {route.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Categorías de Cursos */}
          <section className="mb-16">
            <div className="mb-8">
              <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                Categorías de Cursos
              </h6>
              <div className="mt-2 h-1 w-16 bg-brand-700"></div>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {COURSE_CATEGORIES.map((category) => (
                <li key={category.slug} className="col-span-1">
                  <Link
                    href={`/cursos/${category.slug}`}
                    className="group block rounded-lg bg-white px-6 py-5 shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md hover:ring-brand-700"
                  >
                    <div className="flex items-start gap-x-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-700 text-white">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="size-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="text-base font-semibold text-stone-900 group-hover:text-brand-700">
                          {category.name}
                        </span>
                        <p className="mt-1 text-sm text-stone-600">{category.description}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Cursos Destacados */}
            <section>
              <div className="mb-6">
                <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                  Cursos Destacados
                </h6>
                <div className="mt-2 h-1 w-16 bg-brand-700"></div>
              </div>
              <ul role="list" className="space-y-3">
                <li>
                  <Link
                    href="/cursos/trabajo-en-alturas"
                    className="group flex items-center gap-x-3 rounded-lg bg-white px-5 py-3 shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md hover:ring-brand-700"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="size-4 flex-none text-brand-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium text-stone-900 group-hover:text-brand-700">
                      Trabajo en Alturas - Certificación NOM-009-STPS
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cursos/espacios-confinados"
                    className="group flex items-center gap-x-3 rounded-lg bg-white px-5 py-3 shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md hover:ring-brand-700"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="size-4 flex-none text-brand-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium text-stone-900 group-hover:text-brand-700">
                      Entrada a Espacios Confinados
                    </span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* Información Legal y Recursos */}
            <div className="space-y-8">
              {/* Información Legal */}
              <section>
                <div className="mb-6">
                  <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                    Información Legal
                  </h6>
                  <div className="mt-2 h-1 w-16 bg-brand-700"></div>
                </div>
                <ul role="list" className="space-y-3">
                  <li>
                    <Link
                      href="/terminos-condiciones"
                      className="group flex items-center gap-x-3 rounded-lg bg-white px-5 py-3 shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md hover:ring-brand-700"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="size-4 flex-none text-brand-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-stone-900 group-hover:text-brand-700">
                        Términos y Condiciones
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacidad"
                      className="group flex items-center gap-x-3 rounded-lg bg-white px-5 py-3 shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md hover:ring-brand-700"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="size-4 flex-none text-brand-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-stone-900 group-hover:text-brand-700">
                        Aviso de Privacidad
                      </span>
                    </Link>
                  </li>
                </ul>
              </section>

              {/* Recursos */}
              <section>
                <div className="mb-6">
                  <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                    Recursos
                  </h6>
                  <div className="mt-2 h-1 w-16 bg-brand-700"></div>
                </div>
                <ul role="list" className="space-y-3">
                  <li>
                    <Link
                      href="/cotizacion"
                      className="group flex items-center gap-x-3 rounded-lg bg-white px-5 py-3 shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md hover:ring-brand-700"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="size-4 flex-none text-brand-700"
                      >
                        <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
                      </svg>
                      <span className="text-sm font-medium text-stone-900 group-hover:text-brand-700">
                        Solicitar Cotización
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sitemap.xml"
                      target="_blank"
                      className="group flex items-center gap-x-3 rounded-lg bg-white px-5 py-3 shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md hover:ring-brand-700"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="size-4 flex-none text-brand-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM6 6a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H6Zm0 3a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H6Zm0 3a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-stone-900 group-hover:text-brand-700">
                        Sitemap XML
                      </span>
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
