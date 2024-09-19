
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" >
            <BikeIcon className="h-8 w-8" />
            <span className="text-xl font-bold">Acme Bike Shop</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:underline" >
              Home
            </Link>
            <Link to="/" className="hover:underline" >
              Services
            </Link>
            <Link to="/" className="hover:underline" >
              About
            </Link>
            <Link to="/" className="hover:underline" >
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-6 md:text-4xl">Our Services</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Bike Repair</CardTitle>
                  <CardDescription>
                    Our experienced mechanics can handle any bike repair, from minor tune-ups to major overhauls.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Tune-up</span>
                      <span>$49.99</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Brake Adjustment</span>
                      <span>$29.99</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Wheel Truing</span>
                      <span>$39.99</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bike Maintenance</CardTitle>
                  <CardDescription>
                    Keep your bike running smoothly with our comprehensive maintenance services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Basic Maintenance</span>
                      <span>$59.99</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Full Service</span>
                      <span>$99.99</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Suspension Overhaul</span>
                      <span>$149.99</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Custom Bike Fittings</CardTitle>
                  <CardDescription>Get the perfect fit for your bike with our custom fitting services.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Bike Fit Analysis</span>
                      <span>$99.99</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Custom Stem/Handlebar</span>
                      <span>$149.99</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Saddle Fitting</span>
                      <span>$79.99</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-6 md:text-4xl">Book Your Service</h2>
            <form className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-2">
                <Label htmlFor="service">Service</Label>
                <Select id="service">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bike-repair">Bike Repair</SelectItem>
                    <SelectItem value="bike-maintenance">Bike Maintenance</SelectItem>
                    <SelectItem value="custom-fitting">Custom Bike Fitting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input type="date" id="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time">Time</Label>
                <Input type="time" id="time" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input type="tel" id="phone" />
              </div>
              <Button type="submit" className="col-span-2 lg:col-span-1">
                Book Appointment
              </Button>
            </form>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-6 md:text-4xl">What Our Customers Say</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/placeholder.svg"
                      width={48}
                      height={48}
                      alt="Customer Avatar"
                      className="rounded-full"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-muted-foreground text-sm">Acme Inc.</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The team at Acme Bike Shop provided excellent service and\n attention to detail. They were able to
                    get my bike back in\n perfect condition in no time."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/placeholder.svg"
                      width={48}
                      height={48}
                      alt="Customer Avatar"
                      className="rounded-full"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-medium">Jane Smith</div>
                      <div className="text-muted-foreground text-sm">Bike Enthusiast</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I've been using Acme Bike Shop for years, and they always\n provide top-notch service. Their custom
                    bike fittings have\n made a huge difference in my riding experience."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/placeholder.svg"
                      width={48}
                      height={48}
                      alt="Customer Avatar"
                      className="rounded-full"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div>
                      <div className="font-medium">Michael Johnson</div>
                      <div className="text-muted-foreground text-sm">Cyclist</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I've been taking my bikes to Acme Bike Shop for years, and\n they've always provided excellent
                    service. Their mechanics\n are knowledgeable and take the time to ensure my bikes are\n in top
                    condition."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <BikeIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Acme Bike Shop</span>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-4">
            <Link to="/" className="hover:underline" >
              Contact
            </Link>
            <Link to="/" className="hover:underline" >
              Privacy Policy
            </Link>
            <Link to="/" className="hover:underline" >
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
