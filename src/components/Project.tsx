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
    <li>
      <div onClick={()=>setOpenModal(true)}>
        <img
          src={image_card.src}
          alt={title}
          width={image_card.width}
          height={image_card.height}
          loading="lazy"
          onClick={() => setOpenModal(true)}
        />
        <div>
          <h3 className="line-clamp-3">{project.title}</h3>
          <span>{company}</span>
          <span>{type}</span>
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