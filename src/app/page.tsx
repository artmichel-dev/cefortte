export default function Home() {
  return (
    <main id="content" className="relative w-full">
      <div className="relative h-16 w-full bg-white"></div>
      
      {/* Contenido de demostración de tipografías */}
      <div className="container mx-auto max-w-4xl space-y-4 px-4 py-8">
        {/* FONT-HEADING */}
        <h1>FONT-HEADING</h1>
        <h1>Etiqueta h1</h1>
        <h2>Etiqueta h2</h2>
        <h3>Etiqueta h3</h3>
        <h4>Etiqueta h4</h4>
        <h5>Etiqueta h5</h5>
        <h6>Etiqueta h6</h6>
        <br />
        <br />
        <br />
        
        {/* FONT-SANS */}
        <h1>FONT-SANS</h1>
        <p>Etiqueta p - Párrafo de texto normal con contenido que puede extenderse a múltiples líneas para mostrar cómo se ve el texto en un párrafo completo.</p>
        <a href="#">Etiqueta a - Enlace</a>
        <span>Etiqueta span - Texto inline</span>
        <strong>Etiqueta strong - Texto en negrita</strong>
        <b>Etiqueta b - Texto en negrita</b>
        <em>Etiqueta em - Texto en cursiva (énfasis)</em>
        <i>Etiqueta i - Texto en cursiva</i>
        <u>Etiqueta u - Texto subrayado</u>
        <mark>Etiqueta mark - Texto resaltado</mark>
        <del>Etiqueta del - Texto tachado</del>
        <s>Etiqueta s - Texto tachado</s>
        <ins>Etiqueta ins - Texto insertado</ins>
        <q>Etiqueta q - Cita corta</q>
        <blockquote>Etiqueta blockquote - Cita larga o bloque de cita que puede extenderse a múltiples líneas para mostrar el formato completo.</blockquote>
        <address>Etiqueta address - Dirección de contacto</address>
        <time dateTime="2026-01-01">Etiqueta time - Fecha y hora</time>
        <dfn>Etiqueta dfn - Definición</dfn>
        <ul>
          <li>Etiqueta li - Elemento de lista desordenada 1</li>
          <li>Etiqueta li - Elemento de lista desordenada 2</li>
          <li>Etiqueta li - Elemento de lista desordenada 3</li>
        </ul>
        <ol>
          <li>Etiqueta li - Elemento de lista ordenada 1</li>
          <li>Etiqueta li - Elemento de lista ordenada 2</li>
          <li>Etiqueta li - Elemento de lista ordenada 3</li>
        </ol>
        <dl>
          <dt>Etiqueta dt - Término de definición</dt>
          <dd>Etiqueta dd - Descripción de definición</dd>
        </dl>
        <div>Etiqueta div - Contenedor genérico</div>
        <section>Etiqueta section - Sección</section>
        <article>Etiqueta article - Artículo</article>
        <aside>Etiqueta aside - Contenido lateral</aside>
        <header>Etiqueta header - Encabezado</header>
        <footer>Etiqueta footer - Pie de página</footer>
        <nav>Etiqueta nav - Navegación</nav>
        <figure>
          <figcaption>Etiqueta figcaption - Leyenda de figura</figcaption>
        </figure>
        <abbr title="Abreviatura">Etiqueta abbr - Abreviatura</abbr>
        <cite>Etiqueta cite - Cita</cite>

        <br />
        <br />
        <br />
        
        {/* FONT-MONO */}
        <h1>FONT-MONO</h1>
        <code>Etiqueta code - Código inline</code>
        <pre>
          Etiqueta pre - Texto preformateado
          con múltiples líneas
          y espacios preservados
        </pre>
        <kbd>Etiqueta kbd - Teclado</kbd>
        <samp>Etiqueta samp - Muestra de salida</samp>
        <var>Etiqueta var - Variable</var>
        <small>Etiqueta small - Texto pequeño</small>
        <sub>Etiqueta sub - Texto subíndice</sub>
        <sup>Etiqueta sup - Texto superíndice</sup>

        {/* ELEMENTOS SIN CONTENIDO DE TEXTO */}
        <hr />
        <br />
      </div>
      <br />
      <br />
    </main>
  );
}
