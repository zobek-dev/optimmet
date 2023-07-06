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

interface Props {
  posts: Post[],
  uri: string,
}

export default function Home({posts, uri}: Props) {
  return (
    <>
      <Head>
        <title>Optimmet - Optimiza tus procesos mineros</title>
        <link rel="icon" href="favicon.png" type="image/png"/>
      </Head>
      <Hero/>
      <HomeMarcas/>
      <HomeSobre/>
      <HomeServices/>       
      <HomeNosEligen/>
      <HomeProyectos/>
      <HomeValores/>
      <HomeBlog posts={posts} uri={uri}/>
    </>
  )
}

export async function getStaticProps(){
  const uri = process.env.WPBLOG_URI;
  const url = `${process.env.WPBLOG_URI}/wp-json/wp/v2/posts?per_page=3`;

  const response = await axios<Post[]>(url);
  const posts = response.data;

  return {
    props:{
      posts,
      uri
    }
  }
}