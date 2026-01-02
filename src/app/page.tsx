import HeroInicio from "@/components/section/HeroInicio";
import GalleryCards from "@/components/section/GalleryCards";

// Datos del contenido (podrían venir de un CMS, API, o archivo de constantes)

const homeContent = {
  hero: {
    title: "Capacitación para Empresas",
    description: "Formación alineada con estándares globales de seguridad.",
    primaryCta: {
      text: "Cotizar ahora",
      href: "/cotizacion",
    },
    secondaryCta: {
      text: "Ver cursos",
      href: "/cursos",
    },
    video: {
      src: "https://cdn.zupernova.dev/cefortte/hls/hero-color.playlist.m3u8",
      poster: "https://cdn.zupernova.dev/cefortte/jpg/hero-poster.jpg",
    },
  },
  gallery: {
    title: "Cursos especializados",
    subtitle: (
      <>
        Formación práctica y normativa para equipos técnicos, operativos y de supervisión.
        <br />
        Seleccionamos los cursos más solicitados por la industria para garantizar resultados inmediatos en cumplimiento
        y seguridad.
      </>
    ),
    cta: {
      text: "Descubre más",
      href: "/cursos",
    },
    cards: [
      {
        title: "Seguridad operativa",
        href: "/cursos/seguridad-operativa",
        image: "/card-bg_courses_safety-operational_405x830.webp",
      },
      {
        title: "Maquinaria y equipos críticos",
        href: "/cursos/maquinaria-equipos",
        image: "/card-bg_courses_critical-machinery_405x830.webp",
      },
      {
        title: "Sustancias Químicas y Atmósferas peligrosas",
        href: "/cursos/sustancias-quimicas",
        image: "/card-bg_courses_chemical-atmospheres_405x830.webp",
      },
      {
        title: "Brigadas y Protección civil",
        href: "/cursos/brigadas-proteccion-civil",
        image: "/card-bg_courses_emergency-response_405x830.webp",
      },
      {
        title: "Cursos basados en normas NOM-STPS",
        href: "/cursos/normas-stps",
        image: "/card-bg_courses_nom-stps_405x830.webp",
      },
      {
        title: "Gestión y Cultura de Seguridad",
        href: "/cursos/gestion-cultura",
        image: "/card-bg_courses_safety-culture_405x830.webp",
      },
      {
        title: "Logística y Almacenes",
        href: "/cursos/logistica-almacenes",
        image: "/card-bg_courses_logistics-warehouse_405x830.webp",
      },
      {
        title: "Construcción",
        href: "/cursos/construccion",
        image: "/card-bg_courses_construction_405x830.webp",
      },
    ],
  },
};

export default function Home() {
  return (
    <main id="content">
      <section className="relative h-16 w-full"></section>
      <HeroInicio
        title={homeContent.hero.title}
        description={homeContent.hero.description}
        primaryCta={homeContent.hero.primaryCta}
        secondaryCta={homeContent.hero.secondaryCta}
        video={homeContent.hero.video}
      />

      <GalleryCards
        title={homeContent.gallery.title}
        subtitle={homeContent.gallery.subtitle}
        cta={homeContent.gallery.cta}
        cards={homeContent.gallery.cards}
      />

      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <p>TIPOGRAFÍA - SISTEMA BASE (UI)</p>
        <code>p text-micro</code>
        <br />
        <small>p text-small</small>
        <p>p text-body</p>
        <p className="text-body-lg">p text-body-lg</p>
        <br />
        <h6>Etiqueta h6</h6>
        <h5>Etiqueta h5</h5>
        <h4>Etiqueta h4</h4>
        <h3>Etiqueta h3</h3>
        <h2>Etiqueta h2</h2>
        <h1>Etiqueta h1</h1>
        <p>Etiqueta p - texto normal</p>
        <a href="#">Etiqueta a - Enlace</a>
        <br />
        <span>Etiqueta span - Texto inline</span>
        <br />
        <strong>Etiqueta strong - Texto en negrita</strong>
        <br />
        <b>Etiqueta b - Texto en negrita</b>
        <br />
        <br />

        <p>TIPOGRAFÍA - SISTEMA EDITORIAL (Marketing)</p>
        <p className="text-display-xxl">p display-xxl</p>
        <p className="text-display-xl">p display-xl</p>
        <p className="text-display-lg">p display-lg</p>
        <p className="text-display-md">p display-md</p>
        <p className="text-display-sm">p display-sm</p>
        <p className="text-title-lg">p title-lg</p>
        <p className="text-title-md">p title-md</p>
        <p className="text-title-sm">p title-sm</p>
        <p className="text-lead">p title-lead</p>
        <p className="text-highlight">p title-highlight</p>
        <br />
        <br />
      </div>
    </main>
  );
}
