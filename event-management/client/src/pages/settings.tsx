
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Toggle } from "@/components/ui/toggle"
import { Link } from "react-router-dom"

export function Settings() {
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
          <h2 className="text-2xl font-bold">Settings</h2>
        </div>
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Account Settings</CardTitle>
            </div>
            <CardDescription>Manage your account settings here.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <p className="text-lg font-medium">General</p>
              <div className="grid gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" defaultValue="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="johndoe@example.com" />
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <p className="text-lg font-medium">Notifications</p>
              <div className="grid gap-3">
                <div className="flex items-center gap-2">
                  <Checkbox id="email-notifications" defaultChecked />
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="push-notifications" defaultChecked />
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <p className="text-lg font-medium">Security</p>
              <div className="grid gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="2fa">Two-Factor Authentication</Label>
                  <Toggle id="2fa" defaultChecked />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
