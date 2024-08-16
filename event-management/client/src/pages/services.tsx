import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom"

export function Services() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Elevate Your Events
            </h1>
            <p className="mt-6 text-lg text-primary-foreground">
              Our event management services will take your events to new heights.
            </p>
            <div className="mt-10">
              <Link
                to={'/'}
                className="inline-flex items-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">Our Services</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group rounded-lg bg-background p-6 shadow-sm transition-all hover:bg-muted hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CalendarIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">Event Planning</h3>
              <p className="mt-2 text-muted-foreground">
                From concept to execution, we handle every aspect of your event.
              </p>
            </div>
            <div className="group rounded-lg bg-background p-6 shadow-sm transition-all hover:bg-muted hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MicIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">Event Production</h3>
              <p className="mt-2 text-muted-foreground">
                Bring your vision to life with our expert production services.
              </p>
            </div>
            <div className="group rounded-lg bg-background p-6 shadow-sm transition-all hover:bg-muted hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <TicketIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">Event Ticketing</h3>
              <p className="mt-2 text-muted-foreground">
                Streamline your event ticketing with our user-friendly platform.
              </p>
            </div>
            <div className="group rounded-lg bg-background p-6 shadow-sm transition-all hover:bg-muted hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MegaphoneIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">Event Marketing</h3>
              <p className="mt-2 text-muted-foreground">
                Promote your event and reach your target audience effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">What Our Clients Say</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <blockquote className="rounded-lg bg-background p-6 shadow-sm">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">CEO, Acme Inc.</div>
                </div>
              </div>
              <div className="mt-4 text-muted-foreground">
                "The event management team at this company is truly exceptional. They\n handled every detail with
                professionalism and creativity, making our\n event a huge success."
              </div>
            </blockquote>
            <blockquote className="rounded-lg bg-background p-6 shadow-sm">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <div className="text-sm font-medium">Jane Smith</div>
                  <div className="text-sm text-muted-foreground">Marketing Manager, Globex Inc.</div>
                </div>
              </div>
              <div className="mt-4 text-muted-foreground">
                "I've worked with several event management companies, but this one\n stands out. They truly understand
                our brand and always deliver\n exceptional results."
              </div>
            </blockquote>
            <blockquote className="rounded-lg bg-background p-6 shadow-sm">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <div className="text-sm font-medium">Michael Johnson</div>
                  <div className="text-sm text-muted-foreground">Event Coordinator, Stark Industries</div>
                </div>
              </div>
              <div className="mt-4 text-muted-foreground">
                "This event management company has exceeded our expectations time and\n time again. Their attention to
                detail and commitment to excellence\n is unparalleled."
              </div>
            </blockquote>
          </div>
        </div>
      </section>
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


function MegaphoneIcon(props:any) {
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
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  )
}


function MicIcon(props:any) {
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
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
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
