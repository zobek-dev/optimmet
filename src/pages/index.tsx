import Head from 'next/head'
import axios from 'axios'; 

import { Hero, HomeMarcas, HomeServices, HomeSobre, HomeNosEligen, HomeProyectos, HomeValores, HomeBlog } from '@/components';

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


export default function Home({ posts}: any) {
  return (
    <>
      <Hero/>
      <HomeMarcas/>
      <HomeSobre/>
      <HomeServices/>       
      <HomeNosEligen/>
      <HomeProyectos/>
      <HomeValores/>
      {/* <HomeBlog posts={posts}/>  */}
    </>
  )
}

// export async function getStaticProps(){
//   const url = `${process.env.WPBLOG_URI}wp-json/wp/v2/posts?per_page=3`

//   const response = await axios<Post[]>(url);
//   const posts = response.data;

//   return {
//     props:{
//       posts
//     }
//   }
// }