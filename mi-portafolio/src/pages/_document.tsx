// src/pages/_document.tsx

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Título por defecto */}
        <title>Oscar Madriz – Desarrollador y emprendedor</title>

        {/* Meta descripción */}
        <meta
          name="description"
          content="Portafolio de Oscar Madriz, desarrollador full-stack apasionado por la tecnología y las startups."
        />

        {/* Ícono del navegador (favicon) */}
        <link rel="icon" href="/logo.png" type="image/png" />

        {/* Otros metadatos opcionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
