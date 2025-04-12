// src/pages/layout.tsx
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Oscar Madriz – Desarrollador y emprendedor</title>
        <meta
          name="description"
          content="Portafolio de Oscar Madriz, desarrollador full-stack apasionado por la tecnología y las startups."
        />
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}
