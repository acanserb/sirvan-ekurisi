import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import StickyContactBar from '@/components/layout/StickyContactBar'
import JsonLd from '@/components/seo/JsonLd'
import { GoogleTagManager } from '@next/third-parties/google'
import { localBusinessJsonLd, organizationJsonLd, createMetadata } from '@/lib/seo'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600'],
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = createMetadata()

export const viewport: Viewport = {
  themeColor: '#1B1B1B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <GoogleTagManager gtmId="GTM-WRNRXBCB" />
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </head>
      <body>
        <JsonLd data={localBusinessJsonLd()} id="ld-local-business" />
        <JsonLd data={organizationJsonLd()} id="ld-organization" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="main" className="min-h-screen pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <StickyContactBar />
      </body>
    </html>
  )
}
