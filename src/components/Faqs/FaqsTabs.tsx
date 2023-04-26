import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface IFaq{
  question: string;
  answer: string;
}
interface IconProp{
  id: number;
  open: number;
}

const faqs: IFaq[]= [
  {
    question: "a. ¿Cualquier empresa puede aplicar Eficiencia Energética?",
    answer: "<p>Sí. Aplicar eficiencia energética es utilizar los recursos energéticos de manera responsable. Eso puede ser desde capacitar a los trabajadores/operadores  y mejorar las estrategias de consumo hasta un cambio de tecnología (inversión). Por lo tanto, cualquier empresa puede mejorar cómo utiliza su energía, independiente de su magnitud.</p>"
  },
  {
    question: "b. ¿Cómo se mide la Eficiencia Energética?",
    answer: "<p>Existen indicadores de Eficiencia Energética denominado Consumo Específico de la Energía - CEE o Indicador de Desempeño Energético - IDE,  que relacionan cuánta energía se necesita para fabricar una unidad de producto o para desarrollar un servicio.</p> <p>Utilización eficiente de un vector o recurso energético. Sin embargo, de acuerdo con el contexto,en algunas ocasiones en forma explícita, también se interpretará como el rendimiento de la energía, es decir, como el cociente entre la cantidad de producto, servicio o trabajo generado, y la energía consumida para ese efecto.</p>"
  },
  {
    question: "c. ¿Qué requisitos normativos aplican a la eficiencia energética ?",
    answer: "<p>Se han publicado diversas normas de sistemas de gestión en diversas áreas, siendo las más utilizadas:</p><ul><li>Norma ISO 9001:2015  sobre gestión de calidad</li><li>Norma ISO 14001:2015 sobre gestión medioambiental. </li><li>Norma ISO 50001:2018 que establece los requisitos que debe poseer un Sistema de Gestión Energética</li><li>Norma ISO 50006:2014 establece los indicadores energéticos como medida del desempeño energética</li></ul><p>Además, en chile se tiene:</p><ul><li>Ley N°21.305 Sobre Eficiencia Energética (Art 2°) </li><li>Decreto Supremo N°163 Establece criterios para determinar empresas que deberán reportar anualmente su información energética, conforme a lo dispuesto en el artículo 2° de la ley N° 21.305.</li><li>Decreto Supremo N°28: Reglamento de Aplicación ley 21.305 y plazos de aplicación y revisión de esta</li></ul>"
  },
  {
    question: "d. ¿En qué consiste la ley 21.305 y cómo afecta a las empresas?",
    answer: "<p>La ley de Eficiencia Energética busca incentivar el uso racional y eficiente de los recursos energéticos, para propender a la reducción de externalidades ambientales y sociales, al mismo tiempo a la disminución de costos y consumo, mejorando la seguridad energética y contribuyendo a la competitividad y por ende al desarrollo sostenible del país.Esta Ley define a los Consumidores con Capacidad de Gestión de Energía CCGE aquellas empresas con consumos anuales > 50 Tcal, año calendario anterior. Art. 2</p><p>Los CCGE tienen la Obligación Legal de implementar uno o más Sistemas de Gestión de la Energía, cubriendo al menos un 80% del consumo total final. Anualmente, deben informar</p><ul><li>Indicadores Intensidad Energética</li><li>Consumo Energía para Uso Final</li><li>Oportunidades y acciones EE realizadas y Proyectadas</li><li>Cumplimiento del SGE y constatación de la mejora del desempeño energético.</li></ul>"
  },
  {
    question: "e. ¿Qué plazos impone la Ley 21.305?",
    answer: "<p>La RESOLUCIÓN 13 EXENTA declara los siguientes plazos contenidos en la Ley 21.305:</p><ul><li><strong className=\"text-[#62CFF4] font-bold\">Reporte Energético:</strong> Anualmente las empresas deben informar sus consumos e intensidad energética (Consumo/producto) del año calendario anterior, para que el ministerio de Energía identifique las que tienen consumos sobre las 50Tcal</li><li><strong className=\"text-[#62CFF4] font-bold\">Listado Consumidores con Capacidad de Gestión (CCGE):</strong> Dentro de los 60 días posterior a la etapa de reporte energético, el Ministerio de Energía publicará en el Diario Oficial la resolución que fije el listado de los consumidores que serán catalogados como CCGE</li><li><strong className=\"text-[#62CFF4] font-bold\">Implementación de SGE:</strong> dentro de un plazo no superior a 30 días hábiles contados desde la publicación del Listado CCGE, se deberá comunicar al Ministerio de Energía y a la SEC, si implementará uno o más SGE certificados o no certificados</li><li><strong className=\"text-[#62CFF4] font-bold\">Nombramiento Gestor Energético:</strong> dentro del plazo de 40 días hábiles contados desde la publicación desde la publicación del Listado CCGE, se deberá deberán comunicar, al Ministerio de Energía y a la SEC, lo dispuesto en el artículo 32 del Reglamento, referente al nombramiento del Gestor Energético del CCGE</li></ul>"
  },
  {
    question: "f. ¿En qué consiste la norma ISO 50001?",
    answer: "<p>La norma ISO 50001 determina los requisitos que debe incluir un Sistema de Gestión Energética, con el fin de realizar mejoras continuas y sistemáticas del rendimiento energético de las organizaciones. El SGE que describe se basa en el marco de mejora continua “Planificar-Hacer-Verificar-Actuar” (ISO 50001:2018)</p><ul><li><strong className=\"font-bold\">Planificar:</strong>  establecer la política energética y el equipo de gestión de la energía, considerar las acciones para abordar los riesgos y las oportunidades</li><li><strong className=\"font-bold\">Hacer:</strong> implementar planes de acción, controles operacionales y de mantenimiento, y la comunicación, asegurar la competencia y considerar el desempeño energético en el diseño y la adquisición.</li><li><strong className=\"font-bold\">Verificar:</strong> realizar el seguimiento, medir, analizar, evaluar, auditar y dirigir las revisiones por la dirección del desempeño energético y del SGEn</li><li><strong className=\"font-bold\">Actuar:</strong> tomar acción para abordar las no conformidades, y mejorar continuamente el desempeño energético y el SGEn.</li></ul>"
  },
  {
    question: "b. ¿Cómo se mide la Eficiencia Energética?",
    answer: "<p>Conjunto de elementos de una organización interrelacionados o que interactúan para establecer políticas energéticas, objetivos, metas energéticas, planes de acción y procesos para lograr metas y objetivos energéticos. (ISO 50001:2018)</p>"
  }
]
 
function Icon({ id, open }:IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#62CFF4] ${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export const FaqsTabs = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value : number) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className="max-w-[855px] mx-auto px-2 tabs-acordion mt-[64px] mb-[120px]">
      <Fragment>
        {faqs && faqs.map((faq,index)=>(
          <Accordion className="bg-white rounded-[10px] rounded-bl-none border border-[#62cff4] mb-4" key={index} open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
            <AccordionHeader className="px-6 py-6 font-montserrat border-b-transparent" onClick={() => handleOpen(index + 1)}>
              <h3 className="text-[#62cff4] text-left font-bold text-[17px]">{faq.question}</h3>
            </AccordionHeader>
            <AccordionBody className="px-6 py-6 font-montserrat prose text-[17px] font-light" dangerouslySetInnerHTML={{ __html: faq.answer }}>
            </AccordionBody>
        </Accordion>
        ))}       
      </Fragment>
    </div>  
  );
}




// { faqs && faqs.map((faq,index) => <div  className="prose mx-auto">
//           </div>)}



