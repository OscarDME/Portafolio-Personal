import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <Separator />
      <div className="px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Tu Nombre. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="https://github.com/tuusuario" target="_blank" className="hover:underline">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/tuusuario" target="_blank" className="hover:underline">
            LinkedIn
          </Link>
          <Link href="mailto:tuemail@ejemplo.com" className="hover:underline">
            Email
          </Link>
        </div>
      </div>
    </footer>
  )
}
