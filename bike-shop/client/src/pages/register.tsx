
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Register() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-muted-foreground">Create your account to get started.</p>
      </div>
      <Card>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 555-5555" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address (Optional)</Label>
            <Textarea id="address" placeholder="123 Main St, Anytown USA" />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </CardFooter>
      </Card>
      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/" className="underline">
          Login
        </Link>
      </div>
    </div>
  )
}
