import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SmartImage from '@/components/ui/SmartImage'
import FadeIn from '@/components/ui/FadeIn'
import BlogCard from '@/components/cards/BlogCard'
import JsonLd from '@/components/seo/JsonLd'
import { createMetadata, breadcrumbJsonLd } from '@/lib/seo'
import { blogPosts } from '@/data/blogPosts'
import { SITE } from '@/lib/constants'
import { formatDate } from '@/lib/utils'

interface Params {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return createMetadata({ title: 'Yazı bulunamadı', noIndex: true })
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
  })
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE.url}${post.coverImage}`,
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: SITE.fullName,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/images/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/blog/${post.slug}` },
  }

  return (
    <>
      <JsonLd data={articleJsonLd} id="ld-article" />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Anasayfa', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
        id="ld-breadcrumb"
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: 'Anasayfa', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      <section className="bg-cream pb-20 pt-12 md:pb-28">
        <div className="container">
          <FadeIn direction="up">
            <div className="relative aspect-[16/9] overflow-hidden">
              <SmartImage
                src={post.coverImage}
                alt={post.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                fallbackLabel={post.title}
                fallbackTone="tan"
                fallbackRatio="landscape"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <article className="mx-auto mt-12 max-w-3xl">
            <div className="flex items-center justify-between border-y border-ink/10 py-4 text-xs uppercase tracking-wider-2 text-ink/50">
              <span>{post.author}</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3" aria-hidden /> {post.readingTime} dk
              </span>
            </div>

            <div className="prose prose-lg mt-10 max-w-none font-sans text-ink/80 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-ink [&_p]:mt-5 [&_p]:leading-relaxed">
              <p>{post.content}</p>
              <p>
                Şirvan Ekürisi olarak biniciliği bir spor olmanın ötesinde bir
                yaşam tarzı olarak görürüz. Her dersimiz, atımız ve binicimizle
                kurulan saygıya dayalı bağı güçlendirir.
              </p>
              <h2>Sonuç</h2>
              <p>
                Daha fazla bilgi almak ve sizin için en uygun programı belirlemek
                için bize ulaşmaktan çekinmeyin. İlk seansınız değerlendirme,
                planlama ve atla tanışma odaklı geçer.
              </p>
            </div>

            <div className="mt-12 border-t border-ink/10 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-tan-600"
              >
                <ArrowLeft className="size-4" />
                Tüm yazılara dön
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            İlgili yazılar
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((p, i) => (
              <FadeIn key={p.id} direction="up" delay={i * 0.08}>
                <BlogCard post={p} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
