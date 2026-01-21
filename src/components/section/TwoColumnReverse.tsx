"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FeatureItem {
  icon: string;
  title: string;
  description?: string;
}

interface CtaButton {
  text: string;
  href: string;
}

interface TwoColumnReverseProps {
  eyebrow: string;
  title: string;
  description: string;
  features: FeatureItem[];
  cta?: CtaButton;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  className?: string;
  backgroundColor?: string;
  id?: string;
}

/**
 * TwoColumnReverse - Componente de dos columnas con imagen a la izquierda
 *
 * Basado en la plantilla de Tailwind UI.
 * Muestra una imagen a la izquierda y contenido (eyebrow, título, descripción, features con cajas) a la derecha.
 * La imagen tiene sombra y ring, sin decoraciones adicionales.
 *
 * @example
 * ```tsx
 * <TwoColumnReverse
 *   eyebrow="Deploy faster"
 *   title="A better workflow"
 *   description="Lorem ipsum dolor sit amet..."
 *   features={[...]}
 *   cta={{ text: "Solicitar", href: "/cotizacion" }}
 *   image={{
 *     src: "/screenshot.png",
 *     alt: "Product screenshot"
 *   }}
 * />
 * ```
 */
export default function TwoColumnReverse({
  eyebrow,
  title,
  description,
  features,
  cta,
  image,
  className = "",
  backgroundColor = "bg-white",
  id,
}: TwoColumnReverseProps) {
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

  return (
    <section ref={sectionRef} className={`overflow-hidden ${backgroundColor} py-24 sm:py-32 ${className}`} id={id}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Columna de contenido - a la derecha en desktop */}
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              {/* Eyebrow */}
              <h2
                className={`text-base/7 font-semibold text-brand-700 transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                {eyebrow}
              </h2>

              {/* Título */}
              <p
                className={`mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: isVisible ? "50ms" : "0ms" }}
              >
                {title}
              </p>

              {/* Descripción */}
              <p
                className={`mt-6 text-lg/8 text-gray-600 transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
              >
                {description}
              </p>

              {/* Lista de features con cajas y hover */}
              <dl className="mt-10 space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`rounded-xl bg-gray-50/80 px-5 py-4 transition-[opacity,transform,background-color] duration-200 ease-out lift ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: isVisible ? `${150 + index * 50}ms` : "0ms" }}
                  >
                    <dt className="text-base font-semibold text-gray-900 flex items-center gap-3">
                      <i className={`${feature.icon} text-brand-700 text-lg flex-shrink-0`} aria-hidden="true" />
                      <span className="leading-relaxed">{feature.title}</span>
                    </dt>
                    {feature.description && feature.description.trim() !== "" && (
                      <dd className="mt-2 ml-8 text-sm text-gray-600 leading-relaxed">{feature.description}</dd>
                    )}
                  </div>
                ))}
              </dl>

              {/* CTA */}
              {cta && (
                <div
                  className={`mt-10 transition-all duration-500 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: isVisible ? `${150 + features.length * 50}ms` : "0ms" }}
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

          {/* Columna de imagen - a la izquierda en desktop */}
          <div
            className={`flex items-start justify-end lg:order-first transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <Image
              width={image.width || 2432}
              height={image.height || 1442}
              src={image.src}
              alt={image.alt}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
