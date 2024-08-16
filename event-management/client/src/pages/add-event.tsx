
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"

export function AddEvent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-bold">John Doe</h1>
            <p className="text-sm">johndoe@example.com</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link to={'/'} className="hover:underline">
            Events
          </Link>
          <Link to={'/'} className="hover:underline">
            Profile
          </Link>
          <Link to={'/'} className="hover:underline">
            Settings
          </Link>
          <Link to={'/'} className="hover:underline">
            Logout
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Add Event</h2>
        </div>
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create a New Event</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="event-image">Event Image</Label>
              <Input id="event-image" type="file" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-name">Event Name</Label>
              <Input id="event-name" type="text" placeholder="Enter event name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-description">Event Description</Label>
              <Textarea id="event-description" placeholder="Enter event description" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create Event</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
