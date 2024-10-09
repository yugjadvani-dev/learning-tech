export function Returnrefundpolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Return and Refund Policy</h1>
        <div className="prose text-muted-foreground">
          <p>
            At our camera store, we want you to be completely satisfied with your purchase. If for any reason you are
            not satisfied, you may return the item within 30 days of delivery for a full refund.
          </p>
          <p>
            Please review the details of our return and refund policy below. If you have any questions, please don't
            hesitate to contact our customer support team.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Return Window</h2>
            <div className="prose text-muted-foreground">
              <p>
                You may return any item within 30 days of delivery for a full refund. Items must be in their original,
                unused condition with all accessories and packaging included.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Refund Process</h2>
            <div className="prose text-muted-foreground">
              <p>
                Once we receive your returned item, we will process your refund within 5-7 business days. Refunds will
                be issued to the original payment method used for the purchase.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Exclusions</h2>
            <div className="prose text-muted-foreground">
              <p>
                The following items are not eligible for return or refund: custom-made or personalized items, opened
                software, and consumable products.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Conditions for Returns</h2>
            <div className="prose text-muted-foreground">
              <ul>
                <li>Items must be in their original, unused condition with all accessories and packaging included.</li>
                <li>Items must be returned within 30 days of the delivery date.</li>
                <li>Shipping costs are non-refundable, except in cases of defective or incorrect items.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
