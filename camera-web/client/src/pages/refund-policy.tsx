import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Refundpolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Refund Policy</h1>
        </div>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="grid gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Our Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                At our camera store, we stand behind the quality of our products and want our customers to be completely
                satisfied with their purchases. If for any reason you are not satisfied with your purchase, you may
                return the item within 30 days of delivery for a full refund.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To request a refund, please fill out the form below with the required information. Once we receive your
                request, we will process it within 5-7 business days. Please note that refunds will be issued to the
                original payment method used for the purchase.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Request a Refund</CardTitle>
                <CardDescription>Fill out the form below to submit your refund request.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="order-number">Order Number</Label>
                    <Input id="order-number" placeholder="Enter your order number" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reason">Reason for Refund</Label>
                    <Textarea id="reason" rows={3} placeholder="Explain why you are requesting a refund" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="proof">Proof of Purchase</Label>
                    <Input id="proof" type="file" />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Submit Refund Request</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
