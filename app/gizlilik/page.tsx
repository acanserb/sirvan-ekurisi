import PageHero from '@/components/ui/PageHero'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Gizlilik Politikası',
  description: 'Şirvan Ekürisi gizlilik politikası ve veri işleme prensipleri.',
  path: '/gizlilik',
})

export default function GizlilikPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="Gizlilik Politikası"
        description="Kullanıcı verilerinin nasıl toplandığı, işlendiği ve korunduğuna ilişkin temel ilkeler."
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'Gizlilik' }]}
      />
      <section className="bg-cream pb-24 pt-12">
        <div className="container max-w-3xl space-y-6 text-ink/75">
          <p>
            Şirvan Ekürisi olarak; web sitemizi ziyaret eden ve hizmetlerimizden
            faydalanan kullanıcılarımızın gizliliğine önem veriyoruz.
          </p>
          <h2 className="mt-10 font-display text-2xl text-ink">Toplanan Veriler</h2>
          <p>
            İletişim formu üzerinden iletilen ad, soyad, telefon, e-posta ve
            mesaj bilgileri yalnızca size dönüş yapmak amacıyla kullanılır.
          </p>
          <h2 className="mt-10 font-display text-2xl text-ink">Veri Saklama</h2>
          <p>
            Tarafımıza iletilen veriler yetkisiz erişime karşı korunur ve
            yasal yükümlülükler dışında üçüncü taraflarla paylaşılmaz.
          </p>
          <h2 className="mt-10 font-display text-2xl text-ink">Çerezler</h2>
          <p>
            Web sitemiz, deneyiminizi iyileştirmek için temel düzeyde çerezler
            kullanır. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.
          </p>
        </div>
      </section>
    </>
  )
}
