'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations('Home')
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const text = t('title')
    const chars = text.split('')
    const target = titleRef.current

    if (!target) return
    target.textContent = ''

    chars.forEach((char) => {
      const span = document.createElement('span')
      span.textContent = char
      span.style.opacity = '0'
      target.appendChild(span)
    })

    gsap.to(target.children, {
      opacity: 1,
      duration: 0.2,
      stagger: 0.08,
      ease: 'none'
    })
  }, [t])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fondos animados */}
      <div className="bg" />
      <div className="bg bg2" />
      <div className="bg bg3" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full gap-8 md:gap-16 text-center md:text-left px-4 md:px-16">
        {/* Imagen */}
        <div className="w-80 h-80 relative rounded-full overflow-hidden shadow-xl bg-white transition-transform duration-300 hover:scale-105">
          <Image src="/yo.png" alt="Yo" fill className="object-cover" priority />
        </div>

        {/* Contenido */}
        <div className="max-w-xl space-y-4">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-blue-950 whitespace-nowrap"
          ></h1>

          <p className="text-lg md:text-2xl text-blue-800">{t('subtitle')}</p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/projects">
              <Button
                size="xl"
                className="bg-blue-600 hover:bg-blue-700 text-white text-md"
              >
                {t('cta')}
              </Button>
            </Link>
          </div>

          {/* Redes sociales */}
          <div className="pt-4 flex justify-center md:justify-start gap-6">
            <SocialIcon
              href="https://github.com/OscarDME"
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/oscar-daniel-madriz-estrada-2aa94720b/"
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
            />
            <SocialIcon
              href="mailto:oscarmadriz25@gmail.com"
              icon={<Mail className="w-5 h-5" />}
              label="Email"
            />
          </div>
        </div>
      </div>

      {/* Scroll animado */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-blue-800 text-sm animate-bounce z-20">
        ↓ {t('scroll')}
      </div>
    </section>
  )
}

function SocialIcon({
  href,
  icon,
  label
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex items-center gap-2 text-blue-800 hover:text-blue-600 transition"
    >
      <div className="p-2 bg-blue-100 rounded-full shadow-md group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-sm hidden sm:inline">{label}</span>
    </Link>
  )
}
