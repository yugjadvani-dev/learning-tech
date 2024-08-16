import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

export function Profile() {
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
          <Link to={'/'} className="hover:underline" >
            Events
          </Link>
          <Link to={'/'} className="hover:underline" >
            Profile
          </Link>
          <Link to={'/'} className="hover:underline" >
            Settings
          </Link>
          <Link to={'/'} className="hover:underline" >
            Logout
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">User Profile</h2>
        </div>
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">John Doe</CardTitle>
              <Button variant="outline">Edit Profile</Button>
            </div>
            <CardDescription>johndoe@example.com</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <p className="text-lg font-medium">About</p>
              <p>
                John Doe is a software engineer with a passion for building innovative web applications. He has been
                working in the industry for over 5 years and has a strong background in front-end development.
              </p>
            </div>
            <div className="grid gap-2">
              <p className="text-lg font-medium">Registered Events</p>
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Summer Picnic</CardTitle>
                    <CardDescription>June 15, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Join us for a fun-filled summer picnic at the park! Bring your family and friends and enjoy
                      delicious food, games, and activities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Holiday Party</CardTitle>
                    <CardDescription>December 20, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Celebrate the holidays with your colleagues at our annual holiday party. Enjoy festive drinks,
                      delicious food, and great company.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
