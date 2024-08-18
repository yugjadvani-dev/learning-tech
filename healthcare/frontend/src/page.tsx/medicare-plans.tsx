import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export function MedicarePlans() {
  return (
    <div className="w-full">
      <main className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Medicare Plans
            </h1>
            <p className="mt-4 text-muted-foreground">
              Medicare is a federal health insurance program for people aged 65
              or older, as well as some younger people with disabilities or
              end-stage renal disease. Explore the different plan options to
              find the coverage that's right for you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <div className="p-6">
                <h3 className="text-xl font-bold">Original Medicare</h3>
                <p className="mt-4 text-muted-foreground">
                  Original Medicare includes Part A (hospital insurance) and
                  Part B (medical insurance). It covers a wide range of
                  healthcare services, but you'll need to pay deductibles and
                  coinsurance.
                </p>
              </div>
              <div className="mt-auto border-t px-6 py-4">
                <Link
                  to="/"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </Link>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  Medicare Advantage (Part C)
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Medicare Advantage plans are offered by private insurance
                  companies and include Part A, Part B, and usually Part D
                  (prescription drug coverage). They often have lower
                  out-of-pocket costs than Original Medicare.
                </p>
              </div>
              <div className="mt-auto border-t px-6 py-4">
                <Link
                  to="/"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enroll Now
                </Link>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  Medicare Supplement (Medigap)
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Medicare Supplement plans, also known as Medigap, are sold by
                  private insurance companies to help pay for out-of-pocket
                  costs not covered by Original Medicare, such as deductibles
                  and coinsurance.
                </p>
              </div>
              <div className="mt-auto border-t px-6 py-4">
                <Link
                  to="/"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </Link>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  Medicare Part D (Prescription Drugs)
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Medicare Part D plans are offered by private insurance
                  companies to provide prescription drug coverage. They can be
                  added to Original Medicare or included in a Medicare Advantage
                  plan.
                </p>
              </div>
              <div className="mt-auto border-t px-6 py-4">
                <Link
                  to="/"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Enroll Now
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
