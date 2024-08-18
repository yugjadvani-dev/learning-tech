import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col items-start space-y-4">
                <div className="space-y-2">
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Take Control of Your Fitness Journey
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Our fitness tracker app helps you stay motivated,
                    accountable, and on track to reach your health and wellness
                    goals.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link
                    to="/"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <img
                src="/home-gym.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Core Values
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At the heart of our fitness tracker app are three core values
                  that guide everything we do.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">Accountability</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our app helps you stay on track and accountable to your
                  fitness goals.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <BoltIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">Motivation</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We provide the tools and support to keep you motivated and
                  inspired.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <GitGraphIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">Progress</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Track your progress and celebrate your achievements along the
                  way.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                About Our Fitness Tracker
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our fitness tracker app is designed to help you reach your
                health and wellness goals. Developed by a team of fitness
                enthusiasts and tech experts, our app provides the tools and
                support you need to stay motivated and on track.
              </p>
              <div className="flex gap-4 lg:justify-start">
                <Link
                  to="/"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src="/fitness-tracker.jpg"
              width="550"
              height="310"
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Customers Say
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from real people who have used our fitness tracker app to
                reach their goals.
              </p>
            </div>
            <Carousel className="w-full max-w-3xl">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-4 rounded-lg bg-muted text-muted-foreground">
                    <blockquote className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center">
                          JD
                        </div>
                        <div>
                          <div className="font-bold">John Doe</div>
                          <div className="text-sm">Fitness Enthusiast</div>
                        </div>
                      </div>
                      <p className="text-lg">
                        "This app has been a game-changer for my fitness
                        journey. The accountability and progress tracking
                        features have kept me motivated and on track."
                      </p>
                    </blockquote>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-4 rounded-lg bg-muted text-muted-foreground">
                    <blockquote className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center">
                          SM
                        </div>
                        <div>
                          <div className="font-bold">Sarah Miller</div>
                          <div className="text-sm">Wellness Coach</div>
                        </div>
                      </div>
                      <p className="text-lg">
                        "I've been using this app with my clients and the
                        results have been incredible. The data-driven insights
                        and personalized recommendations are invaluable."
                      </p>
                    </blockquote>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-4 rounded-lg bg-muted text-muted-foreground">
                    <blockquote className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center">
                          TW
                        </div>
                        <div>
                          <div className="font-bold">Tom Wilson</div>
                          <div className="text-sm">Fitness Enthusiast</div>
                        </div>
                      </div>
                      <p className="text-lg">
                        "I've tried a lot of fitness apps, but this one is by
                        far the best. The user-friendly interface and
                        comprehensive features make it a must-have for anyone
                        serious about their health."
                      </p>
                    </blockquote>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}

function BoltIcon(props: any) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function CheckIcon(props: any) {
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
  );
}

function GitGraphIcon(props: any) {
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
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
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
