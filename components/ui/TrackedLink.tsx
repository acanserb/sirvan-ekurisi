'use client'

import { trackPhoneClick, trackWhatsappClick } from '@/lib/analytics'

type TrackEvent = 'phone_click' | 'whatsapp_click'

const handlers: Record<TrackEvent, () => void> = {
  phone_click: trackPhoneClick,
  whatsapp_click: trackWhatsappClick,
}

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  track: TrackEvent
}

/**
 * Standart `<a>` gibi davranan, tıklanınca ilgili dönüşüm event'ini gönderen link.
 * Server component'lerin de tıklama takibi yapabilmesi için client component'tir.
 */
export default function TrackedLink({ track, onClick, children, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        handlers[track]()
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}
