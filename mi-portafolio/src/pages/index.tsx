import { GetStaticPropsContext } from 'next'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/ProjectSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
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
