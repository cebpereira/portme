import { Bot, FlaskConical, MessagesSquare, SearchCheck } from 'lucide-react'
import { motion } from 'motion/react'
import { Section } from '@/components/Section'
import { useContent } from '@/lib/i18n'

const ICONS = [SearchCheck, FlaskConical, Bot, MessagesSquare]

export function HowIWork() {
  const content = useContent()

  return (
    <Section id="how" heading={content.how.heading}>
      <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {content.how.items.map((item, index) => {
          const Icon = ICONS[index % ICONS.length]

          return (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-chip text-brand">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg leading-snug font-medium">{item.title}</h3>
                <p className="mt-1.5 leading-relaxed text-foreground/80">{item.text}</p>
              </div>
            </motion.li>
          )
        })}
      </ul>
    </Section>
  )
}
