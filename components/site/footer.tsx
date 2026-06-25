import Link from "next/link"
import { ArrowUpRight, Heart, Instagram, Mail, Sparkles } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative mt-28 overflow-hidden border-t border-white/10 px-6 pb-[calc(7.5rem+env(safe-area-inset-bottom))] pt-16 sm:pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/5 px-4 py-2 text-sm text-foreground/78">
            <Sparkles className="h-4 w-4 text-gold" />
            Every story. Beyond labels.
          </div>
          <h2 className="max-w-2xl font-display text-4xl leading-tight text-white">
            Beyond Labels Gifts turns a necklace into a reminder someone can keep close.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-foreground/74">
            One signature keepsake. Two timeless finishes. Crafted to help the right person feel
            deeply seen and appreciated.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Shop now
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:hello@beyondlabelgifts.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-gold/45 hover:text-gold"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-foreground/58">
            <Heart className="h-4 w-4 text-lavender" />
            Explore
          </div>
          <div className="grid gap-3 text-sm text-foreground/78 sm:grid-cols-2">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <div className="grid gap-3 border-t border-white/10 pt-6 text-sm text-foreground/72">
            <Link href="mailto:hello@beyondlabelgifts.com" className="inline-flex items-center gap-2 hover:text-gold">
              <Mail className="h-4 w-4 text-gold" />
              hello@beyondlabelgifts.com
            </Link>
            <Link href="https://instagram.com/beyondlabelgifts" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-lavender">
              <Instagram className="h-4 w-4 text-lavender" />
              @beyondlabelgifts
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
