import {
  Award,
  Coffee,
  GraduationCap,
  Home,
  ShieldCheck,
  Sparkles,
  Sun,
  Warehouse,
  type LucideIcon,
} from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Award,
  Sun,
  Home,
  Warehouse,
  Coffee,
}

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  index?: number
  invert?: boolean
}

export default function FeatureCard({
  title,
  description,
  icon,
  index,
  invert,
}: FeatureCardProps) {
  const Icon = icons[icon] ?? Sparkles
  return (
    <article
      className={`group relative flex h-full flex-col gap-5 border p-7 transition-all duration-500 ease-out-expo md:p-9 ${
        invert
          ? 'border-cream/10 bg-ink/40 text-cream hover:border-tan-400'
          : 'border-ink/10 bg-cream-50 hover:border-tan-600'
      }`}
    >
      {typeof index === 'number' ? (
        <span
          aria-hidden
          className={`absolute right-5 top-5 font-mono text-[11px] ${
            invert ? 'text-cream/30' : 'text-ink/25'
          }`}
        >
          0{index + 1}
        </span>
      ) : null}
      <span
        className={`grid size-14 place-items-center rounded-full ${
          invert
            ? 'bg-tan-600/30 text-tan-200'
            : 'bg-tan-100 text-tan-600'
        }`}
      >
        <Icon className="size-6" aria-hidden />
      </span>
      <h3
        className={`font-display text-xl ${invert ? 'text-cream' : 'text-ink'} md:text-2xl`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          invert ? 'text-cream/70' : 'text-ink/70'
        }`}
      >
        {description}
      </p>
    </article>
  )
}
