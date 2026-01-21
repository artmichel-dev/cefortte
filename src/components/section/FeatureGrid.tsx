"use client";

import { useRef, useState, useEffect } from "react";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}

interface FeatureGridProps {
  title: string;
  description: string;
  features: FeatureItem[];
  className?: string;
  backgroundColor?: string;
  id?: string;
}

/**
 * FeatureGrid - Componente de grid de features con iconos
 *
 * Basado en la plantilla de Tailwind UI.
 * Muestra un título, descripción y un grid de 3 columnas con features.
 * Cada feature incluye icono, título, descripción y link opcional.
 *
 * @example
 * ```tsx
 * <FeatureGrid
 *   title="Stay on top of customer support"
 *   description="Lorem ipsum dolor sit amet..."
 *   features={[
 *     {
 *       icon: "fas fa-inbox",
 *       title: "Unlimited inboxes",
 *       description: "Non quo aperiam...",
 *       link: { text: "Learn more", href: "#" }
 *     }
 *   ]}
 * />
 * ```
 */
export default function FeatureGrid({
  title,
  description,
  features,
  className = "",
  backgroundColor = "bg-white",
  id,
}: FeatureGridProps) {
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
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:mx-0">
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
        </div>

        {/* Grid de Features */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: isVisible ? `${100 + index * 50}ms` : "0ms" }}
              >
                <dt className="text-base/7 font-semibold text-gray-900">
                  {/* Icono */}
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-brand-700">
                    <i className={`${feature.icon} size-6 text-white`} aria-hidden="true" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  {feature.link && (
                    <p className="mt-6">
                      <a
                        href={feature.link.href}
                        className="text-sm/6 font-semibold text-brand-700 hover:text-brand-600 transition-colors"
                      >
                        {feature.link.text} <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
