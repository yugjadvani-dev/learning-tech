import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export function Stories() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme LMS</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Courses
          </Link>
          <Link
            to="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Instructors
          </Link>
          <Link
            to="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Organizations
          </Link>
          <Link
            to="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Stories
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Success Story"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Student Success
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    How Acme LMS Helped Jane Achieve Her Educational Goals
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    "Acme LMS has been a game-changer for me. The intuitive\n
                    platform and comprehensive course offerings have\n empowered
                    me to learn at my own pace and achieve my\n educational
                    dreams."
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      to="/"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Hear from Our Satisfied Users
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how Acme LMS has transformed the learning experiences
                  of students, instructors, and organizations across the globe.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <Card className="border-0 shadow-none">
                <CardContent className="flex flex-col items-start gap-2">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="225"
                    alt="Success Story"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">
                      Empowering Student Success
                    </h3>
                    <p className="text-muted-foreground">
                      Learn how Acme LMS helped Jane achieve her educational
                      goals and unlock new opportunities.
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardContent className="flex flex-col items-start gap-2">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="225"
                    alt="Success Story"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">
                      Transforming Instructor Experiences
                    </h3>
                    <p className="text-muted-foreground">
                      Discover how Acme LMS empowered Sarah to deliver engaging
                      and effective online courses.
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardContent className="flex flex-col items-start gap-2">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="225"
                    alt="Success Story"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">
                      Elevating Organizational Learning
                    </h3>
                    <p className="text-muted-foreground">
                      Learn how Acme LMS helped Acme Inc streamline their
                      training and development programs.
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardContent className="flex flex-col items-start gap-2">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="225"
                    alt="Success Story"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">
                      Empowering Student Success
                    </h3>
                    <p className="text-muted-foreground">
                      Learn how Acme LMS helped Jane achieve her educational
                      goals and unlock new opportunities.
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardContent className="flex flex-col items-start gap-2">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="225"
                    alt="Success Story"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">
                      Transforming Instructor Experiences
                    </h3>
                    <p className="text-muted-foreground">
                      Discover how Acme LMS empowered Sarah to deliver engaging
                      and effective online courses.
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardContent className="flex flex-col items-start gap-2">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="225"
                    alt="Success Story"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">
                      Elevating Organizational Learning
                    </h3>
                    <p className="text-muted-foreground">
                      Learn how Acme LMS helped Acme Inc streamline their
                      training and development programs.
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="inline-flex items-center gap-2"
                  >
                    Filter by
                    <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <UserIcon className="h-4 w-4 mr-2" />
                    Student
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SchoolIcon className="h-4 w-4 mr-2" />
                    Instructor
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BuildingIcon className="h-4 w-4 mr-2" />
                    Organization
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                to="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Submit Your Story
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme LMS. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link to="/" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BuildingIcon(props: any) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function ChevronDownIcon(props: any) {
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
      <path d="m6 9 6 6 6-6" />
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

function SchoolIcon(props: any) {
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
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
