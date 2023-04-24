import { DiamondUnderline } from "@/svg";


export const PorqueNace = () => {
  return(
    <section className="py-12 lg:py-20">
      <div className="wrapper">
        <h2 className="text-center text-[25px] lg:text-[40px] font-bold leading-[1.2]">
          ¿Por qué nace <strong className="text-[#FC715E] font-bold">Optimmet?</strong>
        </h2>
        <DiamondUnderline className="mx-auto mt-3"/>
        <p className="my-12 font-light text-[15px] lg:text-xl mx-auto max-w-[937px] text-center">
          <strong className="font-semibold">En tiempos donde la productividad cobra especial importancia en todas las organizaciones,</strong> la optimización de los procesos productivos resulta fundamental. Así mismo la incorporación de las personas en el ciclo de mejora y en <strong className="font-semibold">el uso eficiente y gestión de sus recursos energéticos e hídricos,</strong> proporcionan la sustentabilidad que toda organización moderna necesita.
        </p>
      </div>
    </section>
  )
}