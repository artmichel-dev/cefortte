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
  title: string;
  description: string;
  primaryCta: HeroCtaButton;
  secondaryCta?: HeroCtaButton;
  image: HeroImage;
}

export default function HeroImg({ title, description, primaryCta, secondaryCta, image }: HeroImgProps) {
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
      <article className="!overflow-visible">
        {/* Contenedor de imagen de fondo */}
        <div
          className={`absolute px-3 w-full h-full max-w-full pointer-events-none top-0 left-0 z-0 transition-all duration-[450ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="relative h-full w-full rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* Contenido del hero */}
        <div className="mx-auto max-w-sm md:max-w-md lg:max-w-4xl text-center z-10">
          <p
            className={`text-display-lg uppercase text-white drop-shadow-sm transition-all duration-[450ms] ease-out delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
            }`}
          >
            {title}
          </p>
          <p
            className={`text-body-lg text-white drop-shadow-sm mt-4 transition-all duration-[450ms] ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
            }`}
          >
            {description}
          </p>
          <div
            className={`mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 transition-all duration-[450ms] ease-out delay-[450ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
            }`}
          >
            <Button color="brand" href={primaryCta.href} className="inline-flex items-center gap-2 w-max shadow-sm">
              <span className="inline-flex items-center gap-2">
                {primaryCta.text} <i className="fas fa-arrow-right text-xs text-gray-50" />
              </span>
            </Button>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 transition-colors drop-shadow-sm text-base font-medium text-gray-50 hover:text-white"
              >
                {secondaryCta.text}
                <i className="fas fa-graduation-cap h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
