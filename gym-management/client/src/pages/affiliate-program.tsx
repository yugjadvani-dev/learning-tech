import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function AffiliateProgram() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Earn with our Affiliate Program
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join our affiliate program and start earning commissions by
                  promoting our fitness tracker to your audience.
                </p>
                <Button>Join Now</Button>
              </div>
              <img
                src="/program.jpg"
                width="600"
                height="400"
                alt="Affiliate Program"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Affiliate Program Details
                </h2>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Commission Rates</h3>
                    <p className="text-muted-foreground">
                      Earn up to 20% commission on every sale you refer.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Payment Terms</h3>
                    <p className="text-muted-foreground">
                      Get paid monthly via PayPal or direct bank transfer.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">How to Join</h3>
                    <p className="text-muted-foreground">
                      Sign up on our website and get access to your unique
                      affiliate link to start promoting.
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="mt-6">
                  Sign Up Now
                </Button>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  What Our Affiliates Say
                </h2>
                <div className="mt-6 space-y-6">
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-lg font-medium">
                          "The Fitness Tracker affiliate program has been a\n
                          game-changer for my business. The commission rates\n
                          are great, and the support team is always\n
                          responsive."
                        </p>
                        <p className="text-sm text-muted-foreground">
                          - John Doe, Fitness Blogger
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-lg font-medium">
                          "I've been an affiliate for Fitness Tracker for\n over
                          a year, and it's been a fantastic experience.\n The
                          product is great, and the commissions have\n really
                          helped grow my business."
                        </p>
                        <p className="text-sm text-muted-foreground">
                          - Sarah Miller, Health Coach
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Join Our Affiliate Program
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Start earning commissions by promoting our fitness tracker to
                your audience.
              </p>
              <Button>Sign Up Now</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
