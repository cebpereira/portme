import { ContactForm } from '@/components/ContactForm'
import { useContent } from '@/lib/i18n'

export function Contact() {
  const content = useContent()

  const direct = [
    { label: content.person.email, href: `mailto:${content.person.email}` },
    { label: content.person.phone, href: content.person.phoneHref },
    { label: 'GitHub', href: content.person.github },
    { label: 'LinkedIn', href: content.person.linkedin },
  ]

  return (
    <section id="contact" className="mt-20 bg-cobalt text-chalk sm:mt-24">
      <div className="mx-auto grid max-w-[58rem] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-x-16 lg:gap-y-10 lg:px-12">
        <div className="lg:col-start-1 lg:row-start-1">
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[1.02]">
            {content.contact.heading}
          </h2>
          <p className="mt-4 max-w-[36ch] text-lg text-chalk/80">{content.contact.lede}</p>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <ContactForm />
        </div>

        <div className="border-t border-chalk/25 pt-6 lg:col-start-1 lg:row-start-2 lg:border-t-0 lg:pt-0">
          <p className="text-sm text-chalk/65">{content.contact.directLabel}</p>
          <ul className="mt-3 space-y-1.5">
            {direct.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="underline decoration-ochre decoration-2 underline-offset-4 transition-colors hover:text-ochre"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
