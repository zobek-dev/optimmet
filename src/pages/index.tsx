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

const seo = {
  title: "Optimiza tus procesos y la gestión de recursos",
  description: "Maximiza la eficiencia de tus proyectos con Optimmet. Mejora la productividad y gestiona de manera efectiva los recursos"
}

export default function Home() {
  return (
    <>
      <Seo title={seo?.title} description={seo?.description}/>
      <Hero />
      <HomeMarcas />
      <HomeSobre />
      <HomeServices />
      <HomeNosEligen />
      <HomeProyectos />
      <HomeValores />
      <HomeBlog />
    </>
  );
}
