import Link from 'next/link'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  breadcrumbs?: { label: string; href?: string }[]
  className?: string
}

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden bg-ink pt-40 text-cream md:pt-52',
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 bg-radial-fade" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 top-0 -z-10 size-[48rem] rounded-full bg-tan-600/10 blur-3xl"
        aria-hidden
      />
      <div className="container pb-24 md:pb-36">
        {breadcrumbs && breadcrumbs.length ? (
          <nav
            className="mb-12 flex items-center gap-2 text-[11px] uppercase tracking-wider-2 text-cream/60"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((b, i) => (
              <span key={`${b.label}-${i}`} className="flex items-center gap-2">
                {b.href ? (
                  <Link href={b.href} className="transition-colors hover:text-tan-200">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-tan-200">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 ? <span aria-hidden>·</span> : null}
              </span>
            ))}
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="eyebrow text-tan-200 before:bg-tan-200">{eyebrow}</p>
        ) : null}
        <h1 className="mt-8 max-w-5xl display-headline text-display-xl md:text-display-2xl text-cream">
          {title}
        </h1>
        {description ? (
          <p className="mt-8 max-w-xl text-body-lg leading-relaxed text-cream/80 md:text-body-xl">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
