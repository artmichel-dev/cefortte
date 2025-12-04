'use client';

import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

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
        video.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      });

      // Cleanup
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari nativo
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      });
    }
  }, []);

  return (
    <section className="relative flex flex-col h-screen justify-end bg-cover">
      <div className="absolute w-full h-full max-w-full pointer-events-none overflow-hidden bg-cover top-0 left-0 bg-top bg-center z-0 bg-black">
        {/* Video con soporte para M3U8 */}
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      
      <div className="min-h-screen w-full mr-auto ml-auto flex flex-wrap items-stretch h-full max-w-screen-lg px-6 content-stretch min-h-auto bg-black">
        <div className="row flex-grow flex-shrink flex-auto flex -ml-3 -mr-3 flex-wrap w-full items-end">
          <div className="w-full max-w-full flex flex-row border-solid relative pl-3 pr-3 overflow-wrap-normal break-word pt-0 my-auto">
            <div className="text-left">
              <h2 className="text-white">Titulo</h2>
              <p className="w-64 sm:w-72 md:w-80 lg:w-80 xl:w-96 py-0.5 md:py-0 text-white">
                Subtitulo
              </p>
              <div className="space-y-3 sm:space-y-2 md:space-y-4 lg:space-y-4 sm:space-x-1 md:space-x-3 lg:space-x-3">
                <a
                  href="#"
                  aria-label="texto"
                  className="btn-rounded-full-green shadow-border mt-2 inline-block"
                >
                  boton 1
                  <div className="b fa-regular fa-circle-check ml-2"></div>
                </a>
                <a
                  href="#"
                  aria-label="texto"
                  className="btn-rounded-full-border inline-block"
                >
                  boton 2
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

