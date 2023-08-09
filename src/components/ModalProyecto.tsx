import { IconClose } from "@/svg"
import { StaticImageData } from "next/image"
import { Dispatch, SetStateAction } from "react"

interface Iprops{
  image: StaticImageData,
  title: string,
  content: string,
  company: string,
  type: string,
  openModal: boolean,
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

export const ModalProyecto = ({ image, title, content, company, type, openModal, setOpenModal }: Iprops) => {
  return(
    <>
    <div className={`${!openModal?'invisible':'active'} transition-visibility ease-in-out duration-150 fixed top-0 left-0 w-full h-full z-[9999] flex justify-center items-center bg-[rgba(0,0,0,.3)]`}>
      <div className="block">
        <div className="fixed top-0 left-0 bottom-0 right-0" onClick={()=>{
          setOpenModal(false)
        }}></div>
        <div className="bg-white block w-[90vw] md:w-[70vw] lg:w-[50vw] max-h-[100vh] h-max z-[99999] relative p-4 lg:p-8 pt-0 lg:pt-0 overflow-y-scroll rounded-xl">
          <div className="flex justify-end sticky top-0 left-0 bg-white py-4">
            <button className="transition-opacity duration-150 ease-in-out hover:opacity-70" onClick={()=>setOpenModal(false)}>
              <IconClose/>
              <span className="sr-only">Cerrar</span>
            </button>
          </div>
          <div className="grid md:grid-cols-4 gap-4 lg:gap-8">
            <div className="md:col-span-1">
              <img 
                src={image.src} 
                className="object-center object-cover aspect-square rounded-2xl w-[140px] h-auto" 
                width={image.width} 
                height={image.height} 
                alt={title} 
                loading="lazy"/>
            </div>           
            <div className="md:col-span-3">
              <span className="block w-max text-sm font-medium text-white bg-[#62CFF4] rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] py-2 px-2 mb-1">{company}</span>
              <span className="block border border-[#62cff4] bg-[#E5F9FF] w-max text-sm font-medium text-[#62cFF4] rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] py-2 px-2 mb-1">{type}</span>
              <h2 className="my-4 text-[#62cff4] font-bold leading-[1.2] text-[22px]">{title}</h2>
              <p className="text-[17px] font-light">{content}</p>
            </div>  
          </div>     
        </div>
      </div>   
      </div>
    </>
  )
}