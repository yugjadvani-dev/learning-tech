
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-10 px-6">
        <Tabs defaultValue="train">
          <TabsList className="border-b">
            <TabsTrigger value="train">Train</TabsTrigger>
            <TabsTrigger value="bus">Bus</TabsTrigger>
            <TabsTrigger value="flight">Flight</TabsTrigger>
          </TabsList>
          <TabsContent value="train">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Train Ticket</CardTitle>
                  <CardDescription>Booked on 2023-04-15</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-muted-foreground">Route</div>
                      <div>New York to Chicago</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Departure</div>
                      <div>9:00 AM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Arrival</div>
                      <div>5:00 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ticket #</div>
                      <div>TR-123456</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Train Ticket</CardTitle>
                  <CardDescription>Booked on 2023-03-20</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-muted-foreground">Route</div>
                      <div>Los Angeles to San Francisco</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Departure</div>
                      <div>7:30 AM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Arrival</div>
                      <div>3:00 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ticket #</div>
                      <div>TR-654321</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="bus">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bus Ticket</CardTitle>
                  <CardDescription>Booked on 2023-05-01</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-muted-foreground">Route</div>
                      <div>Seattle to Portland</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Departure</div>
                      <div>11:00 AM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Arrival</div>
                      <div>3:00 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ticket #</div>
                      <div>BS-789012</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bus Ticket</CardTitle>
                  <CardDescription>Booked on 2023-04-25</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-muted-foreground">Route</div>
                      <div>Boston to New York</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Departure</div>
                      <div>6:30 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Arrival</div>
                      <div>10:00 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ticket #</div>
                      <div>BS-456789</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="flight">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Flight Ticket</CardTitle>
                  <CardDescription>Booked on 2023-06-10</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-muted-foreground">Route</div>
                      <div>Miami to New York</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Departure</div>
                      <div>8:00 AM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Arrival</div>
                      <div>11:00 AM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ticket #</div>
                      <div>FL-147852</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Flight Ticket</CardTitle>
                  <CardDescription>Booked on 2023-05-28</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-muted-foreground">Route</div>
                      <div>Chicago to San Diego</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Departure</div>
                      <div>6:00 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Arrival</div>
                      <div>9:00 PM</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ticket #</div>
                      <div>FL-369258</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}