"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {/* Header con imagen de fondo */}
          <div
            className="relative overflow-hidden rounded-2xl sm:col-span-2 xl:row-span-2 bg-cover bg-center"
            style={{ backgroundImage: `url('${header.backgroundImage}')` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-900/80 via-brand-800/50 to-brand-700/50 xl:from-brand-900/80 xl:via-brand-800/50 xl:to-brand-600/0" />

            {/* Contenido */}
            <div className="relative z-10 flex h-full flex-col justify-start p-8 text-center xl:text-left">
              <p className="text-display-md uppercase text-gray-50 drop-shadow-sm">{header.title}</p>
              <p className="text-body-lg mt-4 text-gray-100 drop-shadow-sm">{header.subtitle}</p>
              {/* CTAs alineados horizontalmente */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                <Button color="white" href={header.primaryCta.href} className="inline-flex w-max shadow-sm">
                  {header.primaryCta.text}
                  <i className="fas fa-arrow-right text-xs text-brand-800" />
                </Button>
                {header.secondaryCta && (
                  <Link
                    href={header.secondaryCta.href}
                    className="group inline-flex items-center gap-2 transition-colors drop-shadow-xl"
                  >
                    <span className="text-base font-medium text-gray-50 transition-colors group-hover:text-white">
                      {header.secondaryCta.text}
                    </span>
                    <i className="fas fa-graduation-cap h-4 w-4 text-gray-50 transition-colors group-hover:text-white" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Feature Items */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-brand-400/10 bg-brand-600/50 p-8 hover:bg-brand-500/40 transition-colors"
            >
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-brand-800/50">
                <i className={`${feature.icon} text-xl text-brand-100`} />
              </div>
              <b className="text-h4 text-brand-50 uppercase">{feature.title}</b>
              <p className="text-body pt-4 text-brand-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
