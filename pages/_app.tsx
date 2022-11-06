import '../styles/scss/globals.scss'
import Head from 'next/head';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <title>Ipatov Ioan Alexandru - Web Application Engineering</title>
    <meta name="description" content="Web Portfolio for Ipatov Ioan Alexandru." />
    <meta name='robots' content='index, nofollow' />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
