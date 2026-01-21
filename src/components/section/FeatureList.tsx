"use client";

import { useRef, useState, useEffect } from "react";
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

interface FeatureListProps {
  title: string;
  description: string;
  features: FeatureItem[];
  cta?: CtaButton;
  className?: string;
  backgroundColor?: string;
  id?: string;
}

/**
 * FeatureList - Componente de dos columnas con lista de features
 *
 * Basado en la plantilla de Tailwind UI.
 * Muestra título y descripción a la izquierda, lista de features con cajas a la derecha.
 * Cada feature incluye icono y título con efecto hover.
 *
 * @example
 * ```tsx
 * <FeatureList
 *   title="Capacitaciones In-Company"
 *   description="Nuestras capacitaciones..."
 *   features={[...]}
 *   cta={{ text: "Solicitar", href: "/cotizacion" }}
 * />
 * ```
 */
export default function FeatureList({
  title,
  description,
  features,
  cta,
  className = "",
  backgroundColor = "bg-white",
  id,
}: FeatureListProps) {
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
    <section ref={sectionRef} className={`${backgroundColor} py-24 sm:py-32 ${className}`} id={id}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
          {/* COLUMNA IZQUIERDA - Título y descripción */}
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2
                className={`text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                {title}
              </h2>
              <p
                className={`mt-6 text-lg/8 text-gray-600 transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: isVisible ? "50ms" : "0ms" }}
              >
                {description}
              </p>

              {/* CTA */}
              {cta && (
                <div
                  className={`mt-10 transition-all duration-500 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
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

          {/* COLUMNA DERECHA - Lista de features con cajas */}
          <div className="lg:pl-8">
            <dl className="space-y-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}
