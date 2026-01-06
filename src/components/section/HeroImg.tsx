"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// Tipos para las props
interface HeroCtaButton {
  text: string;
  href: string;
}

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroImgProps {
  description: string;
  image: HeroImage;
}

export default function HeroImg({ description, image }: HeroImgProps) {
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
    <section ref={sectionRef} className="z-10">
      {/* Contenedor principal como Grid para superponer elementos */}
      <div className="hero-container relative grid isolate mx-auto grid-rows-1 justify-items-center items-start h-[24rem] md:h-[28rem] bg-gray-50">
        {/* Capa de Imagen de Fondo */}
        <div
          className={`col-start-1 row-start-1 w-full h-full pointer-events-none transition-all duration-[450ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`}
        >
          <div className="relative h-full w-full rounded-xl overflow-hidden">
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Capa de Contenido: Centrada sobre la imagen */}
        <div className="col-start-1 row-start-1 z-10 mx-auto justify-start items-start text-center py-12">
          {/* NUEVA IMAGEN AGREGADA */}
          <img
            src="/svg/icon-sm-cefortte-red.svg"
            alt="Logo o Icono"
            className={`h-24 mx-auto mb-4 transition-all duration-[450ms] ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
          />

          <p
            className={`text-body-lg text-gray-950 max-w-md mx-auto mt-3 transition-all duration-[450ms] ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
