
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function ChackStatus() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">Check Your Booking Status</h1>
        <p className="text-muted-foreground text-center mt-2">
          Enter your booking reference or ticket number to check the status of your reservation.
        </p>
      </div>
      <Tabs defaultValue="train" className="border-b border-muted">
        <TabsList className="flex gap-6">
          <TabsTrigger value="train">Train</TabsTrigger>
          <TabsTrigger value="bus">Bus</TabsTrigger>
          <TabsTrigger value="flight">Flight</TabsTrigger>
        </TabsList>
        <TabsContent value="train">
          <div className="py-8">
            <form className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="train-booking-ref">Booking Reference</Label>
                <Input id="train-booking-ref" placeholder="Enter your booking reference" />
              </div>
              <Button type="submit" className="w-full">
                Check Train Status
              </Button>
            </form>
          </div>
        </TabsContent>
        <TabsContent value="bus">
          <div className="py-8">
            <form className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="bus-booking-ref">Booking Reference</Label>
                <Input id="bus-booking-ref" placeholder="Enter your booking reference" />
              </div>
              <Button type="submit" className="w-full">
                Check Bus Status
              </Button>
            </form>
          </div>
        </TabsContent>
        <TabsContent value="flight">
          <div className="py-8">
            <form className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="flight-booking-ref">Ticket Number</Label>
                <Input id="flight-booking-ref" placeholder="Enter your ticket number" />
              </div>
              <Button type="submit" className="w-full">
                Check Flight Status
              </Button>
            </form>
          </div>
        </TabsContent>
      </Tabs>
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Booking Status</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Booking Reference</div>
              <div className="font-medium">ABC123</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Status</div>
              <div className="font-medium text-green-500">Confirmed</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Departure</div>
              <div className="font-medium">2023-05-15 10:00 AM</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Arrival</div>
              <div className="font-medium">2023-05-15 12:30 PM</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
