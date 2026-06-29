import Hero from '@/components/home/Hero'
import WhyUs from '@/components/home/WhyUs'
import Story from '@/components/home/Story'
import Programs from '@/components/home/Programs'
import HorsesShowcase from '@/components/home/HorsesShowcase'
import Facility from '@/components/home/Facility'
import Testimonials from '@/components/home/Testimonials'
import FAQ from '@/components/home/FAQ'
import BlogPreview from '@/components/home/BlogPreview'
import CTABand from '@/components/home/CTABand'
import ContactSection from '@/components/home/ContactSection'
import JsonLd from '@/components/seo/JsonLd'
import { createMetadata } from '@/lib/seo'
import { SITE } from '@/lib/constants'
import { faqItems } from '@/data/faq'

export const metadata = createMetadata({
  description: SITE.description,
})

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.fullName,
  url: SITE.url,
  inLanguage: 'tr-TR',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/blog?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer.replace(/&apos;/g, "'"),
    },
  })),
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd} id="ld-website" />
      <JsonLd data={faqJsonLd} id="ld-faq" />
      <Hero />
      <WhyUs />
      <Story />
      <Programs />
      <HorsesShowcase />
      <CTABand />
      <Facility />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <ContactSection />
    </>
  )
}
