import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

export function Events() {
  return (
    <div className="flex flex-col space-y-12">
      <section className="bg-[#f5f5f5] py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Featured Event
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Mastering React: A Deep Dive
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Join us for an in-depth exploration of React, the popular
                JavaScript library for building user interfaces. Learn
                cutting-edge techniques and best practices from industry
                experts.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="/"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Register Now
                </Link>
                <Link
                  to="/"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Featured Event"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Upcoming Events
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Sort
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Webinar
                  </div>
                  <h3 className="text-xl font-bold">
                    Mastering Responsive Design with CSS
                  </h3>
                  <p className="text-muted-foreground">
                    June 15, 2023 | 10:00 AM - 12:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    Learn how to build responsive and mobile-friendly websites
                    using the latest CSS techniques.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    to="/"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Register
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Workshop
                  </div>
                  <h3 className="text-xl font-bold">
                    Building Scalable React Applications
                  </h3>
                  <p className="text-muted-foreground">
                    July 1, 2023 | 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    Explore advanced React patterns and techniques to build
                    high-performance, scalable web applications.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    to="/"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Register
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Conference
                  </div>
                  <h3 className="text-xl font-bold">
                    The Future of Frontend Development
                  </h3>
                  <p className="text-muted-foreground">
                    August 10-12, 2023 | 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    Explore the latest trends, technologies, and best practices
                    in frontend development.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    to="/"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Register
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link
                to="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View All Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Event Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/"
                className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <WebcamIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Webinars</span>
              </Link>
              <Link
                to="/"
                className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <WorkflowIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Workshops</span>
              </Link>
              <Link
                to="/"
                className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <PresentationIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Conferences</span>
              </Link>
              <Link
                to="/"
                className="flex flex-col items-center justify-center gap-2 rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <GroupIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Meetups</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What We Do at Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-start gap-2">
                <NetworkIcon className="h-8 w-8" />
                <h3 className="text-xl font-bold">Networking</h3>
                <p className="text-muted-foreground">
                  Connect with industry peers, experts, and potential
                  collaborators at our events.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <LogInIcon className="h-8 w-8" />
                <h3 className="text-xl font-bold">Expert-led Sessions</h3>
                <p className="text-muted-foreground">
                  Learn from industry leaders and subject matter experts through
                  interactive sessions and workshops.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <GroupIcon className="h-8 w-8" />
                <h3 className="text-xl font-bold">Community Building</h3>
                <p className="text-muted-foreground">
                  Engage with a vibrant community of professionals and
                  enthusiasts who share your interests and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function GroupIcon(props: any) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function LogInIcon(props: any) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function NetworkIcon(props: any) {
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
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function PresentationIcon(props: any) {
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
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </svg>
  );
}

function WebcamIcon(props: any) {
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
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  );
}

function WorkflowIcon(props: any) {
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
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  );
}
