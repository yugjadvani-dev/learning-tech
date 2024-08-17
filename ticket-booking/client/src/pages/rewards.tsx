
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Link } from "react-router-dom";

export function Rewards() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <TicketIcon className="w-6 h-6" />
          <span className="text-xl font-bold">Ticket Rewards</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/" className="hover:underline">
            Bookings
          </Link>
          <Link to="/" className="hover:underline">
            Rewards
          </Link>
          <Link to="/" className="hover:underline">
            Support
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-muted/40 py-12 px-6">
        <Tabs defaultValue="train">
          <TabsList className="flex border-b border-border">
            <TabsTrigger value="train">Train</TabsTrigger>
            <TabsTrigger value="bus">Bus</TabsTrigger>
            <TabsTrigger value="flight">Flight</TabsTrigger>
          </TabsList>
          <TabsContent value="train">
            <div className="grid gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Bank Partners</h2>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-background rounded-lg p-4 flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width={48}
                      height={48}
                      alt="Bank Logo"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div className="text-sm font-medium">Bank A</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width={48}
                      height={48}
                      alt="Bank Logo"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div className="text-sm font-medium">Bank B</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width={48}
                      height={48}
                      alt="Bank Logo"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div className="text-sm font-medium">Bank C</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">Earn Points</div>
                    <p className="text-muted-foreground">Earn 2x points on all train bookings.</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">Discounts</div>
                    <p className="text-muted-foreground">Get up to 20% off on train tickets.</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">Upgrades</div>
                    <p className="text-muted-foreground">Upgrade to first class for free on select routes.</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">Priority Boarding</div>
                    <p className="text-muted-foreground">Board the train before other passengers.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Rewards Earning</h2>
                <div className="bg-background rounded-lg p-4">
                  <div className="text-lg font-bold mb-2">Earn Points</div>
                  <p className="text-muted-foreground">
                    Earn 1 point for every $1 spent on train bookings. Earn bonus points for booking during off-peak
                    hours or referring friends.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Additional Benefits</h2>
                <div className="bg-background rounded-lg p-4">
                  <div className="text-lg font-bold mb-2">Lounge Access</div>
                  <p className="text-muted-foreground">Enjoy complimentary access to our train station lounges.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="bus">
            <div className="grid gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Bank Partners</h2>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-background rounded-lg p-4 flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width={48}
                      height={48}
                      alt="Bank Logo"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div className="text-sm font-medium">Bank D</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width={48}
                      height={48}
                      alt="Bank Logo"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div className="text-sm font-medium">Bank E</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width={48}
                      height={48}
                      alt="Bank Logo"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div className="text-sm font-medium">Bank F</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">Earn Points</div>
                    <p className="text-muted-foreground">Earn 3x points on all bus bookings.</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">Discounts</div>
                    <p className="text-muted-foreground">Get up to 15% off on bus tickets.</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">Upgrades</div>
                    <p className="text-muted-foreground">Upgrade to premium seating for free on select routes.</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">Priority Boarding</div>
                    <p className="text-muted-foreground">Board the bus before other passengers.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Rewards Earning</h2>
                <div className="bg-background rounded-lg p-4">
                  <div className="text-lg font-bold mb-2">Earn Points</div>
                  <p className="text-muted-foreground">
                    Earn 1 point for every $1 spent on bus bookings. Earn bonus points for booking during off-peak hours
                    or referring friends.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Additional Benefits</h2>
                <div className="bg-background rounded-lg p-4">
                  <div className="text-lg font-bold mb-2">Dedicated Support</div>
                  <p className="text-muted-foreground">Get priority support from our customer service team.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="flight">
            <div className="grid gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Bank Partners</h2>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-background rounded-lg p-4 flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width={48}
                      height={48}
                      alt="Bank Logo"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div className="text-sm font-medium">Bank G</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width={48}
                      height={48}
                      alt="Bank Logo"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div className="text-sm font-medium">Bank H</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width={48}
                      height={48}
                      alt="Bank Logo"
                      style={{ aspectRatio: "48/48", objectFit: "cover" }}
                    />
                    <div className="text-sm font-medium">Bank I</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">Earn Points</div>
                    <p className="text-muted-foreground">Earn 4x points on all flight bookings.</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">Discounts</div>
                    <p className="text-muted-foreground">Get up to 25% off on flight tickets.</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">Upgrades</div>
                    <p className="text-muted-foreground">Upgrade to business class for free on select routes.</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">Lounge Access</div>
                    <p className="text-muted-foreground">Enjoy complimentary access to our airport lounges.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Rewards Earning</h2>
                <div className="bg-background rounded-lg p-4">
                  <div className="text-lg font-bold mb-2">Earn Points</div>
                  <p className="text-muted-foreground">
                    Earn 1 point for every $1 spent on flight bookings. Earn bonus points for booking during off-peak
                    hours or referring friends.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Additional Benefits</h2>
                <div className="bg-background rounded-lg p-4">
                  <div className="text-lg font-bold mb-2">Travel Insurance</div>
                  <p className="text-muted-foreground">Get complimentary travel insurance coverage for your flights.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="text-sm">&copy; 2024 Ticket Rewards. All rights reserved.</div>
        <nav className="flex items-center gap-4">
          <Link to="/" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:underline">
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function TicketIcon(props:any) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}
