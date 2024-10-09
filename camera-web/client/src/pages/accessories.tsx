
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Group, Checkbox } from "@/components/ui/checkbox"
import { Link } from "react-router-dom"

export function Accessories() {
  return (
    <div className="bg-background">
      <header className="bg-muted py-8 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold tracking-tight">Camera Accessories</h1>
          <p className="mt-2 text-muted-foreground">
            Find the perfect accessories to enhance your photography experience.
          </p>
        </div>
      </header>
      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-lg bg-card shadow-sm">
            <Link to="#" className="absolute inset-0 z-10" >
              <span className="sr-only">View Accessory</span>
            </Link>
            <img
              src="1.jpg"
              alt="Accessory Image"
              width={400}
              height={300}
              className="h-56 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Premium Camera Tripod</h3>
              <p className="mt-2 text-muted-foreground">Sturdy and adjustable tripod for stable shots.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-primary font-semibold">$99.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-card shadow-sm">
            <Link to="#" className="absolute inset-0 z-10" >
              <span className="sr-only">View Accessory</span>
            </Link>
            <img
              src="/2.webp"
              alt="Accessory Image"
              width={400}
              height={300}
              className="h-56 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Wireless Camera Remote</h3>
              <p className="mt-2 text-muted-foreground">Capture shots without touching your camera.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-primary font-semibold">$49.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-card shadow-sm">
            <Link to="#" className="absolute inset-0 z-10" >
              <span className="sr-only">View Accessory</span>
            </Link>
            <img
              src="3.webp"
              alt="Accessory Image"
              width={400}
              height={300}
              className="h-56 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Camera Lens Filter Kit</h3>
              <p className="mt-2 text-muted-foreground">Enhance your photos with various lens filters.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-primary font-semibold">$79.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-card shadow-sm">
            <Link to="#" className="absolute inset-0 z-10" >
              <span className="sr-only">View Accessory</span>
            </Link>
            <img
              src="/4.webp"
              alt="Accessory Image"
              width={400}
              height={300}
              className="h-56 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Portable Camera Bag</h3>
              <p className="mt-2 text-muted-foreground">Protect your camera and lenses on the go.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-primary font-semibold">$59.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-card shadow-sm">
            <Link to="#" className="absolute inset-0 z-10" >
              <span className="sr-only">View Accessory</span>
            </Link>
            <img
              src="/5.jpeg"
              alt="Accessory Image"
              width={400}
              height={300}
              className="h-56 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">External Camera Flash</h3>
              <p className="mt-2 text-muted-foreground">Powerful flash for low-light photography.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-primary font-semibold">$129.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-card shadow-sm">
            <Link to="#" className="absolute inset-0 z-10" >
              <span className="sr-only">View Accessory</span>
            </Link>
            <img
              src="/6.jpeg"
              alt="Accessory Image"
              width={400}
              height={300}
              className="h-56 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Camera Lens Cleaning Kit</h3>
              <p className="mt-2 text-muted-foreground">Keep your lenses in pristine condition.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-primary font-semibold">$24.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-card shadow-sm">
            <Link to="#" className="absolute inset-0 z-10" >
              <span className="sr-only">View Accessory</span>
            </Link>
            <img
              src="/7.jpeg"
              alt="Accessory Image"
              width={400}
              height={300}
              className="h-56 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Camera Lens Adapter</h3>
              <p className="mt-2 text-muted-foreground">Connect different lens types to your camera.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-primary font-semibold">$39.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-card shadow-sm">
            <Link to="#" className="absolute inset-0 z-10" >
              <span className="sr-only">View Accessory</span>
            </Link>
            <img
              src="/8.jpeg"
              alt="Accessory Image"
              width={400}
              height={300}
              className="h-56 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Camera Lens Hood</h3>
              <p className="mt-2 text-muted-foreground">Reduce glare and improve image quality.</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-primary font-semibold">$14.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted py-12">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-card rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select id="category" className="mt-2">
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tripods">Tripods</SelectItem>
                      <SelectItem value="remotes">Remotes</SelectItem>
                      <SelectItem value="filters">Filters</SelectItem>
                      <SelectItem value="bags">Bags</SelectItem>
                      <SelectItem value="flashes">Flashes</SelectItem>
                      <SelectItem value="cleaning">Cleaning</SelectItem>
                      <SelectItem value="adapters">Adapters</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="price">Price Range</Label>
                  <div className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="brand">Brand</Label>
                  <div className="mt-2 space-y-2">
                    <Checkbox id="brand-canon">Canon</Checkbox>
                    <Checkbox id="brand-nikon">Nikon</Checkbox>
                    <Checkbox id="brand-sony">Sony</Checkbox>
                    <Checkbox id="brand-tamron">Tamron</Checkbox>
                    <Checkbox id="brand-sigma">Sigma</Checkbox>
                  </div>
                </div>
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sort">Sort by</Label>
                  <Select id="sort" className="ml-2">
                    <SelectTrigger>
                      <SelectValue placeholder="Select sort option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="name-asc">Name: A to Z</SelectItem>
                      <SelectItem value="name-desc">Name: Z to A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Button variant="outline">
                    <LayoutGridIcon className="h-5 w-5" />
                    <span className="sr-only">Grid View</span>
                  </Button>
                  <Button variant="outline" className="ml-2">
                    <ListIcon className="h-5 w-5" />
                    <span className="sr-only">List View</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LayoutGridIcon(props:any) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function ListIcon(props:any) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}
