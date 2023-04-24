export const NosotrosMision = () => {
  return(
    <section className="nosotros-mision h-[941px] lg:h-[770px] w-full py-[120px]">
      <div className="wrapper h-full flex flex-col gap-20 lg:gap-12 justify-end">
        <div className="relative bg-white max-w-[90%] sm:max-w-[80%] lg:max-w-[743px] pt-12 p-8 px-4 lg:px-8 rounded-[10px] rounded-tr-[0px] rounded-bl-[0px] border border-[#62CFF4] translate-x-8">
          <h3 className="bg-[#62CFF4] absolute -left-8 -top-8 text-[35px] text-white px-8 py-2 font-bold rounded-[10px] rounded-bl-none tracking-[2.5px] ">Misión</h3>
          <p className="font-light text-[18px] lg:text-[20px] mt-4">Lograr un trabajo de colaboración y confianza con nuestros clientes, agregando valor para un crecimiento sustentable.</p>
        </div>
        <div className="relative bg-white max-w-[90%] sm:max-w-[80%] lg:max-w-[743px] pt-12 p-8 px-4 lg:px-8 rounded-[10px] rounded-tr-[0px] rounded-bl-[0px] border border-[#C7E22B] -translate-x-8 self-end">
          <h3 className="bg-[#C7E22B] absolute -right-8 -top-8 text-[35px] text-white px-8 py-2 font-bold rounded-[10px] rounded-bl-none tracking-[2.5px] ">Visión</h3>
          <p className="font-light text-[18px] lg:text-[20px] text-right mt-4">
            Ser una empresa líder en el Mejoramiento Sustentable de los procesos y el Aumento de Eficiencia en el uso de sus recursos energéticos.
          </p>
        </div>
      </div>
    </section>
  )
}