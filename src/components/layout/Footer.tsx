import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-700 relative w-full text-white">
      {/* Sección de Sitemap */}
      <section className="w-full border-b border-white/10">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Columna 1: Navegación */}
            <div className="flex flex-col items-start mx-1">
              <Link
                href="/"
                className="mb-6 mx-auto sm:mx-0 inline-block transition-opacity hover:opacity-80"
                aria-label="Ir a inicio"
              >
                <Image
                  src="/svg/icon-sm-cefortte-white.svg"
                  alt="Logo CEFORTTE"
                  width={120}
                  height={30}
                  className="h-auto w-48"
                  priority={false}
                />
              </Link>
              <nav className="border-t w-full pt-6 sm:pt-0 sm:border-t-0 border-white/20">
                <ul className="space-y-3">
                  {[
                    { href: "/", label: "Inicio" },
                    { href: "/nosotros", label: "Nosotros" },
                    { href: "/empresas", label: "Empresas" },
                    { href: "/testimonios", label: "Testimonios" },
                    { href: "/blog", label: "Blog" },
                    { href: "/contacto", label: "Contáctanos" },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href}>
                        <p className="mobile-nav-link text-3xl">{label}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Columna 2: Cursos */}
            <div className="mx-1">
              <Link href="/cursos" className="mb-6 inline-block transition-transform hover:translate-x-1">
                <p className="mobile-nav-link text-title-md">Cursos y Capacitación</p>
              </Link>
              <ul className="text-base space-y-3">
                {[
                  { href: "/cursos/seguridad-operativa", label: "Seguridad Operativa" },
                  { href: "/cursos/maquinaria-equipos", label: "Maquinaria y Equipos Críticos" },
                  { href: "/cursos/sustancias-quimicas", label: "Sustancias Químicas y Atmósferas Peligrosas" },
                  { href: "/cursos/brigadas-proteccion-civil", label: "Brigadas y Protección Civil" },
                  { href: "/cursos/normas-stps", label: "Cursos Basados en Normas NOM-STPS" },
                  { href: "/cursos/gestion-cultura", label: "Gestión y Cultura de Seguridad" },
                  { href: "/cursos/logistica-almacenes", label: "Logística y Almacenes" },
                  { href: "/cursos/construccion", label: "Construcción" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>
                      <span className="mobile-nav-sublink text-base">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Card Cotización */}
            <div className="md:col-span-2 lg:col-span-1 mx-1">
              <div className="flex h-full flex-col text-center lg:text-left lg:text-center justify-start items-center lg:items-start rounded-sm border border-white/10 hover:border-white/20 hover:bg-white/5 p-8 transition-all duration-300">
                <p className="text-h3 mb-4 text-gray-100">¿Necesitas una Cotización?</p>
                <p className="mb-4 text-base leading-relaxed text-gray-100">
                  Obtén una cotización personalizada para las necesidades específicas de tu empresa en minutos.
                </p>
                <Button color="white" href="/cotizacion" className="mx-auto lg:mx-0 inline-flex w-max shadow-sm">
                  Cotizar ahora <i className="fas fa-arrow-right text-xs text-brand-80" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Legal/Social */}
      <section className="w-full border-t border-white/10 py-8">
        <div className="container grid grid-cols-1 items-center justify-items-center gap-2 lg:grid-cols-[auto_1fr_auto] lg:justify-items-start">
          {/* Copyright */}
          <div className="order-3 lg:order-1">
            <small className="text-brand-100 text-micro">&copy; 2026 CEFORTTE - INDUSTRIAL TRAINING</small>
          </div>

          {/* Enlaces Legales */}
          <nav className="order-2 lg:order-2 lg:justify-self-center" aria-label="Legal">
            <ul className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
              {[
                { href: "/terminos-condiciones", label: "Términos y Condiciones" },
                { href: "/privacidad", label: "Privacidad" },
                { href: "/mapa-sitio", label: "Mapa del Sitio" },
              ].map(({ href, label }, index) => (
                <li key={href} className="flex items-center gap-6">
                  {index > 0 && (
                    <span className="text-brand-200 hidden text-sm sm:block" aria-hidden="true">
                      |
                    </span>
                  )}
                  <Link
                    href={href}
                    className="inline-block text-sm text-gray-100 transition-all duration-150 hover:translate-x-1 hover:text-gray-50"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes Sociales */}
          <div className="order-1 lg:order-3 lg:justify-self-end">
            <ul className="flex items-center justify-center gap-6" aria-label="Redes sociales">
              {[
                { icon: "fa-facebook-f icon-link", label: "Facebook", href: "#" },
                { icon: "fa-youtube icon-link", label: "YouTube", href: "#" },
                { icon: "fa-instagram icon-link", label: "Instagram", href: "#" },
                { icon: "fa-linkedin-in icon-link", label: "LinkedIn", href: "#" },
              ].map(({ icon, label, href }) => (
                <li key={label}>
                  <Link href={href} aria-label={label}>
                    <i className={`fab ${icon} text-3xl`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
