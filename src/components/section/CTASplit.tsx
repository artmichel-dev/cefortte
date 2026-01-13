"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CtaButton {
  text: string;
  href: string;
}

interface CTASplitProps {
  title: string;
  subtitle: string;
  primaryCta: CtaButton;
  secondaryCta?: CtaButton;
  image: {
    src: string;
    alt: string;
  };
  className?: string;
}

export default function CTASplit({ title, subtitle, primaryCta, secondaryCta, image, className = "" }: CTASplitProps) {
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
    <section ref={sectionRef} className={`bg-white ${className}`}>
      <article className="px-6 sm:px-16 lg:px-24">
        {/* Contenedor principal con flex-col para móvil y flex-row para desktop */}
        <div className="bg-gray-100 overflow-hidden rounded-2xl sm:rounded-3xl flex flex-col lg:flex-row items-stretch">
          {/* Lado del Contenido: padding aplicado solo aquí */}
          <div
            className={`flex-1 px-6 py-16 sm:px-16 lg:py-24 text-center lg:text-left transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <p className="section-title text-display-md">{title}</p>
            <p className="section-subtitle text-body-lg mt-4">{subtitle}</p>

            <div className="relative pt-8 flex flex-col mx-auto sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Button color="brand" href="/cotizacion" className="!flex-none px-6 inline-flex w-max">
                {primaryCta.text} <i className="fas fa-arrow-right ml-2 text-xs text-white" />
              </Button>
              {secondaryCta && (
                <a href={secondaryCta.href} className="group inline-flex items-center gap-2 transition-colors">
                  <span className="text-base font-medium text-gray-700 group-hover:text-gray-800 transition-colors">
                    {secondaryCta.text}
                  </span>
                  <i className="fas fa-graduation-cap text-gray-700 group-hover:text-gray-800 transition-colors h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Lado de la Imagen: Sin padding para que ocupe todo el espacio */}
          <div
            className={`flex-1 relative min-h-[300px] lg:min-h-full transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>
      </article>
    </section>
  );
}
