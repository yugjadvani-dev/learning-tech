import { Link } from "lucide-react"

export function Services() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
              Discover the Best Movies
            </h1>
            <p className="text-lg text-primary-foreground md:text-xl">
              Get personalized movie recommendations, ratings, and reviews.
            </p>
            <Link
            to="/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-start space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary-foreground rounded-full p-3">
                <StarIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Movie Reviews</h3>
              <p className="text-muted-foreground">
                Get in-depth reviews from our expert critics to help you choose the perfect movie.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary-foreground rounded-full p-3">
                <ThumbsUpIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Ratings</h3>
              <p className="text-muted-foreground">
                Discover movies with the highest ratings from our community of movie lovers.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary-foreground rounded-full p-3">
                <LinkIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Personalized Recommendations</h3>
              <p className="text-muted-foreground">
                Get tailored movie recommendations based on your viewing history and preferences.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary-foreground rounded-full p-3">
                <WatchIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Watchlists</h3>
              <p className="text-muted-foreground">
                Create and manage your own personalized watchlists to keep track of movies you want to see.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function LinkIcon(props:any) {
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
  )
}


function StarIcon(props:any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function ThumbsUpIcon(props:any) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function WatchIcon(props:any) {
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
      <circle cx="12" cy="12" r="6" />
      <polyline points="12 10 12 12 13 13" />
      <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
      <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
    </svg>
  )
}
