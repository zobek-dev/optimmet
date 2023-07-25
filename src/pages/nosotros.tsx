import { Seo } from "@/components";
import { HeroNosotros, MejorForma, NosotrosMision, NuestroEquipo, PorqueNace, Proponemos, Richtext } from "@/components/Nosotros";

const Nosotros = ()=>{
  return(
    <>
      <Seo title="Nosotros" description=""/>
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