import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
        <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                About Our Movie Review Site
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We are a team of passionate movie enthusiasts who love to share
                our insights and reviews with the world. Our goal is to help you
                discover the best films, whether you're a casual viewer or a
                cinephile.
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Join Our Community
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/movie-rating.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet Our Team
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of movie experts is dedicated to providing you with the
                best reviews and insights.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-4">
              <Avatar className="mx-auto">
                <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-bold">John Doe</h3>
                <p className="text-sm text-muted-foreground">Lead Reviewer</p>
                <p className="text-sm text-muted-foreground">
                  John is a seasoned movie critic with over 10 years of
                  experience. He has a deep passion for cinema and loves to
                  share his insights with our readers.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <Avatar className="mx-auto">
                <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-bold">Jane Smith</h3>
                <p className="text-sm text-muted-foreground">Senior Reviewer</p>
                <p className="text-sm text-muted-foreground">
                  Jane is a passionate film enthusiast who loves to dive deep
                  into the art of storytelling. She brings a unique perspective
                  to our reviews.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <Avatar className="mx-auto">
                <AvatarImage
                  src="/placeholder-user.jpg"
                  alt="Michael Johnson"
                />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-bold">Michael Johnson</h3>
                <p className="text-sm text-muted-foreground">Contributor</p>
                <p className="text-sm text-muted-foreground">
                  Michael is a cinephile with a deep knowledge of film history
                  and a keen eye for detail. He contributes unique insights to
                  our reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Movie Review Site. All rights reserved.
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
