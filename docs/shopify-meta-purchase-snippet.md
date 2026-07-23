# Shopify Meta Purchase Snippet

Use this in Shopify admin under **Settings > Customer events > Add custom pixel**. This is the only place `Purchase` should fire, because Shopify has the completed checkout and final paid total there.

```js
const META_PIXEL_ID = "1681765013039977"

!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  }
  if (!f._fbq) f._fbq = n
  n.push = n
  n.loaded = true
  n.version = "2.0"
  n.queue = []
  t = b.createElement(e)
  t.async = true
  t.src = v
  s = b.getElementsByTagName(e)[0]
  s.parentNode.insertBefore(t, s)
})(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")

fbq("init", META_PIXEL_ID)

function moneyAmount(money) {
  const amount = Number(money && money.amount)
  return Number.isFinite(amount) ? amount : 0
}

function lineItemId(item) {
  return (
    item?.variant?.sku ||
    item?.variant?.id ||
    item?.merchandise?.sku ||
    item?.merchandise?.id ||
    item?.id ||
    "eternal-hope-necklace"
  )
}

function lineItemTitle(item) {
  return (
    item?.variant?.title ||
    item?.merchandise?.title ||
    item?.title ||
    "Eternal Hope Necklace"
  )
}

analytics.subscribe("checkout_completed", function (event) {
  const checkout = event && event.data && event.data.checkout
  if (!checkout) return

  const lineItems = Array.isArray(checkout.lineItems) ? checkout.lineItems : []
  const contents = lineItems.map(function (item) {
    const quantity = Number(item.quantity || 1)
    const itemPrice =
      moneyAmount(item.finalLinePrice) ||
      moneyAmount(item.cost && item.cost.totalAmount) ||
      moneyAmount(item.variant && item.variant.price) ||
      moneyAmount(item.merchandise && item.merchandise.price)

    return {
      id: lineItemId(item),
      quantity: Number.isFinite(quantity) ? quantity : 1,
      item_price: itemPrice
    }
  })

  const value = moneyAmount(checkout.totalPrice)
  const currency = checkout.currencyCode || checkout.totalPrice?.currencyCode || "USD"
  const itemCount = contents.reduce(function (total, item) {
    return total + item.quantity
  }, 0)

  fbq("track", "Purchase", {
    value: value,
    currency: currency,
    content_type: "product",
    content_ids: contents.map(function (item) {
      return item.id
    }),
    content_name: lineItems.map(lineItemTitle).join(", ") || "Eternal Hope Necklace",
    contents: contents,
    num_items: itemCount || 1
  })
})
```

Storefront event prices:

| Finish | Meta value | Currency | Content ID |
|---|---:|---|---|
| 14K White Gold | 59.99 | USD | `eternal-hope-necklace-white-gold` |
| 18K Yellow Gold | 69.99 | USD | `eternal-hope-necklace-yellow-gold` |

Notes:

- Keep `PageView`, `AddToCart`, and `InitiateCheckout` in the Next storefront.
- Do not fire `Purchase` from the Next storefront or on the Shopify buy button click. That would count unpaid carts as revenue.
- `Purchase` should use Shopify's completed checkout `totalPrice.amount`, not `0.00`, so Meta ROAS reflects actual revenue.
