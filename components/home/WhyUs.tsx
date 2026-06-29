import SmartImage from '@/components/ui/SmartImage'
import FadeIn from '@/components/ui/FadeIn'
import { whyUs } from '@/data/whyUs'

export default function WhyUs() {
  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Left — editorial title block */}
          <FadeIn direction="up" className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="eyebrow">Neden Şirvan Ekürisi</p>
            <h2 className="mt-8 display-headline text-display-lg md:text-display-xl text-ink">
              Sıradan bir <em className="italic">binicilik okulu</em> değiliz.
            </h2>
            <p className="mt-8 max-w-md text-body-lg leading-relaxed text-ink/65">
              Bizim için binicilik bir spor değil; atla kurulan saygıya, disipline ve estetiğe dayalı uzun soluklu bir ortaklıktır.
            </p>

            <FadeIn delay={0.15} className="mt-12 hidden lg:block">
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden">
                <SmartImage
                  src="/images/horses/aria.jpg"
                  alt="Şirvan Ekürisi at portresi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  fallbackLabel="Şirvan"
                  fallbackTone="tan"
                  fallbackRatio="4/5"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </FadeIn>

          {/* Right — vertical editorial list */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {whyUs.map((item, i) => (
                <FadeIn key={item.id} direction="up" delay={i * 0.08} as="li">
                  <article className="group grid grid-cols-[auto_1fr] gap-6 py-10 md:grid-cols-[80px_1fr] md:gap-10 md:py-14">
                    <span className="font-mono text-[11px] tracking-wider-2 text-tan-600 md:pt-2">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-display text-display-sm md:text-display-md text-ink transition-colors duration-500 group-hover:text-tan-700">
                        {item.title}
                      </h3>
                      <p
                        className="mt-4 max-w-lg text-body-lg leading-relaxed text-ink/65"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </article>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
