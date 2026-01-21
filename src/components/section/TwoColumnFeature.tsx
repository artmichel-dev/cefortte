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
              {/* Eyebrow - EXACTO DE LA PLANTILLA */}
              {displayEyebrow && (
                <h2
                  className={`text-base/7 font-semibold text-brand-700 transition-all duration-500 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  {displayEyebrow}
                </h2>
              )}

              {/* Título - EXACTO DE LA PLANTILLA */}
              <p
                className={`text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl transition-all duration-500 ease-out ${
                  displayEyebrow ? "mt-2" : ""
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: isVisible ? (displayEyebrow ? "50ms" : "0ms") : "0ms" }}
              >
                {title}
              </p>

              {/* Descripción - EXACTO DE LA PLANTILLA */}
              <p
                className={`mt-6 text-lg/8 text-gray-600 transition-all duration-500 ease-out ${
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
                      className={`rounded-xl bg-gray-50/80 px-5 py-4 transition-[opacity,transform,background-color] duration-200 ease-out lift ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                      }`}
                      style={{ transitionDelay: isVisible ? `${baseDelay + index * 50}ms` : "0ms" }}
                    >
                      <dt className="text-base font-semibold text-gray-900 flex items-center gap-3">
                        <i className={`${feature.icon} text-brand-700 text-lg flex-shrink-0`} aria-hidden="true" />
                        <span className="leading-relaxed">{feature.title}</span>
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
                <div
                  className={`mt-10 transition-all duration-500 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${(displayEyebrow ? 150 : 100) + features.length * 50}ms` : "0ms",
                  }}
                >
                  <Button color="brand" href={cta.href} className="inline-flex w-max shadow-sm">
                    <span className="inline-flex items-center gap-2">
                      {cta.text} <i className="fas fa-arrow-right text-xs text-white" />
                    </span>
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* COLUMNA DE MEDIA */}
          <div className={`sm:px-6 lg:px-0 ${reverseLayout ? "lg:order-1" : ""}`}>
            {/* CON IMAGEN - EXACTAMENTE COMO LA PLANTILLA */}
            {mediaContent.type === "image" && mediaContent.image && (
              <div
                className={`relative isolate overflow-hidden bg-brand-700 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              >
                {/* Decoración de fondo con skew - EXACTAMENTE COMO LA PLANTILLA */}
                {mediaContent.showDecorations !== false && (
                  <div
                    aria-hidden="true"
                    className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-brand-100 opacity-20 ring-1 ring-white ring-inset"
                  />
                )}

                {/* Imagen - EXACTAMENTE COMO LA PLANTILLA */}
                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <Image
                    alt={mediaContent.image.alt}
                    src={mediaContent.image.src}
                    width={mediaContent.image.width || 2432}
                    height={mediaContent.image.height || 1442}
                    className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                  />
                </div>

                {/* Ring decorativo - EXACTAMENTE COMO LA PLANTILLA */}
                {mediaContent.showDecorations !== false && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl"
                  />
                )}
              </div>
            )}

            {/* CON HIGHLIGHT - Fallback para retrocompatibilidad */}
            {mediaContent.type === "highlight" && mediaContent.highlight && (
              <div
                className={`rounded-lg bg-gray-50 p-8 lg:sticky lg:top-24 transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              >
                <div className="bg-brand-700 mx-auto flex size-16 items-center justify-center rounded-full">
                  <i className={`${mediaContent.highlight.icon} text-3xl text-white`} />
                </div>
                <h4 className="mt-6 text-center text-lg font-semibold text-gray-900">{mediaContent.highlight.title}</h4>
                <p className="mt-4 text-center section-subtitle text-body">{mediaContent.highlight.description}</p>
              </div>
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
