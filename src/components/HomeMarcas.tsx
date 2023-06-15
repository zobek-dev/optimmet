import { DiamondUnderline } from "@/svg";
import {
  AngloAmerican,
  AntofagastaMinerals,
  Bhp,
  CodelcoAndina,
  Giz,
} from "@/images";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation } from "swiper";
import { SwiperNextBtn, SwiperPrevBtn } from ".";
import { useRef, useEffect } from "react";

import "swiper/css";
import "swiper/css/virtual"
import "swiper/css/navigation"

interface Company {
  title: string;
  image: StaticImageData;
  url: string;
  width: number;
  height: number;
}

const companies: Company[] = [
  {
    title: "Angloamerican",
    image: AngloAmerican,
    url: "https://chile.angloamerican.com/",
    width: 208,
    height: 55,
  },
  {
    title: "Bhp",
    image: Bhp,
    url: "https://bhp.com/es",
    width: 83,
    height: 32,
  },
  {
    title: "Giz",
    image: Giz,
    url: "https://www.giz.de/en/worldwide/24902.html",
    width: 169,
    height: 49,
  },
  {
    title: "Antofagasta Minerals",
    image: AntofagastaMinerals,
    url: "https://www.aminerals.cl/",
    width: 140,
    height: 39,
  },
  {
    title: "Codelco - Andina",
    image: CodelcoAndina,
    url: "https://www.codelco.com/andina",
    width: 80,
    height: 60,
  },
];

const breakpoints = {
  150: {
    slidesPerView: 1,
    spaceBetween: 16,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 16,
  },
};

export const HomeMarcas = () => {
  const prev = useRef(null);
  const next = useRef(null);
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="wrapper">
        <h2 className="text-center text-[25px] lg:text-[40px] font-bold leading-[1.2] mb-4">
          Ellos <strong className="text-[#FC715E] font-bold">confían</strong> en
          nosotros
          <DiamondUnderline className="mx-auto mt-3" />
        </h2>

        <Swiper 
          slidesPerView="auto"
          loop={true}
          className="my-8"
          breakpoints={breakpoints}
          onSlideChange={()=>{}}
          onSwiper={(swiper) => {}}
          modules={[Virtual, Navigation]}
          wrapperTag="ul"
          navigation={{
            prevEl: prev.current,
            nextEl: next.current 
          }}
          // className="flex items-center" 
          // wrapperClass="items-center"        
        >
          {companies &&
            companies.map((company, index) => (
              <SwiperSlide key={company.title} virtualIndex={index} tag="li" className="flex justify-center items-center">
                <Link href={company.url} target="_blank" rel="noopener noreferrer" className="transition-opacity duration-200 ease-in-out hover:opacity-60">
                  <img
                    src={company.image.src}
                    alt={company.title}
                    height={company.height}
                    width={company.width}
                    loading="lazy"
                  />
                </Link>
              </SwiperSlide>
            ))}
          <SwiperNextBtn/>
          <SwiperPrevBtn/>   
        </Swiper>
      </div>
    </section>
  );
};
