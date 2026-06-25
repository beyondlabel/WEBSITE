import Link from "next/link"

export default function NotFound() {
  return (
    <div className="relative z-10 px-6 pb-24 pt-36">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-lavender/78">Beyond Label Gifts</p>
        <h1 className="mt-5 font-display text-5xl text-white">That page drifted out of reach.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-foreground/72">
          Head back to the boutique and continue exploring the signature keepsake collection.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Return home
        </Link>
      </div>
    </div>
  )
}
