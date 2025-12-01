import { MetadataRoute } from "next";

/**
 * Configuración de robots.txt para Cerfortte
 * Define qué rutas pueden ser indexadas por los motores de búsqueda
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://cefforte.com.mx";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/private/", "/*.json$", "/dashboard/"],
      },
      // Reglas específicas para bots de búsqueda principales
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/dashboard/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/dashboard/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
