import { ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import FadeIn from '@/components/ui/FadeIn'
import BlogCard from '@/components/cards/BlogCard'
import { Button } from '@/components/ui/Button'
import { blogPosts } from '@/data/blogPosts'

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3)
  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <FadeIn direction="up">
            <SectionTitle
              eyebrow="Günce"
              title={
                <>
                  Binicilik dünyasından
                  <br className="hidden md:block" />
                  <em className="italic">notlar</em> ve <em className="italic">rehberler</em>.
                </>
              }
              size="lg"
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <Button href="/blog" variant="link" iconRight={<ArrowRight className="size-4" />}>
              Tüm Yazılar
            </Button>
          </FadeIn>
        </div>

        <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-3 md:gap-8">
          {posts.map((post, i) => (
            <FadeIn key={post.id} direction="up" delay={i * 0.1}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
