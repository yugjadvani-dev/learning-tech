
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Link } from "react-router-dom"

export function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center" >
          <CameraIcon className="h-6 w-6" />
          <span className="sr-only">Capture Camera</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Cameras
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Lenses
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Accessories
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Capture the Moment with Passion
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    At Capture Camera, we are passionate about empowering photographers to capture the world around them
                    with stunning clarity and precision. Our mission is to provide high-quality cameras, lenses, and
                    accessories that inspire creativity and help you tell your story.
                  </p>
                </div>
              </div>
              <img
                src="/about.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Capturing the Moments that Matter
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Capture Camera was founded in 2010 by a team of passionate photographers who wanted to create a brand
                  that would empower people to capture the world around them. We believe that every moment is worth
                  preserving, and we strive to provide the tools and resources that help our customers do just that.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Values</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Commitment to Quality and Service
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Capture Camera, we are committed to providing our customers with the highest quality products and
                  exceptional customer service. We carefully curate our selection of cameras, lenses, and accessories to
                  ensure that they meet the needs of photographers of all skill levels, and we stand behind our products
                  with a comprehensive warranty and dedicated support team.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet the Capture Camera Team
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of passionate photographers and camera experts are dedicated to helping our customers find
                  the perfect gear for their needs. From our knowledgeable sales staff to our skilled technicians, we
                  are committed to providing a personalized and exceptional experience for every customer who walks
                  through our doors.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">Co-Founder &amp; CEO</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JR</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Jane Roe</h3>
                    <p className="text-sm text-muted-foreground">Co-Founder &amp; COO</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Sarah Miller</h3>
                    <p className="text-sm text-muted-foreground">Head of Product</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>TW</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Tom Wilson</h3>
                    <p className="text-sm text-muted-foreground">Lead Technician</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Customer Service</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Exceptional Support, Every Time
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Capture Camera, we believe that exceptional customer service is the foundation of our business. Our
                  dedicated support team is available to assist you with any questions or concerns, and we offer a
                  comprehensive warranty on all of our products to ensure your complete satisfaction.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Quality Assurance</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Commitment to Quality</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We take great pride in the quality of our products, and we work tirelessly to ensure that every
                  camera, lens, and accessory we sell meets the highest standards of craftsmanship and performance. Our
                  team of expert technicians carefully inspects and tests each item before it leaves our warehouse, so
                  you can trust that you're getting the best possible gear for your photography needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Capture Camera. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-xs hover:underline underline-offset-4" >
            Terms of Service
          </Link>
          <Link to="/" className="text-xs hover:underline underline-offset-4" >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CameraIcon(props:any) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}
