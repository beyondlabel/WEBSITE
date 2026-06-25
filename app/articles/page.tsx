import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { articleSummaries } from "@/data/site"

export default function ArticlesPage() {
  return (
    <div className="relative z-10">
      <PageHero
        eyebrow="Journal"
        title="Articles that help shoppers choose with more confidence and heart."
        body="Beyond Label Gifts is building an article library around meaningful gifting, appreciation language, and relationship-first keepsakes."
        cta={{ href: "/shop", label: "Shop the flagship gift" }}
      />

      <section className="px-6 py-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6">
          {articleSummaries.map((article, index) => (
            <article
              key={article.slug}
              className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] lg:grid-cols-[0.4fr_0.6fr]"
            >
              <Link
                href={`/articles/${article.slug}`}
                className="flex min-h-[220px] flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(176,109,255,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(211,175,111,0.16),transparent_32%)] p-8 transition-transform duration-300 hover:scale-[1.01]"
                aria-label={`Open ${article.title}`}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-lavender/78">{article.eyebrow}</p>
                <div className="font-display text-5xl text-white/18">{String(index + 1).padStart(2, "0")}</div>
              </Link>
              <div className="flex flex-col justify-center gap-5 p-8 sm:p-10">
                <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
                  {article.title}
                </h2>
                <p className="max-w-2xl text-sm leading-8 text-foreground/68">{article.excerpt}</p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
