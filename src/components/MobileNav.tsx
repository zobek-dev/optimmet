import { LogoDark } from "@/images";
import { IconClose } from "@/svg";
import { Dispatch, SetStateAction } from "react";
import { Instagram, Facebook, Linkedin } from "@/images";
import Link from "next/link";

interface Iprops{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileNav = ({open, setOpen}:Iprops) => {
  return(
    <div className={`fixed top-0 left-0 bottom-0 right-0 w-full h-[100vh] flex justify-start bg-[rgba(10,10,10,.5)] z-[9999] transition-[visibility] duration-200 ease-linear ${!open ? 'invisible' : 'visible'}`}>
      <div className="block">
        <div className="fixed top-0 left-0 right-0 bottom-0" onClick={()=>setOpen(false)}></div>
        <div className={`bg-white h-full w-[420px] z-[99999] transition-transform duration-200 ease-linear flex flex-col px-4 py-4 ${!open? '-translate-x-full': 'translate-x-0'}`} style={{maxWidth: 'calc(100vw - 3rem)'}}>
          <div className="grid grid-cols-5 items-center">
            <div className="col-start-2 col-end-5">
              <img src={LogoDark.src} alt="optimmet" width={LogoDark.width} height={LogoDark.height} loading="lazy" />
            </div> 
            <div className="col-start-5 col-end-6 flex justify-end">
              <button  onClick={()=>setOpen(false)}>
                <IconClose className="text-[#62CFF4]"/>
                <span className="sr-only">Cerrar Menu</span>
              </button>
            </div>
          </div>
          <nav className="flex-1 mt-20">
            <ul className="block">
              <li className="border-b border-[#62CFF4]">
                <Link href="/" className="text-[17px] font-light block py-3" onClick={()=>setOpen(false)}>
                  Inicio
                </Link>
              </li>
              <li className="border-b border-[#62CFF4]" onClick={()=>setOpen(false)}>
                <Link href="/nosotros" className="text-[17px] font-light block py-3">
                  Sobre Optimmet
                </Link>
              </li>
              <li className="border-b border-[#62CFF4]" onClick={()=>setOpen(false)}>
                <Link href="/servicios" className="text-[17px] font-light block py-3">
                  Servicios
                </Link>
              </li>
              <li className="border-b border-[#62CFF4]" onClick={()=>setOpen(false)}>
                <Link href="/preguntas-frecuentes" className="text-[17px] font-light block py-3">
                  Faqs
                </Link>
              </li>
              <li className="border-b border-[#62CFF4]" onClick={()=>setOpen(false)}>
                <Link href="/blog" className="text-[17px] font-light block py-3">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="bg-[#C7E22B] block w-max px-4 py-2 my-4 rounded-[32px] text-[#08376B] text-[17px] font-medium" onClick={()=>setOpen(false)}>
                  Contáctanos
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="flex gap-x-2 items-center">
            <li>
              <Link href="https://www.instagram.com/optimmet_ingenieria/" target="_blank" title="Ir a Instagram">
                <img 
                src={Instagram.src} 
                width={Instagram.width}
                height={Instagram.height}
                alt="Instagram" 
                loading="lazy"/>
                <span className="sr-only">Instagram</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/optimmet_ingenieria/" target="_blank" title="Ir a Facebook">
                <img 
                src={Facebook.src} 
                width={Facebook.width}
                height={Facebook.height}
                alt="Instagram" 
                loading="lazy"/>
                <span className="sr-only">Facebook</span>
              </Link>
            </li>
            <li>
            <Link href="https://www.linkedin.com/company/optimmet" target="_blank" title="Ir a Linkedin">
                <img 
                src={Linkedin.src} 
                width={Linkedin.width}
                height={Linkedin.height}
                alt="Linkedin" 
                loading="lazy"/>
                <span className="sr-only">Linkedin</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}