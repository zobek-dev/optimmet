import Head from 'next/head'
import Image from 'next/image'
import { Hero, HomeMarcas } from '@/components';

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMarcas/>          
    </>
  )
}
