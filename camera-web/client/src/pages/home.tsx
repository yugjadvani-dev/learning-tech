import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background shadow">
        <div className="container flex items-center justify-between py-4 px-4 md:px-6">
          <Link to="#" className="flex items-center">
            <CameraIcon className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">Camera Store</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="#" className="text-muted-foreground hover:text-primary">
              Cameras
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              Lenses
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              Accessories
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              About
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </nav>
          {/* <Button>
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Cart
          </Button> */}
          <Link to="/login">Log in</Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                  <img
                    src="/26.jpg"
                    alt="Camera Model 1"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: "1600/900", objectFit: "cover" }}
                  />
                  <div className=" " />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                      Capture the Moment
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground">
                      Introducing the latest camera model
                    </p>
                    <Button size="lg">Shop Now</Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                  <img
                    src="/33.webp"
                    alt="Camera Model 2"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: "1600/900", objectFit: "cover" }}
                  />
                  <div className=" " />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                      Unleash Your Creativity
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground">
                      Discover our latest lens collection
                    </p>
                    <Button size="lg">Shop Now</Button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                  <img
                    src="/35.jpg"
                    alt="Camera Accessories"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: "1600/900", objectFit: "cover" }}
                  />
                  <div className=" " />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                      Elevate Your Experience
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground">
                      Explore our range of camera accessories
                    </p>
                    <Button size="lg">Shop Now</Button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
              <ChevronLeftIcon className="h-8 w-8 text-primary-foreground" />
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
              <ChevronRightIcon className="h-8 w-8 text-primary-foreground" />
            </CarouselNext>
          </Carousel>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Cameras
              </h2>
              <Link to="#" className="text-primary hover:underline">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/15.jpg"
                  alt="Canon EOS Rebel T8i"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    Canon EOS Rebel T8i
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Capture stunning photos with our latest camera model.
                  </p>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/22.jpeg"
                  alt="Camera 2"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Nikon D5600</h3>
                  <p className="text-muted-foreground mb-4">
                    Upgrade your photography with our advanced camera.
                  </p>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/23.jpeg"
                  alt="Camera 3"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Sony Alpha a6400</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore the world with our versatile camera.
                  </p>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/19.jpeg"
                  alt="Camera 4"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Fujifilm X-T30</h3>
                  <p className="text-muted-foreground mb-4">
                    Capture the perfect moment with our high-quality camera.
                  </p>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Lenses
              </h2>
              <Link to="#" className="text-primary hover:underline">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/39.webp"
                  alt="Lens 1"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="36.jpeg">
                  <h3 className="text-lg font-bold mb-2">
                    Canon EF 50mm f/1.8 STM
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Capture stunning shots with our premium lens.
                  </p>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/40.png"
                  alt="Lens 2"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    Nikon AF-S DX NIKKOR 35mm f/1.8G
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Expand your creative possibilities with our versatile lens.
                  </p>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/41.jpg"
                  alt="Lens 3"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Sony FE 85mm f/1.8</h3>
                  <p className="text-muted-foreground mb-4">
                    Elevate your photography with our high-quality lens.
                  </p>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/43.webp"
                  alt="Lens 4"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    Tamron SP 70-200mm f/2.8 Di VC USD G2
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Capture the world in a new light with our specialized lens.
                  </p>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Accessories
              </h2>
              <Link to="#" className="text-primary hover:underline">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/1.jpg"
                  alt="Accessory 1"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    Premium Camera Tripod
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Enhance your photography experience with our essential
                    accessory.
                  </p>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/2.webp"
                  alt="Accessory 2"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    Wireless Camera Remote
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Elevate your photography game with our premium accessory.
                  </p>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/3.webp"
                  alt="Accessory 3"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    Camera Lens Filter Kit
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Unlock your camera's full potential with our specialized
                    accessory.
                  </p>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/4.webp"
                  alt="Accessory 4"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    Protect your camera and lenses on the go.
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Streamline your photography workflow with our essential
                    accessory.
                  </p>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 md:py-8 lg:py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center" />
        </div>
      </footer>
    </div>
  );
}

function CameraIcon(props: any) {
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
  );
}

function ChevronLeftIcon(props: any) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
