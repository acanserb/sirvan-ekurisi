'use client'

import { motion, type MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface FadeInProps extends Omit<MotionProps, 'children'> {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: Direction
  className?: string
  as?: 'div' | 'section' | 'article' | 'span' | 'li' | 'ul'
  amount?: number
  once?: boolean
}

const variants = (direction: Direction) => {
  switch (direction) {
    case 'up':
      return { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
    case 'down':
      return { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } }
    case 'left':
      return { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } }
    case 'right':
      return { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } }
    default:
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } }
  }
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  className,
  as = 'div',
  amount = 0.2,
  once = true,
  ...rest
}: FadeInProps) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={cn(className)}
      variants={variants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
