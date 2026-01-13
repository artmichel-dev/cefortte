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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("👀 Elemento visible en pantalla -> Iniciando animación");
            setIsVisible(true);
            observer.disconnect(); // Desconecta para evitar re-renderizados innecesarios
          }
        });
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del componente es visible
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={`bg-white ${className}`}>
      <article>
        {(title || subtitle) && (
          <div
            className="mx-auto text-center pb-8"
            // Animación manual para el título
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            <p className="section-title text-display-md">{title}</p>
            <p className="section-subtitle text-body-lg">{subtitle}</p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              // Mantenemos solo las clases estáticas de diseño aquí.
              // Quitamos transition, opacity y translate del className.
              className="group relative rounded-2xl lift border border-gray-400/10 bg-gray-100/40 hover:bg-gray-100/60 overflow-hidden w-full"
              // DEFINICIÓN DE ANIMACIÓN MANUAL E INFALIBLE
              style={{
                // 1. Opacidad: 0 a 1
                opacity: isVisible ? 1 : 0,
                // 2. Movimiento: de 50px abajo a 0 (posición original)
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                // 3. Definición de la transición CSS pura
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                // 4. El delay escalonado
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="relative pb-[56.25%] overflow-hidden">
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mt-2">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-brand-700">
                    <i className={`${feature.icon} text-xl text-white`}></i>
                  </span>
                  <span className="ml-3 text-lg text-gray-900 font-bold">{feature.title}</span>
                </div>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">{feature.description}</p>
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
          ))}
        </div>
      </article>
    </section>
  );
}
