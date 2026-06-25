import Image from "next/image"
import Link from "next/link"
import { Heart, Sparkles } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"

export default function AboutPage() {
  return (
    <div className="relative z-10">
      <PageHero
        eyebrow="Our story"
        title="A brand built for the people who love deeply and show up fully."
        body="Beyond Labels Gifts exists to celebrate relationships that deserve more than a generic gift and more than a label."
      />

      <section className="px-6 pb-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/16">
            <Link href="/shop" className="block" aria-label="Shop the Eternal Hope Necklace">
              <Image
                src="/brand/back-logo.png"
                alt="Beyond Labels Gifts artwork"
                width={1254}
                height={1254}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.01]"
              />
            </Link>
          </div>
          <div className="space-y-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold/82">
              <Sparkles className="h-4 w-4" />
              Mission-led gifting
            </div>
            <div className="space-y-5 text-base leading-8 text-foreground/74">
              <p>
                Beyond Labels Gifts was imagined as a keepsake brand for extraordinary families,
                caregivers, teachers, therapists, and loved ones whose impact cannot be captured
                by a casual gift.
              </p>
              <p>
                The belief behind the brand is simple: people should be celebrated for who they
                are, not reduced to a diagnosis, title, or challenge. That is why the message is
                always the center of the experience.
              </p>
              <p>
                Jewelry gives the story a beautiful form. But the real product is the reminder:
                you are loved, you are seen, and what you do matters.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Warm, respectful, and emotionally clear",
                "Luxury presentation without cold luxury language",
                "Built for mobile-first shopping behavior",
                "Ready to scale by recipient, occasion, and story"
              ].map((item) => (
                <div key={item} className="inline-flex items-start gap-3 rounded-[1.3rem] border border-white/8 bg-black/16 p-4 text-sm leading-7 text-foreground/68">
                  <Heart className="mt-1 h-4 w-4 shrink-0 text-lavender" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
