"use client";

import { useRef, useState, useEffect } from "react";

// Tipos para las props
interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface StepsTimelineProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  className?: string;
}

export default function StepsTimeline({ title, subtitle, steps, className = "" }: StepsTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Refs para calcular posición de línea en mobile
  const firstCircleRef = useRef<HTMLDivElement>(null);
  const lastCircleRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Verificar si ya está visible al cargar la página
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
  }, []);

  // Calcular posición de la línea en mobile
  useEffect(() => {
    const calculateLinePosition = () => {
      if (firstCircleRef.current && lastCircleRef.current && mobileContainerRef.current) {
        const containerRect = mobileContainerRef.current.getBoundingClientRect();
        const firstRect = firstCircleRef.current.getBoundingClientRect();
        const lastRect = lastCircleRef.current.getBoundingClientRect();

        const top = firstRect.top - containerRect.top + firstRect.height / 2;
        const bottom = lastRect.top - containerRect.top + lastRect.height / 2;

        setLineStyle({
          top: top,
          height: bottom - top,
        });
      }
    };

    // Calcular después de que el DOM se renderice
    const timer = setTimeout(calculateLinePosition, 100);

    calculateLinePosition();
    window.addEventListener("resize", calculateLinePosition);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateLinePosition);
    };
  }, [steps.length]);

  return (
    <section ref={sectionRef} className={`bg-gray-100 ${className}`}>
      <article>
        {/* Header */}
        <div
          className={`container mx-auto text-left transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-display-md font-heading uppercase text-gray-950">{title}</p>
          <p className="text-body mt-4 text-gray-800">{subtitle}</p>

          {/* Timeline con números arriba y cards abajo */}
          <div className="relative mt-12">
            {/* Fila de números con línea conectora - Desktop */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-4 mb-8 relative">
              {/* Línea conectora horizontal con puntos animados - Desktop */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-1 -translate-y-1/2 overflow-hidden">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `radial-gradient(circle,rgb(209, 213, 219) 3px, transparent 3px)`,
                    backgroundSize: "16px 100%",
                    backgroundPosition: "center",
                    animation: "flowDotsRight 80s linear infinite",
                  }}
                />
              </div>

              {steps.map((_, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full bg-brand-700 text-white font-bold text-sm grid place-items-center transition-all duration-500 ease-out ${
                      isVisible ? "scale-100" : "scale-0"
                    }`}
                    style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" }}
                  >
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline vertical - Mobile/Tablet */}
            <div className="lg:hidden relative" ref={mobileContainerRef}>
              {/* Línea vertical con puntos animados - Mobile */}
              {lineStyle.height > 0 && (
                <div
                  className="absolute left-5 w-1 -translate-x-1/2 overflow-hidden"
                  style={{
                    top: `${lineStyle.top}px`,
                    height: `${lineStyle.height}px`,
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgb(209, 213, 219) 3px, transparent 3px)`,
                      backgroundSize: "100% 16px",
                      backgroundPosition: "center top",
                      animation: "flowDotsDown 80s linear infinite",
                    }}
                  />
                </div>
              )}

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex gap-4 transition-all duration-500 ease-out ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms" }}
                  >
                    {/* Contenedor del círculo */}
                    <div className="flex items-start">
                      <div
                        ref={index === 0 ? firstCircleRef : index === steps.length - 1 ? lastCircleRef : null}
                        className={`relative z-10 w-10 h-10 rounded-full bg-brand-700 text-white font-bold text-sm shrink-0 grid place-items-center transition-all duration-500 ease-out ${
                          isVisible ? "scale-100" : "scale-0"
                        }`}
                        style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    {/* Card */}
                    <div className="group rounded-2xl border border-gray-600/10 w-full bg-white p-4 lift transition-colors h-full flex flex-col">
                      <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-brand-700">
                        <i className={`${step.icon} text-xl text-brand-50`} />
                      </div>
                      <p className="text-title-sm text-gray-950 text-balance font-bold">{step.title}</p>
                      <p className="text-body pt-3 text-gray-800 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid de Cards - Desktop */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-3 xl:gap-5 lg:auto-rows-fr">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`group rounded-2xl border border-gray-600/10 bg-white p-4 xl:p-6 lift transition-colors h-full flex flex-col ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{
                    transitionProperty: "opacity, transform, background-color",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "ease-out",
                    transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms",
                  }}
                >
                  <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-brand-700">
                    <i className={`${step.icon} text-xl text-brand-50`} />
                  </div>
                  <p className="text-title-sm text-gray-950 text-balance font-bold">{step.title}</p>
                  <p className="text-body pt-3 text-gray-800 text-balance flex-grow leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
