"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

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
    <section ref={sectionRef} className={`px-4 py-10 md:py-12 xl:py-16 bg-brand-700 ${className}`}>
      <div className="mx-auto max-w-4xl text-center">
        {/* Título */}
        <div
          className={`transition-all duration-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="section-title text-display-md !text-white">{title}</p>
        </div>

        {/* Subtítulo */}
        {subtitle && (
          <div
            className={`transition-all duration-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            <p className="section-subtitle text-body-lg !text-white/90">{subtitle}</p>
          </div>
        )}

        {/* Botones */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          {/* Botón primario */}
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-gray-100 transition-colors"
          >
            {primaryCta.text}
          </Link>

          {/* Botón secundario */}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-white/80 transition-colors"
            >
              {secondaryCta.text}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
