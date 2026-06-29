import { ArrowUpRight, Phone } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import { CONTACT } from '@/lib/constants'

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-tan-600 text-cream">
      <div className="absolute inset-0 -z-10 opacity-20" aria-hidden>
        <div className="absolute -left-32 top-1/2 size-[40rem] -translate-y-1/2 rounded-full bg-cream/40 blur-3xl" />
      </div>

      <div className="section-padding-sm container">
        <FadeIn direction="up" className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-wider-3 text-cream/80">
              Ücretsiz Deneme Dersi
            </p>
            <h2 className="mt-6 display-headline text-display-lg md:text-display-xl text-cream">
              Bir hafta sonu sabahı,
              <br />
              ata <em className="italic">merhaba</em> deyin.
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-5 lg:items-end">
            <a
              href="/iletisim"
              className="group inline-flex h-14 items-center gap-3 bg-ink px-9 text-[12px] uppercase tracking-wider-2 text-cream transition-all duration-500 hover:bg-cream hover:text-ink"
            >
              <span>Deneme Dersi Talep Et</span>
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider-2 text-cream/85 transition-colors hover:text-cream"
            >
              <Phone className="size-3.5" aria-hidden />
              veya bizi arayın · {CONTACT.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
