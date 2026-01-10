"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Tipos para las props
interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

interface TestimonialCta {
  text: string;
  href: string;
}

interface QuotesProps {
  title: string;
  subtitle: string;
  testimonials: TestimonialItem[];
  cta?: TestimonialCta;
  className?: string;
}

export default function Quotes({ title, subtitle, testimonials, cta, className = "" }: QuotesProps) {
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
        {/* Header - Alineado a la izquierda */}
        <div
          className={`pb-8 transition-all duration-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-display-lg uppercase text-gray-950">{title}</p>
          <p className="text-body-lg mt-4 text-gray-800">{subtitle}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className={`group relative rounded-2xl border border-gray-400/10 bg-gray-200 p-8 transition-all duration-200 ease-out hover:bg-gray-300/80 flex flex-col justify-between min-h-[280px] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms" }}
            >
              {/* Icono decorativo */}
              <div className="mb-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors">
                  <i className="fa-solid fa-quote-left text-xl text-gray-800" />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="flex-grow">
                <p className="text-body-lg text-gray-800 italic font-bold leading-relaxed">{testimonial.quote}</p>
              </blockquote>

              {/* Author info */}
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-brand-700">
                  <span className="text-gray-50 text-sm font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <b className="block text-gray-800">{testimonial.name}</b>
                  <small className="text-gray-800">{testimonial.role}</small>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div
            className={`mt-8 text-center transition-all duration-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            <Button color="brand" href={cta.href} className="inline-flex w-max shadow-sm">
              <span className="inline-flex items-center gap-2">
                {cta.text}
                <i className="fas fa-arrow-right text-xs text-gray-50" />
              </span>
            </Button>
          </div>
        )}
      </article>
    </section>
  );
}
