import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-700 relative w-full text-white">
      {/* Sección de Sitemap */}
      <section className="w-full border-b border-white/10">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Columna 1: Inicio/Navegación */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link href="/">
                    <h5 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">Inicio</h5>
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros">
                    <h5 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">Nosotros</h5>
                  </Link>
                </li>
                <li>
                  <Link href="/soluciones">
                    <h5 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">Soluciones</h5>
                  </Link>
                </li>
                <li>
                  <Link href="/testimonios">
                    <h5 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">Testimonios</h5>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <h5 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">Blog</h5>
                  </Link>
                </li>
                <li>
                  <Link href="/contacto">
                    <h5 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">Contáctanos</h5>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 2: Cursos */}
            <div>
              <Link href="/cursos">
                <h5 className="mb-6 inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">Cursos y Capacitación</h5>
              </Link>
              <ul className="space-y-3">
                <li>
                  <Link href="/cursos/seguridad-operativa" className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white">Seguridad Operativa</Link>
                </li>
                <li>
                  <Link href="/cursos/maquinaria" className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white">Maquinaria y Equipos Críticos</Link>
                </li>
                <li>
                  <Link href="/cursos/sustancias-quimicas" className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white">Sustancias Químicas y Atmósferas Peligrosas</Link>
                </li>
                <li>
                  <Link href="/cursos/brigadas" className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white">Brigadas y Protección Civil</Link>
                </li>
                <li>
                  <Link href="/cursos/normas-nom" className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white">Cursos Basados en Normas NOM-STPS</Link>
                </li>
                <li>
                  <Link href="/cursos/gestion" className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white">Gestión y Cultura de Seguridad</Link>
                </li>
                <li>
                  <Link href="/cursos/logistica" className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white">Logística y Almacenes</Link>
                </li>
                <li>
                  <Link href="/cursos/construccion" className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white">Construcción</Link>
                </li>
              </ul>
            </div>

            {/* Card 3: Cotización - Ocupa columna completa en tablet */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="rounded-xs flex h-full flex-col justify-center border border-white/20 p-8 transition-all duration-300 hover:border-white/40 hover:bg-white/5">
                <h6 className="mb-6 inline-block text-stone-100 hover:text-stone-50 active:text-white">¿Necesitas una Cotización?</h6>
                <p className="mb-6 text-base leading-relaxed text-stone-100">Obtén una cotización personalizada para las necesidades específicas de tu empresa en minutos.</p>
                <Link href="/cotizar" className="rounded-xs inline-flex w-max items-center justify-center bg-stone-100 px-4 py-2.5 text-sm font-bold tracking-wide transition-colors transition-transform hover:translate-x-1 hover:bg-stone-50 active:bg-white">
                  <span className="text-brand-700 uppercase">Cotizar ahora</span>
                  <i className="fas fa-arrow-right text-brand-700 ml-1 h-4 w-4"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Legal/Social */}
      <section className="w-full border-t border-white/10 py-8">
        <div className="container grid grid-cols-1 items-center justify-items-center gap-2 lg:grid-cols-[auto_1fr_auto] lg:justify-items-start">
          {/* Copyright (Tercero en móvil, Izquierda en desktop) */}
          <div className="order-3 lg:order-1">
            <small className="text-stone-100">&copy; 2026 CERFORTTE - INDUSTRIAL TRAINING</small>
          </div>
          {/* Enlaces Legales (Segundo en móvil, Centro en desktop) */}
          <nav className="order-2 lg:order-2 lg:justify-self-center" aria-label="Legal">
            <ul className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
              <li>
                <Link href="/terminos" className="inline-block text-sm text-stone-100 transition-all duration-150 hover:translate-x-1 hover:text-stone-50 active:text-white">Términos y Condiciones</Link>
              </li>
              <li className="text-brand-200 hidden text-sm sm:block" aria-hidden="true">|</li>
              <li>
                <Link href="/privacidad" className="inline-block text-sm text-stone-100 transition-all duration-150 hover:translate-x-1 hover:text-stone-50 active:text-white">Privacidad</Link>
              </li>
              <li className="text-brand-200 hidden text-sm sm:block" aria-hidden="true">|</li>
              <li>
                <Link href="/sitemap" className="inline-block text-sm text-stone-100 transition-all duration-150 hover:translate-x-1 hover:text-stone-50 active:text-white">Mapa del Sitio</Link>
              </li>
            </ul>
          </nav>

          {/* Redes Sociales (Primero en móvil, Derecha en desktop) */}
          <div className="order-1 lg:order-3 lg:justify-self-end">
            <ul className="flex items-center justify-center gap-6" aria-label="Redes sociales">
              <li>
                <a href="#" className="inline-block text-stone-100 transition-all duration-150 hover:-translate-y-0.5 hover:text-white active:text-white" aria-label="Facebook">
                  <i className="fab fa-facebook-f text-3xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-stone-100 transition-all duration-150 hover:-translate-y-0.5 hover:text-white active:text-white" aria-label="YouTube">
                  <i className="fab fa-youtube text-3xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-stone-100 transition-all duration-150 hover:-translate-y-0.5 hover:text-white active:text-white" aria-label="Instagram">
                  <i className="fab fa-instagram text-3xl"></i>
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-stone-100 transition-all duration-150 hover:-translate-y-0.5 hover:text-white active:text-white" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in text-3xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

