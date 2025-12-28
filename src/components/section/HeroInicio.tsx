"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import "../../styles/hero-inicio.css";

const HERO_CONTENT = {
  title: "Capacitación para Empresas",
  description: "Formación alineada con estándares globales de seguridad.",
  cta: {
    primary: {
      text: "Cotizar ahora",
      href: "/cotizacion",
    },
    secondary: {
      text: "Ver cursos",
      href: "/cursos",
    },
  },
  video: {
    src: "https://cdn.zupernova.dev/cefortte/hls/hero-color.playlist.m3u8",
    poster: "https://cdn.zupernova.dev/cefortte/jpg/hero-poster.jpg",
  },
} as const;

function useHlsVideo(videoRef: React.RefObject<HTMLVideoElement | null>, src: string) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    };

    if (Hls.isSupported()) {
      const hls = new Hls({
        startLevel: 0,
        capLevelToPlayerSize: true,
        // Carga inicial más rápida
        maxBufferLength: 10,
        maxMaxBufferLength: 30,
        maxBufferSize: 60 * 1000 * 1000, // 60MB
        // Cambio de calidad más agresivo
        abrEwmaDefaultEstimate: 5000000, // Estima 5Mbps inicial
        abrBandWidthFactor: 0.9, // Usa 90% del ancho de banda detectado
        abrBandWidthUpFactor: 0.7, // Sube de calidad más rápido
        // Segmentos más pequeños para inicio rápido
        maxBufferHole: 0.5,
        lowLatencyMode: true,
      });

      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        // Empezar en el nivel medio o superior
        const midLevel = Math.floor(data.levels.length / 2);
        hls.startLevel = midLevel;
        playVideo();
      });

      return () => {
        hls.destroy();
      };
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", playVideo);

      return () => {
        video.removeEventListener("loadedmetadata", playVideo);
      };
    }
  }, [videoRef, src]);
}

export default function HeroInicio() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useHlsVideo(videoRef, HERO_CONTENT.video.src);

  // Intersection Observer para animaciones
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);

            // Animar video/fondo
            const videoContainer = section.querySelector(".hero-video-container");
            if (videoContainer) {
              videoContainer.classList.add("animate");
            }

            // Animar título
            const title = section.querySelector(".hero-title");
            if (title) {
              setTimeout(() => {
                title.classList.add("animate");
              }, 150);
            }

            // Animar descripción
            const description = section.querySelector(".hero-description");
            if (description) {
              setTimeout(() => {
                description.classList.add("animate");
              }, 300);
            }

            // Animar botones
            const cta = section.querySelector(".hero-cta");
            if (cta) {
              setTimeout(() => {
                cta.classList.add("animate");
              }, 450);
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
    <section ref={sectionRef} className="z-10">
      <article className="!overflow-visible">
        {/* Video de fondo */}
        <div className="hero-video-container absolute px-6 w-full h-full max-w-full pointer-events-none top-0 left-0 z-0 opacity-0 translate-y-[30px]">
          <div className="relative h-full w-full rounded-xl overflow-hidden">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster={HERO_CONTENT.video.poster}
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Overlay para mejorar legibilidad */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>

        <div className="mx-auto max-w-sm md:max-w-md lg:max-w-4xl text-center z-10">
          <h1 className="hero-title text-white drop-shadow-sm text-4xl md:text-5xl lg:text-6xl font-bold opacity-0 translate-y-[30px]">
            {HERO_CONTENT.title}
          </h1>
          <p className="hero-description text-gray-50 drop-shadow-sm text-sm md:text-base lg:text-lg opacity-0 translate-y-[30px]">
            {HERO_CONTENT.description}
          </p>
          <div className="hero-cta mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 opacity-0 translate-y-[30px]">
            <Button color="brand" href={HERO_CONTENT.cta.primary.href} className="inline-flex w-max shadow-sm">
              {HERO_CONTENT.cta.primary.text} <i className="fas fa-arrow-right text-xs text-gray-50" />
            </Button>
            <Link
              href={HERO_CONTENT.cta.secondary.href}
              className="group inline-flex items-center gap-2 transition-colors drop-shadow-sm"
            >
              <span className="text-base font-medium text-gray-50 group-hover:text-white transition-colors">
                {HERO_CONTENT.cta.secondary.text}
              </span>
              <i className="fas fa-graduation-cap text-gray-50 group-hover:text-white transition-colors h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
