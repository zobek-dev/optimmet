import Link from "next/link"
import { DiamondBig } from "@/svg"

export const Hero = () => {
  return(
    <section className="hero-home">
      <div className="wrapper relative w-full h-full flex flex-col items-start justify-end pb-12 lg:pb-20 lg:pl-12">
        <figure className="bg-white py-6 px-6 max-w-[260px] sm:max-w-[500px] rounded-tl-[20px] rounded-tr-[8px] rounded-br-[20px] rounded-bl-[8px]">
          <h1 className="font-bold text-[22px] sm:text-[35px] leading-[1.2] mb-2">
            Optimizamos los procesos e <strong className="text-[#62CFF4] font-bold">impulsamos la productividad</strong> de tu empresa.
          </h1>
          <h2 className="font-light text-[17px] sm:text-[22px]">
            Somos especialistas en procesos mineros.
          </h2>
        </figure>
        <Link href="/servicios" className="block bg-[#62CFF4] py-2 px-4 w-max rounded-[32px] text-white text-[17px] my-6 font-medium">
          Ver Servicios
        </Link>
        <DiamondBig className="absolute -bottom-[28px] lg:left-0"/>
      </div>
    </section>
  )
}