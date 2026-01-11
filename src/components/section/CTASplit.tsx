"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Tipos para las props
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
    <section ref={sectionRef} className={`bg-white ${className}`}>
      <article>
        <div className="bg-gray-200 relative isolate overflow-hidden px-6 pt-16 rounded-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* Contenido */}
          <div
            className={`mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <p className="section-title text-display-md">{title}</p>
            <p className="section-subtitle text-body-lg">{subtitle}</p>

            <div className="mt-4 flex flex-col mx-auto sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Button color="brand" href="/cotizacion" type="submit" className="!flex-none px-6 inline-flex w-max">
                Cotizar ahora <i className="fas fa-arrow-right text-xs text-white" />
              </Button>
              {secondaryCta && (
                <a href={secondaryCta.href} className="group inline-flex items-center gap-2 transition-colors">
                  <span className="text-base font-medium text-brand-700 group-hover:text-brand-800 transition-colors">
                    {secondaryCta.text}
                  </span>
                  <i className="fas fa-graduation-cap text-brand-700 group-hover:text-brand-800 transition-colors h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Imagen */}
          <div
            className={`relative mt-16 h-80 lg:mt-8 transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
