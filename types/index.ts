export type Discipline =
  | 'Engel Atlama'
  | 'Eğitim'
  | 'Damızlık'
  | 'Pony'

export interface Horse {
  id: string
  slug: string
  name: string
  discipline: Discipline
  traits?: string[]
  image: string
  alt: string
  featured?: boolean
}

export interface Instructor {
  id: string
  slug: string
  name: string
  title: string
  yearsOfExperience: number
  certifications: string[]
  bio: string
  image: string
  alt: string
}

export type ProgramLevel =
  | 'Başlangıç'
  | 'Çocuk'
  | 'Yetişkin'
  | 'Profesyonel'

export interface Program {
  id: string
  slug: string
  title: string
  level: ProgramLevel
  ageRange: string
  duration: string
  sessionLength: string
  description: string
  highlights: string[]
  image: string
  alt: string
  icon?: string
}

export type BlogCategory =
  | 'Binicilik Eğitimi'
  | 'Çocuklarda Binicilik'
  | 'At Bakımı'
  | 'Yarışma ve Organizasyonlar'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: BlogCategory
  author: string
  publishedAt: string
  readingTime: number
  coverImage: string
  alt: string
  featured?: boolean
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  caption?: string
  category: 'Tesis' | 'Eğitim' | 'Atlar' | 'Yarışmalar' | 'Etkinlikler'
  width: number
  height: number
}

export interface Testimonial {
  id: string
  name: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
  date: string
  source?: 'Google' | 'Instagram' | 'Manuel'
}

export interface FacilityFeature {
  id: string
  title: string
  description: string
  icon: string
  image?: string
}

export interface NavItem {
  label: string
  href: string
}
