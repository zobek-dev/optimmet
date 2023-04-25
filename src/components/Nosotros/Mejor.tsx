import { RecursosEficientes, InvolucrandoPersonas, ManteniendoProcesos } from "@/images";

export const MejorForma = () => {
  return (
    <section className="py-20">
      <div className="wrapper">
        <h2 className="text-xl lg:text-[35px] font-bold text-center lg:max-w-[70%] block mx-auto leading-[1.5] mb-12">La mejor forma de generar productividad y sustentabilidad es..</h2>
        <div className="flex flex-col lg:max-w-[70%] mx-auto">
          <div className="flex items-center">
            <img
              src={InvolucrandoPersonas.src}
              alt="Involucrando Personas"
              width={InvolucrandoPersonas.width}
              height={InvolucrandoPersonas.height}
              loading="lazy"
            />
            <span className="bg-[#C7E22B] text-xs sm:text-[15px] lg:text-[22px] border border-white rounded-[10px] px-4 sm:px-8 lg:px-20 rounded-bl-none text-white font-bold py-2 -translate-x-8 whitespace-nowrap">Involucrando a las personas</span>
          </div>
          <div className="flex flex-row-reverse items-center self-end">
            <img
              src={ManteniendoProcesos.src}
              alt="Manteniendo Personas"
              width={ManteniendoProcesos.width}
              height={ManteniendoProcesos.height}
              loading="lazy"
            />
            <span className="bg-[#FC715E] text-xs sm:text-[15px] lg:text-[22px] border border-white rounded-[10px] px-4 sm:px-8 lg:px-20 rounded-bl-none text-white font-bold py-2 translate-x-8 whitespace-nowrap">Manteniendo procesos</span>
          </div>
          <div className="flex items-center lg:translate-x-12">
            <img
              src={RecursosEficientes.src}
              alt="Utilizando Recursos Eficientes"
              width={RecursosEficientes.width}
              height={RecursosEficientes.height}
              loading="lazy"
            />
            <span className="bg-[#62CFF4] text-xs sm:text-[15px] lg:text-[22px] border border-white rounded-[10px] px-4 sm:px-8 lg:px-20 rounded-bl-none text-white font-bold py-2 -translate-x-8 whitespace-nowrap">Utilizando recursos eficientes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
