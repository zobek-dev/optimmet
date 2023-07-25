import { FaqsTabs, FaqsTitle } from "@/components/Faqs"
import { Seo } from "@/components"

const Faqs = () => {
  return(
    <>
      <Seo title="Preguntas Frecuentes" description=""/>
      <FaqsTitle/>
      <FaqsTabs/>
    </>
  )
}

export default Faqs