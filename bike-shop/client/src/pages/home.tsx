
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Link } from "react-router-dom"
import addToCart from "@/hooks/addToCart";

const featured = [
  {
    "name": "Mountain Bike",
    "price": 999,
    "img": "/mountain.avif"
  },
  {
    "name": "Road Bike",
    "price": 799,
    "img": "/road.avif"
  },
  {
    "name": "Electric Scooter",
    "price": 499,
    "img": "/electric-scooter.avif"
  },
  {
    "name": "Folding Bike",
    "price": 399,
    "img": "/folding.jpg"
  }
]

export function Home() {
  const {handleSubmit} = addToCart()
  return (
    <div className="flex flex-col min-h-[100dvh]">

      <main className="flex-1">
        <section className="w-full h-[60vh] bg-[url('/Welcome-bike.avif')] bg-cover bg-center flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl font-bold">Welcome to Bike Shop</h1>
            <p className="text-lg">Discover the best bikes and accessories</p>
            <Link
              to="/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              
            >
              Shop Now
            </Link>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our latest and most popular bikes, scooters, and accessories.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
              {featured?.map(record=>{
                return (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src={record.img}
                    width="200"
                    height="200"
                    alt="Bike 1"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">{record.name}</h3>
                    <p className="text-muted-foreground">${record.price}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button onClick={() => handleSubmit(record)}>Add to Cart</Button>
                </CardFooter>
              </Card>
                )
              })}
              {/* <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src="/road.avif"
                    width="200"
                    height="200"
                    alt="Bike 2"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">Road Bike</h3>
                    <p className="text-muted-foreground">$799.99</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src="/electric-scooter.avif"
                    width="200"
                    height="200"
                    alt="Bike 3"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">Electric Scooter</h3>
                    <p className="text-muted-foreground">$499.99</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src="/folding.jpg"
                    width="200"
                    height="200"
                    alt="Bike 4"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">Folding Bike</h3>
                    <p className="text-muted-foreground">$399.99</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card> */}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for our upcoming bike rides and events.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="/upcoming-1.avif"
                      width="300"
                      height="200"
                      alt="Event 1"
                      className="aspect-[3/2] overflow-hidden rounded-xl object-cover"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold">Mountain Bike Ride</h3>
                      <p className="text-muted-foreground">Join us for a challenging ride through the mountains.</p>
                      <div className="mt-2">
                        <CalendarDaysIcon className="mr-2 h-5 w-5" />
                        <span>June 15, 2023</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="/upcoming-2.avif"
                      width="300"
                      height="200"
                      alt="Event 2"
                      className="aspect-[3/2] overflow-hidden rounded-xl object-cover"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold">City Bike Tour</h3>
                      <p className="text-muted-foreground">Explore the city on a guided bike tour.</p>
                      <div className="mt-2">
                        <CalendarDaysIcon className="mr-2 h-5 w-5" />
                        <span>July 10, 2023</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="/upcomig-3.jpg"
                      width="300"
                      height="200"
                      alt="Event 3"
                      className="aspect-[3/2] overflow-hidden rounded-xl object-cover"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold">Bike Maintenance Workshop</h3>
                      <p className="text-muted-foreground">Learn how to maintain and repair your bike.</p>
                      <div className="mt-2">
                        <CalendarDaysIcon className="mr-2 h-5 w-5" />
                        <span>August 5, 2023</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Special Offers</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our current promotions and discounts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src="/helmet.webp"
                    width="200"
                    height="200"
                    alt="Offer 1"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">20% Off Helmets</h3>
                    <p className="text-muted-foreground">Get 20% off all bike helmets this month.</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button>Shop Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src="/freebike.png"
                    width="200"
                    height="200"
                    alt="Offer 2"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">Free Bike Tune-Up</h3>
                    <p className="text-muted-foreground">Get a free tune-up with the purchase of any new bike.</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button>Shop Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src="/buyone-getone.avif"
                    width="200"
                    height="200"
                    alt="Offer 3"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">Buy One, Get One Free</h3>
                    <p className="text-muted-foreground">Buy any bike and get a second one for free.</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button>Shop Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experiences with our bikes and services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold">John Doe</h3>
                      <p className="text-muted-foreground">
                        "I love my new mountain bike from Bike Shop. The quality is amazing and the customer service was
                        top-notch."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold">Jane Smith</h3>
                      <p className="text-muted-foreground">
                        "I love my new mountain bike from Bike Shop. The quality is amazing and the customer service was
                        top-notch."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold">Michael Johnson</h3>
                      <p className="text-muted-foreground">
                        "I love my new mountain bike from Bike Shop. The quality is amazing and the customer service was
                        top-notch."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
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


function CalendarDaysIcon(props:any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function PhoneIcon(props:any) {
  return (
    <svg
      {...props}s
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
