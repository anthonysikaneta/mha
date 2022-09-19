import Image from 'next/future/image'

import { Container } from './Container'
import backgroundImage from '../images/background.jpg'
import coverImage from '../images/logos/MHAZ-01.png'

import { Button } from '@/components/Button'

export function Hero() {
  return (
    <>
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
          <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
            <div className="relative flex items-end lg:col-span-5 lg:row-span-1">
              <div className="relative z-10 mx-auto flex w-64 rounded-xl  shadow-xl md:w-80 lg:w-auto">
                <button
                  type="button"
                  className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <img
                    className="w-full"
                    src="../images/logos/MHAZ-01.png"
                    alt="MHA Logo"
                  />
                </button>
              </div>
            </div>
            <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
              <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
                  <span className="block text-blue-600">Your</span>
                  <span className="block text-indigo-600">Mental Health</span>
                  <span className="block text-blue-600">is Our Concern</span>
                </h1>
                <p className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
                  Bringing you within arms length of the help you need to live a
                  happy and pressure free lifestyle. "Happiness can be found
                  even in the darkest of times, if one only remembers to turn on
                  the light", we as the Mental Health Alliance act as your
                  light.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/members" color="blue">
                    Get Help
                  </Button>
                  <Button href="#footer" variant="outline" color="blue">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Container>
    </>
  )
}
