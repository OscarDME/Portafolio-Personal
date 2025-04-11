// /middleware.ts
import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/en') ||
    pathname.startsWith('/es') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const acceptLang = request.headers.get('accept-language') || ''
  const locale = acceptLang.startsWith('es') ? 'es' : 'en'

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
