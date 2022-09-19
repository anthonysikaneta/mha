import { useEffect, useId, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from './Container'

const members = require('../data/members.json')['members']

const days = [
  {
    name: 'Opening Day',
    date: 'April 4',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Steven McHail',
        role: 'Designer at Globex Corporation',
        image: 'stevenMchailImage',
      },
      {
        name: 'Jaquelin Isch',
        role: 'UX Design at InGen',
        image: 'jaquelinIschImage',
      },
      {
        name: 'Dianne Guilianelli',
        role: 'General Manager at Initech',
        image: 'dianneGuilianelliImage',
      },
      {
        name: 'Ronni Cantadore',
        role: 'Design Engineer at Weyland-Yutani',
        image: 'ronniCantadoreImage',
      },
      {
        name: 'Erhart Cockrin',
        role: 'Product Lead at Cyberdyne Systems',
        image: 'erhartCockrinImage',
      },
      {
        name: 'Parker Johnson',
        role: 'UI Designer at MomCorp',
        image: 'parkerJohnsonImage',
      },
    ],
  },
  {
    name: 'Members & Workshops',
    date: 'April 5',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Damaris Kimura',
        role: 'Senior Engineer at OCP',
        image: 'damarisKimuraImage',
      },
      {
        name: 'Ibrahim Frasch',
        role: 'Programmer at Umbrella Corp',
        image: 'ibrahimFraschImage',
      },
      {
        name: 'Cathlene Burrage',
        role: 'Frontend Developer at Buy n Large',
        image: 'cathleneBurrageImage',
      },
      {
        name: 'Rinaldo Beynon',
        role: 'Data Scientist at Rekall',
        image: 'rinaldoBeynonImage',
      },
      {
        name: 'Waylon Hyden',
        role: 'DevOps at RDA Corporation',
        image: 'waylonHydenImage',
      },
      {
        name: 'Giordano Sagucio',
        role: 'Game Developer at Soylent Corp',
        image: 'giordanoSagucioImage',
      },
    ],
  },
  {
    name: 'Interviews',
    date: 'April 6',
    dateTime: '2022-04-06',
    speakers: [
      {
        name: 'Andrew Greene',
        role: 'Frontend Developer at Ultratech',
        image: 'andrewGreeneImage',
      },
      {
        name: 'Heather Terry',
        role: 'Backend Developer at Xanatos Enterprises',
        image: 'heatherTerryImage',
      },
      {
        name: 'Piers Wilkins',
        role: 'Full stack Developer at BiffCo',
        image: 'piersWilkinsImage',
      },
      {
        name: 'Gordon Sanderson',
        role: 'Mobile Developer at Cobra Industries',
        image: 'gordonSandersonImage',
      },
      {
        name: 'Kimberly Parsons',
        role: 'Game Developer at Tyrell Corporation',
        image: 'kimberlyParsonsImage',
      },
      {
        name: 'Richard Astley',
        role: 'CEO at Roll Out',
        image: 'richardAstley',
      },
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Members() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  let i = 1

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Members
          </h2>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-3"
          vertical={tabOrientation === 'vertical'}
        >
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {members.map((member, idx) => (
                  <div key={idx}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][idx % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${idx % 3})` }}
                      >
                        <a href={'/members#member-' + i++}>
                          <Image
                            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            src={member.cover}
                            unoptimized={true}
                            height="100"
                            width="100"
                            alt=""
                            priority
                            sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </a>
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {member.vision || member.caption || member.primaryCaption}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
