import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header, Footer } from '@/components/'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Header/>
      <main className='min-h-[90vh]'> 
        <Component {...pageProps}/>
      </main>
      <Footer/>
    </>
  )
}
