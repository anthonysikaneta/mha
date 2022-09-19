import { Container } from '@/components/Container'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <a href="/">
            <span className="sr-only">Mental Health Alliance Zambia</span>
            <img
              className="h-12 w-auto"
              src="images/logos/MHAZ-01.png"
              alt=""
            />
          </a>
        </div>
      </Container>
    </header>
  )
}
