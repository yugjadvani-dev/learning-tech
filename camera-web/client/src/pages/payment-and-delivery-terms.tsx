import { Link } from "lucide-react"

export function Paymentanddelivery() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Payment & Delivery Terms</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Welcome to our payment and delivery terms page. Here you'll find all the information you need about our
          accepted payment methods, shipping options, return policy, and other important terms and conditions.
        </p>
        <div className="bg-background rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <CreditCardIcon className="h-6 w-6 text-primary" />
              <span>Credit/Debit Card</span>
            </div>
            <div className="flex items-center gap-3">
              <WalletCardsIcon className="h-6 w-6 text-primary" />
              <span>PayPal</span>
            </div>
            <div className="flex items-center gap-3">
              <DollarSignIcon className="h-6 w-6 text-primary" />
              <span>Apple Pay</span>
            </div>
            <div className="flex items-center gap-3">
              <BanknoteIcon className="h-6 w-6 text-primary" />
              <span>Bank Transfer</span>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Shipping & Delivery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Shipping Options</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Standard Shipping (3-5 business days)</li>
                <li>Express Shipping (1-2 business days)</li>
                <li>International Shipping (5-10 business days)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Delivery Timeline</h3>
              <p className="text-muted-foreground">
                We strive to process and ship all orders within 1-2 business days. Delivery times may vary depending on
                your location and the shipping method you choose.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Returns & Refunds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Return Policy</h3>
              <p className="text-muted-foreground">
                You can return any item within 30 days of delivery for a full refund. Items must be in their original
                condition and packaging.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Refund Process</h3>
              <p className="text-muted-foreground">
                Once we receive your return, we will process your refund within 5-7 business days. Refunds will be
                issued to the original payment method.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Additional Terms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Warranty</h3>
              <p className="text-muted-foreground">
                All our products come with a 1-year manufacturer's warranty. Please contact us if you have any issues
                with your purchase.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Privacy Policy</h3>
              <p className="text-muted-foreground">
                We take your privacy seriously. Please review our{" "}
                <Link to="#" className="text-blue-600 underline">
                  Privacy Policy
                </Link>{" "}
                for details on how we collect, use, and protect your personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BanknoteIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
}


function CreditCardIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function DollarSignIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function WalletCardsIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  )
}
