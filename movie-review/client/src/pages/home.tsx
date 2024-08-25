import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"

export function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-background px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center" >
          <FilmIcon className="size-6" />
          <span className="sr-only">Movie Reviews</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Reviews
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Genres
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            About
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <img
                  src="/placeholder.svg"
                  width="800"
                  height="450"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Discover the Latest Movie Reviews
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our team of expert reviewers provide in-depth analysis and honest opinions on the hottest new
                    releases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Movie Reviews</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our latest reviews of the hottest new movies.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card className="border-0 rounded-none shadow-none">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Movie Poster"
                    className="object-cover aspect-[2/3] rounded-t-lg"
                  />
                </CardContent>
                <CardFooter className="grid gap-2 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">Interstellar</div>
                    <div className="text-sm text-muted-foreground">4.5/5</div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    A mind-bending sci-fi epic that explores the depths of space and the limits of human endurance.
                  </p>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-none shadow-none">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Movie Poster"
                    className="object-cover aspect-[2/3] rounded-t-lg"
                  />
                </CardContent>
                <CardFooter className="grid gap-2 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">The Dark Knight</div>
                    <div className="text-sm text-muted-foreground">4.8/5</div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    A gritty, intense superhero thriller that redefines the genre with its complex characters and moral
                    ambiguity.
                  </p>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-none shadow-none">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Movie Poster"
                    className="object-cover aspect-[2/3] rounded-t-lg"
                  />
                </CardContent>
                <CardFooter className="grid gap-2 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">Inception</div>
                    <div className="text-sm text-muted-foreground">4.7/5</div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    A mind-bending, visually stunning exploration of the subconscious that challenges the viewer's
                    perception of reality.
                  </p>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-none shadow-none">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Movie Poster"
                    className="object-cover aspect-[2/3] rounded-t-lg"
                  />
                </CardContent>
                <CardFooter className="grid gap-2 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">Parasite</div>
                    <div className="text-sm text-muted-foreground">4.9/5</div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    A darkly comedic thriller that explores the class divide and the lengths people will go to for a
                    better life.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-5">
            <div className="col-span-1 lg:col-span-2">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Explore Movies by Genre</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our extensive collection of movie reviews across various genres.
                </p>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Link
                to="/"
                className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                
              >
                <div className="text-sm font-medium leading-none group-hover:underline">Action</div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Adrenaline-pumping thrillers and high-octane adventures.
                </div>
              </Link>
              <Link
                to="/"
                className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                
              >
                <div className="text-sm font-medium leading-none group-hover:underline">Comedy</div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Laugh-out-loud comedies that will have you in stitches.
                </div>
              </Link>
              <Link
                to="/"
                className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                
              >
                <div className="text-sm font-medium leading-none group-hover:underline">Drama</div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Emotionally-charged stories that explore the human condition.
                </div>
              </Link>
              <Link
                to="/"
                className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                
              >
                <div className="text-sm font-medium leading-none group-hover:underline">Horror</div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Spine-chilling thrillers that will keep you on the edge of your seat.
                </div>
              </Link>
              <Link
                to="/"
                className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                
              >
                <div className="text-sm font-medium leading-none group-hover:underline">Sci-Fi</div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Mind-bending tales of the future and the unknown.
                </div>
              </Link>
              <Link
                to="/"
                className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                
              >
                <div className="text-sm font-medium leading-none group-hover:underline">Romance</div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Heartwarming stories of love and relationships.
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-5">
            <div className="col-span-1 lg:col-span-2">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Find Specific Movie Reviews</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Use our search feature to find reviews for your favorite movies.
                </p>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3">
              <form className="flex gap-2">
                <Input type="text" placeholder="Search for a movie" className="max-w-lg flex-1" />
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Site</h3>
            <Link to="/" >
              Home
            </Link>
            <Link to="/" >
              Reviews
            </Link>
            <Link to="/" >
              Genres
            </Link>
            <Link to="/" >
              About
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Categories</h3>
            <Link to="/" >
              Action
            </Link>
            <Link to="/" >
              Comedy
            </Link>
            <Link to="/" >
              Drama
            </Link>
            <Link to="/" >
              Horror
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link to="/" >
              Blog
            </Link>
            <Link to="/" >
              FAQ
            </Link>
            <Link to="/" >
              Contact
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="" />
          </div>
        </div>
      </footer>
    </div>
  )
}

function FilmIcon(props:any) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  )
}
