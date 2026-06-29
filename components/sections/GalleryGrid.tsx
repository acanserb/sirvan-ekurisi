'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import SmartImage from '@/components/ui/SmartImage'
import type { GalleryImage } from '@/types'
import { cn } from '@/lib/utils'

interface GalleryGridProps {
  images: GalleryImage[]
}

const CATEGORIES = ['Tümü', 'Tesis', 'Eğitim', 'Atlar', 'Yarışmalar', 'Etkinlikler'] as const
type Cat = (typeof CATEGORIES)[number]

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [filter, setFilter] = useState<Cat>('Tümü')
  const [active, setActive] = useState<GalleryImage | null>(null)

  const filtered = useMemo(
    () =>
      filter === 'Tümü'
        ? images
        : images.filter((img) => img.category === filter),
    [filter, images],
  )

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {CATEGORIES.map((cat) => {
          const selected = cat === filter
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-wider-2 transition-all duration-300',
                selected
                  ? 'border-ink bg-ink text-cream'
                  : 'border-ink/15 text-ink/70 hover:border-ink/50',
              )}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {filtered.map((img, i) => (
          <motion.button
            key={img.id}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: (i % 8) * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={() => setActive(img)}
            className={cn(
              'group relative overflow-hidden bg-cream-100',
              img.height > img.width
                ? 'aspect-[3/4] row-span-2'
                : 'aspect-[4/3]',
            )}
            aria-label={`Büyüt: ${img.alt}`}
          >
            <SmartImage
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              fallbackLabel={img.category}
              fallbackTone="cream"
              fallbackRatio={img.height > img.width ? 'portrait' : 'landscape'}
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-4"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Galeri görüntüleyici"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-cream text-ink"
              aria-label="Kapat"
            >
              <X className="size-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] max-w-5xl"
            >
              <div className="relative aspect-[3/2] max-h-[88vh] w-full overflow-hidden">
                <SmartImage
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  fallbackLabel={active.alt}
                  fallbackTone="ink"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center text-sm text-cream/70">
                {active.alt}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
