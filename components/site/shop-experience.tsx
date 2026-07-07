"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  Gift,
  Lock,
  ShieldCheck,
  Sparkles,
  Star,
  X
} from "lucide-react"
import { BondAnimation } from "@/components/site/bond-animation"
import { ShopifyBuyButton } from "@/components/site/shopify-buy-button"
import {
  promisePoints,
  recipientGroups,
  shopAssurances,
  shopFaqs,
  shopGallery,
  productImages,
  signatureProduct
} from "@/data/site"
import { cn } from "@/lib/utils"

type FinishKey = keyof typeof shopGallery
type GalleryImage = (typeof shopGallery)[FinishKey][number]

const finishStyles: Record<FinishKey, string> = {
  gold: "border-gold/50 bg-gold/[0.12] text-white",
  silver: "border-lavender/50 bg-lavender/10 text-white"
}

const assuranceIcons = [Gift, Lock, Star, ShieldCheck] as const

export function ShopExperience() {
  const [finish, setFinish] = useState<FinishKey>("silver")
  const [selectedImage, setSelectedImage] = useState<GalleryImage>(shopGallery.silver[0])
  const [showToast, setShowToast] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)
  const [cartCelebration, setCartCelebration] = useState(false)
  const [checkoutPulse, setCheckoutPulse] = useState(false)
  const badgeImage = shopGallery[finish][5]

  useEffect(() => {
    setSelectedImage(shopGallery[finish][0])
  }, [finish])

  useEffect(() => {
    const toastTimer = window.setTimeout(() => setShowToast(true), 12000)
    const promptTimer = window.setTimeout(() => {
      let promptSeen = false

      try {
        promptSeen = window.sessionStorage.getItem("beyond-label-shop-prompt") === "seen"
      } catch {
        promptSeen = false
      }

      if (!promptSeen) {
        setShowPrompt(true)

        try {
          window.sessionStorage.setItem("beyond-label-shop-prompt", "seen")
        } catch {
          // Session storage can be unavailable in strict privacy contexts.
        }
      }
    }, 45000)

    return () => {
      window.clearTimeout(toastTimer)
      window.clearTimeout(promptTimer)
    }
  }, [])

  const activeFinish = signatureProduct.finishes[finish]

  const scrollToCheckout = useCallback(() => {
    const checkout = document.getElementById("secure-checkout")
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    checkout?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    })
  }, [])

  const handleAddToCart = useCallback(() => {
    setCartCelebration(true)
    setShowPrompt(false)
    window.setTimeout(() => setCartCelebration(false), 4000)
  }, [])

  const handleInitiateCheckout = useCallback(() => {
    setCheckoutPulse(true)
    window.setTimeout(() => setCheckoutPulse(false), 3000)
  }, [])

  const galleryHighlights = [
    productImages.gold[1],
    productImages.silver[1],
    productImages.gold[3],
    productImages.silver[3],
    productImages.gold[4],
    productImages.silver[4]
  ] as const

  const includedItems = [
    "Signature necklace with sparkling center stone",
    "Heartfelt message card already paired with the piece",
    "Premium gift box presentation ready to hand over",
    "Secure mobile-friendly cart and checkout"
  ] as const

  return (
    <div className="relative z-10">
      <section className="px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-36">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex max-w-full items-center gap-3 rounded-[1rem] border border-white/10 bg-black/[0.26] p-2.5 pr-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[0.8rem] border border-white/10 bg-white/5">
                <Image
                  src={badgeImage}
                  alt={activeFinish.alt}
                  fill
                  className="object-cover object-center"
                  sizes="56px"
                  priority
                />
              </div>
              <div className="min-w-0">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-gold/80">
                  Gift-ready checkout
                </p>
                <p className="mt-1 text-sm leading-6 text-foreground/75">
                  Choose a finish, add it to cart, and checkout securely.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-[clamp(3.05rem,7vw,4.85rem)] leading-[0.96] tracking-[-0.02em] text-white text-balance">
                Buy the Eternal Hope Necklace
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-foreground/80 text-pretty">
                {signatureProduct.subtitle} It arrives with the necklace, message card, and premium
                box already working together, so the person opening it immediately understands why
                it was chosen for them.
              </p>
              <p className="max-w-3xl text-sm leading-7 text-gold/80">
                {signatureProduct.representation}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={scrollToCheckout}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Go to checkout
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  document.getElementById("product-gallery")?.scrollIntoView({
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                    block: "center"
                  })
                }}
                className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-gold/50 hover:text-gold"
              >
                See gift photos
              </button>
            </div>

            <div className="grid gap-3 min-[520px]:grid-cols-2">
              {(Object.keys(signatureProduct.finishes) as FinishKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFinish(key)}
                  className={cn(
                    "block w-full rounded-[1.15rem] border p-3.5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09070f]",
                    finish === key
                      ? finishStyles[key]
                      : "border-white/10 bg-white/[0.04] text-foreground/75 hover:border-white/25 hover:text-white"
                  )}
                  aria-pressed={finish === key}
                >
                  <div className="grid grid-cols-[4.75rem_1fr] gap-3.5">
                    <div className="relative h-[4.75rem] w-[4.75rem] overflow-hidden rounded-[0.9rem] border border-white/10 bg-white/5">
                      <Image
                        src={signatureProduct.finishes[key].heroImage}
                        alt={signatureProduct.finishes[key].alt}
                        fill
                        className="object-cover object-center"
                        sizes="76px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base font-semibold">{signatureProduct.finishes[key].label}</span>
                        <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs font-semibold text-foreground/70">
                          {signatureProduct.finishes[key].price}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-foreground/70">
                        {signatureProduct.finishes[key].accent}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div
              id="secure-checkout"
              className={cn(
                "scroll-mt-28 rounded-[1.35rem] border border-gold/20 bg-[#100b18] p-4 shadow-velvet transition-shadow duration-300 sm:p-5",
                checkoutPulse && "shadow-[0_0_0_1px_rgba(242,199,106,0.38),0_0_36px_rgba(242,199,106,0.2)]"
              )}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    <Lock className="h-4 w-4" />
                    Secure checkout
                  </p>
                  <h2 className="font-display text-3xl leading-tight text-white">
                    Add the necklace to cart.
                  </h2>
                  <p className="max-w-xl text-sm leading-7 text-foreground/70">
                    Previewing {activeFinish.label}. Confirm the finish in the selector,
                    then checkout smoothly on mobile or desktop.
                  </p>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/70 sm:block">
                  1 signature gift
                </div>
              </div>
              <div className="mb-4 grid gap-2 rounded-[1rem] border border-white/10 bg-black/[0.18] p-4 sm:grid-cols-2">
                {includedItems.map((item, index) => (
                  <div key={item} className="inline-flex items-start gap-3 text-sm leading-6 text-white/82">
                    <span
                      className={cn(
                        "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                        index % 2 === 0 ? "bg-gold/18 text-gold" : "bg-lavender/18 text-lavender"
                      )}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <ShopifyBuyButton
                onAddToCart={handleAddToCart}
                onInitiateCheckout={handleInitiateCheckout}
              />
            </div>

            <div className="grid gap-3 text-sm text-white/80 sm:grid-cols-2">
              {shopAssurances.map((item, index) => {
                const Icon = assuranceIcons[index] ?? CheckCircle2

                return (
                  <span
                    key={item}
                    className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/10 bg-black/[0.18] px-4 py-3"
                  >
                    <Icon className={cn("h-4 w-4", index % 2 === 0 ? "text-gold" : "text-lavender")} />
                    {item}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="space-y-4 lg:sticky lg:top-28">
            <div id="product-gallery" className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.045] p-2.5 shadow-halo">
              <BondAnimation />
              <button
                type="button"
                onClick={scrollToCheckout}
                aria-label={`Shop ${activeFinish.label} Eternal Hope Necklace`}
                className="group relative z-10 block w-full overflow-hidden rounded-[1.1rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09070f]"
              >
                <Image
                  src={selectedImage}
                  alt={`${activeFinish.label} Eternal Hope Necklace gift-ready product photo`}
                  width={1200}
                  height={1200}
                  className="aspect-square w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.015]"
                  priority
                />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/75 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-gold" />
                  View the full gift set
                </span>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:grid-cols-7 lg:grid-cols-4 xl:grid-cols-7">
              {shopGallery[finish].map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={cn(
                    "block aspect-square w-full overflow-hidden rounded-[0.8rem] border bg-white/[0.04] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09070f]",
                    selectedImage === image
                      ? "border-gold/50 shadow-[0_0_0_1px_rgba(228,194,129,0.28)]"
                      : "border-white/10 hover:border-white/25"
                  )}
                  aria-label={`View ${activeFinish.label} necklace product photo ${index + 1}`}
                  aria-pressed={selectedImage === image}
                >
                  <Image
                    src={image}
                    alt={`${activeFinish.label} Eternal Hope Necklace product preview ${index + 1}`}
                    width={240}
                    height={240}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>

            <div className="grid gap-4 rounded-[1.2rem] border border-white/10 bg-black/[0.18] p-4 sm:grid-cols-[0.85fr_1.15fr] sm:items-center">
              <div className="overflow-hidden rounded-[0.95rem] border border-white/10 bg-white/90 p-2">
                <Image
                  src="/product-info/dimension.png"
                  alt="Eternal Hope Necklace dimensions with adjustable 18 to 22 inch cable chain and 0.62 inch pendant"
                  width={768}
                  height={768}
                  className="h-auto w-full object-cover object-center"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gold/80">Dimensions</p>
                <h2 className="font-display text-2xl leading-tight text-white">
                  Elegant, wearable, gift-ready sizing.
                </h2>
                <div className="grid gap-2 text-sm leading-7 text-foreground/75">
                  <p>Adjustable cable chain: 18&quot; to 22&quot;</p>
                  <p>Pendant width and height: 0.62&quot; (15.7mm)</p>
                  <p>Center stone: 6mm cubic zirconia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <article className="luxury-panel rounded-[1.35rem] p-7">
            <p className="text-sm font-semibold text-gold/80">Why this necklace matters</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-white">
              It is made to be worn, not forgotten.
            </h2>
            <p className="mt-4 text-sm leading-8 text-foreground/70">
              This is not jewelry designed to sit in a drawer. It is a daily reminder of love,
              patience, gratitude, and the bond that keeps people going.
            </p>
          </article>
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-7">
            <p className="text-sm font-semibold text-lavender/80">Crafted to feel complete</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-white">
              The box, card, and necklace tell one story.
            </h2>
            <p className="mt-4 text-sm leading-8 text-foreground/70">
              The presentation does the emotional work before a long explanation is needed, which
              makes the reveal feel polished and personal.
            </p>
          </article>
          <article className="rounded-[1.35rem] border border-white/10 bg-black/[0.18] p-7">
            <p className="text-sm font-semibold text-gold/80">Current preview</p>
            <h2 className="mt-4 font-display text-3xl text-white">{activeFinish.label}</h2>
            <p className="mt-2 text-xl font-semibold text-gold">{activeFinish.price}</p>
            <p className="mt-4 text-sm leading-8 text-foreground/70">{activeFinish.note}</p>
            <button
              type="button"
              onClick={scrollToCheckout}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Go to checkout
              <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-gold/80">More gift views</p>
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl text-balance">
              More angles, more context, more confidence before checkout.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-foreground/75 text-pretty">
              The shop page now gives shoppers a faster read on presentation, finish, and detail,
              so the decision feels organized instead of scattered.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryHighlights.map((image, index) => (
              <figure
                key={image}
                className={cn(
                  "group relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/[0.18]",
                  index % 3 === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                )}
              >
                <Image
                  src={image}
                  alt={`Eternal Hope Necklace product photo ${index + 1}`}
                  width={1200}
                  height={1200}
                  className={cn(
                    "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]",
                    index % 3 === 0 ? "aspect-[1.18/1]" : "aspect-square"
                  )}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="who-it-is-for" className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="space-y-5">
              <p className="text-sm font-semibold text-lavender/80">Who this gift is perfect for</p>
              <h2 className="max-w-xl font-display text-4xl leading-tight text-white text-balance sm:text-5xl">
                The people who keep showing up deserve to know the impact they made.
              </h2>
              <p className="max-w-xl text-base leading-8 text-foreground/75">
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
                    "rounded-[1rem] border p-5 text-sm leading-7",
                    index % 3 === 0
                      ? "border-gold/20 bg-gold/[0.08] text-white"
                      : "border-white/10 bg-white/[0.045] text-foreground/75"
                  )}
                >
                  {group}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-gold/80">Our promise</p>
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
              We only make gifts that help someone feel seen.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {promisePoints.map((point) => (
              <div key={point} className="rounded-[1.2rem] border border-white/10 bg-black/[0.16] p-7">
                <p className="text-base leading-8 text-foreground/80">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {shopFaqs.map((item) => (
            <article key={item.question} className="rounded-[1.2rem] border border-white/10 bg-white/[0.045] p-7">
              <h3 className="font-display text-2xl leading-tight text-white">{item.question}</h3>
              <p className="mt-4 text-sm leading-8 text-foreground/70">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {showToast ? (
        <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+5.75rem)] right-4 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-[1rem] border border-gold/25 bg-[#0c0912]/95 p-3 shadow-velvet backdrop-blur-xl sm:bottom-5">
          <div className="grid grid-cols-[3.75rem_1fr_auto] gap-3">
            <div className="relative h-[3.75rem] w-[3.75rem] overflow-hidden rounded-[0.8rem] border border-white/10 bg-white/5">
              <Image
                src={activeFinish.heroImage}
                alt={`${activeFinish.label} Eternal Hope Necklace checkout reminder`}
                fill
                className="object-cover object-center"
                sizes="60px"
              />
            </div>
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                <Bell className="h-4 w-4 text-gold" />
                Ready to checkout
              </p>
              <p className="mt-1 text-xs leading-5 text-foreground/70">
                The gift box, message card, and necklace are all on this page.
              </p>
              <button
                type="button"
                onClick={scrollToCheckout}
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-gold"
              >
                Go to checkout
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => setShowToast(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/70"
              aria-label="Dismiss shop reminder"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}

      {cartCelebration ? (
        <div className="fixed left-1/2 top-24 z-50 w-[min(24rem,calc(100vw-2rem))] -translate-x-1/2 rounded-full border border-gold/25 bg-[#0c0912]/95 px-4 py-3 text-sm font-semibold text-white shadow-velvet backdrop-blur-xl">
          <span className="flex items-center justify-center gap-2 text-center">
            <CheckCircle2 className="h-4 w-4 text-gold" />
            Added to cart. Checkout is ready.
          </span>
        </div>
      ) : null}

      {showPrompt ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 px-4 py-5 backdrop-blur-sm sm:items-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="shop-prompt-title"
            className="w-full max-w-2xl overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0c0912] shadow-velvet"
          >
            <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-64 bg-black">
                <Image
                  src={activeFinish.heroImage}
                  alt={`${activeFinish.label} Eternal Hope Necklace gift box prompt`}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 640px) 300px, 100vw"
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    <Gift className="h-4 w-4" />
                    Still choosing?
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowPrompt(false)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/70"
                    aria-label="Close checkout prompt"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <h2 id="shop-prompt-title" className="mt-5 font-display text-3xl leading-tight text-white">
                  Make the moment easy to finish.
                </h2>
                <p className="mt-4 text-sm leading-7 text-foreground/75">
                  Choose the finish that feels like them, add it to cart, and let the message card
                  carry the words for you.
                </p>
                <div className="mt-5 grid gap-2 text-sm text-foreground/75">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    Secure checkout
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lavender" />
                    Gift box and message card presentation
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowPrompt(false)
                    scrollToCheckout()
                  }}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Go to checkout
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#09070f]/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.875rem)] pt-3 shadow-[0_-12px_28px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:hidden">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-lavender/80">{activeFinish.label} preview</p>
            <p className="mt-1 text-sm font-semibold text-white">
              {activeFinish.price} · secure checkout
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToCheckout}
            aria-label="Go to secure checkout"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Go to checkout
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
