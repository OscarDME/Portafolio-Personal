/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
