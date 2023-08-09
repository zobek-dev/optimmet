import { ContactSection } from "@/components/Contacto";
import { Seo } from "@/components";

const seo = {
  title: "Contacto",
  description: "¿Buscas optimizar los procesos de tu organización? Contamos con un equipo especializado, escríbenos!"
}

const Contacto = () => {
  return (
    <>
      <Seo title={seo?.title} description={seo?.description}/>
      <ContactSection/>
    </>
  )
}

export default Contacto