import Link from "next/link"
import { StaticImageData } from "next/image"

interface Ipost{
  title: string,
  excerpt: string,
  image: StaticImageData,
  slug: string,
  published_at:string
}

interface Iprop{
  post: Ipost
}

export const PostCard = ({post}: Iprop ) => {
  const {image, title, excerpt, published_at } = post
  return(
  <li className="max-w-[300px] -mb-20">
    <Link href={`/blog/${post.slug}`}>
      <div className="relative">
        <img 
          src={image.src} 
          alt={title} 
          width={image.width} 
          height={image.height}
          className="aspect-[4/3] object-cover object-center rounded-xl" 
          loading="lazy"
        />
        <div className="bg-white mx-4 -translate-y-20 p-4 rounded-tl-xl rounded-br-xl border border-[#62CFF4]">
          <h3 className="text-[#62CFF4] font-bold text-[25px] leading-[1.2] mb-4">{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} className="prose text-[15px] mb-4 text-[#556170]"/>
          <span className="text-[15px]">{published_at}</span>
        </div>    
      </div>
    </Link>                  
  </li>
  )
}

