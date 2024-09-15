import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export function FeaturedTopic() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col justify-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  Featured Topic
                </div>
                <h1 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Mastering React Hooks
                </h1>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Dive deep into the powerful world of React Hooks and learn how
                  to build dynamic, efficient, and scalable web applications.
                </p>
                <div className="mt-6 flex gap-4">
                  <Link
                    to="/"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Explore Topic
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    View Syllabus
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="/Mastering-React-Hooks.jpg"
                  width="600"
                  height="400"
                  alt="Featured Topic"
                  className="mx-auto w-full max-w-[500px] rounded-xl object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tighter">
                Related Content
              </h2>
              <Link
                to="/"
                className="text-sm font-medium text-primary hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <img
                  src="/Related-Content-1.jpg"
                  width="400"
                  height="225"
                  alt="React Hooks Tutorial"
                  className="rounded-t-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">
                    React Hooks Tutorial: Building a Todo App
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Learn how to use React Hooks to build a simple Todo app from
                    scratch.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <PlayIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      Watch Video
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/Related-Content-2.jpg"
                  width="400"
                  height="225"
                  alt="React Hooks Cheatsheet"
                  className="rounded-t-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">
                    React Hooks Cheatsheet: Essential Hooks and Examples
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Quick reference guide to the most commonly used React Hooks.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <FileIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      Download Cheatsheet
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/Related-Content-3.jpg"
                  width="400"
                  height="225"
                  alt="React Hooks Best Practices"
                  className="rounded-t-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">
                    React Hooks Best Practices: Optimizing Performance and
                    Maintainability
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Discover the best practices for using React Hooks to improve
                    your application's performance and scalability.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <BookIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      Read Article
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/Related-Content-4.jpg"
                  width="400"
                  height="225"
                  alt="React Hooks Advanced Patterns"
                  className="rounded-t-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">
                    React Hooks Advanced Patterns: Custom Hooks and Composition
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Explore advanced techniques for building reusable and
                    composable React components with custom Hooks.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <BookIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      Read Article
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 md:gap-12">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-tighter">
                    Supplementary Resources
                  </h2>
                  <Link
                    to="/"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    View All
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card>
                    <img
                      src="/Supplementary-Resources-1.jpg"
                      width="400"
                      height="225"
                      alt="React Hooks Documentation"
                      className="rounded-t-md object-cover"
                      style={{ aspectRatio: "400/225", objectFit: "cover" }}
                    />
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold">
                        React Hooks Documentation
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Official documentation for React Hooks with detailed
                        explanations and examples.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <BookIcon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          Read Documentation
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <img
                      src="/Supplementary-Resources-1.jpg"
                      width="400"
                      height="225"
                      alt="React Hooks Community Resources"
                      className="rounded-t-md object-cover"
                      style={{ aspectRatio: "400/225", objectFit: "cover" }}
                    />
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold">
                        React Hooks Community Resources
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Curated collection of blog posts, tutorials, and
                        discussions from the React community.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <LinkIcon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          Explore Resources
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="rounded-md border bg-background p-6">
                <h3 className="text-lg font-semibold">Explore by Category</h3>
                <div className="mt-4 grid gap-2">
                  <Link
                    to="/"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50"
                  >
                    <span>React Fundamentals</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50"
                  >
                    <span>React Hooks</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50"
                  >
                    <span>React State Management</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50"
                  >
                    <span>React Performance</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-between rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50"
                  >
                    <span>React Testing</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </div>
                <Separator className="my-6" />
                <h3 className="text-lg font-semibold">Filter by Tag</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/50"
                  >
                    Hooks
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/50"
                  >
                    Performance
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/50"
                  >
                    State Management
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/50"
                  >
                    Testing
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/50"
                  >
                    Fundamentals
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BookIcon(props: any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function FileIcon(props: any) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function LinkIcon(props: any) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function PlayIcon(props: any) {
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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
