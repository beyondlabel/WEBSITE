import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Gift, Heart, ScrollText, ShieldCheck, Sparkles, Star } from "lucide-react"
import Image from "next/image"
import { ProductStage } from "@/components/site/product-stage"
import { BondAnimation } from "@/components/site/bond-animation"
import { SectionHeading } from "@/components/site/section-heading"
import {
  articleSummaries,
  emotionalReasons,
  symbolicPoints,
  promisePoints,
  signatureHighlights,
  signatureProduct,
  storyMoments
} from "@/data/site"

export const metadata: Metadata = {
  title: "Beyond Labels Gifts | Meaningful Necklace Gifts",
  description:
    "Discover the Eternal Hope Necklace from Beyond Labels Gifts, a meaningful keepsake necklace in silver or gold created to represent bond, appreciation, gratitude, and lasting love.",
  openGraph: {
    title: "Beyond Labels Gifts | Meaningful Necklace Gifts",
    description:
      "Discover the Eternal Hope Necklace from Beyond Labels Gifts, a meaningful keepsake necklace in silver or gold created to represent bond, appreciation, gratitude, and lasting love.",
    images: [
      {
        url: "/brand/og-logo.png",
        width: 1536,
        height: 1024,
        alt: "Beyond Labels Gifts logo"
      }
    ]
  }
}

