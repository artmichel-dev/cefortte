"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StarGrid } from "@/components/ui/StarGrid";
import clsx from "clsx";

interface CtaButton {
  text: string;
  href: string;
  icon?: string;
}

interface BackgroundImage {
  src: string;
  alt: string;
  /** Color del overlay (por defecto: negro con opacidad) */
  overlayColor?: string;
  /** Opacidad del overlay (0-100, por defecto: 40) */
  overlayOpacity?: number;
  /** Posición del objeto (por defecto: center) */
  objectPosition?: string;
}

interface HeroPointsProps {
  title: string;
  subtitle: string;
  primaryCta: CtaButton;
  secondaryCta?: CtaButton;
  footnote?: string;
  className?: string;
  backgroundColor?: string;
  /** Imagen de fondo opcional */
  backgroundImage?: BackgroundImage;
  /** Color del texto cuando hay imagen de fondo (por defecto: blanco) */
  textColor?: string;
}

/**
 * HeroPoints - Componente hero con efecto de puntos animados
 *
 * Hero con título, subtítulo, CTAs y nota al pie opcional.
 * Incluye efecto de puntos animados (StarGrid) sobre la imagen de fondo.
 * Soporta imagen de fondo con overlay personalizable.
 * Ideal para páginas de servicios o productos que requieren un efecto visual distintivo.
 *
 * @example
 * ```tsx
 * // Hero con imagen de fondo y puntos animados
 * <HeroPoints
 *   title="Título"
 *   subtitle="Descripción"
 *   primaryCta={{ text: "CTA", href: "/link" }}
 *   backgroundImage={{
 *     src: "/hero.jpg",
 *     alt: "Hero",
 *     overlayColor: "brand-700",
 *     overlayOpacity: 60
 *   }}
 * />
 * ```
 */
export default function HeroPoints({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  footnote,
  className = "",
  backgroundColor = "bg-white",
  backgroundImage,
  textColor,
}: HeroPointsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Verificar visibilidad inicial
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isVisible]);

  // Determinar colores de texto
  const titleColor = textColor || (backgroundImage ? "text-white" : "text-gray-900");
  const subtitleColor = textColor || (backgroundImage ? "text-gray-50" : "text-gray-600");
  const secondaryCtaColor = backgroundImage
    ? "text-gray-50 group-hover:text-white"
    : "text-gray-700 group-hover:text-brand-700";
  const footnoteColor = backgroundImage ? "text-gray-200" : "text-gray-500";

  // Configuración del overlay
  const overlayColor = backgroundImage?.overlayColor || "black";
  const overlayOpacity = backgroundImage?.overlayOpacity || 40;
  const overlayClass = `bg-${overlayColor}/${overlayOpacity}`;

  // Generar items para el grid (20 columnas x 20 filas = 400 puntos)
  const columns = 20;
  const rows = 20;
  const totalPoints = columns * rows;
  const gridItems = Array(totalPoints).fill(0);

  return (
    <section ref={sectionRef} className={`relative ${backgroundColor} ${className} overflow-hidden`}>
      {/* Imagen de fondo */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            className="object-cover"
            style={{ objectPosition: backgroundImage.objectPosition || "center" }}
            priority
            quality={90}
          />

          {/* Overlays base */}
          <div className={`absolute inset-0 ${overlayClass}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-700/90 via-brand-700/50 to-brand-900/90" />

          {/* Efecto de puntos animados - tamaño fijo de celdas para mantener distancia constante */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
            <StarGrid
              active={60}
              duration={120}
              featureDuration={2000}
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${columns}, 60px)`,
                gridTemplateRows: `repeat(${rows}, 40px)`,
                gap: 0,
              }}
            >
              {gridItems.map((_, index) => (
                <StarGrid.Item key={index} className="relative flex items-center justify-center w-full h-full">
                  {({ isActive, isFeatured }) => (
                    <>
                      {/* Círculo exterior cuando está featured */}
                      <svg
                        className={clsx(
                          isFeatured ? "scale-100 opacity-100" : "scale-0 opacity-0",
                          "absolute h-6 w-6 stroke-brand-300/30 stroke-[1] transition-all duration-1000"
                        )}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10.5" />
                      </svg>

                      {/* Punto central */}
                      <div
                        className={clsx(
                          {
                            "scale-[0.4] bg-white/12": !isActive && !isFeatured,
                            "scale-100": isActive || isFeatured,
                            "bg-white/35": isActive && !isFeatured,
                            "bg-brand-300 shadow-lg shadow-brand-400/50": isFeatured,
                          },
                          "relative h-1.5 w-1.5 rounded-full transition-all duration-700"
                        )}
                      />
                    </>
                  )}
                </StarGrid.Item>
              ))}
            </StarGrid>
          </div>
        </div>
      )}

      {/* Contenido */}
      <article className="relative z-10">
        <div className="mx-auto max-w-4xl text-center px-8">
          {/* Logo */}
          <div
            className={`mb-6 flex justify-center transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: isVisible ? "50ms" : "0ms" }}
          >
            <div className="relative h-12 w-48 sm:h-16 sm:w-64 md:h-20 md:w-80 lg:h-24 lg:w-96">
              <Image
                src="https://assets.zupernova.dev/cefortte/svg/icon-sm-cefortte-white.svg"
                alt="Cefortte Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>

          {/* Título */}
          <h1
            className={`section-title text-display-lg ${titleColor} transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            } ${backgroundImage ? "drop-shadow-lg" : ""}`}
          >
            {title}
          </h1>

          {/* Subtítulo */}
          <p
            className={`section-subtitle text-body-lg mx-auto mt-6 max-w-xl text-balance ${subtitleColor} transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            } ${backgroundImage ? "drop-shadow-md" : ""}`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            {subtitle}
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <Button color="brand" href={primaryCta.href} className="inline-flex w-max shadow-sm">
              <span className="inline-flex items-center gap-2">
                {primaryCta.text} <i className="fas fa-arrow-right text-xs text-gray-50" />
              </span>
            </Button>

            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="group inline-flex items-center gap-2 transition-colors drop-shadow-sm"
              >
                <span className="text-base font-medium text-gray-50 group-hover:text-white transition-colors">
                  {secondaryCta.text}
                </span>
                <i className="fas fa-graduation-cap text-gray-50 group-hover:text-white transition-colors h-4 w-4" />
              </a>
            )}
          </div>

          {/* Nota al pie */}
          {footnote && (
            <p
              className={`mt-8 text-xs ${footnoteColor} transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              } ${backgroundImage ? "drop-shadow" : ""}`}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            >
              {footnote}
            </p>
          )}
        </div>
      </article>
    </section>
  );
}
