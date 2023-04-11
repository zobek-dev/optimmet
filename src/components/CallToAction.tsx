import Link from "next/link"
import { Wsp, WspSmall } from "@/svg"
import { ReduccionSmall, SistemaSmall } from "@/images"

export const CallToAction = () => {
  return(
    <>
      <section className="section-cta py-32 relative overflow-hidden flex justify-center items-center">
        <div className="bg-white w-[90vw] md:w-[60vw] py-12 px-8 lg:p-16 rounded-tl-2xl rounded-br-2xl flex flex-col lg:flex-row gap-8 border border-[rgba(85,97,112,.5)] items-center">
          <div className="">
            <h2 className="font-bold text-center md:text-left text-[30px] lg:text-[40px] leading-[1.2] mb-8">¡Comienza aquí a <strong className="font-bold text-[#62CFF4]">optimizar los procesos</strong> de tu organización!</h2>
            <p className="text-[17px] lg:text-[20px] text-center md:text-left">
              Conversemos y definamos como podemos apoyar a tu organización en la gestión de energía, procesos de mejora y todo lo que involucre eficiencia energética.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/contacto" className="bg-[#C7E22B] inline-block text-[#556170] font-medium py-2 px-8 rounded-[32px] text-sm lg:text-base text-center">
              Escribenos
            </Link>
            <Link href="#" target="_blank" className="bg-white inline-block text-[#556170] font-medium py-2 px-6 rounded-[32px] relative text-sm lg:text-base border border-[#556170] text-center">
              <Wsp className="hidden md:inline-block absolute top-0 -left-1 -translate-y-2"/>
              <WspSmall className="inline-block md:hidden absolute -left-1 top-0"/>
              <span className="ml-4 md:ml-8 inline-block">Conversemos</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row">
        <div className="flex">
          <img 
            src={SistemaSmall.src} 
            alt="Sistema de Gestión de la Energía" 
            width={SistemaSmall.width}
            height={SistemaSmall.height}
            className="object-cover object-center col-span-4" 
            loading="lazy"
          />
          <div className="bg-[#62CFF4] text-white px-4 flex items-center col-span-3">
            <span className="text-[18px] font-bold text-center block">Sistemas de <br/> Gestión de la <br/>Energía</span>
          </div>
        </div>
        <div className="flex">
          <img 
            src={ReduccionSmall.src} 
            alt="Sistema de Gestión de la Energía" 
            className="aspect-[4/3] object-fill object-center" 
            loading="lazy"
          />
          <div className="bg-[#FC715E] text-white px-4 flex items-center">
            <span className="text-[18px] font-bold text-center">Auditorías<br/> energéticas</span>
          </div>
        </div>
        <div className="flex">
          <img 
            src={ReduccionSmall.src} 
            alt="Sistema de Gestión de la Energía" 
            className="aspect-[4/3] object-fill object-center" 
            loading="lazy"
          />
          <div className="bg-[#FC715E] text-white px-4 flex items-center">
            <span className="text-[18px] font-bold text-center">Auditorías<br/> energéticas</span>
          </div>
          <img 
            src={ReduccionSmall.src} 
            alt="Sistema de Gestión de la Energía" 
            className="aspect-[4/3] object-fill object-center hidden md:block" 
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}