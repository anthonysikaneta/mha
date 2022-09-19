import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { Member } from '@/components/Member'
import { NavBar } from '@/components/NavBar'

const members = require('../data/members.json')['members']

export default function Members() {
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
      <NavBar />
      {members.map((member, idx) => (
        <Member key={idx} member={member} />
      ))}
    </>
  )
}
