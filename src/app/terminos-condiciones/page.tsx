import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";

/**
 * Metadata para la página de Términos y Condiciones
 */
export const metadata: Metadata = {
  title: "Términos y Condiciones - Políticas de Uso",
  description:
    "Términos y condiciones de uso de los servicios de Cefortte. Políticas de capacitación, certificación, inscripción y uso del sitio web. Lee nuestros términos antes de contratar nuestros servicios.",
  keywords: [
    "términos condiciones cerfortte",
    "políticas uso",
    "términos servicio capacitación",
    "condiciones inscripción",
  ],
  openGraph: {
    title: "Términos y Condiciones | Cefortte",
    description: "Términos y condiciones de uso de los servicios de Cefortte.",
    url: `${SITE_CONFIG.url}/terminos-condiciones`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Términos y Condiciones - Cefortte",
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
  const sections = [
    {
      number: "01",
      title: "Aceptación de los Términos",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-6">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      content:
        "Al acceder y utilizar los servicios de Cefortte, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.",
    },
    {
      number: "02",
      title: "Servicios de Capacitación",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-6">
          <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
        </svg>
      ),
      content:
        "Cefortte ofrece servicios de capacitación en seguridad industrial. Los cursos, horarios, precios y contenidos están sujetos a cambios sin previo aviso. Nos reservamos el derecho de cancelar o reprogramar cursos por causas de fuerza mayor.",
    },
    {
      number: "03",
      title: "Inscripción y Pagos",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-6">
          <path d="M1 4.25a3.733 3.733 0 0 1 2.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0 0 16.75 2H3.25A2.25 2.25 0 0 0 1 4.25ZM1 7.25a3.733 3.733 0 0 1 2.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0 0 16.75 5H3.25A2.25 2.25 0 0 0 1 7.25ZM7 8a1 1 0 0 1 1 1 2 2 0 1 0 4 0 1 1 0 0 1 1-1h3.75A2.25 2.25 0 0 1 19 10.25v5.5A2.25 2.25 0 0 1 16.75 18H3.25A2.25 2.25 0 0 1 1 15.75v-5.5A2.25 2.25 0 0 1 3.25 8H7Z" />
        </svg>
      ),
      content:
        "La inscripción a nuestros cursos requiere el pago anticipado según las condiciones establecidas. Los pagos son no reembolsables excepto en caso de cancelación por parte de Cefortte. Las políticas de cancelación y reprogramación se informarán al momento de la inscripción.",
    },
    {
      number: "04",
      title: "Certificaciones",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-6">
          <path
            fillRule="evenodd"
            d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      content:
        "Las certificaciones se otorgan únicamente a participantes que cumplan con los requisitos de asistencia, evaluación y participación establecidos para cada curso. Cefortte no se hace responsable del uso indebido de las certificaciones otorgadas.",
    },
    {
      number: "05",
      title: "Propiedad Intelectual",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-6">
          <path
            fillRule="evenodd"
            d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      content:
        "Todo el contenido del sitio web, incluyendo textos, imágenes, logos, materiales de curso y diseño, es propiedad de Cefortte y está protegido por las leyes de propiedad intelectual. Queda prohibida su reproducción sin autorización expresa.",
    },
    {
      number: "06",
      title: "Limitación de Responsabilidad",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-6">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      content:
        "Cefortte no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso de nuestros servicios o la imposibilidad de utilizarlos. La capacitación proporcionada es de carácter educativo y no sustituye las responsabilidades legales de las empresas en materia de seguridad.",
    },
    {
      number: "07",
      title: "Modificaciones",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-6">
          <path d="M5.433 13.917l1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
          <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
        </svg>
      ),
      content:
        "Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.",
    },
    {
      number: "08",
      title: "Contacto",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-6">
          <path
            fillRule="evenodd"
            d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      content:
        "Para cualquier consulta sobre estos términos y condiciones, puede contactarnos a través de nuestra página de contacto o al correo electrónico: contacto@cefforte.com.mx",
      isContact: true,
    },
  ];

  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>

      {/* Hero Section */}
      <div className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-base/7 font-semibold text-brand-700">Legal</p>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-stone-900 sm:text-6xl">
              Términos y Condiciones
            </p>
            <p className="mt-6 text-lg/8 text-stone-600">
              Por favor, lee cuidadosamente estos términos antes de utilizar nuestros servicios de
              capacitación en seguridad industrial.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-2 text-sm text-stone-500">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="size-5 text-stone-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Última actualización: {new Date().toLocaleDateString("es-MX")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-stone-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Intro Card */}
          <div className="mb-10 rounded-xl bg-brand-700 px-8 py-8 shadow-lg">
            <div className="flex items-start gap-x-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-7 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h6 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                  Información Importante
                </h6>
                <p className="mt-3 text-base/7 text-white">
                  Estos términos y condiciones establecen las normas y regulaciones para el uso de
                  los servicios de Cefortte. Al acceder y utilizar nuestros servicios, usted acepta
                  cumplir con estos términos en su totalidad.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <section
                key={index}
                className={`rounded-xl px-8 py-6 shadow-sm ring-1 transition-all hover:shadow-md ${
                  section.isContact
                    ? "bg-gradient-to-r from-brand-700 to-brand-800 ring-brand-700"
                    : "bg-white ring-stone-200 hover:ring-brand-700"
                }`}
              >
                <div className="flex gap-x-4">
                  <div className="flex shrink-0 flex-col items-center">
                    <div
                      className={`flex size-12 items-center justify-center rounded-lg ${
                        section.isContact ? "bg-white/20" : "bg-brand-700"
                      }`}
                    >
                      <div className={section.isContact ? "text-white" : "text-white"}>
                        {section.icon}
                      </div>
                    </div>
                    <div
                      className={`mt-2 text-xs font-bold ${
                        section.isContact ? "text-white/70" : "text-stone-400"
                      }`}
                    >
                      {section.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h6
                      className={`text-sm font-semibold uppercase tracking-wider ${
                        section.isContact ? "text-white/90" : "text-stone-500"
                      }`}
                    >
                      {section.title}
                    </h6>
                    <div
                      className={`mt-1 h-1 w-16 ${
                        section.isContact ? "bg-white/50" : "bg-brand-700"
                      }`}
                    ></div>
                    <p
                      className={`mt-4 text-base/7 ${
                        section.isContact ? "text-white" : "text-stone-700"
                      }`}
                    >
                      {section.content}
                    </p>
                    {section.isContact && (
                      <div className="mt-4 flex items-center gap-x-2 text-sm text-white/90">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="size-5"
                        >
                          <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                          <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                        </svg>
                        <strong className="text-white">contacto@cefforte.com.mx</strong>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Bottom Notice */}
          <div className="mt-10 rounded-xl border-l-4 border-brand-700 bg-white px-6 py-4 shadow-sm">
            <div className="flex gap-x-3">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="mt-0.5 size-5 flex-none text-brand-700"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="text-sm font-semibold text-stone-900">Aviso Legal</p>
                <p className="mt-1 text-sm text-stone-600">
                  Al continuar usando nuestros servicios, confirmas que has leído, entendido y
                  aceptado estos términos y condiciones. Si tienes alguna pregunta, no dudes en
                  contactarnos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
