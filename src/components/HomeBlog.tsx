import { DummyBlog } from "@/images"
import { StaticImageData } from "next/image"
import { DiamondUnderline } from "@/svg"
import { PostCard } from "./PostCard"

const posts = [
  {
    title: "Lorem, ipsum dolor.",
    excerpt: "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolores quia quibusdam consequuntur nostrum quasi quos labore harum id blanditiis!</p>",
    image: DummyBlog,
    slug: "adfadfadf",
    published_at: "22-08-2023"
  },
  {
    title: "Lorem, ipsum dolor.",
    excerpt: "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolores quia quibusdam consequuntur nostrum quasi quos labore harum id blanditiis!</p>",
    image: DummyBlog,
    slug: "adfadfadf",
    published_at: "22-08-2023"
  },
  {
    title: "Lorem, ipsum dolor.",
    excerpt: "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur dolores quia quibusdam consequuntur nostrum quasi quos labore harum id blanditiis!</p>",
    image: DummyBlog,
    slug: "adfadfadf",
    published_at: "22-08-2023"
  }
]

export const HomeBlog = () => {
  return(
    <section className="py-12 lg:py-24">
      <div className="wrapper">
        <h2 className="text-center font-bold text-[30px] lg:text-[40px] leading-[1.2] mb-2">Blog</h2>
        <p className="font-light text-[17px] lg:text-[20px] text-center mb-2">Conoce más sobre temas de eficiencia y mucho más.</p>
        <DiamondUnderline className="mx-auto mb-8"/>
        <ul tabIndex={-1} className="grid md:grid-cols-3 gap-8 md:gap-4 justify-items-center">
          {posts && posts.map((post,index)=>(
            <PostCard key={index} post={post}/>
          ))}
        </ul>
      </div>
    </section>
  )
}

