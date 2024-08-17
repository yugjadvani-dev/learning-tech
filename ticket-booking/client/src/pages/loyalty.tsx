import { Link } from "react-router-dom";


export function Loyalty() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Loyalty Program</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Unlock exclusive benefits and rewards for your loyalty to our ticket booking services.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Train Loyalty</h3>
              <p className="text-muted-foreground">
                Earn points for every train ticket you book and redeem them for free rides, upgrades, and more.
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Priority boarding and seating
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Exclusive discounts on train passes
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Complimentary lounge access
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Earn points for every ticket booked
                </li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Bus Loyalty</h3>
              <p className="text-muted-foreground">
                Earn points for every bus ticket you book and redeem them for free rides, upgrades, and more.
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Priority boarding and seating
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Exclusive discounts on bus passes
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Complimentary snacks and drinks
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Earn points for every ticket booked
                </li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Flight Loyalty</h3>
              <p className="text-muted-foreground">
                Earn points for every flight ticket you book and redeem them for free flights, upgrades, and more.
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Priority boarding and seating
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Exclusive discounts on flight packages
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Complimentary lounge access
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Earn points for every ticket booked
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckIcon(props:any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
