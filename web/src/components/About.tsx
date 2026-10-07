import { Section } from '@/components/Section'
import { useContent } from '@/lib/i18n'

export function About() {
  const content = useContent()

  return (
    <Section id="about" heading={content.about.heading}>
      <div className="max-w-[62ch] space-y-5 text-[1.0625rem] leading-relaxed text-foreground/85">
        {content.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
