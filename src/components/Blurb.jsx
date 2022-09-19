import React from 'react'
import { Container } from './Container'

const blurbs = [
  {
    title: 'Objective',
    body: 'To become the regions number one mental health service hub, for people of all ages to access mental health services.',
  },
  {
    title: 'Focus',
    flip: true,
    body: 'The Mental Health Alliance is aimed to link you, your family member, loved one or friend to the various mental health services that may be required. We are connecting you to different mental health organisation that offer a various range of services. We provide you with a user friendly platform that allows you to browse through easily and find the help you need.',
  },
  {
    title: 'About The Alliance',
    body: 'Our organisation is free and open to receiving members that offer any mental health services. One does not entirely need to be involved with an organisation to be a member, but can be an independent and licensed practitioner. Our doors are open to all those that know they can make a difference to the lives of many, regarding their mental health. Our service to you is built on the foundations of the three qualities listed below: Trust. Confidentiality. Freedom of expression. "Happiness can be found even in the darkest of times, if one only remembers to turn on the light", we as the Mental Health Alliance act as your light.',
  },
]

function Body(body) {
  return (
    <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
      <p className="mt-2 font-display text-2xl tracking-tight text-blue-900">
        {body}
      </p>
    </div>
  )
}

function Title(title) {
  return (
    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
      <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
        {title}
      </h2>
    </div>
  )
}

export function Blurb() {
  return (
    <>
      {blurbs.map(({ title, body, flip = false }) => (
        <section
          id="schedule"
          aria-label="Schedule"
          className="py-10 sm:py-16"
          key={title}
        >
          <Container className="relative z-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                {title && flip ? Body(body) : Title(title)}
                {body && flip ? Title(title) : Body(body)}
              </div>
            </div>
          </Container>
        </section>
      ))}
    </>
  )
}
