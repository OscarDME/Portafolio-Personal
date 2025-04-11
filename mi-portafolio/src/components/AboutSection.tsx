'use client'

import { useTranslations } from 'next-intl'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutSection() {
  const t = useTranslations('About')
  const stack = t.raw('stack') as string[]
  const education = t.raw('education') as {
    title: string
    institution: string
    year: string
  }[]

  return (
    <section className="relative w-full py-24 px-4 md:px-12" id="about">
      {/* Fondo diagonal con gradiente */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300" />
      <div className="absolute inset-0 z-0 clip-diagonal bg-white" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Contenido con animación lateral */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-10 text-blue-900"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-sans">{t('title')}</h2>

          <p className="text-lg md:text-xl leading-relaxed text-blue-800">
            {t('intro')}
          </p>

          {/* Stack tecnológico */}
          <div>
            <h3 className="text-xl font-semibold mb-3">{t('techTitle')}</h3>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="text-sm text-blue-800 border-blue-200 bg-white shadow-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Educación */}
          <div>
            <h3 className="text-xl font-semibold mb-3">{t('eduTitle')}</h3>
            <ul className="space-y-2 text-blue-800">
              {education.map((edu, idx) => (
                <li key={idx}>
                  <p className="font-medium">{edu.title}</p>
                  <p className="text-sm">{edu.institution} – {edu.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Imagen decorativa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/about.jpg"
            alt="About section"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 65% 0, 55% 100%, 0% 100%);
        }
      `}</style>
    </section>
  )
}
