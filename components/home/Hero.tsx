import { ArrowRight, Phone } from 'lucide-react'
import SmartImage from '@/components/ui/SmartImage'
import TrackedLink from '@/components/ui/TrackedLink'
import { CONTACT, SITE } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative isolate h-[115svh] min-h-[760px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full animate-subtle-zoom">
          <SmartImage
            src="/images/hero/main.jpg"
            alt="Şirvan Ekürisi açık manejde sinematik binicilik anı"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            fallbackLabel="Şirvan Ekürisi"
            fallbackTone="ink"
            fallbackRatio="landscape"
            className="object-cover"
          />
        </div>

        {/* Overlay system — three layers, ensures WCAG-grade contrast for headline area */}
        {/* 1) Base darkness across full image */}
        <div className="absolute inset-0 bg-ink/55 md:bg-ink/45" aria-hidden />
        {/* 2) Directional gradient — strongest on text side (left), fades to right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20 md:from-ink/80 md:via-ink/35 md:to-ink/10"
          aria-hidden
        />
        {/* 3) Top-to-bottom fade — supports header legibility + grounded bottom */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink"
          aria-hidden
        />
        {/* 4) Subtle vignette for depth */}
        <div className="absolute inset-0 bg-gradient-vignette" aria-hidden />
      </div>

      {/* Side vertical meta strip */}
      <div
        className="absolute left-6 top-1/2 hidden -translate-y-1/2 origin-left -rotate-90 animate-hero-in text-[10px] uppercase tracking-wider-4 text-cream/65 lg:block"
        style={{ animationDelay: '0.4s' }}
        aria-hidden
      >
        Est. {SITE.founded} · Ankara · Türkiye
      </div>

      {/* Editorial detail bottom right */}
      <div
        className="absolute bottom-10 right-8 hidden animate-hero-in flex-col items-end gap-2 text-cream/55 md:flex"
        style={{ animationDelay: '0.8s' }}
        aria-hidden
      >
        <span className="font-mono text-[10px] uppercase tracking-wider-2">N° 01</span>
        <span
          className="font-display text-5xl italic text-cream/40"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}
        >
          Şirvan
        </span>
      </div>

      <div className="container relative flex h-full flex-col justify-end pb-24 pt-32 md:justify-center md:pb-0">
        {/* Eyebrow */}
        <div className="flex animate-hero-up items-center gap-4">
          <span className="h-px w-12 bg-tan-300" aria-hidden />
          <p
            className="text-[11px] font-medium uppercase tracking-wider-3 text-tan-200 md:text-[12px] md:tracking-wider-4"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
          >
            Ankara · Binicilik Okulu
          </p>
        </div>

        {/* Main headline — high contrast, drop shadow for image variance */}
        <h1
          className="mt-10 max-w-5xl animate-hero-up display-headline text-display-2xl md:text-display-3xl text-cream"
          style={{
            textShadow: '0 2px 24px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.4)',
            animationDelay: '0.15s',
          }}
        >
          Binicilikten <em className="font-display italic text-tan-200">fazlası.</em>
          <br />
          Bir yaşam tarzı.
        </h1>

        {/* Subtitle — clear hierarchy, readable */}
        <p
          className="mt-10 max-w-xl animate-hero-up text-body-lg leading-relaxed text-cream/90 md:text-body-xl"
          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.45)', animationDelay: '0.3s' }}
        >
          Bir hayvanı tanımak, bir disipline saygı duymak ve kendiyle yeniden buluşmak — Ankara&apos;nın kalbinde, atla kurulan en zarif ortaklık.
        </p>

        {/* CTAs */}
        <div
          className="mt-14 flex animate-hero-up flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6"
          style={{ animationDelay: '0.45s' }}
        >
          <a
            href="/iletisim"
            className="group/cta relative inline-flex h-[60px] items-center justify-center gap-4 bg-tan-600 px-10 text-[12px] uppercase tracking-wider-2 text-cream shadow-lg shadow-black/30 transition-all duration-500 ease-out-expo hover:bg-cream hover:text-ink"
          >
            <span>Ücretsiz Deneme Dersi</span>
            <ArrowRight
              className="size-4 transition-transform duration-500 ease-out-expo group-hover/cta:translate-x-1"
              aria-hidden
            />
          </a>

          <TrackedLink
            track="whatsapp_click"
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta inline-flex h-[60px] items-center justify-center gap-3 border border-cream/50 bg-ink/30 px-10 text-[12px] uppercase tracking-wider-2 text-cream backdrop-blur-sm transition-all duration-500 ease-out-expo hover:border-cream hover:bg-cream hover:text-ink"
          >
            <Phone className="size-3.5" aria-hidden />
            WhatsApp İletişim
          </TrackedLink>
        </div>

        {/* Inline contact line — readable, no longer fading into image */}
        <div
          className="mt-12 flex animate-hero-in flex-col items-start gap-2 text-[11px] uppercase tracking-wider-2 text-cream/75 md:flex-row md:items-center md:gap-6"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)', animationDelay: '0.7s' }}
        >
          <TrackedLink
            track="phone_click"
            href={CONTACT.phoneHref}
            className="underline-grow transition-colors hover:text-tan-200"
          >
            {CONTACT.phone}
          </TrackedLink>
          <span className="hidden md:inline" aria-hidden>·</span>
          <span>{CONTACT.address.district} / {CONTACT.address.city}</span>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-hero-in flex-col items-center gap-3 lg:flex"
          style={{ animationDelay: '1s' }}
          aria-hidden
        >
          <span className="text-[10px] uppercase tracking-wider-3 text-cream/60">
            Keşfedin
          </span>
          <span className="block h-14 w-px bg-cream/25">
            <span
              className="block h-full w-full animate-scroll-line bg-tan-200"
              style={{ transformOrigin: 'top' }}
            />
          </span>
        </div>
      </div>
    </section>
  )
}
