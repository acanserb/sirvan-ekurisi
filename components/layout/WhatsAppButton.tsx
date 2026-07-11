'use client'

import { motion } from 'framer-motion'
import { CONTACT } from '@/lib/constants'
import { trackWhatsappClick } from '@/lib/analytics'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      onClick={trackWhatsappClick}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-7 right-7 z-40 hidden size-16 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 md:grid"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" aria-hidden />
      <svg viewBox="0 0 32 32" className="size-8" fill="currentColor" aria-hidden>
        <path d="M16.003 3C9.382 3 4 8.382 4 15.001a11.96 11.96 0 0 0 1.61 6.003L4 29l8.187-2.138a12.01 12.01 0 0 0 3.816.62h.005C22.624 27.482 28 22.1 28 15.482 28 12.27 26.747 9.252 24.46 6.967A11.93 11.93 0 0 0 16.003 3Zm5.474 14.482c-.3-.15-1.776-.876-2.05-.976-.275-.1-.475-.15-.674.15-.2.3-.776.976-.95 1.176-.175.2-.35.225-.65.076-.3-.15-1.266-.467-2.412-1.488-.892-.795-1.494-1.776-1.668-2.076-.175-.3-.018-.462.131-.612.135-.135.3-.35.45-.526.15-.176.2-.301.3-.501.1-.2.05-.376-.025-.526-.076-.15-.675-1.626-.925-2.227-.243-.583-.49-.504-.674-.512l-.575-.011a1.103 1.103 0 0 0-.801.376c-.275.3-1.05 1.026-1.05 2.502 0 1.477 1.075 2.903 1.225 3.103.15.2 2.116 3.235 5.13 4.535.717.31 1.276.495 1.713.633.72.229 1.376.197 1.895.12.578-.087 1.776-.726 2.027-1.426.25-.7.25-1.301.175-1.426-.075-.125-.275-.2-.575-.35Z" />
      </svg>
    </motion.a>
  )
}
