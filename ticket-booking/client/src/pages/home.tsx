import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full bg-primary py-16 md:py-24 lg:py-32">
        <div className="container">
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                      Book Your Train, Bus, or Flight Tickets
                    </h1>
                    <p className="text-lg md:text-xl text-primary-foreground mb-8">
                      Find the best deals and plan your journey with ease.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Book Train Tickets
                    </Link>
                  </div>
                  <img
                    src="/train1.jpg"
                    width={800}
                    height={500}
                    alt="Train"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "800/500", objectFit: "cover" }}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                      Discover the World by Bus
                    </h1>
                    <p className="text-lg md:text-xl text-primary-foreground mb-8">
                      Explore new destinations with our reliable bus services.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Book Bus Tickets
                    </Link>
                  </div>
                  <img
                    src="/bus1.jpg"
                    width={800}
                    height={500}
                    alt="Bus"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "800/500", objectFit: "cover" }}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                      Fly High with Our Flight Booking
                    </h1>
                    <p className="text-lg md:text-xl text-primary-foreground mb-8">
                      Book your flights with ease and enjoy your journey.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Book Flight Tickets
                    </Link>
                  </div>
                  <img
                    src="/flight1.jpg"
                    width={800}
                    height={500}
                    alt="Flight"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "800/500", objectFit: "cover" }}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
              <TrainTrackIcon className="size-12 text-primary" />
              <h3 className="text-2xl font-bold">Train Tickets</h3>
              <p className="text-muted-foreground text-center">
                Book your train tickets with ease and enjoy a comfortable
                journey.
              </p>
              <Link
                to="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Book Now
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
              <BusIcon className="size-12 text-primary" />
              <h3 className="text-2xl font-bold">Bus Tickets</h3>
              <p className="text-muted-foreground text-center">
                Explore new destinations with our reliable bus services.
              </p>
              <Link
                to="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Book Now
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
              <PlaneIcon className="size-12 text-primary" />
              <h3 className="text-2xl font-bold">Flight Tickets</h3>
              <p className="text-muted-foreground text-center">
                Book your flights with ease and enjoy your journey.
              </p>
              <Link
                to="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Book Now
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/homepage-about.jpg"
              width={600}
              height={400}
              alt="About Us"
              className="rounded-lg object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-muted-foreground mb-8">
              We are a leading travel booking platform that provides seamless
              booking experiences for trains, buses, and flights. Our mission is
              to make travel planning easy and accessible for everyone.
            </p>
            <Link
              to="/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">John Doe</h4>
                    <p className="text-muted-foreground text-sm">
                      Satisfied Customer
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I've been using this platform for all my travel bookings,
                  and\n I'm always impressed by the seamless experience and
                  great\n deals. Highly recommended!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Sarah Miller</h4>
                    <p className="text-muted-foreground text-sm">
                      Frequent Traveler
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I've been using this platform for all my travel bookings,
                  and\n I'm always impressed by the seamless experience and
                  great\n deals. Highly recommended!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Michael Johnson</h4>
                    <p className="text-muted-foreground text-sm">
                      Business Traveler
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I've been using this platform for all my travel bookings,
                  and\n I'm always impressed by the seamless experience and
                  great\n deals. Highly recommended!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive the latest updates, special
            offers, and news about our platform.
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

function BusIcon(props: any) {
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
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}

function PlaneIcon(props: any) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function TrainTrackIcon(props: any) {
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
      <path d="M2 17 17 2" />
      <path d="m2 14 8 8" />
      <path d="m5 11 8 8" />
      <path d="m8 8 8 8" />
      <path d="m11 5 8 8" />
      <path d="m14 2 8 8" />
      <path d="M7 22 22 7" />
    </svg>
  );
}
