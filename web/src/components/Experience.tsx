import { Section } from '@/components/Section'
import { useContent } from '@/lib/i18n'

export function Experience() {
  const content = useContent()

  return (
    <Section id="experience" heading={content.experience.heading}>
      <ol className="divide-y divide-border">
        {content.experience.items.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            className="grid gap-x-8 gap-y-3 py-7 first:pt-0 sm:grid-cols-[8.5rem_minmax(0,1fr)] lg:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <p className="flex items-baseline gap-2 font-mono text-xs leading-6 text-muted-foreground">
              {item.current && (
                <span
                  className="size-2 shrink-0 translate-y-[-1px] rounded-full bg-ochre"
                  aria-hidden="true"
                />
              )}
              <span>{item.period}</span>
              {item.current && <span className="sr-only">{content.experience.currentLabel}</span>}
            </p>

            <div>
              <h3 className="text-lg leading-snug font-medium">{item.role}</h3>
              <p className="text-cobalt">{item.company}</p>

              <ul className="mt-3 max-w-[60ch] space-y-1.5 text-[0.9375rem] leading-relaxed text-foreground/80">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.stack.map((technology) => (
                  <li
                    key={technology}
                    className="bg-secondary px-1.5 py-0.5 font-mono text-[0.6875rem] text-secondary-foreground"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
