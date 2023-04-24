import { SobreOptimmet } from "@/images"
import { DiamondBig } from "@/svg"

export const HeroNosotros = () => {
  return(
    <section className="hero-nosotros w-full h-[637px]">
      <div className="wrapper relative h-full flex flex-col justify-center">
        <div className="block max-w-[244px] md:max-w-[494px] md:translate-x-20">
          <span className="bg-[#62CFF4] inline-block text-white font-medium text-[17px] p-3 rounded-[10px] rounded-bl-[0px] mb-2">Sobre Optimmet</span>
          <h1 className="bg-white p-4 rounded-[20px] rounded-bl-[0px] rounded-tr-[0px] mb-2 text-[30px] lg:text-[35px] font-bold leading-[1.4]">Somos una empresa de ingienería de procesos</h1>
        </div>
        <DiamondBig className="absolute -bottom-[29px] left-4"/>
      </div>
    </section>
  )
}