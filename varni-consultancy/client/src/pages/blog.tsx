import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function Blog() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Varni Consultancy</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/" className="hover:underline">
              Services
            </Link>
            <Link to="/" className="hover:underline">
              About
            </Link>
            <Link to="/" className="hover:underline">
              Contact
            </Link>
          </nav>
          <Button variant="outline">Get a Quote</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Insights and Expertise
                </h1>
                <p className="text-muted-foreground text-lg">
                  Discover the latest insights and thought leadership from Varni
                  Consultancy.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50"
                >
                  Explore Insights
                </Link>
              </div>
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Hero Image"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <h2 className="text-2xl font-bold mb-6">Latest Insights</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <Link
                      key={i}
                      to="/"
                      className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <img
                        src="/placeholder.svg"
                        width={600}
                        height={400}
                        alt={`Blog Post ${i + 1}`}
                        className="w-full h-48 object-cover"
                        style={{ aspectRatio: "600/400", objectFit: "cover" }}
                      />
                      <div className="p-4 bg-background">
                        <h3 className="text-lg font-semibold group-hover:underline">
                          Blog Post {i + 1}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nunc
                          egestas nisl, eget aliquam nisl nisl nunc egestas
                          nisl.
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Link to="/" className="hover:underline">
                      Strategy
                    </Link>
                    <Link to="/" className="hover:underline">
                      Operations
                    </Link>
                    <Link to="/" className="hover:underline">
                      Technology
                    </Link>
                    <Link to="/" className="hover:underline">
                      Leadership
                    </Link>
                    <Link to="/" className="hover:underline">
                      Innovation
                    </Link>
                    <Link to="/" className="hover:underline">
                      Sustainability
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Search</h3>
                  <Input
                    type="text"
                    placeholder="Search insights..."
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container max-w-5xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Our Consultancy Blog</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Link
                  key={i}
                  to="/"
                  className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt={`Blog Post ${i + 1}`}
                    className="w-full h-48 object-cover"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-lg font-semibold group-hover:underline">
                      Blog Post {i + 1}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span>John Doe</span>
                      <span>•</span>
                      <span>June 15, 2023</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; 2024 Varni Consultancy</p>
          <nav className="flex items-center gap-4">
            <Link to="/" className="hover:underline">
              Privacy
            </Link>
            <Link to="/" className="hover:underline">
              Terms
            </Link>
            <Link to="/" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
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
