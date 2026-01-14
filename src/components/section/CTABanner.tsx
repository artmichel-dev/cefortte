"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  className?: string;
}

export default function CTABanner({ title, subtitle, primaryCta, secondaryCta, className = "" }: CTABannerProps) {
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
      <article>
        <div
          className={`mx-auto max-w-7xl sm:px-6 lg:px-8 transition-all duration-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="relative isolate overflow-hidden border border-brand-400/10 bg-brand-700 px-6 py-24 text-center rounded-2xl sm:px-16">
            {/* Título */}
            <div
              className={`transition-all duration-200 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
            >
              <h2 className="section-title text-display-md !text-white">{title}</h2>
            </div>

            {/* Subtítulo */}
            {subtitle && (
              <div
                className={`mx-auto mt-4 max-w-xl transition-all duration-200 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              >
                <p className="section-subtitle text-body-lg mt-4 !text-gray-100">{subtitle}</p>
              </div>
            )}

            {/* Botones */}
            <div
              className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3 transition-all duration-200 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            >
              <Button color="white" href="/cotizacion" className="!flex-none px-6 inline-flex w-max">
                {primaryCta.text} <i className="fas fa-arrow-right ml-2 text-xs text-brand-700" />
              </Button>{" "}
              {/* Botón secundario */}
              {secondaryCta && (
                <a href={secondaryCta.href} className="group inline-flex items-center gap-2 transition-colors">
                  <span className="text-base font-medium text-gray-100 group-hover:text-white transition-colors">
                    {secondaryCta.text}
                  </span>
                  <i className="fas fa-graduation-cap text-gray-100 group-hover:text-white transition-colors h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
