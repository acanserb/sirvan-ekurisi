import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import FadeIn from '@/components/ui/FadeIn'
import ProgramCard from '@/components/cards/ProgramCard'
import CTABand from '@/components/home/CTABand'
import FAQ from '@/components/home/FAQ'
import JsonLd from '@/components/seo/JsonLd'
import { createMetadata, breadcrumbJsonLd } from '@/lib/seo'
import { programs } from '@/data/programs'
import { SITE } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Eğitim Programları',
  description:
    'Şirvan Ekürisi binicilik eğitim programları: Başlangıç, çocuk, yetişkin ve profesyonel gelişim. Ankara\'da kişiye özel atçılık dersleri.',
  path: '/egitimler',
})

const coursesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': programs.map((p) => ({
    '@type': 'Course',
    name: p.title,
    description: p.description,
    provider: { '@type': 'Organization', name: SITE.fullName, sameAs: SITE.url },
    educationalLevel: p.level,
    timeRequired: p.duration,
    teaches: 'Binicilik',
  })),
}

export default function EgitimlerPage() {
  return (
    <>
      <JsonLd data={coursesJsonLd} id="ld-courses" />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Anasayfa', url: '/' },
          { name: 'Eğitimler', url: '/egitimler' },
        ])}
        id="ld-breadcrumb"
      />
      <PageHero
        eyebrow="Eğitim Programları"
        title="Her seviyeye uygun, kişiye özel binicilik."
        description="At ile ilk tanışmadan parkur antrenmanına; başlangıçtan profesyonelliğe sistematik, güvenli ve özgün bir müfredat."
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'Eğitimler' }]}
      />

      <section className="section-padding bg-cream">
        <div className="container">
          {programs.map((program, i) => (
            <FadeIn key={program.id} direction="up" delay={(i % 2) * 0.08}>
              <ProgramCard program={program} index={i} variant="editorial" />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container">
          <FadeIn direction="up" className="mx-auto max-w-4xl text-center">
            <SectionTitle
              eyebrow="Nasıl Çalışıyoruz"
              title="Bir Şirvan Ekürisi dersi nasıl geçer?"
              align="center"
              size="lg"
            />
          </FadeIn>
          <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {[
              { title: 'Karşılama & İhtiyaç Analizi', desc: 'Eğitmenimiz hedef, deneyim ve sağlık durumunuzu öğrenir.' },
              { title: 'Atla Tanışma', desc: 'Tımar, eyerleme ve güvenli yaklaşımın temellerini uygularız.' },
              { title: 'Manejde Çalışma', desc: 'Oturuş, denge, adım-tırıs-kanter sıralamasıyla ilerleme.' },
              { title: 'Geri Bildirim', desc: 'Video destekli analizle haftalık gelişiminizi takip ederiz.' },
            ].map((step, i) => (
              <FadeIn key={step.title} direction="up" delay={i * 0.08}>
                <div className="relative">
                  <span className="font-display text-display-lg italic text-tan-300/40">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-body-lg leading-relaxed text-ink/65">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTABand />
    </>
  )
}
