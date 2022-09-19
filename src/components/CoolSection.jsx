import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'

export function CoolSection({ title, body }) {
  return (
    <section
      id="free-chapters"
      aria-label="Free preview"
      className="scroll-mt-14 bg-blue-600 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Pattern className="invisible absolute -top-32 left-0 w-full sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto  md:left-2/3 lg:visible lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-1 lg:py-28 xl:py-32"
        >
          <div className="place-content-center">
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              {title}
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-200">{body}</p>
          </div>
        </Container>
      </div>
    </section>
  )
}
