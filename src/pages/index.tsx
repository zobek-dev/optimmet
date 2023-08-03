import {
  Hero,
  HomeMarcas,
  HomeServices,
  HomeSobre,
  HomeNosEligen,
  HomeProyectos,
  HomeValores,
  HomeBlog,
  Seo
} from "@/components";

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded: {
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
  };
  slug: string;
}

export default function Home() {
  return (
    <>
      <Seo title="Optimizamos tus procesos" description=""/>
      <Hero />
      <HomeMarcas />
      <HomeSobre />
      <HomeServices />
      <HomeNosEligen />
      <HomeProyectos />
      <HomeValores />
      {/* <HomeBlog /> */}
    </>
  );
}
