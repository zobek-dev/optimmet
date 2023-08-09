import { DiamondUnderline } from "@/svg"
import { AnalisisDeBrechas, CaracterizacionEnergetica, CaracterizacionEnergeticaModal, ConsultoriaEnEnergia, Tove3 } from "@/images"
import { Project } from "@/components"
import { StaticImageData } from "next/image"

interface IProject {
  title: string,
  image_card: StaticImageData,
  company: string,
  type: string,
  image_modal: StaticImageData,
  content: string
}

const proyectos: IProject[] = [
  {
    title: "Consultoría de Eficiencia Energética y Gestión de la Energía en Brass Chile S.A.",
    image_card: ConsultoriaEnEnergia,
    company: "Brass Chile S.A.",
    type: "Capacitación",
    image_modal: ConsultoriaEnEnergia,
    content: "Consultoría especializada para generación de Capacidades en el ámbito de Eficiencia Energética y la Gestión de la Energía para el equipo de Jefes de disciplinas en Brass Chile. Desarrollando un diagnóstico de necesidades, generación de competencias y formación en la Metodologías existentes para la EED.",
  },
  {
    title: "Caracterización Energética e Identificación de Oportunidades de Eficiencia Energética Planta CF",
    image_card: CaracterizacionEnergetica,
    company: "Planta CF",
    type: "E - EE - SGE",
    image_modal: CaracterizacionEnergetica,
    content: "Análisis de los usos y consumos energéticos de la Planta Confluencia determinando el desempeño energético del proceso, sus usos significativos de energía y líneas bases. Con estos resultados, se realiza un trabajo colaborativo con el equipo planta a través talleres de Identificación de Oportunidades de Eficiencia Energética y análisis de Causa Raíz. Finalmente, con todos los antecedentes, se construyen Planes de Implementación de Mejora en Eficiencia Energética."
  },
  {
    title: "Análisis de Brechas Cumplimiento Ley de Eficiencia Energética Anglo American",
    image_card: AnalisisDeBrechas,
    company: "Anglo American",
    type: "Sustentabilidad",
    image_modal: AnalisisDeBrechas,
    content: "Dada la entrada en vigencia de la Ley 21.305 de Eficiencia Energética y la obligación de grandes consumidores de implementar un Sistema de Gestión de Energía. Se desarrolla un análisis de brechas, recopilando y analizando información de gestión de la energía de la organización, determinando el nivel actual de cumplimiento y brechas respecto a esta normativa. Se establecieron hallazgos y recomendaciones de un plan de acción para dar cumplimiento íntegro a la Ley."
  },
  {
    title: "TOVE3 - Codelco Andina",
    image_card: Tove3,
    company: "Codelco Andina",
    type: "E - EE - SGE",
    image_modal: Tove3,
    content: "Aplicación de la Norma Corporativa de Eficiencia Energética NCC32 de Codelco para la implementación de eficiencia energética en el diseño de proyectos de inversión en la división Andina. Desarrollo de actividades claves multidisciplinarias, aplicación de las metodologías y preparación de los entregables solicitados."
  },
]

export const HomeProyectos = () => {
  return (
    <>
      <section className="py-12 lg:py-24">
        <div className="wrapper">
          <h2 className="text-center font-bold text-[30px] lg:text-[40px] leading-[1.2] mb-2">Proyectos <strong className="font-bold text-[#FC715E]">Destacados</strong></h2>
          <p className="font-light text-[17px] lg:text-[20px] text-center mb-2">Concoce nuestros proyectos destacados</p>
          <DiamondUnderline className="mx-auto mb-8"/>
          <ul tabIndex={-1} className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {proyectos && proyectos.map((project, index)=> (
              <Project key={index} project={project}/>
            ))}
          </ul>
        </div>
      </section>
    </> 
  )
}