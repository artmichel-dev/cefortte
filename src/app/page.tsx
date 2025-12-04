"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // IMPORTANTE: Reemplaza esta URL con tu video m3u8 real
    // Mientras tanto, usa un video de prueba público
    const videoSrc = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

    // Si no tienes un video m3u8 todavía, puedes usar un video MP4 normal:
    // const videoSrc = '/videos/hero-video.mp4';

    setVideoError(null);

    // Para videos MP4 regulares (opción más simple)
    if (videoSrc.endsWith(".mp4")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        setIsVideoLoaded(true);
      });
      video.addEventListener("error", (e) => {
        setVideoError("Error al cargar el video");
        console.error("Video error:", e);
      });
      return;
    }

    // Para videos HLS (m3u8)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari soporta HLS nativamente
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        setIsVideoLoaded(true);
      });
      video.addEventListener("error", (e) => {
        setVideoError("Error al cargar el video");
        console.error("Video error:", e);
      });
    } else if (Hls.isSupported()) {
      // Otros navegadores usan hls.js
      const hls = new Hls({
        startLevel: -1,
        maxBufferLength: 30,
        maxMaxBufferLength: 60,
        lowLatencyMode: false,
        backBufferLength: 10,
        enableWorker: true,
        debug: false, // Cambia a true para más información
      });

      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("Video cargado correctamente");
        video.play().catch((err) => {
          console.log("Autoplay bloqueado por el navegador:", err);
          setVideoError("Haz clic para reproducir");
        });
        setIsVideoLoaded(true);
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.error("Error fatal de HLS:", data);
          setVideoError(`Error al cargar el video: ${data.type}`);

          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.log("Error de red - Verificar URL del video");
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log("Error de medio - Intentando recuperar");
              hls.recoverMediaError();
              break;
            default:
              console.log("Error irrecuperable");
              hls.destroy();
              break;
          }
        }
      });

      return () => {
        hls.destroy();
      };
    } else {
      setVideoError("Tu navegador no soporta este formato de video");
      console.error("HLS no soportado en este navegador");
    }
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current && videoError === "Haz clic para reproducir") {
      videoRef.current.play();
      setVideoError(null);
    }
  };

  return (
    <main id="content" className="relative w-full">
      <div className="relative min-h-screen bg-black">
        <div className="absolute inset-0 overflow-hidden">
          {/* Imagen de respaldo si no hay video */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

          <video
            ref={videoRef}
            className={`h-full w-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded && !videoError ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onClick={handleVideoClick}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

          {!isVideoLoaded && !videoError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="text-center">
                <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent mx-auto" />
                <p className="text-white text-sm">Cargando video...</p>
              </div>
            </div>
          )}

          {videoError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="text-center max-w-md px-4">
                <div className="mb-4 text-red-500">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm">{videoError}</p>
                <p className="text-gray-400 text-xs mt-2">
                  Verifica que la URL del video sea correcta
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl drop-shadow-lg">
                Capacitación en Seguridad Industrial para Empresas de Alto Desempeño
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-200 sm:text-xl/8 drop-shadow-md">
                Formación técnica y certificaciones diseñadas para cumplir con NOM-STPS, OSHA, NFPA,
                ANSI e ISO 45001, fortaleciendo la seguridad, productividad y cultura preventiva de
                tu organización.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Solicitar cotización
                </a>
                <a
                  href="#"
                  className="text-sm/6 font-semibold text-white hover:text-gray-200 transition-colors drop-shadow-md"
                >
                  Ver catálogo de cursos <span aria-hidden="true">→</span>
                </a>
              </div>
              <p className="mt-8 text-sm text-gray-300 drop-shadow-md">
                Soluciones presenciales, in-company, online y programas corporativos anuales.
              </p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8 bg-white">
        {/* Aquí puedes agregar el resto de tu contenido */}
      </div>
    </main>
  );
}
