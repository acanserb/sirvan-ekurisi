import type { Program } from '@/types'

export const programs: Program[] = [
  {
    id: 'p-01',
    slug: 'cocuk-binicilik',
    title: 'Kendine güvenen bireyler yetiştiren çocuk programı',
    level: 'Çocuk',
    ageRange: '6-12 yaş',
    duration: 'Sürekli kayıt',
    sessionLength: '30 dakika',
    description:
      'At ile kurulan bağ; sorumluluk, sabır ve özgüven öğretir. Çocuğunuzun ekran karşısında geçirmeyeceği en değerli 30 dakika.',
    highlights: [
      'Lonjlu güvenli ilk dersler',
      'Pony ile bağ kurma seansları',
      'Oyun temelli denge çalışmaları',
      'Veli takip raporu',
    ],
    image: '/images/programs/cocuk.jpg',
    alt: 'Çocuk binicilik eğitimi — Şirvan Ekürisi',
    icon: 'Heart',
  },
  {
    id: 'p-02',
    slug: 'yetiskin-binicilik',
    title: 'Şehrin ortasında bir doğa kaçışı',
    level: 'Yetişkin',
    ageRange: '18+ yaş',
    duration: 'Esnek paketler',
    sessionLength: '30 dakika',
    description:
      'Yoğun bir hafta sonu kahve değil. Bir disipline saygı, bedeni yeniden tanıma, zihne sessizlik öneren bir ritüel.',
    highlights: [
      'Kişiye özel ders planı',
      'Klasik biniş ekolü',
      'Doğa içinde manej-dışı ride',
      'Esnek hafta içi/sonu seçenekleri',
    ],
    image: '/images/programs/yetiskin.jpg',
    alt: 'Yetişkin binicilik eğitimi — Şirvan Ekürisi',
    icon: 'Crown',
  },
  {
    id: 'p-03',
    slug: 'baslangic-egitimi',
    title: 'Bir biniciye dönüşmenin doğru ilk adımı',
    level: 'Başlangıç',
    ageRange: '12+ yaş',
    duration: '8 hafta',
    sessionLength: '30 dakika',
    description:
      'At ile tanışmadan ilk dengeli oturuşa; aceleye getirmeden, sistematik ve etik bir başlangıç.',
    highlights: [
      'At psikolojisi ve güvenli yaklaşım',
      'Tımar ve eyerleme pratiği',
      'Manejde temel oturuş ve denge',
      'Adım ve tırıs çalışmaları',
    ],
    image: '/images/programs/baslangic.jpg',
    alt: 'Başlangıç binicilik eğitimi — Şirvan Ekürisi',
    icon: 'Sparkles',
  },
  {
    id: 'p-04',
    slug: 'profesyonel-gelisim',
    title: 'Yarış arenasına hazırlanın',
    level: 'Profesyonel',
    ageRange: 'İleri seviye',
    duration: 'Sezonluk',
    sessionLength: '30 dakika',
    description:
      'Engel atlama odaklı, video analiziyle desteklenen ileri seviye antrenman ve yarışma kampı programı.',
    highlights: [
      'Engel atlama parkur çalışması',
      'Parkur ritmi ve mesafe ayarı',
      'Video analizli geri bildirim',
      'Yarışma kampı ve hazırlık',
    ],
    image: '/images/programs/profesyonel.jpg',
    alt: 'Profesyonel binicilik gelişim eğitimi — Şirvan Ekürisi',
    icon: 'Trophy',
  },
]
