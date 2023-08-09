import { Seo } from "@/components";
import { Richtext, ServiciosHero, ServiciosList } from "@/components/Servicios";

const seo = {
  title: "Servicios",
  description: "¿Buscas asesoría en eficiencia y gestión energética? Aquí encuentras la información sobre todos nuestros servicios"
}

const Servicios = () => {
  return(
    <>
      <Seo title={seo?.title} description={seo?.description}/>
      <ServiciosHero/>
      <Richtext/>
      <ServiciosList/>
    </>
  )
}

export default Servicios;

