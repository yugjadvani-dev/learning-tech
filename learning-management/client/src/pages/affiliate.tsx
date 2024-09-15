import { Button } from "@/components/ui/button";

export function Affiliate() {
  return (
    <div className="w-full bg-background">
      <main>
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Earn Money with Our Affiliate Program
                </h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Join our affiliate program and start earning commissions by
                  promoting our learning management system to your audience.
                </p>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                  <Button>Sign Up Now</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div>
                <img
                  src="/earnmoney.jpg"
                  width="600"
                  height="400"
                  alt="Affiliate Program"
                  className="mx-auto rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Benefits of Our Affiliate Program
                </h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Earn commissions on every sale you refer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Access to a range of promotional materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Detailed reporting and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Dedicated support from our affiliate team</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Commission Structure
                </h2>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <div>
                    <p className="font-medium">Tier 1 Referrals</p>
                    <p>
                      Earn 20% commission on all sales from your direct
                      referrals.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Tier 2 Referrals</p>
                    <p>
                      Earn 10% commission on all sales from your referral's
                      referrals.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Recurring Commissions</p>
                    <p>
                      Earn commissions on all recurring payments from your
                      referrals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Promotional Materials
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Use these high-quality assets to promote our learning management
              system and start earning commissions today.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="photo-1.jpg"
                  width="200"
                  height="100"
                  alt="Banner 1"
                  className="rounded-lg"
                  style={{ aspectRatio: "200/100", objectFit: "cover" }}
                />
                <Button variant="link">Download</Button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/photo-2.jpg"
                  width="200"
                  height="100"
                  alt="Banner 2"
                  className="rounded-lg"
                  style={{ aspectRatio: "200/100", objectFit: "cover" }}
                />
                <Button variant="link">Download</Button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/photo-3.jpg"
                  width="200"
                  height="100"
                  alt="Logo"
                  className="rounded-lg"
                  style={{ aspectRatio: "200/100", objectFit: "cover" }}
                />
                <Button variant="link">Download</Button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/photo-4.jpg"
                  width="200"
                  height="100"
                  alt="Referral Link"
                  className="rounded-lg"
                  style={{ aspectRatio: "200/100", objectFit: "cover" }}
                />
                <Button variant="link">Copy Link</Button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/photo-5.jpg"
                  width="200"
                  height="100"
                  alt="Social Media Post"
                  className="rounded-lg"
                  style={{ aspectRatio: "200/100", objectFit: "cover" }}
                />
                <Button variant="link">Download</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
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
