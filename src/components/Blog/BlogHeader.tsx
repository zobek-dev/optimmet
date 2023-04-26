import { DiamondBig } from "@/svg"

export const BlogHeader = () => {
  return(
    <section className="blog-header h-[639px] lg:h-[637px] w-full">
      <div className="wrapper h-full relative flex flex-col justify-center">
        <span className="bg-[#62CFF4] text-white block py-2 px-4  w-max mb-2 text-[17px] font-medium rounded-[10px] rounded-bl-none lg:translate-x-12">Blog</span>
        <h1 className="font-bold text-[30px] lg:text-[35px] bg-white px-6 py-4 rounded-[10px] w-full sm:max-w-[70%] md:max-w-[524px] leading-[1.4] rounded-tr-none rounded-bl-none lg:translate-x-12">Hacia una industria sustentable, eficiente y <strong className="font-bold text-[#62CFF4]">consciente de su entorno</strong></h1>
        <DiamondBig className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 -bottom-[30px]"/>
      </div>
    </section>
  )
}