import { Seo } from "@/components";
import { Richtext, ServiciosHero, ServiciosList } from "@/components/Servicios";

const Servicios = () => {
  return(
    <>
      <Seo title="Servicios" description=""/>
      <ServiciosHero/>
      <Richtext/>
      <ServiciosList/>
    </>
  )
}

export default Servicios;

