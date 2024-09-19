
import { ResponsiveLine } from "@nivo/line"
import { Link } from "react-router-dom"

export function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link to="/" className="flex items-center justify-center">
          <BikeIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Bike Oasis</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            Shop
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to Bike Oasis</h1>
                <p className="text-muted-foreground md:text-xl">
                  Bike Oasis is a local bike shop that has been serving the community for over 20 years. We are
                  passionate about riding and dedicated to providing our customers with the best products and services.
                </p>
                <p className="text-muted-foreground md:text-xl">
                  Our mission is to inspire and empower people to embrace riding as a sustainable and healthy way of
                  life. We believe that riding can transform communities and contribute to a more
                  environmentally-friendly future.
                </p>
              </div>
              <img
                src="/bike.jpg"
                width="600"
                height="400"
                alt="Bike Oasis"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Team</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of passionate cyclists and bike enthusiasts are dedicated to providing you with the best
                possible experience.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/men-1.jpg"
                  width="200"
                  height="200"
                  alt="John Doe"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-muted-foreground">Owner</p>
                  <p className="text-sm text-muted-foreground">
                    John has been riding for over 15 years and is passionate about sharing his love for the sport with
                    the community.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/men-2.jpg"
                  width="200"
                  height="200"
                  alt="Jane Smith"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-muted-foreground">Manager</p>
                  <p className="text-sm text-muted-foreground">
                    Jane has been working at Bike Oasis for 10 years and loves helping customers find the perfect bike
                    for their needs.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/men-3.jpg"
                  width="200"
                  height="200"
                  alt="Michael Johnson"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-muted-foreground">Mechanic</p>
                  <p className="text-sm text-muted-foreground">
                    Michael is our expert bike mechanic with over 8 years of experience. He takes pride in keeping our
                    customers' bikes in top shape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values and Vision</h2>
                <p className="text-muted-foreground md:text-xl">
                  At Bike Oasis, we believe in promoting a sustainable and healthy lifestyle through riding. We are
                  committed to providing our customers with high-quality products and exceptional service.
                </p>
                <p className="text-muted-foreground md:text-xl">
                  Our vision is to become the go-to destination for riding enthusiasts in our community. We aim to
                  expand our services, offer more educational programs, and partner with local organizations to
                  encourage more people to embrace riding.
                </p>
              </div>
              <img
                src="/values.jpg"
                width="600"
                height="400"
                alt="Bike Oasis Values"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visit Us</h2>
                <p className="text-muted-foreground md:text-xl">
                  Bike Oasis is located in the heart of the city, just a short walk from the main square. We are open 7
                  days a week, so feel free to stop by anytime.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground">123 Main Street, Anytown USA</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9am - 6pm
                      <br />
                      Sunday: 11am - 4pm
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground">(555) 555-5555</p>
                  </div>
                </div>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl">
                <LineChart className="w-full h-full" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted text-muted-foreground">
        <p className="text-xs">&copy; 2024 Bike Oasis. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link to="/" className="text-xs hover:underline underline-offset-4">
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


function LineChart(props:any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
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
