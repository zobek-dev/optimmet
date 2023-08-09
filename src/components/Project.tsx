import { ModalProyecto } from "./ModalProyecto"
import { StaticImageData } from "next/image"
import { useState } from "react"

interface IProject {
  title: string,
  image_card: StaticImageData,
  company: string,
  type: string,
  image_modal: StaticImageData,
  content: string
}

interface Proyecto {
  project: IProject
}

export const Project = ({ project }: Proyecto) => {
  const [openModal, setOpenModal] = useState(false)
  const { title, image_card, image_modal, content, company, type } = project
  return (
    <li className="">
      <div onClick={()=>setOpenModal(true)} className="group max-w-[360px] -mb-24">
        <img
          src={image_card.src}
          alt={title}
          width={image_card.width}
          height={image_card.height}
          loading="lazy"
          className="w-[232px] h-auto object-cover aspect-square object-center rounded-2xl"
        />
        <div className="bg-white py-6 px-6 rounded-tl-[10px] rounded-br-[10px] border border-[#62cff4] w-[90%] translate-x-8 -translate-y-24 relative group-hover:bg-[#62cff4] transition-colors ease-in-out duration-200 min-w-[256px]">
          <h3 className="line-clamp-3 text-[17px] font-medium mb-4 group-hover:text-white transition-colors ease-in-out duration-200 min-h-[80px]">{project.title}</h3>
          <span className="block border border-[#62cff4] bg-[#62cff4] w-max text-sm font-medium text-white rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] py-2 px-2 mb-2 -translate-x-16 group-hover:text-[#62cff4] group-hover:bg-white transition-colors ease-in-out duration-200">{company}</span>
          <span className="block border border-[#62cff4] bg-[#E5F9FF] w-max text-sm font-medium text-[#62cFF4] rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] py-2 px-2 mb-2 -translate-x-16">{type}</span>
        </div>
      </div>
      <ModalProyecto
        title={title}
        image={image_modal}
        content={content}
        company={company}
        type={type}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </li>
  )
}