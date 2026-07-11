import { Mail, MapPin, MessageCircle, Phone, Clock } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import FadeIn from '@/components/ui/FadeIn'
import ContactForm from '@/components/sections/ContactForm'
import TrackedLink from '@/components/ui/TrackedLink'
import JsonLd from '@/components/seo/JsonLd'
import { createMetadata, breadcrumbJsonLd } from '@/lib/seo'
import { CONTACT } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'İletişim',
  description:
    'Şirvan Ekürisi Binicilik Okulu iletişim: Beştepe, Alparslan Türkeş Cd. No:8 Yenimahalle/Ankara. Telefon: 0506 069 81 18.',
  path: '/iletisim',
})

export default function IletisimPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Anasayfa', url: '/' },
          { name: 'İletişim', url: '/iletisim' },
        ])}
        id="ld-breadcrumb"
      />
      <PageHero
        eyebrow="İletişim"
        title="Sizi tesisimizde ağırlamayı bekliyoruz."
        description="Bilgi alma, deneme dersi, tesis gezisi veya kurumsal işbirliği için size 24 saat içinde dönüş sağlıyoruz."
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'İletişim' }]}
      />

      <section className="section-padding bg-cream">
        <div className="container grid items-start gap-16 lg:grid-cols-12 lg:gap-24">
          <FadeIn direction="right" className="lg:col-span-5">
            <ul className="space-y-7 text-sm">
              <Row icon={<MapPin className="size-4" />} title="Adres">
                <a
                  href={CONTACT.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-ink/80 underline-grow"
                >
                  {CONTACT.address.full}
                </a>
              </Row>
              <Row icon={<Phone className="size-4" />} title="Telefon">
                <TrackedLink track="phone_click" href={CONTACT.phoneHref} className="text-[15px] text-ink/80 underline-grow">
                  {CONTACT.phone}
                </TrackedLink>
              </Row>
              <Row icon={<MessageCircle className="size-4" />} title="WhatsApp">
                <TrackedLink
                  track="whatsapp_click"
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-ink/80 underline-grow"
                >
                  Hemen mesaj gönderin
                </TrackedLink>
              </Row>
              <Row icon={<Mail className="size-4" />} title="E-posta">
                <a href={`mailto:${CONTACT.email}`} className="text-[15px] text-ink/80 underline-grow">
                  {CONTACT.email}
                </a>
              </Row>
              <Row icon={<Clock className="size-4" />} title="Çalışma Saatleri">
                <div className="space-y-1 text-[15px] text-ink/80">
                  {CONTACT.hours.map((h) => (
                    <div key={h.day}>
                      <span className="text-ink/50">{h.day}: </span>
                      {h.open} – {h.close}
                    </div>
                  ))}
                </div>
              </Row>
            </ul>

            <div className="mt-12 overflow-hidden border border-ink/10">
              <iframe
                title="Şirvan Ekürisi konum haritası"
                src={CONTACT.mapsEmbed}
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>

          <FadeIn direction="left" className="lg:col-span-7">
            <ContactForm variant="light" title="Bize Ulaşın" subtitle="Formu doldurun, deneme dersinizi planlamak için size dönüş yapalım." />
          </FadeIn>
        </div>
      </section>
    </>
  )
}

function Row({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-5 border-b border-ink/10 pb-6">
      <span className="grid size-10 shrink-0 place-items-center border border-ink/15 text-tan-600">
        {icon}
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-wider-2 text-ink/40">{title}</p>
        <div className="mt-2">{children}</div>
      </div>
    </li>
  )
}
