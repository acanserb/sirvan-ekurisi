import Link from 'next/link'
import { Clock, ArrowUpRight } from 'lucide-react'
import SmartImage from '@/components/ui/SmartImage'
import { formatDate } from '@/lib/utils'
import type { BlogPost } from '@/types'

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'featured'
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const featured = variant === 'featured'
  return (
    <article
      className={`group flex flex-col ${
        featured ? 'md:grid md:grid-cols-2 md:items-center md:gap-16' : ''
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative block overflow-hidden bg-ink/5 ${
          featured ? 'aspect-[5/4] md:aspect-[4/5]' : 'aspect-[5/4]'
        }`}
      >
        <SmartImage
          src={post.coverImage}
          alt={post.alt}
          fill
          sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
          fallbackLabel={post.title}
          fallbackTone="cream"
          fallbackRatio={featured ? '4/5' : 'landscape'}
          className="object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.05]"
        />
      </Link>

      <div className={`flex flex-col ${featured ? 'mt-8 md:mt-0' : 'mt-8'}`}>
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider-2 text-tan-700">
          <span>{post.category}</span>
          <span className="h-px w-6 bg-tan-600/40" aria-hidden />
          <span className="text-ink/40">{formatDate(post.publishedAt)}</span>
        </div>

        <h3
          className={`mt-6 font-display text-ink text-balance ${
            featured ? 'text-display-md md:text-display-lg' : 'text-display-sm md:text-2xl'
          }`}
        >
          <Link href={`/blog/${post.slug}`} className="underline-grow">
            {post.title}
          </Link>
        </h3>

        <p className="mt-5 line-clamp-3 max-w-xl text-body-lg leading-relaxed text-ink/65">
          {post.excerpt}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider-2 text-ink/40">
            <Clock className="size-3" aria-hidden />
            {post.readingTime} dk okuma
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider-2 text-ink transition-colors hover:text-tan-700"
          >
            Oku
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  )
}
