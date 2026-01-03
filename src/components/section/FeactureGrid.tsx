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
    <section className={`bg-gray-50 ${className}`}>
      <article>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {/* Header con imagen de fondo */}
          <div
            className="relative overflow-hidden rounded-2xl sm:col-span-2 xl:row-span-2 bg-cover bg-center"
            style={{ backgroundImage: `url('${header.backgroundImage}')` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />

            {/* Contenido */}
            <div className="relative z-10 flex h-full flex-col justify-center p-8 lg:p-10">
              <h3 className="text-display-sm uppercase text-white drop-shadow-sm">{header.title}</h3>
              <p className="text-body pt-4 text-gray-50 drop-shadow-sm">{header.subtitle}</p>

              {/* CTAs alineados horizontalmente */}
              <div className="mt-8 flex flex-row items-center gap-6">
                <Button color="brand" href={header.primaryCta.href} className="inline-flex w-max shadow-sm">
                  {header.primaryCta.text}
                  <i className="fas fa-arrow-right text-xs text-gray-50" />
                </Button>
                {header.secondaryCta && (
                  <Link
                    href={header.secondaryCta.href}
                    className="group inline-flex items-center gap-2 transition-colors"
                  >
                    <span className="text-base font-medium text-gray-100 transition-colors group-hover:text-white">
                      {header.secondaryCta.text}
                    </span>
                    <i className="fas fa-graduation-cap h-4 w-4 text-gray-100 transition-colors group-hover:text-white" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Feature Items */}
          {features.map((feature, index) => (
            <div key={index} className="rounded-2xl bg-gray-200 p-8 hover:bg-gray-300 transition-colors">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-brand-700">
                <i className={`${feature.icon} text-xl text-white`} />
              </div>
              <b className="text-gray-800">{feature.title}</b>
              <p className="text-body pt-2 text-gray-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
