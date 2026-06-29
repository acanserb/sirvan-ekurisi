export interface WhyUsItem {
  id: string
  number: string
  title: string
  description: string
}

export const whyUs: WhyUsItem[] = [
  {
    id: 'w-01',
    number: '01',
    title: 'Güven',
    description:
      'Lonjlu başlangıç, sigortalı binişler, kasksız adım yok. Hareketin değil, ortaklığın güvenliği.',
  },
  {
    id: 'w-02',
    number: '02',
    title: 'Disiplin',
    description:
      'Klasik biniş ekolü. Her sıçramanın, her duruşun arkasında uzun süren bir hazırlık vardır.',
  },
  {
    id: 'w-03',
    number: '03',
    title: 'Profesyonellik',
    description:
      'TBF lisanslı kadro, ulusal yarışma deneyimi, bireye özel müfredat. Sıradan dersler değil, bir sanat.',
  },
  {
    id: 'w-04',
    number: '04',
    title: 'Prestij',
    description:
      'Ankara&apos;nın en köklü kulüpleri arasında. Bir saygı, bir estetik, bir aidiyet ortamı.',
  },
]
