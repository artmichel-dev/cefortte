"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface CarouselCardData {
  id: number;
  category: string;
  title: string;
  description?: string;
  image: string;
  href: string;
}

const carouselData: CarouselCardData[] = [
  {
    id: 1,
    category: "Curso destacado",
    title: "Seguridad operativa",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=800&fit=crop",
    href: "/cursos/seguridad-operativa",
  },
  {
    id: 2,
    category: "Curso destacado",
    title: "Maquinaria y equipos críticos",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop",
    href: "/cursos/maquinaria-equipos",
  },
  {
    id: 3,
    category: "Curso destacado",
    title: "Sustancias Químicas y Atmósferas peligrosas",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=800&fit=crop",
    href: "/cursos/sustancias-quimicas",
  },
  {
    id: 4,
    category: "Curso destacado",
    title: "Brigadas y Protección civil",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=800&fit=crop",
    href: "/cursos/brigadas-proteccion-civil",
  },
  {
    id: 5,
    category: "Curso destacado",
    title: "Cursos basados en normas NOM-STPS",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=800&fit=crop",
    href: "/cursos/normas-stps",
  },
  {
    id: 6,
    category: "Curso destacado",
    title: "Gestión y Cultura de Seguridad",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop",
    href: "/cursos/gestion-cultura",
  },
  {
    id: 7,
    category: "Curso destacado",
    title: "Logística y Almacenes",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=800&fit=crop",
    href: "/cursos/logistica-almacenes",
  },
  {
    id: 8,
    category: "Curso destacado",
    title: "Construcción",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=800&fit=crop",
    href: "/cursos/construccion",
  },
];

const CARD_WIDTH = 300;
const GAP = 20;
const PADDING = 48;

export default function CarouselCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateMaxIndex = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalCardsWidth = carouselData.length * CARD_WIDTH + (carouselData.length - 1) * GAP;
        const visibleWidth = containerWidth - PADDING;
        const maxScroll = totalCardsWidth - visibleWidth;
        const calculatedMaxIndex = Math.ceil(maxScroll / (CARD_WIDTH + GAP));
        setMaxIndex(Math.max(0, calculatedMaxIndex));
      }
    };

    calculateMaxIndex();
    window.addEventListener("resize", calculateMaxIndex);
    return () => window.removeEventListener("resize", calculateMaxIndex);
  }, []);

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < maxIndex;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const translateX = -(currentIndex * (CARD_WIDTH + GAP));

  return (
    <section style={{ overflow: "visible" }}>
      <article className="!py-12 md:!py-16" style={{ overflow: "visible" }}>
        {/* Carousel Container */}
        <div
          ref={containerRef}
          style={{
            overflow: "hidden",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {carouselData.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                style={{
                  flexShrink: 0,
                  width: `${CARD_WIDTH}px`,
                  backgroundColor: "#f3f4f6",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {/* Text Section */}
                <div style={{ padding: "24px", flexShrink: 0 }}>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {card.category}
                  </span>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#111827",
                      marginTop: "8px",
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </p>
                </div>

                {/* Image Section */}
                <div style={{ flex: 1, minHeight: "250px" }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderBottomLeftRadius: "16px",
                      borderBottomRightRadius: "16px",
                    }}
                    draggable={false}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginTop: "32px",
          }}
        >
          <button
            type="button"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Anterior"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: canScrollLeft ? "1px solid #d1d5db" : "1px solid #e5e7eb",
              backgroundColor: canScrollLeft ? "#ffffff" : "#f9fafb",
              color: canScrollLeft ? "#6b7280" : "#d1d5db",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canScrollLeft ? "pointer" : "not-allowed",
              transition: "all 0.2s",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Siguiente"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: canScrollRight ? "1px solid #d1d5db" : "1px solid #e5e7eb",
              backgroundColor: canScrollRight ? "#ffffff" : "#f9fafb",
              color: canScrollRight ? "#6b7280" : "#d1d5db",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canScrollRight ? "pointer" : "not-allowed",
              transition: "all 0.2s",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </article>
    </section>
  );
}
