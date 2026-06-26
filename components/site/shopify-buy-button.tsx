"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { shopifyBuyButton } from "@/data/site"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    ShopifyBuy?: {
      buildClient: (config: { domain: string; storefrontAccessToken: string }) => unknown
      UI?: {
        onReady: (client: unknown) => Promise<{
          createComponent: (type: string, config: Record<string, unknown>) => void
        }>
      }
    }
    fbq?: (...args: unknown[]) => void
  }
}

const shopifyScriptUrl = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"

let shopifyScriptPromise: Promise<void> | null = null

function loadShopifyScript() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Shopify Buy Button can only load in the browser."))
  }

  if (window.ShopifyBuy?.UI) {
    return Promise.resolve()
  }

  if (shopifyScriptPromise) {
    return shopifyScriptPromise
  }

  shopifyScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${shopifyScriptUrl}"]`)

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true })
      existingScript.addEventListener("error", () => reject(new Error("Shopify Buy Button failed to load.")), {
        once: true
      })
      return
    }

    const script = document.createElement("script")
    script.async = true
    script.src = shopifyScriptUrl
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Shopify Buy Button failed to load."))
    document.head.appendChild(script)
  })

  return shopifyScriptPromise
}

interface ShopifyBuyButtonProps {
  className?: string
  onAddToCart?: () => void
}

