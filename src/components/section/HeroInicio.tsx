"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

const HERO_CONTENT = {
  title: "Capacitación para Empresas",
  description:
    "Formación y certificaciones alineadas con NOM‑STPS, OSHA, NFPA, ANSI e ISO 45001 para impulsar la seguridad y productividad de tu organización.",
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
    src: "https://cdn.zupernova.dev/cefortte/hls/hero_playlist.m3u8",
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
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, playVideo);

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

  useHlsVideo(videoRef, HERO_CONTENT.video.src);

  return (
    <section>
      <article>
        {/* Video de fondo */}
        <div className="absolute px-6 w-full h-full max-w-full pointer-events-none overflow-hidden top-0 left-0 z-0">
          <video ref={videoRef} className="h-full w-full rounded-xl object-cover" autoPlay muted loop playsInline />
          {/* Overlay para mejorar legibilidad */}
          <div className="absolute inset-0" />
        </div>

        <div className="mx-auto max-w-sm md:max-w-md lg:max-w-4xl text-center z-10">
          <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold">{HERO_CONTENT.title}</h1>
          <p className="text-stone-800 text-sm md:text-base lg:text-lg font-medium">{HERO_CONTENT.description}</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Button color="brand" href={HERO_CONTENT.cta.primary.href} className="inline-flex w-max">
              {HERO_CONTENT.cta.primary.text} <i className="fas fa-arrow-right text-xs text-stone-50" />
            </Button>
            <Link
              href={HERO_CONTENT.cta.secondary.href}
              className="group inline-flex items-center gap-2 transition-colors"
            >
              <span className="text-base font-medium text-stone-800 group-hover:text-black transition-colors">
                {HERO_CONTENT.cta.secondary.text}
              </span>
              <i className="fas fa-graduation-cap text-stone-800 group-hover:text-black transition-colors h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
