import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware para optimizaciones SEO y seguridad
 *
 * Funcionalidades:
 * - Forzar HTTPS en producción
 * - Redireccionar www a sin www
 * - Normalizar trailing slashes
 * - Headers de seguridad
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hostname = request.headers.get("host") || "";
  const protocol = request.headers.get("x-forwarded-proto") || "http";

  // ============================================================================
  // 1. FORZAR HTTPS EN PRODUCCIÓN
  // ============================================================================
  if (
    process.env.NODE_ENV === "production" &&
    protocol === "http" &&
    !hostname.includes("localhost")
  ) {
    const httpsUrl = new URL(request.url);
    httpsUrl.protocol = "https:";
    return NextResponse.redirect(httpsUrl, 301);
  }

  // ============================================================================
  // 2. REDIRECCIONAR WWW A SIN WWW
  // ============================================================================
  if (hostname.startsWith("www.")) {
    const newHostname = hostname.replace("www.", "");
    const newUrl = new URL(request.url);
    newUrl.hostname = newHostname;
    return NextResponse.redirect(newUrl, 301);
  }

  // ============================================================================
  // 3. NORMALIZAR TRAILING SLASHES
  // ============================================================================
  // Remover trailing slash excepto para la raíz
  if (pathname !== "/" && pathname.endsWith("/")) {
    const newUrl = new URL(request.url);
    newUrl.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(newUrl, 301);
  }

  // ============================================================================
  // 4. REDIRECCIONES PERSONALIZADAS (Ejemplos)
  // ============================================================================
  // Agregar redirecciones personalizadas aquí si es necesario
  const redirects: Record<string, string> = {
    // '/old-path': '/new-path',
    // '/cursos-antiguos': '/cursos',
  };

  if (redirects[pathname]) {
    const newUrl = new URL(redirects[pathname], request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // ============================================================================
  // 5. HEADERS DE SEGURIDAD Y SEO
  // ============================================================================
  const response = NextResponse.next();

  // Security Headers
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  // Content Security Policy (ajustar según necesidades)
  // Descomentado por defecto para evitar conflictos con scripts externos
  // response.headers.set(
  //   'Content-Security-Policy',
  //   "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
  // )

  return response;
}

/**
 * Configuración del matcher
 * Define qué rutas procesará el middleware
 */
export const config = {
  matcher: [
    /*
     * Match todas las rutas excepto:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (*.svg, *.png, *.jpg, *.jpeg, *.gif, *.webp)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|json)$).*)",
  ],
};
