import type { Metadata } from 'next'
import { SITE, CONTACT, SEO_KEYWORDS } from './constants'

interface CreateMetadataInput {
  title?: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
  keywords?: string[]
}

export function createMetadata({
  title,
  description = SITE.description,
  path = '/',
  image = SITE.ogImage,
  noIndex = false,
  keywords = SEO_KEYWORDS,
}: CreateMetadataInput = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} — ${SITE.tagline}`

  const url = `${SITE.url}${path}`

  return {
    metadataBase: new URL(SITE.url),
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: SITE.fullName }],
    creator: SITE.fullName,
    publisher: SITE.fullName,
    alternates: {
      canonical: url,
      languages: { 'tr-TR': url },
    },
    openGraph: {
      type: 'website',
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: SITE.fullName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    other: {
      'geo.region': 'TR-06',
      'geo.placename': 'Ankara',
      'geo.position': `${CONTACT.geo.latitude};${CONTACT.geo.longitude}`,
      ICBM: `${CONTACT.geo.latitude}, ${CONTACT.geo.longitude}`,
    },
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SportsActivityLocation'],
    '@id': `${SITE.url}/#organization`,
    name: SITE.fullName,
    alternateName: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.phoneIntl,
    email: CONTACT.email,
    image: `${SITE.url}${SITE.ogImage}`,
    logo: `${SITE.url}/images/logo.png`,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.district,
      addressRegion: CONTACT.address.city,
      postalCode: CONTACT.address.zip,
      addressCountry: CONTACT.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CONTACT.geo.latitude,
      longitude: CONTACT.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '08:00',
        closes: '21:00',
      },
    ],
    sameAs: [
      'https://instagram.com/sirvanekurisi',
      'https://facebook.com/sirvanekurisi',
    ],
    foundingDate: `${SITE.founded}`,
    areaServed: { '@type': 'City', name: 'Ankara' },
    sport: 'Equestrian',
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${SITE.url}/#school`,
    name: SITE.fullName,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.phoneIntl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.district,
      addressRegion: CONTACT.address.city,
      postalCode: CONTACT.address.zip,
      addressCountry: CONTACT.address.country,
    },
  }
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  }
}
