import { AsesoriasCuadrada, CapacitacionesCuadrada, ConsultoriasCuadrada, DesarrolloProyectosCuadrada } from "@/images";
import { StaticImageData } from "next/image";

const services = [
  {
    title: "Asesorías en Eficiencia Energética y Gestión de la Energía",
    image: AsesoriasCuadrada,
    excerpt: "Asesoramos en la Optimización y uso eficiente de la Energía, Desarrollo de Diagnósticos y revisiones Energéticas...",
    url: "/servicios/asesorias"
  },
  {
    title: "Consultorías Técnicas - Procesos Mineros Metalúrgicos",
    image: AsesoriasCuadrada,
    excerpt: "Apoyamos la Optimización de los procesos de su organización a través del desarrollo de consultorías técnicas.",
    url: "/servicios/consultorias"
  }
]

export const ServiciosList = () => {
  return(
   <section>
    <ul>
    </ul>
   </section>
  )
}