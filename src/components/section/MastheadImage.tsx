"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

// Configuración del icono/logo

interface IconConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Configuración de imagen responsiva

interface ImageConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Props del componente MastheadImage

interface MastheadImageProps {
  /** Icono o logo opcional que aparece sobre el texto */
  icon?: IconConfig;
  /** Texto principal del masthead */
  text: string;
  /** Imagen para dispositivos móviles */
  mobileImage: ImageConfig;
  /** Imagen para dispositivos desktop */
  desktopImage: ImageConfig;
  /** Clases CSS adicionales para la sección */
  className?: string;
  /** Clases CSS adicionales para el texto */
  textClassName?: string;
  /** Ancho máximo de las imágenes */
  maxWidth?: {
    mobile?: string;
    desktop?: string;
  };
  /** Color de fondo de la sección */
  backgroundColor?: string;
}

/**
 * MastheadImage - Componente hero reutilizable
 *
 * Muestra una sección hero con:
 * - Icono/logo opcional
 * - Texto descriptivo
 * - Imágenes responsivas (diferentes para móvil y desktop)
 * - Animación de entrada al hacer scroll
 *
 * @example
 * ```tsx
 * <MastheadImage
 *   icon={{ src: "/logo.svg", alt: "Logo" }}
 *   text="Tu texto aquí"
 *   mobileImage={{ src: "/mobile.jpg", alt: "Mobile", width: 800, height: 600 }}
 *   desktopImage={{ src: "/desktop.jpg", alt: "Desktop", width: 1440, height: 700 }}
 * />
 * ```
 */
export default function MastheadImage({
  icon,
  text,
  mobileImage,
  desktopImage,
  className = "",
  textClassName = "",
  maxWidth = {
    mobile: "500px",
    desktop: "900px",
  },
  backgroundColor = "bg-white",
}: MastheadImageProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className={`${backgroundColor} ${className}`}>
      <div className="hero-container mx-auto">
        {/* Text Content */}
        <div
          className={`text-center mt-8 mb-3 transition-all duration-[450ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
          }`}
        >
          {icon && (
            <Image
              src={icon.src}
              alt={icon.alt}
              width={icon.width || 120}
              height={icon.height || 120}
              className="h-16 sm:h-24 w-auto mx-auto mb-4"
            />
          )}
          <p className={`section-subtitle text-body-lg ${textClassName}`}>{text}</p>
        </div>

        {/* Images - Different images for mobile and desktop */}
        <div
          className={`relative w-full flex justify-center transition-all duration-[450ms] ease-out delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
          }`}
        >
          {/* Mobile Image */}
          <Image
            src={mobileImage.src}
            alt={mobileImage.alt}
            width={mobileImage.width}
            height={mobileImage.height}
            className="sm:hidden w-full h-auto object-contain"
            style={{ maxWidth: maxWidth.mobile }}
          />
          {/* Desktop Image */}
          <Image
            src={desktopImage.src}
            alt={desktopImage.alt}
            width={desktopImage.width}
            height={desktopImage.height}
            className="hidden sm:block w-full h-auto object-contain"
            style={{ maxWidth: maxWidth.desktop }}
          />
        </div>
      </div>
    </section>
  );
}
