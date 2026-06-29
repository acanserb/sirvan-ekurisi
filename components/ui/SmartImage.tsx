'use client'

import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'
import Placeholder from './Placeholder'
import { cn } from '@/lib/utils'

interface SmartImageProps extends Omit<ImageProps, 'onError'> {
  fallbackLabel?: string
  fallbackTone?: 'cream' | 'tan' | 'ink'
  fallbackRatio?: 'square' | 'landscape' | 'portrait' | '4/5' | '3/4'
  wrapperClassName?: string
}

export default function SmartImage({
  fallbackLabel,
  fallbackTone = 'cream',
  fallbackRatio = 'landscape',
  wrapperClassName,
  className,
  alt,
  ...props
}: SmartImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={cn('relative h-full w-full', wrapperClassName)}>
        <Placeholder
          label={fallbackLabel ?? alt}
          tone={fallbackTone}
          ratio={fallbackRatio}
          className="h-full w-full"
        />
      </div>
    )
  }

  return (
    <Image
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
      {...props}
    />
  )
}
