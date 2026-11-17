import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  heading: string
  children: ReactNode
  className?: string
}

export function Section({ id, heading, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('border-t border-border pt-8 sm:pt-10', className)}>
      <motion.h2
        initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '0px 0px -15% 0px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-tight"
      >
        {heading}
      </motion.h2>
      <div className="mt-6 sm:mt-8">{children}</div>
    </section>
  )
}
