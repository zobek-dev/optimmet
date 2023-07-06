import { DiamondUnderline } from "@/svg"
import { PostCard } from "./PostCard";

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string};
  date: string;
  _embedded: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
  slug: string;
}


interface Props{
  posts: Post[];
  uri: string;
}

export const HomeBlog = ({posts, uri}: Props) => {
  return(
    <section className="py-12 lg:py-24">
      <div className="wrapper">
        <h2 className="text-center font-bold text-[30px] lg:text-[40px] leading-[1.2] mb-2">Blog</h2>
        <p className="font-light text-[17px] lg:text-[20px] text-center mb-2">Conoce más sobre temas de eficiencia y mucho más.</p>
        <DiamondUnderline className="mx-auto mb-8"/>
        <ul tabIndex={-1} className="grid md:grid-cols-3 gap-8 md:gap-4 justify-items-center">
          {posts && posts.map((post,index)=> (
              <PostCard key={index} id={post.id} uri={uri}/>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

