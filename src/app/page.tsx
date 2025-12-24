import HeroVideoSection from "@/components/section/HeroVideoSection";
import FeaturedCoursesGrid from "@/components/section/FeaturedCoursesGrid";

export default function Home() {
  return (
    <main id="content" className="relative w-full bg-stone-100">
      <div className="relative h-16 w-full bg-white"></div>

      <HeroVideoSection />

      <FeaturedCoursesGrid />
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        <p>TIPOGRAFÍA - SISTEMA BASE (UI)</p>
        <p data-text="micro">p text-micro</p>
        <p data-text="small">p text-small</p>
        <p data-text="body">p text-body</p>
        <p data-text="body-lg">p text-body-lg</p>
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
        <p data-text="display-xxl">p display-xxl</p>
        <p data-text="display-xl">p display-xl</p>
        <p data-text="display-lg">p display-lg</p>
        <p data-text="display-md">p display-md</p>
        <p data-text="display-sm">p display-sm</p>
        <p data-text="title-lg">p title-lg</p>
        <p data-text="title-md">p title-md</p>
        <p data-text="title-sm">p title-sm</p>
        <p data-text="title-lead">p title-lead</p>
        <p data-text="title-highlight">p title-highlight</p>
        <br />
        <br />
      </div>
    </main>
  );
}
