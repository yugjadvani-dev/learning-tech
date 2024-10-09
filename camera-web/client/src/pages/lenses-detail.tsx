import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Lensesdetail() {
  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/37.webp"
                alt="Camera Lens"
                width={800}
                height={600}
                className="rounded-lg w-full aspect-video object-cover"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">Canon EF 24-70mm f/2.8L II USM</h1>
              <p className="text-muted-foreground">
                The ultimate standard zoom lens, delivering exceptional performance and versatility.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Lens Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Focal Length</h3>
                  <p>24-70mm</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Aperture</h3>
                  <p>f/2.8 - f/22</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Image Stabilization</h3>
                  <p>Yes</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Filter Size</h3>
                  <p>82mm</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Minimum Focus Distance</h3>
                  <p>38cm</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Weight</h3>
                  <p>805g</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Gallery</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src="/38.jpg"
                      alt="Camera Lens"
                      width={800}
                      height={600}
                      className="rounded-lg w-full aspect-video object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="/45.jpg"
                      alt="Camera Lens"
                      width={800}
                      height={600}
                      className="rounded-lg w-full aspect-video object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="/46.jpg"
                      alt="Camera Lens"
                      width={800}
                      height={600}
                      className="rounded-lg w-full aspect-video object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Avatar src="/placeholder.svg" alt="User Avatar" />
                      <div>
                        <h4 className="font-semibold">John Doe</h4>
                        <p className="text-muted-foreground text-sm">Verified Buyer</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-2">
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                    <p>
                      This lens is an absolute gem! The image quality is stunning, and the build quality is top-notch.
                      Highly recommended for any serious photographer.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Avatar src="/placeholder.svg" alt="User Avatar" />
                      <div>
                        <h4 className="font-semibold">Jane Smith</h4>
                        <p className="text-muted-foreground text-sm">Verified Buyer</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-2">
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                    <p>
                      I'm absolutely in love with this lens. The autofocus is lightning-fast, and the image
                      stabilization is a game changer. Highly recommended for any photographer.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Avatar src="/placeholder.svg" alt="User Avatar" />
                      <div>
                        <h4 className="font-semibold">Michael Johnson</h4>
                        <p className="text-muted-foreground text-sm">Verified Buyer</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-2">
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                    </div>
                    <p>
                      This lens is an absolute game-changer. The image quality is unparalleled, and the build quality is
                      exceptional. Highly recommended for any professional photographer.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6">
                <Button size="lg">Leave a Review</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Card>
                  <Link to="#" className="absolute inset-0 z-10" >
                    <span className="sr-only">View</span>
                  </Link>
                  <img
                    src="/39.webp"
                    alt="Camera Lens"
                    width={400}
                    height={300}
                    className="rounded-lg w-full aspect-[4/3] object-cover"
                  />
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">Canon EF 50mm f/1.8 STM</h3>
                    <p className="text-muted-foreground">A compact and affordable prime lens.</p>
                    <div className="flex items-center gap-2">
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      <span className="text-muted-foreground text-sm">(125)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold">$125.99</p>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <Link to="#" className="absolute inset-0 z-10" >
                    <span className="sr-only">View</span>
                  </Link>
                  <img
                    src="/40.png"
                    alt="Camera Lens"
                    width={400}
                    height={300}
                    className="rounded-lg w-full aspect-[4/3] object-cover"
                  />
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">Nikon AF-S DX NIKKOR 35mm f/1.8G</h3>
                    <p className="text-muted-foreground">A versatile prime lens for DX-format cameras.</p>
                    <div className="flex items-center gap-2">
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      <span className="text-muted-foreground text-sm">(89)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold">$196.95</p>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <Link to="#" className="absolute inset-0 z-10" >
                    <span className="sr-only">View</span>
                  </Link>
                  <img
                    src="/41.jpg"
                    alt="Camera Lens"
                    width={400}
                    height={300}
                    className="rounded-lg w-full aspect-[4/3] object-cover"
                  />
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">Sony FE 85mm f/1.8</h3>
                    <p className="text-muted-foreground">A compact and versatile portrait lens.</p>
                    <div className="flex items-center gap-2">
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <span className="text-muted-foreground text-sm">(212)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold">$548.00</p>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <Link to="#" className="absolute inset-0 z-10" >
                    <span className="sr-only">View</span>
                  </Link>
                  <img
                    src="/43.webp"
                    alt="Camera Lens"
                    width={400}
                    height={300}
                    className="rounded-lg w-full aspect-[4/3] object-cover"
                  />
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">Tamron SP 70-200mm f/2.8 Di VC USD G2</h3>
                    <p className="text-muted-foreground">A high-performance telephoto zoom lens.</p>
                    <div className="flex items-center gap-2" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
