import { BlogAside, BlogGrid } from "."

interface Props {
  posts: any;
}

export const BlogMain = ({ posts}: Props) => {
  //console.log(WP_URI)
  return(
    <section className="grid sm:grid-cols-6">
      <BlogAside />
      <BlogGrid posts={posts} />
    </section>
  )
}