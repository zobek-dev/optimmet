import { DiamondUnderline } from "@/svg"
import { StaticImageData } from "next/image"
import { AsesoriasCard, ConsultoriasCard, DesarrollosCard, CapacitacionesCard } from "@/images"
import Link from "next/link"

interface IService{
  title: string,
  excerpt: string,
  image: StaticImageData
  url: string
}

const services: IService[] = [
  {
    title: 'Asesorías en Eficiencia Energética y Gestión de la Energía',
    excerpt: 'Asesoramos en la Optimización y uso eficiente de la Energía, Desarrollo de Diagnósticos y revisiones Energéticas...',
    image: AsesoriasCard,
    url: '/servicios/asesorias'
  },
  {
    title: 'Consultorías Técnicas - Procesos Minero Metalúrgicos',
    excerpt: 'Apoyamos la Optimización de los procesos de su organización a través del desarrollo de Consultorías Técnicas...',
    image: ConsultoriasCard,
    url: '/servicios/consultorias'
  },
  {
    title: 'Desarrollo de Proyectos de Sustentabilidad',
    excerpt: 'Desarrollamos Inventarios e informes de Huella de Carbono, Análisis de Huella Hídrica, apoyamos la búsqueda...',
    image: DesarrollosCard,
    url: '/servicios/desarrollo-proyectos'
  },
  {
    title: 'Capacitaciones Técnicas',
    excerpt: 'Generamos el desarrollo de Capacidades en temáticas relacionadas con los proyectos y servicios brindados en las áreas de Energía...',
    image: CapacitacionesCard,
    url: '/servicios/capacitaciones'
  },
]

export const HomeServices = () => {
  return(
    <section className="py-12 lg:py-20">
      <div className="wrapper">
        <h2 className="text-center text-[25px] lg:text-[40px] font-bold leading-[1.2]">
          Nuestros <strong className="text-[#FC715E] font-bold">servicios</strong>
        </h2>
        <p className="text-[17px] lg:text-[20px] text-center">cómo podemos apoyar a tu empresa</p>
        <DiamondUnderline className="mx-auto mt-3"/>
        <ul className="max-w-[730px] mx-auto flex flex-col items-center my-12">
          {services && services.map(
            (service, index) => (
              <li key={index}>
                <Link href={service.url} className="group">
                  <div className={`flex flex-col items-center ${index % 2 == 0 ? 'md:flex-row':'md:flex-row-reverse'}`}>
                    <img src={service.image.src} alt={service.title} width={service.image.width} height={service.image.height} loading="lazy" className="rounded-[18px] object-cover object-center aspect-square"/>
                    <div className={`bg-white transtion-colors duration-200 ease-in-out group-hover:bg-[#62CFF4] p-4 w-[246px] md:w-[unset] md:min-w-[570px] h-max flex flex-col md:flex-row md:items-end border-[1.5px] border-[#62CFF4] ${index % 2 == 0 ? 'translate-x-[32px] -translate-y-[90px] md:translate-y-0 md:-translate-x-[53px] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px]':'-translate-x-[32px] -translate-y-[90px] md:translate-y-0 md:translate-x-[53px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px]'}`}>
                      <div className="max-w-[500px]">
                        <h3 className="text-[#62cff4] transtion-colors duration-200 ease-in-out group-hover:text-[#fff] font-bold leading-[1.2] mb-3 text-[23px]">{service.title}</h3>
                        <p className="text-[15px] transtion-colors duration-200 ease-in-out group-hover:text-[#fff] leading-[1.2] font-light">{service.excerpt}</p>
                      </div>
                      <span className="flex-1 flex flex-row-reverse items-center gap-1">
                        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" className="text-[#62CFF4] group-hover:text-white" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3L12 10.5L3 18" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                        </svg>
                        <span className="text-white hidden group-hover:block text-[10px] whitespace-nowrap">
                          Conoce más
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>  
    </section>
  )
}