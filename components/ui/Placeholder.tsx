import { cn } from '@/lib/utils'

interface PlaceholderProps {
  label?: string
  ratio?: 'square' | 'landscape' | 'portrait' | '4/5' | '3/4'
  className?: string
  tone?: 'cream' | 'tan' | 'ink'
}

const ratios = {
  square: 'aspect-square',
  landscape: 'aspect-[16/10]',
  portrait: 'aspect-[3/4]',
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
}

const tones = {
  cream:
    'bg-gradient-to-br from-cream-200 via-cream-100 to-cream-200 text-ink/30',
  tan: 'bg-gradient-to-br from-tan-100 via-tan-50 to-tan-200 text-tan-700/40',
  ink: 'bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 text-cream/30',
}

export default function Placeholder({
  label = 'Şirvan Ekürisi',
  ratio = 'landscape',
  className,
  tone = 'cream',
}: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'relative grid place-items-center overflow-hidden',
        ratios[ratio],
        tones[tone],
        className,
      )}
    >
      <svg
        viewBox="0 0 200 120"
        className="size-20 opacity-50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M30 100c10-40 30-65 65-65 30 0 50 15 60 40" />
        <path d="M85 35c-5-10-10-22-10-30 12 5 18 12 24 22" />
        <path d="M140 60l20-12-6 24" />
        <circle cx="140" cy="65" r="3" fill="currentColor" />
        <path d="M45 100l-3 12M65 100l-3 12M115 112l3-12M150 112l3-12" />
      </svg>
      <span className="absolute bottom-3 left-3 font-display text-xs uppercase tracking-wider-2 opacity-60">
        {label}
      </span>
    </div>
  )
}
