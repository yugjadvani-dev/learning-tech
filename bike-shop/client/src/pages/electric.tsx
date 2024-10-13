import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import addToCart from "@/hooks/addToCart";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export function Electric() {
  const {handleSubmit} = addToCart()
  const electricBikes = [
    {
      id: 1,
      name: "Acme Volt",
      description: "A powerful and stylish electric bike for city commuting.",
      img: "/electric-1.jpeg",
      price: 1999.99,
      brand: "Acme",
      type: "City",
    },
    {
      id: 2,
      name: "Speedster X",
      description: "A high-performance electric bike for off-road adventures.",
      img: "/electric-2.avif",
      price: 2499.99,
      brand: "Speedster",
      type: "Mountain",
    },
    {
      id: 3,
      name: "Eco Cruiser",
      description:
        "A comfortable and eco-friendly electric bike for leisurely rides.",
        img: "/electric-3.avif",
        price: 1799.99,
      brand: "Eco",
      type: "Cruiser",
    },
    {
      id: 4,
      name: "Velo Commuter",
      description: "A compact and efficient electric bike for city commuting.",
      img: "/electric-4.jpg",
      price: 1499.99,
      brand: "Velo",
      type: "City",
    },
    {
      id: 5,
      name: "Terrain Conqueror",
      description:
        "A rugged and powerful electric bike for off-road adventures.",
        img: "/electric-5.jpg",
        price: 2799.99,
      brand: "Terrain",
      type: "Mountain",
    },
    {
      id: 6,
      name: "Breeze Glider",
      description: "A lightweight and stylish electric bike for casual rides.",
      img: "/electric-6.jpg",
      price: 1699.99,
      brand: "Breeze",
      type: "Cruiser",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    brand: [],
    type: [],
    priceRange: [0, 3000],
  });
  const filteredBikes = useMemo(() => {
    return electricBikes.filter((bike) => {
      const brandMatch =
        filters.brand.length === 0 || filters.brand.includes(bike.img);
      const typeMatch =
        filters.type.length === 0 || filters.type.includes(bike.type);
      const priceMatch =
        bike.price >= filters.priceRange[0] &&
        bike.price <= filters.priceRange[1];
      const searchMatch = bike.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return brandMatch && typeMatch && priceMatch && searchMatch;
    });
  }, [filters, searchTerm]);
  const featuredBikes = useMemo(() => {
    return electricBikes.filter(
      (bike) => bike.id === 1 || bike.id === 2 || bike.id === 3
    );
  }, []);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
  };
  const handlePriceRangeChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: value,
    }));
  };
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Electric Bikes</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search bikes..."
                  className="w-full rounded-lg bg-background pl-8 pr-4 py-2"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <FilterIcon className="h-4 w-4" />
                    <span>Filters</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 p-4">
                  <div className="grid gap-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Brand</h3>
                      <div className="grid gap-2">
                        <Label className="flex items-center gap-2">
                          <Checkbox
                            checked={filters.brand.includes("Acme")}
                            onCheckedChange={() =>
                              handleFilterChange("brand", "Acme")
                            }
                          />
                          Acme
                        </Label>
                        <Label className="flex items-center gap-2">
                          <Checkbox
                            checked={filters.brand.includes("Speedster")}
                            onCheckedChange={() =>
                              handleFilterChange("brand", "Speedster")
                            }
                          />
                          Speedster
                        </Label>
                        <Label className="flex items-center gap-2">
                          <Checkbox
                            checked={filters.brand.includes("Eco")}
                            onCheckedChange={() =>
                              handleFilterChange("brand", "Eco")
                            }
                          />
                          Eco
                        </Label>
                        <Label className="flex items-center gap-2">
                          <Checkbox
                            checked={filters.brand.includes("Velo")}
                            onCheckedChange={() =>
                              handleFilterChange("brand", "Velo")
                            }
                          />
                          Velo
                        </Label>
                        <Label className="flex items-center gap-2">
                          <Checkbox
                            checked={filters.brand.includes("Terrain")}
                            onCheckedChange={() =>
                              handleFilterChange("brand", "Terrain")
                            }
                          />
                          Terrain
                        </Label>
                        <Label className="flex items-center gap-2">
                          <Checkbox
                            checked={filters.brand.includes("Breeze")}
                            onCheckedChange={() =>
                              handleFilterChange("brand", "Breeze")
                            }
                          />
                          Breeze
                        </Label>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">Type</h3>
                      <div className="grid gap-2">
                        <Label className="flex items-center gap-2">
                          <Checkbox
                            checked={filters.type.includes("City")}
                            onCheckedChange={() =>
                              handleFilterChange("type", "City")
                            }
                          />
                          City
                        </Label>
                        <Label className="flex items-center gap-2">
                          <Checkbox
                            checked={filters.type.includes("Mountain")}
                            onCheckedChange={() =>
                              handleFilterChange("type", "Mountain")
                            }
                          />
                          Mountain
                        </Label>
                        <Label className="flex items-center gap-2">
                          <Checkbox
                            checked={filters.type.includes("Cruiser")}
                            onCheckedChange={() =>
                              handleFilterChange("type", "Cruiser")
                            }
                          />
                          Cruiser
                        </Label>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">Price Range</h3>
                      <Slider
                        min={0}
                        max={3000}
                        step={100}
                        defaultValue={[0, 3000]}
                        onValueChange={handlePriceRangeChange}
                        className="w-full"
                      >
                        <div>
                          <div />
                        </div>
                        <div />
                        <div />
                      </Slider>
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
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Electric Bikes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredBikes.map((bike) => (
                <Card key={bike.id} className="relative group">
                  {/* <Link to="/" className="absolute inset-0 z-10">
                    <span className="sr-only">View {bike.name}</span>
                  </Link> */}
                  <img
                    src={bike.img}
                    alt={bike.type}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">{bike.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {bike.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-bold">
                        ${bike.price.toFixed(2)}
                      </span>
                      <Button size="sm" onClick={() => handleSubmit(bike)}>Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-6">All Electric Bikes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredBikes.map((bike) => (
                <Card key={bike.id} className="relative group">
                  {/* <Link to="/" className="absolute inset-0 z-10">
                    <span className="sr-only">View {bike.name}</span>
                  </Link> */}
                  <img
                    src={bike.img}
                    alt={bike.type}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">{bike.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {bike.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-bold">
                        ${bike.price.toFixed(2)}
                      </span>
                      <Button size="sm" onClick={() => handleSubmit(bike)}>Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      
    </div>
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

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
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
