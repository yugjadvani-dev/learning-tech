

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom";

export function ChackIn() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Ticket Booking
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/" className="hover:underline">
              Bookings
            </Link>
            <Link to="/" className="hover:underline">
              Support
            </Link>
            <Button variant="ghost" className="gap-2">
              <UserIcon className="w-5 h-5" />
              Account
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container mx-auto">
          <Tabs defaultValue="train" className="w-full max-w-4xl mx-auto">
            <TabsList className="flex border-b">
              <TabsTrigger value="train">Train</TabsTrigger>
              <TabsTrigger value="bus">Bus</TabsTrigger>
              <TabsTrigger value="flight">Flight</TabsTrigger>
            </TabsList>
            <TabsContent value="train">
              <div className="p-6 bg-background rounded-b-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Train Check-In</h2>
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seatNumber">Seat Number</Label>
                    <Input id="seatNumber" placeholder="Enter your seat number" />
                  </div>
                  <Button type="submit" className="w-full">
                    Confirm Check-In
                  </Button>
                </form>
              </div>
            </TabsContent>
            <TabsContent value="bus">
              <div className="p-6 bg-background rounded-b-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Bus Check-In</h2>
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seatNumber">Seat Number</Label>
                    <Input id="seatNumber" placeholder="Enter your seat number" />
                  </div>
                  <Button type="submit" className="w-full">
                    Confirm Check-In
                  </Button>
                </form>
              </div>
            </TabsContent>
            <TabsContent value="flight">
              <div className="p-6 bg-background rounded-b-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Flight Check-In</h2>
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seatNumber">Seat Number</Label>
                    <Input id="seatNumber" placeholder="Enter your seat number" />
                  </div>
                  <Button type="submit" className="w-full">
                    Confirm Check-In
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Ticket Booking</p>
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
  )
}

function UserIcon(props:any) {
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
  )
}
