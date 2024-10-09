
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Degitalslr() {
  const cameras = [
    {
      id: 1,
      image: "/15.jpg",
      title: "Canon EOS Rebel T8i",
      description: "24.1MP DSLR with 4K video and Dual Pixel CMOS AF",
      price: 749.99,
    },
    {
      id: 2,
      image: "/22.jpeg",
      title: "Nikon D5600",
      description: "24.2MP DX-format DSLR with SnapBridge connectivity",
      price: 599.99,
    },
    {
      id: 3,
      image: "/23.jpeg",
      title: "Sony Alpha a6400",
      description: "24.2MP mirrorless camera with Real-time Tracking AF",
      price: 898.0,
    },
    {
      id: 4,
      image: "/19.jpeg",
      title: "Fujifilm X-T30",
      description: "26.1MP X-Trans CMOS IV sensor and X-Processor 4",
      price: 699.95,
    },
    {
      id: 5,
      image: "/20.jpeg",
      title: "Panasonic Lumix DC-G100",
      description: "20.3MP Micro Four Thirds mirrorless with 4K video",
      price: 597.99,
    },
  ]
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-sm">
        <div className="container max-w-6xl mx-auto flex items-center justify-between">
          <Link to="#" className="flex items-center gap-2" >
            <CameraIcon className="w-6 h-6" />
            <span className="font-semibold text-lg">Camera Shop</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="#" className="text-sm font-medium hover:text-primary-foreground/80" >
              Home
            </Link>
            <Link to="#" className="text-sm font-medium hover:text-primary-foreground/80" >
              Products
            </Link>
            <Link to="#" className="text-sm font-medium hover:text-primary-foreground/80" >
              About
            </Link>
            <Link to="#" className="text-sm font-medium hover:text-primary-foreground/80" >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cameras.map((camera) => (
            <div
              key={camera.id}
              className="bg-background rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md"
            >
              <img
                src={camera.image}
                alt={camera.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-6 grid gap-4">
                <h3 className="text-lg font-semibold">{camera.title}</h3>
                <p className="text-muted-foreground text-sm">{camera.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${camera.price.toFixed(2)}</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-8 px-6">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <CameraIcon className="w-6 h-6" />
            <span className="font-semibold">Camera Shop</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="#" className="text-sm hover:text-muted-foreground/80" >
              Contact
            </Link>
            <Link to="#" className="text-sm hover:text-muted-foreground/80" >
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm hover:text-muted-foreground/80" >
              Terms of Service
            </Link>
          </div>
        </div>
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
