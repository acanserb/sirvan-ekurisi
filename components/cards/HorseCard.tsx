import SmartImage from '@/components/ui/SmartImage'
import type { Horse } from '@/types'

interface HorseCardProps {
  horse: Horse
  priority?: boolean
  variant?: 'showcase' | 'detailed'
}

export default function HorseCard({ horse, priority, variant = 'showcase' }: HorseCardProps) {
  if (variant === 'detailed') {
    return (
      <article className="group relative flex h-full flex-col bg-cream">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <SmartImage
            src={horse.image}
            alt={horse.alt}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 33vw"
            priority={priority}
            fallbackLabel={horse.name}
            fallbackTone="ink"
            fallbackRatio="4/5"
            className="object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.06]"
          />
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 bg-cream/95 px-3 py-1.5 text-[10px] uppercase tracking-wider-3 text-ink">
            {horse.discipline}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-7 md:p-9">
          <h3 className="font-display text-display-md text-ink">{horse.name}</h3>

          {horse.traits && horse.traits.length ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {horse.traits.map((t) => (
                <li
                  key={t}
                  className="border border-ink/15 px-3 py-1 text-[10px] uppercase tracking-wider-2 text-ink/65"
                >
                  {t}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </article>
    )
  }

  // Default: showcase variant (dark with overlay)
  return (
    <article className="group relative overflow-hidden bg-ink text-cream">
      <div className="relative aspect-[4/5] overflow-hidden">
        <SmartImage
          src={horse.image}
          alt={horse.alt}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw"
          priority={priority}
          fallbackLabel={horse.name}
          fallbackTone="ink"
          fallbackRatio="4/5"
          className="object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-95" aria-hidden />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 border border-cream/20 bg-ink/40 px-3 py-1.5 text-[10px] uppercase tracking-wider-3 text-cream/85 backdrop-blur">
          {horse.discipline}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
        <h3 className="font-display text-display-md text-cream">{horse.name}</h3>
        {horse.traits && horse.traits.length ? (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {horse.traits.map((t) => (
              <li
                key={t}
                className="border border-cream/20 px-2.5 py-1 text-[10px] uppercase tracking-wider-2 text-cream/80"
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}
