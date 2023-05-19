import { SwiperNextIcon } from '@/svg';
import { useSwiper } from 'swiper/react';
export const SwiperNextBtn = () => {
  const swiper = useSwiper();

  return(
    <button className="absolute top-1/2 right-0 -translate-y-1/2 z-[99] transition-opacity duration-200 hover:opacity-70" onClick={()=> swiper.slideNext()}>
      <SwiperNextIcon/>
      <span className="sr-only">Siguiente</span>
    </button>
  )
}