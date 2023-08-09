import { Seo } from "@/components"
import { HeadingCapacitaciones, CapacitacionesContent, OtrosCapacitaciones } from "@/components/Capacitaciones"

const seo = {
  title: "Capacitaciones en eficiencia, gestión y optimización de la energía",
  description: "Convierte a tu personal en verdaderos gestores de cambio dentro de la organización, para crear impactos ambientales positivos."
}

const Capacitaciones = () => {
  return (
    <>
      <Seo title={seo?.title} description={seo?.description}/>
      <HeadingCapacitaciones/>
      <CapacitacionesContent/>
      <OtrosCapacitaciones/>
    </>
  )
}

export default Capacitaciones