export function ShopifyBuyButton({ className, onAddToCart }: ShopifyBuyButtonProps) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const lastTrackAtRef = useRef(0)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")

  useEffect(() => {
    let isMounted = true
    const node = nodeRef.current

    if (!node) {
      return
    }

    const mountNode = node

    const trackAddToCart = () => {
      const now = Date.now()

      if (now - lastTrackAtRef.current < 900) {
        return
      }

      lastTrackAtRef.current = now

      if (typeof window.fbq === "function") {
        window.fbq("track", "AddToCart")
      }

      onAddToCart?.()
    }

    async function mountBuyButton() {
      try {
        setStatus("loading")
        mountNode.innerHTML = ""
        await loadShopifyScript()

        if (!isMounted || !window.ShopifyBuy?.UI) {
          return
        }

        const client = window.ShopifyBuy.buildClient({
          domain: shopifyBuyButton.domain,
          storefrontAccessToken: shopifyBuyButton.storefrontAccessToken
        })
        const ui = await window.ShopifyBuy.UI.onReady(client)

        if (!isMounted) {
          return
        }

        ui.createComponent("product", {
          id: shopifyBuyButton.productId,
          node: mountNode,
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          events: {
            addVariantToCart: trackAddToCart,
            afterInit: (component: {
              on?: (eventName: string, callback: () => void) => void
            }) => {
              component.on?.("addVariantToCart", trackAddToCart)
            }
          },
          options: {
            product: {
              layout: "vertical",
              width: "100%",
              contents: {
                img: false,
                imgWithCarousel: false,
                title: false,
                price: true,
                description: false,
                button: true,
                buttonWithQuantity: false,
                options: true
              },
              text: {
                button: "Buy now"
              },
              styles: {
                product: {
                  "max-width": "100%",
                  "margin-left": "0",
                  "margin-bottom": "0",
                  "text-align": "left"
                },
                price: {
                  "font-family": "Manrope, Arial, sans-serif",
                  "font-size": "20px",
                  "font-weight": "800",
                  color: "#f2c76a",
                  "margin-bottom": "14px"
                },
                compareAt: {
                  "font-family": "Manrope, Arial, sans-serif",
                  "font-size": "14px",
                  color: "#c9bfb5"
                },
                button: {
                  "font-family": "Manrope, Arial, sans-serif",
                  "font-size": "15px",
                  "font-weight": "800",
                  "letter-spacing": "0",
                  "padding-top": "17px",
                  "padding-bottom": "17px",
                  "border-radius": "999px",
                  color: "#09070f",
                  "background-color": "#f2c76a",
                  ":hover": {
                    color: "#09070f",
                    "background-color": "#dab35f"
                  },
                  ":focus": {
                    color: "#09070f",
                    "background-color": "#dab35f"
                  }
                }
              }
            },
            option: {
              styles: {
                label: {
                  "font-family": "Manrope, Arial, sans-serif",
                  "font-size": "13px",
                  "font-weight": "800",
                  color: "#ffffff",
                  "margin-bottom": "8px"
                },
                select: {
                  "font-family": "Manrope, Arial, sans-serif",
                  "font-size": "15px",
                  color: "#ffffff",
                  "background-color": "#120d1d",
                  border: "1px solid rgba(255,255,255,0.18)",
                  "border-radius": "14px",
                  "padding-left": "14px",
                  height: "50px"
                }
              }
            },
            cart: {
              popup: false,
              text: {
                total: "Subtotal",
                button: "Checkout"
              },
              styles: {
                cart: {
                  "background-color": "#09070f"
                },
                footer: {
                  "background-color": "#09070f"
                },
                title: {
                  color: "#ffffff"
                },
                header: {
                  color: "#ffffff"
                },
                lineItems: {
                  color: "#ffffff"
                },
                subtotalText: {
                  color: "#ffffff"
                },
                subtotal: {
                  color: "#f2c76a"
                },
                notice: {
                  color: "#e9ddd0"
                },
                currency: {
                  color: "#e9ddd0"
                },
                close: {
                  color: "#ffffff",
                  ":hover": {
                    color: "#f2c76a"
                  }
                },
                empty: {
                  color: "#ffffff"
                },
                button: {
                  "font-family": "Manrope, Arial, sans-serif",
                  "font-weight": "800",
                  color: "#09070f",
                  "background-color": "#f2c76a",
                  "border-radius": "999px",
                  ":hover": {
                    color: "#09070f",
                    "background-color": "#dab35f"
                  },
                  ":focus": {
                    color: "#09070f",
                    "background-color": "#dab35f"
                  }
                }
              }
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "#f2c76a",
                  "border-radius": "999px",
                  ":hover": {
                    "background-color": "#dab35f"
                  },
                  ":focus": {
                    "background-color": "#dab35f"
                  }
                },
                count: {
                  color: "#09070f",
                  ":hover": {
                    color: "#09070f"
                  }
                },
                iconPath: {
                  fill: "#09070f"
                }
              }
            },
            lineItem: {
              styles: {
                title: {
                  color: "#ffffff"
                },
                variantTitle: {
                  color: "#d8c9bb"
                },
                price: {
                  color: "#f2c76a"
                },
                quantity: {
                  color: "#ffffff"
                },
                quantityIncrement: {
                  color: "#ffffff",
                  "border-color": "rgba(255,255,255,0.32)"
                },
                quantityDecrement: {
                  color: "#ffffff",
                  "border-color": "rgba(255,255,255,0.32)"
                },
                quantityInput: {
                  color: "#ffffff",
                  "border-color": "rgba(255,255,255,0.32)"
                }
              }
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: true,
                buttonWithQuantity: false
              },
              text: {
                button: "Buy now"
              },
              styles: {
                button: {
                  color: "#09070f",
                  "background-color": "#f2c76a",
                  "border-radius": "999px",
                  ":hover": {
                    color: "#09070f",
                    "background-color": "#dab35f"
                  },
                  ":focus": {
                    color: "#09070f",
                    "background-color": "#dab35f"
                  }
                }
              }
            }
          }
        })

        if (isMounted) {
          setStatus("ready")
        }
      } catch {
        if (isMounted) {
          setStatus("error")
        }
      }
    }

    mountBuyButton()

    return () => {
      isMounted = false
      mountNode.innerHTML = ""
    }
  }, [onAddToCart])

  return (
    <div className={cn("relative", className)}>
      {status === "ready" ? (
        <div className="mb-4 flex items-center gap-3 rounded-[1rem] border border-gold/20 bg-gold/10 px-4 py-3 text-sm text-white/80">
          <CheckCircle2 className="h-4 w-4 text-gold" />
          Secure cart is ready. Choose your finish and buy now below.
        </div>
      ) : null}
      {status === "error" ? (
        <div className="mb-4 rounded-[1rem] border border-red-300/25 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-100">
          Checkout could not load. Refresh the page or try again in a moment.
        </div>
      ) : null}
      <div className="relative min-h-[170px]">
        {status === "loading" ? (
          <div className="pointer-events-none absolute inset-0 flex items-center">
            <div className="w-full rounded-[1.2rem] border border-white/10 bg-white/[0.045] px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">Buy now</p>
                  <p className="mt-1 text-xs leading-5 text-foreground/65">
                    Secure checkout is loading.
                  </p>
                </div>
                <div className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-[#09070f]">
                  Buy now
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div id={shopifyBuyButton.componentId} ref={nodeRef} className={cn("min-h-[170px]", status !== "ready" && "opacity-0")} />
      </div>
    </div>
  )
}
