import { MailLightblue, PhoneLightBlue } from "@/svg"

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
              <a href="tel:+56983315598" className="border border-[#62cff4] py-2 px-4 flex items-center justify-center rounded-[20px] gap-2">
                <span><PhoneLightBlue/></span>
                <span className="text-sm tracking-[1px]">+56 9 8331 5598</span>
              </a>
              <a href="mailto:contacto@cellmed.cl" className="border border-[#62cff4] py-2 px-4 flex items-center justify-center rounded-[20px] gap-2">
                <span><MailLightblue/></span>
                <span className="text-sm tracking-[1px]">contacto@cellmed.cl</span>
              </a>
            </div>
          </div>
          <div className="md:px-8 block">
            <form action="" className="w-full block">
              <input type="text" name="nombre" placeholder="Nombre" className="border border-[#62cff4] py-2 rounded-[20px] px-6 placeholder:italic placeholder:tracking-[1px] placeholder:text-[17px] placeholder:font-light focus:outline-[#62cff4] mb-4 w-full block"/>
              <input type="email" name="email" placeholder="Email" className="border border-[#62cff4] py-2 rounded-[20px] px-6 placeholder:italic placeholder:tracking-[1px] placeholder:text-[17px] placeholder:font-light focus:outline-[#62cff4] mb-4 w-full block"/>
              <input type="text" name="telefono" placeholder="Teléfono" className="border border-[#62cff4] py-2 rounded-[20px] px-6 placeholder:italic placeholder:tracking-[1px] placeholder:text-[17px] placeholder:font-light focus:outline-[#62cff4] mb-4 w-full block"/>
              <input type="asunto" name="asunto" placeholder="Asunto" className="border border-[#62cff4] py-2 rounded-[20px] px-6 placeholder:italic placeholder:tracking-[1px] placeholder:text-[17px] placeholder:font-light focus:outline-[#62cff4] mb-4 w-full block"/>
              <textarea name="mensaje" placeholder="Mensaje" id="" className="border border-[#62cff4] py-2 rounded-[20px] px-6 placeholder:italic placeholder:tracking-[1px] placeholder:text-[17px] placeholder:font-light focus:outline-[#62cff4] mb-4 w-full block" rows={5}></textarea>
              <button type="submit" className="border border-[#C7E22B] rounded-[20px] px-8 py-2 w-max block transition-colors duration-200 ease-in-out hover:bg-[#c7e22b] hover:text-white"> Enviar</button>
            </form>
          </div>
        </div> 
      </div>
      
    </section>
  )
}