import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";

/**
 * Metadata para la página de Aviso de Privacidad
 */
export const metadata: Metadata = {
  title: "Aviso de Privacidad - Protección de Datos Personales",
  description:
    "Aviso de privacidad de Cerfortte. Conoce cómo protegemos y utilizamos tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
  keywords: [
    "aviso privacidad cerfortte",
    "protección datos personales",
    "LFPDPPP",
    "política privacidad México",
  ],
  openGraph: {
    title: "Aviso de Privacidad | Cerfortte",
    description: "Aviso de privacidad y protección de datos personales de Cerfortte.",
    url: `${SITE_CONFIG.url}/privacidad`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Aviso de Privacidad - Cerfortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacidad`,
  },
};

/**
 * Página de Aviso de Privacidad
 */
export default function PrivacidadPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-6 px-4 py-8">
        <div>
          <h1 className="mb-6">Aviso de Privacidad</h1>
          <p className="mb-4 text-stone-600">
            Última actualización: {new Date().toLocaleDateString("es-MX")}
          </p>

          <section className="space-y-4">
            <div>
              <h2 className="mb-3">Responsable de la Protección de Datos</h2>
              <p>
                Cerfortte, con domicilio en [Dirección completa], es responsable del tratamiento de
                sus datos personales conforme a la Ley Federal de Protección de Datos Personales en
                Posesión de los Particulares (LFPDPPP).
              </p>
            </div>

            <div>
              <h2 className="mb-3">Datos Personales que Recabamos</h2>
              <p>Para las finalidades señaladas en este aviso de privacidad, podemos recabar:</p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>Datos de identificación: nombre completo, edad, fecha de nacimiento</li>
                <li>Datos de contacto: domicilio, teléfono, correo electrónico</li>
                <li>Datos laborales: empresa, puesto, área de trabajo</li>
                <li>Datos académicos: escolaridad, certificaciones previas</li>
                <li>Datos de facturación: RFC, razón social, domicilio fiscal</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3">Finalidades del Tratamiento</h2>
              <p>Sus datos personales serán utilizados para:</p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>Prestación de servicios de capacitación</li>
                <li>Emisión de certificados y constancias</li>
                <li>Facturación y cobranza</li>
                <li>Comunicación sobre cursos, eventos y promociones</li>
                <li>Cumplimiento de obligaciones legales</li>
                <li>Mejora de nuestros servicios</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3">Transferencia de Datos</h2>
              <p>
                Sus datos personales pueden ser transferidos a autoridades competentes cuando sea
                requerido por ley, y a organismos certificadores para validación de certificaciones.
                No realizamos transferencias con fines mercadotécnicos a terceros.
              </p>
            </div>

            <div>
              <h2 className="mb-3">Derechos ARCO</h2>
              <p>
                Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus
                datos personales (Derechos ARCO). Para ejercer estos derechos, puede enviar su
                solicitud a: contacto@cefforte.com.mx
              </p>
            </div>

            <div>
              <h2 className="mb-3">Revocación del Consentimiento</h2>
              <p>
                Puede revocar su consentimiento para el tratamiento de sus datos personales en
                cualquier momento, enviando su solicitud al correo mencionado. La revocación no
                tendrá efectos retroactivos.
              </p>
            </div>

            <div>
              <h2 className="mb-3">Uso de Cookies</h2>
              <p>
                Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su
                experiencia de navegación, analizar el tráfico del sitio y personalizar contenido.
                Puede configurar su navegador para rechazar cookies.
              </p>
            </div>

            <div>
              <h2 className="mb-3">Modificaciones al Aviso</h2>
              <p>
                Nos reservamos el derecho de modificar este aviso de privacidad. Las modificaciones
                estarán disponibles en nuestro sitio web con la fecha de última actualización.
              </p>
            </div>

            <div>
              <h2 className="mb-3">Contacto</h2>
              <p>
                Para cualquier duda sobre este aviso de privacidad, contáctenos en:
                <br />
                Email: contacto@cefforte.com.mx
                <br />
                Teléfono: +52-XX-XXXX-XXXX
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
