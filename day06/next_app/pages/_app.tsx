import '../styles/globals.css'
import Nav from './component/nav'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav></Nav>
      <Component {...pageProps} />
    </>
  )
}
