
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export function Train() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Book Your Train Tickets</h1>
            <p className="text-muted-foreground text-lg md:text-xl">Find the best deals and plan your journey.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label htmlFor="from" className="text-sm font-medium">
                From
              </label>
              <Input id="from" placeholder="Enter departure location" />
            </div>
            <div className="space-y-2">
              <label htmlFor="to" className="text-sm font-medium">
                To
              </label>
              <Input id="to" placeholder="Enter arrival location" />
            </div>
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">
                Date
              </label>
              <Input id="date" type="date" />
            </div>
            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-medium">
                Time
              </label>
              <Input id="time" type="time" />
            </div>
          </div>
          <Button size="lg" className="w-full">
            Search Trains
          </Button>
        </div>
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          <div className="bg-muted rounded-lg p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Booking Details</h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div>
                <p className="text-muted-foreground">From</p>
                <p className="font-medium">New York</p>
              </div>
              <div>
                <p className="text-muted-foreground">To</p>
                <p className="font-medium">Los Angeles</p>
              </div>
              <div>
                <p className="text-muted-foreground">Date</p>
                <p className="font-medium">June 15, 2024</p>
              </div>
              <div>
                <p className="text-muted-foreground">Time</p>
                <p className="font-medium">9:00 AM</p>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div>
                <p className="text-muted-foreground">Passengers</p>
                <p className="font-medium">2 Adults</p>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground">Total</p>
                <p className="font-medium text-2xl">$150.00</p>
              </div>
            </div>
            <Button size="lg" className="w-full mt-6">
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <div className="bg-muted rounded-lg p-6 md:p-8 lg:p-10">
            <CalendarCheckIcon className="w-8 h-8 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Real-Time Availability</h3>
            <p className="text-muted-foreground">
              Check train schedules and availability in real-time, ensuring you book the perfect trip.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-6 md:p-8 lg:p-10">
            <ReceiptIcon className="w-8 h-8 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Flexible Cancellation</h3>
            <p className="text-muted-foreground">
              Easily cancel or modify your bookings with our hassle-free cancellation policy.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-6 md:p-8 lg:p-10">
            <SmartphoneIcon className="w-8 h-8 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Mobile App Integration</h3>
            <p className="text-muted-foreground">
              Manage your bookings on-the-go with our mobile app, available for iOS and Android.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <div className="bg-muted rounded-lg p-6 md:p-8 lg:p-10">
            <TimerIcon className="w-8 h-8 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Time Savings</h3>
            <p className="text-muted-foreground">
              Streamline your travel planning with our efficient booking process, saving you valuable time.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-6 md:p-8 lg:p-10">
            <TicketIcon className="w-8 h-8 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Hassle-Free Travel</h3>
            <p className="text-muted-foreground">
              Enjoy a stress-free journey with our reliable booking service and customer support.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-6 md:p-8 lg:p-10">
            <DollarSignIcon className="w-8 h-8 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Competitive Pricing</h3>
            <p className="text-muted-foreground">
              Find the best deals and discounts on train tickets, ensuring you get the most value for your money.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <Card>
            <CardContent>
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="font-medium">John Doe</div>
                    <div className="text-muted-foreground text-sm">New York, NY</div>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                "I've used this booking service multiple times and have always\n had a great experience. The process is
                seamless, and the\n prices are unbeatable."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Sarah Miller</div>
                    <div className="text-muted-foreground text-sm">Los Angeles, CA</div>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                "I highly recommend this booking service. The customer support\n team is incredibly helpful, and I've
                always had a smooth\n experience."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Michael Johnson</div>
                    <div className="text-muted-foreground text-sm">Chicago, IL</div>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                "I've used this booking service for both business and personal\n travel, and I've always been impressed
                by the reliability and\n convenience."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Payment</h2>
        <Card>
          <CardContent>
            <form className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name on Card</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Select id="expiry-month">
                      <SelectTrigger>
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="01">01</SelectItem>
                        <SelectItem value="02">02</SelectItem>
                        <SelectItem value="03">03</SelectItem>
                        <SelectItem value="04">04</SelectItem>
                        <SelectItem value="05">05</SelectItem>
                        <SelectItem value="06">06</SelectItem>
                        <SelectItem value="07">07</SelectItem>
                        <SelectItem value="08">08</SelectItem>
                        <SelectItem value="09">09</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="11">11</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select id="expiry-year">
                      <SelectTrigger>
                        <SelectValue placeholder="YYYY" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
                        <SelectItem value="2029">2029</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input id="zip" placeholder="" />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function CalendarCheckIcon(props:any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
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


function ReceiptIcon(props:any) {
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
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  )
}


function SmartphoneIcon(props:any) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}


function StarIcon(props:any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function TicketIcon(props:any) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}


function TimerIcon(props:any) {
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
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}
