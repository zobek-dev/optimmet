import { DiamondBig } from "@/svg"

export const ServiciosHero = () => {
  return(
    <section className="servicios-hero h-[639px] lg:h-[627px]">
      <div className="wrapper relative flex flex-col justify-center items-center lg:items-start h-full">
        <div className="lg:translate-x-20 max-w-[90%] md:max-w-[60%] lg:max-w-[568px]">
          <span className="inline-block bg-[#62CFF4] text-white mb-2 py-2 px-4 rounded-[10px] rounded-bl-none text-[17px] font-medium">Nuestros Servicios</span>
          <h1 className="bg-white rounded-[20px] rounded-tl-none rounded-br-none px-6 py-4 lg:p-8 text-[28px] lg:text-[35px] font-bold leading-[1.4]">Dale una mirada a nuestros <strong className="font-bold text-[#FC715E]">servicios y soluciones</strong></h1>
        </div>
        <DiamondBig className="absolute -bottom-[31px] left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0"/>
      </div>
    </section>
  )
}