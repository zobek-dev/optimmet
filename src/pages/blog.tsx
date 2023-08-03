// import axios from "axios";
// import { BlogHeader, BlogMain } from "@/components/Blog";
// import { Seo } from "@/components";
// import { WPBLOG_URI, POSTS_URL } from "@/constants";


// interface Props{
//   totalPages: number
// }

// const Blog = ({totalPages} : Props) => {
//   // console.log(WP_URI)
//   return(
//     <>
//       <Seo title="Blog" description=""/>
//       <BlogHeader/>
//       <BlogMain totalPages={totalPages}/>
//     </>
//   )
// }

// export default Blog

// export async function getStaticProps(){
// //  const url = `https://graph.instagram.com/me/media?fields=id,media_type,caption,media_url,owner,timestamp,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
//   //const  = `${process.env.WPBLOG_URI}/wp-json/wp/v2/posts?per_page=12`
//   const response = await axios(`${WPBLOG_URI}${POSTS_URL}?_embed&per_page=12`);
//   const posts = response.data;
//   const totalPages = parseInt(response.headers['x-wp-totalpages']);

//   return { props: {
//     totalPages
//   }};
// }

export default function Blog() {
  return (
    <h1>Blog</h1>
  )
}