import { ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import FadeIn from '@/components/ui/FadeIn'
import SmartImage from '@/components/ui/SmartImage'
import { Button } from '@/components/ui/Button'

export default function AboutPreview() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-24">
          <FadeIn direction="right" className="lg:col-span-7">
            <div className="relative">
              <div className="relative aspect-[16/11] overflow-hidden">
                <SmartImage
                  src="/images/about/story.jpg"
                  alt="Şirvan Ekürisi tesisinde sabah çalışması"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  fallbackLabel="Şirvan Ekürisi"
                  fallbackTone="tan"
                  fallbackRatio="landscape"
                  className="object-cover"
                />
              </div>
              <span className="absolute -bottom-8 -left-2 hidden font-display text-[120px] italic leading-none text-tan-300/30 md:block" aria-hidden>
                15+
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="lg:col-span-5">
            <SectionTitle
              eyebrow="Hakkımızda"
              title={
                <>
                  Bir <em className="italic">tutkunun</em>,
                  <br />
                  on beş yıllık inşası.
                </>
              }
              size="lg"
            />
            <p className="mt-8 text-body-lg leading-relaxed text-ink/65">
              2010&apos;da kurulan Şirvan Ekürisi; her seviyeden biniciye saygılı, güvenli ve sistematik bir eğitim sunma vizyonuyla yola çıktı. Bugün Ankara&apos;nın en köklü binicilik kulüpleri arasında.
            </p>

            <div className="mt-10">
              <Button href="/hakkimizda" variant="link" iconRight={<ArrowRight className="size-4" />}>
                Hikayemizi Okuyun
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
