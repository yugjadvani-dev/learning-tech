import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { Link } from "react-router-dom";

export function NewScooter() {
  const scooters = [
    {
      id: 1,
      name: "ola s1 pro",
      description:
        "High-performance electric scooter with a powerful motor and long-lasting battery.",
      price: 299.99,
      image: "/newscooter-1.webp?height=300&width=300",
      brand: "Razor",
      type: "Electric",
    },
    {
      id: 2,
      name: "TVS iQube",
      description:
        "Lightweight and portable electric scooter with a sleek design and smart features.",
      price: 499.99,
      image: "/newscooter-2.webp?height=300&width=300",
      brand: "Segway",
      type: "Electric",
    },
    {
      id: 3,
      name: "Activa 6G Scooter",
      description:
        "Durable and versatile kick scooter with large wheels for a smooth ride.",
      price: 79.99,
      image: "/newscooter-3.jpeg?height=300&width=300",
      brand: "Mongoose",
      type: "Kick",
    },
    {
      id: 4,
      name: "Micro Sprite Scooter",
      description:
        "Compact and lightweight kick scooter with a foldable design for easy storage.",
      price: 99.99,
      image: "/newscooter-4.webp?height=300&width=300",
      brand: "Micro",
      type: "Kick",
    },
    {
      id: 5,
      name: "Bajaj Auto High Speed Electric Scooter",
      description:
        "Portable and durable electric scooter with a unique dolly feature for easy transport.",
      price: 599.99,
      image: "/newscooter-5.jpeg?height=300&width=300",
      brand: "Glion",
      type: "Electric",
    },
    {
      id: 6,
      name: "Green Invicta Electric Scooter",
      description:
        "High-speed electric scooter with a long-range battery and advanced safety features.",
      price: 449.99,
      image: "/newscooter-6.jpg?height=300&width=300",
      brand: "Gotrax",
      type: "Electric",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    brand: [],
    type: [],
    priceRange: [0, 1000],
  });
  const filteredScooters = useMemo(() => {
    return scooters.filter((scooter) => {
      const { brand, type } = filterOptions;
      const price = scooter.price;
      return (
        scooter.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (brand.length === 0 || brand.includes(scooter.brand)) &&
        (type.length === 0 || type.includes(scooter.type)) &&
        price >= filterOptions.priceRange[0] &&
        price <= filterOptions.priceRange[1]
      );
    });
  }, [scooters, searchTerm, filterOptions]);
  const featuredScooters = useMemo(() => {
    return scooters.filter((scooter) => scooter.id === 1 || scooter.id === 2);
  }, [scooters]);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <BikeIcon className="w-8 h-8" />
            <span className="text-2xl font-bold">Bike Shop</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="hover:underline">
              New Scooters
            </Link>
            <Link to="/" className="hover:underline">
              Used Scooters
            </Link>
            <Link to="/" className="hover:underline">
              Accessories
            </Link>
            <Link to="/" className="hover:underline">
              About Us
            </Link>
            <Link to="/" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-8 px-6">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">New Scooters</h1>
            <div className="flex items-center mb-6">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search scooters..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-4">
                    <FilterIcon className="w-5 h-5 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="grid gap-2">
                    <div>
                      <h3 className="font-semibold mb-2">Brand</h3>
                      <div className="grid gap-1">
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox
                            checked={filterOptions.brand.includes("Razor")}
                            onCheckedChange={() =>
                              setFilterOptions((prev) => ({
                                ...prev,
                                brand: prev.brand.includes("Razor")
                                  ? prev.brand.filter((b) => b !== "Razor")
                                  : [...prev.brand, "Razor"],
                              }))
                            }
                          />
                          Razor
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox
                            checked={filterOptions.brand.includes("Segway")}
                            onCheckedChange={() =>
                              setFilterOptions((prev) => ({
                                ...prev,
                                brand: prev.brand.includes("Segway")
                                  ? prev.brand.filter((b) => b !== "Segway")
                                  : [...prev.brand, "Segway"],
                              }))
                            }
                          />
                          Segway
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox
                            checked={filterOptions.brand.includes("Mongoose")}
                            onCheckedChange={() =>
                              setFilterOptions((prev) => ({
                                ...prev,
                                brand: prev.brand.includes("Mongoose")
                                  ? prev.brand.filter((b) => b !== "Mongoose")
                                  : [...prev.brand, "Mongoose"],
                              }))
                            }
                          />
                          Mongoose
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox
                            checked={filterOptions.brand.includes("Micro")}
                            onCheckedChange={() =>
                              setFilterOptions((prev) => ({
                                ...prev,
                                brand: prev.brand.includes("Micro")
                                  ? prev.brand.filter((b) => b !== "Micro")
                                  : [...prev.brand, "Micro"],
                              }))
                            }
                          />
                          Micro
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox
                            checked={filterOptions.brand.includes("Glion")}
                            onCheckedChange={() =>
                              setFilterOptions((prev) => ({
                                ...prev,
                                brand: prev.brand.includes("Glion")
                                  ? prev.brand.filter((b) => b !== "Glion")
                                  : [...prev.brand, "Glion"],
                              }))
                            }
                          />
                          Glion
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox
                            checked={filterOptions.brand.includes("Gotrax")}
                            onCheckedChange={() =>
                              setFilterOptions((prev) => ({
                                ...prev,
                                brand: prev.brand.includes("Gotrax")
                                  ? prev.brand.filter((b) => b !== "Gotrax")
                                  : [...prev.brand, "Gotrax"],
                              }))
                            }
                          />
                          Gotrax
                        </Label>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Type</h3>
                      <div className="grid gap-1">
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox
                            checked={filterOptions.type.includes("Electric")}
                            onCheckedChange={() =>
                              setFilterOptions((prev) => ({
                                ...prev,
                                type: prev.type.includes("Electric")
                                  ? prev.type.filter((t) => t !== "Electric")
                                  : [...prev.type, "Electric"],
                              }))
                            }
                          />
                          Electric
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox
                            checked={filterOptions.type.includes("Kick")}
                            onCheckedChange={() =>
                              setFilterOptions((prev) => ({
                                ...prev,
                                type: prev.type.includes("Kick")
                                  ? prev.type.filter((t) => t !== "Kick")
                                  : [...prev.type, "Kick"],
                              }))
                            }
                          />
                          Kick
                        </Label>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Price Range</h3>
                      <div />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${filterOptions.priceRange[0]}</span>
                        <span>${filterOptions.priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredScooters.map((scooter) => (
                <Card key={scooter.id}>
                  <img
                    src={scooter.image}
                    alt={scooter.name}
                    width={300}
                    height={300}
                    className="rounded-t-lg object-cover w-full h-48"
                    style={{ aspectRatio: "300/300", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-2">{scooter.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {scooter.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-bold">
                        ${scooter.price}
                      </span>
                      <Button>Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-background py-8 px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Featured New Scooters</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredScooters.map((scooter) => (
                <Card key={scooter.id}>
                  <img
                    src={scooter.image}
                    alt={scooter.name}
                    width={300}
                    height={300}
                    className="rounded-t-lg object-cover w-full h-48"
                    style={{ aspectRatio: "300/300", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-2">{scooter.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {scooter.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-bold">
                        ${scooter.price}
                      </span>
                      <Button>Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Bike Shop. All rights reserved.</p>
          </div>
          <nav className="flex gap-4">
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
