
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogClose } from "@/components/ui/dialog"

export function Paymentinformation() {
  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8">
      <div className="grid gap-8">
        <div className="grid gap-4">
          <div className="bg-muted rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">Ticket Summary</div>
              <div className="text-muted-foreground">
                <span className="font-medium">2</span> Tickets
              </div>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <div>Movie</div>
                <div className="font-medium">Avengers: Endgame</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Showtime</div>
                <div className="font-medium">7:00 PM</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Theater</div>
                <div className="font-medium">AMC Theatres</div>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <div>Total</div>
              <div className="text-2xl font-bold">$30.00</div>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <div className="text-lg font-medium">Payment Options</div>
            <Separator className="my-4" />
            <div className="grid gap-4">
              <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                <div>
                  <RadioGroupItem value="card" id="card" className="peer sr-only" />
                  <Label
                    htmlFor="card"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <CreditCardIcon className="mb-3 h-6 w-6" />
                    Card
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="upi" id="upi" className="peer sr-only" />
                  <Label
                    htmlFor="upi"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <WalletCardsIcon className="mb-3 h-6 w-6" />
                    UPI
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="net-banking" id="net-banking" className="peer sr-only" />
                  <Label
                    htmlFor="net-banking"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <BanknoteIcon className="mb-3 h-6 w-6" />
                    Net Banking
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <div className="text-lg font-medium">Promo Code</div>
            <Separator className="my-4" />
            <div className="flex gap-2">
              <Input type="text" placeholder="Enter promo code" className="flex-1" />
              <Button variant="outline">Apply</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button size="lg" className="w-full sm:w-auto">
            Pay Now
          </Button>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="hidden">
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <CircleCheckIcon className="size-12 text-green-500" />
            <p className="text-lg font-medium">Payment Successful!</p>
            <p className="text-muted-foreground">
              Your booking ID is <span className="font-medium">OE31b70H</span>
            </p>
          </div>
          <DialogFooter>
            <div>
              <Button type="button">OK</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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


function CircleCheckIcon(props:any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
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