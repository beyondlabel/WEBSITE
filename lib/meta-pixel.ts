declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

type MetaEventName = "PageView" | "AddToCart" | "InitiateCheckout" | "Purchase"

type MetaPurchasePayload = {
  value?: number
  currency?: string
  content_name?: string
  content_type?: string
}

export function trackMetaEvent(eventName: MetaEventName, payload?: MetaPurchasePayload) {
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

export function trackMetaAddToCart() {
  trackMetaEvent("AddToCart")
}

export function trackMetaInitiateCheckout() {
  trackMetaEvent("InitiateCheckout")
}

export function trackMetaPurchase(payload: Required<Pick<MetaPurchasePayload, "value" | "currency">> &
  Partial<Omit<MetaPurchasePayload, "value" | "currency">>) {
  trackMetaEvent("Purchase", payload)
}
