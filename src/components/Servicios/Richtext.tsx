import { DiamondUnderline } from "@/svg"

export const Richtext = () => {
  return(
    <section className="py-12 lg:py-20">
      <div className="wrapper">
        <p className="text-center font-light text-[17px] lg:text-xl lg:max-w-[70%] mx-auto leading-[1.5] mt-2 mb-4 lg:mt-0 lg:mb-6">
        Queremos ser tu aliado en el proceso del mejoramiento, innovando en una mirada integral, que incorpore el uso eficiente de los recursos energéticos e hídricos, basado en metodologías y normativas internacionales de mejora continua.
        </p>
        <DiamondUnderline className="mx-auto"/>
      </div>
    </section>
  )
}