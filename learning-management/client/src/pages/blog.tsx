import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function Blog() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-muted py-6 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-12">
            <div>
              <img
                src="/blog.jpg"
                alt="Blog post cover image"
                width="800"
                height="400"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "800/400", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Mastering React: A Comprehensive Guide for Developers
                </h1>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src="/blog.jpg" alt="Author avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span>John Doe</span>
                  </div>
                  <span>Published on May 15, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12">
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <h2>Introduction to React</h2>
            <p>
              React is a popular JavaScript library for building user
              interfaces. It was developed and is maintained by Facebook, and
              has become one of the most widely used front-end frameworks in the
              web development industry.
            </p>
            <p>
              React's core principles are based on the concept of components,
              which are reusable building blocks that encapsulate both the
              structure and the behavior of a user interface. By breaking down
              the UI into smaller, manageable pieces, React makes it easier to
              develop, maintain, and test web applications.
            </p>
            <h2>Getting Started with React</h2>
            <p>
              To get started with React, you'll need to have a basic
              understanding of JavaScript and HTML. React uses a syntax called
              JSX, which allows you to write HTML-like code within your
              JavaScript files. This makes it easier to visualize and work with
              the UI components.
            </p>
            <p>
              The first step is to set up a new React project. You can do this
              by using a tool like Create React App, which provides a
              pre-configured development environment with all the necessary
              dependencies and build tools.
            </p>
            <h2>Core Concepts of React</h2>
            <p>
              Some of the core concepts of React that you'll need to understand
              include:
            </p>
            <ul>
              <li>
                Components: The building blocks of a React application, which
                can be functional or class-based.
              </li>
              <li>
                State: The internal data of a component that determines its
                behavior and appearance.
              </li>
              <li>
                Props: The data that is passed from a parent component to a
                child component.
              </li>
              <li>
                Lifecycle methods: The different stages of a component's life,
                which can be used to perform specific actions.
              </li>
              <li>
                Virtual DOM: React's efficient way of updating the actual DOM,
                which improves performance.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              React is a powerful and versatile library that has become
              essential for modern web development. By mastering the core
              concepts and best practices of React, you'll be able to build
              complex and dynamic user interfaces that provide a seamless and
              engaging experience for your users.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Search</h3>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search blog posts"
                  className="pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">
                    React
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    JavaScript
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Programming
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="flex items-center space-x-4 hover:underline"
                  >
                    <img
                      src="/recent-1.jpg"
                      alt="Recent post thumbnail"
                      width="80"
                      height="80"
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                    <div>
                      <h4 className="font-medium">
                        Exploring the Power of React Hooks
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        May 10, 2023
                      </p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center space-x-4 hover:underline"
                  >
                    <img
                      src="/recent-2.jpg"
                      alt="Recent post thumbnail"
                      width="80"
                      height="80"
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                    <div>
                      <h4 className="font-medium">
                        Optimizing React Performance: Best Practices
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        May 5, 2023
                      </p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center space-x-4 hover:underline"
                  >
                    <img
                      src="/recent-3.jpg"
                      alt="Recent post thumbnail"
                      width="80"
                      height="80"
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                    <div>
                      <h4 className="font-medium">
                        State Management in React: Exploring the Options
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        April 28, 2023
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="hover:bg-secondary/50">
                  React
                </Badge>
                <Badge variant="secondary" className="hover:bg-secondary/50">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="hover:bg-secondary/50">
                  Web Development
                </Badge>
                <Badge variant="secondary" className="hover:bg-secondary/50">
                  Programming
                </Badge>
                <Badge variant="secondary" className="hover:bg-secondary/50">
                  Tutorials
                </Badge>
                <Badge variant="secondary" className="hover:bg-secondary/50">
                  Best Practices
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent>
                <img
                  src="/Articles-1.jpg"
                  alt="Related article thumbnail"
                  width="300"
                  height="200"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "300/200", objectFit: "cover" }}
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-medium">
                    Exploring the Power of React Hooks
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Discover how React Hooks can simplify your code and improve
                    your development workflow.
                  </p>
                  <Link to="/" className="text-primary hover:underline">
                    Read More
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <img
                  src="/Articles-2.jpg"
                  alt="Related article thumbnail"
                  width="300"
                  height="200"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "300/200", objectFit: "cover" }}
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-medium">
                    Optimizing React Performance: Best Practices
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Learn how to optimize your React applications for maximum
                    performance and efficiency.
                  </p>
                  <Link to="/" className="text-primary hover:underline">
                    Read More
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <img
                  src="/Articles-3.jpg"
                  alt="Related article thumbnail"
                  width="300"
                  height="200"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "300/200", objectFit: "cover" }}
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-medium">
                    State Management in React: Exploring the Options
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Discover the different state management solutions available
                    for your React applications.
                  </p>
                  <Link to="/" className="text-primary hover:underline">
                    Read More
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-muted py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
          <p>
            &copy; 2024 Your Learning Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
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
