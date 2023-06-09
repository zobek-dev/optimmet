import { DiamondUnderline, Wsp, WspSmall } from "@/svg"
import { Experiencia, ExperienciaIcon, Integramos, Involucramos } from "@/images"
import Link from "next/link"

export const HomeValores = () => {
  return (
    <section className="home-valores">
      <div className="py-20 md:py-32">
        <div className="wrapper">
          <div className="grid lg:grid-cols-5 items-center gap-8">
            <div className="lg:cols-span-1">
              <h2 className="text-white text-[30px] lg:text-[40px] text-center lg:text-left font-bold leading-[1.1] mb-2">Los valores</h2>
              <p className="text-white text-center lg:text-left text-[20px] font-light mb-4">que nos representan</p>
              <DiamondUnderline className="mx-auto lg:mx-0 mb-4"/>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:col-span-4 [&>li]:text-white [&>li]:py-4 [&>li]:md:py-8 [&>li]:px-4 [&>li]:rounded-xl [&>li>p]:text-center [&>li>p]:text-sm [&>li>p]:sm:text-base [&>li>p]:md:text-[17px] [&>li>p]:leading-[1.4] [&>li>p]:md:leading-[1.8]">
              <li className="bg-[#FC715E]">
                <img 
                  src={Experiencia.src} 
                  alt="Experiencia" 
                  width={Experiencia.width} 
                  height={Experiencia.height}
                  className="mx-auto mb-4" 
                  loading="lazy"/>
                <p>Poseemos gran experiencia en la optimización y mejoramiento.</p>  
              </li>
              <li className="bg-[#C7E22B]">
                <img 
                  src={Integramos.src} 
                  alt="Integramos" 
                  width={Integramos.width} 
                  height={Integramos.height}
                  className="mx-auto mb-4" 
                  loading="lazy"/>
                <p>Integramos la optimización y el uso eficiente de los recursos energéticos.</p>  
              </li>
              <li className="bg-[#62CFF4]">
                <img 
                  src={Involucramos.src} 
                  alt="Integramos" 
                  width={Involucramos.width} 
                  height={Involucramos.height}
                  className="mx-auto mb-4" 
                  loading="lazy"/>
                <p>Involucramos a las personas en el proceso de mejora continua.</p>  
              </li>
              <li className="bg-[#4CC190]">
                <img 
                  src={ExperienciaIcon.src} 
                  alt="Integramos" 
                  width={ExperienciaIcon.width} 
                  height={ExperienciaIcon.height}
                  className="mx-auto mb-4" 
                  loading="lazy"/>
                <p>Hacemos del mejoramiento un proceso sustentable.</p>  
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(8,55,107,.6)] py-12 lg:py-20">
        <div className="wrapper">
          <h3 className="text-white font-bold text-[30px] lg:text-[40px] leading-[1.2] max-w-[700px]">¿Necesitas <strong className="text-[#62CFF4] font-bold">optimizar los procesos</strong> de tu organización?</h3>
          <p className="text-[20px] font-light text-white my-8 max-w-[700px]">
            Si quieres implementar sistemas de gestión de energía, procesos de mejora, optimización de procesos y más.
          </p>
          <div className="flex gap-x-2 lg:gap-x-4">
            <Link href="/contacto" className="bg-[#C7E22B] border border-[#C7E22B] inline-block text-[#556170] font-medium py-2 px-8 rounded-[32px] text-sm lg:text-base transition-opacity duration-200 ease-in-out hover:opacity-70">
              Escribenos
            </Link>
            <Link href="#" target="_blank" className="bg-white border border-white inline-block text-[#556170] font-medium py-2 px-6 rounded-[32px] relative text-sm lg:text-base transition-opacity duration-200 ease-in-out hover:opacity-70">
              <Wsp className="hidden md:inline-block absolute top-0 left-0 -translate-y-2 z-[9]"/>
              <WspSmall className="inline-block md:hidden absolute left-0 top-0"/>
              <span className="ml-4 md:ml-8 inline-block">Conversemos</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}