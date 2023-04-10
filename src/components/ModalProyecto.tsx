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
    <div className={`${!openModal?'invisible':'active'} fixed top-0 left-0 w-full h-full z-[9999] flex justify-center items-center bg-[rgba(0,0,0,.3)]`}>
      <div className="block">
        <div className="fixed top-0 left-0 bottom-0 right-0" onClick={()=>{
          setOpenModal(false)
        }}></div>
        <div className="bg-white block w-[50vw] z-[99999] relative p-4">
          <button onClick={()=>setOpenModal(false)}>Close</button>
          <img 
            src={image.src} 
            className="" 
            width={image.width} 
            height={image.height} 
            alt={title} 
            loading="lazy"/>
          <h2>{title}</h2>
          <span>{company}</span>
          <span>{type}</span>
          <p>{content}</p>
        </div>
      </div>   
      </div>
    </>
  )
}