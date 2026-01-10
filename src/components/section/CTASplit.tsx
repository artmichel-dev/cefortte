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
    <section ref={sectionRef} className={`bg-gray-50 ${className}`}>
      <article>
        <div className="bg-brand-700 relative isolate overflow-hidden border border-brand-700/50 px-6 pt-16 rounded-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* Contenido */}
          <div
            className={`mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <p className="text-display-lg uppercase text-brand-50">{title}</p>
            <p className="text-body-lg mt-4 text-brand-100">{subtitle}</p>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 lg:justify-start">
              <Button color="white" href={primaryCta.href} className="inline-flex w-max text-brand-50">
                <span className="inline-flex items-center gap-2">
                  {primaryCta.text} <i className="fas fa-arrow-right text-xs text-brand-800" />
                </span>
              </Button>
              {secondaryCta && (
                <a href={secondaryCta.href} className="group inline-flex items-center gap-2 transition-colors">
                  <span className="text-base font-medium text-gray-50 group-hover:text-white transition-colors">
                    {secondaryCta.text}
                  </span>
                  <i className="fas fa-graduation-cap text-gray-50 group-hover:text-white transition-colors h-4 w-4" />
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