export default function HomePage() {
  return (
    <div className="relative z-10">
      <section className="px-6 pb-16 pt-28 sm:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-sm text-white/82">
                <span className="h-2 w-2 rounded-full bg-gold" />
                Meaningful jewelry gifts for people who changed everything
              </div>

              <div className="space-y-6">
                <h1 className="max-w-4xl font-display text-[clamp(3.5rem,7vw,6.1rem)] leading-[0.94] tracking-[-0.03em] text-white text-balance">
                  A keepsake they can wear. A message they will never forget.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-foreground/78 text-pretty">
                  Beyond Labels Gifts is not about browsing a catalog. It is about finding one
                  keepsake that makes love, gratitude, and recognition feel unmistakably real the
                  moment the box opens.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {signatureHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-5 py-4"
                  >
                    <p className="text-sm leading-7 text-foreground/74">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Shop now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:hello@beyondlabelgifts.com"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-lavender/45 hover:text-lavender"
                >
                  Contact us
                </Link>
              </div>

              <div className="grid gap-3 text-sm text-white/82 sm:grid-cols-3">
                <span className="inline-flex items-center gap-2 rounded-[1.1rem] border border-gold/18 bg-gold/8 px-4 py-3">
                  <Gift className="h-4 w-4 text-gold" />
                  Gift-ready presentation
                </span>
                <span className="inline-flex items-center gap-2 rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 text-lavender" />
                  Gold or silver finish
                </span>
                <span className="inline-flex items-center gap-2 rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-4 py-3">
                  <Heart className="h-4 w-4 text-gold" />
                  Built for meaningful moments
                </span>
              </div>
            </div>

            <ProductStage />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="luxury-panel rounded-[2rem] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.26em] text-lavender/76">What people are really buying</p>
                <h2 className="max-w-xl font-display text-4xl leading-tight text-white text-balance sm:text-5xl">
                  A moment that becomes a memory.
                </h2>
                <p className="max-w-xl text-base leading-8 text-foreground/74">
                  At Beyond Labels Gifts, we believe the most meaningful gifts are not the most
                  expensive. They are the ones that make someone stop, smile, and say, &quot;I
                  really needed to hear that.&quot;
                </p>
              </div>
              <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.045] shadow-[0_22px_60px_rgba(0,0,0,0.28)]">
                  <Image
                    src="/products/silver/transformation-15021-ad21937d-9d7a-4d64-acff-38e11be8c776.png"
                    alt="Silver Eternal Hope Necklace presented inside an open premium gift box"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="grid gap-4">
                  {storyMoments.slice(0, 4).map((item, index) => (
                    <div
                      key={item}
                    className={`rounded-[1.6rem] border border-white/10 bg-black/18 p-5 ${
                        index === 1 ? "lg:translate-x-3" : ""
                      }`}
                    >
                      <p className="text-sm leading-7 text-foreground/72">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-it-matters" className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            kicker="Why this necklace matters"
            title="The jewelry is not the hero. The feeling is."
            body="Every necklace begins with a story, a carefully written message, and a reminder that somebody&apos;s love, sacrifice, patience, and strength matter more than words can express."
          />
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-6 sm:grid-cols-2">
              {emotionalReasons.slice(0, 2).map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[1.85rem] border p-7 ${
                    index === 0 ? "border-gold/18 bg-gold/8" : "border-white/10 bg-white/[0.045]"
                  }`}
                >
                  <h3 className="font-display text-3xl text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-foreground/70">{item.body}</p>
                </article>
              ))}
              <article className="rounded-[1.85rem] border border-white/10 bg-black/18 p-7 sm:col-span-2">
                <h3 className="font-display text-3xl text-white">{emotionalReasons[2].title}</h3>
                <p className="mt-4 text-sm leading-8 text-foreground/70">{emotionalReasons[2].body}</p>
              </article>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045]">
              <Image
                src="/products/silver/transformation-17533-49404a31-054a-4bc5-9baf-d84ea847cd52.png"
                alt="Silver Eternal Hope Necklace displayed in an open luxury gift box on a wooden surface"
                width={1000}
                height={1000}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.26em] text-gold/78">Who needs this necklace</p>
            <h2 className="max-w-xl font-display text-4xl leading-tight text-white text-balance sm:text-5xl">
              The right gift for people whose care changed everything.
            </h2>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.045]">
              <Image
                src="/products/gold/transformation-12384-ffae0d79-789d-4caf-8745-11b04b6095bc.png"
                alt="Gold Eternal Hope Necklace displayed inside an open premium gift box"
                width={1000}
                height={1000}
                className="h-auto w-full object-cover object-center"
              />
            </div>
            <div className="space-y-4 text-base leading-8 text-foreground/72">
              <p>
                This necklace is for the mother who never gave up, the father who kept believing,
                the grandparent who kept showing up, and the teacher or therapist who made someone
                feel safe, valued, and loved.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Shop the Eternal Hope Necklace
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4">
            {promisePoints.map((item, index) => (
              <div
                key={item}
                className={`rounded-[1.8rem] border p-6 ${
                  index === 0 ? "border-white/10 bg-white/[0.045]" : "border-white/10 bg-black/16"
                }`}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-sm font-semibold text-gold">
                  0{index + 1}
                </div>
                <p className="text-sm leading-8 text-foreground/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#120d1d] p-8 sm:p-10">
            <BondAnimation />
            <div className="relative z-10 max-w-xl space-y-5">
              <p className="text-sm uppercase tracking-[0.28em] text-gold/80">What it represents</p>
              <h2 className="font-display text-4xl leading-tight text-white text-balance sm:text-5xl">
                A bond. A thank-you. A reminder that their love mattered.
              </h2>
              <p className="text-base leading-8 text-foreground/74">
                {signatureProduct.representation}
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045]">
              <Image
                src="/products/gold/2.jpg"
                alt="Gold Eternal Hope Necklace close-up beside a luxury wood gift box"
                width={1000}
                height={1000}
                className="h-auto w-full object-cover object-center"
              />
            </div>
            {symbolicPoints.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[1.8rem] border p-7 ${
                  index === 0 ? "border-gold/18 bg-gold/8" : "border-white/10 bg-white/[0.045]"
                }`}
              >
                <h3 className="font-display text-3xl text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-foreground/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <SectionHeading
              kicker="Crafted with purpose"
              title="Presented to feel unforgettable from the very first glance."
              body="Each piece is designed to transform an ordinary gift into an unforgettable experience with premium presentation, emotional clarity, and a keepsake worth wearing every day."
            />
            <div className="grid gap-4 text-sm text-white/78">
              <span className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-black/24 px-4 py-3">
                <Star className="h-4 w-4 text-gold" />
                One item only, fully focused
              </span>
              <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/24 px-4 py-3">
                <Heart className="h-4 w-4 text-lavender" />
                Message-first gifting experience
              </span>
              <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/24 px-4 py-3">
                <ShieldCheck className="h-4 w-4 text-gold" />
                Built to feel personal on mobile and desktop
              </span>
            </div>
          </div>
          <div className="luxury-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,154,98,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(185,102,255,0.16),transparent_34%)]" />
            <div className="relative z-10 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/74">
                <ScrollText className="h-4 w-4 text-lavender" />
                Beyond Labels Gifts
              </div>
              <h3 className="max-w-xl font-display text-4xl leading-tight text-white">
                Every story. Beyond labels. Every gift. Made with purpose.
              </h3>
              <p className="max-w-2xl text-base leading-8 text-foreground/76">
                This positioning is what creates trust. No hype. No overcrowded catalog. Just one
                meaningful keepsake presented with enough care to help the right person feel seen.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Shop now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            kicker="Journal"
            title="Words, gift guides, and encouragement worth saving."
            body="The article hub supports the same mission as the shop: helping people put deep appreciation into words that feel personal and true."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articleSummaries.map((article, index) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className={`group flex h-full flex-col rounded-[2rem] border border-white/10 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-gold/25 ${
                  index % 2 === 1 ? "bg-white/[0.045]" : "bg-black/16"
                }`}
              >
                <p className="text-sm uppercase tracking-[0.26em] text-lavender/76">{article.eyebrow}</p>
                <h3 className="mt-5 font-display text-3xl leading-tight text-white transition-colors duration-300 group-hover:text-gold">
                  {article.title}
                </h3>
                <p className="mt-5 text-sm leading-8 text-foreground/68">{article.excerpt}</p>
                <span className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
