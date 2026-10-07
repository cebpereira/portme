import { Section } from '@/components/Section'
import { useContent } from '@/lib/i18n'

export function Education() {
  const content = useContent()

  return (
    <Section id="education" heading={content.education.heading}>
      <div className="space-y-8">
        {content.education.items.map((item) => (
          <div
            key={item.title}
            className="grid gap-x-8 gap-y-1 sm:grid-cols-[8.5rem_minmax(0,1fr)] lg:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <p className="font-mono text-xs leading-6 text-muted-foreground">{item.note}</p>
            <div>
              <h3 className="text-lg leading-snug font-medium">{item.title}</h3>
              <p className="text-cobalt">{item.institution}</p>
            </div>
          </div>
        ))}

        <div className="grid gap-x-8 gap-y-2 border-t border-border pt-6 sm:grid-cols-[8.5rem_minmax(0,1fr)] lg:grid-cols-[10rem_minmax(0,1fr)]">
          <h3 className="text-sm leading-6 text-muted-foreground">
            {content.education.languagesHeading}
          </h3>
          <dl className="space-y-1 leading-6">
            {content.education.languages.map((language) => (
              <div key={language.name} className="flex gap-2">
                <dt>{language.name}</dt>
                <dd className="text-muted-foreground">{language.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
