import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string};
  _embedded: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
  slug: string;
}

interface Props{
  id: number;
  wp: string
}

export const PostCard = ({id, wp}: Props) => {
  const [post, setPost] = useState<Post | null>(null);
  const url = 'https://mediahuella.com/blog-optimmet/wp-json/wp/v2/posts/' + id + '?_embed';

  console.log(post);

  useEffect(() => {
    async function fetchPost(){
      const response = await axios<Post>(url);
      setPost(response.data);
    }
    fetchPost();
  },[id]);

  if(!post) {
    return <li>Cargando...</li>
  }

  const imageUrl = post._embedded['wp:featuredmedia']?.[0]?.source_url;
  console.log(post.title)
  const title = post.title.rendered

  return(
    <li key={id}>
      <Link href={`/blog/${post.slug}`}>
        <div className="relative max-w-[300px]">
          <img src={imageUrl} width={300} height={300} loading="lazy" alt={title} className="aspect-[4/3] object-cover object-center rounded-xl" />
          <div className="bg-white mx-4 -translate-y-20 p-4 rounded-tl-xl rounded-br-xl border border-[#62CFF4]">
            <span>{post.title.rendered}</span>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className="prose text-[15px] mb-4 text-[#556170] line-clamp-3 w-full"/>
           {/*<span className="text-[15px]">{published_at}</span> */}

          </div>
        </div>
      </Link>
    </li>
  )
}

// <Link href={`/blog/${post.slug}`}>
// <div className="relative">
//   <img 
//     src={image.src} 
//     alt={title} 
//     width={image.width} 
//     height={image.height}
//     className="aspect-[4/3] object-cover object-center rounded-xl" 
//     loading="lazy"
//   />
//   <div className="bg-white mx-4 -translate-y-20 p-4 rounded-tl-xl rounded-br-xl border border-[#62CFF4]">
//     <h3 className="text-[#62CFF4] font-bold text-[25px] leading-[1.2] mb-4">{title}</h3>
//     
//   </div>    
// </div>
// </Link>  