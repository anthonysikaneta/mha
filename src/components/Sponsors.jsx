import Image from 'next/future/image'

import { Container } from './Container'
import logoLifeLine from '../images/logos/logo-lifeline-childline_67b0f946.svg'
import logoSerenity from '../images/logos/serenity.jpeg'
import logoStrongMinds from '../images/logos/strong_minds.jpeg'
import logoWalkWithMe from '../images/logos/walk_with_me.jpeg'

const sponsors = [
  {
    name: 'Lifeline/Childline',
    logo: logoLifeLine,
    website: 'https://clzambia.org/',
  },
  {
    name: 'Serenity',
    logo: logoSerenity,
    website: 'https://www.serenitywellnesscenter.org/',
  },
  {
    name: 'Strong Mings',
    logo: logoStrongMinds,
    website: 'https://strongminds.org/',
  },
  {
    name: 'Walk With Me',
    logo: logoWalkWithMe,
    website: 'https://www.facebook.com/walkwithmezm',
  },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Click our members' logo to see their websites
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <a href={sponsor.website} target="_blank" key={sponsor.name}>
              <div
                key={sponsor.name}
                className="flex items-center justify-center"
              >
                <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
