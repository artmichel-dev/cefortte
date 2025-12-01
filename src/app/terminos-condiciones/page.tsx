import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";

/**
 * Metadata para la página de Términos y Condiciones
 */
export const metadata: Metadata = {
  title: "Términos y Condiciones - Políticas de Uso",
  description:
    "Términos y condiciones de uso de los servicios de Cerfortte. Políticas de capacitación, certificación, inscripción y uso del sitio web. Lee nuestros términos antes de contratar nuestros servicios.",
  keywords: [
    "términos condiciones cerfortte",
    "políticas uso",
    "términos servicio capacitación",
    "condiciones inscripción",
  ],
  openGraph: {
    title: "Términos y Condiciones | Cerfortte",
    description: "Términos y condiciones de uso de los servicios de Cerfortte.",
    url: `${SITE_CONFIG.url}/terminos-condiciones`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Términos y Condiciones - Cerfortte",
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
    canonical: `${SITE_CONFIG.url}/terminos-condiciones`,
  },
};

/**
 * Página de Términos y Condiciones
 */
export default function TerminosCondicionesPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-6 px-4 py-8">
        <div>
          <h1 className="mb-6">Términos y Condiciones</h1>
          <p className="mb-4 text-stone-600">
            Última actualización: {new Date().toLocaleDateString("es-MX")}
          </p>

          <section className="space-y-4">
            <div>
              <h2 className="mb-3">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar los servicios de Cerfortte, usted acepta estar sujeto a estos
                términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no
                debe utilizar nuestros servicios.
              </p>
            </div>

            <div>
              <h2 className="mb-3">2. Servicios de Capacitación</h2>
              <p>
                Cerfortte ofrece servicios de capacitación en seguridad industrial. Los cursos,
                horarios, precios y contenidos están sujetos a cambios sin previo aviso. Nos
                reservamos el derecho de cancelar o reprogramar cursos por causas de fuerza mayor.
              </p>
            </div>

            <div>
              <h2 className="mb-3">3. Inscripción y Pagos</h2>
              <p>
                La inscripción a nuestros cursos requiere el pago anticipado según las condiciones
                establecidas. Los pagos son no reembolsables excepto en caso de cancelación por
                parte de Cerfortte. Las políticas de cancelación y reprogramación se informarán al
                momento de la inscripción.
              </p>
            </div>

            <div>
              <h2 className="mb-3">4. Certificaciones</h2>
              <p>
                Las certificaciones se otorgan únicamente a participantes que cumplan con los
                requisitos de asistencia, evaluación y participación establecidos para cada curso.
                Cerfortte no se hace responsable del uso indebido de las certificaciones otorgadas.
              </p>
            </div>

            <div>
              <h2 className="mb-3">5. Propiedad Intelectual</h2>
              <p>
                Todo el contenido del sitio web, incluyendo textos, imágenes, logos, materiales de
                curso y diseño, es propiedad de Cerfortte y está protegido por las leyes de
                propiedad intelectual. Queda prohibida su reproducción sin autorización expresa.
              </p>
            </div>

            <div>
              <h2 className="mb-3">6. Limitación de Responsabilidad</h2>
              <p>
                Cerfortte no será responsable por daños directos, indirectos, incidentales o
                consecuentes derivados del uso de nuestros servicios o la imposibilidad de
                utilizarlos. La capacitación proporcionada es de carácter educativo y no sustituye
                las responsabilidades legales de las empresas en materia de seguridad.
              </p>
            </div>

            <div>
              <h2 className="mb-3">7. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier
                momento. Las modificaciones entrarán en vigor inmediatamente después de su
                publicación en el sitio web.
              </p>
            </div>

            <div>
              <h2 className="mb-3">8. Contacto</h2>
              <p>
                Para cualquier consulta sobre estos términos y condiciones, puede contactarnos a
                través de nuestra página de contacto o al correo electrónico:
                contacto@cefforte.com.mx
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
