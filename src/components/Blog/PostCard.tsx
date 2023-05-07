import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
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
        <img src={imageUrl} width={400} height={400} loading="lazy" alt={title}/>
      </Link>
      <span>{title}</span>
    </li>
  )
}