import { DiamondBig } from "@/svg"
import Link from "next/link"

export const HomeSobre = () => {
 return(
  <section className="home-sobre">
    <div className="wrapper flex flex-col justify-center h-full relative">
      <div className="max-w-[684px]">
        <p className="text-white font-light text-[25px]"><strong className="font-bold">La mejor forma de generar productividad y sustentabilidad,</strong> es involucrando a las personas, manteniendo  procesos optimizados y utilizando los recursos de forma eficiente</p>
        <Link href="/nosotros" className="block mt-4 bg-[#C7E22B] text-[#08376B] text-[17px] font-medium px-4 py-2 w-max rounded-[32px]">
          Sobre Optimmet
        </Link>
      </div>
      <DiamondBig className="absolute -bottom-[28px] lg:left-4"/>
    </div>
  </section>
 ) 
}