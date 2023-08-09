import { Seo } from "@/components";
import { DesarrolloContent, HeadingDesarrollo, OtrosDesarrollo } from "@/components/Desarrollo";

const seo = {
  title: "Desarrollo de proyectos de sustentabilidad",
  description: "Desarrollamos inventarios e informes de Huella de Carbono, Análisis de Huella Hídrica, apoyamos la búsqueda de oportunidades de reducción de huella."
}
const DesarrolloProyectos = () => {
  return(
    <>
      <Seo title={seo?.title} description={seo?.description}/>
      <HeadingDesarrollo/>
      <DesarrolloContent/>
      <OtrosDesarrollo/>
    </>
  )
}

export default DesarrolloProyectos;