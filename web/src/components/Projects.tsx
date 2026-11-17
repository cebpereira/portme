import { ScreenGallery } from '@/components/ScreenGallery'
import { Section } from '@/components/Section'
import SpotlightCard from '@/components/SpotlightCard'
import { useTheme } from '@/lib/theme'
import { useContent } from '@/lib/i18n'

export function Projects() {
  const content = useContent()
  const { theme } = useTheme()

  if (content.projects.items.length === 0) return null

  return (
    <Section id="projects" heading={content.projects.heading}>
      <ul className="grid gap-4">
        {content.projects.items.map((project) => (
          <li key={project.name}>
            <SpotlightCard
              theme={theme}
              spotlightColor={theme === 'dark' ? '#3fb8c4' : '#0b7480'}
              className="h-full"
              style={
                {
                  '--spotlight-card-surface': 'var(--card)',
                  '--spotlight-card-border': 'var(--border)',
                } as React.CSSProperties
              }
            >
            {project.images && project.images.length > 0 && (
              <ScreenGallery project={project.name} images={project.images} />
            )}
            <h3 className="text-lg leading-snug font-medium">{project.name}</h3>
            <p className="mt-2 leading-relaxed text-foreground/80">
              {project.summary}
            </p>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((technology) => (
                <li
                  key={technology}
                  className="bg-secondary px-1.5 py-0.5 font-mono text-[0.6875rem] text-secondary-foreground"
                >
                  {technology}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-5 text-sm">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-[2] text-brand underline decoration-warm underline-offset-4"
                >
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-[2] text-brand underline decoration-warm underline-offset-4"
                >
                  {content.projects.liveLabel}
                </a>
              )}
            </div>
            </SpotlightCard>
          </li>
        ))}
      </ul>
    </Section>
  )
}
