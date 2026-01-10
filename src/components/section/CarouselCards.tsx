"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import "../../styles/CarouselCards.css";

// Tipos para las props
interface CarouselCards {
  title: string;
  href: string;
  image: string;
}

interface CarouselCta {
  text: string;
  href: string;
}

interface CarouselCardsProps {
  title: string;
  subtitle: string | React.ReactNode;
  cta: CarouselCta;
  cards: CarouselCards[];
  className?: string;
}

export default function CarouselCards({ title, subtitle, cta, cards, className = "" }: CarouselCardsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const getItemWidth = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return 0;

    const items = scrollContainer.querySelectorAll(".carousel-item");
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

      const items = scrollContainer.querySelectorAll(".carousel-item");
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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);

            const header = section.querySelector(".carousel-header");
            if (header) {
              header.classList.add("animate");
            }

            const items = section.querySelectorAll(".carousel-item");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate");
              }, 150 + index * 80);
            });

            const paddlenav = section.querySelector(".paddlenav");
            if (paddlenav) {
              setTimeout(() => {
                paddlenav.classList.add("animate");
              }, 400);
            }
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
    <section ref={sectionRef} className={`carousel-cards-section section-consider bg-gray-200 ${className}`}>
      <article>
        <div className="carousel-header text-left">
          <p className="text-display-lg uppercase text-gray-950">{title}</p>
          <p className="text-body-lg mt-4 text-gray-800">{subtitle}</p>
        </div>
        <div className="carousel-cards-wrapper">
          <div className="carousel carousel-align-start carousel-feature-cards">
            <div className="scroll-container" ref={scrollContainerRef}>
              <div className="item-container">
                <ul className="card-set">
                  {cards.map((card, index) => (
                    <li key={index} className="carousel-item grid-item">
                      <div className="feature-card card-container">
                        <div className="card">
                          <div className="card-modifier" style={{ backgroundImage: `url('${card.image}')` }}>
                            <div className="card-content">
                              <p className="text-title-sm uppercase text-gray-950">{card.title}</p>
                            </div>
                            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
                              <Button color="brand" href={card.href} className="inline-flex w-max shadow-sm">
                                <span className="inline-flex items-center gap-2">
                                  {cta.text}
                                  <i className="fas fa-graduation-cap text-gray-50 group-hover:text-gray-950 transition-colors h-4 w-4" />
                                </span>
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

            <nav className="paddlenav" aria-label="Carousel navigation">
              <button
                className="paddlenav-arrow paddlenav-arrow-previous bg-gray-950"
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
      </article>
    </section>
  );
}
