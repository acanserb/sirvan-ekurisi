import PageHero from '@/components/ui/PageHero'
import GalleryGrid from '@/components/sections/GalleryGrid'
import CTABand from '@/components/home/CTABand'
import JsonLd from '@/components/seo/JsonLd'
import { createMetadata, breadcrumbJsonLd } from '@/lib/seo'
import { galleryImages } from '@/data/gallery'

export const metadata = createMetadata({
  title: 'Galeri',
  description:
    'Şirvan Ekürisi galerisi: Tesis, eğitim, atlar, yarışmalar ve etkinliklerden seçilmiş kareler.',
  path: '/galeri',
})

export default function GaleriPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Anasayfa', url: '/' },
          { name: 'Galeri', url: '/galeri' },
        ])}
        id="ld-breadcrumb"
      />
      <PageHero
        eyebrow="Galeri"
        title="Şirvan Ekürisi'nden kareler."
        description="Eğitim anları, tesis detayları, yarışma günleri ve özel etkinlikler."
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'Galeri' }]}
      />
      <section className="section-padding bg-cream">
        <div className="container">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
      <CTABand />
    </>
  )
}
