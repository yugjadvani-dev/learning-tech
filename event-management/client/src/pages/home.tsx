import { Link } from "react-router-dom"

export function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Event"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Annual Tech Conference
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join us for a day of inspiring talks, networking, and exploring the latest trends in the tech
                    industry.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    to={'/'}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Get Tickets
                  </Link>
                  <Link
                    to={'/'}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Date</h3>
                <p className="text-muted-foreground">June 15, 2023 - June 16, 2023</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Location</h3>
                <p className="text-muted-foreground">Hilton Hotel, 123 Main St, Anytown USA</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Schedule</h3>
                <p className="text-muted-foreground">9:00 AM - 5:00 PM daily</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Speakers</h3>
                <p className="text-muted-foreground">20+ industry experts and thought leaders</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Workshops</h3>
                <p className="text-muted-foreground">Hands-on workshops on the latest technologies</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Networking</h3>
                <p className="text-muted-foreground">Connect with industry peers and potential partners</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Expo</h3>
                <p className="text-muted-foreground">Explore the latest products and services from top vendors</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Afterparty</h3>
                <p className="text-muted-foreground">Unwind and continue networking at our evening social event</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


