import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function CheckIn() {
  return (
    <div className="flex flex-col min-h-screen">
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
    </div>
  )
}