import { Link } from "lucide-react"

export function PressRoom() {
  return (
    <div className="bg-background text-foreground">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <MountainIcon className="h-12 w-12" />
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Press Room</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Stay up-to-date with the latest news and press releases from our movie rating website.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-lg">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">View Press Release</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt="Press Release Image"
                width={400}
                height={300}
                className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">New Movie Rating System Launched</h3>
                <p className="text-sm text-muted-foreground">August 15, 2024</p>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  Our website has launched a new and improved movie rating system to help users make informed decisions
                  about what to watch.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">View Press Release</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt="Press Release Image"
                width={400}
                height={300}
                className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">Website Wins Best Movie Rating Platform Award</h3>
                <p className="text-sm text-muted-foreground">July 1, 2024</p>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  Our website has been recognized as the best movie rating platform at the annual industry awards
                  ceremony.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">View Press Release</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt="Press Release Image"
                width={400}
                height={300}
                className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">New Feature: Personalized Movie Recommendations</h3>
                <p className="text-sm text-muted-foreground">June 15, 2024</p>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  Our website has launched a new feature that provides personalized movie recommendations based on your
                  viewing history and preferences.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">View Press Release</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt="Press Release Image"
                width={400}
                height={300}
                className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">Website Expands to International Markets</h3>
                <p className="text-sm text-muted-foreground">May 1, 2024</p>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  Our movie rating website has expanded its services to international markets, providing users around
                  the world with access to our comprehensive movie reviews and ratings.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            
            >
              View More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function MountainIcon(props:any) {
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
  )
}
