import { ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import FadeIn from '@/components/ui/FadeIn'
import ProgramCard from '@/components/cards/ProgramCard'
import { Button } from '@/components/ui/Button'
import { programs } from '@/data/programs'

export default function Programs() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container">
        <FadeIn direction="up">
          <SectionTitle
            eyebrow="Eğitim Programları"
            title={
              <>
                Her ruh için bir <em className="italic">başlangıç</em>,
                <br className="hidden md:block" />
                her seviye için bir <em className="italic">parkur</em>.
              </>
            }
            description="Sistematik müfredat, kişiye özel ritim ve birebir eğitmen ilgisiyle hazırlanan dört temel program."
            size="xl"
            className="max-w-4xl"
          />
        </FadeIn>

        <div className="mt-24 md:mt-32">
          {programs.map((program, i) => (
            <FadeIn key={program.id} direction="up" delay={(i % 2) * 0.08}>
              <ProgramCard program={program} index={i} variant="editorial" />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.15} className="mt-20 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-body-lg leading-relaxed text-ink/65">
            Hangi programın size uygun olduğunu birlikte belirleyelim. İlk seansınız değerlendirme, planlama ve atla tanışma odaklı geçer.
          </p>
          <Button href="/egitimler" variant="primary" size="lg" iconRight={<ArrowRight className="size-4" />}>
            Tüm Programlar
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
