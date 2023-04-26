import { AsesoriasCuadrada, CapacitacionesCuadrada, ConsultoriasCuadrada, DesarrolloProyectosCuadrada } from "@/images";
import { StaticImageData } from "next/image";
import { ServiceCard } from "@/components/Servicios"


interface IService{
  title: string,
  image: StaticImageData,
  excerpt: string,
  url: string
}
const services: IService[] = [
  {
    title: "Asesorías en Eficiencia Energética y Gestión de la Energía",
    image: AsesoriasCuadrada,
    excerpt: "Asesoramos en la Optimización y uso eficiente de la Energía, Desarrollo de Diagnósticos y revisiones Energéticas...",
    url: "/servicios/asesorias"
  },
  {
    title: "Consultorías Técnicas - Procesos Minero Metalúrgicos",
    image: ConsultoriasCuadrada,
    excerpt: "Apoyamos la Optimización de los procesos de su organización a través del desarrollo de Consultorías Técnicas...",
    url: "/servicios/consultorias"
  },
  {
    title: "Desarrollos de Proyectos de Sustentabilidad",
    image: DesarrolloProyectosCuadrada,
    excerpt: "Desarrollamos Inventarios e informes de Huella de Carbono, Análisis de Huella Hídrica, apoyamos la búsqueda...",
    url: "/servicios/desarrollo-proyectos"
  },
  {
    title: "Capacitaciones Técnicas",
    image: CapacitacionesCuadrada,
    excerpt: "Generamos el desarrollo de Capacidades en temáticas relacionadas con los proyectos y servicios brindados en las áreas de Energía...",
    url: "/servicios/capacitaciones"
  },
]

export const ServiciosList = () => {
  return(
   <section className="wrapper">
    <ul className="max-w-[814px] mx-auto py-12 lg:py-20 flex flex-col gap-8 md:gap-0">
      {services.map((service, index) => <ServiceCard key={index} service={service} index={index}/>)}
    </ul>
   </section>
  )
}