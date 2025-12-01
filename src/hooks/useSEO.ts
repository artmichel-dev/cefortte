"use client";

/**
 * Hook personalizado para gestión de SEO
 * Proporciona utilidades para URLs canónicas y breadcrumbs
 */

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { SITE_CONFIG, MAIN_ROUTES } from "@/lib/seo-constants";

// ============================================================================
// TIPOS
// ============================================================================

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface UseSEOReturn {
  pathname: string;
  canonicalUrl: string;
  breadcrumbs: BreadcrumbItem[];
  generateCanonicalUrl: (path?: string) => string;
  generateBreadcrumbs: (customPath?: string) => BreadcrumbItem[];
}

// ============================================================================
// HOOK useSEO
// ============================================================================

/**
 * Hook para gestionar aspectos SEO de la página actual
 * @returns Objeto con pathname, canonicalUrl, breadcrumbs y funciones helper
 *
 * @example
 * const { canonicalUrl, breadcrumbs } = useSEO()
 */
export function useSEO(): UseSEOReturn {
  const pathname = usePathname();

  /**
   * Genera URL canónica para la ruta actual o una ruta específica
   */
  const generateCanonicalUrl = (path?: string): string => {
    const targetPath = path || pathname;
    const cleanPath = targetPath === "/" ? "" : targetPath.replace(/\/$/, "");
    return `${SITE_CONFIG.url}${cleanPath}`;
  };

  /**
   * Genera breadcrumbs basados en la ruta actual
   */
  const generateBreadcrumbs = (customPath?: string): BreadcrumbItem[] => {
    const targetPath = customPath || pathname;
    const segments = targetPath.split("/").filter(Boolean);

    // Breadcrumb de inicio siempre presente
    const breadcrumbs: BreadcrumbItem[] = [
      {
        name: "Inicio",
        url: SITE_CONFIG.url,
      },
    ];

    // Si estamos en la página de inicio, retornar solo el breadcrumb de inicio
    if (segments.length === 0) {
      return breadcrumbs;
    }

    // Construir breadcrumbs para cada segmento
    let currentPath = "";
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      // Intentar encontrar el nombre en las rutas principales
      const route = MAIN_ROUTES.find((r) => r.path === currentPath);

      // Formatear el nombre del segmento
      const name = route
        ? route.name
        : segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

      breadcrumbs.push({
        name,
        url: `${SITE_CONFIG.url}${currentPath}`,
      });
    });

    return breadcrumbs;
  };

  // Memoizar valores calculados
  const canonicalUrl = useMemo(() => generateCanonicalUrl(), [pathname, generateCanonicalUrl]);

  const breadcrumbs = useMemo(() => generateBreadcrumbs(), [pathname, generateBreadcrumbs]);

  return {
    pathname,
    canonicalUrl,
    breadcrumbs,
    generateCanonicalUrl,
    generateBreadcrumbs,
  };
}

// ============================================================================
// HOOK AUXILIAR: usePageTitle
// ============================================================================

/**
 * Hook para generar títulos de página dinámicos
 * @param baseTitle - Título base de la página
 * @param includesSiteName - Si ya incluye el nombre del sitio
 * @returns Título formateado
 *
 * @example
 * const title = usePageTitle("Cursos")
 */
export function usePageTitle(baseTitle: string, includesSiteName: boolean = false): string {
  return useMemo(() => {
    if (includesSiteName) {
      return baseTitle;
    }
    return `${baseTitle} | ${SITE_CONFIG.name}`;
  }, [baseTitle, includesSiteName]);
}

// ============================================================================
// HOOK AUXILIAR: useStructuredBreadcrumbs
// ============================================================================

/**
 * Hook que retorna breadcrumbs en formato JSON-LD para Schema.org
 * @returns Objeto JSON-LD de breadcrumbs
 *
 * @example
 * const breadcrumbSchema = useStructuredBreadcrumbs()
 */
export function useStructuredBreadcrumbs() {
  const { breadcrumbs } = useSEO();

  return useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }, [breadcrumbs]);
}
