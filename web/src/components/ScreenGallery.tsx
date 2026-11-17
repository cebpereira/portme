import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Dialog } from 'radix-ui'
import type { ProjectImage } from '@/content/types'
import { useContent } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const
const SWIPE_DISTANCE = 60

interface ScreenGalleryProps {
  project: string
  images: ProjectImage[]
}

export function ScreenGallery({ project, images }: ScreenGalleryProps) {
  const { gallery } = useContent().projects
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const triggers = useRef<(HTMLButtonElement | null)[]>([])
  const opener = useRef(0)

  const total = images.length
  const current = images[index]

  const go = useCallback(
    (step: number) => {
      setDirection(step)
      setIndex((value) => (value + step + total) % total)
    },
    [total],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, go])

  function openAt(position: number) {
    setDirection(0)
    setIndex(position)
    opener.current = position
    setOpen(true)
  }

  function onDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -SWIPE_DISTANCE) go(1)
    else if (info.offset.x > SWIPE_DISTANCE) go(-1)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <ul className="relative z-[2] -mx-2 mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {images.map((image, position) => (
          <li key={image.src}>
            <button
              type="button"
              ref={(element) => {
                triggers.current[position] = element
              }}
              onClick={() => openAt(position)}
              aria-label={`${gallery.open}: ${image.title}`}
              className="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03]"
            >
              <img
                src={image.src}
                alt=""
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-night/80 backdrop-blur-md"
              />
            </Dialog.Overlay>

            <Dialog.Content
              forceMount
              aria-describedby="screen-gallery-description"
              onCloseAutoFocus={(event) => {
                event.preventDefault()
                triggers.current[opener.current]?.focus()
              }}
              onClick={(event) => {
                if (event.target === event.currentTarget) setOpen(false)
              }}
              className="fixed inset-0 z-50 grid place-items-center overflow-y-auto p-3 outline-none sm:p-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/50"
              >
                <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="size-3 rounded-full bg-[#f2705c]" />
                    <span className="size-3 rounded-full bg-warm" />
                    <span className="size-3 rounded-full bg-ok" />
                  </span>
                  <span className="min-w-0 flex-1 truncate rounded-full bg-muted px-3 py-1 text-center font-mono text-xs text-muted-foreground">
                    {current.url}
                  </span>
                  <Dialog.Close
                    aria-label={gallery.close}
                    className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <X className="size-4" aria-hidden="true" />
                  </Dialog.Close>
                </div>

                <div className="relative overflow-hidden bg-background">
                  <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                    <motion.img
                      key={current.src}
                      src={current.src}
                      alt={current.title}
                      custom={direction}
                      variants={{
                        enter: (d: number) => ({ opacity: 0, x: d * 80 }),
                        center: { opacity: 1, x: 0 },
                        exit: (d: number) => ({ opacity: 0, x: d * -80 }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: EASE }}
                      drag={total > 1 ? 'x' : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={onDragEnd}
                      draggable={false}
                      className="aspect-[16/10] w-full cursor-grab object-cover object-top active:cursor-grabbing"
                    />
                  </AnimatePresence>

                  {total > 1 && (
                    <>
                      <NavButton side="left" label={gallery.previous} onClick={() => go(-1)} />
                      <NavButton side="right" label={gallery.next} onClick={() => go(1)} />
                    </>
                  )}
                </div>

                <div className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:px-7">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={current.src}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="max-w-[62ch]"
                    >
                      <p className="text-sm text-brand">{project}</p>
                      <Dialog.Title className="font-display mt-0.5 text-2xl leading-tight">
                        {current.title}
                      </Dialog.Title>
                      <Dialog.Description
                        id="screen-gallery-description"
                        className="mt-2 leading-relaxed text-foreground/80"
                      >
                        {current.description}
                      </Dialog.Description>
                    </motion.div>
                  </AnimatePresence>

                  {total > 1 && (
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground" aria-live="polite">
                        {gallery.counter
                          .replace('{current}', String(index + 1))
                          .replace('{total}', String(total))}
                      </span>
                      <span className="flex gap-1.5" aria-hidden="true">
                        {images.map((image, position) => (
                          <span
                            key={image.src}
                            className={cn(
                              'h-1.5 rounded-full transition-all duration-300',
                              position === index ? 'w-6 bg-brand' : 'w-1.5 bg-border',
                            )}
                          />
                        ))}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

function NavButton({ side, label, onClick }: { side: 'left' | 'right'; label: string; onClick: () => void }) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        'absolute top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur transition-transform hover:scale-110',
        side === 'left' ? 'left-3' : 'right-3',
      )}
    >
      <Icon className="size-5" aria-hidden="true" />
    </button>
  )
}
