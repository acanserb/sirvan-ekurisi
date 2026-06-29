import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost' | 'tan' | 'link'
type Size = 'sm' | 'md' | 'lg' | 'xl'

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
  icon?: React.ReactNode
  iconRight?: React.ReactNode
}

const base =
  'group/btn relative inline-flex items-center justify-center gap-3 font-medium transition-all duration-500 ease-out-expo whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream uppercase tracking-wider-2 text-[12px]'

const variants: Record<Variant, string> = {
  primary:
    'rounded-none bg-ink text-cream hover:bg-tan-600 px-9 shadow-[0_0_0_1px_rgba(27,27,27,0.05)]',
  tan: 'rounded-none bg-tan-600 text-cream hover:bg-ink px-9 shadow-[0_0_0_1px_rgba(139,111,71,0.1)]',
  outline:
    'rounded-none border border-current text-current hover:bg-current hover:text-cream px-9',
  ghost:
    'rounded-none text-ink hover:text-tan-600 px-3 -mx-3',
  link:
    'rounded-none px-0 text-current relative tracking-wider-2',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 text-[11px]',
  md: 'h-12 text-[12px]',
  lg: 'h-14 text-[12px]',
  xl: 'h-[60px] text-[13px] px-12',
}

type AnchorProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; type?: never }

type ButtonOnlyProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

type Props = AnchorProps | ButtonOnlyProps

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  icon,
  iconRight,
  ...rest
}: Props) {
  const classes = cn(base, variants[variant], variant !== 'link' && sizes[size], className)
  const content = (
    <>
      {icon ? <span aria-hidden className="-ml-1">{icon}</span> : null}
      <span className="relative">{children}</span>
      {iconRight ? (
        <span aria-hidden className="-mr-1 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1">
          {iconRight}
        </span>
      ) : null}
      {variant === 'link' ? (
        <span aria-hidden className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-100 bg-current transition-transform duration-500 ease-out-expo group-hover/btn:origin-left" />
      ) : null}
    </>
  )

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorProps
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')
    if (isExternal) {
      return <a className={classes} href={href} {...anchorRest}>{content}</a>
    }
    return <Link className={classes} href={href}>{content}</Link>
  }

  return <button className={classes} {...(rest as ButtonOnlyProps)}>{content}</button>
}
