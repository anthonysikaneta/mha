import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'

export function TableOfContents({ services }) {
  return (
    <section id="table-of-contents" aria-labelledby="table-of-contents-title">
      <Container>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list">
                {Object.entries(services)
                  .slice(0, isExpanded ? undefined : 7)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="divide-y divide-slate-300/30 rounded-2xl bg-slate-50 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="mt-4 text-lg tracking-tight text-slate-700"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
