import SmartImage from '@/components/ui/SmartImage'
import FadeIn from '@/components/ui/FadeIn'

export default function Story() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="section-padding container">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-24">
          <FadeIn direction="right" className="lg:col-span-6">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <SmartImage
                  src="/images/about/founder.jpg"
                  alt="Şirvan Ekürisi kurucusu"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  fallbackLabel="Şirvan"
                  fallbackTone="ink"
                  fallbackRatio="4/5"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-tan-600/60 md:block" aria-hidden />
              <span
                className="absolute -bottom-12 left-0 hidden font-display text-7xl italic text-tan-300/30 md:block"
                aria-hidden
              >
                2010
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="lg:col-span-6">
            <p className="eyebrow text-tan-200 before:bg-tan-200">Şirvan&apos;ın Hikayesi</p>

            <h2 className="mt-8 display-headline text-display-lg md:text-display-xl text-cream">
              Bir kulüp değil, bir <em className="italic text-tan-200">aile</em> kurduk.
            </h2>

            <div className="mt-10 space-y-6 text-body-lg leading-relaxed text-cream/85">
              <p>
                Şirvan Ekürisi 2010 yılında doğdu. Avrupa&apos;da edinilen tecrübeyi Türkiye&apos;deki binicilik kültürüyle harmanlamak, etik ve güvenli bir kulüp ortamı yaratmak temel motivasyonumuzdu.
              </p>
              <p>
                Bizim için binicilik bir spor değil; atla kurulan bir saygı, disiplin ve estetik dilidir. Çocuklara özgüven, gençlere sorumluluk, yetişkinlere arınma sunar.
              </p>
            </div>

            <blockquote className="mt-12 border-l-2 border-tan-300/60 pl-8">
              <p className="font-display text-2xl italic leading-relaxed text-cream md:text-3xl">
                &ldquo;Bir atı tanımak; sabrı, sessizliği ve saygıyı yeniden öğrenmektir. Şirvan Ekürisi, bu öğrenmenin Türkiye&apos;deki en doğru adreslerinden biri olmak için kuruldu.&rdquo;
              </p>
              <footer className="mt-6 text-[11px] uppercase tracking-wider-3 text-cream/65">
                — Kurucu, Şirvan Ekürisi
              </footer>
            </blockquote>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-cream/15 pt-10">
              <Stat value="15+" label="yıllık tecrübe" />
              <Stat value="500+" label="mezun binici" />
              <Stat value="TBF" label="lisanslı kadro" />
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-display-md text-tan-200">{value}</dt>
      <dd className="mt-2 text-[10px] uppercase tracking-wider-2 text-cream/65">{label}</dd>
    </div>
  )
}
