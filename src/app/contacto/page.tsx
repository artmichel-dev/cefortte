import type { Metadata } from "next";
import { SITE_CONFIG, CONTACT_INFO, OG_IMAGE_CONFIG } from "@/lib/seo-constants";

/**
 * Metadata para la página de Contacto
 */
export const metadata: Metadata = {
  title: "Contacto - Solicita Información y Cotizaciones",
  description:
    "Contáctanos para solicitar información sobre nuestros cursos de seguridad industrial. Cotizaciones personalizadas para empresas. Teléfono, email y ubicación. Respuesta inmediata.",
  keywords: [
    "contacto cerfortte",
    "solicitar información cursos",
    "cotización capacitación",
    "teléfono cerfortte",
    "ubicación centro capacitación",
    "agendar curso",
  ],
  openGraph: {
    title: "Contacto - Solicita Información | Cefortte",
    description:
      "¿Necesitas capacitación en seguridad industrial? Contáctanos para cotizaciones personalizadas y más información.",
    url: `${SITE_CONFIG.url}/contacto`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-contacto.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Contacto - Cefortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto - Solicita Información | Cefortte",
    description:
      "Contáctanos para cotizaciones personalizadas en capacitación de seguridad industrial.",
    images: [`${SITE_CONFIG.url}/og-contacto.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/contacto`,
  },
  other: {
    "contact:phone_number": CONTACT_INFO.phone,
    "contact:email": CONTACT_INFO.email,
    "contact:street_address": CONTACT_INFO.address.street,
    "contact:locality": CONTACT_INFO.address.city,
    "contact:region": CONTACT_INFO.address.state,
    "contact:postal_code": CONTACT_INFO.address.postalCode,
    "contact:country_name": CONTACT_INFO.address.country,
  },
};

/**
 * Página de Contacto
 * TODO: Implementar el contenido de la página
 */
export default function ContactoPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <div>
          <h1>Contacto</h1>
          {/* TODO: Agregar contenido de la página */}
        </div>
      </div>
    </main>
  );
}
