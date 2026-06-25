import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { articlePages } from "@/data/site"

interface ArticlePageProps {
  params: Promise<{
    slug: keyof typeof articlePages
  }>
}

export function generateStaticParams() {
  return Object.keys(articlePages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articlePages[slug]

  if (!article) {
    return {}
  }

  return {
    title: `${article.title} | Beyond Label Gifts`,
    description: article.intro,
    openGraph: {
      title: `${article.title} | Beyond Label Gifts`,
      description: article.intro,
      type: "article",
      url: `https://beyondlabelgifts.com/articles/${slug}`
    }
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = articlePages[slug]

  if (!article) {
    notFound()
  }

  return (
    <div className="relative z-10 px-6 pb-12 pt-28 sm:pt-36">
      <div className="mx-auto max-w-4xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: article.title,
              description: article.intro,
              publisher: {
                "@type": "Organization",
                name: "Beyond Label Gifts",
                url: "https://beyondlabelgifts.com"
              },
              mainEntityOfPage: `https://beyondlabelgifts.com/articles/${slug}`
            })
          }}
        />
        <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
          <ArrowLeft className="h-4 w-4" />
          Back to articles
        </Link>
        <article className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 sm:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-lavender/78">Beyond Label Journal</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-white sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-foreground/74">{article.intro}</p>
          <div className="prose-rich mt-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}
