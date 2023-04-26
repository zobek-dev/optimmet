import { AsesoriasCuadrada, ConsultoriasCuadrada, DesarrolloProyectosCuadrada, CapacitacionesCuadrada} from "@/images";
import { DiamondUnderline } from "@/svg";
import { StaticImageData } from "next/image";
import { OtrosCard } from ".";

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

export const OtrosConsultorias = () => {
  return(
    <section className="py-20 overflow-hidden">
      <div className="wrapper">
        <h2 className="text-center font-bold text-[30px] lg:text-[40px] leading-[1.2] mb-2">Otros <strong className="font-bold text-[#FC715E]">Servicios</strong></h2>
        <DiamondUnderline className="mx-auto mb-20"/>
        <ul className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] gap-8">
          {services.map((service, index) => <OtrosCard key={index} service={service} index={index}/>)}
        </ul>
      </div>
    </section>
  )
}