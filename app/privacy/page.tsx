import { PageHero } from "@/components/site/page-hero"

export default function PrivacyPage() {
  return (
    <div className="relative z-10">
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        body="A simple launch-stage privacy policy for Beyond Labels Gifts."
      />
      <section className="px-6 pb-16">
        <div className="prose-rich mx-auto rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 sm:p-12">
          <p>
            Beyond Labels Gifts respects your privacy. This launch-stage website may collect basic
            information you choose to submit, such as email inquiries, and standard analytics data
            used to understand how visitors use the site.
          </p>
          <p>
            Product purchases currently redirect to Etsy for checkout. Any payment processing,
            order details, or transaction data entered during checkout are governed by Etsy&apos;s
            policies and security practices.
          </p>
          <p>
            We do not sell your personal information. If you contact us directly and would like
            your inquiry removed from our records, email hello@beyondlabelgifts.com.
          </p>
          <p>
            This policy can evolve as the store grows, adds direct checkout, or introduces new
            customer communication tools.
          </p>
        </div>
      </section>
    </div>
  )
}
