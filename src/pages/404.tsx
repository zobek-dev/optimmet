import { Plug404 } from '@/images/'
import { DiamondBig } from '@/svg';
import Link from 'next/link';

const Custom404 = ()=>{

  return(
    <div className="flex min-h-[100vh] justify-center items-center flex-col bg-white">
      <DiamondBig className=""/>
      <h1 className="text-[60px] md:text-[80px] lg:text-[100px] text-center font-bold leading-none uppercase my-8">Error 404</h1>
      <img src={Plug404.src} alt="Error 404" loading="eager" width={Plug404.width} height={Plug404.height}/>
      <p className="mt-8 mb-4 text-[20px] text-center">Página no encontrada</p>
      <Link href="/" className="bg-[#C7E22B] block w-max px-4 py-2 rounded-[32px] text-[#08376B] text-[17px] font-medium ">Ir al inicio</Link>
    </div>
  )
}

export default Custom404;