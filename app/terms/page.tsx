import { PageHero } from "@/components/site/page-hero"

export default function TermsPage() {
  return (
    <div className="relative z-10">
      <PageHero
        eyebrow="Terms"
        title="Terms and Conditions"
        body="Core launch-stage terms for using the Beyond Labels Gifts website."
      />
      <section className="px-6 pb-16">
        <div className="prose-rich mx-auto rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 sm:p-12">
          <p>
            By using this website, you agree to use it lawfully and respectfully. All site copy,
            branding, artwork, and product presentation are the property of Beyond Labels Gifts
            unless otherwise noted.
          </p>
          <p>
            Product availability, pricing, message options, and launch details may change without
            notice. Current checkout is fulfilled through Etsy, and any completed order is subject
            to Etsy&apos;s platform terms, policies, and transaction protections.
          </p>
          <p>
            Beyond Labels Gifts provides this website for informational and shopping purposes. We
            are not responsible for interruptions caused by third-party services, temporary launch
            changes, or content updates in progress.
          </p>
          <p>
            If you have a question about orders, product messaging, or custom gifting inquiries,
            contact hello@beyondlabelgifts.com.
          </p>
        </div>
      </section>
    </div>
  )
}
