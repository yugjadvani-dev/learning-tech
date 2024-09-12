import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <div className="grid w-full min-h-screen grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex flex-col items-start justify-center space-y-6 p-6 md:p-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-muted-foreground">
            Enter your credentials to access your account.
          </p>
        </div>
        <form className="space-y-4 w-full">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email/Username</Label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your email or username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between flex-col gap-4">
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <Link to="/" className="text-sm text-primary hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
      <div className="hidden md:block">
        <img
          src="/placeholder.svg"
          alt="Sign In"
          width="600"
          height="600"
          className="h-full w-full object-cover"
          style={{ aspectRatio: "600/600", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
