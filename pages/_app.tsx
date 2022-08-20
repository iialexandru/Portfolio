import '../styles/scss/globals.scss'
import Head from 'next/head';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <title>Portfolio Site - Ipatov Ioan Alexandru</title>
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
