import type { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    id: 'b-01',
    slug: 'binicilige-baslarken-bilmeniz-gerekenler',
    title: 'Biniciliğe Başlarken Bilmeniz Gereken 7 Şey',
    excerpt:
      'İlk dersinizden önce hazırlık, doğru kıyafet seçimi, manej etiketi ve atınızla güvenli iletişim için pratik bir rehber.',
    content:
      'Binicilik, atla kurulan saygıya dayalı bir ortaklıktır. İlk derste atı tımar etmeyi, eyerlemeyi ve doğru oturuşu sabırla öğrenmek; ileride en konforlu sıçrayışın da temelini oluşturur. Bu yazımızda manej etiketinden kıyafet seçimine, ısınma rutininden ders sonrası bakıma kadar 7 başlık.',
    category: 'Binicilik Eğitimi',
    author: 'Mehmet Şirvan',
    publishedAt: '2026-04-08',
    readingTime: 6,
    coverImage: '/images/blog/baslarken.jpg',
    alt: 'Biniciliğe başlarken — Şirvan Ekürisi blog',
    featured: true,
  },
  {
    id: 'b-02',
    slug: 'cocuklarda-binicilik-faydalari',
    title: 'Çocuklarda Binicilik: Özgüvenden Sorumluluğa',
    excerpt:
      'Erken yaşta binicilikle tanışan çocuklarda gözlemlenen psiko-motor, sosyal ve akademik gelişim avantajları.',
    content:
      'Çocuklar atla kurdukları bağda empatiyi, sabrı ve sorumluluk duygusunu doğal yoldan içselleştirir. Pony dersleriyle başlayan bu yolculuk, akademik başarıya da olumlu yansıyan dikkat ve denge kazanımları getirir.',
    category: 'Çocuklarda Binicilik',
    author: 'Burcu Yıldız',
    publishedAt: '2026-03-20',
    readingTime: 5,
    coverImage: '/images/blog/cocuk.jpg',
    alt: 'Çocuklarda binicilik faydaları — Şirvan Ekürisi blog',
    featured: true,
  },
  {
    id: 'b-03',
    slug: 'at-bakimi-temel-prensipler',
    title: 'At Bakımının Temel Prensipleri',
    excerpt:
      'Tımar rutininden beslenme dengesine, ahır hijyeninden veteriner takibine — bir at için neye dikkat edilir?',
    content:
      'İyi bakılmış bir at, hem sağlığı hem performansıyla farkını ortaya koyar. Günlük tımar, yem-saman dengesi, ferah ahır koşulları ve düzenli veteriner kontrolü; bizim için tek bir bütünün parçaları.',
    category: 'At Bakımı',
    author: 'Mehmet Şirvan',
    publishedAt: '2026-02-14',
    readingTime: 7,
    coverImage: '/images/blog/bakim.jpg',
    alt: 'At bakımı rehberi — Şirvan Ekürisi blog',
  },
  {
    id: 'b-04',
    slug: 'yaris-sezonu-hazirlik',
    title: 'Yarış Sezonu Hazırlığı: 12 Haftalık Plan',
    excerpt:
      'Yarışmaya çıkacak binici ve at için fiziksel, mental ve teknik hazırlığı kapsayan örnek bir kondisyon planı.',
    content:
      'Yarış sezonuna sistematik hazırlık; binicinin ve atın performansını sürdürülebilir kılar. Engel atlama yüksekliklerinin haftalık artışından mental antrenmana, beslenme stratejisinden dinlenme dönemlerine kapsamlı bir bakış.',
    category: 'Yarışma ve Organizasyonlar',
    author: 'Elif Demir',
    publishedAt: '2026-01-30',
    readingTime: 8,
    coverImage: '/images/blog/yaris.jpg',
    alt: 'Yarış sezonu hazırlık — Şirvan Ekürisi blog',
  },
]
