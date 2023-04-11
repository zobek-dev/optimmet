import Head from 'next/head'
import { Hero, HomeMarcas, HomeServices, HomeSobre, HomeNosEligen, HomeProyectos, HomeValores, HomeBlog } from '@/components';

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMarcas/> 
      <HomeSobre/>
      <HomeServices/>       
      <HomeNosEligen/>
      <HomeProyectos/>
      <HomeValores/>
      <HomeBlog/>
    </>
  )
}
