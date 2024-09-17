import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

export function Resources() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Resources &amp; Downloads
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our collection of whitepapers, case studies, and
                brochures to learn more about our services and expertise.
              </p>
            </div>
            <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    The Future of Management Consulting
                  </h3>
                  <p className="text-muted-foreground">
                    Discover the latest trends and insights shaping the
                    management consulting industry.
                  </p>
                </div>
                <Button variant="outline">Download Whitepaper</Button>
              </Card>
              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Varni Consultancy Case Study: Transforming a Retail Giant
                  </h3>
                  <p className="text-muted-foreground">
                    Learn how we helped a leading retailer streamline operations
                    and drive growth.
                  </p>
                </div>
                <Button variant="outline">Download Case Study</Button>
              </Card>
              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Varni Consultancy Brochure
                  </h3>
                  <p className="text-muted-foreground">
                    Get an overview of our services, expertise, and
                    capabilities.
                  </p>
                </div>
                <Button variant="outline">Download Brochure</Button>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Contact Us
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get in touch with our team to learn more about our services
                    and how we can help your business.
                  </p>
                </div>
                <form className="grid gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input placeholder="Name" id="name" required />
                    <Input
                      placeholder="Email"
                      id="email"
                      type="email"
                      required
                    />
                  </div>
                  <Input placeholder="Phone" id="phone" />
                  <Textarea placeholder="Message" id="message" required />
                  <Button type="submit" className="w-full sm:w-auto">
                    Submit
                  </Button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Find Us
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Visit our office or reach out to us through the following
                    channels.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div className="space-y-1">
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-muted-foreground">
                        123 Main Street, Anytown USA
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 555-5555</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@varnicons.com</p>
                  </div>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src="/resources.jpg"
                      alt="Map"
                      width="600"
                      height="400"
                      className="object-cover"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Varni Consultancy
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Varni Consultancy is a leading management consulting firm that
                helps organizations navigate complex challenges and unlock their
                full potential. With a team of seasoned experts, we deliver
                tailored solutions that drive sustainable growth and
                transformation.
              </p>
            </div>
            <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <TargetIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Focused on Results</h3>
                <p className="text-muted-foreground">
                  We are committed to delivering tangible, measurable results
                  that create lasting value for our clients.
                </p>
              </div>
              <div className="space-y-4">
                <BriefcaseIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Depth of Expertise</h3>
                <p className="text-muted-foreground">
                  Our team of experts brings a wealth of industry knowledge and
                  functional expertise to every engagement.
                </p>
              </div>
              <div className="space-y-4">
                <UsersIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">
                  Collaborative Approach
                </h3>
                <p className="text-muted-foreground">
                  We work closely with our clients to understand their unique
                  challenges and co-create tailored solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Varni Consultancy offers a comprehensive suite of services to
                help organizations achieve their strategic goals.
              </p>
            </div>
            <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Management Consulting
                  </h3>
                  <p className="text-muted-foreground">
                    Our management consulting services help organizations
                    optimize operations, improve efficiency, and drive
                    sustainable growth.
                  </p>
                </div>
                <Link to="/" className="inline-flex items-center gap-2">
                  Learn more <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Card>
              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Strategy Development
                  </h3>
                  <p className="text-muted-foreground">
                    We work with clients to develop and implement comprehensive
                    strategies that align with their business objectives.
                  </p>
                </div>
                <Link to="/" className="inline-flex items-center gap-2">
                  Learn more <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Card>
              <Card className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Business Transformation
                  </h3>
                  <p className="text-muted-foreground">
                    Our business transformation services help organizations
                    navigate change, adapt to new market conditions, and achieve
                    their goals.
                  </p>
                </div>
                <Link to="/" className="inline-flex items-center gap-2">
                  Learn more <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BriefcaseIcon(props: any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
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

function TargetIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
