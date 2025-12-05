import Link from "next/link";
import Image from "next/image";

export default function FeaturedCoursesGrid() {
  const courses = [
    {
      id: 1,
      title: "Bloqueo y Etiquetado (LOTO)",
      description:
        "Procedimiento crítico para el control de energías peligrosas. Evita activaciones inesperadas.",
      image: "/png/lockout-tagout-loto_01.png",
      href: "/cursos/bloqueo-etiquetado-loto",
      gridPosition: "lg:col-start-1 lg:row-start-1",
      roundedClasses: "rounded-t-4xl rounded-b-sm md:rounded-sm md:rounded-tl-4xl",
    },
    {
      id: 2,
      title: "Espacios Confinados",
      description:
        "Capacitación clave para operaciones en zonas de acceso limitado y rescate seguro.",
      image: "/png/confined-spaces_02.png",
      href: "/cursos/espacios-confinados",
      gridPosition: "lg:col-start-1 lg:row-start-2",
      roundedClasses: "rounded-sm md:rounded-tr-4xl lg:rounded-tr-sm lg:rounded-bl-4xl",
    },
    {
      id: 3,
      title: "Trabajo en Alturas NOM-009",
      description:
        "Entrenamiento esencial para maniobras seguras en altura. Previene caídas y fortalece la cultura de seguridad.",
      image: "/png/work-at-heights-nom-009_03.png",
      href: "/cursos/trabajo-alturas-nom-009",
      gridPosition: "lg:col-start-2 lg:row-span-2",
      roundedClasses: "rounded-sm",
      isLarge: true,
    },
    {
      id: 4,
      title: "Sustancias Químicas y GHS",
      description: "Entrenamiento orientado al manejo seguro de químicos e identificación GHS.",
      image: "/png/chemical-substances-ghs_04.png",
      href: "/cursos/sustancias-quimicas-ghs",
      gridPosition: "lg:col-start-3 lg:row-start-1",
      roundedClasses: "rounded-sm lg:rounded-tr-4xl",
    },
    {
      id: 5,
      title: "Montacargas y Plataformas",
      description: "Formación práctica para maniobrar equipos de carga con precisión.",
      image: "/png/forklifts-and-aerial-platforms_05.png",
      href: "/cursos/montacargas-plataformas",
      gridPosition: "lg:col-start-3 lg:row-start-2",
      roundedClasses:
        "rounded-t-sm rounded-b-4xl md:rounded-b-sm md:rounded-bl-4xl lg:rounded-bl-sm lg:rounded-br-4xl",
    },
  ];

  return (
    <section className="w-full bg-stone-100">
      {/* Cursos Especializados */}
      <div className="container mx-auto my-4 max-w-3xl lg:my-8">
        <div className="p-4 lg:p-8">
          <h3 className="mt-2 max-w-xl text-stone-900">
            Cursos Especializados para tus Operaciones
          </h3>
          <p className="my-4 text-stone-800 lg:my-8">
            Formación práctica y normativa para
            <b> equipos técnicos, operativos y de supervisión.</b>
            <br />
            Seleccionamos los cursos más solicitados por la industria para garantizar resultados
            inmediatos en cumplimiento y seguridad.
          </p>
          <hr className="border-stone-300" />
        </div>

        <div className="grid grid-cols-1 gap-4 px-4 text-lg md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:px-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={course.href}
              className={`group relative ${course.gridPosition}`}
            >
              <div
                className={`absolute inset-px bg-stone-50 transition-colors duration-300 group-hover:bg-white ${course.roundedClasses}`}
              ></div>
              <div className="relative flex h-full flex-col overflow-hidden">
                <div
                  className={`px-8 pt-8 sm:px-10 sm:pt-10 ${
                    course.isLarge ? "relative z-10 pb-3 sm:pb-0" : ""
                  }`}
                >
                  <p className="mb-2 text-balance text-center text-lg font-semibold tracking-tight text-stone-900 lg:text-left">
                    {course.title}
                  </p>
                  <p className="mx-auto mb-2 max-w-md text-balance text-center text-sm/6 text-stone-800 lg:text-left">
                    {course.description}
                  </p>
                </div>
                {course.isLarge ? (
                  <div className="relative min-h-[300px] w-full grow">
                    <div className="absolute inset-x-0 bottom-0 top-10 overflow-hidden rounded-sm lg:rounded-tr-4xl">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={`flex w-full flex-1 items-end ${
                      course.id === 1 ? "justify-center pt-10 sm:px-0 lg:pb-0" : "pt-6"
                    }`}
                  >
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={300}
                      className="w-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
              </div>
              <div
                className={`pointer-events-none absolute inset-px shadow-sm outline outline-black/5 ${course.roundedClasses}`}
              ></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
