import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG } from "@/lib/seo-constants";

/**
 * Metadata para la página de Aviso de Privacidad
 */
export const metadata: Metadata = {
  title: "Aviso de Privacidad - Protección de Datos Personales",
  description:
    "Aviso de privacidad de Cefortte. Conoce cómo protegemos y utilizamos tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
  keywords: [
    "aviso privacidad cerfortte",
    "protección datos personales",
    "LFPDPPP",
    "política privacidad México",
  ],
  openGraph: {
    title: "Aviso de Privacidad | Cefortte",
    description: "Aviso de privacidad y protección de datos personales de Cefortte.",
    url: `${SITE_CONFIG.url}/privacidad`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Aviso de Privacidad - Cefortte",
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

      {/* Hero Section */}
      <div className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-base/7 font-semibold text-brand-700">Protección de Datos</p>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-stone-900 sm:text-6xl">
              Aviso de Privacidad
            </p>
            <p className="mt-6 text-lg/8 text-stone-600">
              Tu privacidad es importante para nosotros. Conoce cómo protegemos y utilizamos tus
              datos personales conforme a la LFPDPPP.
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
          <div className="space-y-10">
            {/* Responsable */}
            <section className="rounded-xl bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200">
              <div className="flex gap-x-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-700">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                    Responsable de la Protección de Datos
                  </h6>
                  <div className="mt-1 h-1 w-16 bg-brand-700"></div>
                  <p className="mt-4 text-base/7 text-stone-700">
                    Cefortte, con domicilio en [Dirección completa], es responsable del tratamiento
                    de sus datos personales conforme a la Ley Federal de Protección de Datos
                    Personales en Posesión de los Particulares (LFPDPPP).
                  </p>
                </div>
              </div>
            </section>

            {/* Datos que Recabamos */}
            <section className="rounded-xl bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200">
              <div className="flex gap-x-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-700">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                    Datos Personales que Recabamos
                  </h6>
                  <div className="mt-1 h-1 w-16 bg-brand-700"></div>
                  <p className="mt-4 text-base/7 text-stone-700">
                    Para las finalidades señaladas en este aviso de privacidad, podemos recabar:
                  </p>
                  <ul role="list" className="mt-4 space-y-3">
                    {[
                      "Datos de identificación: nombre completo, edad, fecha de nacimiento",
                      "Datos de contacto: domicilio, teléfono, correo electrónico",
                      "Datos laborales: empresa, puesto, área de trabajo",
                      "Datos académicos: escolaridad, certificaciones previas",
                      "Datos de facturación: RFC, razón social, domicilio fiscal",
                    ].map((item, index) => (
                      <li key={index} className="flex gap-x-3">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="mt-1 size-5 flex-none text-brand-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-stone-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalidades del Tratamiento */}
            <section className="rounded-xl bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200">
              <div className="flex gap-x-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-700">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                    Finalidades del Tratamiento
                  </h6>
                  <div className="mt-1 h-1 w-16 bg-brand-700"></div>
                  <p className="mt-4 text-base/7 text-stone-700">
                    Sus datos personales serán utilizados para:
                  </p>
                  <ul role="list" className="mt-4 space-y-3">
                    {[
                      "Prestación de servicios de capacitación",
                      "Emisión de certificados y constancias",
                      "Facturación y cobranza",
                      "Comunicación sobre cursos, eventos y promociones",
                      "Cumplimiento de obligaciones legales",
                      "Mejora de nuestros servicios",
                    ].map((item, index) => (
                      <li key={index} className="flex gap-x-3">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="mt-1 size-5 flex-none text-brand-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-stone-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Grid de 2 columnas para secciones más pequeñas */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Transferencia de Datos */}
              <section className="rounded-xl bg-white px-6 py-6 shadow-sm ring-1 ring-stone-200">
                <div className="flex items-start gap-x-3">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-brand-700"
                  >
                    <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
                  </svg>
                  <div className="flex-1">
                    <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                      Transferencia de Datos
                    </h6>
                    <p className="mt-3 text-sm/6 text-stone-700">
                      Sus datos personales pueden ser transferidos a autoridades competentes cuando
                      sea requerido por ley, y a organismos certificadores para validación de
                      certificaciones. No realizamos transferencias con fines mercadotécnicos a
                      terceros.
                    </p>
                  </div>
                </div>
              </section>

              {/* Derechos ARCO */}
              <section className="rounded-xl bg-white px-6 py-6 shadow-sm ring-1 ring-stone-200">
                <div className="flex items-start gap-x-3">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-brand-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex-1">
                    <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                      Derechos ARCO
                    </h6>
                    <p className="mt-3 text-sm/6 text-stone-700">
                      Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> al
                      tratamiento de sus datos personales. Para ejercer estos derechos, puede enviar
                      su solicitud a: <strong>contacto@cefforte.com.mx</strong>
                    </p>
                  </div>
                </div>
              </section>

              {/* Revocación del Consentimiento */}
              <section className="rounded-xl bg-white px-6 py-6 shadow-sm ring-1 ring-stone-200">
                <div className="flex items-start gap-x-3">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-brand-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex-1">
                    <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                      Revocación del Consentimiento
                    </h6>
                    <p className="mt-3 text-sm/6 text-stone-700">
                      Puede revocar su consentimiento para el tratamiento de sus datos personales en
                      cualquier momento, enviando su solicitud al correo mencionado. La revocación
                      no tendrá efectos retroactivos.
                    </p>
                  </div>
                </div>
              </section>

              {/* Uso de Cookies */}
              <section className="rounded-xl bg-white px-6 py-6 shadow-sm ring-1 ring-stone-200">
                <div className="flex items-start gap-x-3">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-brand-700"
                  >
                    <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
                  </svg>
                  <div className="flex-1">
                    <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                      Uso de Cookies
                    </h6>
                    <p className="mt-3 text-sm/6 text-stone-700">
                      Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su
                      experiencia de navegación, analizar el tráfico del sitio y personalizar
                      contenido. Puede configurar su navegador para rechazar cookies.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Modificaciones y Contacto - Full Width */}
            <div className="grid grid-cols-1 gap-6">
              {/* Modificaciones al Aviso */}
              <section className="rounded-xl bg-white px-8 py-6 shadow-sm ring-1 ring-stone-200">
                <div className="flex items-start gap-x-4">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mt-1 size-6 flex-none text-brand-700"
                  >
                    <path d="M5.433 13.917l1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                  </svg>
                  <div className="flex-1">
                    <h6 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                      Modificaciones al Aviso
                    </h6>
                    <p className="mt-3 text-sm/6 text-stone-700">
                      Nos reservamos el derecho de modificar este aviso de privacidad. Las
                      modificaciones estarán disponibles en nuestro sitio web con la fecha de última
                      actualización.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contacto - Destacado */}
              <section className="rounded-xl bg-gradient-to-r from-brand-700 to-brand-800 px-8 py-8 shadow-lg">
                <div className="flex items-start gap-x-4">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mt-1 size-8 flex-none text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex-1">
                    <h6 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                      Contacto
                    </h6>
                    <p className="mt-3 text-base/7 text-white">
                      Para cualquier duda sobre este aviso de privacidad, contáctenos en:
                    </p>
                    <div className="mt-4 space-y-2 text-sm text-white/90">
                      <div className="flex items-center gap-x-2">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="size-5"
                        >
                          <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                          <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                        </svg>
                        <span>
                          Email: <strong className="text-white">contacto@cefforte.com.mx</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="size-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          Teléfono: <strong className="text-white">+52-XX-XXXX-XXXX</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
