import { ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import FadeIn from '@/components/ui/FadeIn'
import SmartImage from '@/components/ui/SmartImage'
import { Button } from '@/components/ui/Button'
import { facilityFeatures } from '@/data/facility'

export default function Facility() {
  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-20">
          <FadeIn direction="up" className="lg:col-span-7">
            <SectionTitle
              eyebrow="Tesisimiz"
              title={
                <>
                  Şehrin <em className="italic">içinde</em>,
                  <br className="hidden md:block" />
                  doğanın <em className="italic">ortasında</em>.
                </>
              }
              description="60 × 30 metre açık manej, tüm mevsim çalışmaya elverişli kapalı manej, konforlu ahırlar ve özenli sosyal alanlar — bir kulüpten fazlası."
              size="xl"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.1} className="lg:col-span-5">
            <Button
              href="/tesisimiz"
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="size-4" />}
            >
              Tesisi Keşfedin
            </Button>
          </FadeIn>
        </div>

        {/* Bento-style facility grid */}
        <div className="mt-20 grid gap-3 md:mt-28 md:grid-cols-6 md:gap-4 md:[grid-template-rows:auto_auto]">
          {/* Big feature image */}
          <FadeIn direction="up" className="md:col-span-4 md:row-span-2">
            <FacilityTile
              feature={facilityFeatures[0]}
              ratio="aspect-[4/5] md:aspect-auto md:h-full"
              size="large"
            />
          </FadeIn>

          {/* Top-right */}
          <FadeIn direction="up" delay={0.1} className="md:col-span-2">
            <FacilityTile feature={facilityFeatures[1]} ratio="aspect-[5/4]" />
          </FadeIn>

          {/* Bottom-right */}
          <FadeIn direction="up" delay={0.2} className="md:col-span-2">
            <FacilityTile feature={facilityFeatures[3]} ratio="aspect-[5/4]" />
          </FadeIn>

          {/* Bottom wide */}
          <FadeIn direction="up" delay={0.3} className="md:col-span-6">
            <FacilityTile feature={facilityFeatures[2]} ratio="aspect-[5/3] md:aspect-[16/6]" horizontal />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function FacilityTile({
  feature,
  ratio,
  size = 'small',
  horizontal = false,
}: {
  feature: { title: string; description: string; image?: string }
  ratio: string
  size?: 'small' | 'large'
  horizontal?: boolean
}) {
  return (
    <article className={`group relative overflow-hidden bg-ink ${ratio}`}>
      <SmartImage
        src={feature.image ?? '/images/facility/placeholder.jpg'}
        alt={`Şirvan Ekürisi ${feature.title}`}
        fill
        sizes={size === 'large' ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
        fallbackLabel={feature.title}
        fallbackTone="ink"
        fallbackRatio="landscape"
        className="object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/15" aria-hidden />

      <div
        className={`absolute inset-0 flex flex-col p-7 md:p-10 ${
          horizontal ? 'md:flex-row md:items-end md:justify-between' : 'justify-end'
        }`}
      >
        <div>
          <span className="text-[10px] uppercase tracking-wider-3 text-tan-200">Tesis</span>
          <h3
            className={`mt-3 font-display text-cream ${
              size === 'large' ? 'text-display-lg md:text-display-xl' : 'text-display-md'
            }`}
          >
            {feature.title}
          </h3>
        </div>
        <p
          className={`mt-4 max-w-md text-[14px] leading-relaxed text-cream/85 md:text-[15px] ${
            horizontal ? 'md:mt-0 md:max-w-sm md:text-right' : ''
          }`}
        >
          {feature.description}
        </p>
      </div>
    </article>
  )
}
