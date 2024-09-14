import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

export function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
        <Link to="/" className="flex items-center justify-center">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">LMS Platform</span>
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
            About
          </Link>
          <Link
            to="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet Our Team
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The talented individuals behind the LMS platform, dedicated to
                empowering learners and educators.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
              <div className="flex flex-col items-center space-y-2">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center space-y-1">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">
                    Co-Founder, CEO
                  </div>
                  <p className="text-sm text-muted-foreground">
                    John has over 15 years of experience in the e-learning
                    industry, with a passion for driving innovation and
                    improving educational outcomes.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="text-center space-y-1">
                  <div className="font-semibold">Jane Lim</div>
                  <div className="text-sm text-muted-foreground">
                    Co-Founder, CTO
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Jane is a seasoned software engineer with a deep
                    understanding of learning management systems and a
                    commitment to building scalable, user-friendly platforms.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="text-center space-y-1">
                  <div className="font-semibold">Sarah Mayer</div>
                  <div className="text-sm text-muted-foreground">
                    Head of Product
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sarah has a background in instructional design and
                    educational technology, ensuring the LMS platform delivers
                    an exceptional learning experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="text-center space-y-1">
                  <div className="font-semibold">Michael Ramirez</div>
                  <div className="text-sm text-muted-foreground">
                    Lead Developer
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Michael is an experienced full-stack developer with a strong
                    focus on building scalable and secure web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What We Do?
              </h2>
              <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The LMS platform is designed to empower learners and educators,
                providing a comprehensive suite of tools to facilitate online
                learning, manage assignments and assessments, and foster
                collaboration.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="LMS Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Online Courses</h3>
                      <p className="text-muted-foreground">
                        Create and manage engaging online courses with
                        multimedia content, interactive quizzes, and discussion
                        forums.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Assignment Management
                      </h3>
                      <p className="text-muted-foreground">
                        Streamline the assignment and assessment process with
                        features like submission tracking, grading, and
                        feedback.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Collaboration Tools</h3>
                      <p className="text-muted-foreground">
                        Foster collaboration among learners and instructors with
                        discussion forums, group projects, and real-time
                        communication tools.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Vision
              </h2>
              <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mission is to revolutionize the way people learn and teach
                by providing a cutting-edge learning management system that
                empowers learners, fosters collaboration, and drives innovation
                in the e-learning space.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
              <Link
                to="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </Link>
              <div className="flex items-center gap-2">
                <Link
                  to="/"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <FacebookIcon className="h-5 w-5" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have any questions or feedback about the LMS platform? We'd love
                to hear from you!
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 mt-8">
              <form className="flex flex-col gap-2">
                <Input
                  type="text"
                  placeholder="Name"
                  className="max-w-lg flex-1"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="max-w-lg flex-1"
                />
                <Textarea placeholder="Message" className="max-w-lg flex-1" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 LMS Platform. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link to="/" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
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

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
