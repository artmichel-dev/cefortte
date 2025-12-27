"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Hls from "hls.js";

export default function HeroVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = "https://cdn.zupernova.dev/cefortte/hls/hero_playlist.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      });

      // Cleanup
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari nativo
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      });
    }
  }, []);

  return (
    <section className="relative grid min-h-screen">
      {/* Video de fondo */}
      <div className="absolute w-full h-full max-w-full pointer-events-none overflow-hidden top-0 left-0 z-0 bg-gray-100">
        <video ref={videoRef} className="h-full w-full object-cover" autoPlay muted loop playsInline />
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Contenedor principal con grid */}
      <div className="relative z-10 grid place-items-center min-h-screen w-full mx-auto max-w-screen-lg px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            {/* Título principal */}
            <h2 className="text-gray-800">
              Capacitación en Seguridad Industrial <span className="text-brand-700">para Empresas</span> de Alto
              Desempeño
            </h2>
            {/* Subtítulo */}
            <p className="mt-8 text-pretty font-medium text-gray-800 mx-auto px-4 max-w-xl">
              Formación y certificaciones alineadas con NOM-STPS, OSHA, NFPA, ANSI e ISO 45001 para impulsar la
              seguridad y productividad de tu organización.
            </p>

            {/* Botones de CTA */}
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
              <Link
                href="/cotizacion"
                className="bg-brand-700 hover:bg-brand-600 active:bg-brand-700 rounded-xs inline-block inline-flex w-max items-center justify-center my-2 px-4 py-2 text-sm font-bold tracking-wide text-gray-50 transition-colors"
              >
                <span className="text-base font-medium">Cotizar ahora</span>
                <i className="fas fa-arrow-right ml-1 h-4 w-4"></i>
              </Link>
              <Link
                href="/cursos"
                className="rounded-xs inline-block inline-flex w-max items-center justify-center my-2 px-4 py-2 text-sm font-bold tracking-wide text-gray-900 transition-colors"
              >
                <span className="text-base font-medium">Ver cursos</span>
                <i className="fas fa-graduation-cap ml-2 h-4 w-4"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
