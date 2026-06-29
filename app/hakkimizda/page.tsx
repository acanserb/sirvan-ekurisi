import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import FadeIn from '@/components/ui/FadeIn'
import SmartImage from '@/components/ui/SmartImage'
import CTABand from '@/components/home/CTABand'
import JsonLd from '@/components/seo/JsonLd'
import { createMetadata, breadcrumbJsonLd } from '@/lib/seo'
import { instructors } from '@/data/instructors'

export const metadata = createMetadata({
  title: 'Hakkımızda',
  description:
    'Şirvan Ekürisi 2010 yılında kuruldu. Ankara Yenimahalle\'de güvenli ve etik binicilik eğitimi vizyonuyla yola çıkan kulübümüzün hikayesi.',
  path: '/hakkimizda',
})

const values = [
  { title: 'Saygı', description: 'Önce ata, sonra biniciye duyulan saygı; eğitim felsefemizin temelidir.' },
  { title: 'Güvenlik', description: 'Lonjlu başlangıç, sigortalı binişler, kask zorunluluğu ve düzenli ekipman kontrolü.' },
  { title: 'Sistematik Gelişim', description: 'Her seviyeye uygun, ölçülebilir hedeflerle ilerleyen birey odaklı müfredat.' },
  { title: 'Estetik', description: 'Klasik biniş ekolünden ilham alan zarif ve disiplinli bir spor anlayışı.' },
]

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Anasayfa', url: '/' },
          { name: 'Hakkımızda', url: '/hakkimizda' },
        ])}
        id="ld-breadcrumb"
      />
      <PageHero
        eyebrow="Şirvan Ekürisi"
        title="Bir yaşam tarzının on beş yıllık inşası."
        description="Şirvan Ekürisi, Türkiye'de modern ve etik binicilik anlayışını yaymak amacıyla kuruldu. Bugün hem köklü hem de yenilikçi bir kulüp olarak Ankara'nın referans noktası."
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'Hakkımızda' }]}
      />

      <section className="section-padding bg-cream">
        <div className="container grid items-start gap-16 lg:grid-cols-12 lg:gap-24">
          <FadeIn direction="right" className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <SmartImage
                src="/images/about/story.jpg"
                alt="Şirvan Ekürisi sabah çalışması"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                fallbackLabel="Şirvan Ekürisi"
                fallbackTone="tan"
                fallbackRatio="4/5"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn direction="left" className="lg:col-span-7">
            <SectionTitle
              eyebrow="Hikayemiz"
              title={<>Şehrin kalbinde bir <em className="italic">doğa</em> rüyası</>}
              size="lg"
            />
            <div className="mt-10 space-y-6 text-body-lg leading-relaxed text-ink/65">
              <p>
                Şirvan Ekürisi, 2010 yılında profesyonel binicilik kariyeri olan kurucumuz tarafından hayata geçirildi. Avrupa&apos;da edinilen tecrübeleri Türkiye&apos;deki binicilik kültürüyle harmanlamak, etik ve güvenli bir kulüp ortamı yaratmak temel motivasyonumuzdu.
              </p>
              <p>
                Bugün eğitmen kadromuz, beş profesyonel atımız ve yüzlerce mezun binicimizle Ankara&apos;nın en köklü binicilik merkezlerinden biriyiz. Çocuklara özgüven, gençlere disiplin, yetişkinlere arınma sunan bir kulübüz.
              </p>
              <p>
                Şirvan Ekürisi&apos;nin felsefesinde at, sadece bir spor aracı değil; saygı duyulan, anlaşılmaya çalışılan bir partnerdir. Bu anlayış, eğitimin her aşamasında kendini gösterir.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container">
          <FadeIn direction="up" className="mx-auto max-w-3xl text-center">
            <SectionTitle
              eyebrow="Değerlerimiz"
              title={<>Her dersin arkasında duran <em className="italic">dört temel</em></>}
              align="center"
              size="lg"
            />
          </FadeIn>
          <div className="mt-20 grid gap-x-12 gap-y-14 md:grid-cols-2 md:gap-x-16 lg:grid-cols-4">
            {values.map((v, i) => (
              <FadeIn key={v.title} direction="up" delay={i * 0.08}>
                <article>
                  <span className="font-mono text-[11px] tracking-wider-2 text-tan-600">0{i + 1}</span>
                  <h3 className="mt-6 font-display text-display-sm md:text-display-md text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-5 max-w-xs text-body-lg leading-relaxed text-ink/65">
                    {v.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ink text-cream">
        <div className="container">
          <FadeIn direction="up" className="max-w-3xl">
            <SectionTitle
              eyebrow="Eğitmen Kadrosu"
              title={<>Lisanslı, tecrübeli ve <em className="italic">tutkulu</em>.</>}
              description="Her bir eğitmenimiz uluslararası sertifikalara ve geniş bir saha tecrübesine sahip."
              invert
              size="lg"
            />
          </FadeIn>
          <div className="mt-20 grid items-start gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            {instructors.map((ins, i) => (
              <FadeIn key={ins.id} direction="up" delay={i * 0.1}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <SmartImage
                      src={ins.image}
                      alt={ins.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, 45vw"
                      fallbackLabel={ins.name}
                      fallbackTone="ink"
                      fallbackRatio="4/5"
                      className="object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-10">
                    <p className="text-[10px] uppercase tracking-wider-3 text-tan-200">{ins.title}</p>
                    <h3 className="mt-4 font-display text-display-md text-cream">{ins.name}</h3>
                    <p className="mt-6 max-w-md text-body-lg leading-relaxed text-cream/80">{ins.bio}</p>
                    <ul className="mt-8 flex flex-wrap gap-2">
                      {ins.certifications.map((c) => (
                        <li key={c} className="border border-cream/20 px-3 py-1 text-[10px] uppercase tracking-wider-2 text-cream/70">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
