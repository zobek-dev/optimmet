import { LogoFooter, Instagram, Facebook, Linkedin } from "@/images"
import { Diamond, Phone, Mail, Location } from "@/svg"
import Link from 'next/link'

export const Footer = () => {
  return(
    <footer className="py-12">
      <div className="wrapper">
        {/* Columns */}
        <div className="grid gap-8 lg:gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img 
            src={LogoFooter.src} 
            alt="Optimmet"
            width={LogoFooter.width}
            height={LogoFooter.height}  
            className="my-8"           
            loading="lazy"/>
            <ul className="flex gap-x-2 items-center">
              <li>
                <Link href="https://www.instagram.com/optimmet_ingenieria/" rel="noopener noreferrer" className="transition-opacity duration-200 ease-in-out hover:opacity-50">
                  <img 
                  src={Instagram.src} 
                  width={Instagram.width}
                  height={Instagram.height}
                  alt="Instagram" 
                  loading="lazy" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/optimmet_ingenieria/" rel="noopener noreferrer" className="transition-opacity duration-200 ease-in-out hover:opacity-50">
                  <img 
                  src={Facebook.src} 
                  width={Facebook.width}
                  height={Facebook.height}
                  alt="Facebook" 
                  loading="lazy" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/optimmet" rel="noopener noreferrer" className="transition-opacity duration-200 ease-in-out hover:opacity-50">
                  <img 
                  src={Linkedin.src} 
                  width={Linkedin.width}
                  height={Linkedin.height}
                  alt="Linkedin" 
                  loading="lazy" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/nosotros" className="text-[15px] leading-[1.5] mb-4 inline-block font-light hover:underline hover:underline-offset-2">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-[15px] leading-[1.5] mb-4 inline-block font-light hover:underline hover:underline-offset-2">
                  Sobre Optimmet
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-[15px] leading-[1.5] mb-4 inline-block font-light hover:underline hover:underline-offset-2"> 
                  Faqs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[15px] leading-[1.5] mb-4 inline-block font-light hover:underline hover:underline-offset-2"> 
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-[15px] leading-[1.5] mb-4 inline-block font-light hover:underline hover:underline-offset-2">
                  Contáctanos   
                </Link> 
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#62CFF4] text-[15px] mb-2"> 
              Servicios
            </h4>
            <ul>
              <li className="mb-2 block leading-none">
                <Link href="/servicios/asesorias" className="inline-flex gap-x-2 items-start hover:underline hover:underline-offset-2">
                  <span><Diamond/></span>
                  <span className="text-[15px] font-light leading-[1.2]">Asesorías en Eficiencia Energética y Gestión de la Energía</span>
                </Link>
              </li>
              <li className="mb-2 block leading-none">
                <Link href="/servicios/consultorias" className="inline-flex gap-x-2 items-start hover:underline hover:underline-offset-2">
                  <span><Diamond/></span>
                  <span className="text-[15px] font-light leading-[1.2]">Consultarías Técnicas - Procesos Minero Metalúrgicos</span>
                </Link>
              </li>
              <li className="mb-2 block leading-none">
                <Link href="/servicios/desarrollo-proyectos" className="inline-flex gap-x-2 items-start hover:underline hover:underline-offset-2">
                  <span><Diamond/></span>
                  <span className="text-[15px] font-light leading-[1.2]">Desarrollo de Proyectos de Sustentabilidad</span>
                </Link>
              </li>
              <li className="mb-2 block leading-none">
                <Link href="/servicios/capacitaciones" className="inline-flex gap-x-2 items-start hover:underline hover:underline-offset-2">
                  <span><Diamond/></span>
                  <span className="text-[15px] font-light leading-[1.2]">Capacitaciones Técnicas</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#62CFF4] text-[15px] mb-2"> 
              Contáctanos en
            </h4>
            <ul>
              <li className="mb-2">
                <Link href="tel:+56977465561" className="inline-flex gap-4 items-center hover:underline hover:underline-offset-2">
                  <span><Phone/></span>
                  <span className="text-[15px] font-light">+569 7746 5561</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="mailto:info@optimmet.cl" className="inline-flex gap-4 items-center hover:underline hover:underline-offset-2">
                  <span><Mail/></span>
                  <span className="text-[15px] font-light">info@optimmet.cl</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="inline-flex gap-4 items-center hover:underline hover:underline-offset-2">
                  <span><Location/></span>
                  <span className="text-[15px] font-light">Santiago, Chile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* copyright */}
        <p className="mt-8 text-right text-sm font-light relative">
          Desarrollado por <Link href="https://vanilla.cl" target="_blank" className="underline" rel="noreferrer noopener">Vanilla Diseño</Link>
        </p>  
      </div>
    </footer>
  )
}