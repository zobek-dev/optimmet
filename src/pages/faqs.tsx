import { FaqsTabs, FaqsTitle } from "@/components/Faqs";
import { Seo } from "@/components";

const seo = {
  title: "Preguntas Frecuentes",
  description: "Aprende como medir la eficiencia energética, las leyes y normas asociadas y las oportunidades de tu empresa"
}

const Faqs = () => {
  return(
    <>
      <Seo title={seo?.title} description={seo?.description}/>
      <FaqsTitle/>
      <FaqsTabs/>
    </>
  )
}

export default Faqs