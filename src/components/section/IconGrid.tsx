"use client";

import { useRef, useState, useEffect } from "react";

interface IconGridItem {
  icon: string;
  title: string;
}

interface IconGridProps {
  title?: string;
  subtitle?: string;
  items: IconGridItem[];
  className?: string;
}

export default function IconGrid({ title, subtitle, items, className = "" }: IconGridProps) {
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
    <section ref={sectionRef} className={`px-4 py-10 md:py-12 xl:py-16 bg-white ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <div
          className={`mx-auto text-center pb-6 md:pb-8 xl:pb-12 max-w-3xl transition-all duration-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {title && <p className="section-title text-display-md">{title}</p>}
          {subtitle && <p className="section-subtitle text-body-lg">{subtitle}</p>}
        </div>
      )}

      {/* Grid de cards */}
      <article>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-8 md:px-12 xl:px-0 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <li
              key={index}
              className={`flex flex-col items-center justify-center p-6 bg-stone-50 rounded-lg border border-stone-200 transition-all duration-200 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + index * 50}ms` : "0ms" }}
            >
              {/* Icono */}
              <i className={`${item.icon} text-4xl text-brand-700 mb-4`}></i>

              {/* Título */}
              <span className="text-sm font-medium text-gray-900 text-center">{item.title}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
