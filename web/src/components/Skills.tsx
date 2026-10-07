import { Section } from '@/components/Section'
import { useContent } from '@/lib/i18n'

export function Skills() {
  const content = useContent()

  return (
    <Section id="stack" heading={content.skills.heading}>
      <dl className="divide-y divide-border">
        {content.skills.groups.map((group) => (
          <div
            key={group.label}
            className="grid gap-x-8 gap-y-2 py-4 first:pt-0 sm:grid-cols-[8.5rem_minmax(0,1fr)] lg:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <dt className="text-sm leading-6 text-muted-foreground">{group.label}</dt>
            <dd className="flex flex-wrap gap-x-4 gap-y-1.5 leading-6">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
