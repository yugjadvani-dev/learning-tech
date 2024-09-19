import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export function NewBike() {
  const bikes = [
    {
      id: 1,
      image: "/newbike-1.webp",
      name: "Acme Road Bike",
      description:
        "A lightweight and responsive road bike for the avid cyclist.",
      price: 999.99,
      type: "Road",
      brand: "Acme",
    },
    {
      id: 2,
      image: "/placeholder.svg",
      name: "Velocity Mountain Bike",
      description:
        "A rugged and versatile mountain bike for off-road adventures.",
      price: 1299.99,
      type: "Mountain",
      brand: "Velocity",
    },
    {
      id: 3,
      image: "/placeholder.svg",
      name: "Cruiser Deluxe",
      description:
        "A comfortable and stylish cruiser bike for leisurely rides.",
      price: 599.99,
      type: "Cruiser",
      brand: "Acme",
    },
    {
      id: 4,
      image: "/placeholder.svg",
      name: "Hybrid Elite",
      description:
        "A versatile hybrid bike that combines the best of road and mountain bikes.",
      price: 899.99,
      type: "Hybrid",
      brand: "Velocity",
    },
    {
      id: 5,
      image: "/placeholder.svg",
      name: "Commuter Pro",
      description: "A lightweight and efficient commuter bike for city riding.",
      price: 799.99,
      type: "Commuter",
      brand: "Acme",
    },
    {
      id: 6,
      image: "/placeholder.svg",
      name: "Trail Blazer",
      description:
        "A rugged and capable mountain bike for tackling tough terrain.",
      price: 1499.99,
      type: "Mountain",
      brand: "Velocity",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: [],
    brand: [],
    priceRange: [0, 2000],
  });
  const filteredBikes = useMemo(() => {
    return bikes.filter((bike) => {
      const nameMatch = bike.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const typeMatch =
        filters.type.length === 0 || filters.type.includes(bike.type);
      const brandMatch =
        filters.brand.length === 0 || filters.brand.includes(bike.brand);
      const priceMatch =
        bike.price >= filters.priceRange[0] &&
        bike.price <= filters.priceRange[1];
      return nameMatch && typeMatch && brandMatch && priceMatch;
    });
  }, [searchTerm, filters]);
  const featuredBikes = useMemo(() => {
    return bikes.filter(
      (bike) => bike.id === 1 || bike.id === 2 || bike.id === 6
    );
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BikeIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Bike Shop</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:underline">
              Bikes
            </Link>
            <Link to="/" className="hover:underline">
              Parts
            </Link>
            <Link to="/" className="hover:underline">
              Accessories
            </Link>
            <Link to="/" className="hover:underline">
              About
            </Link>
            <Link to="/" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-8 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">New Bikes</h1>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search bikes..."
                    className="bg-background pl-8 pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <FilterIcon className="h-4 w-4" />
                      <span>Filters</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64">
                    <DropdownMenuLabel>Filters</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="grid gap-4 p-4">
                      <div>
                        <h3 className="font-semibold mb-2">Bike Type</h3>
                        <div className="grid gap-2">
                          <Label className="flex items-center gap-2">
                            <Checkbox
                              checked={filters.type.includes("Road")}
                              onCheckedChange={(checked) =>
                                setFilters((prev) => ({
                                  ...prev,
                                  type: checked
                                    ? [...prev.type, "Road"]
                                    : prev.type.filter((t) => t !== "Road"),
                                }))
                              }
                            />
                            Road
                          </Label>
                          <Label className="flex items-center gap-2">
                            <Checkbox
                              checked={filters.type.includes("Mountain")}
                              onCheckedChange={(checked) =>
                                setFilters((prev) => ({
                                  ...prev,
                                  type: checked
                                    ? [...prev.type, "Mountain"]
                                    : prev.type.filter((t) => t !== "Mountain"),
                                }))
                              }
                            />
                            Mountain
                          </Label>
                          <Label className="flex items-center gap-2">
                            <Checkbox
                              checked={filters.type.includes("Cruiser")}
                              onCheckedChange={(checked) =>
                                setFilters((prev) => ({
                                  ...prev,
                                  type: checked
                                    ? [...prev.type, "Cruiser"]
                                    : prev.type.filter((t) => t !== "Cruiser"),
                                }))
                              }
                            />
                            Cruiser
                          </Label>
                          <Label className="flex items-center gap-2">
                            <Checkbox
                              checked={filters.type.includes("Hybrid")}
                              onCheckedChange={(checked) =>
                                setFilters((prev) => ({
                                  ...prev,
                                  type: checked
                                    ? [...prev.type, "Hybrid"]
                                    : prev.type.filter((t) => t !== "Hybrid"),
                                }))
                              }
                            />
                            Hybrid
                          </Label>
                          <Label className="flex items-center gap-2">
                            <Checkbox
                              checked={filters.type.includes("Commuter")}
                              onCheckedChange={(checked) =>
                                setFilters((prev) => ({
                                  ...prev,
                                  type: checked
                                    ? [...prev.type, "Commuter"]
                                    : prev.type.filter((t) => t !== "Commuter"),
                                }))
                              }
                            />
                            Commuter
                          </Label>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Brand</h3>
                        <div className="grid gap-2">
                          <Label className="flex items-center gap-2">
                            <Checkbox
                              checked={filters.brand.includes("Acme")}
                              onCheckedChange={(checked) =>
                                setFilters((prev) => ({
                                  ...prev,
                                  brand: checked
                                    ? [...prev.brand, "Acme"]
                                    : prev.brand.filter((b) => b !== "Acme"),
                                }))
                              }
                            />
                            Acme
                          </Label>
                          <Label className="flex items-center gap-2">
                            <Checkbox
                              checked={filters.brand.includes("Velocity")}
                              onCheckedChange={(checked) =>
                                setFilters((prev) => ({
                                  ...prev,
                                  brand: checked
                                    ? [...prev.brand, "Velocity"]
                                    : prev.brand.filter(
                                        (b) => b !== "Velocity"
                                      ),
                                }))
                              }
                            />
                            Velocity
                          </Label>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Price Range</h3>
                        <div />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>${filters.priceRange[0]}</span>
                          <span>${filters.priceRange[1]}</span>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredBikes.map((bike) => (
                <div
                  key={bike.id}
                  className="bg-background rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
                >
                  <img
                    src={bike.image}
                    alt={bike.brand}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{bike.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {bike.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">
                        ${bike.price.toFixed(2)}
                      </span>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-muted py-8 px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Featured New Bikes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredBikes.map((bike) => (
                <div
                  key={bike.id}
                  className="bg-background rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
                >
                  <img
                    src={bike.image}
                    alt={bike.brand}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{bike.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {bike.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">
                        ${bike.price.toFixed(2)}
                      </span>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <BikeIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Bike Shop</span>
          </div>
          <nav className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:underline">
              Terms of Service
            </Link>
            <Link to="/" className="hover:underline">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function BikeIcon(props: any) {
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
  );
}

function FilterIcon(props: any) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function SearchIcon(props: any) {
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
  );
}
