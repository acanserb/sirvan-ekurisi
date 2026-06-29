import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import FadeIn from '@/components/ui/FadeIn'
import SmartImage from '@/components/ui/SmartImage'
import CTABand from '@/components/home/CTABand'
import JsonLd from '@/components/seo/JsonLd'
import { createMetadata, breadcrumbJsonLd } from '@/lib/seo'
import { facilityFeatures } from '@/data/facility'

export const metadata = createMetadata({
  title: 'Tesisimiz',
  description:
    'Ankara binicilik tesisi Şirvan Ekürisi: açık ve kapalı manej, düzenli bakımlı ahırlar ve güvenli eğitim alanlarıyla at binme eğitimi sunan modern bir binicilik okulu.',
  path: '/tesisimiz',
})

export default function TesisimizPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Anasayfa', url: '/' },
          { name: 'Tesisimiz', url: '/tesisimiz' },
        ])}
        id="ld-breadcrumb"
      />
      <PageHero
        eyebrow="Tesisimiz"
        title="Şehirde bir doğa kaçışı."
        description="Ankara'nın kalbinde; açık ve kapalı manej, düzenli bakımlı ahırlar ve sakin bir öğrenme ortamıyla tasarlanmış bir binicilik tesisi. Deneyimli eğitmenler eşliğinde, güvenli bir eğitim alanında binmeyi öğrenirsiniz."
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'Tesisimiz' }]}
      />

      <section className="section-padding bg-cream">
        <div className="container space-y-32 md:space-y-46">
          {facilityFeatures.map((f, i) => (
            <FadeIn key={f.id} direction="up" delay={i * 0.05}>
              <div className={`grid items-center gap-12 lg:gap-20 ${i % 2 === 1 ? 'lg:grid-cols-[1fr_1.3fr]' : 'lg:grid-cols-[1.3fr_1fr]'}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SmartImage
                      src={f.image ?? '/images/facility/placeholder.jpg'}
                      alt={`Şirvan Ekürisi ${f.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      fallbackLabel={f.title}
                      fallbackTone="tan"
                      fallbackRatio="landscape"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="font-mono text-[11px] tracking-wider-2 text-tan-600">
                    0{i + 1} / 0{facilityFeatures.length}
                  </p>
                  <SectionTitle title={f.title} description={f.description} className="mt-5" size="md" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
