import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export function CaseStudies() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Case Studies
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Discover how Varni Consultancy has helped our clients achieve
                their goals.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <img
                  src="/CaseStudies-1.jpg"
                  width="550"
                  height="310"
                  alt="Case Study"
                  className="aspect-video overflow-hidden rounded-t-xl object-cover"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-xl font-semibold">
                    Streamlining Operations for a Retail Giant
                  </h3>
                  <p className="text-muted-foreground">
                    Varni Consultancy helped a leading retail company optimize
                    their supply chain and logistics, resulting in a 20%
                    increase in efficiency and a 15% reduction in costs.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Read Case Study
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/CaseStudies-2.jpg"
                  width="550"
                  height="310"
                  alt="Case Study"
                  className="aspect-video overflow-hidden rounded-t-xl object-cover"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-xl font-semibold">
                    Transforming Digital Experiences for a Tech Startup
                  </h3>
                  <p className="text-muted-foreground">
                    Varni Consultancy helped a fast-growing tech startup
                    redesign their website and mobile app, leading to a 30%
                    increase in user engagement and a 25% boost in conversions.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Read Case Study
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/CaseStudies-3.jpg"
                  width="550"
                  height="310"
                  alt="Case Study"
                  className="aspect-video overflow-hidden rounded-t-xl object-cover"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-xl font-semibold">
                    Optimizing Marketing Strategies for a Healthcare Provider
                  </h3>
                  <p className="text-muted-foreground">
                    Varni Consultancy helped a leading healthcare provider
                    develop a targeted marketing campaign, resulting in a 40%
                    increase in patient acquisition and a 35% improvement in
                    brand awareness.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Read Case Study
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Success Stories
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Hear from our satisfied clients about the impact Varni
                Consultancy has had on their business.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="space-y-4 p-4">
                  <div className="space-y-2">
                    <p className="text-lg font-medium">
                      "Varni Consultancy's expertise and strategic guidance\n
                      have been invaluable in helping us achieve our business\n
                      goals."
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src="/stories-1.jpg"
                        width="40"
                        height="40"
                        alt="Client Logo"
                        className="h-10 w-10 rounded-full object-contain"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }}
                      />
                      <div>
                        <p className="text-sm font-medium">John Doe, CEO</p>
                        <p className="text-sm text-muted-foreground">
                          Acme Inc.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4 p-4">
                  <div className="space-y-2">
                    <p className="text-lg font-medium">
                      "Varni Consultancy's innovative solutions have\n
                      transformed our business and helped us stay ahead of the\n
                      competition."
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src="/stories-2.jpg"
                        width="40"
                        height="40"
                        alt="Client Logo"
                        className="h-10 w-10 rounded-full object-contain"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }}
                      />
                      <div>
                        <p className="text-sm font-medium">Jane Smith, CFO</p>
                        <p className="text-sm text-muted-foreground">
                          Globex Corporation
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4 p-4">
                  <div className="space-y-2">
                    <p className="text-lg font-medium">
                      "Varni Consultancy's team of experts has been\n
                      instrumental in helping us navigate complex challenges\n
                      and achieve remarkable results."
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src="/stories-3.jpg"
                        width="40"
                        height="40"
                        alt="Client Logo"
                        className="h-10 w-10 rounded-full object-contain"
                        style={{ aspectRatio: "40/40", objectFit: "cover" }}
                      />
                      <div>
                        <p className="text-sm font-medium">
                          Michael Johnson, CTO
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Stark Industries
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
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