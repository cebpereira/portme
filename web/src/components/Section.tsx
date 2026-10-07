import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  heading: string
  children: ReactNode
  className?: string
}

export function Section({ id, heading, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('border-t border-cobalt/25 pt-8 sm:pt-10', className)}>
      <h2 className="font-display text-2xl text-cobalt sm:text-[1.75rem]">{heading}</h2>
      <div className="mt-6 sm:mt-8">{children}</div>
    </section>
  )
}
