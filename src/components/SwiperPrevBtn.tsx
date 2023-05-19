import { SwiperPrevIcon } from '@/svg';
import { useSwiper } from 'swiper/react';
export const SwiperPrevBtn = () => {
  const swiper = useSwiper();

  return(
    <button className="absolute top-1/2 left-0 -translate-y-1/2 z-[99] rotate-180 transition-opacity duration-200 hover:opacity-70" onClick={()=> swiper.slidePrev()}>
      <SwiperPrevIcon/>
      <span className="sr-only">Slide Anterior</span>
    </button>
  )
}