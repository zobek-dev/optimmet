import { DiamondUnderline } from "@/svg"
import { AngloAmerican, Bhp, Giz } from "@/images";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import { StaticImageData } from "next/image";

interface Company{
  title: string,
  image: StaticImageData,
  url: string
}

const companies: Company[] = [
  {
    title: "Angloamerican",
    image: AngloAmerican,
    url: "https://chile.angloamerican.com/"
  },
  {
    title: "Bhp",
    image: Bhp,
    url: "https://bhp.com/es"
  },
  {
    title: "Giz",
    image: Giz,
    url: "https://www.giz.de/en/worldwide/24902.html"
  },

]

export const HomeMarcas = () => {
  return(
    <section className="py-12 lg:py-20 bg-white">
      <div className="wrapper">
        <h2 className="text-center text-[25px] lg:text-[40px] font-bold leading-[1.2] mb-4">
          Ellos <strong className="text-[#FC715E] font-bold">confían</strong> en nosotros
          <DiamondUnderline className="mx-auto mt-3"/>  
        </h2>
        {/* <Swiper>

        </Swiper> */}
      </div> 
    </section>
  )
}