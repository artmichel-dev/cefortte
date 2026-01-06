"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

// Tipos para las props
interface ClientLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface ClientLogosProps {
  title: string;
  subtitle: string;
  logos: ClientLogo[];
  className?: string;
}

export default function ClientLogos({ title, subtitle, logos, className = "" }: ClientLogosProps) {
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
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-10 lg:grid-cols-2">
          {/* Header */}
          <div
            className={`max-w-xl transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <p className="text-display-lg uppercase text-gray-950">{title}</p>
            <p className="text-body-lg mt-4 text-gray-800">{subtitle}</p>
          </div>

          {/* Logos Grid */}
          <div className="grid w-full grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:pl-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center justify-center transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: isVisible ? `${150 + index * 80}ms` : "0ms" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 140}
                  height={logo.height || 48}
                  className="max-h-10 w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
