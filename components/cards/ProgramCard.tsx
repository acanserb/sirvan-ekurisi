import { ArrowUpRight } from 'lucide-react'
import SmartImage from '@/components/ui/SmartImage'
import type { Program } from '@/types'

interface ProgramCardProps {
  program: Program
  index?: number
  variant?: 'editorial' | 'compact'
}

export default function ProgramCard({ program, index = 0, variant = 'editorial' }: ProgramCardProps) {
  if (variant === 'compact') {
    return (
      <article className="group flex h-full flex-col">
        <div className="relative aspect-[5/4] overflow-hidden bg-ink/5">
          <SmartImage
            src={program.image}
            alt={program.alt}
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            fallbackLabel={program.title}
            fallbackTone="tan"
            fallbackRatio="landscape"
            className="object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.04]"
          />
          <span className="absolute left-5 top-5 font-mono text-[11px] tracking-wider-2 text-cream/90">
            0{index + 1}
          </span>
          <span className="absolute right-5 top-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-wider-3 text-cream/90">
            {program.level}
          </span>
        </div>
        <div className="mt-7">
          <h3 className="font-display text-display-sm text-ink text-balance">
            {program.title}
          </h3>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/65">
            {program.description}
          </p>
          <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5">
            <span className="text-[11px] uppercase tracking-wider-2 text-ink/45">
              {program.ageRange} · {program.sessionLength}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider-2 text-tan-700 transition-transform duration-500 group-hover:translate-x-1">
              Keşfet
              <ArrowUpRight className="size-3.5" aria-hidden />
            </span>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group grid items-center gap-10 border-y border-ink/10 py-12 md:grid-cols-12 md:gap-16 md:py-20">
      <div className="md:col-span-5">
        <div className="relative aspect-[5/6] overflow-hidden bg-ink/5">
          <SmartImage
            src={program.image}
            alt={program.alt}
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            fallbackLabel={program.title}
            fallbackTone="tan"
            fallbackRatio="4/5"
            className="object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.05]"
          />
        </div>
      </div>

      <div className="md:col-span-7">
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider-2 text-tan-700">
          <span className="font-mono text-tan-600/80">0{index + 1}</span>
          <span className="h-px w-8 bg-tan-600/40" aria-hidden />
          <span>{program.level} · {program.ageRange}</span>
        </div>

        <h3 className="mt-7 font-display text-display-md md:text-display-lg text-ink text-balance leading-[1.05]">
          {program.title}
        </h3>

        <p className="mt-6 max-w-xl text-body-lg leading-relaxed text-ink/65">
          {program.description}
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
          <div>
            <dt className="text-[10px] uppercase tracking-wider-2 text-ink/40">Süre</dt>
            <dd className="mt-1 text-sm text-ink/85">{program.duration}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider-2 text-ink/40">Ders</dt>
            <dd className="mt-1 text-sm text-ink/85">{program.sessionLength}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider-2 text-ink/40">Yaş</dt>
            <dd className="mt-1 text-sm text-ink/85">{program.ageRange}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider-2 text-ink/40">Seviye</dt>
            <dd className="mt-1 text-sm text-ink/85">{program.level}</dd>
          </div>
        </dl>

        <a
          href="/iletisim"
          className="group/cta mt-10 inline-flex items-center gap-3 text-[12px] uppercase tracking-wider-2 text-ink transition-colors hover:text-tan-700"
        >
          <span className="relative pb-1">
            Programa kayıt ol
            <span className="absolute inset-x-0 bottom-0 h-px bg-current" aria-hidden />
          </span>
          <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" aria-hidden />
        </a>
      </div>
    </article>
  )
}
