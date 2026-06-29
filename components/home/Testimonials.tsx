'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const item = testimonials[index]
  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <section className="section-padding bg-tan-50">
      <div className="container">
        <FadeIn direction="up" className="mx-auto max-w-4xl text-center">
          <p className="eyebrow justify-center">Binicilerimiz Anlatıyor</p>
          <h2 className="mt-8 display-headline text-display-lg md:text-display-xl text-ink">
            Bir kulüp değil, bir <em className="italic">aidiyet</em>.
          </h2>
        </FadeIn>

        <div className="relative mx-auto mt-20 max-w-3xl md:mt-28">
          <div className="relative min-h-[300px] md:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div
                  className="mb-8 inline-flex items-center justify-center gap-1 text-tan-600"
                  aria-label={`${item.rating} yıldız`}
                >
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="font-display text-2xl italic leading-snug text-ink md:text-3xl lg:text-4xl">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
                <figcaption className="mt-10">
                  <div className="text-[12px] uppercase tracking-wider-2 text-ink/80">
                    {item.name}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-wider-3 text-ink/40">
                    {item.source} · Yorum
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-14 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              className="grid size-12 place-items-center border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
              aria-label="Önceki yorum"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex items-center gap-2" role="tablist">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Yorum ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1 transition-all duration-500 ${
                    i === index ? 'w-10 bg-ink' : 'w-5 bg-ink/20 hover:bg-ink/40'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="grid size-12 place-items-center border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
              aria-label="Sonraki yorum"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <FadeIn delay={0.2} className="mt-20 flex items-center justify-center gap-3 text-[10px] uppercase tracking-wider-3 text-ink/40">
          <Star className="size-3 fill-tan-600 text-tan-600" />
          5.0 / 5.0 · Google Reviews
        </FadeIn>
      </div>
    </section>
  )
}
