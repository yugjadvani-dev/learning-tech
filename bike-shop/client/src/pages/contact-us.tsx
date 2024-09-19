
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function ContactUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link to="/" className="flex items-center justify-center" >
          <BikeIcon className="h-6 w-6" />
          <span className="sr-only">Bike Shop</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Home
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Bikes
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Accessories
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Services
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team for any inquiries or assistance.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <LocateIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground">123 Bike Lane, Anytown USA</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground">(555) 555-5555</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground">info@bikeshop.com</p>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Enter a subject" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                    </div>
                    <Button type="submit">Submit</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link to="/" >
              Our Story
            </Link>
            <Link to="/" >
              Team
            </Link>
            <Link to="/" >
              Careers
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link to="/" >
              Bikes
            </Link>
            <Link to="/" >
              Accessories
            </Link>
            <Link to="/" >
              Parts
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Services</h3>
            <Link to="/" >
              Repair
            </Link>
            <Link to="/" >
              Custom Builds
            </Link>
            <Link to="/" >
              Rentals
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link to="/" >
              Privacy Policy
            </Link>
            <Link to="/" >
              Terms of Service
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link to="/" >
              Phone
            </Link>
            <Link to="/" >
              Email
            </Link>
            <Link to="/" >
              Location
            </Link>
          </div>
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


function MailIcon(props:any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props:any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
