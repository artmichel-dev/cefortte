import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_CONFIG, OG_IMAGE_CONFIG, COURSE_CATEGORIES } from "@/lib/seo-constants";

/**
 * Tipos para el curso
 */
interface Course {
  slug: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  price: number;
  image: string;
  objectives: string[];
  content: string[];
  certification: string;
  requirements: string[];
}

/**
 * Función para obtener datos del curso (mock)
 * TODO: Reemplazar con llamada real a API o base de datos
 */
async function getCourse(slug: string): Promise<Course | null> {
  // Mock de datos - Reemplazar con fetch real
  const mockCourses: Record<string, Course> = {
    "trabajo-en-alturas": {
      slug: "trabajo-en-alturas",
      title: "Trabajo en Alturas - Certificación NOM-009-STPS",
      description:
        "Curso certificado de trabajo en alturas conforme a NOM-009-STPS. Aprende técnicas de prevención de caídas, uso de EPP, sistemas de protección y procedimientos seguros para trabajos en altura.",
      category: "Seguridad Operativa",
      duration: "16 horas",
      price: 2500,
      image: "/cursos/trabajo-alturas.jpg",
      objectives: [
        "Identificar riesgos en trabajos en altura",
        "Usar correctamente equipos de protección personal",
        "Aplicar procedimientos seguros de trabajo",
        "Conocer la normativa NOM-009-STPS",
      ],
      content: [
        "Introducción a la seguridad en alturas",
        "Normativa NOM-009-STPS",
        "Equipos de protección personal",
        "Sistemas de protección contra caídas",
        "Procedimientos de rescate",
        "Prácticas en campo",
      ],
      certification: "Certificado con validez oficial NOM-009-STPS",
      requirements: ["Ser mayor de 18 años", "Certificado médico vigente"],
    },
    "espacios-confinados": {
      slug: "espacios-confinados",
      title: "Entrada a Espacios Confinados",
      description:
        "Capacitación especializada en entrada segura a espacios confinados. Identificación de riesgos, procedimientos de entrada, monitoreo atmosférico y rescate.",
      category: "Seguridad Operativa",
      duration: "12 horas",
      price: 2200,
      image: "/cursos/espacios-confinados.jpg",
      objectives: [
        "Identificar espacios confinados",
        "Evaluar riesgos atmosféricos",
        "Aplicar procedimientos de entrada segura",
        "Realizar monitoreo continuo",
      ],
      content: [
        "Definición de espacios confinados",
        "Evaluación de riesgos",
        "Equipos de monitoreo",
        "Procedimientos de entrada",
        "Sistemas de rescate",
      ],
      certification: "Certificado de participación",
      requirements: ["Certificado médico", "Examen físico"],
    },
  };

  return mockCourses[slug] || null;
}

/**
 * Genera metadata dinámica para cada curso
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const course = await getCourse(params.slug);

  if (!course) {
    return {
      title: "Curso no encontrado",
      description: "El curso que buscas no está disponible.",
    };
  }

  const courseUrl = `${SITE_CONFIG.url}/cursos/${course.slug}`;

  return {
    title: course.title,
    description: course.description,
    keywords: [
      course.title,
      course.category,
      "curso certificado",
      "capacitación industrial",
      "seguridad laboral",
      "NOM-STPS",
    ],
    openGraph: {
      title: `${course.title} | Cefortte`,
      description: course.description,
      url: courseUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}${course.image}`,
          width: OG_IMAGE_CONFIG.width,
          height: OG_IMAGE_CONFIG.height,
          alt: course.title,
        },
      ],
      locale: SITE_CONFIG.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | Cefortte`,
      description: course.description,
      images: [`${SITE_CONFIG.url}${course.image}`],
    },
    alternates: {
      canonical: courseUrl,
    },
    other: {
      "course:duration": course.duration,
      "course:price": course.price.toString(),
      "course:currency": "MXN",
      "course:category": course.category,
    },
  };
}

/**
 * Genera rutas estáticas para los cursos
 * TODO: Actualizar con lista real de cursos
 */
export async function generateStaticParams() {
  // Mock de slugs - Reemplazar con fetch real
  return [
    { slug: "trabajo-en-alturas" },
    { slug: "espacios-confinados" },
    // Agregar más cursos aquí
  ];
}

/**
 * Página dinámica de curso individual
 */
export default async function CursoPage({ params }: { params: { slug: string } }) {
  const course = await getCourse(params.slug);

  if (!course) {
    notFound();
  }

  // Schema JSON-LD para el curso
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "Cefortte",
      sameAs: SITE_CONFIG.url,
    },
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
    },
    timeRequired: course.duration,
    educationalLevel: "Professional",
    inLanguage: "es-MX",
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Contenido de la página */}
      <div>
        <h1>{course.title}</h1>
        <p>{course.description}</p>

        <div>
          <h2>Duración</h2>
          <p>{course.duration}</p>
        </div>

        <div>
          <h2>Precio</h2>
          <p>${course.price} MXN</p>
        </div>

        <div>
          <h2>Objetivos</h2>
          <ul>
            {course.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Contenido</h2>
          <ul>
            {course.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Certificación</h2>
          <p>{course.certification}</p>
        </div>

        <div>
          <h2>Requisitos</h2>
          <ul>
            {course.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* TODO: Agregar más secciones y diseño */}
      </div>
    </>
  );
}
