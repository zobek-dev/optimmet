import { DiamodUnderlineGreen } from "@/svg"
import { NuestroEquipo as NuestroImage, NuestroEquipoMobile, EquipoOptimmet } from "@/images"

export const NuestroEquipo = () => {
  return(
    <section>
      <div className="bg-white py-6 lg:py-12">
        <div className="wrapper">
          <h2 className="text-center font-bold mb-4 text-[20px] lg:text-[35px]">Conoce nuestro equipo</h2>
          <DiamodUnderlineGreen className="mx-auto mb-4"/>
        </div>
      </div>
      {/* <picture className="nuestro-picture relative">
        <source srcSet={NuestroImage.src} media="(min-width: 450px)" />
        <img src={NuestroEquipoMobile.src} className="object-cover object-center w-full" alt="Nuestro equipo" loading="lazy"/>
      </picture> */}
      <img src={EquipoOptimmet.src} width={EquipoOptimmet.width} height={EquipoOptimmet.height} loading="lazy" className="object-fill object-center"/>
      <div className="wrapper">
        <p className="text-center text-[17px] lg:text-[25px] font-medium mx-auto lg:max-w-[1081px] my-8 lg:my-20">
          Somos un equipo <strong className="text-[#FC715E] font-bold">profesional entusiasta y apasionado</strong> por hacer los procesos más sustentables y eficientes en el uso de sus recursos energéticos y naturales.  
        </p>
      </div>
    </section>
  )
}