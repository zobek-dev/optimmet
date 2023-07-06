import { BlogHeader, BlogMain } from "@/components/Blog";
import axios from "axios";

interface Props{
  posts: any,
}

const Blog = ({posts} : Props) => {
  // console.log(WP_URI)
  return(
    <>
      <BlogHeader/>
      <BlogMain posts={posts}/>
    </>
  )
}

export default Blog

export async function getStaticProps(){
//  const url = `https://graph.instagram.com/me/media?fields=id,media_type,caption,media_url,owner,timestamp,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  //const  = `${process.env.WPBLOG_URI}/wp-json/wp/v2/posts?per_page=12`
  const WP_URI = `${process.env.WPBLOG_URI}`
  //const wp = `${process.env.WPBLOG_URI}/wp-json/wp/v2/posts/`

//  https://mediahuella.com/blog-optimmet/wp-json/wp/v2/posts/

//  const insta = await axios(url);
//  const feed = insta.data;

  const wpPosts = await axios(`${WP_URI}/wp-json/wp/v2/posts?per_page=12`);
  const posts = wpPosts.data;

//   console.log(feed);
//   // const feed = await axios
  return { props: {
     posts
  }};
}