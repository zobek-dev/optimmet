import { MailLightblue, PhoneLightBlue } from "@/svg"
import Cf7FormWrapper from "./Cf7FormWrapper"
import { Form } from "./Form"

export const ContactSection = () => {
  return(
    <section className="section-contact relative bg-white py-[100px] lg:h-[950px]">
      <div className="wrapper h-full flex flex-col justify-center">
        <div className="bg-white w-full max-w-[1024px] rounded-[20px] rounded-bl-none rounded-tr-none py-12 p-4 lg:px-8 border border-[#62cff4] mx-auto relative z-[2] grid items-center md:grid-cols-2 gap-8">
          <div className="">
            <h1 className="bg-[#62cff4] text-white px-4 py-2 block w-max rounded-[10px] rounded-tr-none rounded-bl-none text-[30px] lg:text-[35px] font-bold mb-4">Contáctanos</h1>
            <h2 className="text-[30px] lg:text-[35] font-bold leading-[1.4] mb-4">¿Buscas optimizar los procesos <strong className="font-bold text-[#62cff4]">de tu organización?</strong></h2>
            <p className="text-[17px] mb-4">No malgastes energía innecesariamente y confía en nuestros equipos para afrontar los nuevos desafíos de tu organización.</p>
            <div className="border-t border-t-[#62cff4] py-4 flex flex-col lg:flex-row gap-2">
              <a href="tel:+56977465561" className="border border-[#62cff4] py-2 px-4 flex items-center justify-center rounded-[20px] gap-2">
                <span><PhoneLightBlue/></span>
                <span className="text-sm tracking-[1px]">+569 7746 5561</span>
              </a>
              <a href="mailto:info@optimmet.cl" className="border border-[#62cff4] py-2 px-4 flex items-center justify-center rounded-[20px] gap-2">
                <span><MailLightblue/></span>
                <span className="text-sm tracking-[1px]">info@optimmet.cl</span>
              </a>
            </div>
          </div>
          <div className="md:px-8 block">
            <h2 className="text-[30px] lg:text-[35] font-bold leading-[1.4] my-6 text-center md:text-left">Escribenos</h2>
            <Cf7FormWrapper siteUrl="https://www.optimmet.cl/headless-optimmet/" formId="6" url="">
              <Form/>
            </Cf7FormWrapper>  
          </div>
        </div> 
      </div>  
    </section>
  )
}