"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Gift, ShieldCheck, Star } from "lucide-react"
import { BondAnimation } from "@/components/site/bond-animation"
import {
  promisePoints,
  purchaseLink,
  recipientGroups,
  shopAssurances,
  shopFaqs,
  shopGallery,
  signatureProduct
} from "@/data/site"
import { cn } from "@/lib/utils"

type FinishKey = keyof typeof shopGallery
type GalleryImage = (typeof shopGallery)[FinishKey][number]

const finishStyles: Record<FinishKey, string> = {
  gold: "border-gold/50 bg-gold/12 text-white",
  silver: "border-lavender/45 bg-lavender/10 text-white"
}

export function ShopExperience() {
  const [finish, setFinish] = useState<FinishKey>("gold")
  const [selectedImage, setSelectedImage] = useState<GalleryImage>(shopGallery.gold[0])

  useEffect(() => {
    setSelectedImage(shopGallery[finish][0])
  }, [finish])

  const activeFinish = signatureProduct.finishes[finish]

  return (
    <div className="relative z-10">
      <section className="px-6 pb-14 pt-28 sm:pt-36">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-black/24 p-3 pr-5">
              <div className="relative h-14 w-14 overflow-hidden rounded-[0.95rem] border border-white/10 bg-white/5">
                <Image
                  src={activeFinish.heroImage}
                  alt={activeFinish.alt}
                  fill
                  className="object-cover object-center"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold/82">Choose your finish</p>
                <p className="mt-1 text-sm text-foreground/74">One necklace, two meaningful ways to give it.</p>
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-5xl leading-[0.94] text-white text-balance sm:text-6xl lg:text-[5.3rem]">
                {signatureProduct.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-foreground/76">
                {signatureProduct.subtitle}
              </p>
              <p className="max-w-3xl text-base leading-8 text-foreground/72">
                {signatureProduct.statement}
              </p>
              <p className="max-w-3xl text-sm leading-8 text-gold/82">
                {signatureProduct.representation}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {(Object.keys(signatureProduct.finishes) as FinishKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFinish(key)}
                  className={cn(
                    "block w-full rounded-[1.4rem] border p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09070f]",
                    finish === key
                      ? finishStyles[key]
                      : "border-white/10 bg-white/[0.04] text-foreground/72 hover:border-white/25 hover:text-white"
                  )}
                  aria-pressed={finish === key}
                >
                  <div className="flex gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1rem] border border-white/10 bg-white/5">
                      <Image
                        src={signatureProduct.finishes[key].heroImage}
                        alt={signatureProduct.finishes[key].alt}
                        fill
                        className="object-cover object-center"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-lg font-semibold">{signatureProduct.finishes[key].label}</span>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-foreground/62">
                          {signatureProduct.finishes[key].price}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-foreground/66">
                        {signatureProduct.finishes[key].note}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={purchaseLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Shop now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:hello@beyondlabelgifts.com"
                className="rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-gold/45 hover:text-gold"
              >
                Contact us
              </Link>
            </div>

            <div className="grid gap-3 text-sm text-white/80">
              {shopAssurances.map((item, index) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/18 px-4 py-3"
                >
                  {index === 0 ? (
                    <Gift className="h-4 w-4 text-gold" />
                  ) : index === 1 ? (
                    <Star className="h-4 w-4 text-lavender" />
                  ) : index === 2 ? (
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                  ) : (
                    <ShieldCheck className="h-4 w-4 text-lavender" />
                  )}
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 shadow-halo">
              <Link
                href={purchaseLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${activeFinish.label} purchase page`}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09070f]"
              >
                <BondAnimation />
                <Image
                  src={selectedImage}
                  alt={activeFinish.alt}
                  width={1200}
                  height={1200}
                  className="relative z-10 h-auto w-full rounded-[1.5rem] object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />
              </Link>
            </div>

            <div className="grid gap-4 rounded-[1.8rem] border border-white/10 bg-black/18 p-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
              <div className="overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/90 p-2">
                <Image
                  src="/product-info/dimension.png"
                  alt="Necklace dimensions and adjustable cable chain measurements"
                  width={768}
                  height={768}
                  className="h-auto w-full object-cover object-center"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.26em] text-gold/78">Dimensions</p>
                <h2 className="font-display text-2xl text-white">Sized to feel elegant on everyday wear.</h2>
                <div className="grid gap-2 text-sm leading-7 text-foreground/74">
                  <p>Adjustable cable chain: 18" to 22"</p>
                  <p>Pendant width and height: 0.62" (15.7mm)</p>
                  <p>Center stone: 6mm cubic zirconia</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {shopGallery[finish].map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={cn(
                    "block w-full overflow-hidden rounded-[1.1rem] border bg-white/[0.04] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09070f]",
                    selectedImage === image
                      ? "border-gold/45 shadow-[0_0_0_1px_rgba(228,194,129,0.28)]"
                      : "border-white/10 hover:border-white/20"
                  )}
                  aria-pressed={selectedImage === image}
                >
                  <div className="relative">
                    <Image
                      src={image}
                      alt={`${activeFinish.label} Eternal Hope Necklace preview`}
                      width={400}
                      height={400}
                      className="h-auto w-full object-cover object-center"
                    />
                    <span className="pointer-events-none absolute bottom-1 left-1 rounded-full bg-black/70 px-2 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/80">
                      View
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <article className="luxury-panel rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-gold/78">Why this necklace matters</p>
            <h2 className="mt-4 font-display text-3xl text-white">It is made to be worn, not forgotten.</h2>
            <p className="mt-4 text-sm leading-8 text-foreground/70">
              This is not jewelry designed to sit in a drawer. It is designed to become part of
              someone&apos;s everyday life and remind them why they keep going.
            </p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-lavender/76">Crafted to last</p>
            <h2 className="mt-4 font-display text-3xl text-white">A keepsake built for the memory.</h2>
            <p className="mt-4 text-sm leading-8 text-foreground/70">
              Each necklace arrives inside a premium gift box with a heartfelt message card so the
              reveal feels beautiful before a single word is spoken.
            </p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-black/18 p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-gold/78">Current selection</p>
            <h2 className="mt-4 font-display text-3xl text-white">{activeFinish.label}</h2>
            <p className="mt-2 text-xl font-semibold text-gold">{activeFinish.price}</p>
            <p className="mt-4 text-sm leading-8 text-foreground/70">{activeFinish.accent}</p>
            <p className="mt-3 text-sm leading-8 text-foreground/66">
              {activeFinish.note}
            </p>
          </article>
        </div>
      </section>

      <section id="who-it-is-for" className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.26em] text-lavender/78">Who this gift is perfect for</p>
              <h2 className="max-w-xl font-display text-4xl leading-tight text-white text-balance sm:text-5xl">
                The people who keep showing up deserve to know the impact they made.
              </h2>
              <p className="max-w-xl text-base leading-8 text-foreground/72">
                Whether it is a parent, grandparent, therapist, teacher, caregiver, or the friend
                who refused to stop believing, this gift is for people whose love changed
                somebody&apos;s life.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {recipientGroups.map((group, index) => (
                <div
                  key={group}
                  className={cn(
                    "rounded-[1.6rem] border p-5 text-sm leading-7",
                    index % 3 === 0
                      ? "border-gold/18 bg-gold/8 text-white"
                      : "border-white/10 bg-white/[0.045] text-foreground/74"
                  )}
                >
                  {group}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.26em] text-gold/78">Our promise</p>
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
              We only make gifts that help someone feel seen.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {promisePoints.map((point) => (
              <div key={point} className="rounded-[1.8rem] border border-white/10 bg-black/16 p-7">
                <p className="text-base leading-8 text-foreground/76">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {shopFaqs.map((item) => (
            <article key={item.question} className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-7">
              <h3 className="font-display text-2xl text-white">{item.question}</h3>
              <p className="mt-4 text-sm leading-8 text-foreground/68">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#09070f]/92 px-4 py-3 backdrop-blur-xl sm:hidden">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-lavender/76">{activeFinish.label} finish</p>
            <p className="mt-1 text-sm font-semibold text-white">{activeFinish.price}</p>
          </div>
          <Link
            href={purchaseLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Shop now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
