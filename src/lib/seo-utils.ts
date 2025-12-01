/**
 * Utilidades SEO para Cefortte
 * Funciones helper para optimización SEO
 */

// ============================================================================
// GENERAR SLUG SEO-FRIENDLY
// ============================================================================

/**
 * Convierte un texto en un slug SEO-friendly
 * @param text - Texto a convertir
 * @returns Slug en formato URL-safe
 *
 * @example
 * generateSlug("Curso de Seguridad Industrial") // "curso-de-seguridad-industrial"
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD") // Normalizar caracteres Unicode
    .replace(/[\u0300-\u036f]/g, "") // Remover acentos
    .replace(/[^a-z0-9\s-]/g, "") // Remover caracteres especiales
    .trim()
    .replace(/\s+/g, "-") // Reemplazar espacios con guiones
    .replace(/-+/g, "-") // Remover guiones duplicados
    .replace(/^-+|-+$/g, ""); // Remover guiones al inicio/final
}

// ============================================================================
// TRUNCAR DESCRIPCIÓN
// ============================================================================

/**
 * Trunca una descripción a una longitud máxima manteniendo palabras completas
 * @param text - Texto a truncar
 * @param maxLength - Longitud máxima (default: 160 para meta descriptions)
 * @returns Texto truncado con "..." si fue recortado
 *
 * @example
 * truncateDescription("Un texto muy largo...", 50) // "Un texto muy largo..."
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) {
    return text;
  }

  // Truncar en el último espacio antes del límite
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > 0) {
    return truncated.slice(0, lastSpace) + "...";
  }

  return truncated + "...";
}

// ============================================================================
// GENERAR KEYWORDS
// ============================================================================

/**
 * Extrae keywords relevantes de un texto
 * @param text - Texto del cual extraer keywords
 * @param maxKeywords - Número máximo de keywords (default: 10)
 * @returns Array de keywords únicas
 *
 * @example
 * generateKeywords("Curso de seguridad industrial...") // ["curso", "seguridad", "industrial"]
 */
export function generateKeywords(text: string, maxKeywords: number = 10): string[] {
  // Palabras comunes a ignorar (stop words en español)
  const stopWords = new Set([
    "el",
    "la",
    "de",
    "que",
    "y",
    "a",
    "en",
    "un",
    "ser",
    "se",
    "no",
    "haber",
    "por",
    "con",
    "su",
    "para",
    "como",
    "estar",
    "tener",
    "le",
    "lo",
    "todo",
    "pero",
    "más",
    "hacer",
    "o",
    "poder",
    "decir",
    "este",
    "ir",
    "otro",
    "ese",
    "si",
    "me",
    "ya",
    "ver",
    "porque",
    "dar",
    "cuando",
    "él",
    "muy",
    "sin",
    "vez",
    "mucho",
    "saber",
    "qué",
    "sobre",
    "mi",
    "alguno",
    "mismo",
    "yo",
    "también",
    "hasta",
    "año",
    "dos",
    "querer",
    "entre",
    "así",
    "primero",
    "desde",
    "grande",
    "eso",
    "ni",
    "nos",
    "llegar",
    "pasar",
    "tiempo",
    "ella",
    "sí",
    "día",
    "uno",
    "bien",
    "poco",
    "deber",
    "entonces",
    "poner",
    "cosa",
    "tanto",
    "hombre",
    "parecer",
    "nuestro",
    "tan",
    "donde",
    "ahora",
    "parte",
    "después",
    "vida",
    "quedar",
    "siempre",
    "creer",
    "hablar",
    "llevar",
    "dejar",
    "nada",
    "cada",
    "seguir",
    "menos",
    "nuevo",
    "encontrar",
    "algo",
    "solo",
    "decir",
    "estos",
    "trabajar",
    "primera",
    "último",
  ]);

  // Normalizar y dividir en palabras
  const words = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !stopWords.has(word));

  // Contar frecuencia de palabras
  const frequency = new Map<string, number>();
  words.forEach((word) => {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  });

  // Ordenar por frecuencia y retornar las más comunes
  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

// ============================================================================
// VALIDAR URL DE IMAGEN OG
// ============================================================================

