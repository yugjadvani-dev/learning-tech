
import { Label } from "@/components/ui/label"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CartesianGrid, XAxis, Area, AreaChart, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { Link } from "react-router-dom";

export function Flight() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <PlaneIcon className="w-6 h-6" />
            <span className="font-bold text-xl">Acme Airlines</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/" className="hover:underline">
              Flights
            </Link>
            <Link to="/" className="hover:underline">
              Hotels
            </Link>
            <Link to="/" className="hover:underline">
              Deals
            </Link>
            <Link to="/" className="hover:underline">
              Rewards
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">Route Selection</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="departure">Departure</Label>
                <div className="w-full" />
              </div>
              <div>
                <Label htmlFor="arrival">Arrival</Label>
                <div className="w-full" />
              </div>
            </div>
            <div className="mt-4">
              <AreachartChart className="w-full aspect-[4/3]" />
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="departure-date">Departure Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full flex items-center justify-between">
                      <span>Select date</span>
                      <CalendarIcon className="w-5 h-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 max-w-[276px]">
                    <Calendar />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="return-date">Return Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full flex items-center justify-between">
                      <span>Select date</span>
                      <CalendarIcon className="w-5 h-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 max-w-[276px]">
                    <Calendar />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="passengers">Passengers</Label>
                <Select defaultValue="1">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="1 passenger" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 passenger</SelectItem>
                    <SelectItem value="2">2 passengers</SelectItem>
                    <SelectItem value="3">3 passengers</SelectItem>
                    <SelectItem value="4">4 passengers</SelectItem>
                    <SelectItem value="5">5 passengers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Flight Options</h3>
              <Card>
                <CardContent className="grid grid-cols-[1fr_auto] gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <PlaneTakeoffIcon className="w-6 h-6" />
                      <span className="font-bold">7:00 AM</span>
                    </div>
                    <div className="text-muted-foreground">New York (JFK)</div>
                    <div className="flex items-center gap-2">
                      <PlaneLandingIcon className="w-6 h-6" />
                      <span className="font-bold">10:30 AM</span>
                    </div>
                    <div className="text-muted-foreground">Los Angeles (LAX)</div>
                    <div className="text-muted-foreground">Duration: 5h 30m</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">$399</div>
                    <Button size="lg">Select</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">Payment</h2>
            <Card>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" type="text" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div>
                    <Label htmlFor="expiry-date">Expiry Date</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                            <SelectItem key={month} value={month.toString()}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="YY" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) =>
                            (new Date().getFullYear() + i).toString().slice(-2),
                          ).map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" type="text" placeholder="123" />
                </div>
                <Button size="lg" className="w-full">
                  Pay Now
                </Button>
              </CardContent>
            </Card>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Location & Time</h2>
            <Card>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <PlaneTakeoffIcon className="w-6 h-6" />
                    <span className="font-bold">New York (JFK)</span>
                  </div>
                  <div className="text-muted-foreground">Departure</div>
                  <div className="text-2xl font-bold">7:00 AM</div>
                  <div className="text-muted-foreground">June 1, 2023</div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <PlaneLandingIcon className="w-6 h-6" />
                    <span className="font-bold">Los Angeles (LAX)</span>
                  </div>
                  <div className="text-muted-foreground">Arrival</div>
                  <div className="text-2xl font-bold">10:30 AM</div>
                  <div className="text-muted-foreground">June 1, 2023</div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">Special Features</h2>
            <Card>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <MenuIcon className="w-6 h-6" />
                  <div>
                    <div className="font-bold">In-Flight Meals</div>
                    <div className="text-muted-foreground">Enjoy a complimentary meal on your flight.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <ShoppingBagIcon className="w-6 h-6" />
                  <div>
                    <div className="font-bold">Baggage Allowance</div>
                    <div className="text-muted-foreground">Check in one bag for free.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Customer Benefits</h2>
            <Card>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <FlagIcon className="w-6 h-6" />
                  <div>
                    <div className="font-bold">Loyalty Program</div>
                    <div className="text-muted-foreground">Earn points with every flight and redeem for rewards.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <ShieldIcon className="w-6 h-6" />
                  <div>
                    <div className="font-bold">Travel Insurance</div>
                    <div className="text-muted-foreground">
                      Protect your trip with our comprehensive travel insurance.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            <Card>
              <CardContent className="grid gap-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-bold">John Doe</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                    <div className="text-muted-foreground">"Great flight experience, on-time and comfortable."</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-bold">Sarah Miller</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      "Excellent service, would definitely fly with them again."
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-sm">&copy; 2024 Acme Airlines. All rights reserved.</div>
          <nav className="flex items-center gap-4">
            <Link to="/" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:underline">
              Terms of Service
            </Link>
            <Link to="/" className="hover:underline">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function AreachartChart(props:any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <AreaChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
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


function FlagIcon(props:any) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function LinechartChart(props:any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}


function MenuIcon(props:any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlaneIcon(props:any) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}


function PlaneLandingIcon(props:any) {
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
      <path d="M2 22h20" />
      <path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" />
    </svg>
  )
}


function PlaneTakeoffIcon(props:any) {
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
      <path d="M2 22h20" />
      <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
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


function ShoppingBagIcon(props:any) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
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
