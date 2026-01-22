"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface CtaButton {
  text: string;
  href: string;
}

interface MediaContent {
  type: "image" | "highlight";
  // Para tipo "image"
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  // Para tipo "highlight"
  highlight?: {
    icon: string;
    title: string;
    description: string;
  };
  // Configuración visual
  showDecorations?: boolean;
}

interface TwoColumnFeatureProps {
  eyebrow?: string;
  title: string;
  subtitle?: string; // Deprecated: usar eyebrow en su lugar
  description: string;
  features: FeatureItem[];
  cta?: CtaButton;
  media?: MediaContent;
  // Deprecated: usar media con type "highlight" en su lugar
  sideHighlight?: {
    icon: string;
    title: string;
    description: string;
  };
  reverseLayout?: boolean;
  className?: string;
  backgroundColor?: string;
  id?: string;
}

/**
 * TwoColumnFeature - Componente de dos columnas para features empresariales
 *
 * Basado en la plantilla de Tailwind UI con adaptaciones al sistema de diseño.
 * Muestra información detallada con:
 * - Columna principal: eyebrow, título, descripción, lista de features y CTA
 * - Columna secundaria: imagen con decoraciones o destacado visual con icono
 * - Layout reversible para alternar el orden visual
 *
 * @example
 * ```tsx
 * // Con imagen
 * <TwoColumnFeature
 *   eyebrow="Deploy faster"
 *   title="A better workflow"
 *   description="Lorem ipsum dolor sit amet..."
 *   features={[...]}
 *   media={{
 *     type: "image",
 *     image: { src: "/screenshot.png", alt: "Product" }
 *   }}
 * />
 * ```
 */
export default function TwoColumnFeature({
  eyebrow,
  title,
  subtitle,
  description,
  features,
  cta,
  media,
  sideHighlight,
  reverseLayout = false,
  className = "",
  backgroundColor = "bg-white",
  id,
}: TwoColumnFeatureProps) {
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
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isVisible]);

  // Retrocompatibilidad: convertir sideHighlight a media si es necesario
  const mediaContent: MediaContent = media || {
    type: "highlight",
    highlight: sideHighlight || {
      icon: "fas fa-star",
      title: "Destacado",
      description: "Contenido destacado",
    },
  };

  // Retrocompatibilidad: usar subtitle como eyebrow si no hay eyebrow
  const displayEyebrow = eyebrow || subtitle;

  return (
    <section ref={sectionRef} className={`overflow-hidden ${backgroundColor} ${className}`} id={id}>
      <article>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          {/* COLUMNA DE CONTENIDO */}
          <div className={`px-6 lg:px-0 lg:pt-4 lg:pr-4 ${reverseLayout ? "lg:order-2" : ""}`}>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">


              {/* Título */}
              <p
                className={`section-title text-display-md mb-6 text-gray-950 text-left transition-all duration-500 ease-out ${
                  displayEyebrow ? "mt-2" : ""
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: isVisible ? (displayEyebrow ? "50ms" : "0ms") : "0ms" }}
              >
                {title}
              </p>

              {/* Eyebrow */}
              {displayEyebrow && (
                <b
                  className={`section-subtitle text-left text-gray-950 transition-all duration-500 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  {displayEyebrow}
                </b>
              )}


              {/* Descripción */}
              <p
                className={`mt-6 section-subtitle text-body-lg text-gray-800 text-left transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: isVisible ? (displayEyebrow ? "100ms" : "50ms") : "0ms" }}
              >
                {description}
              </p>

              {/* Lista de features - Con cajas y hover */}
              <dl className="mt-10 space-y-3">
                {features.map((feature, index) => {
                  const baseDelay = displayEyebrow ? 150 : 100;
                  return (
                    <div
                      key={index}
                      className={`rounded-xl bg-white px-5 py-4 transition-[opacity,transform,background-color] duration-200 ease-out lift ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                      }`}
                      style={{ transitionDelay: isVisible ? `${baseDelay + index * 50}ms` : "0ms" }}
                    >
                      <dt className="text-base font-semibold text-gray-800 flex items-start gap-3">
                        <i className={`${feature.icon} text-brand-700 text-lg flex-shrink-0 mt-0.5`} aria-hidden="true" />
                        <span className="leading-relaxed items-start">{feature.title}</span>
                      </dt>
                      {feature.description && feature.description.trim() !== "" && (
                        <dd className="mt-2 ml-8 text-sm text-gray-600 leading-relaxed">{feature.description}</dd>
                      )}
                    </div>
                  );
                })}
              </dl>
              {/* CTA */}
              {cta && (
                <div className={`mt-8 transition-all duration-200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{transitionDelay: isVisible ? `${(displayEyebrow ? 150 : 100) + features.length * 50}ms` : "0ms",}}>
                  <Button color="brand" href={cta.href} className="inline-flex w-max shadow-sm">
                    <span className="inline-flex font-semibold items-center gap-2">
                      {cta.text}
                      <i className="fas fa-arrow-right text-xs text-gray-50" />
                    </span>
                  </Button>
                </div>
              )}
            </div>
          </div>
          {/* CON IMAGEN - VERSIÓN SIMPLIFICADA */}
          {mediaContent.type === "image" && mediaContent.image && (
            <div
              className={`transition-all px-8 sm:px-16 lg:px-4 duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            >
              <Image
                alt={mediaContent.image.alt}
                src={mediaContent.image.src}
                width={mediaContent.image.width || 800}
                height={mediaContent.image.height || 600}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
