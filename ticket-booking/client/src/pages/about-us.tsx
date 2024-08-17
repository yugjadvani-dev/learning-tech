
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                  Discover the Joy of Hassle-Free Ticket Booking
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Ticket Bliss, we're passionate about making the ticket booking process seamless and enjoyable. Our
                  mission is to revolutionize the way people access events, concerts, and experiences by providing a
                  user-friendly platform that simplifies the entire journey.
                </p>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="About Us"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Ticket Bliss Crew</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of dedicated professionals is the driving force behind Ticket Bliss. With a diverse range of
                  expertise and a shared passion for delivering exceptional experiences, we strive to make your ticket
                  booking journey seamless and enjoyable.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-muted-foreground">CEO</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-bold">Jane Appleseed</h3>
                  <p className="text-muted-foreground">CTO</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-bold">Sarah Mayer</h3>
                  <p className="text-muted-foreground">Head of Product</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our History</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A Legacy of Exceptional Service</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ticket Bliss was founded in 2015 with the goal of revolutionizing the ticket booking industry. Over
                  the years, we've grown to become a trusted platform for event-goers worldwide, offering a seamless and
                  enjoyable experience every step of the way.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="History"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">2015 - Founding</h3>
                      <p className="text-muted-foreground">
                        Ticket Bliss was founded with the mission to simplify the ticket booking process.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">2018 - Expansion</h3>
                      <p className="text-muted-foreground">
                        We expanded our platform to serve a wider range of events and venues, solidifying our position
                        as a leading ticket booking service.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">2021 - Innovation</h3>
                      <p className="text-muted-foreground">
                        Introduced cutting-edge features and technologies to enhance the user experience, setting new
                        industry standards.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Event Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Ticket Bliss, we offer a comprehensive suite of services to cater to all your ticket booking needs.
                  From seamless event discovery to secure and convenient payment options, we're here to make your event
                  experience truly memorable.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <TicketIcon className="w-12 h-12 text-primary" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Event Ticketing</h3>
                  <p className="text-muted-foreground">
                    Discover and purchase tickets for a wide range of events, from concerts and festivals to sports and
                    theater performances.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <CalendarIcon className="w-12 h-12 text-primary" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Event Calendar</h3>
                  <p className="text-muted-foreground">
                    Stay up-to-date with the latest events and never miss a beat with our comprehensive event calendar.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <ReceiptIcon className="w-12 h-12 text-primary" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Secure Payments</h3>
                  <p className="text-muted-foreground">
                    Enjoy a seamless and secure payment experience with our trusted payment processing solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
