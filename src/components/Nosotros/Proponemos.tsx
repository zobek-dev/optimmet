import { IconProponemos } from "@/images";
import { DiamondBig } from "@/svg";
import Link  from "next/link"

export const Proponemos = () => {
  return (
    <section className="nosotros-proponemos h-[1037px] lg:h-[537px]">
      <div className="wrapper relative h-full py-20">
        <div className="bg-white mx-auto max-w-[90%] sm:max-w-[60%] lg:max-w-[70%] px-8 lg:pl-8 lg:pr-0 py-8 relative flex flex-col lg:flex-row items-center gap-4 rounded-[10px]">
          <p className="font-light text-center lg:text-left text-[15px] lg:text-[20px]">
            <strong className="font-semibold">En Optimmet proponemos ser un aliado en el proceso del mejoramiento,
            innovando en una mirada integral, que incorpore el uso eficiente de
            los recursos</strong> energéticos e hídricos, basado en metodologías y
            normativas internacionales de mejora continua.
          </p>
         <img
            src={IconProponemos.src}
            alt="proponemos"
            width={IconProponemos.width}
            height={IconProponemos.height}
            className="my-4 lg:my-0"
            loading="lazy"
          />
          <Link href="/servicios" className="block absolute -bottom-[21px] left-1/2 -translate-x-1/2 lg:translate-x-0  lg:left-8 bg-[#C7E22B] w-max px-4 py-2 rounded-[32px] text-[#556170] text-[17px] font-medium">
            Ve Nuestros Proyectos
          </Link>
        </div>
        <DiamondBig className="absolute -bottom-[24px] right-4"/>
      </div>
    </section>
  );
};
