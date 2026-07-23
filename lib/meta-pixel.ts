declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

type MetaEventName = "PageView" | "AddToCart" | "InitiateCheckout" | "Purchase"

type MetaProductPayload = {
  id: string
  quantity: number
  item_price: number
}

export type MetaCommercePayload = {
  value?: number
  currency?: string
  content_name?: string
  content_type?: string
  content_ids?: string[]
  contents?: MetaProductPayload[]
  num_items?: number
}

export function trackMetaEvent(eventName: MetaEventName, payload?: MetaCommercePayload) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return
  }

  if (payload) {
    window.fbq("track", eventName, payload)
    return
  }

  window.fbq("track", eventName)
}

export function trackMetaPageView() {
  trackMetaEvent("PageView")
}

export function trackMetaAddToCart(payload?: MetaCommercePayload) {
  trackMetaEvent("AddToCart", payload)
}

export function trackMetaInitiateCheckout(payload?: MetaCommercePayload) {
  trackMetaEvent("InitiateCheckout", payload)
}

export function trackMetaPurchase(payload: Required<Pick<MetaCommercePayload, "value" | "currency">> &
  Partial<Omit<MetaCommercePayload, "value" | "currency">>) {
  trackMetaEvent("Purchase", payload)
}
