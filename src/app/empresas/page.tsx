import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";

/**
 * Metadata para la página de Soluciones para Empresas
 */
export const metadata: Metadata = {
  title: "Soluciones de Capacitación para Empresas",
  description:
    "Soluciones integrales de capacitación en seguridad industrial para empresas. Programas personalizados, capacitación in-company, diagnóstico de necesidades y cumplimiento normativo NOM-STPS. Mejora la seguridad de tu organización.",
  keywords: [
    "capacitación empresas",
    "soluciones corporativas seguridad",
    "capacitación in-company",
    "programas personalizados",
    "cumplimiento normativo empresas",
    "consultoría seguridad industrial",
    "diagnóstico seguridad",
  ],
  openGraph: {
    title: "Soluciones de Capacitación para Empresas | Cefortte",
    description:
      "Programas de capacitación personalizados para empresas. Mejora la seguridad y cumplimiento normativo de tu organización.",
    url: `${SITE_CONFIG.url}/empresas`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-soluciones.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Soluciones para Empresas - Cefortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones de Capacitación para Empresas | Cefortte",
    description: "Programas personalizados de capacitación en seguridad industrial para empresas.",
    images: [`${SITE_CONFIG.url}/og-soluciones.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/empresas`,
  },
};

/**
 * Página de Soluciones para Empresas
 * TODO: Implementar el contenido de la página
 */
export default function SolucionesPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Soluciones para Empresas</h1>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
