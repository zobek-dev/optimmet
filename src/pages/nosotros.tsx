import { Seo } from "@/components";
import { HeroNosotros, MejorForma, NosotrosMision, NuestroEquipo, PorqueNace, Proponemos, Richtext } from "@/components/Nosotros";


const seo = {
  title: "Sobre Optimmet",
  description: "Tu mejor aliado para mejorar el proceso productivo, impulsando el uso eficiente de recursos para una producción sustentable"
}

const Nosotros = ()=>{
  return(
    <>
      <Seo title={seo?.title} description={seo?.description}/>
      <HeroNosotros/>
      <Richtext/>
      <NosotrosMision/>
      <PorqueNace/>
      <Proponemos/>
      <MejorForma/>
      <NuestroEquipo/>
    </>
  )
}

export default Nosotros