import { cn } from '@/lib/utils'

const TRACE_API_TO_QUEUE = 'M 371 116 L 371 240'
const TRACE_QUEUE_TO_WORKER = 'M 256 258 L 224 258 L 224 178'
const TRACE_WORKER_TO_DB = 'M 92 178 L 92 207'

const QUEUE_SLOTS = [256, 290, 324, 358]

export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 372"
      className={cn('w-full', className)}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="var(--cobalt)" strokeWidth={2} strokeDasharray="4 6" opacity={0.55}>
        <path d={TRACE_API_TO_QUEUE} />
        <path d={TRACE_QUEUE_TO_WORKER} />
        <path d={TRACE_WORKER_TO_DB} />
      </g>

      <g>
        <rect x="16" y="28" width="228" height="150" rx="3" fill="var(--background)" stroke="var(--cobalt)" strokeWidth={3} />
        <path d="M 16 31 A 3 3 0 0 1 19 28 L 241 28 A 3 3 0 0 1 244 31 L 244 54 L 16 54 Z" fill="var(--cobalt)" />
        <circle cx="34" cy="41" r="4.5" fill="var(--ochre)" />
        <circle cx="50" cy="41" r="4.5" fill="var(--primary-foreground)" opacity={0.7} />
        <circle cx="66" cy="41" r="4.5" fill="var(--primary-foreground)" opacity={0.7} />

        <g fontFamily="var(--font-mono)" fontSize="13.5" fill="var(--foreground)">
          <text x="28" y="84">
            <tspan fill="var(--ochre)">$</tspan> php artisan queue:work
          </text>
          <text x="28" y="110" opacity={0.8}>
            <tspan fill="var(--cobalt)">›</tspan> ProcessMoskitWebhookJob
          </text>
          <text x="44" y="133" fill="var(--cobalt)">
            DONE <tspan fill="var(--muted-foreground)">48ms</tspan>
          </text>
          <text x="28" y="163">
            <tspan fill="var(--ochre)">$</tspan>
          </text>
        </g>
        <rect className="hero-cursor" x="42" y="151" width="9" height="15" fill="var(--foreground)" />
      </g>

      <g fill="var(--primary-foreground)">
        <rect x="256" y="28" width="128" height="88" rx="3" fill="var(--cobalt)" />
        <text x="268" y="58" fontFamily="var(--font-heading)" fontSize="22" fontWeight="600">
          API
        </text>
        <g fontFamily="var(--font-mono)" fontSize="11">
          <text x="268" y="82" opacity={0.7}>
            POST
          </text>
          <text x="268" y="100">
            /webhooks/moskit
          </text>
        </g>
      </g>

      <g>
        {QUEUE_SLOTS.map((x, index) => (
          <rect
            key={x}
            x={x}
            y="240"
            width="26"
            height="36"
            rx="2"
            fill={index === 0 ? 'var(--cobalt)' : 'var(--background)'}
            stroke="var(--cobalt)"
            strokeWidth={3}
          />
        ))}
        <text x="256" y="302" fontFamily="var(--font-mono)" fontSize="12.5" fill="var(--muted-foreground)">
          queue: webhooks
        </text>
      </g>

      <g stroke="var(--cobalt)" strokeWidth={3} fill="var(--background)">
        <path d="M 36 222 L 36 318 A 56 15 0 0 0 148 318 L 148 222" />
        <ellipse cx="92" cy="222" rx="56" ry="15" />
        <path d="M 36 254 A 56 15 0 0 0 148 254" fill="none" />
        <path d="M 36 286 A 56 15 0 0 0 148 286" fill="none" />
      </g>
      <text
        x="92"
        y="358"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="12.5"
        fill="var(--muted-foreground)"
      >
        postgresql
      </text>

      <circle className="hero-packet" r="5" fill="var(--ochre)" style={{ offsetPath: `path('${TRACE_API_TO_QUEUE}')` }} />
      <circle
        className="hero-packet"
        r="5"
        fill="var(--ochre)"
        style={{ offsetPath: `path('${TRACE_QUEUE_TO_WORKER}')`, animationDelay: '1.2s' }}
      />
      <circle
        className="hero-packet"
        r="5"
        fill="var(--ochre)"
        style={{ offsetPath: `path('${TRACE_WORKER_TO_DB}')`, animationDelay: '2.4s' }}
      />
    </svg>
  )
}
