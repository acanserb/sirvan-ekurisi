'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function StickyContactBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-cream/10 bg-ink/95 backdrop-blur-md md:hidden"
        >
          <a
            href={CONTACT.phoneHref}
            className="flex items-center justify-center gap-2 py-4 text-[11px] uppercase tracking-wider-2 text-cream transition-colors active:bg-tan-600"
          >
            <Phone className="size-4" aria-hidden />
            <span>Ara</span>
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-l border-cream/10 bg-[#25D366] py-4 text-[11px] uppercase tracking-wider-2 text-white"
          >
            <MessageCircle className="size-4" aria-hidden />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
