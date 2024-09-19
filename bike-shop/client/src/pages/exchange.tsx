
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"

export function Exchange() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 lg:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" >
            <BikeIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Bike Shop</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-accent transition-colors" >
              Bikes
            </Link>
            <Link to="/" className="hover:text-accent transition-colors" >
              Parts
            </Link>
            <Link to="/" className="hover:text-accent transition-colors" >
              Accessories
            </Link>
            <Link to="/" className="hover:text-accent transition-colors" >
              Services
            </Link>
            <Link to="/" className="hover:text-accent transition-colors" >
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-background text-foreground">
        <div className="container mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Exchange Policy</h1>
            <p className="text-muted-foreground mb-8">
              At Bike Shop, we understand that sometimes you may need to exchange an item. We've made the process as
              simple and straightforward as possible.
            </p>
            <div className="bg-muted p-6 md:p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Exchange Policy</h2>
              <div className="grid gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
                  <p className="text-muted-foreground">
                    You can exchange any item purchased from Bike Shop within 30 days of the original purchase date. The
                    item must be unused, in its original condition, and accompanied by a valid proof of purchase.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Exchange Process</h3>
                  <p className="text-muted-foreground">
                    To initiate an exchange, please fill out the exchange request form below. Once we receive your
                    request, we'll review it and get back to you within 2-3 business days. If approved, we'll provide
                    you with instructions on how to return the item and receive your exchange.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Timeframe</h3>
                  <p className="text-muted-foreground">
                    We aim to process all exchange requests within 7-10 business days of receiving the returned item.
                    Once the exchange is complete, we'll ship your new item to you free of charge.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Condition</h3>
                  <p className="text-muted-foreground">
                    The item you're exchanging must be in its original, unused condition, with all tags and packaging
                    intact. We reserve the right to refuse an exchange if the item is damaged, worn, or otherwise not in
                    its original state.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proof of Purchase</h3>
                  <p className="text-muted-foreground">
                    You'll need to provide a valid proof of purchase, such as a receipt or order confirmation, to
                    complete the exchange process.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-muted p-6 md:p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Non-Returnable Items</h2>
              <p className="text-muted-foreground mb-4">The following items are not eligible for exchange or refund:</p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Custom-ordered or made-to-order items</li>
                <li>Clearance or sale items</li>
                <li>Gift cards</li>
                <li>Consumable products (e.g., lubricants, cleaning supplies)</li>
              </ul>
            </div>
            <div className="bg-muted p-6 md:p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Refund and Store Credit</h2>
              <p className="text-muted-foreground mb-4">
                If an exchange is not possible or you prefer a refund, we offer the following options:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Refund to the original payment method (within 30 days of purchase)</li>
                <li>Store credit (valid for 1 year from the date of issue)</li>
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Exchange Request Form</h2>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="order-number">Order Number</Label>
                  <Input id="order-number" type="text" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="item-name">Item Name</Label>
                  <Input id="item-name" type="text" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reason">Reason for Exchange</Label>
                  <Textarea id="reason" required />
                </div>
                <Button type="submit" className="justify-self-end">
                  Submit Exchange Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BikeIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Bike Shop</span>
          </div>
          <nav className="flex flex-wrap items-center gap-4">
            <Link to="/" className="hover:text-accent transition-colors" >
              Contact
            </Link>
            <Link to="/" className="hover:text-accent transition-colors" >
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-accent transition-colors" >
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BikeIcon(props:any) {
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
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  )
}
