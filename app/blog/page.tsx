import PageHero from '@/components/ui/PageHero'
import FadeIn from '@/components/ui/FadeIn'
import BlogCard from '@/components/cards/BlogCard'
import CTABand from '@/components/home/CTABand'
import JsonLd from '@/components/seo/JsonLd'
import { createMetadata, breadcrumbJsonLd } from '@/lib/seo'
import { blogPosts } from '@/data/blogPosts'
import { SITE } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Blog',
  description:
    'Binicilik dünyasından rehberler: başlangıç, çocuk binicilik, at bakımı ve yarışma kültürü üzerine Şirvan Ekürisi yazıları.',
  path: '/blog',
})

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: `${SITE.fullName} Blog`,
  url: `${SITE.url}/blog`,
  blogPost: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: post.author },
    description: post.excerpt,
    image: `${SITE.url}${post.coverImage}`,
    url: `${SITE.url}/blog/${post.slug}`,
  })),
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts
  return (
    <>
      <JsonLd data={blogJsonLd} id="ld-blog" />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Anasayfa', url: '/' },
          { name: 'Blog', url: '/blog' },
        ])}
        id="ld-breadcrumb"
      />
      <PageHero
        eyebrow="Günce"
        title="Binicilik dünyasından düşünceler."
        description="Eğitimden bakıma, çocuklardan profesyonellere; binicilik kültürünün uzun soluklu yazıları."
        breadcrumbs={[{ label: 'Anasayfa', href: '/' }, { label: 'Blog' }]}
      />

      {featured ? (
        <section className="bg-cream pt-24 md:pt-32">
          <div className="container">
            <FadeIn direction="up">
              <BlogCard post={featured} variant="featured" />
            </FadeIn>
          </div>
        </section>
      ) : null}

      <section className="section-padding bg-cream">
        <div className="container grid gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <FadeIn key={post.id} direction="up" delay={i * 0.08}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
