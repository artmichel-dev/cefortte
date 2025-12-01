import Script from "next/script";

/**
 * Componentes de Structured Data (JSON-LD) para mejorar el SEO
 * Todos los componentes usan el formato JSON-LD recomendado por Google
 */

// ============================================================================
// ORGANIZATION SCHEMA
// ============================================================================

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export function OrganizationSchema({
  name = "Cefortte",
  url = "https://cefforte.com.mx",
  logo = "https://cefforte.com.mx/logo.png",
  description = "Centro especializado en capacitación en seguridad industrial con cursos certificados NOM-STPS, OSHA, NFPA e ISO 45001",
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name,
    url,
    logo,
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tu dirección completa",
      addressLocality: "Tu Ciudad",
      addressRegion: "Tu Estado",
      postalCode: "00000",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.4326,
      longitude: -99.1332,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+52-XX-XXXX-XXXX",
      contactType: "customer service",
      areaServed: "MX",
      availableLanguage: ["es"],
    },
    sameAs: [
      "https://www.facebook.com/cerfortte",
      "https://www.linkedin.com/company/cerfortte",
      "https://www.instagram.com/cerfortte",
      "https://twitter.com/cerfortte",
    ],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// COURSE SCHEMA
// ============================================================================

interface CourseSchemaProps {
  name: string;
  description: string;
  provider?: string;
  url: string;
  image?: string;
  price?: number;
  currency?: string;
  duration?: string;
  courseMode?: "online" | "onsite" | "blended";
  educationalLevel?: string;
  inLanguage?: string;
}

export function CourseSchema({
  name,
  description,
  provider = "Cefortte",
  url,
  image = "https://cefforte.com.mx/og-image.jpg",
  price,
  currency = "MXN",
  duration,
  courseMode = "onsite",
  educationalLevel = "Professional",
  inLanguage = "es-MX",
}: CourseSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: "https://cefforte.com.mx",
    },
    url,
    image,
    ...(price && {
      offers: {
        "@type": "Offer",
        price,
        priceCurrency: currency,
        availability: "https://schema.org/InStock",
      },
    }),
    ...(duration && { timeRequired: duration }),
    courseMode,
    educationalLevel,
    inLanguage,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode,
      courseWorkload: duration,
      inLanguage,
    },
  };

  return (
    <Script
      id="course-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// LOCAL BUSINESS SCHEMA
// ============================================================================

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  telephone?: string;
  priceRange?: string;
}

export function LocalBusinessSchema({
  name = "Cefortte - Centro de Capacitación en Seguridad Industrial",
  description = "Centro especializado en capacitación en seguridad industrial con cursos certificados",
  telephone = "+52-XX-XXXX-XXXX",
  priceRange = "$$",
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cefforte.com.mx",
    name,
    description,
    image: "https://cefforte.com.mx/logo.png",
    url: "https://cefforte.com.mx",
    telephone,
    priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tu dirección completa",
      addressLocality: "Tu Ciudad",
      addressRegion: "Tu Estado",
      postalCode: "00000",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.4326,
      longitude: -99.1332,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/cerfortte",
      "https://www.linkedin.com/company/cerfortte",
      "https://www.instagram.com/cerfortte",
    ],
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// BREADCRUMB SCHEMA
// ============================================================================

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// FAQ SCHEMA
// ============================================================================

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// ARTICLE SCHEMA
// ============================================================================

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "Cefortte",
  url,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: "https://cefforte.com.mx",
    },
    publisher: {
      "@type": "Organization",
      name: "Cefortte",
      logo: {
        "@type": "ImageObject",
        url: "https://cefforte.com.mx/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// WEBSITE SCHEMA
// ============================================================================

interface WebsiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
}

export function WebsiteSchema({
  name = "Cefortte",
  url = "https://cefforte.com.mx",
  description = "Centro de Capacitación en Seguridad Industrial",
}: WebsiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/buscar?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
