import { GetStaticPropsContext } from 'next'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/ProjectSection'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  }
}
