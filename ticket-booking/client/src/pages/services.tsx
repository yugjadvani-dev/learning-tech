import { Link } from "react-router-dom";

export function Services() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
            Your One-Stop Travel Booking Platform
          </h1>
          <p className="mt-4 text-lg text-primary-foreground md:text-xl">
            Simplify your travel planning with our comprehensive services. Book
            flights, hotels, and car rentals all in one place.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Get Started
          </Link>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-6 lg:gap-12">
          <div className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm transition-all hover:scale-105 hover:shadow-md">
            <PlaneIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Flight Booking</h3>
            <p className="mt-2 text-muted-foreground">
              Find the best flights at the lowest prices. Compare options and
              book with ease.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm transition-all hover:scale-105 hover:shadow-md">
            <HotelIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Hotel Booking</h3>
            <p className="mt-2 text-muted-foreground">
              Discover the perfect accommodation for your trip. Browse and book
              hotels with confidence.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm transition-all hover:scale-105 hover:shadow-md">
            <CarIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Car Rental</h3>
            <p className="mt-2 text-muted-foreground">
              Rent a car and explore your destination with freedom and
              flexibility.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Effortless Travel Booking
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our platform makes it easy to plan and book your entire trip in
                one place. With our intuitive interface and powerful search
                tools, you can find the best deals on flights, hotels, and car
                rentals.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Trusted by Millions
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our platform is trusted by millions of travelers worldwide. With
                our commitment to customer satisfaction and our user-friendly
                features, you can book your trip with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CarIcon(props: any) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function HotelIcon(props: any) {
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
      <path d="M10 22v-6.57" />
      <path d="M12 11h.01" />
      <path d="M12 7h.01" />
      <path d="M14 15.43V22" />
      <path d="M15 16a5 5 0 0 0-6 0" />
      <path d="M16 11h.01" />
      <path d="M16 7h.01" />
      <path d="M8 11h.01" />
      <path d="M8 7h.01" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
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
