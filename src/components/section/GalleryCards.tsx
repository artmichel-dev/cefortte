"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import "../../styles/gallery-cards.css";

const GALLERY_CONTENT = {
  title: "Cursos especializados",
  subtitle: "Formación práctica y normativa para equipos técnicos, operativos y de supervisión.",
  cta: {
    text: "Descubre más",
    href: "/cursos",
  },
  cards: [
    {
      title: "Seguridad operativa",
      href: "/cursos/seguridad-operativa",
      image: "card.jpg",
    },
    {
      title: "Maquinaria y equipos críticos",
      href: "/cursos/maquinaria-equipos",
      image: "card.jpg",
    },
    {
      title: "Sustancias Químicas y Atmósferas peligrosas",
      href: "/cursos/sustancias-quimicas",
      image: "card.jpg",
    },
    {
      title: "Brigadas y Protección civil",
      href: "/cursos/brigadas-proteccion-civil",
      image: "card.jpg",
    },
    {
      title: "Cursos basados en normas NOM-STPS",
      href: "/cursos/normas-stps",
      image: "card.jpg",
    },
    {
      title: "Gestión y Cultura de Seguridad",
      href: "/cursos/gestion-cultura",
      image: "card.jpg",
    },
    {
      title: "Logística y Almacenes",
      href: "/cursos/logistica-almacenes",
      image: "card.jpg",
    },
    {
      title: "Construcción",
      href: "/cursos/construccion",
      image: "card.jpg",
    },
  ],
} as const;

export default function GalleryCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const getItemWidth = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return 0;

    const items = scrollContainer.querySelectorAll(".gallery-item");
    if (items.length === 0) return 0;

    const item = items[0] as HTMLElement;
    const itemContainer = scrollContainer.querySelector(".item-container");
    if (!itemContainer) return item.offsetWidth;

    const style = window.getComputedStyle(itemContainer);
    const gap = parseFloat(style.columnGap) || 20;
    return item.offsetWidth + gap;
  }, []);

  const updateButtons = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollLeft = scrollContainer.scrollLeft;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    setPrevDisabled(scrollLeft <= 5);
    setNextDisabled(scrollLeft >= maxScroll - 5);
  }, []);

  const getCurrentIndex = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return 0;

    const itemWidth = getItemWidth();
    if (itemWidth === 0) return 0;
    return Math.round(scrollContainer.scrollLeft / itemWidth);
  }, [getItemWidth]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const items = scrollContainer.querySelectorAll(".gallery-item");
      let targetIndex = index;
      if (targetIndex < 0) targetIndex = 0;
      if (targetIndex >= items.length) targetIndex = items.length - 1;

      const itemWidth = getItemWidth();

      scrollContainer.scrollTo({
        left: targetIndex * itemWidth,
        behavior: "smooth",
      });
    },
    [getItemWidth]
  );

  const handlePrevClick = useCallback(() => {
    const currentIndex = getCurrentIndex();
    scrollToIndex(currentIndex - 1);
  }, [getCurrentIndex, scrollToIndex]);

  const handleNextClick = useCallback(() => {
    const currentIndex = getCurrentIndex();
    scrollToIndex(currentIndex + 1);
  }, [getCurrentIndex, scrollToIndex]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    scrollContainer.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    updateButtons();

    return () => {
      scrollContainer.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  // Intersection Observer para animaciones
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);

            // Animar header
            const header = section.querySelector(".gallery-header");
            if (header) {
              header.classList.add("animate");
            }

            // Animar cards con delay escalonado
            const items = section.querySelectorAll(".gallery-item");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate");
              }, 150 + index * 80); // 0.08s delay entre cada card (más rápido)
            });

            // Animar botones de navegación (aparecen más pronto)
            const paddlenav = section.querySelector(".paddlenav");
            if (paddlenav) {
              setTimeout(() => {
                paddlenav.classList.add("animate");
              }, 400); // Aparecen después de 400ms (antes de que terminen todas las cards)
            }
          }
        });
      },
      {
        threshold: 0.1, // Se activa cuando el 10% de la sección es visible
        rootMargin: "0px 0px -50px 0px", // Se activa un poco antes
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="gallery-cards-section section-consider bg-gray-200">
      <div className="py-24 md:py-32 lg:py-40">
        <div className="gallery-header container mx-auto pb-12 text-center">
          <h1>{GALLERY_CONTENT.title}</h1>
          <p>{GALLERY_CONTENT.subtitle}</p>
        </div>
        <div className="gallery-cards-wrapper">
          <div className="gallery gallery-align-start gallery-feature-cards">
            <div className="scroll-container" ref={scrollContainerRef}>
              <div className="item-container">
                <ul className="card-set">
                  {GALLERY_CONTENT.cards.map((card, index) => (
                    <li key={index} className="gallery-item grid-item">
                      <div className="feature-card card-container">
                        <div className="card">
                          <div className="card-modifier" style={{ backgroundImage: `url('${card.image}')` }}>
                            <div className="card-content">
                              <h2 className="card-title">{card.title}</h2>
                            </div>
                            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
                              <Button
                                color="brand"
                                href={GALLERY_CONTENT.cta.href}
                                className="inline-flex w-max shadow-sm"
                              >
                                {GALLERY_CONTENT.cta.text}
                                <i className="fas fa-graduation-cap text-gray-50 group-hover:text-white transition-colors h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Paddlenav Buttons */}
            <nav className="paddlenav" aria-label="Gallery navigation">
              <button
                className="paddlenav-arrow paddlenav-arrow-previous"
                aria-label="Previous"
                disabled={prevDisabled}
                onClick={handlePrevClick}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <button
                className="paddlenav-arrow paddlenav-arrow-next"
                aria-label="Next"
                disabled={nextDisabled}
                onClick={handleNextClick}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
