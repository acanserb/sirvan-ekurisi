export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: 'q-01',
    question: 'Daha önce hiç ata binmedim. Yine de gelebilir miyim?',
    answer:
      'Elbette. Şirvan Ekürisi&apos;ndeki binicilerin büyük çoğunluğu sıfırdan başladı. Başlangıç programımız; at ile tanışma, güvenli yaklaşım ve manejde temel oturuştan dengeli tırısa kadar sistematik bir müfredat sunar. İlk seansınız ücretsizdir.',
  },
  {
    id: 'q-02',
    question: 'Çocuğum kaç yaşında başlayabilir?',
    answer:
      'Çocuk programımız 6 yaş ve üzeri için tasarlanmıştır. İlk dersler pony ile, lonjlu ve eğitmen eşliğinde yapılır. Çocuğunuzun fiziksel ve duygusal hazırlık durumunu eğitmenimiz ilk seansta birlikte değerlendirir.',
  },
  {
    id: 'q-03',
    question: 'Ekipman temin etmem gerekiyor mu?',
    answer:
      'Başlangıç döneminde tesis içi tüm güvenlik ekipmanları (kask, gerekirse koruyucu yelek) tarafımızdan sağlanır. Düzenli binişe başladığınızda kişiye özel ekipman önerilerimiz olacaktır; ekürimizdeki ekipman ortağımız size en doğru seçimi yapmanızda yardımcı olur.',
  },
  {
    id: 'q-04',
    question: 'Hafta içi mi, hafta sonu mu daha uygun?',
    answer:
      'Hem hafta içi (Pazartesi–Cuma, 09:00–20:00) hem hafta sonu (Cumartesi–Pazar, 08:00–21:00) seansları açıktır. Yetişkin binicilerimizin çoğu hafta içi sabah veya akşam üstü tercihinde bulunur; daha sakin bir ortam sunar.',
  },
  {
    id: 'q-05',
    question: 'Aylık ücret nasıl belirleniyor?',
    answer:
      'Ücretlendirme seçtiğiniz programa, ders sıklığına ve paket süresine göre değişir. Bireysel deneme sonrası size özel bir teklif hazırlıyoruz. Kurumsal indirim ve kardeş indirimi uygulamalarımız mevcuttur.',
  },
  {
    id: 'q-06',
    question: 'Yarışmalara katılacak seviyeye ulaşabilir miyim?',
    answer:
      'Profesyonel Gelişim programımız; engel atlama disiplininde ulusal yarışmalara hazırlık için tasarlandı. Video analizli geri bildirim, yarış kampları ve federasyon süreçlerinde eğitmenimiz size eşlik eder.',
  },
]
