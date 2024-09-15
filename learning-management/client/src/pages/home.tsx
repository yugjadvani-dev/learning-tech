import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Learning Management System to Smoothly
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Empower your organization with a comprehensive learning
                management system that streamlines training, boosts engagement,
                and drives measurable results.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="/"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Get Started
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
              src="/learning1.jpg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <img
              src="/learning2.jpg"
              width="550"
              height="550"
              alt="Learning Focused"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Learning focused on your goals
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our personalized learning experience helps you achieve your
                goals. With adaptive learning, goal-setting, and progress
                tracking, you'll stay motivated and on track.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="/"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Explore Features
                </Link>
                <Link
                  to="/"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Accelerate growth — for you or your organization
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our enterprise-level features, like team management, reporting,
                and integration capabilities, help you scale your learning
                initiatives and drive measurable results.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="/"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Explore Enterprise
                </Link>
                <Link
                  to="/"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <img
              src="/learning3.jpg"
              width="550"
              height="550"
              alt="Enterprise"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                See what others are achieving through learning
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our customers about how our learning management system
                has helped them achieve their goals.
              </p>
            </div>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card className="bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-medium">John Doe</h4>
                      <p className="text-xs text-muted-foreground">
                        CEO, Acme Inc.
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The learning management system has been a game-changer
                    for\n our organization. It has helped us streamline our
                    training\n programs and drive measurable results."
                  </p>
                </div>
              </Card>
              <Card className="bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-medium">Jane Smith</h4>
                      <p className="text-xs text-muted-foreground">
                        Learning & Development Manager, Acme Inc.
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The personalized learning experience has been a huge hit\n
                    with our employees. They're more engaged and motivated
                    than\n ever before."
                  </p>
                </div>
              </Card>
              <Card className="bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-medium">Michael Johnson</h4>
                      <p className="text-xs text-muted-foreground">
                        Training Coordinator, Acme Inc.
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The reporting and analytics capabilities have been\n
                    invaluable in helping us track the progress and impact of\n
                    our learning initiatives."
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Top trends for the future of work
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay ahead of the curve with our insights on the latest trends
                shaping the future of corporate learning.
              </p>
            </div>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card className="bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <MicroscopeIcon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">Microlearning</h3>
                  <p className="text-muted-foreground">
                    Bite-sized, on-demand learning modules that fit seamlessly
                    into the flow of work.
                  </p>
                </div>
              </Card>
              <Card className="bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <VibrateIcon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">Virtual Reality</h3>
                  <p className="text-muted-foreground">
                    Immersive learning experiences that transport employees to
                    new environments for hands-on training.
                  </p>
                </div>
              </Card>
              <Card className="bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <XIcon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">
                    AI-powered Personalization
                  </h3>
                  <p className="text-muted-foreground">
                    Intelligent algorithms that tailor learning content and
                    recommendations to individual needs and preferences.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Trending Now
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our most popular and newest learning content.
              </p>
            </div>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card className="bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <img
                    src="/learning4.jpg"
                    width="300"
                    height="200"
                    alt="Course Thumbnail"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold">Introduction to React</h3>
                  <p className="text-muted-foreground">
                    Learn the fundamentals of React, the popular JavaScript
                    library for building user interfaces.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ClockIcon className="h-4 w-4" />
                      <span>4 hours</span>
                    </div>
                    <Button variant="link">Enroll</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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

function VibrateIcon(props: any) {
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
      <path d="m2 8 2 2-2 2 2 2-2 2" />
      <path d="m22 8-2 2 2 2-2 2 2 2" />
      <rect width="8" height="14" x="8" y="5" rx="1" />
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
