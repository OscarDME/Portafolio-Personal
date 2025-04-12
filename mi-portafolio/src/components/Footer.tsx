'use client'

import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-white/50 backdrop-blur-sm border-t border-gray-200 dark:bg-black/30 dark:border-gray-800">
      <Separator />
      <div className="px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Oscar Madriz — Todos los derechos reservados.
        </p>

        <div className="flex gap-6 items-center">
          <Link
            href="https://github.com/OscarDME"
            target="_blank"
            className="group flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Github size={18} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/oscar-daniel-madriz-estrada-2aa94720b/"
            target="_blank"
            className="group flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>

          <Link
            href="mailto:oscarmadriz25@gmail.com"
            className="group flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
