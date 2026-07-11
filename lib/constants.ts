import type { NavItem } from '@/types'

export const SITE = {
  name: 'Şirvan Ekürisi',
  fullName: 'Şirvan Ekürisi Binicilik Okulu',
  tagline: 'Biniciliğin Zarafetle Buluştuğu Yer',
  description:
    'Ankara Yenimahalle\'de profesyonel binicilik eğitimi. Çocuklar, gençler ve yetişkinler için başlangıçtan profesyonele uzanan binicilik programları sunan prestijli binicilik merkezi.',
  url: 'https://sirvanekurisi.com',
  ogImage: '/images/og/og-default.jpg',
  locale: 'tr_TR',
  defaultLanguage: 'tr',
  founded: 2010,
} as const

export const CONTACT = {
  phone: '0506 069 81 18',
  phoneIntl: '+905060698118',
  phoneHref: 'tel:+905060698118',
  whatsappNumber: '905060698118',
  whatsappHref:
    'https://wa.me/905060698118?text=Merhaba%2C%20%C5%9Eirvan%20Ek%C3%BCrisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
  email: 'sirvanecurie@gmail.com',
  address: {
    street: 'Beştepe, Alparslan Türkeş Cd. No:8',
    district: 'Yenimahalle',
    city: 'Ankara',
    zip: '06560',
    country: 'TR',
    full: 'Beştepe, Alparslan Türkeş Cd. No:8, 06560 Yenimahalle/Ankara',
  },
  hours: [
    { day: 'Pazartesi - Cuma', open: '09:00', close: '20:00' },
    { day: 'Cumartesi - Pazar', open: '08:00', close: '21:00' },
  ],
  mapsEmbed:
    'https://www.google.com/maps?q=Be%C5%9Ftepe%2C+Alparslan+T%C3%BCrke%C5%9F+Cd.+No%3A8%2C+06560+Yenimahalle%2FAnkara&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Be%C5%9Ftepe%2C+Alparslan+T%C3%BCrke%C5%9F+Cd.+No%3A8%2C+06560+Yenimahalle%2FAnkara',
  geo: {
    latitude: 39.9442,
    longitude: 32.8009,
  },
} as const

export const SOCIAL = {
  instagram: 'https://instagram.com/sirvanekurisi',
  facebook: 'https://facebook.com/sirvanekurisi',
  youtube: 'https://youtube.com/@sirvanekurisi',
} as const

export const NAV_ITEMS: NavItem[] = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Eğitimler', href: '/egitimler' },
  { label: 'Atlarımız', href: '/atlarimiz' },
  { label: 'Tesisimiz', href: '/tesisimiz' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' },
]

export const SEO_KEYWORDS = [
  'binicilik okulu Ankara',
  'at binme kursu Ankara',
  'Şirvan Ekürisi',
  'çocuk binicilik eğitimi',
  'yetişkin binicilik dersleri',
  'Yenimahalle binicilik',
  'Beştepe binicilik',
  'profesyonel binicilik eğitmeni',
  'engel atlama eğitimi',
  'at çiftliği Ankara',
  'binicilik kulübü',
]
