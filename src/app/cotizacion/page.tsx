import type { Metadata } from "next";
import { SITE_CONFIG, OG_IMAGE_CONFIG, CONTACT_INFO } from "@/lib/seo-constants";

/**
 * Metadata para la página de Cotización
 */
export const metadata: Metadata = {
  title: "Solicitar Cotización - Presupuesto Personalizado",
  description:
    "Solicita una cotización personalizada para capacitación en seguridad industrial. Presupuestos sin compromiso para empresas. Planes corporativos y descuentos por volumen. Respuesta en 24 horas.",
  keywords: [
    "cotización cerfortte",
    "presupuesto capacitación",
    "solicitar cotización cursos",
    "precios capacitación empresas",
    "cotización corporativa",
  ],
  openGraph: {
    title: "Solicitar Cotización | Cefortte",
    description: "Solicita una cotización personalizada para capacitación en seguridad industrial.",
    url: `${SITE_CONFIG.url}/cotizacion`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-cotizacion.jpg`,
        width: OG_IMAGE_CONFIG.width,
        height: OG_IMAGE_CONFIG.height,
        alt: "Solicitar Cotización - Cefortte",
      },
    ],
    locale: SITE_CONFIG.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solicitar Cotización | Cefortte",
    description: "Solicita una cotización personalizada para capacitación empresarial.",
    images: [`${SITE_CONFIG.url}/og-cotizacion.jpg`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/cotizacion`,
  },
  other: {
    "contact:phone_number": CONTACT_INFO.phone,
    "contact:email": CONTACT_INFO.email,
  },
};

/**
 * Página de Cotización
 */
export default function CotizacionPage() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      <div className="container mx-auto max-w-4xl space-y-6 px-4 py-8">
        <div>
          <h1 className="mb-6">Solicitar Cotización</h1>
          <p className="mb-8 text-stone-600">
            Completa el siguiente formulario y recibe una cotización personalizada en menos de 24
            horas. Ofrecemos planes corporativos y descuentos por volumen.
          </p>

          {/* Formulario de Cotización */}
          <div className="rounded-lg bg-white p-8 shadow-md">
            <form className="space-y-6">
              {/* Información de Contacto */}
              <section>
                <h2 className="mb-4 text-xl">Información de Contacto</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full rounded border border-stone-300 px-4 py-2 focus:border-brand-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded border border-stone-300 px-4 py-2 focus:border-brand-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="mb-2 block text-sm font-medium">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      className="w-full rounded border border-stone-300 px-4 py-2 focus:border-brand-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="mb-2 block text-sm font-medium">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      required
                      className="w-full rounded border border-stone-300 px-4 py-2 focus:border-brand-700 focus:outline-none"
                    />
                  </div>
                </div>
              </section>

              {/* Información del Curso */}
              <section>
                <h2 className="mb-4 text-xl">Información del Curso</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="curso" className="mb-2 block text-sm font-medium">
                      Curso de Interés *
                    </label>
                    <select
                      id="curso"
                      name="curso"
                      required
                      className="w-full rounded border border-stone-300 px-4 py-2 focus:border-brand-700 focus:outline-none"
                    >
                      <option value="">Seleccione un curso</option>
                      <option value="trabajo-alturas">Trabajo en Alturas</option>
                      <option value="espacios-confinados">Espacios Confinados</option>
                      <option value="montacargas">Montacargas</option>
                      <option value="primeros-auxilios">Primeros Auxilios</option>
                      <option value="combate-incendios">Combate de Incendios</option>
                      <option value="otro">Otro (especificar en comentarios)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="participantes" className="mb-2 block text-sm font-medium">
                      Número de Participantes *
                    </label>
                    <input
                      type="number"
                      id="participantes"
                      name="participantes"
                      min="1"
                      required
                      className="w-full rounded border border-stone-300 px-4 py-2 focus:border-brand-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="modalidad" className="mb-2 block text-sm font-medium">
                      Modalidad Preferida
                    </label>
                    <select
                      id="modalidad"
                      name="modalidad"
                      className="w-full rounded border border-stone-300 px-4 py-2 focus:border-brand-700 focus:outline-none"
                    >
                      <option value="presencial">Presencial</option>
                      <option value="in-company">In-Company (en sus instalaciones)</option>
                      <option value="online">Online</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="fecha" className="mb-2 block text-sm font-medium">
                      Fecha Tentativa
                    </label>
                    <input
                      type="date"
                      id="fecha"
                      name="fecha"
                      className="w-full rounded border border-stone-300 px-4 py-2 focus:border-brand-700 focus:outline-none"
                    />
                  </div>
                </div>
              </section>

              {/* Comentarios Adicionales */}
              <section>
                <label htmlFor="comentarios" className="mb-2 block text-sm font-medium">
                  Comentarios o Requerimientos Especiales
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  rows={4}
                  className="w-full rounded border border-stone-300 px-4 py-2 focus:border-brand-700 focus:outline-none"
                  placeholder="Cuéntanos más sobre tus necesidades de capacitación..."
                ></textarea>
              </section>

              {/* Botón de Envío */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-stone-600">* Campos obligatorios</p>
                <button type="submit" className="btn-cta-primary">
                  Solicitar Cotización
                </button>
              </div>
            </form>
          </div>

          {/* Información Adicional */}
          <div className="mt-8 rounded-lg bg-stone-50 p-6">
            <h3 className="mb-4">¿Por qué solicitar una cotización?</h3>
            <ul className="ml-6 list-disc space-y-2 text-stone-700">
              <li>Presupuestos personalizados según tus necesidades</li>
              <li>Descuentos por volumen para grupos grandes</li>
              <li>Planes corporativos con condiciones especiales</li>
              <li>Flexibilidad en fechas y modalidades</li>
              <li>Respuesta en menos de 24 horas</li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div className="mt-8 text-center">
            <p className="mb-2 text-stone-600">¿Prefieres contactarnos directamente?</p>
            <p className="text-brand-700 font-medium">
              Teléfono: {CONTACT_INFO.phone} | Email: {CONTACT_INFO.email}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
