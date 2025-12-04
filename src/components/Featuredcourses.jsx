import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Trabajo en Alturas",
    description:
      "Capacitación certificada en prevención de riesgos para trabajos en altura conforme a normativa vigente.",
    icon: "fa-arrow-up",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    badge: "NOM-009",
    href: "/cursos/trabajo-en-alturas",
  },
  {
    id: 2,
    title: "Espacios Confinados",
    description:
      "Procedimientos de seguridad y protocolos de entrada para trabajos en espacios restringidos.",
    icon: "fa-box",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    href: "/cursos/espacios-confinados",
  },
  {
    id: 3,
    title: "Bloqueo y Etiquetado (LOTO)",
    description:
      "Control de energías peligrosas mediante procedimientos de bloqueo y señalización efectiva.",
    icon: "fa-lock",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    href: "/cursos/bloqueo-etiquetado",
  },
  {
    id: 4,
    title: "Montacargas y Plataformas Elevadoras",
    description:
      "Operación segura y certificación para manejo de equipos de elevación y transporte de carga.",
    icon: "fa-truck-moving",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    href: "/cursos/montacargas-plataformas",
  },
  {
    id: 5,
    title: "Sustancias Químicas y GHS",
    description:
      "Manejo seguro de productos químicos y comprensión del Sistema Globalmente Armonizado.",
    icon: "fa-flask",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    href: "/cursos/sustancias-quimicas",
  },
  {
    id: 6,
    title: "Brigadas y Protección Civil",
    description:
      "Formación de brigadas de emergencia y protocolos de respuesta ante situaciones críticas.",
    icon: "fa-users",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    href: "/cursos/brigadas-proteccion-civil",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="w-full py-16 bg-stone-100">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Cursos Destacados
          </Badge>
          <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Cursos Especializados para tus Operaciones
          </h2>
          <h4 className="font-heading mb-4 text-xl font-semibold text-brand-700">
            Formación práctica y normativa para equipos técnicos, operativos y de supervisión.
          </h4>
          <p className="mx-auto max-w-3xl text-gray-600">
            Seleccionamos los cursos más solicitados por la industria para garantizar resultados
            inmediatos en cumplimiento y seguridad.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group transition-all duration-300 hover:bg-stone-50 cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${course.iconBg}`}
                  >
                    <i className={`fas ${course.icon} text-xl ${course.iconColor}`}></i>
                  </div>
                  {course.badge && (
                    <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                      {course.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>

              <CardFooter>
                <Link
                  href={course.href}
                  className="bg-brand-700 hover:bg-brand-600 active:bg-brand-700 rounded-xs inline-block inline-flex w-max items-center justify-center my-2 px-4 py-2 text-sm font-bold tracking-wide text-stone-50 transition-colors"
                >
                  <span className="text-base font-medium">Ver detalles</span>
                  <i className="fas fa-arrow-right ml-1 h-4 w-4"></i>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Principal */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-brand-700 hover:bg-brand-600 px-8 group">
            <Link href="/cursos">
              <span className="font-heading text-base font-medium uppercase">
                Ver todos los cursos
              </span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
