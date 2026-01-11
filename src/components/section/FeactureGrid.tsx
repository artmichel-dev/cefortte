"use client";

import { Button } from "@/components/ui/button";

// Tipos para las props
interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeatureCta {
  text: string;
  href: string;
}

interface FeatureHeader {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryCta: FeatureCta;
  secondaryCta?: FeatureCta;
}

interface FeatureGridProps {
  header: FeatureHeader;
  features: FeatureItem[];
  className?: string;
}

export default function FeatureGrid({ header, features, className = "" }: FeatureGridProps) {
  return (
    <section className={`bg-brand-700 ${className}`}>
      <article>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-13 xl:grid-cols-5">
          {/* Header con imagen de fondo */}
          <div
            className="relative overflow-hidden rounded-2xl bg-cover bg-center col-span-1 sm:col-span-2 sm:row-span-1 md:col-span-3 md:row-span-1 lg:col-span-5 lg:row-span-3 xl:col-span-2 xl:row-span-2"
            style={{ backgroundImage: `url('${header.backgroundImage}')` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-600/80 via-brand-700/60 to-brand-600/50 lg:from-brand-600/80 lg:via-brand-700/60 lg:to-brand-600/10" />

            {/* Contenido */}
            <div className="relative z-10 flex h-full flex-col justify-start items-center text-center px-2 sm:px-4 md:px-8 py-24">
              <p className="text-display-sm font-heading uppercase text-white drop-shadow-sm">{header.title}</p>
              <p className="text-body mt-4 text-white drop-shadow-sm">{header.subtitle}</p>
              {/* CTAs alineados horizontalmente */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                <Button color="white" href="/cotizacion" type="submit" className="!flex-none px-6 inline-flex w-max">
                  Cotizar ahora <i className="fas fa-arrow-right text-xs text-brand-700" />
                </Button>
                {header.secondaryCta && (
                  <a
                    href={header.secondaryCta.href}
                    className="group inline-flex items-center gap-2 transition-colors drop-shadow-xl"
                  >
                    <span className="text-base font-medium text-gray-50 transition-colors group-hover:text-white">
                      {header.secondaryCta.text}
                    </span>
                    <i className="fas fa-graduation-cap h-4 w-4 text-gray-50 transition-colors group-hover:text-white" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Feature Items */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl lift col-span-1 row-span-1 lg:col-span-4 lg:row-span-1 xl:col-span-1 xl:row-span-1 border border-brand-400/10 bg-brand-600/50 p-8 hover:bg-brand-500/40 transition-colors"
            >
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-brand-800/50">
                <i className={`${feature.icon} text-xl text-brand-100`} />
              </div>
              <b className="text-title-sm text-white">{feature.title}</b>
              <p className="text-body pt-4 text-brand-50">{feature.description}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
