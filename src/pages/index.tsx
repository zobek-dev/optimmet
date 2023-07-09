import Head from 'next/head'

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

export default function Home() {
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
      <HomeBlog />
    </>
  )
}
