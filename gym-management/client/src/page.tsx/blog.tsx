import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import { Link } from "react-router-dom";

export function Blog() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-[3fr_1fr] md:gap-12 md:px-6 md:py-20">
        <div className="grid gap-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group">
              <CardContent className="flex flex-col gap-4">
                <img
                  src="/gym-1.jpg"
                  width={400}
                  height={250}
                  alt="Blog Post Image"
                  className="aspect-[4/3] w-full rounded-lg object-cover transition-all group-hover:scale-105"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    The Ultimate Guide to Strength Training
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    Unlock your full potential with our comprehensive guide to
                    strength training. Discover the best exercises, proper form,
                    and proven techniques to build muscle, increase power, and
                    achieve your fitness goals.
                  </p>
                </div>
                <Link
                  to="/"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group">
              <CardContent className="flex flex-col gap-4">
                <img
                  src="/gym-2.jpg"
                  width={400}
                  height={250}
                  alt="Blog Post Image"
                  className="aspect-[4/3] w-full rounded-lg object-cover transition-all group-hover:scale-105"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    The Science of Mindful Eating
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    Discover the power of mindful eating and how it can
                    transform your relationship with food. Learn techniques to
                    enhance your awareness, reduce stress, and achieve a
                    healthier, more balanced lifestyle.
                  </p>
                </div>
                <Link
                  to="/"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group">
              <CardContent className="flex flex-col gap-4">
                <img
                  src="/gym-3.jpg"
                  width={400}
                  height={250}
                  alt="Blog Post Image"
                  className="aspect-[4/3] w-full rounded-lg object-cover transition-all group-hover:scale-105"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    The Benefits of High-Intensity Interval Training
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    Discover the transformative power of high-intensity interval
                    training (HIIT) and how it can help you burn fat, build
                    endurance, and achieve your fitness goals in less time.
                  </p>
                </div>
                <Link
                  to="/"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group">
              <CardContent className="flex flex-col gap-4">
                <img
                  src="/gym-4.jpg"
                  width={400}
                  height={250}
                  alt="Blog Post Image"
                  className="aspect-[4/3] w-full rounded-lg object-cover transition-all group-hover:scale-105"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    The Importance of Proper Sleep for Fitness
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    Discover the crucial role that sleep plays in your fitness
                    journey. Learn practical tips to improve your sleep quality,
                    boost recovery, and maximize the benefits of your workouts.
                  </p>
                </div>
                <Link
                  to="/"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group">
              <CardContent className="flex flex-col gap-4">
                <img
                  src="/gym-5.jpg"
                  width={400}
                  height={250}
                  alt="Blog Post Image"
                  className="aspect-[4/3] w-full rounded-lg object-cover transition-all group-hover:scale-105"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    The Power of Nutrition for Optimal Performance
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    Discover the transformative power of proper nutrition and
                    how it can fuel your fitness journey. Learn about
                    macronutrients, micronutrients, and the best foods to
                    support your active lifestyle.
                  </p>
                </div>
                <Link
                  to="/"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="group">
              <CardContent className="flex flex-col gap-4">
                <img
                  src="/gym-6.jpg"
                  width={400}
                  height={250}
                  alt="Blog Post Image"
                  className="aspect-[4/3] w-full rounded-lg object-cover transition-all group-hover:scale-105"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold tracking-tight">
                    The Surprising Benefits of Yoga for Fitness
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    Discover the transformative power of yoga and how it can
                    complement your fitness routine. Learn about the physical,
                    mental, and spiritual benefits of this ancient practice.
                  </p>
                </div>
                <Link
                  to="/"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Pagination
              currentPage={1}
              totalPages={10}
              onPageChange={(page: any) =>
                console.log(`Navigated to page ${page}`)
              }
            />
          </div>
        </div>
        <aside className="space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Search the Blog</h2>
            <div className="relative">
              <div className="absolute inset-y-0 left-2 flex items-center pl-2 text-muted-foreground">
                <SearchIcon className="h-5 w-5" />
              </div>
              <Input
                type="search"
                placeholder="Search blog posts..."
                className="w-full rounded-md bg-background pl-10 focus:border-primary focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Blog Categories</h2>
            <div className="space-y-2">
              <Link
                to="/"
                className="block rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              >
                Fitness
              </Link>
              <Link
                to="/"
                className="block rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              >
                Nutrition
              </Link>
              <Link
                to="/"
                className="block rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              >
                Wellness
              </Link>
              <Link
                to="/"
                className="block rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              >
                Lifestyle
              </Link>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
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
