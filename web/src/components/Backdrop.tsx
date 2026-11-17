import DotGrid from '@/components/DotGrid'
import { useTheme } from '@/lib/theme'

const COLORS = {
  dark: { base: '#1f3846', active: '#3fb8c4' },
  light: { base: '#c9d8de', active: '#0b7480' },
}

export function Backdrop() {
  const { theme } = useTheme()
  const colors = COLORS[theme]

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_75%)]"
    >
      <DotGrid
        key={theme}
        dotSize={3}
        gap={26}
        baseColor={colors.base}
        activeColor={colors.active}
        proximity={140}
        clickShock={false}
      />
    </div>
  )
}
