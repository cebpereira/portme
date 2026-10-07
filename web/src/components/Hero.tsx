import { AzulejoPanel } from '@/components/AzulejoPanel'
import { useContent } from '@/lib/i18n'

export function Hero() {
  const content = useContent()

  return (
    <div id="top" className="pt-10 sm:pt-14 lg:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_23rem]">
        <div>
          <h1 className="font-display text-[clamp(2.75rem,8vw,4.5rem)] leading-[0.95]">
            {content.hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-foreground/85">
            {content.hero.lede}
          </p>

          <p className="mt-6 flex items-start gap-2.5 text-sm text-muted-foreground">
            <span className="mt-[0.4rem] size-2 shrink-0 rounded-full bg-ochre" aria-hidden="true" />
            {content.hero.availability}
          </p>
        </div>

        <AzulejoPanel className="mx-auto w-full max-w-80 lg:max-w-none" />
      </div>
    </div>
  )
}
