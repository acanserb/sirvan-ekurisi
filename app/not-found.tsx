import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Sayfa Bulunamadı',
  description: 'Aradığınız sayfa bulunamadı.',
  noIndex: true,
})

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-cream pt-32">
      <div className="container max-w-2xl text-center">
        <p className="eyebrow justify-center text-tan-600">404</p>
        <h1 className="mt-6 font-display text-display-lg text-ink text-balance md:text-display-xl">
          Bu yol kayboldu, ama biz buradayız
        </h1>
        <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">
          Aradığınız sayfa bulunamadı. Anasayfaya dönerek devam edebilir veya
          bize ulaşabilirsiniz.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" icon={<ArrowLeft className="size-4" />}>
            Anasayfaya dön
          </Button>
          <Link
            href="/iletisim"
            className="text-sm text-ink/60 underline-grow hover:text-tan-600"
          >
            İletişime geç
          </Link>
        </div>
      </div>
    </section>
  )
}
