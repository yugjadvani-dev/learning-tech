import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Lenses() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              src="/48.webp"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Find the Perfect Lens
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Browse our selection of high-quality camera lenses for all your photography needs.
                </p>
              </div>
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
               
              >
                Shop Lenses
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="lenses" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <img
              src="/49.webp"
              width="400"
              height="300"
              alt="Lens 1"
              className="object-cover w-full h-64"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">24-70mm f/2.8 Lens</h3>
              <p className="text-sm text-muted-foreground">Focal Length: 24-70mm</p>
              <p className="text-sm text-muted-foreground">Aperture: f/2.8-22</p>
              <div className="mt-4">
                <Button>Buy Now</Button>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <img
              src="/55.avif"
              width="400"
              height="300"
              alt="Lens 2"
              className="object-cover w-full h-64"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">50mm f/1.8 Lens</h3>
              <p className="text-sm text-muted-foreground">Focal Length: 50mm</p>
              <p className="text-sm text-muted-foreground">Aperture: f/1.8-22</p>
              <div className="mt-4">
                <Button>Buy Now</Button>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <img
              src="/51.jpg"
              width="400"
              height="300"
              alt="Lens 3"
              className="object-cover w-full h-64"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">70-200mm f/2.8 Lens</h3>
              <p className="text-sm text-muted-foreground">Focal Length: 70-200mm</p>
              <p className="text-sm text-muted-foreground">Aperture: f/2.8-32</p>
              <div className="mt-4">
                <Button>Buy Now</Button>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <img
              src="/53.avif"
              width="400"
              height="300"
              alt="Lens 4"
              className="object-cover w-full h-64"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">85mm f/1.4 Lens</h3>
              <p className="text-sm text-muted-foreground">Focal Length: 85mm</p>
              <p className="text-sm text-muted-foreground">Aperture: f/1.4-16</p>
              <div className="mt-4">
                <Button>Buy Now</Button>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <img
              src="/54.webp"
              width="400"
              height="300"
              alt="Lens 5"
              className="object-cover w-full h-64"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">16-35mm f/4 Lens</h3>
              <p className="text-sm text-muted-foreground">Focal Length: 16-35mm</p>
              <p className="text-sm text-muted-foreground">Aperture: f/4-22</p>
              <div className="mt-4">
                <Button>Buy Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
