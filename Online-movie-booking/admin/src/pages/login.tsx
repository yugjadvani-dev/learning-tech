
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">Admin Login</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Enter your credentials to access the admin dashboard
          </p>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Label htmlFor="email">Email or Username</Label>
            <Input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              required
              className="mt-1 block w-full"
              placeholder="Enter your email or username"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link to="/" className="font-medium text-primary hover:text-primary-foreground" 
              >
                Forgot Password?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <Label htmlFor="twoFactorCode">Two-Factor Authentication</Label>
            <Input
              id="twoFactorCode"
              name="twoFactorCode"
              type="text"
              autoComplete="one-time-code"
              required
              className="mt-1 block w-full"
              placeholder="Enter your 2FA code"
            />
          </div>
          <div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
