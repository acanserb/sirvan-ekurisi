import Link from 'next/link'
import { Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react'
import { CONTACT, NAV_ITEMS, SITE, SOCIAL } from '@/lib/constants'
import TrackedLink from '@/components/ui/TrackedLink'

export default function Footer() {
  const year = 2026
  return (
    <footer className="bg-ink text-cream/75">
      <div className="container py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="font-display text-7xl italic text-cream md:text-8xl">
              Şirvan
            </span>
            <p className="mt-6 max-w-md text-body-lg leading-relaxed text-cream/75">
              Ankara&apos;nın kalbinde, atla kurulan en zarif ortaklık. {SITE.founded}&apos;dan beri.
            </p>

            <div className="mt-12">
              <a
                href="/iletisim"
                className="group inline-flex items-center gap-3 border border-cream/20 px-8 py-4 text-[11px] uppercase tracking-wider-2 text-cream transition-all duration-500 hover:border-tan-200 hover:bg-tan-600"
              >
                <span>Ücretsiz Deneme Dersi</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <h3 className="text-[10px] uppercase tracking-wider-3 text-tan-200">Keşfedin</h3>
              <ul className="mt-6 space-y-3 text-sm">
                {NAV_ITEMS.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-cream/80 transition-colors hover:text-tan-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-wider-3 text-tan-200">Site</h3>
              <ul className="mt-6 space-y-3 text-sm">
                {NAV_ITEMS.slice(4).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-cream/80 transition-colors hover:text-tan-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-wider-3 text-tan-200">İletişim</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-cream/80">
                <li>{CONTACT.address.full}</li>
                <li>
                  <TrackedLink track="phone_click" href={CONTACT.phoneHref} className="transition-colors hover:text-tan-200">
                    {CONTACT.phone}
                  </TrackedLink>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-tan-200">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>

              <div className="mt-8 flex items-center gap-3">
                <SocialLink href={SOCIAL.instagram} label="Instagram"><Instagram className="size-4" /></SocialLink>
                <SocialLink href={SOCIAL.facebook} label="Facebook"><Facebook className="size-4" /></SocialLink>
                <SocialLink href={SOCIAL.youtube} label="YouTube"><Youtube className="size-4" /></SocialLink>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-10 text-[10px] uppercase tracking-wider-2 text-cream/55 md:flex-row md:items-center">
          <p>© {year} {SITE.fullName}</p>
          <p className="flex flex-wrap items-center gap-6">
            <Link href="/gizlilik" className="hover:text-tan-200">Gizlilik</Link>
            <Link href="/kvkk" className="hover:text-tan-200">KVKK</Link>
            <span>Designed with intent.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-10 place-items-center border border-cream/15 text-cream/80 transition-all duration-500 hover:border-tan-200 hover:text-tan-200"
    >
      {children}
    </a>
  )
}
