import { DiamondUnderline, CircleSmall } from "@/svg";
import { TheCircle } from "@/images";

export const HomeNosEligen = () => {
  return (
    <section className="home-nos-eligen py-8 lg:py-24">
      <div className="wrapper text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-8">
          <div>
            <h2 className="text-center font-bold text-[30px] lg:text-[40px] leading-[1.2] mb-4">
              ¿Por qué nos{" "}
              <strong className="font-bold text-[#FC715E]">eligen</strong>?
            </h2>
            <DiamondUnderline className="mx-auto" />
            <p className="font-light text-[17px] lg:text-[20px] text-center my-8">
              Hemos trabajado en proyectos exitosos de diferentes areas.
            </p>
            <ul className="text-center grid grid-cols-3 gap-x-2 mx-auto justify-center items-center">
              <li className="bg-white rounded-[10px] flex flex-col px-2 py-4">
                <span className="text-[#62cff4] font-semibold leading-none">
                  más de
                </span>
                <span className="text-[#62cff4] block font-bold text-[40px] leading-none my-1">
                  6
                </span>
                <span className="text-[#556170] font-light text-[13px] leading-none">
                  años de <br />
                  trayectoria
                </span>
              </li>
              <li className="bg-white rounded-[10px] flex flex-col px-2 py-4">
                <span className="text-[#62cff4] font-semibold leading-none">
                  más de
                </span>
                <span className="text-[#62cff4] block font-bold text-[40px] leading-none my-1">
                  30
                </span>
                <span className="text-[#556170] font-light text-[13px] leading-none">
                  proyectos
                  <br />
                  realizados
                </span>
              </li>
              <li className="bg-white rounded-[10px] flex flex-col px-2 py-4">
                <span className="text-[#62cff4] font-semibold leading-none">
                  más de
                </span>
                <span className="text-[#62cff4] block font-bold text-[40px] leading-none my-1">
                  100
                </span>
                <span className="text-[#556170] font-light text-[13px] leading-none">
                  profesionales
                  <br />
                  capacitados
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div className="border border-white rounded-[16px] mt-[32px] lg:mt-0 overflow-hidden grid lg:items-center lg:grid-cols-2">
              <img
                src={TheCircle.src}
                alt="tipos de servicio"
                width={TheCircle.width}
                height={TheCircle.height}
                className="mx-auto object-contain object-center aspect-square p-8"
                loading="lazy"
              />
              <div className="bg-white p-4 lg:h-full lg:flex lg:flex-col lg:justify-center">
                <h3 className="text-[#62cff4] font-bold text-[20px] mb-4">
                  Tipos de servicios
                </h3>
                <ul className="text-[#556170]">
                  <li className="flex gap-x-2 items-start mb-2 font-light text-xs text-left">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#62CFF4" />
                    </svg>
                    Eficiencia Energetíca y gestión de la energía
                  </li>
                  <li className="flex gap-x-2 items-start mb-2 font-light text-xs text-left">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#C7E22B" />
                    </svg>
                    Capacitaciones Técnicas
                  </li>
                  <li className="flex gap-x-2 items-start mb-2 font-light text-xs text-left">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#FC715E" />
                    </svg>
                    Consultorías/Procesos mineros metalúrgicos
                  </li>
                  <li className="flex gap-x-2 items-start mb-2 font-light text-xs text-left">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#FFA093" />
                    </svg>
                    Desarrollos de proyectos de sustentabilidad
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-white bg-[rgba(85,97,112,.5)] text-white p-4 rounded-[10px] mt-8 lg:flex lg:items-center lg:gap-4">
              <h3 className="font-bold text-xl mb-4 leading-[1.1]">
                Nuestras{" "}
                <strong className="text-[#62cff4] font-bold">áreas</strong> de
                desarrollo:
              </h3>
              <ul className="lg:grid lg:grid-rows-[repeat(5,_20px)] lg:grid-cols-[repeat(2,_250px)] lg:grid-flow-col">
                <li className="font-light flex items-center gap-x-1 leading-none text-xs mb-2 lg:h-max">
                  <span>
                    <CircleSmall />
                  </span>
                  <span>Plantas Concentradoras</span>
                </li>
                <li className="font-light flex items-center gap-x-1 leading-none text-xs mb-2 lg:h-max">
                  <span>
                    <CircleSmall />
                  </span>
                  <span>Tranques & Relaves</span>
                </li>
                <li className="font-light flex items-center gap-x-1 leading-none text-xs mb-2 lg:h-max">
                  <span>
                    <CircleSmall />
                  </span>
                  <span>Desalación e implusión de agua</span>
                </li>
                <li className="font-light flex items-center gap-x-1 leading-none text-xs mb-2 lg:h-max">
                  <span>
                    <CircleSmall />
                  </span>
                  <span>Transporte de Concentrado</span>
                </li>
                <li className="font-light flex items-center gap-x-1 leading-none text-xs mb-2 lg:h-max">
                  <span>
                    <CircleSmall />
                  </span>
                  <span>Areas Estratégicas de la Organización</span>
                </li>
                <li className="font-light flex items-center gap-x-1 leading-none text-xs mb-2 lg:h-max">
                  <span>
                    <CircleSmall />
                  </span>
                  <span>Pymes y Otras industrias</span>
                </li>
                <li className="font-light flex items-center gap-x-1 leading-none text-xs mb-2 lg:h-max">
                  <span>
                    <CircleSmall />
                  </span>
                  <span>
                    Instituciones Nacionales de Educación, Sustentabilidad,
                    Energía y Medioambiente
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
