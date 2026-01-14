"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from "react";

interface StarGridContextType {
  activeItems: Set<number>;
  featuredItem: number | null;
}

const StarGridContext = createContext<StarGridContextType>({
  activeItems: new Set(),
  featuredItem: null,
});

interface StarGridProps {
  children: React.ReactNode;
  active?: number;
  duration?: number;
  featureDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function StarGrid({ children, active = 20, duration = 100, featureDuration = 1500, className = "", style }: StarGridProps) {
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set());
  const [featuredItem, setFeaturedItem] = useState<number | null>(null);
  const childrenArray = React.Children.toArray(children);
  const totalItems = childrenArray.length;

  useEffect(() => {
    // Inicializar items activos
    const initialActive = new Set<number>();
    while (initialActive.size < Math.min(active, totalItems)) {
      initialActive.add(Math.floor(Math.random() * totalItems));
    }
    setActiveItems(initialActive);

    // Rotar items activos
    const interval = setInterval(() => {
      setActiveItems((prev) => {
        const newActive = new Set(prev);
        const itemsToChange = Math.ceil(totalItems * 0.1); // Cambiar 10% de items

        for (let i = 0; i < itemsToChange; i++) {
          const randomItem = Math.floor(Math.random() * totalItems);
          if (newActive.has(randomItem)) {
            newActive.delete(randomItem);
          } else {
            newActive.add(randomItem);
          }
        }

        return newActive;
      });
    }, duration);

    // Feature item destacado
    const featureInterval = setInterval(() => {
      const randomItem = Math.floor(Math.random() * totalItems);
      setFeaturedItem(randomItem);

      setTimeout(() => {
        setFeaturedItem(null);
      }, featureDuration);
    }, featureDuration + 500);

    return () => {
      clearInterval(interval);
      clearInterval(featureInterval);
    };
  }, [active, duration, featureDuration, totalItems]);

  return (
    <StarGridContext.Provider value={{ activeItems, featuredItem }}>
      <div className={className} style={style}>
        {children}
      </div>
    </StarGridContext.Provider>
  );
}

interface StarGridItemProps {
  children: (props: { isActive: boolean; isFeatured: boolean }) => React.ReactNode;
  className?: string;
}

function StarGridItem({ children, className = "" }: StarGridItemProps) {
  const { activeItems, featuredItem } = useContext(StarGridContext);
  const [index, setIndex] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.parentElement) {
      const parent = ref.current.parentElement;
      const siblings = Array.from(parent.children);
      const currentIndex = siblings.indexOf(ref.current);
      setIndex(currentIndex);
    }
  }, []);

  const isActive = activeItems.has(index);
  const isFeatured = featuredItem === index;

  return (
    <div ref={ref} className={className}>
      {children({ isActive, isFeatured })}
    </div>
  );
}

StarGrid.Item = StarGridItem;
