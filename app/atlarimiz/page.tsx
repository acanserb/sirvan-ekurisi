import PageHero from '@/components/ui/PageHero'
import FadeIn from '@/components/ui/FadeIn'
import HorseCard from '@/components/cards/HorseCard'
import CTABand from '@/components/home/CTABand'
import JsonLd from '@/components/seo/JsonLd'
import { createMetadata, breadcrumbJsonLd } from '@/lib/seo'
import { horses } from '@/data/horses'

export const metadata = createMetadata({
  title: 'Atlarımız',
  description:
    'Ankara\'da binicilik eğitimi için özenle yetiştirilmiş eğitim atlarımızla tanışın. Yeni başlayanlar için sakin ve güvenilir, her at binme seviyesine uygun partnerler.',
  path: '/atlarimiz',
})

export default function AtlarimizPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Anasayfa', url: '/' },
          { name: 'Atlarımız', url: '/atlarimiz' },
        ])}
        id="ld-breadcrumb"
      />
      <PageHero
        eyebrow="Ahır Defteri"
        title="Her at bir karakter, her karakter bir hikaye."
        description="Şirvan Ekürisi'ndeki her at; düzenli veteriner takibi, dengeli beslenme ve sabırlı bir eğitimle büyür. İlk kez ata binecekler için sakin ve güven veren eğitim atları, deneyimli biniciler için atletik partnerler — hepsi aynı özenle hazırlanır."
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'Atlarımız' }]}
      />

      <section className="section-padding bg-cream">
        <div className="container grid gap-x-10 gap-y-20 md:grid-cols-2 md:gap-y-28 lg:gap-x-16">
          {horses.map((horse, i) => (
            <FadeIn key={horse.id} direction="up" delay={(i % 2) * 0.1}>
              <HorseCard horse={horse} variant="detailed" />
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
