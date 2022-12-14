import 'focus-visible'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../utils/gtag'

import '../styles/tailwind.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <Component {...pageProps} />
}
