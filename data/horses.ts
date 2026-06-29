import type { Horse } from '@/types'

export const horses: Horse[] = [
  {
    id: 'h-01',
    slug: 'onyx',
    name: 'ONYX',
    discipline: 'Engel Atlama',
    traits: ['Sakin', 'Disiplinli', 'Güvenilir'],
    image: '/images/horses/midnight.jpg',
    alt: 'Şirvan Ekürisi binicilik atı ONYX — koyu bay',
    featured: true,
  },
  {
    id: 'h-02',
    slug: 'canello',
    name: 'CANELLO',
    discipline: 'Eğitim',
    traits: ['Zarif', 'Hassas', 'Eğitime Açık'],
    image: '/images/horses/aria.jpg',
    alt: 'Şirvan Ekürisi eğitim atı CANELLO — kestane',
    featured: true,
  },
  {
    id: 'h-05',
    slug: 'orion',
    name: 'Orion',
    discipline: 'Engel Atlama',
    traits: ['Güçlü', 'Genç', 'Yetenekli'],
    image: '/images/horses/orion.jpg',
    alt: 'Şirvan Ekürisi engel atlama atı Orion',
  },
]
