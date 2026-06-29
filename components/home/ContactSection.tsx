import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import FadeIn from '@/components/ui/FadeIn'
import ContactForm from '@/components/sections/ContactForm'
import { CONTACT } from '@/lib/constants'

export default function ContactSection() {
  return (
    <section id="iletisim" className="section-padding bg-ink text-cream">
      <div className="container">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-24">
          <FadeIn direction="up" className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionTitle
              eyebrow="İletişim"
              title={
                <>
                  Sizi tesisimizde
                  <br />
                  <em className="italic text-tan-200">ağırlamayı</em> bekliyoruz.
                </>
              }
              description="Bilgi almak, deneme dersi planlamak veya tesisi gezmek için bize ulaşın. En geç 24 saat içinde dönüş sağlıyoruz."
              invert
              size="lg"
            />

            <ul className="mt-14 space-y-6 text-sm">
              <ContactRow icon={<MapPin className="size-4" />} title="Adres" value={CONTACT.address.full} href={CONTACT.mapsLink} external />
              <ContactRow icon={<Phone className="size-4" />} title="Telefon" value={CONTACT.phone} href={CONTACT.phoneHref} />
              <ContactRow icon={<MessageCircle className="size-4" />} title="WhatsApp" value="Anında mesaj gönderin" href={CONTACT.whatsappHref} external />
              <ContactRow icon={<Mail className="size-4" />} title="E-posta" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            </ul>
          </FadeIn>

          <FadeIn direction="up" delay={0.1} className="lg:col-span-7">
            <ContactForm variant="dark" title="Hızlı Başvuru" subtitle="Bir formu doldurun; biz size dönelim." />

            <div className="mt-10 overflow-hidden border border-cream/10">
              <iframe
                title="Şirvan Ekürisi konum haritası"
                src={CONTACT.mapsEmbed}
                className="h-72 w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon,
  title,
  value,
  href,
  external,
}: {
  icon: React.ReactNode
  title: string
  value: string
  href?: string
  external?: boolean
}) {
  const inner = (
    <li className="group flex items-start gap-5 border-b border-cream/15 pb-5 transition-colors hover:text-tan-200">
      <span className="grid size-10 shrink-0 place-items-center border border-cream/20 text-tan-200 transition-colors group-hover:border-tan-200">
        {icon}
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-wider-2 text-cream/60">{title}</p>
        <p className="mt-2 text-[15px] text-cream/95">{value}</p>
      </div>
    </li>
  )
  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="block">
        {inner}
      </a>
    )
  }
  return inner
}
