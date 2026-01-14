"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface FeatureItem {
  icon: string;
  text: string;
}

interface CtaButton {
  text: string;
  href: string;
}

interface SideHighlight {
  icon: string;
  title: string;
  description: string;
}

interface TwoColumnFeatureProps {
  title: string;
  subtitle: string;
  description: string;
  features: FeatureItem[];
  cta: CtaButton;
  sideHighlight: SideHighlight;
  reverseLayout?: boolean;
  className?: string;
  backgroundColor?: string;
  id?: string;
}

/**
 * TwoColumnFeature - Componente de dos columnas para features empresariales
 *
 * Muestra información detallada con:
 * - Columna principal: título, descripción, lista de features y CTA
 * - Columna secundaria: destacado visual con icono
 * - Layout reversible para alternar el orden visual
 */
export default function TwoColumnFeature({
  title,
  subtitle,
  description,
  features,
  cta,
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

  const ContentColumn = () => (
    <div className={reverseLayout ? "lg:pl-8" : "lg:pr-8"}>
      {/* Título */}
      <h2
        className={`section-title text-display-md transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {title}
      </h2>

      {/* Subtítulo destacado */}
      <p
        className={`mt-6 text-base font-semibold text-gray-700 transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
      >
        {subtitle}
      </p>

      {/* Descripción */}
      <p
        className={`mt-4 section-subtitle text-body transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
      >
        {description}
      </p>

      {/* Lista de features */}
      <dl className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-lg bg-gray-50 p-6 transition-all duration-500 ease-out hover:bg-white hover:shadow-sm ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: isVisible ? `${200 + index * 50}ms` : "0ms" }}
          >
            <dt className="font-semibold text-gray-800 flex items-start gap-3">
              <i className={`${feature.icon} text-brand-700 mt-1 flex-shrink-0`} />
              <span>{feature.text}</span>
            </dt>
          </div>
        ))}
      </dl>

      {/* CTA */}
      <div
        className={`mt-8 transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        style={{ transitionDelay: isVisible ? `${200 + features.length * 50}ms` : "0ms" }}
      >
        <Button color="brand" href={cta.href} className="!flex-none px-6 inline-flex w-max">
          {cta.text}
          <i className="fas fa-arrow-right ml-2 text-xs text-white" />
        </Button>
      </div>
    </div>
  );

  const HighlightColumn = () => (
    <div
      className={`rounded-lg bg-gray-50 p-8 lg:sticky lg:top-24 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
    >
      <div className="bg-brand-700 mx-auto flex size-16 items-center justify-center rounded-full">
        <i className={`${sideHighlight.icon} text-3xl text-white`} />
      </div>
      <h4 className="mt-6 text-center text-lg font-semibold text-gray-900">{sideHighlight.title}</h4>
      <p className="mt-4 text-center section-subtitle text-body">{sideHighlight.description}</p>
    </div>
  );

  return (
    <section ref={sectionRef} className={`${backgroundColor} ${className}`} id={id}>
      <article className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div
          className={`mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start ${
            reverseLayout ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Columna principal */}
          <div className={reverseLayout ? "lg:col-start-2" : ""}>{ContentColumn()}</div>

          {/* Columna de highlight */}
          <div className={reverseLayout ? "lg:col-start-1" : ""}>{HighlightColumn()}</div>
        </div>
      </article>
    </section>
  );
}
