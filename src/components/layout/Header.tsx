"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Field, Label } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";

export default function Header() {
  useEffect(() => {
    const checkbox = document.getElementById("estadomenu") as HTMLInputElement;
    let scrollPosition = 0;

    const handleMenuToggle = () => {
      if (checkbox && checkbox.checked) {
        // Menú abierto - bloquear scroll

        // Guardar posición actual del scroll
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // Primero, remover cualquier clase previa para limpiar el estado
        document.documentElement.classList.remove("noscroll", "noscroll-long");
        document.body.classList.remove("menu-open");

        // Forzar reflow para que el navegador reconozca la limpieza
        void document.documentElement.offsetHeight;
        void document.body.offsetHeight;

        // Usar setTimeout corto en lugar de requestAnimationFrame para mejor compatibilidad
        setTimeout(() => {
          // Verificar si la página tiene scroll ANTES de aplicar las clases
          const hasScroll = document.documentElement.scrollHeight > document.documentElement.clientHeight;

          // Aplicar las clases necesarias
          document.documentElement.classList.add("noscroll");
          document.body.classList.add("menu-open");

          if (hasScroll) {
            document.documentElement.classList.add("noscroll-long");
          }

          // Forzar otro reflow después de aplicar las clases
          void document.documentElement.offsetHeight;
        }, 10);
      } else {
        // Menú cerrado - restaurar scroll

        // Remover todas las clases relacionadas con el menú
        document.documentElement.classList.remove("noscroll", "noscroll-long");
        document.body.classList.remove("menu-open");

        // Forzar reflow
        void document.documentElement.offsetHeight;
        void document.body.offsetHeight;

        // Restaurar posición de scroll con un pequeño delay
        setTimeout(() => {
          window.scrollTo(0, scrollPosition);
        }, 0);
      }
    };

    // Función para cerrar el menú
    const closeMenu = () => {
      if (checkbox) {
        checkbox.checked = false;

        // Trigger manual del evento de cambio para asegurar que se ejecuta handleMenuToggle
        const event = new Event("change", { bubbles: true });
        checkbox.dispatchEvent(event);
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
      // Limpiar completamente al desmontar
      document.documentElement.classList.remove("noscroll", "noscroll-long");
      document.body.classList.remove("menu-open");
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
              <a href="#estadomenu" role="button" className="anclajemenu anclajemenu-open" id="anclajemenu-open">
                <span className="anclajemenu-label">Global Nav Abrir menu</span>
              </a>
              <a href="#" role="button" className="anclajemenu anclajemenu-close" id="anclajemenu-close">
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
                      <Link href="/nosotros" className="group nav-link">
                        <span className="flex flex-col h-full">
                          <span className="nav-link text-h6">Nosotros</span>
                          <span className="nav-link-underline"></span>
                        </span>
                      </Link>
                    </li>
                    <li className="flex h-full items-center">
                      <Link href="/cursos" className="group nav-link">
                        <span className="flex flex-col h-full">
                          <span className="nav-link text-h6">Cursos</span>
                          <span className="nav-link-underline"></span>
                        </span>
                      </Link>
                    </li>
                    <li className="flex h-full items-center">
                      <Link href="/empresas" className="group nav-link">
                        <span className="flex flex-col h-full">
                          <span className="nav-link text-h6">Empresas</span>
                          <span className="nav-link-underline"></span>
                        </span>
                      </Link>
                    </li>
                    <li className="flex h-full items-center">
                      <Link href="/blog" className="group nav-link">
                        <span className="flex flex-col h-full">
                          <span className="nav-link text-h6">Blog</span>
                          <span className="nav-link-underline"></span>
                        </span>
                      </Link>
                    </li>
                    <li className="flex h-full items-center">
                      <Button
                        color="brand"
                        href="/cotizacion"
                        type="submit"
                        className="!flex-none px-6 inline-flex w-max"
                      >
                        Cotizar ahora <i className="fas fa-arrow-right text-xs text-gray-50" />
                      </Button>
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
              <div className="h-12 w-full py-4"></div>
              {/* Sección roja con enlaces */}
              <div className="max-h-max w-full py-8">
                <div className="container mx-auto max-w-7xl">
                  <div className="grid grid-cols-1 justify-between md:grid-cols-2 md:grid-cols-[auto_1fr]">
                    {/* Columna izquierda: Cursos y Capacitación */}
                    <div className="grid-cols-1">
                      <nav>
                        <ul className="space-y-4 ml-1">
                          <li>
                            <Link href="/">
                              <p className="mobile-nav-link text-3xl">Inicio</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/nosotros">
                              <p className="mobile-nav-link text-3xl">Nosotros</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/cursos" className="md:hidden">
                              <p className="mobile-nav-link text-3xl">Cursos</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/empresas">
                              <p className="mobile-nav-link text-3xl">Empresas</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/testimonios">
                              <p className="mobile-nav-link text-3xl">Testimonios</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/blog">
                              <p className="mobile-nav-link text-3xl">Blog</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/contacto">
                              <p className="mobile-nav-link text-3xl">Contáctanos</p>
                            </Link>
                          </li>
                          <li className="mt-6">
                            <Button color="white" href="/cotizacion" type="submit" className="!w-fit !flex-none px-6">
                              Cotizar ahora <i className="fas fa-arrow-right text-xs text-brand-80" />
                            </Button>
                          </li>
                        </ul>
                      </nav>
                      {/* Iconos de redes sociales */}
                      <div className="mt-12 flex gap-6 ml-1">
                        <Link href="#" aria-label="Facebook">
                          <span className="fab fa-facebook-f text-3xl icon-link"></span>
                        </Link>
                        <Link href="#" aria-label="YouTube">
                          <span className="fab fa-youtube text-3xl icon-link"></span>
                        </Link>
                        <Link href="#" aria-label="Instagram">
                          <span className="fab fa-instagram text-3xl icon-link"></span>
                        </Link>
                        <Link href="#" aria-label="LinkedIn">
                          <span className="fab fa-linkedin-in text-3xl icon-link"></span>
                        </Link>
                      </div>
                    </div>
                    {/* Columna derecha: Enlaces principales */}
                    <div className="hidden grid-cols-2 md:mx-auto md:block">
                      <Link href="/">
                        <p className="mobile-nav-link text-3xl mb-4">Cursos y Capacitación</p>
                      </Link>

                      <ul className="space-y-3">
                        <li>
                          <Link href="/cursos/seguridad-operativa">
                            <span className="mobile-nav-sublink text-base">Seguridad Operativa</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cursos/maquinaria-equipos">
                            <span className="mobile-nav-sublink text-base">Maquinaria y Equipos Críticos</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cursos/sustancias-quimicas">
                            <span className="mobile-nav-sublink text-base">
                              Sustancias Químicas y Atmósferas Peligrosas
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cursos/brigadas-proteccion-civil">
                            <span className="mobile-nav-sublink text-base">Brigadas y Protección Civil</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cursos/normas-stps">
                            <span className="mobile-nav-sublink text-base">Cursos Basados en Normas NOM-STPS</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cursos/gestion-cultura">
                            <span className="mobile-nav-sublink text-base">Gestión y Cultura de Seguridad</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cursos/logistica-almacenes">
                            <span className="mobile-nav-sublink text-base">Logística y Almacenes</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cursos/construccion">
                            <span className="mobile-nav-sublink text-base">Construcción</span>
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
                  <div className="grid grid-cols-1 items-end justify-center gap-2 md:gap-8 md:grid-cols-[auto_auto]">
                    {/* Texto descriptivo */}
                    <div className="items-center justify-between md:justify-self-end">
                      <p className="text-title-sm text-gray-100">Mantente actualizado</p>
                      <p className="text-body text-brand-100">Recibe novedades sobre cursos y normativas.</p>
                    </div>
                    {/* Formulario */}
                    <div className="justify-between md:justify-self-start items-center">
                      <form className="space-y-3">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
                          <Field className="flex-1">
                            <Label className="sr-only">Correo electrónico</Label>
                            <Input
                              type="email"
                              name="email"
                              required
                              placeholder="tu@correo.com"
                              autoComplete="email"
                              className="!w-auto md:!w-fit"
                            />
                          </Field>
                          <Button color="white" type="submit" className="!w-fit !flex-none px-6">
                            Suscribirse
                          </Button>
                        </div>
                      </form>
                      <p className="text-balance">
                        <span className="text-micro text-brand-200 text-balance">Protegemos tus datos.</span>

                        <span className="inline">
                          <Link href="/privacidad" className="text-micro text-brand-200 hover:text-white text-balance">
                            {" "}
                            Revisa nuestro aviso de privacidad.
                          </Link>
                        </span>
                      </p>
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