/**
 * Valida si una URL de imagen Open Graph es válida
 * @param url - URL de la imagen a validar
 * @returns true si la URL es válida
 *
 * @example
 * validateOGImage("https://example.com/image.jpg") // true
 */
export function validateOGImage(url: string): boolean {
  try {
    const urlObj = new URL(url);

    // Verificar protocolo
    if (!["http:", "https:"].includes(urlObj.protocol)) {
      return false;
    }

    // Verificar extensión de imagen
    const validExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
    const hasValidExtension = validExtensions.some((ext) =>
      urlObj.pathname.toLowerCase().endsWith(ext)
    );

    return hasValidExtension;
  } catch {
    return false;
  }
}

// ============================================================================
// GENERAR TEXTO ALTERNATIVO
// ============================================================================

/**
 * Genera texto alternativo descriptivo para imágenes
 * @param filename - Nombre del archivo de imagen
 * @param context - Contexto adicional (opcional)
 * @returns Texto alternativo descriptivo
 *
 * @example
 * generateAltText("curso-seguridad.jpg", "Capacitación") // "Curso seguridad - Capacitación"
 */
export function generateAltText(filename: string, context?: string): string {
  // Remover extensión y convertir guiones/underscores en espacios
  const baseName = filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // Capitalizar primera letra de cada palabra
  const formatted = baseName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return context ? `${formatted} - ${context}` : formatted;
}

// ============================================================================
// GENERAR URL CANÓNICA
// ============================================================================

/**
 * Genera una URL canónica completa
 * @param path - Ruta relativa
 * @param baseUrl - URL base del sitio (default: https://cefforte.com.mx)
 * @returns URL canónica completa
 *
 * @example
 * generateCanonicalUrl("/cursos") // "https://cefforte.com.mx/cursos"
 */
export function generateCanonicalUrl(
  path: string,
  baseUrl: string = "https://cefforte.com.mx"
): string {
  // Asegurar que path comience con /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // Remover trailing slash excepto para la raíz
  const cleanPath = normalizedPath === "/" ? normalizedPath : normalizedPath.replace(/\/$/, "");

  return `${baseUrl}${cleanPath}`;
}

// ============================================================================
// FORMATEAR TÍTULO PARA SEO
// ============================================================================

/**
 * Formatea un título para SEO manteniendo longitud óptima
 * @param title - Título a formatear
 * @param siteName - Nombre del sitio (default: Cefortte)
 * @param maxLength - Longitud máxima (default: 60)
 * @returns Título formateado
 *
 * @example
 * formatTitle("Cursos de Seguridad") // "Cursos de Seguridad | Cefortte"
 */
export function formatTitle(
  title: string,
  siteName: string = "Cefortte",
  maxLength: number = 60
): string {
  const separator = " | ";
  const fullTitle = `${title}${separator}${siteName}`;

  if (fullTitle.length <= maxLength) {
    return fullTitle;
  }

  // Si es muy largo, truncar el título pero mantener el siteName
  const availableLength = maxLength - separator.length - siteName.length - 3; // 3 para "..."
  const truncatedTitle = title.slice(0, availableLength);

  return `${truncatedTitle}...${separator}${siteName}`;
}

// ============================================================================
// EXTRAER PRIMER PÁRRAFO
// ============================================================================

/**
 * Extrae el primer párrafo de un texto HTML o Markdown
 * Útil para generar descripciones automáticas
 * @param content - Contenido del cual extraer el párrafo
 * @returns Primer párrafo sin HTML
 *
 * @example
 * extractFirstParagraph("<p>Primer párrafo</p><p>Segundo</p>") // "Primer párrafo"
 */
export function extractFirstParagraph(content: string): string {
  // Remover tags HTML
  const withoutHtml = content.replace(/<[^>]*>/g, " ");

  // Dividir en párrafos
  const paragraphs = withoutHtml
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return paragraphs[0] || "";
}

// ============================================================================
// GENERAR READING TIME
// ============================================================================

/**
 * Calcula el tiempo estimado de lectura
 * @param content - Contenido a analizar
 * @param wordsPerMinute - Palabras por minuto (default: 200)
 * @returns Tiempo de lectura en minutos
 *
 * @example
 * calculateReadingTime("Un texto largo...") // "5 min de lectura"
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 200): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return `${minutes} min de lectura`;
}
