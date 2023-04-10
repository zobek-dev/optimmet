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
    title: "Consultoría en Energía, Eficiencia Energética y SGE para Brass Chile S.A.",
    image_card: ConsultoriaEnEnergia,
    company: "Brass Chile S.A.",
    type: "Capacitación",
    image_modal: ConsultoriaEnEnergia,
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore recusandae, ex alias, laborum placeat ut accusantium accusamus reprehenderit perferendis omnis tempora consectetur voluptatem tempore voluptatum dolore earum dolorem possimus quidem rerum minus. Odio, delectus ipsum! Tempore a quae, ipsum exercitationem deleniti tenetur, voluptates iure vitae nulla cupiditate, laborum voluptatum itaque. Magni explicabo fugiat perspiciatis tenetur corrupti, dolore beatae animi suscipit assumenda deserunt accusantium corporis soluta sequi vitae possimus itaque impedit debitis eos porro vero! Non eius numquam vero laborum repellat amet ullam voluptas officiis totam tempore qui cum expedita cupiditate provident dolore porro voluptate iusto, cumque quaerat, dignissimos quis! Quae!",
  },
  {
    title: "Caracterización Energética e Identificación de Oportunidades de Eficiencia Energética Planta CF",
    image_card: CaracterizacionEnergetica,
    company: "Planta CF",
    type: "E - EE - SGE",
    image_modal: CaracterizacionEnergeticaModal,
    content: "Analisis de los usos y consumos energéticos de Planta Confluencia determinando el desempeño energético del proceso, sus usos significativos de energía y líneas bases. Con estos resultados, se realiza un trabajo colaborativo con el equipo planta a traves talleres de Identificación de Oportunidades de Eficiencia Energética y análisis de Causa Raíz. Finalmente, con todos los antescentes, se construyen Planes de Implementación de Mejora en Eficiencia Energética."
  },
  {
    title: "Análisis de Brechas Cumplimiento Ley de Eficicencia Energética...",
    image_card: AnalisisDeBrechas,
    company: "Anglo American",
    type: "Sustentabilidad",
    image_modal: AnalisisDeBrechas,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde enim veritatis eaque tenetur inventore doloribus laudantium provident praesentium rem ipsam dignissimos velit ratione nihil incidunt facilis recusandae, aspernatur porro? Quae aut nostrum, minima alias praesentium quaerat magnam repellat ab culpa eos, asperiores quasi nihil odio sed explicabo ipsa voluptatibus quam illo autem nemo quibusdam debitis quod. Magni ad hic enim nobis beatae suscipit dolores excepturi voluptatem perferendis nulla dolorum optio necessitatibus unde modi esse, omnis eveniet eligendi provident ex obcaecati, deserunt at iure incidunt. Suscipit debitis quisquam sunt minus doloribus, praesentium numquam dignissimos unde labore ex nulla adipisci magnam!"
  },
  {
    title: "TOVE3 - Codelco Andina",
    image_card: Tove3,
    company: "Codelco Andina",
    type: "E - EE - SGE",
    image_modal: Tove3,
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde impedit minus voluptatum, dolore vitae consequuntur adipisci optio debitis totam reiciendis deleniti ullam esse cumque quia similique itaque nesciunt maxime! Animi, necessitatibus dicta? Recusandae, nemo natus cum, illo praesentium earum sapiente laudantium eaque atque expedita dolorum nisi, cumque iste optio ratione in omnis. Explicabo, animi voluptatem cum beatae sit, maxime, vel reiciendis inventore atque aperiam omnis sint tenetur magnam amet quod eaque. Possimus maiores laborum, ipsum non sapiente accusantium animi? Consequatur, nisi dolor exercitationem labore doloribus cupiditate quidem qui iste veritatis pariatur possimus facere. Magnam debitis, quasi repellendus tempora mollitia consectetur!"
  },
]

export const HomeProyectos = () => {
  return (
    <>
      <section className="py-8 lg:py-24">
        <div className="wrapper">
          <h2 className="text-center font-bold text-[30px] lg:text-[40px] leading-[1.2] mb-2">Proyectos Destacados</h2>
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