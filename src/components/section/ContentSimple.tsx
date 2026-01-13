"use client";

import { useRef, useState, useEffect } from "react";

interface ContentSimpleProps {
  title: string;
  content: string | React.ReactNode;
  className?: string;
}

export default function ContentSimple({ title, content, className = "" }: ContentSimpleProps) {
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
    <section ref={sectionRef} className={`w-full bg-stone-100 ${className}`}>
      <article>
        <div className="px-4 sm:px-8 md:px-16 lg:px-24">
          <div
            className={`transition-all duration-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <p className="section-title text-display-md !text-left">{title}</p>
          </div>
          <div
            className={`transition-all duration-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            {typeof content === "string" ? (
              <p className="section-subtitle text-body !text-left" dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              content
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
