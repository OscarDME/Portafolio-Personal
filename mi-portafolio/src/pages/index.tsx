import { GetStaticPropsContext } from 'next'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/ProjectSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import MiniProjectsSection from '@/components/MiniProjectsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <MiniProjectsSection />
      <AboutSection />
      <ContactSection />
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
