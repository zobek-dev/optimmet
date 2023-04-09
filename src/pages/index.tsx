import Head from 'next/head'
import Image from 'next/image'
import { Hero, HomeMarcas, HomeServices, HomeSobre, HomeNosEligen } from '@/components';

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMarcas/> 
      <HomeSobre/>
      <HomeServices/>       
      <HomeNosEligen/>
    </>
  )
}
