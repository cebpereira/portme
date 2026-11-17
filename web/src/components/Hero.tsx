import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'motion/react'
import { Download, MessageCircle, RotateCcw } from 'lucide-react'
import BlurText from '@/components/BlurText'
import type { HeroQuestion } from '@/content/types'
import { useContent } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const TYPING_MS = 900
const EASE = [0.22, 1, 0.36, 1] as const

function Avatar({ className }: { className?: string }) {
  return (
    <img
      src="/avatar.webp"
      alt=""
      width={128}
      height={128}
      className={cn('size-10 shrink-0 rounded-full object-cover ring-2 ring-brand/60', className)}
    />
  )
}

function TypingBubble({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex w-fit items-center gap-1 rounded-2xl rounded-tl-sm bg-card px-4 py-3.5"
    >
      <span className="sr-only">{label}</span>
      {[0, 1, 2].map((dot) => (
        <span key={dot} aria-hidden="true" className="typing-dot size-1.5 rounded-full bg-muted-foreground" />
      ))}
    </motion.div>
  )
}

function AnswerBubble({ question }: { question: HeroQuestion }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.45, ease: EASE }}
      className="max-w-[60ch] rounded-2xl rounded-tl-sm bg-card px-4 py-3 leading-relaxed sm:px-5"
    >
      <p>{question.answer}</p>
      {question.link && (
        <a
          href={question.link.href}
          download={question.link.href.endsWith('.pdf') ? true : undefined}
          className="mt-2 inline-block text-sm font-medium text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand"
        >
          {question.link.label}
        </a>
      )}
    </motion.div>
  )
}

export function Hero() {
  const content = useContent()
  const { hero, person } = content
  const reduceMotion = useReducedMotion()

  const [asked, setAsked] = useState<string[]>([])
  const [typing, setTyping] = useState<string | null>(null)
  const [greeted, setGreeted] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLOListElement>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const hasConversation = asked.length > 0

  useEffect(() => {
    const box = boxRef.current
    const list = listRef.current
    if (!box || !list) return

    const toBottom = () =>
      box.scrollTo({ top: box.scrollHeight, behavior: reduceMotion ? 'auto' : 'smooth' })

    toBottom()
    const observer = new ResizeObserver(toBottom)
    observer.observe(list)
    return () => observer.disconnect()
  }, [hasConversation, reduceMotion])

  const byId = new Map(hero.questions.map((question) => [question.id, question]))
  const remaining = hero.questions.filter((question) => !asked.includes(question.id))
  const showChips = greeted || reduceMotion

  function ask(id: string) {
    if (typing) return
    setAsked((current) => [...current, id])
    if (reduceMotion) return
    setTyping(id)
    timer.current = window.setTimeout(() => setTyping(null), TYPING_MS)
  }

  function restart() {
    window.clearTimeout(timer.current)
    setTyping(null)
    setAsked([])
  }

  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="relative pt-10 sm:pt-14 lg:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 -z-10 size-[28rem] rounded-full bg-brand/10 blur-3xl"
        />

        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-4">
          <Avatar className="size-14" />
          <div>
            <h1 className="font-display text-xl leading-tight sm:text-2xl">{person.name}</h1>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inset-0 animate-ping rounded-full bg-ok/60" />
                <span className="relative size-2 rounded-full bg-ok" />
              </span>
              {hero.status}
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:ml-auto sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href={person.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/50 px-4 py-2.5 sm:py-2 text-sm font-medium text-foreground transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-brand/10"
            >
              <MessageCircle className="size-4 text-brand" aria-hidden="true" />
              {hero.whatsappLabel}
            </a>
            <a
              href={hero.resume.href}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 sm:py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="size-4" aria-hidden="true" />
              {hero.resume.label}
            </a>
          </div>
        </div>

        <div className="mt-10">
          <BlurText
            key={hero.greeting[0]}
            text={hero.greeting[0]}
            animateBy="words"
            delay={90}
            trigger="load"
            onAnimationComplete={() => setGreeted(true)}
            className="font-display text-[clamp(2.25rem,6.5vw,4rem)] leading-[1.02]"
          />
          <motion.p
            key={hero.greeting[1]}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
            className="max-w-[52ch] pt-3 text-lg leading-relaxed text-foreground/80"
          >
            {hero.greeting[1]}
          </motion.p>
        </div>

        <AnimatePresence>
          {hasConversation && (
            <motion.div
              ref={boxRef}
              role="log"
              aria-live="polite"
              aria-label={hero.conversationLabel}
              tabIndex={0}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative mt-8 max-h-[min(26rem,55vh)] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-background/60 p-3 [scrollbar-color:var(--border)_transparent] [scrollbar-width:thin] sm:p-4"
            >
              <ol ref={listRef} className="space-y-6">
                {asked.map((id) => {
                  const question = byId.get(id)
                  if (!question) return null
                        return (
                    <li key={id} className="space-y-3">
                      <motion.p
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-brand px-4 py-2.5 text-night"
                      >
                        <span className="sr-only">{hero.visitorLabel}: </span>
                        {question.question}
                      </motion.p>

                      <div className="flex items-start gap-3">
                        <Avatar className="mt-0.5 hidden sm:grid" />
                        <AnimatePresence mode="wait" initial={false}>
                          {typing === id ? (
                            <TypingBubble key="typing" label={hero.typing} />
                          ) : (
                            <AnswerBubble key="answer" question={question} />
                          )}
                        </AnimatePresence>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showChips && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="mt-8"
            >
              {remaining.length > 0 ? (
                <>
                  <p className="text-sm text-muted-foreground">{hero.prompt}</p>
                  <motion.ul layout className="mt-3 flex flex-wrap gap-2">
                    <AnimatePresence mode="popLayout">
                      {remaining.map((question) => (
                        <motion.li
                          key={question.id}
                          layout
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.25, ease: EASE }}
                        >
                          <button
                            type="button"
                            onClick={() => ask(question.id)}
                            disabled={typing !== null}
                            className="rounded-full border border-brand/40 px-4 py-2 text-left text-sm text-foreground transition-colors hover:border-brand hover:bg-brand/10 disabled:opacity-50"
                          >
                            {question.question}
                          </button>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </motion.ul>
                </>
              ) : (
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <RotateCcw className="size-3.5" aria-hidden="true" />
                  {hero.restart}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}
