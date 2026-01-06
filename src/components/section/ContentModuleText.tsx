"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface ContentModuleTextProps {
  // Icon/Logo
  icon?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  // Text content
  text: string;
  // Images
  mobileImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  desktopImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  // Optional styling customization
  className?: string;
  textClassName?: string;
  maxWidth?: {
    mobile?: string;
    desktop?: string;
  };
}

export default function ContentModuleText({
  icon,
  text,
  mobileImage,
  desktopImage,
  className = "",
  textClassName = "",
  maxWidth = {
    mobile: "500px",
    desktop: "900px",
  },
}: ContentModuleTextProps) {
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
      <div className="hero-container mx-auto">
        {/* Text Content */}
        <div
          className={`text-center mt-8 mb-3 transition-all duration-[450ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
          }`}
        >
          {icon && (
            <Image
              src={icon.src}
              alt={icon.alt}
              width={icon.width || 120}
              height={icon.height || 120}
              className="h-16 sm:h-24 w-auto mx-auto mb-4"
            />
          )}
          <p
            className={`text-body-lg mt-4 text-gray-800 text-center max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto ${textClassName}`}
          >
            {text}
          </p>
        </div>

        {/* Images - Different images for mobile and desktop */}
        <div
          className={`relative w-full flex justify-center transition-all duration-[450ms] ease-out delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
          }`}
        >
          {/* Mobile Image */}
          <Image
            src={mobileImage.src}
            alt={mobileImage.alt}
            width={mobileImage.width}
            height={mobileImage.height}
            className="sm:hidden w-full h-auto object-contain"
            style={{ maxWidth: maxWidth.mobile }}
          />
          {/* Desktop Image */}
          <Image
            src={desktopImage.src}
            alt={desktopImage.alt}
            width={desktopImage.width}
            height={desktopImage.height}
            className="hidden sm:block w-full h-auto object-contain"
            style={{ maxWidth: maxWidth.desktop }}
          />
        </div>
      </div>
    </section>
  );
}
