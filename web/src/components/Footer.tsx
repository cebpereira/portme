import { useContent } from '@/lib/i18n'

export function Footer() {
  const content = useContent()

  return (
    <footer className="mx-auto flex max-w-[58rem] flex-wrap items-baseline justify-between gap-2 px-5 py-8 text-sm text-muted-foreground sm:px-8 lg:px-12">
      <p>{content.person.name}</p>
      <p>{content.footer.note}</p>
    </footer>
  )
}
