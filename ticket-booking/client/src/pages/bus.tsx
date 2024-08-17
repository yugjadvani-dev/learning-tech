
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom";

export function Bus() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BusIcon className="h-6 w-6" />
            <span className="text-xl font-bold">Bus Booking</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/" className="hover:underline">
              Destinations
            </Link>
            <Link to="/" className="hover:underline">
              About
            </Link>
            <Link to="/" className="hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold">Find Your Next Bus Adventure</h1>
                <p className="text-muted-foreground text-lg">Book your bus tickets with ease and confidence.</p>
                <form className="grid gap-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="from" className="text-sm font-medium">
                        From
                      </Label>
                      <Select id="from">
                        <SelectTrigger>
                          <SelectValue placeholder="Select departure location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="san-francisco">San Francisco</SelectItem>
                          <SelectItem value="los-angeles">Los Angeles</SelectItem>
                          <SelectItem value="seattle">Seattle</SelectItem>
                          <SelectItem value="chicago">Chicago</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="to" className="text-sm font-medium">
                        To
                      </Label>
                      <Select id="to">
                        <SelectTrigger>
                          <SelectValue placeholder="Select arrival location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="san-francisco">San Francisco</SelectItem>
                          <SelectItem value="los-angeles">Los Angeles</SelectItem>
                          <SelectItem value="seattle">Seattle</SelectItem>
                          <SelectItem value="chicago">Chicago</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-sm font-medium">
                        Date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full flex items-center justify-between">
                            <span>Select date</span>
                            <CalendarIcon className="h-5 w-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                          <Calendar />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-sm font-medium">
                        Time
                      </Label>
                      <Select id="time">
                        <SelectTrigger>
                          <SelectValue placeholder="Select departure time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8:00am">8:00 AM</SelectItem>
                          <SelectItem value="10:00am">10:00 AM</SelectItem>
                          <SelectItem value="12:00pm">12:00 PM</SelectItem>
                          <SelectItem value="2:00pm">2:00 PM</SelectItem>
                          <SelectItem value="4:00pm">4:00 PM</SelectItem>
                          <SelectItem value="6:00pm">6:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button size="lg">Search Buses</Button>
                </form>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Bus Booking"
                  width={500}
                  height={500}
                  className="max-w-full"
                  style={{ aspectRatio: "500/500", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Booking Details</h2>
                <form className="grid gap-4">
                  <div>
                    <Label htmlFor="passengers" className="text-sm font-medium">
                      Passengers
                    </Label>
                    <Select id="passengers">
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of passengers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Passenger</SelectItem>
                        <SelectItem value="2">2 Passengers</SelectItem>
                        <SelectItem value="3">3 Passengers</SelectItem>
                        <SelectItem value="4">4 Passengers</SelectItem>
                        <SelectItem value="5">5 Passengers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="seats" className="text-sm font-medium">
                      Seats
                    </Label>
                    <div className="grid grid-cols-4 gap-2">
                      <Button variant="outline" size="sm">
                        A1
                      </Button>
                      <Button variant="outline" size="sm">
                        A2
                      </Button>
                      <Button variant="outline" size="sm">
                        A3
                      </Button>
                      <Button variant="outline" size="sm">
                        A4
                      </Button>
                      <Button variant="outline" size="sm">
                        B1
                      </Button>
                      <Button variant="outline" size="sm">
                        B2
                      </Button>
                      <Button variant="outline" size="sm">
                        B3
                      </Button>
                      <Button variant="outline" size="sm">
                        B4
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="total" className="text-sm font-medium">
                      Total
                    </Label>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">$120.00</span>
                      <Button size="lg">Proceed to Payment</Button>
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Location and Time</h2>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <LocateIcon className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">Pickup Location</div>
                      <div className="text-muted-foreground">123 Main St, San Francisco, CA 94101</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <LocateIcon className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">Drop-off Location</div>
                      <div className="text-muted-foreground">456 Oak St, Los Angeles, CA 90001</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <ClockIcon className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">Travel Time</div>
                      <div className="text-muted-foreground">5 hours 30 minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Us?</h2>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <TicketIcon className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">Easy Booking</div>
                      <p className="text-muted-foreground">Book your bus tickets with just a few clicks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldIcon className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">Secure Payments</div>
                      <p className="text-muted-foreground">Your payment information is safe with us.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <SmileIcon className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium">Reliable Service</div>
                      <p className="text-muted-foreground">Enjoy a comfortable and punctual bus ride.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Customers Say</h2>
                <div className="grid gap-4">
                  <Card>
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <Avatar className="border w-12 h-12">
                          <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">John Doe</div>
                          <div className="text-muted-foreground text-sm">Satisfied Customer</div>
                        </div>
                      </div>
                      <p className="mt-4">
                        "I had a great experience booking my bus tickets with this\n website. The process was easy and
                        the customer service was\n excellent."
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <Avatar className="border w-12 h-12">
                          <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Jane Smith</div>
                          <div className="text-muted-foreground text-sm">Frequent Traveler</div>
                        </div>
                      </div>
                      <p className="mt-4">
                        "I've been using this bus booking website for years and\n I'm always impressed by the
                        reliability and convenience\n of their service."
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Secure Payment</h2>
                <form className="grid gap-4">
                  <div>
                    <Label htmlFor="card-number" className="text-sm font-medium">
                      Card Number
                    </Label>
                    <Input id="card-number" type="text" placeholder="Enter your card number" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry" className="text-sm font-medium">
                        Expiry Date
                      </Label>
                      <div className="flex items-center gap-2">
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
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2026">2026</SelectItem>
                            <SelectItem value="2027">2027</SelectItem>
                            <SelectItem value="2028">2028</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BusIcon(props:any) {
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
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  )
}


function CalendarIcon(props:any) {
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
    </svg>
  )
}


function ClockIcon(props:any) {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function LocateIcon(props:any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function ShieldIcon(props:any) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function SmileIcon(props:any) {
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
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
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
