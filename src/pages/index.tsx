import Head from 'next/head'

import Script from 'next/script'

import { Blurb } from '@/components/Blurb'
import { CoolSection } from '@/components/CoolSection'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Members } from '@/components/Members'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>MHA - Your Mental Health is Our Concern</title>
        <meta
          name="description"
          content="Bringing you within arms length of the help you need to live a happy and pressure free lifestyle. 'Happiness can be found even in the darkest of times, if one only remembers to turn on the light', we as the Mental Health Alliance act as your light."
        />
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=${'1234'}"
        ></Script>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', ${'1234'});`,
          }}
        />
      </Head>
      <main>
        <Hero />
        <Blurb />
        <CoolSection
          title={'Goal'}
          body={'To lead each and every Individual towards the help they need.'}
        />
        <Members />
        <Sponsors />
      </main>
      <Footer />
    </>
  )
}
