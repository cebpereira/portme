import { Section } from '@/components/Section'
import { useContent } from '@/lib/i18n'

export function Projects() {
  const content = useContent()

  if (content.projects.items.length === 0) return null

  return (
    <Section id="projects" heading={content.projects.heading}>
      <ul className="divide-y divide-border">
        {content.projects.items.map((project) => (
          <li key={project.name} className="py-7 first:pt-0">
            <h3 className="text-lg leading-snug font-medium">{project.name}</h3>
            <p className="mt-2 max-w-[60ch] leading-relaxed text-foreground/80">
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
                  className="text-cobalt underline decoration-ochre underline-offset-4"
                >
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cobalt underline decoration-ochre underline-offset-4"
                >
                  Live
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
