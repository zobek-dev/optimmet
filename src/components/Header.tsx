import { Logo, LogoDark } from '@/images'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router';

export const Header = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [bgWhite, setBgWhite] = useState<boolean>(false);
  const pathList = ['/404'];
  const router = useRouter();

  useEffect(()=>{

    //set bgWhite
    setBgWhite(()=>pathList.includes(router.pathname));

    //adding scroll value to the state
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    //removing event for better performance
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])
  
  return (
    <header className={`py-4 w-full z-[999] ${scrollTop && scrollTop > 50 ? 'sticky bg-[rgba(0,0,0,.5)]': 'absolute bg-transparent'} top-0 left-0 transitions-colors duration-150 ease-in-out`}>
      <div className="wrapper">
        <div className="flex justify-between items-center">
          {
            !bgWhite || scrollTop > 50 ? (
              <Link href="/">
                <img 
                  src={Logo.src} 
                  alt="Optimmet" 
                  width={Logo.width} 
                  height={Logo.height}
                  loading="eager"/>
              </Link>
            ):(
              <Link href="/">
                <img 
                  src={LogoDark.src} 
                  alt="Optimmet" 
                  width={LogoDark.width} 
                  height={LogoDark.height}
                  loading="eager"/>
              </Link>
            )
          }
          <div>
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-x-8">
                <li>
                  <Link href="/" className={`${!bgWhite || scrollTop > 50 ? 'text-white' : ''} font-light text-[15px]`}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className={`${!bgWhite || scrollTop > 50 ? 'text-white' : ''} font-light text-[15px]`}>
                    Sobre Optimmet
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className={`${!bgWhite || scrollTop > 50 ? 'text-white' : ''} font-light text-[15px]`}>
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className={`${!bgWhite || scrollTop > 50 ? 'text-white' : ''} font-light text-[15px]`}>
                    Faqs
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className={`${!bgWhite || scrollTop > 50 ? 'text-white' : ''} font-light text-[15px]`}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="bg-[#C7E22B] block w-max px-4 py-2 rounded-[32px] text-[#08376B] text-[17px] font-medium">
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </nav>
            <button className="block lg:hidden">
              mobile-nav
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}