import Link from "next/link";
import type { Metadata } from "next";

/**
 * Metadata para la página 404
 */
export const metadata: Metadata = {
  title: "Página No Encontrada - 404",
  description: "La página que buscas no existe o ha sido movida.",
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * Página 404 - No Encontrada
 * Se muestra automáticamente cuando una ruta no existe
 */
export default function NotFound() {
  return (
    <main id="content" className="relative w-full min-h-screen">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
        {/* Número 404 Grande */}
        <div className="mb-8">
          <h1 className="text-brand-700 text-9xl font-black md:text-[12rem]">404</h1>
        </div>

        {/* Mensaje Principal */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl font-bold text-stone-800 md:text-4xl">Página No Encontrada</h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-600">
            Lo sentimos, la página que buscas no existe o ha sido movida. Verifica la URL o regresa
            al inicio para encontrar lo que necesitas.
          </p>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="btn-cta-primary">
            <i className="fas fa-home mr-2"></i>
            Volver al Inicio
          </Link>
          <Link href="/cursos" className="btn-cta-secondary">
            <i className="fas fa-graduation-cap mr-2"></i>
            Ver Cursos
          </Link>
          <Link href="/contacto" className="btn-cta-secondary">
            <i className="fas fa-envelope mr-2"></i>
            Contáctanos
          </Link>
        </div>

        {/* Enlaces Útiles */}
        <div className="mt-16 w-full">
          <h3 className="mb-6 text-xl font-semibold text-stone-800">Enlaces Útiles</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/nosotros"
              className="rounded-lg border border-stone-200 p-4 transition-all hover:border-brand-700 hover:shadow-md"
            >
              <i className="fas fa-users text-brand-700 mb-2 text-2xl"></i>
              <h4 className="text-base font-semibold text-stone-800">Nosotros</h4>
              <p className="mt-1 text-sm text-stone-600">Conoce más sobre Cefortte</p>
            </Link>

            <Link
              href="/soluciones"
              className="rounded-lg border border-stone-200 p-4 transition-all hover:border-brand-700 hover:shadow-md"
            >
              <i className="fas fa-briefcase text-brand-700 mb-2 text-2xl"></i>
              <h4 className="text-base font-semibold text-stone-800">Soluciones</h4>
              <p className="mt-1 text-sm text-stone-600">Para empresas</p>
            </Link>

            <Link
              href="/blog"
              className="rounded-lg border border-stone-200 p-4 transition-all hover:border-brand-700 hover:shadow-md"
            >
              <i className="fas fa-blog text-brand-700 mb-2 text-2xl"></i>
              <h4 className="text-base font-semibold text-stone-800">Blog</h4>
              <p className="mt-1 text-sm text-stone-600">Artículos y noticias</p>
            </Link>

            <Link
              href="/cotizacion"
              className="rounded-lg border border-stone-200 p-4 transition-all hover:border-brand-700 hover:shadow-md"
            >
              <i className="fas fa-file-invoice text-brand-700 mb-2 text-2xl"></i>
              <h4 className="text-base font-semibold text-stone-800">Cotización</h4>
              <p className="mt-1 text-sm text-stone-600">Solicita presupuesto</p>
            </Link>
          </div>
        </div>

        {/* Categorías de Cursos Populares */}
        <div className="mt-12 w-full">
          <h3 className="mb-6 text-xl font-semibold text-stone-800">
            Categorías de Cursos Populares
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/cursos/seguridad-operativa"
              className="rounded-full border border-stone-300 px-4 py-2 text-sm transition-colors hover:border-brand-700 hover:bg-brand-700 hover:text-white"
            >
              Seguridad Operativa
            </Link>
            <Link
              href="/cursos/maquinaria-equipos"
              className="rounded-full border border-stone-300 px-4 py-2 text-sm transition-colors hover:border-brand-700 hover:bg-brand-700 hover:text-white"
            >
              Maquinaria y Equipos
            </Link>
            <Link
              href="/cursos/brigadas-proteccion-civil"
              className="rounded-full border border-stone-300 px-4 py-2 text-sm transition-colors hover:border-brand-700 hover:bg-brand-700 hover:text-white"
            >
              Brigadas y Protección Civil
            </Link>
            <Link
              href="/cursos/normas-stps"
              className="rounded-full border border-stone-300 px-4 py-2 text-sm transition-colors hover:border-brand-700 hover:bg-brand-700 hover:text-white"
            >
              Normas NOM-STPS
            </Link>
          </div>
        </div>

        {/* Información de Ayuda */}
        <div className="bg-brand-50 mt-12 w-full rounded-lg p-6">
          <h3 className="mb-3 text-lg font-semibold text-stone-800">¿Necesitas Ayuda?</h3>
          <p className="mb-4 text-stone-600">
            Si crees que esto es un error o necesitas asistencia, no dudes en contactarnos.
          </p>
          <div className="flex flex-col gap-2 text-sm text-stone-700 sm:flex-row sm:justify-center sm:gap-6">
            <a href="tel:+52XXXXXXXXXX" className="hover:text-brand-700 transition-colors">
              <i className="fas fa-phone mr-2"></i>
              +52-XX-XXXX-XXXX
            </a>
            <a
              href="mailto:contacto@cefforte.com.mx"
              className="hover:text-brand-700 transition-colors"
            >
              <i className="fas fa-envelope mr-2"></i>
              contacto@cefforte.com.mx
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
