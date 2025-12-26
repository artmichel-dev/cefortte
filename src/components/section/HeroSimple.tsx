"use client";

export default function HeroSimple() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-green-800">
        {/* Header Title */}
        <div className="container max-w-3xl bg-green-700">
          <p>TIPOGRAFÍA - SISTEMA BASE (UI)</p>
          <p data-text="micro">p text-micro</p>
          <p data-text="small">p text-small</p>
          <p data-text="body">p text-body</p>
          <p data-text="body-lg">p text-body-lg</p>
          <h6>Etiqueta h6</h6>
          <h5>Etiqueta h5</h5>
          <h4>Etiqueta h4</h4>
          <h3>Etiqueta h3</h3>
          <h2>Etiqueta h2</h2>
          <h1>Etiqueta h1</h1>
          <p>Etiqueta p - texto normal</p>
          <a href="#">Etiqueta a - Enlace</a>
          <span>Etiqueta span - Texto inline</span>
          <strong>Etiqueta strong - Texto en negrita</strong>
          <b>Etiqueta b - Texto en negrita</b>
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

          <div className="p-2 bg-green-600">
            <h2 className="text-black">Pasos</h2>
            <p className="mt-6 text-green-950">
              Bienvenido al entrenamiento de <b>PASOS</b>, este curso te ayudará a descubrir tu propósito en Cristo para
              que vivas la vida para la cual Dios te creó, y puedas crecer en tu fe y en tu relación con Dios y los
              demás.
            </p>
          </div>
          <hr className="border-green-300" />
          <div className="px-6 py-4 bg-green-500">
            <p className="text-green-950">
              <b className="text-green-950">A través de 3 Pasos serás equipado para:</b>
            </p>
          </div>
          {/* Tarjetas de beneficios */}
          <div className="container max-w-3xl mx-auto grid grid-cols-1 gap-1 bg-red-800">
            <div className="p-2">
              <div className="rounded-lg bg-white/15 ring-1 ring-inset ring-white/20 px-5 py-4 hover:bg-white/25 group">
                <div className="mt-2">
                  <div className="flex gap-x-2 py-2">
                    <img
                      className="mt-0.5 h-5 w-5 flex-none"
                      src="https://cdn.vinonuevo.com/icon/check-icon.svg"
                      alt="Check"
                    />
                    <p className="line-clamp-3 text-neutral-800 group-hover:text-neutral-600">
                      Conectar con la iglesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="rounded-lg bg-white/15 ring-1 ring-inset ring-white/20 px-5 py-4 hover:bg-white/25 group">
                <div className="mt-2">
                  <div className="flex gap-x-2 py-2">
                    <img
                      className="mt-0.5 h-5 w-5 flex-none"
                      src="https://cdn.vinonuevo.com/icon/check-icon.svg"
                      alt="Check"
                    />
                    <p className="line-clamp-3 text-neutral-800 group-hover:text-neutral-600">
                      Descubrir las fortalezas de tu diseño y propósito
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="rounded-lg bg-white/15 ring-1 ring-inset ring-white/20 px-5 py-4 hover:bg-white/25 group">
                <div className="mt-2">
                  <div className="flex gap-x-2 py-2">
                    <img
                      className="mt-0.5 h-5 w-5 flex-none"
                      src="https://cdn.vinonuevo.com/icon/check-icon.svg"
                      alt="Check"
                    />
                    <p className="line-clamp-3 text-neutral-800 group-hover:text-neutral-600">
                      Usar los dones que Dios te dio para hacer la diferencia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-yellow-900">
            <h5 className="text-neutral-100">Instrucciones:</h5>
            <p className="text-neutral-500">
              Después de completar el registro, serás redirigido a otra página donde encontrarás un video
              correspondiente a la <b>Clase 1</b>.
            </p>
          </div>
          <div className="p-2 bg-yellow-800">
            <div className="rounded-lg bg-neutral-900 px-5 py-4 hover:bg-neutral-800 group">
              <h6 className="flex items-center justify-between text-neutral-200 group-hover:text-neutral-50">
                Responder preguntas
              </h6>
              <div className="mt-2">
                <div className="flex gap-x-2 py-2">
                  <img
                    className="mt-0.5 h-5 w-5 flex-none"
                    src="https://cdn.vinonuevo.com/icon/check-icon.svg"
                    alt="Check"
                  />
                  <p className="line-clamp-3 text-neutral-500 group-hover:text-neutral-300">
                    Después de ver el video de la <b>Clase 1</b>, encontrarás un par de preguntas relacionadas con el
                    contenido del video.
                  </p>
                </div>
                <div className="flex gap-x-2 py-2">
                  <img
                    className="mt-0.5 h-5 w-5 flex-none"
                    src="https://cdn.vinonuevo.com/icon/check-icon.svg"
                    alt="Check"
                  />
                  <p className="line-clamp-3 text-neutral-500 group-hover:text-neutral-300">
                    Lee cuidadosamente cada pregunta y proporciona respuestas precisas y claras.
                  </p>
                </div>
                <div className="flex gap-x-2 py-2">
                  <img
                    className="mt-0.5 h-5 w-5 flex-none"
                    src="https://cdn.vinonuevo.com/icon/check-icon.svg"
                    alt="Check"
                  />
                  <p className="line-clamp-3 text-neutral-500 group-hover:text-neutral-300">
                    Asegúrate de revisar tus respuestas antes de enviar el formulario.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-yellow-700">
            <div className="rounded-lg bg-neutral-900 px-5 py-4 hover:bg-neutral-800 group">
              <h6 className="flex items-center justify-between text-neutral-200 group-hover:text-neutral-50">
                Recoge tu libro de PASOS
              </h6>
              <div className="mt-2">
                <div className="flex gap-x-2 py-2">
                  <img
                    className="mt-0.5 h-5 w-5 flex-none"
                    src="https://cdn.vinonuevo.com/icon/check-icon.svg"
                    alt="Check"
                  />
                  <p className="line-clamp-3 text-neutral-500 group-hover:text-neutral-300">
                    Una vez que hayas enviado las respuestas a las preguntas, recibirás una confirmación para recoger tu
                    libro de <b>PASOS</b> en el módulo de información de tu campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-yellow-600">
            <div className="rounded-lg bg-neutral-900 px-5 py-4 hover:bg-neutral-800 group">
              <h6 className="flex items-center justify-between text-neutral-200 group-hover:text-neutral-50">
                Continuación con la Clase 2
              </h6>
              <div className="mt-2">
                <div className="flex gap-x-2 py-2">
                  <img
                    className="mt-0.5 h-5 w-5 flex-none"
                    src="https://cdn.vinonuevo.com/icon/check-icon.svg"
                    alt="Check"
                  />
                  <p className="line-clamp-3 text-neutral-500 group-hover:text-neutral-300">
                    Una vez que tengas tu libro de <b>PASOS</b>, estarás listo para continuar con la clase 2.
                  </p>
                </div>
                <div className="flex gap-x-2 py-2">
                  <img
                    className="mt-0.5 h-5 w-5 flex-none"
                    src="https://cdn.vinonuevo.com/icon/check-icon.svg"
                    alt="Check"
                  />
                  <p className="line-clamp-3 text-neutral-500 group-hover:text-neutral-300">
                    Si tienes alguna pregunta adicional, no dudes en contactarnos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
