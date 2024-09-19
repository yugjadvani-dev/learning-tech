
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "react-router-dom"

export function Parts() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2" >
            <BikeIcon className="h-8 w-8" />
            <span className="text-xl font-bold">Bike Parts</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-accent transition-colors" >
              Home
            </Link>
            <Link to="/" className="hover:text-accent transition-colors" >
              Parts
            </Link>
            <Link to="/" className="hover:text-accent transition-colors" >
              Accessories
            </Link>
            <Link to="/" className="hover:text-accent transition-colors" >
              About
            </Link>
            <Link to="/" className="hover:text-accent transition-colors" >
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Parts Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/"
                className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                
              >
                <ShipWheelIcon className="h-8 w-8" />
                <span>Wheels</span>
              </Link>
              <Link
                to="/"
                className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                
              >
                <BracketsIcon className="h-8 w-8" />
                <span>Brakes</span>
              </Link>
              <Link
                to="/"
                className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                
              >
                <PowerIcon className="h-8 w-8" />
                <span>Gears</span>
              </Link>
              <Link
                to="/"
                className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                
              >
                <BikeIcon className="h-8 w-8" />
                <span>Pedals</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Search & Filter</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background rounded-lg p-4">
                <h3 className="text-lg font-bold mb-2">Search</h3>
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search parts..."
                    className="w-full rounded-lg bg-muted pl-10 pr-4 py-2"
                  />
                </div>
              </div>
              <div className="bg-background rounded-lg p-4">
                <h3 className="text-lg font-bold mb-2">Filter by Type</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox />
                    Wheels
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox />
                    Brakes
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox />
                    Gears
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox />
                    Pedals
                  </Label>
                </div>
              </div>
              <div className="bg-background rounded-lg p-4">
                <h3 className="text-lg font-bold mb-2">Filter by Brand</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox />
                    Shimano
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox />
                    SRAM
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox />
                    Campagnolo
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox />
                    Mavic
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Product Listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <img
                  src="/parts-1.jpeg"
                  alt="Product Image"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "300/200", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Shimano Deore XT Rear Derailleur</h3>
                  <p className="text-muted-foreground mb-4">High-performance rear derailleur for mountain bikes.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">$99.99</span>
                    <Button>Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <img
                  src="/parts-2.webp"
                  alt="Product Image"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "300/200", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Shimano Dura-Ace Wheelset</h3>
                  <p className="text-muted-foreground mb-4">High-end carbon fiber wheelset for road bikes.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">$1,499.99</span>
                    <Button>Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <img
                  src="/parts-3.avif"
                  alt="Product Image"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "300/200", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">SRAM Force eTap AXS Groupset</h3>
                  <p className="text-muted-foreground mb-4">High-end electronic groupset for road bikes.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">$2,199.99</span>
                    <Button>Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <img
                  src="/parts-4.webp"
                  alt="Product Image"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "300/200", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Campagnolo Bora WTO 45 Wheelset</h3>
                  <p className="text-muted-foreground mb-4">High-performance carbon fiber wheelset for road bikes.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">$1,999.99</span>
                    <Button>Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <BikeIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Bike Parts</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-accent transition-colors" >
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-accent transition-colors" >
              Terms of Service
            </Link>
            <Link to="/" className="hover:text-accent transition-colors" >
              Contact Us
            </Link>
          </div>
        </div>
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


function BracketsIcon(props:any) {
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
      <path d="M16 3h3v18h-3" />
      <path d="M8 21H5V3h3" />
    </svg>
  )
}


function MenuIcon(props:any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PowerIcon(props:any) {
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
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}


function SearchIcon(props:any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShipWheelIcon(props:any) {
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
      <circle cx="12" cy="12" r="8" />
      <path d="M12 2v7.5" />
      <path d="m19 5-5.23 5.23" />
      <path d="M22 12h-7.5" />
      <path d="m19 19-5.23-5.23" />
      <path d="M12 14.5V22" />
      <path d="M10.23 13.77 5 19" />
      <path d="M9.5 12H2" />
      <path d="M10.23 10.23 5 5" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
}
