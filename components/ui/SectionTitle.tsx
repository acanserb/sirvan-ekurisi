import { cn } from '@/lib/utils'

interface SectionTitleProps {
  eyebrow?: string
  title: string | React.ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  invert?: boolean
  size?: 'md' | 'lg' | 'xl'
}

const sizeMap = {
  md: 'text-display-md md:text-display-lg',
  lg: 'text-display-lg md:text-display-xl',
  xl: 'text-display-xl md:text-display-2xl',
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  as: As = 'h2',
  invert = false,
  size = 'lg',
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'eyebrow',
            align === 'center' && 'justify-center',
            invert && 'text-tan-200 before:bg-tan-200',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <As
        className={cn(
          'mt-6 display-headline',
          sizeMap[size],
          invert ? 'text-cream' : 'text-ink',
        )}
      >
        {title}
      </As>
      {description ? (
        <p
          className={cn(
            'mt-6 max-w-2xl text-body-lg text-pretty md:text-body-xl',
            align === 'center' && 'mx-auto',
            invert ? 'text-cream/65' : 'text-ink/65',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
