"use client";

import { useRef, useState, useEffect } from "react";

// Tipos para las props
interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  className?: string;
}

export default function ProcessTimeline({ title, subtitle, steps, className = "" }: ProcessTimelineProps) {
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
    <section ref={sectionRef} className={`bg-gray-200 ${className}`}>
      <article>
        {/* Header */}
        <div
          className={`container mx-auto text-left transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h3 className="text-display-lg uppercase text-gray-950">{title}</h3>
          <p className="text-body-lg mt-4 text-gray-800">{subtitle}</p>

          {/* Timeline con números arriba y cards abajo */}
          <div className="relative mt-12">
            {/* Fila de números con línea conectora - Desktop */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-4 mb-8 relative">
              {/* Línea conectora horizontal */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-brand-700 -translate-y-1/2" />

              {steps.map((_, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div
                    className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-brand-700 text-white font-bold text-sm transition-all duration-500 ease-out ${
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
            <div className="lg:hidden relative">
              {/* Línea vertical continua */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-brand-700 -translate-x-1/2" />

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex gap-4 transition-all duration-500 ease-out ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms" }}
                  >
                    {/* Contenedor del círculo - centrado verticalmente */}
                    <div className="flex items-center">
                      <div
                        className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-brand-700 text-white font-bold text-sm shrink-0 transition-all duration-500 ease-out ${
                          isVisible ? "scale-100" : "scale-0"
                        }`}
                        style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" }}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="group flex-1 rounded-2xl bg-gray-100 p-4 hover:bg-white transition-colors">
                      <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-brand-700">
                        <i className={`${step.icon} text-xl text-brand-50`} />
                      </div>
                      <p className="text-h5 text-gray-950 uppercase">{step.title}</p>
                      <p className="text-body pt-2 text-gray-800">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid de Cards - Desktop */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-2 xl:gap-4 lg:auto-rows-fr">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`group rounded-2xl border border-gray-600/10 bg-gray-100 p-3 xl:p-6 hover:bg-white transition-colors h-full flex flex-col ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{
                    transitionProperty: "opacity, transform, background-color",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "ease-out",
                    transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms",
                  }}
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-brand-700">
                    <i className={`${step.icon} text-xl text-brand-50`} />
                  </div>
                  <p className="text-h4 text-gray-950 uppercase text-balance">{step.title}</p>
                  <p className="text-body pt-4 text-gray-800 text-balance flex-grow">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
