# Shopify Meta Purchase Snippet

Paste this into Shopify's customer events/custom pixel area or the order status/thank-you page logic that has access to the final order value.

```html
<script>
  (function () {
    function firePurchase(event) {
      var order = event && event.data && event.data.checkout
      if (!order) return

      var total = Number(order.totalPrice && order.totalPrice.amount ? order.totalPrice.amount : order.total_price || 0)
      var currency = order.currencyCode || order.currency || "USD"

      if (typeof window.fbq === "function") {
        window.fbq("track", "Purchase", {
          value: total,
          currency: currency
        })
      }
    }

    if (window.Shopify && window.Shopify.analytics && window.Shopify.analytics.subscribe) {
      window.Shopify.analytics.subscribe("checkout_completed", firePurchase)
    }
  })();
</script>
```

Notes:

- `Purchase` must use the real final order total, not `0.00`, or Meta ROAS will be misleading.
- Keep the storefront `AddToCart` and `InitiateCheckout` events in the Next app.
- Put `Purchase` on the Shopify side so it only fires after a successful order.
