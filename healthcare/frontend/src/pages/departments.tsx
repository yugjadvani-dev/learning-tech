import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export function Departments() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6 text-center text-primary-foreground">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore Our Departments
            </h1>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
              Discover the wide range of specialized healthcare services offered
              by our renowned healthcare system.
            </p>
          </div>
        </div>
      </section>
      <div className="container grid grid-cols-[200px_1fr] gap-8 px-4 md:px-6 py-12 md:py-24">
        <nav className="space-y-2">
          <h3 className="text-lg font-semibold">Filter by Category</h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus-visible:bg-muted focus-visible:text-muted-foreground"
              >
                <HeartPulseIcon className="w-5 h-5" />
                <span>Medical</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus-visible:bg-muted focus-visible:text-muted-foreground"
              >
                <MicroscopeIcon className="w-5 h-5" />
                <span>Diagnostic</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus-visible:bg-muted focus-visible:text-muted-foreground"
              >
                <RecycleIcon className="w-5 h-5" />
                <span>Rehabilitation</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus-visible:bg-muted focus-visible:text-muted-foreground"
              >
                <HeartIcon className="w-5 h-5" />
                <span>Wellness</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="bg-muted/10 p-4">
              <HeartPulseIcon className="w-8 h-8 text-primary" />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Cardiology</h3>
              <p className="text-muted-foreground">
                Our cardiology department provides comprehensive care for all
                heart-related conditions, from preventive care to advanced
                treatments.
              </p>
            </CardContent>
            <CardFooter className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="bg-muted/10 p-4">
              <MicroscopeIcon className="w-8 h-8 text-primary" />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Radiology</h3>
              <p className="text-muted-foreground">
                Our state-of-the-art radiology department offers a wide range of
                imaging services, from X-rays to advanced MRI and CT scans.
              </p>
            </CardContent>
            <CardFooter className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="bg-muted/10 p-4">
              <RecycleIcon className="w-8 h-8 text-primary" />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Physical Therapy</h3>
              <p className="text-muted-foreground">
                Our experienced physical therapy team helps patients regain
                strength, mobility, and independence through personalized
                rehabilitation programs.
              </p>
            </CardContent>
            <CardFooter className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="bg-muted/10 p-4">
              <HeartIcon className="w-8 h-8 text-primary" />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Wellness Center</h3>
              <p className="text-muted-foreground">
                Our Wellness Center offers a range of services to help you
                achieve your health and fitness goals, from nutrition counseling
                to yoga classes.
              </p>
            </CardContent>
            <CardFooter className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="bg-muted/10 p-4">
              <HeartPulseIcon className="w-8 h-8 text-primary" />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Oncology</h3>
              <p className="text-muted-foreground">
                Our oncology department provides comprehensive cancer care, from
                early detection to advanced treatments and supportive services.
              </p>
            </CardContent>
            <CardFooter className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="bg-muted/10 p-4">
              <MicroscopeIcon className="w-8 h-8 text-primary" />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Laboratory</h3>
              <p className="text-muted-foreground">
                Our state-of-the-art laboratory provides a wide range of
                diagnostic tests and services to support the healthcare needs of
                our community.
              </p>
            </CardContent>
            <CardFooter className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
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

function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function HeartPulseIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}

function MicroscopeIcon(props: any) {
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
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function RecycleIcon(props: any) {
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
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  );
}