"use client";

import { useRef, useState, useEffect } from "react";

// Tipos para las props
interface CtaButton {
  text: string;
  href: string;
}

interface CtaSectionProps {
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

export default function CtaSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  className = "",
}: CtaSectionProps) {
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
        <div className="bg-brand-700 relative isolate overflow-hidden px-6 pt-16 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* SVG decorativo */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r="512" cx="512" cy="512" fill="url(#cta-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="cta-gradient">
                <stop stopColor="#ffffff" />
                <stop offset="1" stopColor="#7f1d1d" />
              </radialGradient>
            </defs>
          </svg>

          {/* Contenido */}
          <div
            className={`mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h3 className="text-display-sm uppercase text-balance text-gray-50">{title}</h3>
            <p className="text-body mt-6 text-pretty text-gray-200">{subtitle}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href={primaryCta.href}
                className="text-brand-700 rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors hover:bg-white"
              >
                {primaryCta.text}
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="text-sm font-semibold text-gray-100 transition-colors hover:text-white"
                >
                  {secondaryCta.text}
                  <span aria-hidden="true" className="ml-1">
                    →
                  </span>
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
