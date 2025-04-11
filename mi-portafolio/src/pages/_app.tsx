import type { AppProps } from 'next/app'
import { IntlProvider } from 'next-intl'
import { useRouter } from 'next/router'
import Layout from './layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const { locale = 'en' } = useRouter()

  return (
    <IntlProvider messages={pageProps.messages} locale={locale}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  )
}
