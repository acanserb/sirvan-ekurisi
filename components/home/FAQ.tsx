'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import FadeIn from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { faqItems } from '@/data/faq'

export default function FAQ() {
  const [open, setOpen] = useState<string | null>('q-01')

  return (
    <section className="section-padding bg-cream-50">
      <div className="container">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-24">
          <FadeIn direction="up" className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionTitle
              eyebrow="Sıkça Sorulanlar"
              title={
                <>
                  Aklınızdaki <em className="italic">soruları</em>,
                  <br className="hidden md:block" />
                  önceden yanıtladık.
                </>
              }
              description="Yanıtını burada bulamadığınız her şey için WhatsApp&apos;tan bize ulaşabilirsiniz."
              size="lg"
            />

            <div className="mt-10 hidden lg:block">
              <Button
                href="/iletisim"
                variant="link"
                iconRight={<ArrowRight className="size-4" />}
              >
                Sorunuzu Sorun
              </Button>
            </div>
          </FadeIn>

          <div className="lg:col-span-7">
            <ul className="border-t border-ink/10">
              {faqItems.map((item, i) => {
                const isOpen = open === item.id
                return (
                  <FadeIn key={item.id} direction="up" delay={i * 0.05} as="li" className="border-b border-ink/10">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : item.id)}
                      className="group flex w-full items-start justify-between gap-6 py-7 text-left transition-colors hover:text-tan-700 md:py-9"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${item.id}`}
                    >
                      <span className="flex items-start gap-6">
                        <span className="font-mono text-[11px] tracking-wider-2 text-tan-600">
                          0{i + 1}
                        </span>
                        <span className="font-display text-xl md:text-2xl text-ink group-hover:text-tan-700">
                          {item.question}
                        </span>
                      </span>
                      <span
                        className={`mt-1.5 grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-500 ease-out-expo ${
                          isOpen ? 'rotate-45 border-ink bg-ink text-cream' : ''
                        }`}
                        aria-hidden
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={`faq-${item.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p
                            className="max-w-xl pb-9 pl-14 text-body-lg leading-relaxed text-ink/65"
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                          />
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </FadeIn>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
