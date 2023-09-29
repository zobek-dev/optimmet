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

export const OtrosCard = ({ service, index }: Iprop) => {
  const { title, image, excerpt, url } = service;
  return (
    <li>
      <Link href={url} className="flex justify-center group overflow-hidden">
        <div className={`flex flex-col pr-8 -mb-20 -pb-20` }>
          <img
            src={image.src}
            alt={title}
            width="230"
            height="231"
            className="aspect-square object-cover object-center rounded-[10px]"
            loading="lazy"
          />
          <div className={`relative bg-white w-[250px] flex flex-col 
           py-4 px-4 rounded-[10px] rounded-bl-none border border-[#62CFF4] group-hover:bg-[#62CFF4] transition-colors duration-200 ease-in-out translate-x-8 -translate-y-20`}>
            <div>
              <h3 className="font-bold text-[#62CFF4] text-[23px] leading-[1.4] mb-2 group-hover:text-white transition-colors duration-200 ease-in-out line-clamp-3">{title}</h3>
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
