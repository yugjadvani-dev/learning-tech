import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function EventDetails() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Event Details</h2>
        </div>
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Summer Picnic</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <img
                src="/events.webp"
                alt="Event Image"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full aspect-[2/1]"
              />
            </div>
            <div className="grid gap-2">
              <p className="text-lg font-medium">Event Description</p>
              <p>
                Join us for a fun-filled summer picnic at the park! Bring your
                family and friends and enjoy delicious food, games, and
                activities. It's the perfect way to soak up the sun and make
                lasting memories.
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-lg font-medium">Event Details</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p>June 15, 2023</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p>12:00 PM - 5:00 PM</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>Central Park, New York</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Organizer</p>
                  <p>John Doe</p>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <p className="text-lg font-medium">Attendees</p>
              <div className="flex flex-wrap gap-2">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Attendee 1" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Attendee 2" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Attendee 3" />
                  <AvatarFallback>LW</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Attendee 4" />
                  <AvatarFallback>KS</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Attendee 5" />
                  <AvatarFallback>EM</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">RSVP</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
