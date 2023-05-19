import { BlogAside, BlogGrid } from "."

export const BlogMain = ({ posts, wp }:any) => {
  console.log(wp)
  return(
    <section className="grid sm:grid-cols-6">
      <BlogAside/>
      <BlogGrid posts={posts} wp={wp}/>
    </section>
  )
}