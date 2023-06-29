import { DiamondUnderline } from "@/svg";
import { StaticImageData } from "next/image";
import {
  AsesoriasCuadrada,
  ConsultoriasCuadrada,
  DesarrolloProyectosCuadrada,
  CapacitacionesCuadrada
} from "@/images";
import { ServiceCard } from "./Servicios";
import Link from "next/link";

interface IService {
  title: string;
  excerpt: string;
  image: StaticImageData;
  url: string;
}

const services: IService[] = [
  {
    title: "Asesorías en Eficiencia Energética y Gestión de la Energía",
    excerpt:
      "Asesoramos en la Optimización y uso eficiente de la Energía, Desarrollo de Diagnósticos y revisiones Energéticas...",
    image: AsesoriasCuadrada,
    url: "/servicios/asesorias",
  },
  {
    title: "Consultorías Técnicas - Procesos Minero Metalúrgicos",
    excerpt:
      "Apoyamos la Optimización de los procesos de su organización a través del desarrollo de Consultorías Técnicas...",
    image: ConsultoriasCuadrada,
    url: "/servicios/consultorias",
  },
  {
    title: "Desarrollo de Proyectos de Sustentabilidad",
    excerpt:
      "Desarrollamos Inventarios e informes de Huella de Carbono, Análisis de Huella Hídrica, apoyamos la búsqueda...",
    image: DesarrolloProyectosCuadrada,
    url: "/servicios/desarrollo-proyectos",
  },
  {
    title: "Capacitaciones Técnicas",
    excerpt:
      "Generamos el desarrollo de Capacidades en temáticas relacionadas con los proyectos y servicios brindados en las áreas de Energía...",
    image: CapacitacionesCuadrada,
    url: "/servicios/capacitaciones",
  },
];

export const HomeServices = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="wrapper">
        <h2 className="text-center text-[25px] lg:text-[40px] font-bold leading-[1.2]">
          Nuestros <strong className="text-[#FC715E] font-bold">servicios</strong>
        </h2>
        <p className="text-[17px] lg:text-[20px] text-center">
          cómo podemos apoyar a tu empresa
        </p>
        <DiamondUnderline className="mx-auto mt-3" />
        <ul className="max-w-[814px] mx-auto py-12 lg:py-20 flex flex-col gap-8 md:gap-0">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};
