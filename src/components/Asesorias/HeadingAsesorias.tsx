import { AsesoriasSymbol } from "@/svg"

export const HeadingAsesorias = () => {
  return(
    <section className="asesorias-heading h-[639px] lg:h-[628px] w-full">
      <div className="wrapper relative h-full flex flex-col justify-center">
        <div className="lg:translate-x-12">
          <span className="bg-[#62CFF4] text-white block mb-2 w-max px-4 py-2 rounded-[10px] rounded-bl-none font-medium text-[17px]">Nuestros Servicios</span>
          <h1 className="bg-white px-6 lg:px-8 py-4 rounded-[20px] rounded-bl-none rounded-tr-none w-max font-bold text-[20px] lg:text-[35px] leading-[1.4]">Asesorías en Eficiencia <br/>Energética y Gestión de la <br/>Energía</h1>
        </div>
        <AsesoriasSymbol className="absolute -bottom-[92px] left-1/2 -translate-x-1/2"/>
      </div>
    </section>
  )
}