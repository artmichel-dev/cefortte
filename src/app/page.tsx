import HeroInicio from "@/components/section/HeroInicio";
import GalleryCards from "@/components/section/GalleryCards";

export default function Home() {
  return (
    <main id="content">
      <section className="relative h-16 w-full"></section>
      <HeroInicio />
      <GalleryCards />
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
