"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Navigation() {
  useEffect(() => {
    const checkbox = document.getElementById("estadomenu") as HTMLInputElement;

    const handleMenuToggle = () => {
      if (checkbox && checkbox.checked) {
        // Menú abierto - bloquear scroll pero mantener scrollbar visible
        document.documentElement.classList.add("noscroll");
        // Detectar si la página tiene scroll
        const hasScroll =
          document.documentElement.scrollHeight > document.documentElement.clientHeight;
        if (hasScroll) {
          document.documentElement.classList.add("noscroll-long");
        }
      } else {
        // Menú cerrado - restaurar scroll
        document.documentElement.classList.remove("noscroll", "noscroll-long");
      }
    };

    // Función para cerrar el menú
    const closeMenu = () => {
      if (checkbox) {
        checkbox.checked = false;
        document.documentElement.classList.remove("noscroll", "noscroll-long");
      }
    };

    // Agregar event listeners
    if (checkbox) {
      checkbox.addEventListener("change", handleMenuToggle);
    }

    // Cerrar menú al hacer clic en cualquier enlace dentro del menú
    const menuLinks = document.querySelectorAll("#navegacionglobal a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Cleanup
    return () => {
      if (checkbox) {
        checkbox.removeEventListener("change", handleMenuToggle);
      }
      menuLinks.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
      document.documentElement.classList.remove("noscroll", "noscroll-long");
    };
  }, []);

  return (
    <header>
      <input type="checkbox" id="estadomenu" className="estadomenu hidden" />
      <nav id="navegacionglobal" className="no-js" role="navigation" aria-label="Global">
        <div className="contenido">
          {/* Menu hamburguesa */}
          <ul className="encabezado border-b border-white/10">
            <li className="elemento brand relative">
              <Link href="/" className="enlace enlace-brand" aria-label="Ir a inicio">
                <span className="enlace-text">Cefortte</span>
              </Link>
            </li>
            <li className="elemento iconomenu">
              {/* Hamburguesa */}
              <a
                href="#estadomenu"
                role="button"
                className="anclajemenu anclajemenu-open"
                id="anclajemenu-open"
              >
                <span className="anclajemenu-label">Global Nav Abrir menu</span>
              </a>
              <a
                href="#"
                role="button"
                className="anclajemenu anclajemenu-close"
                id="anclajemenu-close"
              >
                <span className="anclajemenu-label">Global Nav Cerrar menu</span>
              </a>
              <label className="iconomenu-label" htmlFor="estadomenu" aria-hidden="true">
                <span className="iconomenu-bread iconomenu-bread-top">
                  <span className="iconomenu-bread-crust iconomenu-bread-crust-top"></span>
                </span>
                <span className="iconomenu-bread iconomenu-bread-bottom">
                  <span className="iconomenu-bread-crust iconomenu-bread-crust-bottom"></span>
                </span>
              </label>
              {/* Menu superior */}
              <div className="desktop-nav-menu absolute right-9 hidden h-16 text-right md:block">
                <div className="flex h-full items-center justify-end pr-6">
                  <ul className="flex h-16 items-center md:space-x-3 lg:space-x-4 xl:space-x-6">
                    <li className="flex h-full items-center">
                      <Link
                        href="/nosotros"
                        className="group relative flex h-full items-center px-2 text-xs font-normal text-stone-600 transition-colors hover:text-stone-800 active:text-stone-950"
                      >
                        <h6 className="text-base font-medium">Nosotros</h6>
                        <span className="bg-brand-700 absolute bottom-0 left-0 h-[3px] w-full opacity-0 transition-opacity duration-150 group-hover:opacity-100"></span>
                      </Link>
                    </li>
                    <li className="flex h-full items-center">
                      <Link
                        href="/soluciones"
                        className="group relative flex h-full items-center px-2 text-xs font-normal text-stone-600 transition-colors hover:text-stone-800 active:text-stone-950"
                      >
                        <h6 className="text-base font-medium">Soluciones</h6>
                        <span className="bg-brand-700 absolute bottom-0 left-0 h-[3px] w-full opacity-0 transition-opacity duration-150 group-hover:opacity-100"></span>
                      </Link>
                    </li>
                    <li className="flex h-full items-center">
                      <Link
                        href="/cursos"
                        className="group relative flex h-full items-center px-2 text-xs font-normal text-stone-600 transition-colors hover:text-stone-800 active:text-stone-950"
                      >
                        <h6 className="text-base font-medium">Cursos</h6>
                        <span className="bg-brand-700 absolute bottom-0 left-0 h-[3px] w-full opacity-0 transition-opacity duration-150 group-hover:opacity-100"></span>
                      </Link>
                    </li>
                    <li className="flex h-full items-center">
                      <Link
                        href="/blog"
                        className="group relative flex h-full items-center px-2 text-xs font-normal text-stone-600 transition-colors hover:text-stone-800 active:text-stone-950"
                      >
                        <h6 className="text-base font-medium">Blog</h6>
                        <span className="bg-brand-700 absolute bottom-0 left-0 h-[3px] w-full opacity-0 transition-opacity duration-150 group-hover:opacity-100"></span>
                      </Link>
                    </li>
                    <li className="flex h-full items-center">
                      <Link
                        href="/cotizacion"
                        className="bg-brand-700 hover:bg-brand-600 active:bg-brand-700 rounded-xs inline-block inline-flex w-max items-center justify-center px-4 py-2 text-sm font-bold tracking-wide text-stone-50 transition-colors"
                      >
                        <span className="text-base font-medium">Cotizar ahora</span>
                        <i className="fas fa-arrow-right ml-1 h-4 w-4"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          {/* Escritorio */}
          <ul className="lista">
            {/* Contenido del menu interno */}
            <div className="scrollbar-hide relative grid w-full grid-rows-[auto_1fr_auto] overflow-y-auto">
              <div className="h-12 w-full py-8"></div>
              {/* Sección roja con enlaces */}
              <div className="max-h-max w-full py-8">
                <div className="container mx-auto max-w-7xl">
                  <div className="grid grid-cols-1 justify-between md:grid-cols-2 md:grid-cols-[auto_1fr]">
                    {/* Columna izquierda: Cursos y Capacitación */}
                    <div className="grid-cols-1">
                      <nav>
                        <ul className="space-y-4">
                          <li>
                            <Link href="/">
                              <h4 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">
                                Inicio
                              </h4>
                            </Link>
                          </li>
                          <li>
                            <Link href="/nosotros">
                              <h4 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">
                                Nosotros
                              </h4>
                            </Link>
                          </li>
                          <li>
                            <Link href="/cursos" className="sm:hidden">
                              <h4 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">
                                Cursos
                              </h4>
                            </Link>
                          </li>
                          <li>
                            <Link href="/soluciones">
                              <h4 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">
                                Soluciones
                                <span className="hidden lg:inline"> para empresas</span>
                              </h4>
                            </Link>
                          </li>
                          <li>
                            <Link href="/testimonios">
                              <h4 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">
                                Testimonios
                              </h4>
                            </Link>
                          </li>
                          <li>
                            <Link href="/blog">
                              <h4 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">
                                Blog
                              </h4>
                            </Link>
                          </li>
                          <li>
                            <Link href="/contacto">
                              <h4 className="inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">
                                Contáctanos
                              </h4>
                            </Link>
                          </li>
                          <li className="mt-6">
                            <Link href="/cotizacion">
                              <h5 className="text-brand-700 rounded-xs inline-block inline-block w-max bg-stone-100 px-3 py-3 transition-colors transition-transform hover:translate-x-1 hover:bg-stone-50 active:bg-white">
                                Cotizar ahora
                              </h5>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                      {/* Iconos de redes sociales */}
                      <li className="mt-12 flex gap-6">
                        <a
                          href="#"
                          className="text-stone-100 transition-all duration-150 hover:-translate-y-0.5 hover:text-white active:text-white"
                          aria-label="Facebook"
                        >
                          <i className="fab fa-facebook-f text-3xl"></i>
                        </a>
                        <a
                          href="#"
                          className="text-stone-100 transition-all duration-150 hover:-translate-y-0.5 hover:text-white active:text-white"
                          aria-label="YouTube"
                        >
                          <i className="fab fa-youtube text-3xl"></i>
                        </a>
                        <a
                          href="#"
                          className="text-stone-100 transition-all duration-150 hover:-translate-y-0.5 hover:text-white active:text-white"
                          aria-label="Instagram"
                        >
                          <i className="fab fa-instagram text-3xl"></i>
                        </a>
                        <a
                          href="#"
                          className="text-stone-100 transition-all duration-150 hover:-translate-y-0.5 hover:text-white active:text-white"
                          aria-label="LinkedIn"
                        >
                          <i className="fab fa-linkedin-in text-3xl"></i>
                        </a>
                      </li>
                    </div>
                    {/* Columna derecha: Enlaces principales */}
                    <div className="hidden grid-cols-2 md:mx-auto md:block">
                      <Link href="/cursos">
                        <h4 className="mb-6 inline-block text-stone-100 transition-transform hover:translate-x-1 hover:text-stone-50 active:text-white">
                          Cursos
                          <span className="hidden lg:inline"> y Capacitación</span>
                        </h4>
                      </Link>
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/cursos/seguridad-operativa"
                            className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white"
                          >
                            Seguridad Operativa
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/cursos/maquinaria-equipos"
                            className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white"
                          >
                            Maquinaria y Equipos Críticos
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/cursos/sustancias-quimicas"
                            className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white"
                          >
                            Sustancias Químicas y Atmósferas Peligrosas
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/cursos/brigadas-proteccion-civil"
                            className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white"
                          >
                            Brigadas y Protección Civil
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/cursos/normas-stps"
                            className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white"
                          >
                            Cursos Basados en Normas NOM-STPS
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/cursos/gestion-cultura"
                            className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white"
                          >
                            Gestión y Cultura de Seguridad
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/cursos/logistica-almacenes"
                            className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white"
                          >
                            Logística y Almacenes
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/cursos/construccion"
                            className="inline-block text-base font-medium text-stone-100 transition-transform hover:translate-x-1 hover:text-white active:text-white"
                          >
                            Construcción
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sección de suscripción con fondo gris claro */}
              <div className="w-full border-t border-white/10 p-8">
                <div className="mx-auto w-full">
                  <div className="grid grid-cols-1 items-start justify-center gap-8 lg:grid-cols-[auto_auto]">
                    {/* Texto descriptivo */}
                    <div className="items-center justify-between lg:justify-self-end">
                      <h5 className="mb-2 font-semibold text-stone-100">Mantente actualizado</h5>
                      <p className="max-w-lg text-stone-100">
                        Recibe novedades sobre cursos y normativas.
                      </p>
                    </div>
                    {/* Formulario */}
                    <div className="justify-between:justify-self-start items-center">
                      <form className="space-y-3">
                        <div className="flex flex-col gap-2 sm:flex-row">
                          <label htmlFor="email-newsletter" className="sr-only">
                            Correo electrónico
                          </label>
                          <input
                            id="email-newsletter"
                            type="email"
                            name="email"
                            required
                            placeholder="tu@correo.com"
                            autoComplete="email"
                            className="flex-1 border border-white/20 bg-white/5 px-3 py-2 text-sm text-white transition-all duration-200 placeholder:text-white/50 focus:border-white/40 focus:bg-white/10 focus:outline-none focus:outline-none focus:ring-0"
                          />
                          <button
                            type="submit"
                            className="rounded-xs text-brand-700 cursor-pointer whitespace-nowrap bg-stone-100 px-6 py-2 text-sm font-semibold transition-colors transition-transform hover:translate-x-1 hover:bg-stone-50 active:bg-white"
                          >
                            Suscribirse
                          </button>
                        </div>
                      </form>
                      <small className="text-stone-200">
                        Protegemos tus datos. Revisa nuestro
                        <span className="inline">
                          <Link
                            href="/privacidad"
                            className="text-xs text-stone-100 hover:text-white"
                          >
                            {" "}
                            aviso de privacidad.
                          </Link>
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}
