import { Moon, Sun } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useLanguage } from '@/lib/i18n'
import { useTheme } from '@/lib/theme'
import { cn } from '@/lib/utils'

export const SECTION_IDS = [
  'about',
  'experience',
  'stack',
  'projects',
  'education',
  'certifications',
  'contact',
] as const

function LanguageToggle() {
  const { language, toggleLanguage, content } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={content.nav.toggleLanguage}
      className="font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className={cn(language === 'pt' && 'font-medium text-cobalt')}>PT</span>
      <span className="px-1 text-border">/</span>
      <span className={cn(language === 'en' && 'font-medium text-cobalt')}>EN</span>
    </button>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { content } = useLanguage()
  const Icon = theme === 'light' ? Moon : Sun

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={content.nav.toggleTheme}
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      <Icon className="size-4" aria-hidden="true" />
    </button>
  )
}

function SocialLinks({ className }: { className?: string }) {
  const { content } = useLanguage()

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <a
        href={content.person.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="text-muted-foreground transition-colors hover:text-cobalt"
      >
        <GithubIcon className="size-4" />
      </a>
      <a
        href={content.person.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="text-muted-foreground transition-colors hover:text-cobalt"
      >
        <LinkedinIcon className="size-4" />
      </a>
    </div>
  )
}

export function Rail() {
  const { content } = useLanguage()
  const active = useActiveSection(SECTION_IDS as unknown as string[])

  const items = [
    { id: 'about', label: content.nav.about },
    { id: 'experience', label: content.nav.experience },
    { id: 'stack', label: content.nav.stack },
    { id: 'projects', label: content.nav.projects },
    { id: 'education', label: content.nav.education },
    { id: 'certifications', label: content.nav.certifications },
    { id: 'contact', label: content.nav.contact },
  ]

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-cobalt/20 bg-background/90 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="font-display text-base">Carlos Elandro</span>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
        <nav aria-label={content.person.name}>
          <ul className="flex gap-5 overflow-x-auto px-5 pb-2.5 text-sm [scrollbar-width:none]">
            {items.map((item) => (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  className={cn(
                    'transition-colors',
                    active === item.id ? 'text-cobalt' : 'text-muted-foreground',
                  )}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-cobalt/20 px-8 py-10 lg:flex xl:w-68">
        <div>
          <a href="#top" className="font-display block text-3xl leading-[1.05] xl:text-[2.125rem]">
            Carlos
            <br />
            Elandro
          </a>
          <p className="mt-4 text-sm text-foreground">{content.person.role}</p>
          <p className="text-sm text-muted-foreground">{content.person.location}</p>
        </div>

        <nav aria-label={content.person.name} className="mt-12">
          <ul className="space-y-2.5 text-sm">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={cn(
                    'group flex items-center gap-2.5 transition-colors',
                    active === item.id
                      ? 'text-cobalt'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'size-1.5 shrink-0 transition-colors',
                      active === item.id ? 'bg-cobalt' : 'bg-transparent',
                    )}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto flex items-center justify-between pt-12">
          <SocialLinks />
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  )
}
