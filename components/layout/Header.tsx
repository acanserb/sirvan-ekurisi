'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, CONTACT, SITE } from '@/lib/constants'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const onHome = pathname === '/'
  const reduceMotion = useReducedMotion()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Modal menu a11y: move focus in on open, trap Tab, close on Escape, restore focus on close
  useEffect(() => {
    if (!open) return
    const focusables = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    focusables?.[0]?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key === 'Tab' && focusables && focusables.length) {
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      toggleRef.current?.focus()
    }
  }, [open])

  const transparent = onHome && !scrolled && !open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out-expo',
        transparent
          ? 'bg-gradient-to-b from-ink/55 via-ink/20 to-transparent'
          : 'bg-ink/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(245,242,237,0.06)]',
      )}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between gap-6 md:h-24">
          <Link
            href="/"
            aria-label={SITE.fullName}
            className="group flex items-center gap-4"
          >
            <Logo />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg italic text-cream md:text-xl">
                Şirvan
              </span>
              <span className="text-[10px] uppercase tracking-wider-3 text-tan-200 md:text-[11px]">
                Ekürisi · {SITE.founded}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Ana menü">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative text-[12px] font-medium uppercase tracking-wider-2 transition-colors duration-500',
                    active ? 'text-tan-200' : 'text-cream hover:text-tan-200',
                  )}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute -bottom-2 left-0 h-px w-full bg-tan-300" aria-hidden />
                  ) : null}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/iletisim"
              className="group hidden items-center gap-2 border border-cream/30 px-5 py-2.5 text-[11px] font-medium uppercase tracking-wider-2 text-cream transition-all duration-500 hover:border-tan-300 hover:bg-tan-600 hover:text-cream md:inline-flex"
            >
              <span>Deneme Dersi</span>
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((s) => !s)}
              className="grid size-12 place-items-center text-cream lg:hidden"
              aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <X className="size-6" aria-hidden />
                  </motion.span>
                ) : (
                  <motion.span
                    key="m"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Menu className="size-6" aria-hidden />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil menü"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 overflow-y-auto overscroll-contain bg-ink/98 backdrop-blur-md md:top-24 lg:hidden"
          >
            <nav
              className="container flex min-h-[calc(100svh-5rem)] flex-col justify-between pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-8 md:min-h-[calc(100svh-6rem)]"
              aria-label="Mobil menü"
            >
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item, i) => {
                  const active =
                    item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
                  return (
                    <motion.li
                      key={item.href}
                      initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                      animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { delay: 0.04 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                      }
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center justify-between border-b border-cream/10 py-5 font-display text-3xl transition-colors',
                          active ? 'text-tan-200' : 'text-cream hover:text-tan-200',
                        )}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="size-5 opacity-40" />
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={reduceMotion ? { duration: 0 } : { delay: 0.35, duration: 0.5 }}
                className="mt-8 flex flex-col gap-3"
              >
                <a
                  href="/iletisim"
                  className="inline-flex h-14 items-center justify-between bg-tan-600 px-6 text-[11px] uppercase tracking-wider-2 text-cream"
                >
                  <span>Ücretsiz Deneme Dersi</span>
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center justify-center gap-2 border border-cream/20 px-6 py-4 text-[11px] uppercase tracking-wider-2 text-cream"
                >
                  <Phone className="size-3.5" />
                  {CONTACT.phone}
                </a>
                <p className="mt-2 text-center text-[10px] uppercase tracking-wider-2 text-cream/40">
                  {CONTACT.address.district} / {CONTACT.address.city}
                </p>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

function Logo() {
  return (
    <span
      className="grid size-11 place-items-center border border-tan-300/40 transition-transform duration-700 ease-out-expo group-hover:rotate-90"
      aria-hidden
    >
      <span className="font-display text-base italic text-tan-200">Ş</span>
    </span>
  )
}
