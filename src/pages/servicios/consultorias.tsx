import { Seo } from "@/components";
import { ConsultoriaContent, HeadingConsultoria, OtrosConsultorias } from "@/components/Consultorias";

const Consultorias = () => {
  return (
    <>
      <Seo title="Consultorías" description=""/>
      <HeadingConsultoria/>
      <ConsultoriaContent/>
      <OtrosConsultorias/>
    </>
  )
}

export default Consultorias;