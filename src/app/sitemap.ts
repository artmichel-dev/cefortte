import { MetadataRoute } from "next";

/**
 * Sitemap dinámico para Cerfortte
 * Genera el sitemap.xml con todas las rutas del sitio
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cefforte.com.mx";

  // Fecha actual para lastModified
  const currentDate = new Date();

  // Páginas principales del sitio
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/cursos`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/soluciones`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonios`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cotizacion`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mapa-sitio`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terminos-condiciones`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Categorías de cursos
  const courseCategories = [
    "seguridad-operativa",
    "maquinaria-equipos",
    "sustancias-quimicas",
    "brigadas-proteccion-civil",
    "normas-stps",
    "gestion-cultura",
    "logistica-almacenes",
    "construccion",
  ];

  const categoryPages = courseCategories.map((category) => ({
    url: `${baseUrl}/cursos/${category}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Combinar todas las URLs
  return [...mainPages, ...categoryPages];
}
