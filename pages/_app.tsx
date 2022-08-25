import '../styles/scss/globals.scss'
import Head from 'next/head';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <title>Ipatov Ioan Alexandru - Web Develoepr</title>
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
