'use client'

import { useTranslations } from 'next-intl'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ContactSection() {
  const t = useTranslations('Contact')

  return (
    <section id="contact" className="w-full bg-white py-24 px-4 md:px-12">
      <div className="max-w-3xl mx-auto space-y-12 text-blue-900 text-center">
        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold"
        >
          {t('title')}
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-blue-800 max-w-xl mx-auto"
        >
          {t('description')}
        </motion.p>

        {/* Formulario */}
        <motion.form
          action="https://formsubmit.co/oscarmadriz25@gmail.com"
          method="POST"
          target="_blank"
          className="space-y-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <input type="hidden" name="_captcha" value="false" />

          <Input
            name="name"
            type="text"
            placeholder={t('name')}
            required
            className="bg-white text-blue-900"
          />

          <Input
            name="email"
            type="email"
            placeholder={t('email')}
            required
            className="bg-white text-blue-900"
          />

          <Textarea
            name="message"
            placeholder={t('message')}
            rows={5}
            required
            className="bg-white text-blue-900"
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-md"
          >
            {t('send')}
          </Button>
        </motion.form>

        {/* Redes sociales (opcional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6 pt-12"
        >
          <h3 className="text-2xl font-semibold">{t('alsoReach')}</h3>

          <div className="flex justify-center gap-6 flex-wrap">
            <SocialIcon
              href="https://github.com/OscarDME"
              icon={<Github className="w-6 h-6" />}
              label="GitHub"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/oscar-daniel-madriz-estrada-2aa94720b/"
              icon={<Linkedin className="w-6 h-6" />}
              label="LinkedIn"
            />
            <SocialIcon
              href="mailto:oscarmadriz25@gmail.com"
              icon={<Mail className="w-6 h-6" />}
              label="Email"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex flex-col items-center hover:text-blue-600 transition"
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        className="p-4 bg-blue-100 rounded-full shadow-md"
      >
        {icon}
      </motion.div>
      <span className="mt-2 text-sm">{label}</span>
    </Link>
  )
}
