import Link from "next/link";

export default function CursosEspecializados() {
  return (
    <section className="card-padding container max-w-3xl bg-gray-100 text-center">
      <div className="card-padding grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {/* Card 1: Title */}
        <div className="card-padding card-rounded rounded-t-4xl sm:rounded-tl-4xl sm:rounded-tr-4xl group rounded-b-sm sm:col-span-2 sm:rounded-sm lg:col-span-3">
          <h3 className="mx-auto max-w-3xl pt-2 lg:pt-4">Cursos Especializados</h3>
          <p className="card-padding mx-auto max-w-md px-12 md:max-w-2xl lg:max-w-5xl">
            Formación práctica y normativa para
            <span className="font-bold text-gray-800"> equipos técnicos, operativos y de supervisión.</span>
            <br />
            Seleccionamos los cursos más solicitados por la industria para garantizar resultados inmediatos en
            cumplimiento y seguridad.
          </p>
          <Link className="btn-general mx-auto" href="/cursos">
            Ver todos los cursos
            <i className="fas fa-arrow-right ml-2 h-4 w-4 text-gray-50"></i>
          </Link>
        </div>

        {/* Card 2: LOTO */}
        <div className="card-rounded group rounded-sm lg:col-start-1 lg:row-start-2">
          <div className="card-padding mx-auto text-center">
            <b>Bloqueo y Etiquetado (LOTO)</b>
            <p className="card-padding max-w-md px-8">
              Procedimiento crítico para el control de energías peligrosas. Evita activaciones inesperadas.
            </p>
          </div>
          <div className="mt-auto flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="pointer-events-none h-auto max-w-full select-none"
              src="/png/lockout-tagout-loto_01.png"
              alt="Ilustración de procedimiento LOTO"
              loading="lazy"
            />
          </div>
        </div>

        {/* Card 3: Trabajo en Alturas - Columna central, ocupa 2 filas */}
        <div className="card-rounded group rounded-sm lg:col-start-2 lg:row-start-2 lg:row-span-2">
          <div className="card-padding mx-auto text-center">
            <b>Trabajo en Alturas NOM-009</b>
            <p className="card-padding max-w-md px-8">
              Entrenamiento esencial para maniobras seguras en altura. Previene caídas y fortalece la cultura de
              seguridad.
            </p>
          </div>
          <div className="relative mt-auto flex-1 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/png/work-at-heights-nom-009_03.png"
              alt="Trabajador con equipo de seguridad en altura"
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>

        {/* Card 4: Espacios Confinados */}
        <div className="card-rounded group rounded-sm lg:col-start-3 lg:row-start-2">
          <div className="card-padding mx-auto text-center">
            <b>Espacios Confinados</b>
            <p className="card-padding max-w-md px-8">
              Capacitación clave para operaciones en zonas de acceso limitado y rescate seguro.
            </p>
          </div>
          <div className="mt-auto flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="pointer-events-none h-auto max-w-full select-none"
              src="/png/confined-spaces_02.png"
              alt="Ilustración de trabajo en espacios confinados"
              loading="lazy"
            />
          </div>
        </div>

        {/* Card 5: Sustancias Químicas */}
        <div className="card-rounded lg:rounded-bl-4xl group rounded-sm lg:col-start-1 lg:row-start-3">
          <div className="card-padding mx-auto text-center">
            <b>Sustancias Químicas y GHS</b>
            <p className="card-padding max-w-md px-8">
              Entrenamiento orientado al manejo seguro de químicos e identificación GHS.
            </p>
          </div>
          <div className="mt-auto flex justify-center px-4 pb-4 pt-3 sm:px-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/png/chemical-substances-ghs_04.png"
              alt="Contenedores y símbolos de sustancias químicas GHS"
              className="pointer-events-none h-auto max-w-full select-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* Card 6: Montacargas */}
        <div className="card-rounded lg:rounded-br-4xl group rounded-sm lg:col-start-3 lg:row-start-3">
          <div className="card-padding mx-auto text-center">
            <b>Montacargas y Plataformas</b>
            <p className="card-padding max-w-md px-8">
              Formación práctica para maniobrar equipos de carga con precisión.
            </p>
          </div>
          <div className="mt-auto flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/png/forklifts-and-aerial-platforms_05.png"
              alt="Operador manejando montacargas industrial"
              className="pointer-events-none h-auto max-w-full select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
