import { Seo } from "@/components";
import { ConsultoriaContent, HeadingConsultoria, OtrosConsultorias } from "@/components/Consultorias";

const seo = {
  title: "Consultorías Técnicas",
  description: "Balances de masa y fluidos, análisis, gestión y reporte de energía y emisiones, diagnóstico e identificación de oportunidades de mejora, etc"
}

const Consultorias = () => {
  return (
    <>
      <Seo title={seo?.title} description={seo?.description}/>
      <HeadingConsultoria/>
      <ConsultoriaContent/>
      <OtrosConsultorias/>
    </>
  )
}

export default Consultorias;