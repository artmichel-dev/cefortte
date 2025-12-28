"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "@/components/ui/link";
import "../../styles/gallery-cards.css";

const cards = [
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
];

export default function GalleryCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

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

  return (
    <section className="gallery-cards-section section-consider bg-gray-200">
      <div className="py-24 md:py-32 lg:py-40">
        <div className="container mx-auto pb-12 text-center">
          <h1>Title</h1>
          <p>Textos</p>
        </div>
        <div className="gallery-cards-wrapper">
          <div className="gallery gallery-align-start gallery-feature-cards">
            <div className="scroll-container" ref={scrollContainerRef}>
              <div className="item-container">
                <ul className="card-set">
                  {cards.map((card, index) => (
                    <li key={index} className="gallery-item grid-item">
                      <div className="feature-card card-container">
                        <div className="card">
                          <div className="card-modifier" style={{ backgroundImage: `url('${card.image}')` }}>
                            <div className="card-content">
                              <h2 className="card-title">{card.title}</h2>
                            </div>
                            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
                              <Link
                                href={card.href}
                                className="group rounded-md bg-brand-700 hover:bg-brand-600 active:bg-brand-700 inline-block inline-flex w-max items-center justify-center my-2 px-4 py-2 font-bold tracking-wide text-gray-50 transition-colors group-hover:text-gray-50 group-active:text-gray-50"
                              >
                                <span className="font-medium text-gray-50 group-hover:text-gray-50 group-active:text-gray-50">
                                  Ver más
                                </span>
                                <i className="fas fa-arrow-right ml-1 h-4 w-4 text-gray-50 group-hover:text-gray-50 group-active:text-gray-50"></i>
                              </Link>
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
