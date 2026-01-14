"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface FeatureItem {
  image: {
    src: string;
    alt: string;
  };
  icon: string;
  title: string;
  description: string;
  cta?: {
    text: string;
    href: string;
  };
}

interface FeactureThreeColumnsProps {
  title?: string;
  subtitle?: string;
  features: FeatureItem[];
  className?: string;
}

export default function FeactureThreeColumns({ title, subtitle, features, className = "" }: FeactureThreeColumnsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Estado para controlar cuándo se activa el hover
  const [canHover, setCanHover] = useState(false);

  // CONFIGURACIÓN DE TIEMPOS
  const ANIMATION_DURATION = 800; // Duración de la entrada (ms)
  const STAGGER_DELAY = 200; // Retraso entre cada tarjeta (ms)

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Calculamos cuándo terminará la última animación para activar los hovers
    const totalAnimationTime = ANIMATION_DURATION + features.length * STAGGER_DELAY + 100;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            // Activamos el hover solo después de que terminen las animaciones
            const timer = setTimeout(() => {
              setCanHover(true);
            }, totalAnimationTime);

            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [features.length]); // Dependencia agregada para consistencia

  return (
    <section ref={sectionRef} className={`bg-white ${className}`}>
      <article>
        {(title || subtitle) && (
          <div
            className="mx-auto text-center pb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity ${ANIMATION_DURATION}ms ease-out, transform ${ANIMATION_DURATION}ms ease-out`,
            }}
          >
            <p className="section-title text-display-md">{title}</p>
            <p className="section-subtitle text-body-lg">{subtitle}</p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 px-4 mx-auto">
          {features.map((feature, index) => {
            // Lógica de clases:
            // 1. Clases base (siempre fijas)
            const baseClasses =
              "group relative rounded-2xl border border-gray-400/10 bg-gray-100/40 overflow-hidden w-full";

            // 2. Clases de hover (solo se agregan si canHover es true)
            // Nota: 'lift' suele ser una clase personalizada tuya, asumo que maneja el translateY
            const hoverClasses = canHover ? "lift hover:bg-gray-100/60 transition-all duration-300" : "";

            return (
              <div
                key={index}
                className={`${baseClasses} ${hoverClasses}`}
                style={{
                  // Animación de entrada manual (Inline Styles para forzar prioridad)
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(60px)",
                  transition: `opacity ${ANIMATION_DURATION}ms ease-out, transform ${ANIMATION_DURATION}ms ease-out`,
                  transitionDelay: `${index * STAGGER_DELAY}ms`,
                }}
              >
                <div className="relative pb-[56.25%] overflow-hidden">
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    // Eliminamos animaciones en la imagen para evitar conflictos
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mt-2">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-brand-700">
                      <i className={`${feature.icon} text-xl text-white`}></i>
                    </span>
                    <span className="ml-3 text-lg text-gray-950 font-bold">{feature.title}</span>
                  </div>
                  <p
                    className="mt-4 text-gray-800 text-body leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                  {feature.cta && (
                    <a
                      className="inline-block mt-4 rounded-full bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
                      href={feature.cta.href}
                    >
                      {feature.cta.text}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
}
