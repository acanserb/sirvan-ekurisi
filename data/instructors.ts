import type { Instructor } from '@/types'

export const instructors: Instructor[] = [
  {
    id: 'i-01',
    slug: 'bas-egitmen',
    name: 'Şirvan Ekürisi Eğitmen Kadrosu',
    title: 'Baş Eğitmen',
    yearsOfExperience: 20,
    certifications: [
      'TBF Lisanslı Eğitmen',
      'Uluslararası Antrenör Stajı',
      'Atlı Spor Federasyonu Sertifikaları',
    ],
    bio: 'Şirvan Ekürisi baş eğitmeni; ulusal ve uluslararası yarışma deneyimi olan, klasik biniş ekolüne hakim bir profesyonel. Çocuklardan profesyonellere uzanan müfredatı bizzat kurguluyor ve sahada uyguluyor.',
    image: '/images/instructors/bas-egitmen.jpg',
    alt: 'Şirvan Ekürisi baş eğitmen',
  },
]
