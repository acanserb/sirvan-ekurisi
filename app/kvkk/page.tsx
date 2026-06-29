import PageHero from '@/components/ui/PageHero'
import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'KVKK Aydınlatma Metni',
  description:
    'Şirvan Ekürisi KVKK aydınlatma metni — kişisel verilerin işlenmesi ve haklarınız.',
  path: '/kvkk',
})

export default function KvkkPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="KVKK Aydınlatma Metni"
        description="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel veri işleme süreçlerimiz hakkında bilgilendirme."
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'KVKK' }]}
      />
      <section className="bg-cream pb-24 pt-12">
        <div className="container max-w-3xl space-y-6 text-ink/75">
          <h2 className="font-display text-2xl text-ink">Veri Sorumlusu</h2>
          <p>
            Şirvan Ekürisi Binicilik Okulu, KVKK kapsamında veri sorumlusu
            sıfatıyla hareket eder.
          </p>
          <h2 className="mt-10 font-display text-2xl text-ink">Veri İşleme Amaçları</h2>
          <p>
            Kişisel verileriniz; iletişim talebinize yanıt vermek, kayıt ve
            eğitim süreçlerini yürütmek ve yasal yükümlülükleri yerine getirmek
            amacıyla işlenir.
          </p>
          <h2 className="mt-10 font-display text-2xl text-ink">Haklarınız</h2>
          <p>
            KVKK kapsamında erişim, düzeltme, silme ve itiraz haklarınızı
            kullanmak için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>
    </>
  )
}
