import { BlogAside, BlogGrid } from "."

export const BlogMain = ({feed, posts, wp}:any) => {
  console.log(wp)
  return(
    <section className="grid sm:grid-cols-6">
      <BlogAside feed={feed}/>
      <BlogGrid posts={posts} wp={wp}/>
    </section>
  )
}