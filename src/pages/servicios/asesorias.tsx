import { Seo } from "@/components"
import { AsesoriasContent, HeadingAsesorias, OtrosAsesorias } from "@/components/Asesorias"

const seo = {
  title: "Asesorías en Eficiencia Energética y Gestión de la Energía",
  description: "Te ayudamos en la toma decisiones acertadas, a mejorar el desempeño energético, y cumplir con los requisitos legales relacionados con el consumo de energía"
}

const Asesorias = () => {
  return(
  <>
    <Seo title={seo?.title} description={seo?.description}/>
    <HeadingAsesorias/>
    <AsesoriasContent/>
    <OtrosAsesorias/>
  </>
  )
}

export default Asesorias