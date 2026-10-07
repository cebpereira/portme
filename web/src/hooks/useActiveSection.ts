import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-10% 0px -70% 0px', threshold: 0 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids])

  return active
}
