import { cn } from '@/lib/utils'

type Motif = 'arcs' | 'arcsDiamond' | 'rosette' | 'diamond' | 'solid' | 'solidArcs'

const LAYOUT: Motif[] = [
  'arcs', 'rosette', 'arcs', 'diamond', 'arcs', 'solid',
  'diamond', 'arcs', 'arcsDiamond', 'arcs', 'solidArcs', 'arcs',
  'arcs', 'solidArcs', 'arcs', 'rosette', 'arcs', 'diamond',
  'rosette', 'arcs', 'diamond', 'arcs', 'arcsDiamond', 'arcs',
  'arcs', 'diamond', 'solidArcs', 'arcs', 'rosette', 'arcs',
  'solid', 'arcs', 'arcs', 'diamond', 'arcs', 'arcsDiamond',
]

const CORNER_ARCS = [
  'M 0 50 A 50 50 0 0 1 50 0',
  'M 50 0 A 50 50 0 0 1 100 50',
  'M 100 50 A 50 50 0 0 1 50 100',
  'M 50 100 A 50 50 0 0 1 0 50',
]

const DIAMOND = 'M 50 18 L 82 50 L 50 82 L 18 50 Z'

function Module({ motif }: { motif: Motif }) {
  const filled = motif === 'solid' || motif === 'solidArcs'
  const stroke = filled ? 'var(--primary-foreground)' : 'var(--cobalt)'

  return (
    <svg viewBox="0 0 100 100" className="size-full" aria-hidden="true" focusable="false">
      <rect
        width="100"
        height="100"
        fill={filled ? 'var(--cobalt)' : 'transparent'}
      />

      <g fill="none" stroke={stroke} strokeWidth={4.5} strokeLinecap="round">
        {(motif === 'arcs' || motif === 'arcsDiamond' || motif === 'solidArcs') &&
          CORNER_ARCS.map((d) => <path key={d} d={d} />)}

        {motif === 'arcsDiamond' && <path d={DIAMOND} />}

        {motif === 'diamond' && (
          <>
            <path d={DIAMOND} />
            <path d="M 50 34 L 66 50 L 50 66 L 34 50 Z" />
          </>
        )}

        {motif === 'rosette' && (
          <>
            <circle cx="50" cy="22" r="28" />
            <circle cx="78" cy="50" r="28" />
            <circle cx="50" cy="78" r="28" />
            <circle cx="22" cy="50" r="28" />
          </>
        )}
      </g>

      {motif === 'rosette' && <circle cx="50" cy="50" r="6" fill="var(--cobalt)" />}
      {motif === 'diamond' && <circle cx="50" cy="50" r="5" fill="var(--ochre)" />}
      {motif === 'solid' && <circle cx="50" cy="50" r="12" fill="var(--ochre)" />}
    </svg>
  )
}

export function AzulejoPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid aspect-square w-full grid-cols-6 gap-px overflow-hidden bg-cobalt/15 p-px',
        className,
      )}
      role="presentation"
    >
      {LAYOUT.map((motif, index) => (
        <div
          key={`${motif}-${index}`}
          className="bg-background [animation:tile-set_420ms_ease-out_backwards]"
          style={{
            animationDelay: `${(Math.floor(index / 6) + (index % 6)) * 45 + 120}ms`,
          }}
        >
          <Module motif={motif} />
        </div>
      ))}
    </div>
  )
}
