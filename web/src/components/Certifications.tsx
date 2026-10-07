import { Section } from '@/components/Section'
import { useContent } from '@/lib/i18n'

export function Certifications() {
  const content = useContent()

  return (
    <Section id="certifications" heading={content.certifications.heading}>
      <ul className="divide-y divide-border">
        {content.certifications.items.map((item) => (
          <li
            key={`${item.title}-${item.year}`}
            className="grid gap-x-8 gap-y-1 py-3.5 first:pt-0 sm:grid-cols-[8.5rem_minmax(0,1fr)] lg:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <span className="font-mono text-xs leading-6 text-muted-foreground">{item.year}</span>
            <span className="flex flex-wrap items-baseline gap-x-2.5 leading-6">
              {item.title}
              <span className="text-sm text-muted-foreground">{item.issuer}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
