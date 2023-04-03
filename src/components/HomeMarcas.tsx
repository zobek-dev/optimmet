import { DiamondUnderline } from "@/svg"
import { AngloAmerican, AntofagastaMinerals, Bhp, CodelcoAndina, Giz } from "@/images";
import { StaticImageData } from "next/image";
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper'

import 'swiper/swiper.min.css';

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
  {
    title: "Antofagasta Minerals",
    image: AntofagastaMinerals,
    url: "https://www.aminerals.cl/"
  },
  {
    title: "Codelco - Andina",
    image: CodelcoAndina,
    url: "https://www.codelco.com/andina"
  }
]

const breakpoints = {
  640: {
    slidesPerView: 3,
    spaceBetween: 16
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 16
  }
}

export const HomeMarcas = () => {
  return(
    <section className="py-12 lg:py-20 bg-white">
      <div className="wrapper">
        <h2 className="text-center text-[25px] lg:text-[40px] font-bold leading-[1.2] mb-4">
          Ellos <strong className="text-[#FC715E] font-bold">confían</strong> en nosotros
          <DiamondUnderline className="mx-auto mt-3"/>  
        </h2>
        <Swiper
          wrapperTag="ul"
          wrapperClass="swiper-marcas-home flex items-center"
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation]}
          breakpoints={breakpoints}
          onSlideChange={()=>{}}
          onSwiper={(swiper) => {}}
          navigation
        >
          { companies && companies.map((company, index) => 
            <SwiperSlide key={index} tag="li">
              {company.url?(
                <Link href={company.url} >
                  <img 
                  src={company.image.src} 
                  alt={company.title} 
                  width={company.image.width} 
                  height={company.image.height} 
                  className="mx-auto h-auto"
                  loading="lazy"/>
                  <span className="sr-only">{company.title}</span>
                </Link>
              ):(
                <>
                  <img 
                  src={company.image.src} 
                  alt={company.title} 
                  width={company.image.width} 
                  height={company.image.height}
                  className="mx-auto h-auto"
                  loading="lazy"/>
                  <span className="sr-only">{company.title}</span>
                </>
              )}
            </SwiperSlide>
          )}
        </Swiper>
      </div> 
    </section>
  )
}