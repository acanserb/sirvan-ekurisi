import type { Horse } from '@/types'

export const horses: Horse[] = [
  {
    id: 'h-01',
    slug: 'midnight',
    name: 'Midnight',
    age: 11,
    breed: 'Holsteiner',
    discipline: 'Engel Atlama',
    levelTag: 'Güven Veren Eğitim Atı',
    height: '168 cm',
    traits: ['Sakin', 'Disiplinli', 'Güvenilir'],
    shortBio:
      'Yıllardır hem yeni başlayanları güvenle taşıyan hem de deneyimli binicilere parkurda eşlik eden, sakin ve sabırlı bir at. İlk dersinizde bile kendinizi güvende hissedersiniz.',
    story:
      'Sakinliği bulaşıcıdır; eyerine oturan herkes önce nefes almayı, sonra binmeyi öğrenir. Tecrübesi, acemi bir biniciyi bile dakikalar içinde rahatlatır.',
    image: '/images/horses/midnight.jpg',
    alt: 'Şirvan Ekürisi binicilik atı Midnight — koyu bay Holsteiner',
    featured: true,
  },
  {
    id: 'h-02',
    slug: 'aria',
    name: 'Aria',
    age: 9,
    breed: 'Hannoveran',
    discipline: 'Eğitim',
    levelTag: 'İleri Seviye',
    height: '165 cm',
    traits: ['Zarif', 'Hassas', 'Eğitime Açık'],
    shortBio:
      'En ince işaretten anlayan hassas yapısıyla, biniş tekniğini bir üst seviyeye taşımak isteyen deneyimli biniciler için ideal. Sizi dinleyen bir partner arıyorsanız, aradığınız o.',
    story:
      'Her hareketinde bir zarafet var. En ince işarete bile özenle yanıt verir; binicisiyle sessiz ama derin bir anlaşma kurar.',
    image: '/images/horses/aria.jpg',
    alt: 'Şirvan Ekürisi eğitim atı Aria — kestane Hannoveran',
    featured: true,
  },
  {
    id: 'h-03',
    slug: 'sirius',
    name: 'Sirius',
    age: 12,
    breed: 'Türk Safkan Arap',
    discipline: 'Eğitim',
    levelTag: 'Yeni Başlayanlar İçin',
    height: '156 cm',
    traits: ['Sabırlı', 'Şefkatli', 'Tecrübeli'],
    shortBio:
      'İlk kez ata binecekler ve çocuklar için ideal: sabırlı, şefkatli ve yıllara dayanan deneyimiyle adım adım güven veren bir öğretmen. Heyecanınızı anlar, acele ettirmez.',
    story:
      'İlk dersin heyecanını da çekingenliğini de bilir. Yıllardır yeni başlayanları taşıyor; korkuyu güvene çeviren sabrıyla en sevilen öğretmenimiz.',
    image: '/images/horses/sirius.jpg',
    alt: 'Şirvan Ekürisi eğitim atı Sirius — Türk Safkan Arap',
    featured: true,
  },
  {
    id: 'h-04',
    slug: 'achilles',
    name: 'Achilles',
    age: 10,
    breed: 'Selle Français',
    discipline: 'Engel Atlama',
    levelTag: 'İleri Seviye',
    height: '170 cm',
    traits: ['Atletik', 'Cesur', 'Yarış Karakteri'],
    shortBio:
      'Atletik ve cesur karakteriyle yarışmalara hazırlanan bir performans atı. Engelleri zorlamaya hazır, deneyimli biniciler için enerjisi yüksek bir partner.',
    story:
      'Parkurda doğmuş gibi: cesur, atletik ve hırslı. Yarışma sezonunda deneyimli binicilerimizin gözdesi, tribünlerin en çok alkışladığı isim.',
    image: '/images/horses/achilles.jpg',
    alt: 'Şirvan Ekürisi engel atlama atı Achilles — Selle Français',
    featured: true,
  },
  {
    id: 'h-05',
    slug: 'orion',
    name: 'Orion',
    age: 8,
    breed: 'Oldenburg',
    discipline: 'Engel Atlama',
    levelTag: 'İleri Seviye',
    height: '167 cm',
    traits: ['Güçlü', 'Genç', 'Yetenekli'],
    shortBio:
      'Genç ve yetenekli; orta seviyeden ileriye geçen binicilerle birlikte gelişen, geleceği parlak bir at. Kendinizi geliştirmek istiyorsanız doğru yol arkadaşı.',
    story:
      'Genç ve hevesli; her antrenmanda biraz daha açılan büyük bir yetenek. Orta seviye binicilerle birlikte geleceğin parkurlarına hazırlanıyor.',
    image: '/images/horses/orion.jpg',
    alt: 'Şirvan Ekürisi engel atlama atı Orion — Oldenburg',
  },
]
