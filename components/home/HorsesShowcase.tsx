import { ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import FadeIn from '@/components/ui/FadeIn'
import HorseCard from '@/components/cards/HorseCard'
import { Button } from '@/components/ui/Button'
import { horses } from '@/data/horses'

export default function HorsesShowcase() {
  const featured = horses.filter((h) => h.featured).slice(0, 4)
  return (
    <section className="section-padding bg-ink text-cream">
      <div className="container">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn direction="up" className="lg:col-span-7">
            <SectionTitle
              eyebrow="Ahırlarımız"
              title={
                <>
                  Her atın bir <em className="italic text-tan-200">karakteri</em>,
                  <br className="hidden md:block" />
                  her karakterin bir hikayesi var.
                </>
              }
              description="Holsteiner, Hannoveran, Selle Français ve Türk Safkan Arap. Her biri özenle seçilmiş, bakılmış ve eğitilmiş partnerler."
              invert
              size="xl"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.1} className="lg:col-span-5 lg:text-right">
            <p className="text-body-lg leading-relaxed text-cream/80">
              Bakılan bir at; sadece bir hayvan değil, kulübün ruhudur. Tüm atlarımız uzman veteriner ekibimizin denetiminde, dengeli beslenme ve düzenli antrenmanla yaşar.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 grid gap-4 md:mt-28 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((horse, i) => (
            <FadeIn key={horse.id} direction="up" delay={i * 0.1}>
              <HorseCard horse={horse} variant="showcase" />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.15} className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-cream/10 pt-12 md:flex-row md:items-center">
          <p className="max-w-xl text-body-lg leading-relaxed text-cream/80">
            Sizin için en uygun partneri birlikte seçelim. Atlar değişir; saygı, daima aynı kalır.
          </p>
          <Button
            href="/atlarimiz"
            variant="outline"
            size="lg"
            className="text-cream"
            iconRight={<ArrowRight className="size-4" />}
          >
            Tüm Atları Gör
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
