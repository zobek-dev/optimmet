import {
  RecursosEficientes,
  InvolucrandoPersonas,
  ManteniendoProcesos,
} from "@/images";

export const MejorForma = () => {
  return (
    <section className="">
      <div className="wrapper">
        <h2>La mejor forma de generar productividad y sustentabilidad es</h2>
        <div>
          <div>
            <img
              src={InvolucrandoPersonas.src}
              alt="Involucrando Personas"
              width={InvolucrandoPersonas.width}
              height={InvolucrandoPersonas.height}
              loading="lazy"
            />
            <span>Involucrando Personas</span>
          </div>
          <div>
            <img
              src={ManteniendoProcesos.src}
              alt="Involucrando Personass"
              width={ManteniendoProcesos.width}
              height={ManteniendoProcesos.height}
              loading="lazy"
            />
            <span>Manteniendo Procesos</span>
          </div>
          <div>
            <img
              src={RecursosEficientes.src}
              alt="Involucrando Personass"
              width={RecursosEficientes.width}
              height={RecursosEficientes.height}
              loading="lazy"
            />
            <span>Urilizando Recursos Eficientes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
