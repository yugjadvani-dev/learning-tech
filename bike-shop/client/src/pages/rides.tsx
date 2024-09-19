
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"

export function Rides() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link to="/" className="flex items-center justify-center" >
          <BikeIcon className="h-6 w-6" />
          <span className="font-bold text-lg">Bike Shop</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Rides
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Bikes
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Services
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            About
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Rides</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our upcoming group rides and events. Sign up to join the fun!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-8 py-12 md:grid-cols-2 md:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Mountain Bike Ride</CardTitle>
                  <CardDescription>Join us for a challenging ride through the hills.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                      <span>June 10, 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-muted-foreground" />
                      <span>9:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                      <span>Trailhead Park, 123 Main St</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Sign Up</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Road Bike Ride</CardTitle>
                  <CardDescription>Enjoy a scenic ride through the countryside.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                      <span>July 15, 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-muted-foreground" />
                      <span>8:00 AM - 11:00 AM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                      <span>Lakeside Park, 456 Oak Rd</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Sign Up</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Community Groups</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with other cyclists in our local community groups.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-8 py-12 md:grid-cols-2 md:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Mountain Bike Club</CardTitle>
                  <CardDescription>Join our group of experienced mountain bikers.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <UsersIcon className="h-5 w-5 text-muted-foreground" />
                      <span>45 members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                      <span>Meets every Saturday</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                      <span>Trailhead Park, 123 Main St</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Join Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Road Bike Club</CardTitle>
                  <CardDescription>Connect with other road cyclists in the area.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <UsersIcon className="h-5 w-5 text-muted-foreground" />
                      <span>65 members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                      <span>Meets every Sunday</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                      <span>Lakeside Park, 456 Oak Rd</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Join Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ride Registration</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sign up for an upcoming ride or event.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-md items-start gap-8 py-12">
              <Card>
                <CardContent>
                  <form className="grid gap-4">
                    <Input type="text" placeholder="Name" className="w-full" />
                    <Input type="email" placeholder="Email" className="w-full" />
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a ride" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mountain">Mountain Bike Ride</SelectItem>
                        <SelectItem value="road">Road Bike Ride</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Additional information" className="w-full" />
                    <Button type="submit">Sign Up</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Gallery</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out photos from our past rides and events.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-8 py-12 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <img
                src="/rides-1.avif"
                width="550"
                height="310"
                alt="Ride Photo"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <img
                src="/rides-2.avif"
                width="550"
                height="310"
                alt="Ride Photo"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <img
                src="/rides-3.webp"
                width="550"
                height="310"
                alt="Ride Photo"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <img
                src="/rides-4.jpeg"
                width="550"
                height="310"
                alt="Ride Photo"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <img
                src="/rides-5.jpeg"
                width="550"
                height="310"
                alt="Ride Photo"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <img
                src="/rides-6.jpeg"
                width="550"
                height="310"
                alt="Ride Photo"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Bike Shop. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-xs hover:underline underline-offset-4" >
            Privacy Policy
          </Link>
          <Link to="/" className="text-xs hover:underline underline-offset-4" >
            Terms of Service
          </Link>
        </nav>
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


function MapPinIcon(props:any) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function UsersIcon(props:any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
