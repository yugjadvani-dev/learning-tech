import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <FilmIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">MovieRatings</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Movies
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary">
              TV Shows
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Reviews
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <UserIcon className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </div>
        </div>
      </header> */}
      <div className="container flex flex-1 gap-8 px-4 py-8 md:px-6">
        <aside className="hidden w-64 flex-col gap-6 md:flex">
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Filters</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="genre">
                <AccordionTrigger className="text-base">Genre</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="genre-action" /> Action
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="genre-comedy" /> Comedy
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="genre-drama" /> Drama
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="genre-horror" /> Horror
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="genre-sci-fi" /> Sci-Fi
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="rating">
                <AccordionTrigger className="text-base">
                  Rating
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="rating-5" /> 5 stars
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="rating-4" /> 4 stars
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="rating-3" /> 3 stars
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="rating-2" /> 2 stars
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="rating-1" /> 1 star
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="year">
                <AccordionTrigger className="text-base">Year</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="year-2022" /> 2022
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="year-2021" /> 2021
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="year-2020" /> 2020
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="year-2019" /> 2019
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="year-2018" /> 2018
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Search</h3>
            <Input
              type="text"
              placeholder="Search movies..."
              className="w-full"
            />
          </div>
        </aside>
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative group">
              <Link to="/" className="absolute inset-0 z-10">
                <span className="sr-only">View Movie</span>
              </Link>
              <img
                src="/the-shawshank-redemption.jpg"
                alt="Movie Poster"
                width={300}
                height={450}
                className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
              />
              <div className="flex flex-col items-start gap-2 p-4">
                <h3 className="text-lg font-semibold">
                  The Shawshank Redemption
                </h3>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-medium">9.2</span>
                </div>
                <Button size="sm" className="mt-auto">
                  Rate
                </Button>
              </div>
            </div>
            <div className="relative group">
              <Link to="/" className="absolute inset-0 z-10">
                <span className="sr-only">View Movie</span>
              </Link>
              <img
                src="/the-godfather.jpg"
                alt="Movie Poster"
                width={300}
                height={450}
                className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
              />
              <div className="flex flex-col items-start gap-2 p-4">
                <h3 className="text-lg font-semibold">The Godfather</h3>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-medium">9.1</span>
                </div>
                <Button size="sm" className="mt-auto">
                  Rate
                </Button>
              </div>
            </div>
            <div className="relative group">
              <Link to="/" className="absolute inset-0 z-10">
                <span className="sr-only">View Movie</span>
              </Link>
              <img
                src="movie-2.jpg"
                alt="Movie Poster"
                width={300}
                height={450}
                className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
              />
              <div className="flex flex-col items-start gap-2 p-4">
                <h3 className="text-lg font-semibold">The Dark Knight</h3>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-medium">9.0</span>
                </div>
                <Button size="sm" className="mt-auto">
                  Rate
                </Button>
              </div>
            </div>
            <div className="relative group">
              <Link to="/" className="absolute inset-0 z-10">
                <span className="sr-only">View Movie</span>
              </Link>
              <img
                src="/movie-1.jpg"
                alt="Movie Poster"
                width={300}
                height={450}
                className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
              />
              <div className="flex flex-col items-start gap-2 p-4">
                <h3 className="text-lg font-semibold">Inception</h3>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-medium">8.8</span>
                </div>
                <Button size="sm" className="mt-auto">
                  Rate
                </Button>
              </div>
            </div>
            <div className="relative group">
              <Link to="/" className="absolute inset-0 z-10">
                <span className="sr-only">View Movie</span>
              </Link>
              <img
                src="/pulp-fiction.jpeg"
                alt="Movie Poster"
                width={300}
                height={450}
                className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
              />
              <div className="flex flex-col items-start gap-2 p-4">
                <h3 className="text-lg font-semibold">Pulp Fiction</h3>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-medium">8.9</span>
                </div>
                <Button size="sm" className="mt-auto">
                  Rate
                </Button>
              </div>
            </div>
            <div className="relative group">
              <Link to="/" className="absolute inset-0 z-10">
                <span className="sr-only">View Movie</span>
              </Link>
              <img
                src="/lord-of-the-ring.jpg"
                alt="Movie Poster"
                width={300}
                height={450}
                className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
              />
              <div className="flex flex-col items-start gap-2 p-4">
                <h3 className="text-lg font-semibold">
                  The Lord of the Rings: The Fellowship of the Ring
                </h3>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-medium">8.8</span>
                </div>
                <Button size="sm" className="mt-auto">
                  Rate
                </Button>
              </div>
            </div>
            <div className="relative group">
              <Link to="/" className="absolute inset-0 z-10">
                <span className="sr-only">View Movie</span>
              </Link>
              <img
                src="/forrest-gump.jpg"
                alt="Movie Poster"
                width={300}
                height={450}
                className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
              />
              <div className="flex flex-col items-start gap-2 p-4">
                <h3 className="text-lg font-semibold">Forrest Gump</h3>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-medium">8.8</span>
                </div>
                <Button size="sm" className="mt-auto">
                  Rate
                </Button>
              </div>
            </div>
            <div className="relative group">
              <Link to="/" className="absolute inset-0 z-10">
                <span className="sr-only">View Movie</span>
              </Link>
              <img
                src="/silence-of-the-lambs.jpg"
                alt="Movie Poster"
                width={300}
                height={450}
                className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
              />
              <div className="flex flex-col items-start gap-2 p-4">
                <h3 className="text-lg font-semibold">
                  The Silence of the Lambs
                </h3>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-medium">8.6</span>
                </div>
                <Button size="sm" className="mt-auto">
                  Rate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilmIcon(props: any) {
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

function StarIcon(props: any) {
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
