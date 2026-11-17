import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Section } from '@/components/Section'
import { useContent } from '@/lib/i18n'

export function Experience() {
  const content = useContent()
  const listRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  return (
    <Section id="experience" heading={content.experience.heading}>
      <ol ref={listRef} className="relative divide-y divide-border pl-6 sm:pl-8">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-0 w-px bg-border" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: progress }}
          className="absolute top-2 bottom-2 left-0 w-px origin-top bg-gradient-to-b from-brand to-warm"
        />
        {content.experience.items.map((item) => (
          <motion.li
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -12% 0px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid gap-x-8 gap-y-3 py-7 first:pt-0 sm:grid-cols-[8.5rem_minmax(0,1fr)] lg:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <p className="relative flex items-baseline gap-2 font-mono text-xs leading-6 text-muted-foreground">
              {item.current && (
                <span
                  className="size-2 shrink-0 translate-y-[-1px] rounded-full bg-warm"
                  aria-hidden="true"
                />
              )}
              <span
                aria-hidden="true"
                className="absolute top-[0.4rem] -left-6 size-2.5 -translate-x-1/2 rounded-full border-2 border-brand bg-background sm:-left-8"
              />
              <span>{item.period}</span>
              {item.current && <span className="sr-only">{content.experience.currentLabel}</span>}
            </p>

            <div>
              <h3 className="text-lg leading-snug font-medium">{item.role}</h3>
              <p className="text-brand">{item.company}</p>

              <ul className="mt-3 max-w-[60ch] space-y-1.5 text-[0.9375rem] leading-relaxed text-foreground/80">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.stack.map((technology) => (
                  <li
                    key={technology}
                    className="bg-secondary px-1.5 py-0.5 font-mono text-[0.6875rem] text-secondary-foreground"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
