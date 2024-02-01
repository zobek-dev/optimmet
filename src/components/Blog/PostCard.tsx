import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import moment from 'moment'
import 'moment/locale/es'
import { Placeholder } from '../Placeholder'

interface Post {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  date: string
  _embedded: {
    'wp:featuredmedia'?: {
      source_url: string
    }[]
  }
  slug: string
}

interface Props {
  id: number
}

export const PostCard = ({ id }: Props) => {
  moment.locale('es')

  // console.log(WP_URI)
  const [post, setPost] = useState<Post | null>(null)
  const [image, setImage] = useState<any | null>(null)

  const url =
    'https://optimmet.cl/headless-optimmet/wp-json/wp/v2/posts/' +
    id +
    '?_embed'

  useEffect(() => {
    async function fetchPost() {
      const response = await axios<Post>(url)
      setPost(response.data)
      setImage(response.data._embedded['wp:featuredmedia']?.[0]?.source_url)
    }
    fetchPost()
  }, [id])

  if (!post) {
    return <Placeholder />
  }

  const title = post.title.rendered

  //console.log(post)
  return (
    <li>
      <Link href={`/blog/${post.slug}`}>
        <div className="relative w-full sm:max-w-[300px] -mb-20 flex flex-col items-center">
          <img
            src={image}
            width={400}
            height={400}
            loading="lazy"
            alt={title}
            className="w-full aspect-[4/3] object-cover object-center rounded-xl"
          />
          <div className="bg-white mx-4 -translate-y-20 p-4 rounded-tl-xl rounded-br-xl border border-[#62CFF4]">
            <h3 className="text-[#62CFF4] font-bold text-[25px] leading-[1.2] mb-4 line-clamp-3">
              {post.title.rendered}
            </h3>
            <div
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              className="prose text-[15px] mb-4 text-[#556170] line-clamp-3 w-full"
            />
            <span className="text-[15px]">
              {moment(post.date).format('LL')}
            </span>
          </div>
        </div>
      </Link>
    </li>
  )
}
