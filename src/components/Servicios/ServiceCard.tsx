import { StaticImageData } from "next/image";
import Link from "next/link";

interface IService {
  title: string;
  image: StaticImageData;
  excerpt: string;
  url: string;
}

interface Iprop {
  service: IService;
  index: number;
}

export const ServiceCard = ({ service, index }: Iprop) => {
  const { title, image, excerpt, url } = service;
  return (
    <li>
      <Link href={url} className="flex justify-center group">
        <div className={`flex flex-col w-full sm:ml-0 max-w-[400px] sm:items-center relative sm:max-w-none ${ index % 2 != 0 ? 'sm:flex-row-reverse':'sm:flex-row'}` }>
          <img
            src={image.src}
            alt={title}
            width="214"
            height="215"
            className="aspect-square object-cover object-center rounded-[10px]"
            loading="lazy"
          />
          <div className={`relative sm:translate-x-0 -translate-y-20 -mb-20 gap-4 sm:gap-0 sm:mb-0 sm:translate-y-0 sm:absolute self-end sm:self-auto bg-white w-[85%] flex flex-col lg:flex-row sm:items-end py-4 px-4 rounded-[10px] rounded-bl-none border border-[#62CFF4] group-hover:bg-[#62CFF4] transition-colors  duration-200 ease-in-out ${index % 2 !=0 ? 'sm:left-0' : 'sm:right-0'}`}>
            <div>
              <h3 className="font-bold text-[#62CFF4] text-[23px] leading-[1.4] mb-2 group-hover:text-white transition-colors duration-200 ease-in-out">{title}</h3>
              <p className="font-light text-[15px] text-[#556170] leading-[1.4] group-hover:text-white transition-colors duration-200 ease-in-out">{excerpt}</p>
            </div>
            <span className="relative self-end">
              <svg width="16" height="21" viewBox="0 0 16 21" fill="none" className="text-[#62CFF4] group-hover:text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3L12 10.5L3 18" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
              </svg>
              <span className="hidden text-white absolute -left-[85px] top-1/2 -translate-y-1/2 sm:group-hover:block whitespace-nowrap text-[12px]">Conocer más</span>
            </span> 
          </div>
        </div>
      </Link>  
    </li>
  );
};
