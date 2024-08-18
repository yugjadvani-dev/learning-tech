import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export function Pricing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                FitTrack - Your Fitness Companion
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Stay motivated and achieve your fitness goals with our
                comprehensive Fitness Tracker app.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Pricing
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Choose the plan that best suits your fitness needs and budget.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-6">
          <Card className="bg-card text-card-foreground shadow-sm">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>Get started with the basics.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Activity Tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Step Counter
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Sleep Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <XIcon className="h-4 w-4 fill-muted-foreground" />
                  Heart Rate Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <XIcon className="h-4 w-4 fill-muted-foreground" />
                  Workout Routines
                </li>
              </ul>
              <div className="flex flex-col items-start gap-2">
                <div className="text-4xl font-bold">Free</div>
                <Link
                  to="/"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Sign Up
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground shadow-sm">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>
                Unlock advanced fitness features.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Activity Tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Step Counter
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Sleep Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Heart Rate Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Workout Routines
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Personalized Coaching
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Progress Tracking
                </li>
              </ul>
              <div className="flex flex-col items-start gap-2">
                <div className="text-4xl font-bold">$9.99/mo</div>
                <Link
                  to="/"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Subscribe
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground shadow-sm">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                Tailored solutions for businesses.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Activity Tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Step Counter
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Sleep Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Heart Rate Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Workout Routines
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Personalized Coaching
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Progress Tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Custom Branding
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Enterprise-grade Security
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  Dedicated Account Manager
                </li>
              </ul>
              <div className="flex flex-col items-start gap-2">
                <div className="text-4xl font-bold">Contact Us</div>
                <Link
                  to="/"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Get a Quote
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
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

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
